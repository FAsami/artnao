import { Carousel } from 'antd'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'

const HeroSection = () => {
  const sliders = [
    {
      id: 2,
      title: 'Discover Unique Artworks',
      subtitle: 'Shop Original Pieces from Talented Creators',
      description:
        'Explore a vast collection of original artworks across various styles and mediums. Whether you’re looking for a statement piece for your home or a unique gift, you’ll find it here.',
      callToAction: { label: 'Order Now', url: '/' },
      img: '/hero-slider/slider-1.png'
    },
    {
      id: 1,
      title: 'Transform your vision into reality',
      subtitle: 'Find and hire top artists for any project',
      description:
        'From digital design to traditional painting, our talented artists are ready to bring your ideas to life. Browse portfolios, compare skills, and hire the perfect artist for your unique needs.',
      callToAction: { label: 'Find your artist', url: '/' },
      img: '/hero-slider/slider-2.png'
    },

    {
      id: 3,
      title: 'Join Our Artistic Community',
      subtitle: 'Connect, Collaborate, and Create',
      description:
        'Join a vibrant community of artists and art lovers. Share your work, collaborate on projects, and grow your network in an inspiring environment.',
      callToAction: { label: 'Join Today', url: '/' },
      img: '/hero-slider/slider-3.jpg'
    }
  ]

  return (
    <Carousel autoplay={true} dots={{ className: 'custom-dots' }}>
      {sliders.map(
        ({ id, img, title, subtitle, description, callToAction }) => (
          <div key={id}>
            <div className="flex shadow-sm flex-col md:flex-row pt-10 pb-0  md:pt-16 md:pb-12">
              <div className="w-full  md:w-1/2 order-2 md:order-none flex flex-col justify-center pr-0 md:pr-12 mb-8 md:mb-0">
                <h1
                  className={clsx(
                    'text-4xl md:text-6xl font-bold mb-4 text-neutral-700 tracking-wide text-center md:text-left'
                  )}
                >
                  <span className="text-brand-primary-600">
                    {title.split(' ')[0]}
                  </span>{' '}
                  {title.split(' ').slice(1).join(' ')}
                </h1>
                <h2 className="md:text-lg text-base text-center  text-neutral-600 mb-4 md:text-left">
                  {subtitle}
                </h2>
                <p className="text-sm tracking-wide text-neutral-400 mb-6 px-8 md:px-0 text-justify">
                  {description}
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link
                    href={callToAction.url}
                    className="bg-brand-secondary-800 text-white px-6 py-3 hover:text-gray-700 rounded-full w-fit flex items-center md:justify-start justify-center gap-2 text-sm md:text-base hover:bg-brand-primary-500"
                  >
                    {callToAction.label} <BiChevronRight />
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-none rounded mb-8 md:mb-0 overflow-hidden">
                <div className="relative h-60 md:h-[75vh] w-full">
                  <div className="z-50 absolute inset-8 md:inset-20 overflow-hidden -rotate-3 rounded-md border border-blue-100">
                    <Image
                      src={img}
                      alt="Art Image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute inset-0">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 689 735"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M408.442 714.243C311.931 769.632 177.249 702.47 109.185 649.305C41.1206 596.139 -1.78288 501.097 0.0569089 395.249C1.8967 289.401 40.4857 62.8162 120.223 14.2149C199.961 -34.3863 383.813 53.1829 478.483 103.642C573.154 154.1 699.922 215.2 688.248 316.967"
                        fill="url(#paint0_linear_50_7)"
                        fill-opacity="0.3"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_50_7"
                          x1="166"
                          y1="1.73094e-06"
                          x2="345"
                          y2="735"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#12C2E9" stop-opacity="0.3" />
                          <stop offset="1" stop-color="#80F9FF" />
                        </linearGradient>
                      </defs>
                    </svg>
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
