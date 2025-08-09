// components/PropertyCard.js
'use client'

import Link from 'next/link'
import { RiCalendarLine, RiHeartLine, RiShareLine } from 'react-icons/ri'
import Rating from './rating'

export default function PropertyCard({ property, classes }) {

  return (
    <div key={property.id} className={`${classes} bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md group`}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-accent hover:text-white">
            <RiHeartLine />
          </button>
          <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-accent hover:text-white">
            <RiShareLine />
          </button>
        </div>

        {/* Tag */}
        {property.tag && (
          <div className="absolute top-3 left-3">
            <span className={`${property.tag.color} text-white text-xs px-2 py-1 rounded`}>
              {property.tag.text}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex">
            <Rating initialValue={property.rating} />
            {/* {renderStars()} */}
          </div>
          <span className="text-gray-500 text-xs ml-1">({property.reviews} reviews)</span>
        </div>

        {/* Property info */}
        <Link href={`/apartments/${property.id}`}>
          <h3 className="font-bold mb-1 hover:text-primary">{property.title}</h3>
        </Link>
        <section className="flex flex-wrap gap-x-4 gap-y-1 text-gray-500 text-sm mb-3">
          {[
            property.size,
            property.bed,
            property.max,
            property.location
          ].filter(Boolean).map((detail, index) => (
            <div key={index} className="flex items-center">
              {detail}
              {index < 3 && <span className="mx-1 text-gray-300">•</span>}
            </div>
          ))}
        </section>
        {/* Price and booking */}
        <div className="flex justify-between items-center border-t pt-3">
          <div>
            <span className="font-bold text-lg">{property.price}</span>
          </div>
          <Link href={`/checkout?property=${property.id}`} className="bg-accent/10 hover:bg-accent text-accent hover:text-white p-2 rounded-full transition-colors">
            <RiCalendarLine className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
