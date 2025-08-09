'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RiSearchLine, RiArrowDownSLine, RiShoppingCartLine, RiMenuLine, RiCloseLine } from 'react-icons/ri'
import Image from 'next/image'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const Logo = "/logo.png";


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <div className={`${isMobileMenuOpen ? 'bg-black bg-opacity-50 fixed inset-0 z-40 transition-opacity duration-300' : ''}`}>
        <header className={`bg-white overflow-auto shadow-sm fixed ${isMobileMenuOpen ? 'h-full w-64 left-0 shadow-lg transform transition-transform duration-300 ease-in-out z-50' : 'w-full translate-x-0'} top-0 z-50 py-3 transition-all ${isScrolled ? 'shadow-md' : ''}`}>
          <div className="container mx-auto px-4 max-w-7xl">
            <form className="md:flex items-center justify-between md:space-y-0 space-y-4">
              {/* Logo and Mobile Menu Button */}
              <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl text-primary font-bold">
                  <Image src={Logo} width={150} height={0} alt='logo' className='w-3/4' />
                </Link>

                {/* Mobile Menu Button */}
                <button type='button'
                  className="md:hidden text-gray-700 focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  {isMobileMenuOpen ? (
                    <RiCloseLine className="w-6 h-6" />
                  ) : (
                    <RiMenuLine className="w-6 h-6" />
                  )}
                </button>
              </div>

              {/* Search Bar - Hidden on mobile when menu is open */}
              {!isMobileMenuOpen && (
                <div className="relative md:w-1/2 md:space-y-0 space-y-2 md:block hidden">
                  <div className="relative space-y-">
                    <div className='flex items-center'>
                      <input
                        type="text"
                        className="w-full py-3 pl-10 pr-12 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent"
                        placeholder="Search by location, amenities, price..."
                      />
                      <div className="absolute pl-3">
                        <RiSearchLine className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="md:absolute md:inset-y-0 md:right-0 md:border-none border md:w-auto w-full border-gray-200 flex items-center rounded md:py-0">
                      <button className="my-3 px-4 text-gray-500 md:border-l border-gray-200 flex items-center">
                        <div className="flex items-center">
                          <span className="mr-1 whitespace-nowrap">All Types</span>
                          <RiArrowDownSLine className="w-4 h-4 ml-1" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* User Actions - Hidden on mobile when menu is open */}
              {!isMobileMenuOpen && (
                <div className="md:flex items-center space-x-6 hidden">
                  <div className="sm:relative w-full">
                    <a href='/apartments' className="bg-accent hover:bg-accent/90 text-white px-6 py-3 font-medium rounded-lg w-full whitespace-nowrap">
                      Book Now
                    </a>
                  </div>
                </div>
              )}
            </form>

            <div className={`mt-8 pt-14 border-t border-gray-200 space-y-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <RiShoppingCartLine className="w-6 h-6 text-gray-700" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-accent text-white text-xs rounded-full">1</span>
                </div>
                <span className="text-gray-700">Cart</span>
              </div>
              <button className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 font-medium rounded-lg">
                Book Now
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}