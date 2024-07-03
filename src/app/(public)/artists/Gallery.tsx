import clsx from 'clsx'
import Image from 'next/image'
import { BsBehance, BsDribbble, BsInstagram } from 'react-icons/bs'

const artists = [
  {
    name: 'Sahadat Hossain Sany',
    imageUrl: '/artist/artist_01.jpg',
    description:
      'Sahadat Hossain Sany is known for his abstract paintings, which often feature bold colors and unique textures. His works are highly sought after in contemporary art circles.',
    rating: 4.9,
    rank: 1,
    tags: ['Abstract', 'Bold Colors', 'Unique Textures']
  },
  {
    name: 'Asraful Islam Shaon',
    imageUrl: '/artist/artist_02.jpg',
    description:
      'Asraful Islam Shaon creates stunning digital art characterized by intricate details and vibrant hues. His pieces often capture surreal and imaginative scenes, making them popular among art enthusiasts.',
    rating: 4.8,
    rank: 3,
    tags: ['Digital Art', 'Intricate Details', 'Vibrant Hues']
  },
  {
    name: 'Jawad Islam',
    imageUrl: '/artist/artist_03.jpg',
    description:
      'Jawad Islam specializes in modern sculptures that explore the relationship between form and space. His minimalist aesthetic and innovative use of materials have earned him acclaim in the art world.',
    rating: 4.7,
    rank: 2,
    tags: ['Sculpture', 'Modern', 'Minimalist']
  },
  {
    name: 'Sahadat Hossain Sany',
    imageUrl: '/artist/artist_01.jpg',
    description:
      'Sahadat Hossain Sany is known for his abstract paintings, which often feature bold colors and unique textures. His works are highly sought after in contemporary art circles.',
    rating: 4.9,
    rank: 1,
    tags: ['Abstract', 'Bold Colors', 'Unique Textures']
  },
  {
    name: 'Asraful Islam Shaon',
    imageUrl: '/artist/artist_02.jpg',
    description:
      'Asraful Islam Shaon creates stunning digital art characterized by intricate details and vibrant hues. His pieces often capture surreal and imaginative scenes, making them popular among art enthusiasts.',
    rating: 4.8,
    rank: 3,
    tags: ['Digital Art', 'Intricate Details', 'Vibrant Hues']
  },
  {
    name: 'Jawad Islam',
    imageUrl: '/artist/artist_03.jpg',
    description:
      'Jawad Islam specializes in modern sculptures that explore the relationship between form and space. His minimalist aesthetic and innovative use of materials have earned him acclaim in the art world.',
    rating: 4.7,
    rank: 2,
    tags: ['Sculpture', 'Modern', 'Minimalist']
  }
]

const Gallery = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center font-secondary mt-16 md:mb-32">
          Artists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end md:items-center">
          {artists.map((artist, index) => (
            <div
              key={index}
              className={clsx('relative bg-white px-3 pb-6 pt-16 rounded-md')}
            >
              <div className="flex justify-center">
                <div className="relative rounded-full h-32 w-32">
                  <Image
                    className="object-cover rounded-full"
                    src={artist.imageUrl}
                    alt={artist.name}
                    layout="fill"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-xl text-slate-900 mb-4">
                  {artist.name}
                </h3>

                <p className="text-gray-500 my-8 text-sm text-left">
                  {artist.description}
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <button className="flex flex-col gap-1 items-center justify-center text-sm cursor-pointer">
                  <BsBehance className="text-xl" />
                  <span className="text-[10px] text-gray-500">Behance</span>
                </button>
                <button className="flex flex-col gap-1 items-center justify-center text-sm cursor-pointer">
                  <BsDribbble className="text-xl" />
                  <span className="text-[10px] text-gray-500">Dribble</span>
                </button>
                <button className="flex flex-col gap-1 items-center justify-center text-sm cursor-pointer">
                  <BsInstagram className="text-xl" />
                  <span className="text-[10px] text-gray-500">Instagram</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Gallery }
