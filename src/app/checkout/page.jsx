// app/checkout/page.js
'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { RiPencilLine, RiArrowRightLine, RiBankCardLine, RiShieldCheckLine, RiFlutterFill } from 'react-icons/ri'
import { createBooking, fetchRateById, fetchAccommodationTypeById, fetchBooking, payWithPaystack, payWithFlutterwave } from '@/app/api'
import Loader from '@/components/Loader'
import AdditionalServices from '@/components/AdditionalServices'
import PaystackPop from '@paystack/inline-js';

export default function CheckOut() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [bookingData, setBookingData] = useState(null)
  const [activeStep, setActiveStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [bookingIntent, setBookingIntent] = useState(null);

  const [servicesData, setServicesData] = useState({
    selectedServiceIds: [],
    selectedServices: [],
    total: 0
  })

  // Get booking parameters from URL
  const rateId = searchParams.get('rate_id')
  const checkIn = searchParams.get('check_in')
  const checkOut = searchParams.get('check_out')
  const adults = searchParams.get('adults')
  const children = searchParams.get('children')
  const apartmentId = searchParams.get('apartment_id')

  const [formData, setFormData] = useState({
    customer: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      country: '',
      state: '',
      city: '',
      zip: '',
      address1: ''
    },
    check_in_date: checkIn, // Should come from booking context
    check_out_date: checkOut, // Should come from booking context
    reserved_accommodations: [{
      accommodation: 1, // Should come from booking context
      adults: adults,
      children: children,
      guest_name: '',
      services: [{
        id: servicesData.selectedServiceIds[0],
        adults: adults,
        quantity: 1
      }]
    }],
    coupon_code: '',
    note: ''
  })
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(null)

  useEffect(() => {
    const loadBookingData = async () => {
      try {
        // Fetch property details
        const [rateDetails, accommodationDetails] = await Promise.all([
          fetchRateById(rateId),
          fetchAccommodationTypeById(apartmentId),
        ])

        // Calculate number of nights
        const checkInDate = new Date(checkIn)
        const checkOutDate = new Date(checkOut)
        const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))

        // Calculate total price
        const basePrice = rateDetails.season_prices?.[0]?.base_price || 0
        const serviceFee = servicesData.total

        setBookingData({
          property: {
            ...rateDetails,
            ...accommodationDetails
          },
          dates: {
            checkIn,
            checkOut,
            nights
          },
          guests: {
            adults,
            children
          },
          pricing: {
            basePrice,
            serviceFee,
            total: basePrice * nights + serviceFee
          }
        })

      } catch (error) {
        console.error('Error loading booking data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (rateId && apartmentId) loadBookingData()

  }, [rateId, checkIn, checkOut, adults, children, router, servicesData])

  useEffect(() => {
    const previousBooking = async () => {
      const bookingId = localStorage.getItem("bookingId");
      if (bookingId) {
        const initialBooking = await fetchBooking(bookingId)
        if (initialBooking.status === "pending-payment") {
          redirectToPaystack(initialBooking);
        }
      }
    }
    previousBooking()
  }, []);

  const redirectToPaystack = (booking) => {
    const handler = PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: booking.customer.email,
      amount: booking.total_price * 100, // kobo
      currency: "NGN",
      callback: async (response) => {
        // Save payment reference & confirm booking
        await confirmBookingViaBridge(booking.id, 'paystack', response.reference);
      },
      onClose: () => alert("Payment cancelled")
    });
    handler.openIframe();
  };

  const handleServiceSelection = (data) => {
    setServicesData(data)
    // Update form data with selected services
    setFormData(prev => ({
      ...prev,
      reserved_accommodations: [{
        ...prev.reserved_accommodations[0],
        services: data.selectedServiceIds
      }]
    }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name.includes('customer.')) {
      const field = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        customer: {
          ...prev.customer,
          [field]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleBooking = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const booking = await createBooking({
        ...formData,
        status: 'pending-payment' // Initial status
      })

      setBookingIntent(booking);
      setActiveStep(2)
    } catch (err) {
      setError('Failed to process booking. Please try again.')
      console.error('Booking error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handlePayment = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Handle payment based on selected method
      if (paymentMethod === 'flutter_wave') {
        // Redirect to flutterwave
        const data = await payWithFlutterwave()
        if (data?.link) {
          location.href = data.link;
        } else {
          alert(data?.error || 'Could not start Flutterwave');
        }
      } else if (paymentMethod === 'paystack') {
        // Process Paystack payment
        const data = await payWithPaystack()
        if (data?.authorization_url) {
          location.href = data.authorization_url;
        } else {
          alert(data?.error || 'Could not start Paystack');
        }
      }
    } catch (err) {
      setError('Failed to process payment. Please try again.')
      console.error('payment error:', err)
    } finally {
      setLoading(false)
    }
  }

  const nextStep = () => {
    setActiveStep(prev => Math.min(prev + 1, 3))
    scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (<Loader />)
  }

  if (!bookingData) {
    return (
      <section className="pt-28">
        <div className="container mx-auto px-4 py-16 max-w-7xl text-center">
          <h2 className="text-2xl font-bold mb-4">Booking Not Found</h2>
          <p className="mb-6">We couldn't retrieve your booking details.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-28">
      {/* Progress Steps */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between max-w-3xl mx-auto">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`checkout-step flex flex-col items-center border-b-2 ${activeStep >= step ? 'border-accent' : 'border-gray-200'} pb-2 w-1/3`}
              >
                <div className={`step-number w-8 h-8 flex items-center justify-center ${activeStep >= step ? 'bg-accent text-white' : 'bg-gray-200'} rounded-full mb-2 font-medium`}>
                  {step}
                </div>
                <span className={`text-sm ${activeStep >= step ? 'font-medium' : 'text-gray-500'}`}>
                  {step === 1 ? 'Your Details' : step === 2 ? 'Payment' : 'Confirmation'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-light">
        <div className="flex flex-col lg:flex-row gap-8 container mx-auto px-4 py-16 max-w-7xl">

          {/* Left Column - Booking Form */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6">Complete Your Booking</h2>

            <form onSubmit={handleBooking}>
              {/* Step 1: Guest Information */}
              {activeStep === 1 && (
                <>
                  {/* Property Summary */}
                  <div className="bg-white rounded-lg p-6 mb-8">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="w-full sm:w-1/3">
                        <img
                          src={bookingData.property.images?.[0]?.src}
                          alt={bookingData.property.title}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <div className="w-full sm:w-2/3">
                        <h3 className="text-xl font-bold mb-2">{bookingData.property.title}</h3>
                        <p className="text-gray-600 mb-4">{bookingData.property.view || 'Location not specified'}</p>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500">Check-in</p>
                            <p className="font-medium">
                              {new Date(bookingData.dates.checkIn).toLocaleDateString('en-NG', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Check-out</p>
                            <p className="font-medium">
                              {new Date(bookingData.dates.checkOut).toLocaleDateString('en-NG', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Guests</p>
                            <p className="font-medium">
                              {bookingData.guests.adults} {bookingData.guests.adults === '1' ? 'adult' : 'adults'}
                              {bookingData.guests.children !== '0' && `, ${bookingData.guests.children} ${bookingData.guests.children === '1' ? 'child' : 'children'}`}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Nights</p>
                            <p className="font-medium">{bookingData.dates.nights}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => router.push(`/apartments/details?id=${rateId}`)}
                          className="text-accent font-medium text-sm flex items-center"
                        >
                          <RiPencilLine className="mr-1" /> Edit booking details
                        </button>
                      </div>
                    </div>
                  </div>

                  <AdditionalServices
                    accommodationTypeId={apartmentId}
                    onSelectionChange={handleServiceSelection}
                  />

                  <div className="bg-white rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold mb-6">Guest Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                        <input
                          type="text"
                          name="customer.first_name"
                          value={formData.customer.first_name}
                          onChange={handleInputChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && activeStep < 3) {
                              e.preventDefault();
                              nextStep();
                            }
                          }}
                          className="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                        <input
                          type="text"
                          name="customer.last_name"
                          value={formData.customer.last_name}
                          onChange={handleInputChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && activeStep < 3) {
                              e.preventDefault();
                              nextStep();
                            }
                          }}
                          className="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                        <input
                          type="email"
                          name="customer.email"
                          value={formData.customer.email}
                          onChange={handleInputChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && activeStep < 3) {
                              e.preventDefault();
                              nextStep();
                            }
                          }}
                          className="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                        <input
                          type="tel"
                          name="customer.phone"
                          value={formData.customer.phone}
                          onChange={handleInputChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && activeStep < 3) {
                              e.preventDefault();
                              nextStep();
                            }
                          }}
                          className="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                          type="text"
                          name="customer.country"
                          value={formData.customer.country}
                          onChange={handleInputChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && activeStep < 3) {
                              e.preventDefault();
                              nextStep();
                            }
                          }}
                          className="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                        <input
                          type="text"
                          name="customer.state"
                          value={formData.customer.state}
                          onChange={handleInputChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && activeStep < 3) {
                              e.preventDefault();
                              nextStep();
                            }
                          }}
                          className="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                          type="text"
                          name="customer.city"
                          value={formData.customer.city}
                          onChange={handleInputChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && activeStep < 3) {
                              e.preventDefault();
                              nextStep();
                            }
                          }}
                          className="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Coupon Code</label>
                        <input
                          type="text"
                          name="coupon_code"
                          value={formData.coupon_code}
                          onChange={handleInputChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && activeStep < 3) {
                              e.preventDefault();
                              nextStep();
                            }
                          }}
                          className="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
                      <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        className="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent h-24"
                        placeholder="Early check-in, late check-out, etc."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`bg-accent w-full block justify-end hover:bg-accent/90 text-white px-8 py-3 font-medium rounded-lg ${loading ? 'opacity-70' : ''}`}
                    >
                      {loading ? 'Creating booking…' : 'Create Booking'}
                    </button>
                  </div>
                </>
              )}
            </form>

            {/* Step 2: Payment Method */}
            {activeStep === 2 && (
              <div className="bg-white rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-6">Payment Method</h3>

                <div className="space-y-4 mb-6">
                  {[
                    { id: 'flutter_wave', label: 'Flutter Wave', icon: <RiFlutterFill className="text-green-500" /> },
                    { id: 'paystack', label: 'Paystack', icon: <RiBankCardLine className="text-purple-500" /> }
                  ].map((method) => (
                    <div
                      key={method.id}
                      className={`payment-method p-4 border-2 rounded-lg cursor-pointer ${paymentMethod === method.id ? 'border-accent bg-pale' : 'border-gray-200 hover:border-accent'}`}
                      onClick={() => setPaymentMethod(method.id)}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full mr-4">
                          {method.icon}
                        </div>
                        <span className="font-medium">{method.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handlePayment}
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-medium rounded-lg"
                >
                  {loading ? 'Processing...' : `Continue to Payment`} <RiArrowRightLine className="ml-2 inline" />
                </button>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">

              <button
                type="button"
                onClick={nextStep}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-medium rounded-lg"
              >
                {loading ? 'Processing...' : `Continue to Payment`} <RiArrowRightLine className="ml-2 inline" />
              </button>

            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl sticky top-6 p-6">
              <h3 className="text-xl font-bold mb-6">Booking Summary</h3>

              <div className="border-b border-gray-200 pb-4 mb-4">
                <h4 className="font-bold mb-2">{bookingData.property.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{bookingData.property.view || 'Location not specified'}</p>
                <p className="text-gray-600 text-sm">
                  {new Date(formData.check_in_date).toLocaleDateString()} - {new Date(formData.check_out_date).toLocaleDateString()}
                </p>
              </div>

              {/* <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">{new Intl.NumberFormat('en-NG', {
                    style: 'currency',
                    currency: 'NGN'
                  }).format(bookingData?.pricing?.basePrice)} x {bookingData?.dates?.nights} night(s)</span>
                  <span>{new Intl.NumberFormat('en-NG', {
                    style: 'currency',
                    currency: 'NGN'
                  }).format(bookingData?.pricing?.basePrice * bookingData?.dates?.nights)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Cleaning fee</span>
                  <span>$125</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Service fee</span>
                  <span>$214</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Taxes</span>
                  <span>Are applicable</span>
                </div>
              </div> */}

              <div className="flex justify-between font-bold text-lg border-b border-gray-200 pb-4 mb-4">
                <span>Total</span>
                <span>{new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN'
                }).format(bookingData?.pricing?.total)}</span>
              </div>

              <div className="bg-pale rounded-lg p-4 mb-6">
                <h4 className="font-bold mb-2 flex items-center">
                  <RiShieldCheckLine className="text-accent mr-2" />
                  Booking Protection
                </h4>
                <p className="text-gray-600 text-sm">Your booking is protected by our comprehensive guarantee.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section >
  )
}
