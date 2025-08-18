'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fetchRateById, fetchAccommodationTypeById, fetchReviews } from '@/app/api'
import ImageGallery from '@/components/gallery'
import Rating from '@/components/rating'
import BookingForm from '@/components/bookingForm'
import Testimonial from '@/components/testimonies'

import { RiHome4Line, RiHotelBedLine, RiShowersLine, RiRulerLine, RiUserLine, RiRestaurantLine, RiCheckLine, RiBrushLine, RiCalendarCheckLine, RiKeyLine, RiGroupLine, RiChat3Line, RiPhoneLine, RiMapPinLine, RiCheckDoubleLine } from 'react-icons/ri'
import TrendingProperties from '@/components/trendingProperties'
import { useSearchParams } from 'next/navigation';
import Custom404 from '@/app/404/page'
import Loader from '@/components/loader'
import { useToast } from '@/context/toastContext'

export default function DetailPage() {

  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('Overview')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  const tabs = [
    { id: 'Overview', label: 'Overview', href: '#overview' },
    { id: 'Reviews', label: 'Reviews', href: '#reviews' },
    { id: 'Pricing', label: 'Pricing', href: '#pricing' },
    { id: 'Policies', label: 'Policies', href: '#policies' },
    { id: 'Sales', label: 'Contact Sales', href: '#sales' }
  ];

  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // Gets `id=62`

  const { addToast } = useToast();

  if (!id) return <Custom404 />;

  useEffect(() => {
    const loadProperty = async () => {

      try {
        setLoading(true)

        const rate = await fetchRateById(id)
        if (rate?.data?.status === 404) return false
        // Fetch accommodation data
        const accommodation = await fetchAccommodationTypeById(rate?.accommodation_type_id)
        const review = await fetchReviews(rate?.accommodation_type_id)

        const reviewLength = review?.data?.length

        // Calculate average rating
        const avgRating = reviewLength > 0
          ? review?.data?.reduce((sum, review) => sum + parseInt(review.rating), 0) / reviewLength
          : 0 // Default if no reviews

        // Combine the data
        setProperty({
          ...rate,
          ...accommodation,
          rating: avgRating,
          numbersOfReviews: reviewLength,
          basePrice: rate.season_prices?.[0]?.base_price || 0,
          totalCapacity: accommodation.adults + accommodation.children
        })
      } catch (error) {
        addToast(`Error loading properties`, 'error')
      } finally {
        setLoading(false)
      }
    }

    loadProperty()
  }, [id])

  useEffect(() => {
    const activeElement = document.querySelector('.active-tab')
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth
      })
    }
  }, [activeTab])

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    )
  }

  if (!property) {
    return (
      <section className="pt-24 bg-light">
        <div className="container min-h-[50vh] mx-auto px-4 py-8 max-w-7xl flex justify-center items-center">
          <p>Property not found</p>
        </div>
      </section>
    )
  }

  return (
    <section>
      {/* <!-- Property Header --> */}
      <section className='bg-light pt-28'>
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="md:text-4xl text-2xl font-bold">{property?.title}</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-1 overflow-auto mb-4">
            <div className='flex items-center mt-2'>
              <Rating initialValue={property?.rating} className="mr-2" />
              <span className="text-gray-600 text-sm">{property?.rating} ({property?.numbersOfReviews} review(s))</span>
            </div>
            <div className='flex items-center mt-2'>
              <span className="mx-3 text-gray-300 hidden sm:block">|</span>
              <span className="text-gray-600 text-sm flex items-center">
                <RiMapPinLine className="mr-2" /> {property?.view || 'Location not specified'}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <ImageGallery images={property.images || []} />

        {/* <!-- Main Content --> */}
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* <!-- Left Column --> */}
            <div className="lg:w-2/3">
              {/* <!-- Navigation Tabs --> */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="relative flex space-x-8 overflow-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`py-3 relative text-sm font-medium transition-colors ${activeTab === tab.id ? 'text-accent border-b border-accent active-tab' : 'text-gray-600 hover:text-accent '}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <span className="relative z-10">{tab.label}</span>
                      {activeTab === tab.id && (
                        <motion.div
                          className="absolute bottom-0 h-0.5"
                          initial={false}
                          animate={{
                            left: indicatorStyle.left,
                            width: indicatorStyle.width
                          }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          style={{ originX: 0 }}
                        />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'Overview' && (
                  <motion.section
                    key="overview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* <!-- Overview Section --> */}
                    <section className="mb-12">
                      <h2 className="text-2xl font-bold mb-4">{property.title}</h2>
                      <p className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: property.description || 'No description available' }}></p>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="flex items-start">
                          <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-full mr-4 mt-1">
                            <RiHotelBedLine className="text-accent" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Bedroom</h3>
                            <p className="text-gray-600">{property.bed_type || 'N/A'}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-full mr-4 mt-1">
                            <RiHome4Line className="text-accent" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Category</h3>
                            <p className="text-gray-600">{property?.categories[0]?.name} Room(s)</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-full mr-4 mt-1">
                            <RiRulerLine className="text-accent" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Size</h3>
                            <p className="text-gray-600">{property.size ? `${property.size} sqft` : 'N/A'}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-full mr-4 mt-1">
                            <RiUserLine className="text-accent" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Occupancy</h3>
                            <p className="text-gray-600">Up to {property.adults} adults, {property.children} children</p>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* <!-- Room Features Section --> */}
                    <section className="mb-12">
                      <h2 className="text-2xl font-bold mb-6">Amenities</h2>

                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        <div className='flex gap-x-6 gap-y-1 overflow-auto text-nowrap'>
                          <h3 className="font-bold mb-3 flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center bg-accent/10 rounded-full mr-3">
                              <RiHome4Line className="text-accent" />
                            </div>
                            Living Area
                          </h3>
                          <h3 className="font-bold mb-3 flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center bg-accent/10 rounded-full mr-3">
                              <RiRestaurantLine className="text-accent" />
                            </div>
                            Kitchen
                          </h3>
                          <h3 className="font-bold mb-3 flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center bg-accent/10 rounded-full mr-3">
                              <RiHotelBedLine className="text-accent" />
                            </div>
                            Bedroom
                          </h3>
                          <h3 className="font-bold mb-3 flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center bg-accent/10 rounded-full mr-3">
                              <RiShowersLine className="text-accent" />
                            </div>
                            Bathroom
                          </h3>
                        </div>
                        {property.amenities.length > 0 ?
                          <div className="border-t border-b border-gray-200">
                            <div className="flex flex-wrap gap-4">
                              {property.amenities?.map((amenity, index) => (
                                <span key={index} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm flex items-center">
                                  <RiCheckDoubleLine className="mr-2 text-accent" /> {amenity.name}
                                </span>
                              ))}
                            </div>
                          </div>
                          :
                          <h4>No Amenities</h4>
                        }

                      </div>
                    </section>

                    {/* <!-- Services & Amenities --> */}
                    <section className="mb-12">
                      <h2 className="text-2xl font-bold mb-6">Services</h2>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 overflow-auto">
                        {property.services.map((item, index) => (
                          <div key={index} className="amenity-item flex items-center p-3 rounded-lg hover:bg-pale cursor-pointer">
                            <div className="amenity-icon w-10 h-10 flex items-center justify-center bg-accent/10 rounded-full mr-3 text-accent">
                              <RiBrushLine />
                            </div>
                            <span className='text-nowrap'>{item.title}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </motion.section>
                )}

                {activeTab === 'Reviews' && (
                  <motion.section
                    key="reviews"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* <!-- Reviews Preview --> */}
                    <section className="bg-white text-nowrap overflow-auto" id="reviews">
                      <Testimonial />
                    </section>
                  </motion.section>
                )}

                {activeTab === 'Pricing' && (
                  <motion.section
                    key="Pricing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* <!-- Pricing Plans --> */}
                    <div className="bg-white rounded-xl mt-6 p-6">
                      <h3 className="font-bold mb-4">Pricing Plans</h3>

                      <div className="space-y-4">
                        {/* Nightly Rate (base price) */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-bold mb-2">Nightly Rate</h4>
                          <p className="text-gray-600 text-sm mb-3">Great for short visits</p>
                          <div className="flex items-end">
                            <span className="text-2xl font-bold">
                              {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format((property.basePrice))?.toLocaleString()}
                            </span>
                            <span className="text-gray-500 text-sm ml-1">/night</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                )}

                {activeTab === 'Policies' && (
                  <motion.section
                    key="Policies"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* <!-- Booking Policies --> */}
                    <section className="mb-12">
                      <h2 className="text-2xl font-bold mb-6">Booking Policies</h2>

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-bold mb-2 flex items-center">
                            <RiCalendarCheckLine className="text-accent mr-2" />
                            Cancellation Policy
                          </h3>
                          <p className="text-gray-600">Free cancellation up to 14 days before check-in. After that, cancel up to 24 hours before check-in and get a 50% refund (minus service fees).</p>
                        </div>

                        <div>
                          <h3 className="font-bold mb-2 flex items-center">
                            <RiKeyLine className="text-accent mr-2" />
                            Check-in/Check-out
                          </h3>
                          <p className="text-gray-600">Check-in: 3:00 PM | Check-out: 11:00 AM</p>
                          <p className="text-gray-600 text-sm mt-1">Early check-in and late check-out subject to availability</p>
                        </div>

                        <div>
                          <h3 className="font-bold mb-2 flex items-center">
                            <RiGroupLine className="text-accent mr-2" />
                            House Rules
                          </h3>
                          <ul className="text-gray-600 space-y-2">
                            <li className="flex items-start">
                              <RiCheckLine className="text-accent mr-2 mt-1" />
                              <span>No smoking</span>
                            </li>
                            <li className="flex items-start">
                              <RiCheckLine className="text-accent mr-2 mt-1" />
                              <span>No parties or events</span>
                            </li>
                            <li className="flex items-start">
                              <RiCheckLine className="text-accent mr-2 mt-1" />
                              <span>Pets allowed with prior approval (fee applies)</span>
                            </li>
                            <li className="flex items-start">
                              <RiCheckLine className="text-accent mr-2 mt-1" />
                              <span>Quiet hours after 10 PM</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  </motion.section>
                )}

                {activeTab === 'Sales' && (
                  <motion.section
                    key="Sales"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* <!-- Contact Host --> */}
                    <div className="bg-white rounded-xl mt-6 p-6">
                      <h3 className="font-bold mb-4">Contact Property Manager</h3>
                      <p className="text-gray-600 text-sm mb-4">Have questions about this property? Our team is happy to help.</p>

                      <a href="mailto:viveeaura@gmail.com" className="flex w-full justify-center bg-white border border-accent text-accent hover:bg-accent/10 py-3 font-medium !rounded-button mb-2">
                        <RiChat3Line className="mr-2" /> Email
                      </a>
                      <a href="tel:+2348032870434" className="flex justify-center w-full bg-white border border-gray-300 text-gray-700 hover:border-accent hover:text-accent py-3 font-medium !rounded-button">
                        <RiPhoneLine className="mr-2" /> Call
                      </a>
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </div>

            {/* <!-- Right Column - Booking Widget --> */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl sticky top-6 p-6">
                <div className="flex flex-wrap gap-x-4 gap-y-1 overflow-auto mb-4">
                  <div>
                    <span className="text-2xl font-bold">{new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format((property.basePrice)).toLocaleString()}</span>
                    <span className="text-gray-500">/ night</span>
                  </div>
                  <div className="flex">
                    <Rating initialValue={property.rating} />
                    <span className="text-gray-500 text-sm ml-1">{property.rating} ({property.numbersOfReviews} reviews)</span>
                  </div>
                </div>

                <BookingForm classes={true} accommodationTypeId={property.id} isSearchPage />
              </div>
            </div>
          </div>
        </main>

        {/* <!-- Similar Properties --> */}
        <TrendingProperties />

      </section>
    </section>
  )
}