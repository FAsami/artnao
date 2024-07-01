import { Carousel } from 'antd'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'

const HeroSection = () => {
  const sliders = [
    {
      id: 1,
      title: 'Transform your vision into reality',
      subtitle: 'Find and hire top artists for any project',
      description:
        'From digital design to traditional painting, our talented artists are ready to bring your ideas to life. Browse portfolios, compare skills, and hire the perfect artist for your unique needs.',
      callToAction: { label: 'Find your artist', url: '/' },
      img: '/hero-slider/art3.jpg'
    },
    {
      id: 2,
      title: 'Discover Unique Artworks',
      subtitle: 'Shop Original Pieces from Talented Creators',
      description:
        'Explore a vast collection of original artworks across various styles and mediums. Whether you’re looking for a statement piece for your home or a unique gift, you’ll find it here.',
      callToAction: { label: 'Shop Now', url: '/' },
      img: '/hero-slider/art5.png'
    },
    {
      id: 3,
      title: 'Join Our Artistic Community',
      subtitle: 'Connect, Collaborate, and Create',
      description:
        'Join a vibrant community of artists and art lovers. Share your work, collaborate on projects, and grow your network in an inspiring environment.',
      callToAction: { label: 'Join Today', url: '/' },
      img: '/hero-slider/art4.jpg'
    }
  ]

  return (
    <Carousel dots={{ className: 'custom-dots' }}>
      {sliders.map(
        ({ id, img, title, subtitle, description, callToAction }) => (
          <div key={id}>
            <div className="flex bg-white border border-gray-100 rounded-xl p-8">
              <div className="w-1/2 flex flex-col justify-center pr-12">
                <h1
                  className={clsx(
                    'text-5xl font-bold mb-4 font-secondary tracking-wide'
                  )}
                >
                  <span className="text-amber-700 font-secondary">
                    {title.split(' ')[0]}
                  </span>{' '}
                  {title.split(' ').slice(1).join(' ')}
                </h1>
                <h2 className="text-lg text-gray-500 mb-4 font-secondary text-left">
                  {subtitle}
                </h2>
                <p className="text-sm tracking-wide text-gray-400 mb-6">
                  {description}
                </p>

                <Link
                  href={callToAction.url}
                  className="bg-amber-600 text-white px-6 py-2.5 hover:text-gray-700 rounded-sm w-fit font-secondary flex items-center gap-2 text-2xl hover:bg-amber-300"
                >
                  {callToAction.label} <BiChevronRight />
                </Link>
              </div>
              <div className="w-1/2 rounded-3xl overflow-hidden">
                <div className="relative h-[75vh] w-full">
                  <div className="absolute inset-24 overflow-hidden rounded-md -rotate-45 opacity-20 border">
                    <Image
                      src={img}
                      alt="Art Image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute inset-24 overflow-hidden -rotate-3 rounded-md bg-white border">
                    <Image
                      src={img}
                      alt="Art Image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </Carousel>
  )
}

export { HeroSection }
