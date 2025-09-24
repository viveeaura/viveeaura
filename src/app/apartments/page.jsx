// app/apartments/page.js
'use client'

import Testimonial from '@/components/testimonies'
import { useState, useEffect, useMemo } from 'react'
import { fetchRates, fetchAccommodationTypes, fetchReviews } from '@/app/api'
import PropertyCard from '@/components/propertyCard ' // We'll create this next
import Loader from '@/components/loader'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { useToast } from '@/context/toastContext'

export default function Apartments() {
  const [filterSections, setFilterSections] = useState({
    priceRange: true,
    bedrooms: true,
    neighborhoods: true,
    amenities: true,
    moveInDate: true
  })
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items per page
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    price: { min: 100000, max: 600000 }, // Adjusted for NGN prices in your data
    bedTypes: [],
    capacities: [],
    amenities: [],
    tags: []
  });

  const { addToast } = useToast();

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const [rates, accommodationTypes, { data }] = await Promise.all([
          fetchRates(),
          fetchAccommodationTypes(),
          fetchReviews()
        ])

        setCurrentPage(1);

        // Combine the data to create property listings
        const combinedProperties = rates.map(rate => {
          const accommodation = accommodationTypes.find(acc => acc.id === rate.accommodation_type_id)

          // Find the base price (you might want to implement more sophisticated price logic)
          const basePrice = rate.season_prices
          const pricePerNight = `${new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(basePrice?.[0]?.base_price || 0)}/night`
          const discountedPricePerNight = `${new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(basePrice?.[1]?.base_price || 0)}/night`

          // Get the first image if available
          const image = accommodation?.images?.[0]?.src || 'https://via.placeholder.com/280x320'
          // Filter reviews for this accommodation
          const propertyReviews = data.filter(
            review => typeof review.post_id === 'number'
              ? review.post_id === accommodation?.id
              : Number(review.post_id) === accommodation?.id
          )

          // Calculate average rating
          const avgRating = propertyReviews.length > 0
            ? propertyReviews.reduce((sum, review) => sum + parseInt(review.rating), 0) / propertyReviews.length
            : 0 // Default if no reviews

          return {
            id: rate.id,
            title: rate.title || 'Untitled Property',
            location: accommodation?.view || 'Location not specified',
            image,
            price: pricePerNight,
            discounted: discountedPricePerNight,
            size: `Room Size: ${accommodation?.size || 'N/A'}sqm`,
            bed: `Bed: ${accommodation?.bed_type || 'N/A'}`,
            max: `Max: ${accommodation?.adults || 0} adults, ${accommodation?.children || 0} children`,
            rating: avgRating,
            reviews: propertyReviews.length,
            description: rate.description || '',
            tag: rate.status === 'active' ? { text: accommodation.tags[0]?.name, color: accommodation.tags[0]?.name === 'Bestseller' ? 'bg-green-500' : accommodation.tags[0]?.name === '-10%' ? 'bg-secondary' : 'bg-accent' } : null,
            priceNum: basePrice, // Add this line to store the raw number
          }
        })

        setProperties(combinedProperties)
      } catch (error) {
        addToast(`Error loading properties`, 'error')
      } finally {
        setLoading(false)
      }
    }

    loadProperties()
  }, [filters])

  const toggleFilterSection = (section) => {
    setFilterSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      // For array-based filters (bedTypes, tags)
      if (['bedTypes', 'tags', 'amenities'].includes(filterType)) {
        const currentValues = prev[filterType];
        const newValues = currentValues.includes(value)
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value];
        return { ...prev, [filterType]: newValues };
      }

      // For capacity filter (range objects)
      if (filterType === 'capacities') {
        const currentValues = prev.capacities;
        const exists = currentValues.some(c => c.min === value.min && c.max === value.max);

        const newValues = exists
          ? currentValues.filter(c => !(c.min === value.min && c.max === value.max))
          : [...currentValues, value];

        return { ...prev, capacities: newValues };
      }

      // For price (handled separately in the range inputs)
      return prev;
    });
  };

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Price filter (convert price string to number)
      if (property.priceNum < filters.price.min || property.priceNum > filters.price.max) {
        return false;
      }

      // Bed type filter
      if (filters.bedTypes.length > 0) {
        const bedType = property.bed.replace('Bed: ', '');
        if (!filters.bedTypes.includes(bedType)) {
          return false;
        }
      }

      // Capacity filter
      if (filters.capacities.length > 0) {
        const [adults, children] = property.max.match(/\d+/g);
        const totalCapacity = parseInt(adults) + parseInt(children);
        if (!filters.capacities.some(cap => totalCapacity >= cap.min && totalCapacity <= cap.max)) {
          return false;
        }
      }

      // Tag filter
      if (filters.tags.length > 0 && property.tag) {
        if (!filters.tags.includes(property.tag.text)) {
          return false;
        }
      }

      return true;
    });
  }, [properties, filters])

  // Calculate pagination data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  // Function to change page
  const paginate = (pageNumber) => {
    scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    )
  }

  return (
    <main className="bg-light pt-36">
      <div className="container mx-auto pb-5 px-4 max-w-7xl">
        <div className="mb-8">
          <h1 className="md:text-4xl text-2xl font-bold mb-2">Our Spaces, Your Comfort</h1>
          <p className="text-gray-600">Find your perfect apartment in our best neighborhoods</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button
                  className="text-accent text-sm font-medium"
                  onClick={() => setFilters({
                    price: { min: 100000, max: 600000 },
                    bedTypes: [],
                    capacities: [],
                    amenities: [],
                    tags: []
                  })}
                >
                  Reset All
                </button>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFilterSection('priceRange')}>
                  <span>Price Range (₦)</span>
                  <i className={`text-gray-400 ${filterSections.priceRange ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                </h3>
                {filterSections.priceRange && (
                  <div className="px-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">₦{filters.price.min.toLocaleString()}</span>
                      <span className="text-sm text-gray-600">₦{filters.price.max.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="100000"
                      max="600000"
                      step="50000"
                      value={filters.price.max}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                      onChange={(e) => setFilters(prev => ({
                        ...prev,
                        price: { ...prev.price, max: parseInt(e.target.value) }
                      }))}
                    />
                    <div className="flex justify-between mt-4">
                      <div className="w-[48%]">
                        <label className="block text-sm text-gray-600 mb-1">Min</label>
                        <div className="relative">
                          <span className="absolute left-3 top-2 text-gray-400">₦</span>
                          <input
                            type="number"
                            className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded text-sm"
                            value={filters.price.min}
                            min="100000"
                            max="600000"
                            onChange={(e) => setFilters(prev => ({
                              ...prev,
                              price: { ...prev.price, min: parseInt(e.target.value) }
                            }))}
                          />
                        </div>
                      </div>
                      <div className="w-[48%]">
                        <label className="block text-sm text-gray-600 mb-1">Max</label>
                        <div className="relative">
                          <span className="absolute left-3 top-2 text-gray-400">₦</span>
                          <input
                            type="number"
                            className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded text-sm"
                            value={filters.price.max}
                            min="100000"
                            max="600000"
                            onChange={(e) => setFilters(prev => ({
                              ...prev,
                              price: { ...prev.price, max: parseInt(e.target.value) }
                            }))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bed Type Filter */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFilterSection('bedrooms')}>
                  <span>Bed Type</span>
                  <i className={`text-gray-400 ${filterSections.bedrooms ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                </h3>
                {filterSections.bedrooms && (
                  <div className="space-y-2">
                    {['2 king bed and 1 small bed', '1 king bed and 2 small bed', '2 king bed'].map((bedType) => (
                      <div key={bedType} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`bed-${bedType}`}
                          className="h-4 w-4 text-accent rounded border-gray-300 focus:ring-accent"
                          checked={filters.bedTypes.includes(bedType)}
                          onChange={() => handleFilterChange('bedTypes', bedType)}
                          aria-labelledby={`bed-${bedType}-label`}
                        />
                        <label
                          id={`bed-${bedType}-label`}
                          htmlFor={`bed-${bedType}`}
                          className="ml-2 text-sm text-gray-700 capitalize"
                        >
                          {bedType}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Capacity Filter */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFilterSection('capacity')}>
                  <span>Capacity</span>
                  <i className={`text-gray-400 ${filterSections.capacity ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                </h3>
                {filterSections.capacity && (
                  <div className="space-y-2">
                    {[
                      { label: '1-2 People', min: 1, max: 2 },
                      { label: '3-4 People', min: 3, max: 4 },
                      { label: '5+ People', min: 5, max: Infinity }
                    ].map((range) => (
                      <div key={range.label} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`capacity-${range.label}`}
                          className="h-4 w-4 text-accent rounded border-gray-300 focus:ring-accent"
                          checked={filters.capacities.some(c => c.min === range.min && c.max === range.max)}
                          onChange={() => handleFilterChange('capacities', { min: range.min, max: range.max })}
                        />
                        <label htmlFor={`capacity-${range.label}`} className="ml-2 text-sm text-gray-700">
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tags Filter */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFilterSection('tags')}>
                  <span>Special Offers</span>
                  <i className={`text-gray-400 ${filterSections.tags ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                </h3>
                {filterSections.tags && (
                  <div className="space-y-2">
                    {['Bestseller', '-10%', 'Popular'].map((tag) => (
                      <div key={tag} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`tag-${tag}`}
                          className="h-4 w-4 text-accent rounded border-gray-300 focus:ring-accent"
                          checked={filters.tags.includes(tag)}
                          onChange={() => handleFilterChange('tags', tag)}
                        />
                        <label htmlFor={`tag-${tag}`} className="ml-2 text-sm text-gray-700">
                          {tag}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Add other filters similarly */}

              <button className="w-full bg-accent hover:bg-accent/90 text-white py-3 font-medium rounded-lg">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Property Listings */}
          <div className="lg:w-3/4">
            <div className="flex justify-end items-center mb-6">
              <div>
                <span className="text-gray-600">{filteredProperties.length} apartments found</span>
              </div>
            </div>

            {/* Property Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}

              {filteredProperties.length === 0 && (
                <div className="col-span-2 text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No properties match your filters</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
                  <button
                    onClick={() => setFilters({
                      price: { min: 100000, max: 600000 },
                      bedTypes: [],
                      capacities: [],
                      amenities: [],
                      tags: []
                    })}
                    className="px-4 py-2 bg-accent text-white rounded-lg"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredProperties.length > 0 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-1">
                  <button
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 ${currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-500 hover:bg-accent hover:text-white'
                      }`}
                  >
                    <RiArrowLeftSLine />
                  </button>

                  {/* Always show first page */}
                  <button
                    onClick={() => paginate(1)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === 1
                      ? 'bg-accent text-white'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    1
                  </button>

                  {/* Show ellipsis if needed */}
                  {currentPage > 3 && (
                    <span className="px-2 text-gray-500">...</span>
                  )}

                  {/* Dynamic page numbers */}
                  {Array.from({ length: Math.min(5, totalPages - 2) }, (_, i) => {
                    let pageNum;
                    if (currentPage < 3) {
                      pageNum = i + 2;
                    } else if (currentPage > totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    if (pageNum > 1 && pageNum < totalPages) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => paginate(pageNum)}
                          className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === pageNum
                            ? 'bg-accent text-white'
                            : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                          {pageNum}
                        </button>
                      );
                    }
                    return null;
                  })}

                  {/* Show ellipsis if needed */}
                  {currentPage < totalPages - 2 && (
                    <span className="px-2 text-gray-500">...</span>
                  )}

                  {/* Always show last page if there's more than 1 page */}
                  {totalPages > 1 && (
                    <button
                      onClick={() => paginate(totalPages)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === totalPages
                        ? 'bg-accent text-white'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                      {totalPages}
                    </button>
                  )}

                  <button
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 ${currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-500 hover:bg-accent hover:text-white'
                      }`}
                  >
                    <RiArrowRightSLine />
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

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

    </main>
  )
}
