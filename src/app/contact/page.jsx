export default function ContactUs() {
  return (
    <main className="bg-light py-36">
      <section className="rounded-lg overflow-hidden container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Location</h3>
                  <p className="text-gray-600">10 Eyinogun St, Orile Oshodi.<br />
                    Ikeja 102214, Lagos
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600">
                    <a href="tel:+2348032870434" className="hover:text-accent">+23 4803 287 0434</a><br />
                    Available 9am-7pm daily
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:viveeaura@gmail.com" className="hover:text-accent">viveeaura@gmail.com</a><br />
                    Response within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-lg mb-4">Office Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between max-w-xs">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Sunday</span>
                  <span>11:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Find Us on the Map</h2>
            <div className="h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.347721934088!2d3.328323315266828!3d6.605510324018057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9158a5d0b8a5%3A0x5a5f5e5b5a5f5e5b!2s10%20Eyinogun%20St%2C%20Orile%20Oshodi%2C%20Ikeja%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1689871420823!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}