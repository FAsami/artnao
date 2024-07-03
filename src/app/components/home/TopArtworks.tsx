import Image from 'next/image'
import Link from 'next/link'
import { BiPlus } from 'react-icons/bi'

const artworks = [
  {
    id: 1,
    title: 'Ethereal Dreams',
    artist: 'Ava Harper',
    imageUrl: '/hero-slider/art4.jpg',
    price: 1990,
    description:
      'Mesmerizing journey through surreal landscapes, capturing ethereal beauty and imagination.'
  },
  {
    id: 2,
    title: 'Mystic Waters',
    artist: 'Liam Turner',
    imageUrl: '/hero-slider/art5.png',
    price: 890,
    description:
      'Enchanting depiction of a tranquil, mist-covered lake evoking a sense of mystery and peace.'
  },
  {
    id: 3,
    title: 'Cosmic Whispers',
    artist: 'Sophia Brooks',
    imageUrl: '/hero-slider/art3.jpg',
    price: 901,
    description:
      'Captivating exploration of the universe and its secrets, blending cosmic wonder with artistic expression.'
  }
]

const TopArtworks = () => {
  return (
    <section className="py-16 bg-amber-100 px-6 rounded-xl mb-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center font-secondary mb-16">
          <span className="text-amber-600 font-secondary">Featured</span>{' '}
          artworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="bg-white shadow-sm rounded-t-lg overflow-hidden border-b-4 border-b-amber-600"
            >
              <div className="relative h-80 w-auto">
                <Image
                  className="object-cover"
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  layout="fill"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1 font-secondary text-center">
                  {artwork.title}
                </h3>
                <p className="text-gray-700 mb-4 text-center text-xs">
                  By <span className="text-amber-500">{artwork.artist}</span>
                </p>
              </div>
              <div className="text-gray-500 text-sm px-6">
                {artwork.description}
              </div>
              <div className="flex items-center justify-between pl-6">
                <div className="text-gray-900 font-medium text-xl">
                  &#2547;{artwork.price}
                </div>
                <Link
                  href={'/'}
                  className="bg-amber-100 text-amber-900 px-4 py-2 hover:text-gray-700 rounded w-fit flex items-center gap-1 text-base hover:bg-amber-300 m-4"
                >
                  <BiPlus />
                  Add
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { TopArtworks }
