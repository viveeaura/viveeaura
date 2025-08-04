'use client'

import Testimonial from '@/components/testimonies';
import { useState } from 'react';

export default function Apartments() {
  // State for filter sections visibility
  const [filterSections, setFilterSections] = useState({
    priceRange: true,
    bedrooms: true,
    neighborhoods: true,
    amenities: true,
    moveInDate: true
  });

  // Toggle filter section
  const toggleFilterSection = (section) => {
    setFilterSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <main className='container mx-auto px-4 max-w-7xl'>
      <div className="pt-36">
        {/* <!-- Page Header --> */}
        <div className="mb-8">
          <h1 className="md:text-4xl text-2xl font-bold mb-2">Apartments for Rent</h1>
          <p className="text-gray-600">Find your perfect apartment in New York City's best neighborhoods</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* <!-- Filters Sidebar --> */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button className="text-accent text-sm font-medium">Reset All</button>
              </div>

              {/* <!-- Price Range --> */}
              <div className="mb-6 filter-section">
                <h3
                  className="font-bold mb-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFilterSection('priceRange')}
                >
                  <span>Price Range</span>
                  <i className={`text-gray-400 ${filterSections.priceRange ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                </h3>
                <div className="px-1" style={{ display: filterSections.priceRange ? 'block' : 'none' }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">$500</span>
                    <span className="text-sm text-gray-600">$10,000+</span>
                  </div>
                  <input type="range" min="500" max="10000" value="2500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent" onChange={''} />
                  <div className="flex justify-between mt-4">
                    <div className="w-[48%]">
                      <label className="block text-sm text-gray-600 mb-1">Min</label>
                      <div className="relative">
                        <span className="absolute left-3 top-2 text-gray-400">$</span>
                        <input type="number" className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded text-sm" placeholder="500" value="1500" />
                      </div>
                    </div>
                    <div className="w-[48%]">
                      <label className="block text-sm text-gray-600 mb-1">Max</label>
                      <div className="relative">
                        <span className="absolute left-3 top-2 text-gray-400">$</span>
                        <input type="number" className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded text-sm" placeholder="10000" value="3500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Bedrooms --> */}
              <div className="mb-6 filter-section">
                <h3
                  className="font-bold mb-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFilterSection('bedrooms')}
                >
                  <span>Bedrooms</span>
                  <i className={`text-gray-400 ${filterSections.bedrooms ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                </h3>
                <div className="grid grid-cols-3 gap-2" style={{ display: filterSections.bedrooms ? 'grid' : 'none' }}>
                  <button className="py-2 border border-gray-200 rounded text-sm hover:border-accent hover:text-accent">Studio</button>
                  <button className="py-2 border border-gray-200 rounded text-sm hover:border-accent hover:text-accent">1</button>
                  <button className="py-2 border border-gray-200 rounded text-sm hover:border-accent hover:text-accent">2</button>
                  <button className="py-2 border border-gray-200 rounded text-sm hover:border-accent hover:text-accent">3</button>
                  <button className="py-2 border border-gray-200 rounded text-sm hover:border-accent hover:text-accent">4</button>
                  <button className="py-2 border border-gray-200 rounded text-sm hover:border-accent hover:text-accent">5+</button>
                </div>
              </div>

              {/* <!-- Neighborhoods --> */}
              <div className="mb-6 filter-section">
                <h3
                  className="font-bold mb-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFilterSection('neighborhoods')}
                >
                  <span>Neighborhoods</span>
                  <i className={`text-gray-400 ${filterSections.neighborhoods ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                </h3>
                <div className="space-y-2" style={{ display: filterSections.neighborhoods ? 'block' : 'none' }}>
                  <div className="flex items-center">
                    <input type="checkbox" id="manhattan" className="mr-2 rounded border-gray-300 text-accent focus:ring-accent" />
                    <label htmlFor="manhattan" className="text-sm">Manhattan</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="brooklyn" className="mr-2 rounded border-gray-300 text-accent focus:ring-accent" />
                    <label htmlFor="brooklyn" className="text-sm">Brooklyn</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="queens" className="mr-2 rounded border-gray-300 text-accent focus:ring-accent" />
                    <label htmlFor="queens" className="text-sm">Queens</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="bronx" className="mr-2 rounded border-gray-300 text-accent focus:ring-accent" />
                    <label htmlFor="bronx" className="text-sm">Bronx</label>
                  </div>
                  <button className="text-accent text-sm font-medium mt-1 flex items-center">
                    More options
                    <i className="ri-arrow-down-s-line ml-1"></i>
                  </button>
                </div>
              </div>

              {/* <!-- Amenities --> */}
              <div className="mb-6 filter-section">
                <h3
                  className="font-bold mb-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFilterSection('amenities')}
                >
                  <span>Amenities</span>
                  <i className={`text-gray-400 ${filterSections.amenities ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                </h3>
                <div className="grid grid-cols-2 gap-2" style={{ display: filterSections.amenities ? 'grid' : 'none' }}>
                  <div>
                    <input type="checkbox" id="amenity-wifi" className="amenity-checkbox hidden" />
                    <label htmlFor="amenity-wifi" className="amenity-label flex items-center justify-center py-2 border border-gray-200 rounded text-sm cursor-pointer">
                      <i className="ri-wifi-line mr-2"></i> WiFi
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="amenity-parking" className="amenity-checkbox hidden" />
                    <label htmlFor="amenity-parking" className="amenity-label flex items-center justify-center py-2 border border-gray-200 rounded text-sm cursor-pointer">
                      <i className="ri-parking-line mr-2"></i> Parking
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="amenity-gym" className="amenity-checkbox hidden" />
                    <label htmlFor="amenity-gym" className="amenity-label flex items-center justify-center py-2 border border-gray-200 rounded text-sm cursor-pointer">
                      <i className="ri-run-line mr-2"></i> Gym
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="amenity-pool" className="amenity-checkbox hidden" />
                    <label htmlFor="amenity-pool" className="amenity-label flex items-center justify-center py-2 border border-gray-200 rounded text-sm cursor-pointer">
                      <i className="ri-swimming-pool-line mr-2"></i> Pool
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="amenity-pets" className="amenity-checkbox hidden" />
                    <label htmlFor="amenity-pets" className="amenity-label flex items-center justify-center py-2 border border-gray-200 rounded text-sm cursor-pointer">
                      <i className="ri-bear-smile-line mr-2"></i> Pet Friendly
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="amenity-laundry" className="amenity-checkbox hidden" />
                    <label htmlFor="amenity-laundry" className="amenity-label flex items-center justify-center py-2 border border-gray-200 rounded text-sm cursor-pointer">
                      <i className="ri-t-shirt-line mr-2"></i> Laundry
                    </label>
                  </div>
                </div>
              </div>

              {/* <!-- Move-in Date --> */}
              <div className="mb-6 filter-section">
                <h3
                  className="font-bold mb-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFilterSection('moveInDate')}
                >
                  <span>Move-in Date</span>
                  <i className={`text-gray-400 ${filterSections.moveInDate ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                </h3>
                <div className="relative" style={{ display: filterSections.moveInDate ? 'block' : 'none' }}>
                  <input type="text" className="w-full py-2 pl-3 pr-8 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent" placeholder="Select date" />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <i className="ri-calendar-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              <button className="w-full bg-accent hover:bg-accent/90 text-white py-3 font-medium !rounded-button">
                Apply Filters
              </button>
            </div>
          </div>

          {/* <!-- Property Listings --> */}
          <div className="lg:w-3/4">
            {/* <!-- Map View Toggle --> */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-gray-600">24 apartments found</span>
              </div>
              <div className="flex items-center">
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-l !rounded-button flex items-center">
                  <i className="ri-list-check mr-2"></i> List
                </button>
                <button className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-r !rounded-button flex items-center">
                  <i className="ri-map-pin-line mr-2"></i> Map
                </button>
              </div>
            </div>

            {/* <!-- Property Listings Grid --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <!-- Apartment 1 --> */}
              <div className="property-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/be9f3ef1b1a5f823eae85ca3a865c44a.jpg" alt="Modern Downtown Apartment" className="w-full h-full object-cover property-image transition-transform duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent text-white text-xs px-2 py-1 rounded">New</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-heart-line"></i>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">Modern Downtown Apartment</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Available Now</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Financial District, Manhattan</p>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center mr-4">
                      <i className="ri-hotel-bed-line mr-1"></i>
                      <span>1 Bed</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <i className="ri-shower-line mr-1"></i>
                      <span>1 Bath</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-ruler-line mr-1"></i>
                      <span>750 sqft</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg">$2,800/mo</span>
                      <span className="text-gray-400 text-sm line-through ml-2">$3,100/mo</span>
                    </div>
                    <a href="#" className="text-accent font-medium text-sm flex items-center">
                      View
                      <i className="ri-arrow-right-line ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Apartment 2 --> */}
              <div className="property-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/02a384168910399559872ff4be1e1671.jpg" alt="Luxury High-Rise Apartment" className="w-full h-full object-cover property-image transition-transform duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-secondary text-white text-xs px-2 py-1 rounded">-10%</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-heart-line"></i>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">Luxury High-Rise Apartment</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Move-in Ready</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Midtown East, Manhattan</p>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center mr-4">
                      <i className="ri-hotel-bed-line mr-1"></i>
                      <span>2 Beds</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <i className="ri-shower-line mr-1"></i>
                      <span>2 Baths</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-ruler-line mr-1"></i>
                      <span>1,100 sqft</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg">$4,200/mo</span>
                      <span className="text-gray-400 text-sm line-through ml-2">$4,650/mo</span>
                    </div>
                    <a href="#" className="text-accent font-medium text-sm flex items-center">
                      View
                      <i className="ri-arrow-right-line ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Apartment 3 --> */}
              <div className="property-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/bc7391e00b75163867c80669bf39525c.jpg" alt="Charming West Village Apartment" className="w-full h-full object-cover property-image transition-transform duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">Luxury</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-heart-line"></i>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">Charming West Village Apartment</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Available Now</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">West Village, Manhattan</p>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center mr-4">
                      <i className="ri-hotel-bed-line mr-1"></i>
                      <span>1 Bed</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <i className="ri-shower-line mr-1"></i>
                      <span>1 Bath</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-ruler-line mr-1"></i>
                      <span>650 sqft</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg">$2,950/mo</span>
                    </div>
                    <a href="#" className="text-accent font-medium text-sm flex items-center">
                      View
                      <i className="ri-arrow-right-line ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Apartment 4 --> */}
              <div className="property-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/4e1119464982756701eb93bdca871143.jpg" alt="Spacious Upper West Side Apartment" className="w-full h-full object-cover property-image transition-transform duration-300" />
                  <div className="absolute top-3 right-3">
                    <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-heart-line"></i>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">Spacious Upper West Side Apartment</h3>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Lease Ending Soon</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Upper West Side, Manhattan</p>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center mr-4">
                      <i className="ri-hotel-bed-line mr-1"></i>
                      <span>3 Beds</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <i className="ri-shower-line mr-1"></i>
                      <span>2 Baths</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-ruler-line mr-1"></i>
                      <span>1,400 sqft</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg">$5,200/mo</span>
                    </div>
                    <a href="#" className="text-accent font-medium text-sm flex items-center">
                      View
                      <i className="ri-arrow-right-line ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Apartment 5 --> */}
              <div className="property-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/f1abce78fbacb02e81d3dbd963d9b2cd.jpg" alt="Modern Williamsburg Apartment" className="w-full h-full object-cover property-image transition-transform duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Featured</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-heart-line"></i>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">Modern Williamsburg Apartment</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Available Now</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Williamsburg, Brooklyn</p>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center mr-4">
                      <i className="ri-hotel-bed-line mr-1"></i>
                      <span>2 Beds</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <i className="ri-shower-line mr-1"></i>
                      <span>1 Bath</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-ruler-line mr-1"></i>
                      <span>900 sqft</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg">$3,600/mo</span>
                    </div>
                    <a href="#" className="text-accent font-medium text-sm flex items-center">
                      View
                      <i className="ri-arrow-right-line ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Apartment 6 --> */}
              <div className="property-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/69fb77b370ddd22c1e71b232dded5b2a.jpg" alt="Cozy Upper East Side Apartment" className="w-full h-full object-cover property-image transition-transform duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Pet Friendly</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-heart-line"></i>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">Cozy Upper East Side Apartment</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Move-in Ready</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Upper East Side, Manhattan</p>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center mr-4">
                      <i className="ri-hotel-bed-line mr-1"></i>
                      <span>1 Bed</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <i className="ri-shower-line mr-1"></i>
                      <span>1 Bath</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-ruler-line mr-1"></i>
                      <span>700 sqft</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg">$2,450/mo</span>
                    </div>
                    <a href="#" className="text-accent font-medium text-sm flex items-center">
                      View
                      <i className="ri-arrow-right-line ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Pagination --> */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-1">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-accent hover:text-white">
                  <i className="ri-arrow-left-s-line"></i>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-accent text-white">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100">3</button>
                <span className="px-2 text-gray-500">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100">8</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-accent hover:text-white">
                  <i className="ri-arrow-right-s-line"></i>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
    </main>
  )
}
