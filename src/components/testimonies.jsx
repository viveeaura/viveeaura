export default function Testimonial() {
  return (
    <section className="py-24 bg-white" >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
            Happy Residents
          </span>
          <h2 className="md:text-4xl text-2xl font-bold mb-4">
            What Our Residents Say
          </h2>
          <p className="text-gray-600">
            Don't just take our word for it - hear from our satisfied residents about their UrbanStay experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-8 rounded-lg relative">
            <div className="absolute -top-4 -left-4 text-6xl text-accent/20">"</div>
            <div className="flex text-yellow-400 mb-4">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p className="text-gray-600 italic mb-6 relative z-10">
              "UrbanStay made my move to the city seamless. Their team was responsive, the apartment was exactly as described, and I love my new neighborhood!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent">
                <img
                  src="https://public.readdy.ai/ai/img_res/a8db113e80451e8c3e16b2ce68696a84.jpg"
                  alt="Alex Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Alex Thompson</h4>
                <p className="text-gray-500 text-sm">Financial District Resident</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 rounded-lg relative">
            <div className="absolute -top-4 -left-4 text-6xl text-accent/20">"</div>
            <div className="flex text-yellow-400 mb-4">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p className="text-gray-600 italic mb-6 relative z-10">
              "The maintenance team is incredible - any issue is resolved within hours. It's clear UrbanStay really cares about their residents' experience."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent">
                <img
                  src="https://public.readdy.ai/ai/img_res/a17db859c8f1b346a88da581d360d607.jpg"
                  alt="Maria Garcia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Maria Garcia</h4>
                <p className="text-gray-500 text-sm">Williamsburg Resident</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-8 rounded-lg relative">
            <div className="absolute -top-4 -left-4 text-6xl text-accent/20">"</div>
            <div className="flex text-yellow-400 mb-4">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <p className="text-gray-600 italic mb-6 relative z-10">
              "After renting with three different companies in NYC, UrbanStay is by far the most professional and resident-focused. I'm staying as long as I can!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent">
                <img
                  src="https://public.readdy.ai/ai/img_res/9388c346589af45d23d5b99ec532e747.jpg"
                  alt="James Wilson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">James Wilson</h4>
                <p className="text-gray-500 text-sm">Upper West Side Resident</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}