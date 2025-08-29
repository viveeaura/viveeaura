// app/search-results/page.js
'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import PropertyCard from '@/components/propertyCard '
import Loader from '@/components/loader'
import { fetchRates, fetchAccommodationTypes, fetchReviews } from '@/app/api'
import { useToast } from '@/context/toastContext'

function SearchResults() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [filteredProperties, setFilteredProperties] = useState([])
  const { addToast } = useToast();

  // Get search parameters
  const checkInDate = searchParams.get('check_in_date')
  const checkOutDate = searchParams.get('check_out_date')
  const adults = searchParams.get('adults') || 1
  const children = searchParams.get('children') || 0
  const accommodationTypeId = searchParams.get('accommodation_type') || null

  useEffect(() => {
    const loadProperties = async () => {

      try {
        // Check if we have availability data in localStorage
        const availabilityData = JSON.parse(localStorage.getItem('availability')) || []

        // Fetch all properties
        const [rates, accommodationTypes, { data }] = await Promise.all([
          fetchRates(),
          fetchAccommodationTypes(),
          fetchReviews()
        ])

        // Combine data to create property listings
        const combinedProperties = rates.map(rate => {
          const accommodation = accommodationTypes.find(acc => acc.id === rate.accommodation_type_id)

          // Check availability for this property
          const isAvailable = availabilityData.some(avail =>
            avail.accommodation_type === rate.accommodation_type_id
          )

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
            title: rate.title,
            location: accommodation?.view,
            image: accommodation?.images?.[0]?.src,
            price: `${new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(rate.season_prices?.[0]?.base_price)}/night`,
            size: accommodation?.size,
            bed: accommodation?.bed_type,
            adults: accommodation?.adults,
            children: accommodation?.children,
            rating: avgRating,
            reviews: propertyReviews.length,
            isAvailable,
            accommodationTypeId: rate.accommodation_type_id
          }
        })

        // Filter properties based on search criteria
        const filtered = combinedProperties.filter(property => {
          // Filter by availability
          if (!property.isAvailable) return false

          // Filter by accommodation type if specified
          if (accommodationTypeId && property.accommodationTypeId !== parseInt(accommodationTypeId)) {
            return false
          }

          // Filter by capacity
          if (property.adults < parseInt(adults)) return false
          if (property.children < parseInt(children)) return false

          return true
        })

        setFilteredProperties(filtered)
      } catch (error) {
        addToast(`Error loading properties: ${error}`, 'error')
      } finally {
        setLoading(false)
      }
    }

    loadProperties()
  }, [checkInDate, checkOutDate, adults, children, accommodationTypeId])

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
          <h1 className="md:text-4xl text-2xl font-bold mb-2">Search Results</h1>
          <p className="text-gray-600">
            {filteredProperties.length} properties available for your selected dates
          </p>
          <div className="mt-2 text-sm text-gray-500">
            {checkInDate && checkOutDate && (
              <p>Dates: {new Date(checkInDate).toLocaleDateString()} - {new Date(checkOutDate).toLocaleDateString()}</p>
            )}
            <p>Guests: {adults} adults, {children} children</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map(property => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No properties match your search criteria</h3>
            <p className="text-gray-600 mb-4">Try adjusting your dates or filters</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default function SearchResultsPage() {
  return (
    <Suspense>
      <SearchResults />
    </Suspense>
  )
}