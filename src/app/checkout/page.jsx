import { RiPencilLine } from "react-icons/ri";

export default function CheckOut() {
  return (
    <section className="pt-20">
      {/* <!-- Progress Steps --> */}
      <section class="bg-white border-b border-gray-100">
        <div class="container mx-auto px-4 py-8 max-w-7xl">
          <div class="flex justify-between max-w-3xl mx-auto">
            {/* <!-- Step 1 --> */}
            <div class="checkout-step active flex flex-col items-center border-b-2 border-accent pb-2 w-1/3">
              <div class="step-number w-8 h-8 flex items-center justify-center bg-accent text-white rounded-full mb-2 font-medium">1</div>
              <span class="text-sm font-medium">Your Details</span>
            </div>

            {/* <!-- Step 2 --> */}
            <div class="checkout-step flex flex-col items-center border-b-2 border-gray-200 pb-2 w-1/3">
              <div class="step-number w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full mb-2 font-medium">2</div>
              <span class="text-sm text-gray-500">Payment</span>
            </div>

            {/* <!-- Step 3 --> */}
            <div class="checkout-step flex flex-col items-center border-b-2 border-gray-200 pb-2 w-1/3">
              <div class="step-number w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full mb-2 font-medium">3</div>
              <span class="text-sm text-gray-500">Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Main Content --> */}
      <main class="bg-light">
        <div class="flex flex-col lg:flex-row gap-8 container mx-auto px-4 py-16 max-w-7xl">
          {/* <!-- Left Column - Booking Form --> */}
          <div class="lg:w-2/3">
            <h2 class="text-2xl font-bold mb-6">Complete Your Booking</h2>

            {/* <!-- Property Summary --> */}
            <div class="bg-white rounded-lg p-6 mb-8">
              <div class="flex flex-col sm:flex-row gap-6">
                <div class="w-full sm:w-1/3">
                  <img src="https://public.readdy.ai/ai/img_res/bc7391e00b75163867c80669bf39525c.jpg" alt="Luxury Soho Loft" class="w-full h-auto rounded-lg" />
                </div>
                <div class="w-full sm:w-2/3">
                  <h3 class="text-xl font-bold mb-2">Luxury Soho Loft</h3>
                  <p class="text-gray-600 mb-4">Soho, Manhattan</p>

                  <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p class="text-sm text-gray-500">Check-in</p>
                      <p class="font-medium">Fri, Jun 15, 2024</p>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">Check-out</p>
                      <p class="font-medium">Wed, Jun 20, 2024</p>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">Guests</p>
                      <p class="font-medium">2 adults</p>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">Nights</p>
                      <p class="font-medium">5</p>
                    </div>
                  </div>

                  <a href="/apartments/1" class="text-accent font-medium text-sm flex items-center">
                    <RiPencilLine class="mr-1" /> Edit booking details
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Guest Information --> */}
            <div class="bg-white rounded-lg p-6 mb-8">
              <h3 class="text-xl font-bold mb-6">Guest Information</h3>

              <form>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                    <input type="text" class="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent" required />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                    <input type="text" class="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent" required />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <input type="email" class="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent" required />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                    <input type="tel" class="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent" required />
                  </div>
                </div>

                <div class="mb-6">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
                  <textarea class="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent h-24" placeholder="Early check-in, late check-out, etc."></textarea>
                </div>

                <div class="flex items-center mb-6">
                  <input type="checkbox" id="create-account" class="mr-2 rounded border-gray-300 text-accent focus:ring-accent" />
                  <label for="create-account" class="text-sm text-gray-700">Create a Vivee account for faster booking next time</label>
                </div>
              </form>
            </div>

            {/* <!-- Payment Method --> */}
            <div class="bg-white rounded-lg p-6 mb-8">
              <h3 class="text-xl font-bold mb-6">Payment Method</h3>

              <div class="space-y-4 mb-6">
                {/* <!-- Credit Card --> */}
                <div class="payment-method selected p-4 border-2 border-accent rounded-lg cursor-pointer bg-pale">
                  <div class="flex items-center">
                    <div class="w-10 h-10 flex items-center justify-center bg-white rounded-full mr-4">
                      <i class="ri-bank-card-line text-accent"></i>
                    </div>
                    <span class="font-medium">Credit/Debit Card</span>
                  </div>
                </div>

                {/* <!-- PayPal --> */}
                <div class="payment-method p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-accent">
                  <div class="flex items-center">
                    <div class="w-10 h-10 flex items-center justify-center bg-white rounded-full mr-4">
                      <i class="ri-paypal-line text-blue-500"></i>
                    </div>
                    <span class="font-medium">PayPal</span>
                  </div>
                </div>

                {/* <!-- Bank Transfer --> */}
                <div class="payment-method p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-accent">
                  <div class="flex items-center">
                    <div class="w-10 h-10 flex items-center justify-center bg-white rounded-full mr-4">
                      <i class="ri-bank-line text-green-500"></i>
                    </div>
                    <span class="font-medium">Bank Transfer</span>
                  </div>
                </div>
              </div>

              {/* <!-- Credit Card Form (shown when credit card selected) --> */}
              <div class="bg-gray-50 p-6 rounded-lg">
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Card Number*</label>
                  <div class="relative">
                    <input type="text" class="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent" placeholder="1234 5678 9012 3456" required />
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                      <div class="flex space-x-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg" class="w-6 h-4" alt="Visa" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mastercard/mastercard-original.svg" class="w-6 h-4" alt="Mastercard" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" class="w-6 h-4" alt="Apple Pay" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Expiration Date*</label>
                    <input type="text" class="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent" placeholder="MM/YY" required />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Security Code*</label>
                    <div class="relative">
                      <input type="text" class="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent" placeholder="CVC" required />
                      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <i class="ri-question-line text-gray-400 cursor-pointer" title="3-digit code on back of card"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Name on Card*</label>
                  <input type="text" class="w-full py-2 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent" required />
                </div>

                <div class="flex items-center">
                  <input type="checkbox" id="save-card" class="mr-2 rounded border-gray-300 text-accent focus:ring-accent" />
                  <label for="save-card" class="text-sm text-gray-700">Save this card for future payments</label>
                </div>
              </div>
            </div>

            {/* <!-- Terms and Conditions --> */}
            <div class="bg-white rounded-lg p-6 mb-8">
              <h3 class="text-xl font-bold mb-4">Terms and Conditions</h3>

              <div class="border border-gray-200 rounded-lg p-4 mb-4 max-h-48 overflow-y-auto">
                <h4 class="font-bold mb-2">Cancellation Policy</h4>
                <p class="text-gray-600 text-sm mb-4">Free cancellation up to 14 days before check-in. After that, cancel up to 24 hours before check-in and get a 50% refund (minus service fees).</p>

                <h4 class="font-bold mb-2">House Rules</h4>
                <ul class="text-gray-600 text-sm space-y-2 mb-4">
                  <li class="flex items-start">
                    <i class="ri-check-line text-accent mr-2 mt-1"></i>
                    <span>No smoking</span>
                  </li>
                  <li class="flex items-start">
                    <i class="ri-check-line text-accent mr-2 mt-1"></i>
                    <span>No parties or events</span>
                  </li>
                  <li class="flex items-start">
                    <i class="ri-check-line text-accent mr-2 mt-1"></i>
                    <span>Pets allowed with prior approval (fee applies)</span>
                  </li>
                  <li class="flex items-start">
                    <i class="ri-check-line text-accent mr-2 mt-1"></i>
                    <span>Quiet hours after 10 PM</span>
                  </li>
                </ul>

                <h4 class="font-bold mb-2">Privacy Policy</h4>
                <p class="text-gray-600 text-sm">Your personal information will be used to process your booking and for no other purpose. We will not share your details with third parties without your consent.</p>
              </div>

              <div class="flex items-start">
                <input type="checkbox" id="agree-terms" class="mt-1 mr-2 rounded border-gray-300 text-accent focus:ring-accent" required />
                <label for="agree-terms" class="text-sm text-gray-700">I agree to the UrbanStay Terms of Service, Privacy Policy, and cancellation policy*</label>
              </div>
            </div>

            {/* <!-- Navigation Buttons --> */}
            <div class="flex justify-between">
              <a href="#" class="bg-white border border-gray-300 text-gray-700 hover:border-accent hover:text-accent px-6 py-3 font-medium !rounded-button">
                <i class="ri-arrow-left-line mr-2"></i> Back
              </a>
              <button class="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-medium !rounded-button">
                Continue to Payment <i class="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>

          {/* <!-- Right Column - Booking Summary --> */}
          <div class="lg:w-1/3">
            <div class="bg-white rounded-xl sticky top-6 p-6">
              <h3 class="text-xl font-bold mb-6">Booking Summary</h3>

              <div class="border-b border-gray-200 pb-4 mb-4">
                <h4 class="font-bold mb-2">Luxury Soho Loft</h4>
                <p class="text-gray-600 text-sm mb-2">Soho, Manhattan</p>
                <p class="text-gray-600 text-sm">Jun 15 - Jun 20, 2024 (5 nights)</p>
              </div>

              <div class="border-b border-gray-200 pb-4 mb-4">
                <div class="flex justify-between mb-2">
                  <span class="text-gray-600">$285 x 5 nights</span>
                  <span>$1,425</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-600">Cleaning fee</span>
                  <span>$125</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-600">Service fee</span>
                  <span>$214</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-600">Taxes</span>
                  <span>$143</span>
                </div>
              </div>

              <div class="flex justify-between font-bold text-lg border-b border-gray-200 pb-4 mb-4">
                <span>Total</span>
                <span>$1,907</span>
              </div>

              <div class="bg-pale rounded-lg p-4 mb-6">
                <h4 class="font-bold mb-2 flex items-center">
                  <i class="ri-shield-check-line text-accent mr-2"></i>
                  Booking Protection
                </h4>
                <p class="text-gray-600 text-sm">Your booking is protected by UrbanStay's comprehensive guarantee covering cancellations, misrepresentations, and travel issues.</p>
              </div>

              <div class="text-center text-sm text-gray-500">
                <p class="mb-1">Need help with your booking?</p>
                <a href="#" class="text-accent font-medium">Contact our support team</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}