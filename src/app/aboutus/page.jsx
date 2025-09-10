import Testimonial from "@/components/testimonies";
import { RiTeamLine, RiHomeHeartLine, RiStarSmileLine, RiMapPinLine, RiHome4Line, RiBuildingLine, RiCheckLine, RiShieldCheckLine, RiCommunityLine, RiLeafLine, RiLightbulbLine } from "react-icons/ri";

export default function AboutUs() {
  return (
    <section>
      <section className="relative w-full h-[500px] bg-cover bg-center bg-[url('/balcony.jpg');]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-7xl h-full flex items-center">
          <div className="max-w-2xl text-white relative z-10">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg mb-8">At Vivee Aura, we are driven by passion and precision — dedicated to delivering serviced apartments that redefine modern urban living in Lagos.</p>
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
              <p className="text-gray-600">Vivee Aura was founded with a simple vision — to redefine short-let and service apartment living in Lagos by combining comfort, luxury, and transparency. What began as a single serviced apartment for close friends and family has grown into a trusted name in the city’s hospitality space.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-light p-8 rounded-lg text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-full mx-auto mb-4">
                  <RiHome4Line className="text-accent"/>
                </div>
                <h3 className="text-xl font-bold mb-3">5,000+</h3>
                <p className="text-gray-600">Happy residents in our properties</p>
              </div>

              <div className="bg-light p-8 rounded-lg text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-full mx-auto mb-4">
                  <RiBuildingLine className="ri-building-line ri-2x text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">10+</h3>
                <p className="text-gray-600">Properties under management</p>
              </div>

              <div className="bg-light p-8 rounded-lg text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-full mx-auto mb-4">
                  <RiStarSmileLine className="ri-star-smile-line ri-2x text-accent" />
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
                <img src="/reception.jpg" alt="Our Mission" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div className="md:w-1/2">
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">Our Purpose</span>
                <h2 className="text-3xl font-bold mb-6">Redefining Urban Living</h2>
                <p className="text-gray-600 mb-6">Today, we proudly host guests from around the world, offering modern apartments in prime Lagos locations, equipped with 24/7 power, security, and all the amenities you need for both short and extended stays.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-accent/10 text-accent rounded-full mr-3 mt-1">
                      <RiCheckLine className="ri-check-line" />
                    </div>
                    <span className="text-gray-600">At Vivee Aura, we are driven by passion and precision</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-accent/10 text-accent rounded-full mr-3 mt-1">
                      <RiCheckLine className="ri-check-line" />
                    </div>
                    <span className="text-gray-600">Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-accent/10 text-accent rounded-full mr-3 mt-1">
                      <RiCheckLine className="ri-check-line" />
                    </div>
                    <span className="text-gray-600">24/7 support from our dedicated team</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-accent/10 text-accent rounded-full mr-3 mt-1">
                      <RiCheckLine className="ri-check-line" />
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
                  <RiShieldCheckLine className="ri-shield-check-line ri-lg text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600">We're honest and transparent in all our dealings, from pricing to property conditions.</p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full mb-4">
                  <RiCommunityLine className="ri-community-line ri-lg text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-600">We foster connections between residents and their neighborhoods.</p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full mb-4">
                  <RiLeafLine className="ri-leaf-line ri-lg text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-gray-600">We implement eco-friendly practices in all our properties and operations.</p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full mb-4">
                  <RiLightbulbLine className="ri-lightbulb-flash-line ri-lg text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600">We continuously improve our services through technology and creative solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!--Testimonials --> */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                Happy Residents
              </span>
              <h2 className="md:text-4xl text-2xl font-bold mb-4">
                What Our Residents Say
              </h2>
              <p className="text-gray-600">
                Don't just take our word for it - hear from our satisfied residents about their experience.
              </p>
            </div>

            <Testimonial />
          </div>
        </section>
      </section>
    </section>
  );
}
