import Image from "next/image";
import Link from "next/link";
import { RiFacebookBoxFill, RiInstagramLine, RiTiktokFill } from "react-icons/ri";

export default function Footer() {
  const Logo = "/logo2.png";

  return (
    <footer className="bg-primary pt-16 text-white space-y-28">
      <section className="pt-14">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="sm:text-4xl text-2xl font-bold mb-3">Get Rental Alerts</h2>
            <p className="mb-8 text-gray-400">Subscribe to receive new listings in your preferred neighborhoods, price range,
              and amenities.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-accent"
                placeholder="Your email address" />
              <button
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 font-medium !rounded-button whitespace-nowrap">Subscribe</button>
            </div>
            <p className="text-xs text-gray-400 mt-4">By subscribing, you agree to our <a href="/privacyPolicy">Privacy Policy</a> and consent to receive
              updates from our company.</p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 py-16 border-t border-white/20">
          <div className="">
            <Link href="/" className="text-2xl text-primary font-bold">
              <Image src={Logo} width={180} height={100} alt="logo" className=' mb-5' />
            </Link>
            <p className="text-white/80 text-sm mb-6">Our apartments feature well-equipped kitchens, high-speed internet, and personalized services to ensure a pleasant and hassle-free stay.</p>
            <div className="flex space-x-4">
              <a href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <RiFacebookBoxFill />
              </a>
              <a href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <RiInstagramLine />
              </a>
              <a href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <RiTiktokFill />
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 col-span-3 md:space-y-0 space-y-8 md:mt-0 mt-8">
            <div>
              <h3 className="font-bold text-white mb-4">Properties</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/apartments" className="text-white/80 hover:text-white">Apartments</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/aboutus" className="text-white/80 hover:text-white">About Us</a></li>
                <li><a href="/contact" className="text-white/80 hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Support</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/faq" className="text-white/80 hover:text-white">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>


        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Vivee Aura. All rights reserved.</p>
            </div>

            <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm">
              <a href="/privacyPolicy" className="text-white/60 hover:text-white">Privacy Policy</a>
              <a href="/termsandservice" className="text-white/60 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-white/20">
          <div className="flex  justify-center items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/60 text-sm">Design and Programmed by <a href="https://deboik.com" target="_blank" className="text-pale">Deboik International</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}