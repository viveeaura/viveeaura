import BookingForm from "@/components/bookingForm";
import FeaturedProperties from "@/components/featuredProperties";
import MovingTips from "@/components/movingTips";
import NeighborhoodGuides from "@/components/neighborhood";
import TrendingProperties from "@/components/trendingProperties";

export default function Home() {
  return (
   <section className="bg-light">
      {/* <!-- Hero Section --> */}
      <section className="relative w-full h-[650px] bg-cover bg-center bg-[url('https://public.readdy.ai/ai/img_res/3dc64b554b80f99d5b35766cb7e2a520.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-7xl h-full flex items-center">
          <div className="max-w-xl text-white relative z-10 md:text-left text-center">
            <h2 className="sm:text-4xl text-2xl font-bold mb-4">Luxury Living in the Heart of Lagos</h2>
            <p className="text-lg mb-8">Experience unmatched comfort and elegance at Vivee Aura — your premium service apartment for short or extended stays.</p>
            <div className="md:flex md:space-y-0 space-y-2 md:space-x-4">
              <a href="/apartments" className="block cursor-pointer md:w-auto w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 font-medium !rounded-button whitespace-nowrap">Browse Apartments</a>
              <a href="/aboutus" className="block cursor-pointer md:w-auto w-full bg-white hover:bg-gray-100 text-primary px-6 py-3 font-medium !rounded-button whitespace-nowrap">About Us</a>
            </div>
          </div>
        </div>
      </section>

      <BookingForm />

      <FeaturedProperties />

      <TrendingProperties />

      <NeighborhoodGuides />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between text-white bg-primary rounded-lg shadow-md overflow-hidden">
            <div className="p-8 md:p-12 md:w-1/2">
              <span
                className="inline-block bg-secondary/20 px-3 py-1 rounded-full text-sm font-medium mb-4">Limited
                Time Offer</span>
              <h2 className="text-3xl font-bold mb-4">Summer Special: First Month Free</h2>
              <p className="mb-6">Sign a 12-month lease on select apartments and get your first month rent-free.
                Offer ends August 31, 2025.</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex flex-col items-center justify-center rounded-lg p-3 w-20 h-20">
                  <span className="text-2xl font-bold">12</span>
                  <span className="text-xs">Days</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg p-3 w-20 h-20">
                  <span className="text-2xl font-bold">08</span>
                  <span className="text-xs">Hours</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg p-3 w-20 h-20">
                  <span className="text-2xl font-bold">45</span>
                  <span className="text-xs">Minutes</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg p-3 w-20 h-20">
                  <span className="text-2xl font-bold">22</span>
                  <span className="text-xs">Seconds</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 font-medium !rounded-button whitespace-nowrap">View
                  Specials</button>
                <button
                  className="bg-white border border-gray-300 hover:border-accent text-gray-800 hover:text-accent px-6 py-3 font-medium !rounded-button whitespace-nowrap">Contact
                  Agent</button>
              </div>
            </div>
            <div className="md:w-1/2 h-80 md:h-auto">
              <img src="https://public.readdy.ai/ai/img_res/169b5741f3767df6acbbcdfe591cc4b9.jpg" alt="Summer Special"
                className="w-full h-full object-cover object-top" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-light p-6 rounded-lg shadow-sm flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full mr-4">
                <i className="ri-key-line ri-lg text-accent"></i>
              </div>
              <div>
                <h3 className="font-bold mb-1">Easy Move-in</h3>
                <p className="text-gray-600 text-sm">No application fees, flexible leases</p>
              </div>
            </div>
            <div className="bg-light p-6 rounded-lg shadow-sm flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full mr-4">
                <i className="ri-shield-check-line ri-lg text-accent"></i>
              </div>
              <div>
                <h3 className="font-bold mb-1">Verified Listings</h3>
                <p className="text-gray-600 text-sm">All properties personally inspected</p>
              </div>
            </div>
            <div className="bg-light p-6 rounded-lg shadow-sm flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full mr-4">
                <i className="ri-customer-service-2-line ri-lg text-accent"></i>
              </div>
              <div>
                <h3 className="font-bold mb-1">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Dedicated property managers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MovingTips />
   </section>
  );
}
