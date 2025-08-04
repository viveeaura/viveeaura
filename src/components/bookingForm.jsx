'use client'

import { useState } from 'react'
import { RiCalendarLine, RiArrowDownSLine } from 'react-icons/ri'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function BookingForm({classes}) {
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)

  // Disable current day and next two days
  const disableDates = (date) => {
    const today = new Date()
    const twoDaysLater = new Date(today)
    twoDaysLater.setDate(today.getDate() + 2)
    return date >= today && date <= twoDaysLater
  }

  return (
    <section className={`${classes ? '' : 'bg-white py-12 -mt-8 relative z-10 mx-4 md:mx-8 rounded-lg'}`}>
      <div className={` ${classes ? '' : 'container mx-auto px-4 max-w-7xl' }`}>
        <div className={` ${classes ? 'space-y-3' : 'grid grid-cols-1 md:grid-cols-5' } gap-4`}>
          {/* Date Picker */}
          <div className="border-r border-gray-100 pr-4 col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-in / Check-out</label>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  selectsStart
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={new Date()}
                  filterDate={disableDates}
                  placeholderText="Check-in"
                  className="w-full py-3 pl-3 pr-16 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <RiCalendarLine className="text-gray-400" />
                </div>
              </div>
              <div className="relative">
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  selectsEnd
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={checkInDate}
                  filterDate={disableDates}
                  placeholderText="Check-out"
                  className="w-full py-3 pl-3 pr-16 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <RiCalendarLine className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Guests Selector */}
          <div className="border-r border-gray-100 pr-4 col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <select
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full py-3 pl-3 pr-8 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={`adults-${num}`} value={num}>
                      {num} {num === 1 ? 'Adult' : 'Adults'}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <RiArrowDownSLine className="text-gray-400" />
                </div>
              </div>
              <div className="relative">
                <select
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="w-full py-3 pl-3 pr-8 border border-gray-200 rounded text-sm focus:outline-none focus:border-accent appearance-none"
                >
                  {[0, 1, 2, 3, 4].map((num) => (
                    <option key={`children-${num}`} value={num}>
                      {num} {num === 1 ? 'Child' : 'Children'}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <RiArrowDownSLine className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex-row">
            <button className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 font-medium rounded-lg whitespace-nowrap transition-colors">
              Check Availability
            </button>
            <div className="text-center text-sm text-gray-500 my-2">
              You won't be charged yet
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
