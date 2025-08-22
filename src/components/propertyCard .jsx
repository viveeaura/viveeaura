// components/PropertyCard.js
'use client'

import Link from 'next/link'
import { RiCalendarLine, RiHeartLine, RiShareLine, RiCloseLine } from 'react-icons/ri'
import { useState } from 'react'
import Rating from './rating'

export default function PropertyCard({ property, classes }) {
  const [showShareOptions, setShowShareOptions] = useState(false)

  const handleShareClick = () => {
    // Check if Web Share API is supported (mostly mobile devices)
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this property: ${property.title}`,
        url: `${window.location.origin}/apartments/details?id=${property.id}`,
      })
        .catch((error) => {
          console.log('Error sharing:', error)
        })
    } else {
      // Show custom share dialog for desktop users
      setShowShareOptions(true)
    }
  }

  const shareToSocialMedia = (platform) => {
    const shareUrl = `${window.location.origin}/apartments/details?id=${property.id}`
    const shareText = `Check out this property: ${property.title}`

    let url = ''

    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
        break
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
        break
      case 'email':
        url = `mailto:?subject=${encodeURIComponent(property.title)}&body=${encodeURIComponent(shareText + '\n' + shareUrl)}`
        break
      default:
        return
    }

    window.open(url, '_blank')
    setShowShareOptions(false)
  }

  const copyToClipboard = () => {
    const url = `${window.location.origin}/apartments/details?id=${property.id}`
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('Link copied to clipboard!')
        setShowShareOptions(false)
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }

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
          <button
            className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-accent hover:text-white"
            onClick={handleShareClick}
          >
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
          </div>
          <span className="text-gray-500 text-xs ml-1">({property.reviews} reviews)</span>
        </div>

        {/* Property info */}
        <Link href={`/apartments/details?id=${property.id}`}>
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
          <Link href={`/apartments/details?id=${property.id}`} className="bg-accent/10 hover:bg-accent text-accent hover:text-white p-2 rounded-full transition-colors">
            <RiCalendarLine className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Share Modal */}
      {showShareOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 max-w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Share this property</h3>
              <button
                onClick={() => setShowShareOptions(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <RiCloseLine className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <button
                onClick={() => shareToSocialMedia('facebook')}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mb-1">
                  <span className="font-bold">f</span>
                </div>
                <span className="text-xs">Facebook</span>
              </button>

              <button
                onClick={() => shareToSocialMedia('twitter')}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white mb-1">
                  <span className="font-bold">t</span>
                </div>
                <span className="text-xs">Twitter</span>
              </button>

              <button
                onClick={() => shareToSocialMedia('linkedin')}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white mb-1">
                  <span className="font-bold">in</span>
                </div>
                <span className="text-xs">LinkedIn</span>
              </button>

              <button
                onClick={() => shareToSocialMedia('whatsapp')}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mb-1">
                  <span className="font-bold">w</span>
                </div>
                <span className="text-xs">WhatsApp</span>
              </button>

              <button
                onClick={() => shareToSocialMedia('email')}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white mb-1">
                  <span className="font-bold">@</span>
                </div>
                <span className="text-xs">Email</span>
              </button>

              <button
                onClick={copyToClipboard}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white mb-1">
                  <span className="font-bold">🔗</span>
                </div>
                <span className="text-xs">Copy Link</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
