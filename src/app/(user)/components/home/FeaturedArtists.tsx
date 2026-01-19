import clsx from 'clsx'
import Image from 'next/image'
import {
  BsBehance,
  BsDribbble,
  BsFillStarFill,
  BsInstagram,
  BsLink,
  BsQuote,
  BsStar,
  BsStarHalf,
  BsTrophy
} from 'react-icons/bs'
import { LottieContainer } from '@/components/LottieContainer'
import {
  BiArrowFromRight,
  BiArrowToRight,
  BiLinkExternal,
  BiRightArrow,
  BiStar,
  BiUser
} from 'react-icons/bi'
import Link from 'next/link'
import { IoRibbon } from 'react-icons/io5'
import { ArrowRightOutlined, BookFilled, LinkOutlined } from '@ant-design/icons'

const artists = [
  {
    name: 'Asraful Islam Shaon',
    imageUrl: '/artists/artist_02.jpg',
    description:
      'Asraful Islam Shaon creates stunning digital art characterized by intricate details and vibrant hues. His pieces often capture surreal and imaginative scenes, making them popular among art enthusiasts.',
    rating: 4.8,
    rank: 3,
    tags: ['Digital Art', 'Intricate Details', 'Vibrant Hues']
  },
  {
    name: 'Sahadat Hossain Sany',
    imageUrl: '/artists/artist_01.jpg',
    description:
      'Sahadat Hossain Sany is known for his abstract paintings, which often feature bold colors and unique textures. His works are highly sought after in contemporary art circles.',
    rating: 4.9,
    rank: 1,
    tags: ['Abstract', 'Bold Colors', 'Unique Textures']
  },
  {
    name: 'Jawad Islam',
    imageUrl: '/artists/artist_03.jpg',
    description:
      'Jawad Islam specializes in modern sculptures that explore the relationship between form and space. His minimalist aesthetic and innovative use of materials have earned him acclaim in the art world.',
    rating: 4.7,
    rank: 2,
    tags: ['Sculpture', 'Modern', 'Minimalist']
  }
]

const FeaturedArtists = () => {
  return (
    <section className="relative pb-16 md:pb-48">
      <div className="absolute left-0 top-0">
        <BsTrophy className="text-7xl md:text-9xl text-blue-50" />
      </div>
      <div className="absolute right-0 top-10 opacity-5 h-16 md:h-28 w-auto">
        <LottieContainer path="/lottie/arrow-upwards.lottie" />
      </div>
      <div className="container mx-auto">
        <div className="relative my-20 md:my-48">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-3 opacity-50 top-0  -z-10"></div>
          <h2 className="text-4xl font-bold text-center">
            <span className="text-brand-secondary-600">Featured</span> artists
          </h2>
          <div className="text-sm text-center text-brand-primary-200">
            Artist who broke the records of artnao
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 items-end md:items-center">
          {artists.map((artist, index) => (
            <div
              key={index}
              className={clsx(
                'relative bg-white px-3 pb-6 pt-16 rounded-md shadow'
                // {
                //   'md:order-2 -translate-y-24 relative z-10': artist.rank === 1,
                //   'md:order-1 md:-rotate-12 md:translate-x-12 ':
                //     artist.rank === 2,
                //   'md:order-3 md:rotate-12 md:-translate-x-8 ':
                //     artist.rank === 3
                // }
              )}
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
                <Link href={`/artists/${artist.name}`}>
                  <h3 className="font-semibold flex items-center justify-center gap-2 text-xl text-slate-900 mb-4">
                    {artist.name}
                    <BiLinkExternal className="text-neutral-500 text-sm" />{' '}
                  </h3>
                </Link>
                {artist.rank === 1 && (
                  <IoRibbon className="text-brand-primary-500 absolute top-2 right-2 text-4xl" />
                )}{' '}
                <div className="flex items-center justify-center gap-1 flex-col">
                  <div className="flex items-center justify-center mt-1 gap-0.5">
                    <BsFillStarFill className="text-amber-300" />
                    <BsFillStarFill className="text-amber-300" />
                    <BsFillStarFill className="text-amber-300" />
                    <BsStarHalf className="text-amber-300" />
                    <BsStar className="text-amber-300" />
                  </div>

                  <div className="text-xs text-brand-primary-200">
                    (190 reviews)
                  </div>
                </div>
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
              <div className="flex items-center justify-end mt-12 gap-2">
                {/* <Link
                  href={`/artists/${artist.rank}`}
                  className="flex items-center gap-1 border border-brand-primary-500 text-sm justify-center text-brand-primary-500 w-fit px-3 py-1 rounded-full"
                >
                  <BiUser /> Artnao profile
                </Link> */}
                <Link
                  href={`/artists/${artist.rank}`}
                  className="flex items-center  font-semibold rounded-full border-brand-secondary-500 gap-3 text-sm justify-center text-brand-secondary-500 w-fit px-3 py-1"
                >
                  Get an art <ArrowRightOutlined />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { FeaturedArtists }
