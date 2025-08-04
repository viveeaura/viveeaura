import Link from 'next/link'
import { RiArrowRightLine } from 'react-icons/ri'

const featuredProperties = [
  {
    id: '1',
    title: 'Family Escape',
    image: 'https://public.readdy.ai/ai/img_res/be9f3ef1b1a5f823eae85ca3a865c44a.jpg',
    description: '2 beds · 1 bath, Up to 20% off food and services',
    price: '$2,400/mo'
  },
  {
    id: '2',
    title: 'Business Trip',
    image: 'https://public.readdy.ai/ai/img_res/02a384168910399559872ff4be1e1671.jpg',
    description: '1 bed · 1 bath, upto 15% discount on rooms',
    price: '$1,800/mo'
  },
  {
    id: '3',
    title: 'Luxury Penthouse',
    image: 'https://public.readdy.ai/ai/img_res/bc7391e00b75163867c80669bf39525c.jpg',
    description: '3 beds · 2 baths, Discount room rates, reward points',
    price: '$4,500/mo'
  },
  {
    id: '4',
    title: 'Cozy Studio',
    image: 'https://public.readdy.ai/ai/img_res/4e1119464982756701eb93bdca871143.jpg',
    description: 'Studio · 1 bath',
    price: '$1,200/mo'
  }
]

export default function FeaturedProperties() {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="sm:text-4xl text-2xl font-bold mb-8 capitalize">Offers to inspire you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className="group relative overflow-hidden rounded-lg h-80"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">{property.title}</h3>
                <p className="text-white/80 text-sm mb-3">{property.description} · {property.price}</p>
                <span className="inline-flex items-center text-white text-sm font-medium">
                  View Details
                  <RiArrowRightLine className="w-4 h-4 ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
