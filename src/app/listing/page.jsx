export default function Listing() {
  return (
    <section>
      <main className="md:py-36">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* <!-- Filters and Sorting --> */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold">Available Properties</h2>
              <p className="text-gray-600">Showing 24 properties in New York City</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-200 rounded pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-accent w-full">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Listings</option>
                  <option>Most Popular</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>

              <button className="bg-white border border-gray-200 hover:border-accent text-gray-700 hover:text-accent px-4 py-2 font-medium !rounded-button whitespace-nowrap flex items-center">
                <i className="ri-filter-line mr-2"></i>
                Filters
              </button>
            </div>
          </div>

          {/* <!-- Filter Chips --> */}
          <div className="flex flex-wrap gap-2 mb-8">
            <div className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm flex items-center">
              Manhattan
              <button className="ml-1 text-gray-400 hover:text-gray-600">
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm flex items-center">
              $2,000 - $3,000
              <button className="ml-1 text-gray-400 hover:text-gray-600">
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm flex items-center">
              1+ Bedrooms
              <button className="ml-1 text-gray-400 hover:text-gray-600">
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm flex items-center">
              Pet Friendly
              <button className="ml-1 text-gray-400 hover:text-gray-600">
                <i className="ri-close-line"></i>
              </button>
            </div>
            <button className="text-accent text-sm font-medium flex items-center">
              Clear all
            </button>
          </div>

          {/* <!-- Property Listings Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Property 1 --> */}
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

            {/* <!-- Property 2 --> */}
            <div className="property-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img src="https://public.readdy.ai/ai/img_res/02a384168910399559872ff4be1e1671.jpg" alt="Riverside Studio" className="w-full h-full object-cover property-image transition-transform duration-300" />
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
                  <h3 className="text-lg font-bold">Riverside Studio</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Move-in Ready</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">Brooklyn Heights, Brooklyn</p>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center mr-4">
                    <i className="ri-hotel-bed-line mr-1"></i>
                    <span>Studio</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <i className="ri-shower-line mr-1"></i>
                    <span>1 Bath</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-ruler-line mr-1"></i>
                    <span>550 sqft</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-lg">$1,750/mo</span>
                    <span className="text-gray-400 text-sm line-through ml-2">$1,950/mo</span>
                  </div>
                  <a href="#" className="text-accent font-medium text-sm flex items-center">
                    View
                    <i className="ri-arrow-right-line ml-1"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Property 3 --> */}
            <div className="property-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img src="https://public.readdy.ai/ai/img_res/bc7391e00b75163867c80669bf39525c.jpg" alt="Luxury Loft" className="w-full h-full object-cover property-image transition-transform duration-300" />
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
                  <h3 className="text-lg font-bold">Luxury Soho Loft</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Available Now</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">Soho, Manhattan</p>

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
                    <span>1,250 sqft</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-lg">$4,500/mo</span>
                  </div>
                  <a href="#" className="text-accent font-medium text-sm flex items-center">
                    View
                    <i className="ri-arrow-right-line ml-1"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Property 4 --> */}
            <div className="property-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img src="https://public.readdy.ai/ai/img_res/4e1119464982756701eb93bdca871143.jpg" alt="Cozy West Village Apartment" className="w-full h-full object-cover property-image transition-transform duration-300" />
                  <div className="absolute top-3 right-3">
                    <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-accent hover:text-white transition-colors">
                      <i className="ri-heart-line"></i>
                    </button>
                  </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">Cozy West Village Apartment</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Lease Ending Soon</span>
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
                    <span className="font-bold text-lg">$2,200/mo</span>
                  </div>
                  <a href="#" className="text-accent font-medium text-sm flex items-center">
                    View
                    <i className="ri-arrow-right-line ml-1"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Property 5 --> */}
            <div className="property-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img src="https://public.readdy.ai/ai/img_res/f1abce78fbacb02e81d3dbd963d9b2cd.jpg" alt="Williamsburg Modern Loft" className="w-full h-full object-cover property-image transition-transform duration-300" />
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
                  <h3 className="text-lg font-bold">Williamsburg Modern Loft</h3>
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
                    <span className="font-bold text-lg">$3,100/mo</span>
                  </div>
                  <a href="#" className="text-accent font-medium text-sm flex items-center">
                    View
                    <i className="ri-arrow-right-line ml-1"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Property 6 --> */}
            <div className="property-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img src="https://public.readdy.ai/ai/img_res/69fb77b370ddd22c1e71b232dded5b2a.jpg" alt="Upper East Side classNameic" className="w-full h-full object-cover property-image transition-transform duration-300" />
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
                  <h3 className="text-lg font-bold">Upper East Side classNameic</h3>
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
      </main>
    </section>
  )
}