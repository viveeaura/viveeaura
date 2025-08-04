import Link from 'next/link'
import { RiHeartLine, RiShareLine, RiStarFill, RiStarHalfFill, RiStarLine, RiCalendarLine, RiArrowRightLine } from 'react-icons/ri'

const trendingProperties = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    location: 'Financial District, NYC',
    image: 'https://public.readdy.ai/ai/img_res/f1abce78fbacb02e81d3dbd963d9b2cd.jpg',
    price: '$2,800/night',
    size: 'Room Size: 50sqm',
    bed: 'Bed: 1 bed',
    max: 'Max: 6 adults',
    rating: 4.5,
    reviews: 42,
    tag: { text: 'Popular', color: 'bg-accent' }
  },
  {
    id: '2',
    title: 'Luxury Waterfront Condo',
    location: 'Brooklyn Heights, NYC',
    image: 'https://public.readdy.ai/ai/img_res/69fb77b370ddd22c1e71b232dded5b2a.jpg',
    price: '$3,600/night',
    originalPrice: '$4,000/night',
    size: 'Room Size: 50sqm',
    bed: 'Bed: 1 bed',
    max: 'Max: 6 adults',
    rating: 4,
    reviews: 28,
    tag: { text: '-10%', color: 'bg-secondary' }
  },
  {
    id: '3',
    title: 'Charming West Village Studio',
    location: 'West Village, NYC',
    image: 'https://public.readdy.ai/ai/img_res/77c34cbd1a0059da09fce488590c7e69.jpg',
    price: '$1,750/night',
    size: 'Room Size: 50sqm',
    bed: 'Bed: 1 bed',
    max: 'Max: 6 adults',
    rating: 5,
    reviews: 56
  },
  {
    id: '4',
    title: 'Spacious Soho Loft',
    location: 'Soho, NYC',
    image: 'https://public.readdy.ai/ai/img_res/f0b5df59e6525ad7f2063d975c43f896.jpg',
    price: '$3,200/night',
    rating: 4.5,
    size: 'Room Size: 50sqm',
    bed: 'Bed: 1 bed',
    max: 'Max: 6 adults',
    reviews: 87,
    tag: { text: 'Bestseller', color: 'bg-green-500' }
  },
  {
    id: '5',
    title: 'Garden Apartment',
    location: 'Upper West Side, NYC',
    image: 'https://public.readdy.ai/ai/img_res/c1f641df1368538f08a33800fa407130.jpg',
    price: '$2,100/night',
    rating: 4,
    size: 'Room Size: 50sqm',
    bed: 'Bed: 1 bed',
    max: 'Max: 6 adults',
    reviews: 34
  }
]

const renderStars = (rating) => {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<RiStarFill key={i} className="text-yellow-400" />)
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<RiStarHalfFill key={i} className="text-yellow-400" />)
    } else {
      stars.push(<RiStarLine key={i} className="text-yellow-400" />)
    }
  }
  return stars
}

export default function TrendingProperties() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="sm:text-4xl text-2xl font-bold">Trending Properties</h2>
          <Link href="#" className="text-accent font-medium flex items-center">
            View All
            <RiArrowRightLine className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
            {trendingProperties.map((property) => (
              <div key={property.id} className="min-w-[280px] max-w-[280px] bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group">
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
                      {renderStars(property.rating)}
                    </div>
                    <span className="text-gray-500 text-xs ml-1">({property.reviews} reviews)</span>
                  </div>

                  {/* Property info */}
                  <h3 className="font-bold mb-1">{property.title}</h3>
                  <section className='text-gray-500 text-sm mb-3'>
                    <p>{property.size}</p>
                    <p>{property.bed}</p>
                    <p>{property.max}</p>
                    <p>{property.location}</p>
                  </section>

                  {/* Price and booking */}
                  <div className="flex justify-between items-center border-t pt-3">
                    <div>
                      <span className="font-bold text-lg">{property.price}</span>
                      {property.originalPrice && (
                        <span className="text-gray-400 text-sm line-through ml-2">
                          {property.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-accent/10 hover:bg-accent text-accent hover:text-white p-2 rounded-full transition-colors">
                      <RiCalendarLine className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
