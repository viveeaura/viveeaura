import Image from 'next/image'
import Link from 'next/link'

const neighborhoodGuides = [
  {
    id: 'manhattan',
    name: 'Manhattan',
    title: 'Living in Manhattan',
    description: 'Discover the best neighborhoods, local hotspots, and average rental prices in the heart of New York City.',
    mainImage: 'https://public.readdy.ai/ai/img_res/035ed8d92e3d5919a43a945b70da02ae.jpg',
    thumbnailImages: [
      'https://public.readdy.ai/ai/img_res/42b5d8f7f9f1e34a2c6bb5724bdf468e.jpg',
      'https://public.readdy.ai/ai/img_res/38ec72452db538ef580e8405dd08e06d.jpg',
      'https://public.readdy.ai/ai/img_res/8c5ed623253ba252a5d524f798dab045.jpg',
      'https://public.readdy.ai/ai/img_res/347888f62965c3cd7eae42d2ce3b8119.jpg'
    ]
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    title: 'Living in Brooklyn',
    description: 'From trendy Williamsburg to family-friendly Park Slope, find your perfect Brooklyn neighborhood.',
    mainImage: 'https://public.readdy.ai/ai/img_res/3895e62f2b03da0785c928c18b5a2baa.jpg',
    thumbnailImages: [
      'https://public.readdy.ai/ai/img_res/7935ac7990618407851a15b1739f6481.jpg',
      'https://public.readdy.ai/ai/img_res/9388c346589af45d23d5b99ec532e747.jpg',
      'https://public.readdy.ai/ai/img_res/a8db113e80451e8c3e16b2ce68696a84.jpg',
      'https://public.readdy.ai/ai/img_res/a17db859c8f1b346a88da581d360d607.jpg'
    ]
  }
]

export default function NeighborhoodGuides() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="sm:text-4xl text-2xl font-bold mb-8">Neighborhood Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {neighborhoodGuides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-80">
                <img
                  src={guide.mainImage}
                  alt={`${guide.name} Guide`}
                  className="object-cover object-top h-full w-full"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {guide.name}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>

                <div className="flex space-x-3 mb-5">
                  {guide.thumbnailImages.map((images, index) => (
                    <div key={index} className="w-16 h-16 rounded overflow-hidden">
                      <img
                        src={images}
                        alt={`${guide.name} neighborhood`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>

                <Link
                  href={`/neighborhoods/${guide.id}`}
                  className="inline-block bg-accent hover:bg-accent/90 text-white px-5 py-2 font-medium rounded-lg whitespace-nowrap"
                >
                  Explore Neighborhood
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
