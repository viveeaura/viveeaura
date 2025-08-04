import Testimonial from "@/components/testimonies";
import { RiTeamLine, RiHomeHeartLine, RiStarSmileLine, RiMapPinLine } from "react-icons/ri";

export default function AboutUs() {
  return (
    <section>
      <section className="relative w-full h-[500px] bg-cover bg-center bg-[url('https://public.readdy.ai/ai/img_res/3dc64b554b80f99d5b35766cb7e2a520.jpg');]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-7xl h-full flex items-center">
          <div className="max-w-2xl text-white relative z-10">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg mb-8">Discover the people and passion behind UrbanStay, dedicated to finding your perfect urban home since 2015.</p>
            {/* <div className="flex space-x-4">
              <a href="#our-mission" className="bg-accent hover:bg-accent/90 text-white px-6 py-3 font-medium !rounded-button whitespace-nowrap">Our Mission</a>
              <a href="#meet-the-team" className="bg-white hover:bg-gray-100 text-primary px-6 py-3 font-medium !rounded-button whitespace-nowrap">Meet the Team</a>
            </div> */}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-7xl">
        {/* // <!-- Our Story-- > */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">Our Beginnings</span>
              <h2 className="text-3xl font-bold mb-6">From Humble Beginnings to Citywide Trust</h2>
              <p className="text-gray-600">UrbanStay was founded in 2015 by three friends who saw a gap in the rental market for transparent, high-quality urban living spaces. What started as a small operation with just five apartments in Brooklyn has grown into one of the most trusted names in urban rentals across New York City.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-light p-8 rounded-lg text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-full mx-auto mb-4">
                  <i className="ri-home-4-line ri-2x text-accent"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">5,000+</h3>
                <p className="text-gray-600">Happy residents in our properties</p>
              </div>

              <div className="bg-light p-8 rounded-lg text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-full mx-auto mb-4">
                  <i className="ri-building-line ri-2x text-accent"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">1,200+</h3>
                <p className="text-gray-600">Properties under management</p>
              </div>

              <div className="bg-light p-8 rounded-lg text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-full mx-auto mb-4">
                  <i className="ri-star-smile-line ri-2x text-accent"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">98%</h3>
                <p className="text-gray-600">Customer satisfaction rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* // <!--Our Mission-- > */}
        <section id="our-mission" className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img src="https://public.readdy.ai/ai/img_res/8c5ed623253ba252a5d524f798dab045.jpg" alt="Our Mission" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div className="md:w-1/2">
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">Our Purpose</span>
                <h2 className="text-3xl font-bold mb-6">Redefining Urban Living</h2>
                <p className="text-gray-600 mb-6">At UrbanStay, we believe that where you live should inspire how you live. Our mission is to provide thoughtfully designed spaces in vibrant neighborhoods that connect you to the best of city life.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-accent/10 text-accent rounded-full mr-3 mt-1">
                      <i className="ri-check-line"></i>
                    </div>
                    <span className="text-gray-600">Curated properties in prime locations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-accent/10 text-accent rounded-full mr-3 mt-1">
                      <i className="ri-check-line"></i>
                    </div>
                    <span className="text-gray-600">Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-accent/10 text-accent rounded-full mr-3 mt-1">
                      <i className="ri-check-line"></i>
                    </div>
                    <span className="text-gray-600">24/7 support from our dedicated team</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-accent/10 text-accent rounded-full mr-3 mt-1">
                      <i className="ri-check-line"></i>
                    </div>
                    <span className="text-gray-600">Sustainable practices in property management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <!--Our Values-- > */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">What We Stand For</span>
              <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
              <p className="text-gray-600">These principles guide every decision we make and every interaction we have with our residents and partners.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-light p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full mb-4">
                  <i className="ri-shield-check-line ri-lg text-accent"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600">We're honest and transparent in all our dealings, from pricing to property conditions.</p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full mb-4">
                  <i className="ri-community-line ri-lg text-accent"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-600">We foster connections between residents and their neighborhoods.</p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full mb-4">
                  <i className="ri-leaf-line ri-lg text-accent"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-gray-600">We implement eco-friendly practices in all our properties and operations.</p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full mb-4">
                  <i className="ri-lightbulb-flash-line ri-lg text-accent"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600">We continuously improve our services through technology and creative solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!--Meet the Team-- > */}
        <section id="meet-the-team" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">Our People</span>
              <h2 className="text-3xl font-bold mb-6">Meet the UrbanStay Team</h2>
              <p className="text-gray-600">Our dedicated team of real estate professionals, property managers, and customer service specialists are here to make your urban living experience exceptional.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* <!-- Team Member 1 --> */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/42b5d8f7f9f1e34a2c6bb5724bdf468e.jpg" alt="Sarah Johnson" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-gray-500 text-sm mb-3">Founder & CEO</p>
                  <p className="text-gray-600 text-sm mb-4">With 15 years in real estate, Sarah leads our vision for urban living.</p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-twitter-x-line"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Team Member 2 --> */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/38ec72452db538ef580e8405dd08e06d.jpg" alt="Michael Chen" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                  <p className="text-gray-500 text-sm mb-3">Chief Operations Officer</p>
                  <p className="text-gray-600 text-sm mb-4">Oversees all property operations and resident experiences.</p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-twitter-x-line"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Team Member 3 --> */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/347888f62965c3cd7eae42d2ce3b8119.jpg" alt="David Rodriguez" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">David Rodriguez</h3>
                  <p className="text-gray-500 text-sm mb-3">Head of Property Management</p>
                  <p className="text-gray-600 text-sm mb-4">Ensures all our properties meet UrbanStay's high standards.</p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-twitter-x-line"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Team Member 4 --> */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/7935ac7990618407851a15b1739f6481.jpg" alt="Emily Wilson" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">Emily Wilson</h3>
                  <p className="text-gray-500 text-sm mb-3">Customer Experience Director</p>
                  <p className="text-gray-600 text-sm mb-4">Leads our resident support and community initiatives.</p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-twitter-x-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--Testimonials --> */}
        <Testimonial />
      </section>
    </section>
  );
}
