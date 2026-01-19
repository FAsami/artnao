import clsx from 'clsx'
import { Image } from 'antd'
import { LottieContainer } from '@/components/LottieContainer'
import { IoColorPaletteOutline } from 'react-icons/io5'

export const ImageGallery = () => {
  const _items = [
    { span: 2, url: '/arts/art-work-1.png' },
    { span: 3, url: '/arts/art-work-2.jpg' },
    { span: 1, url: '/arts/art-work-3.jpg' },
    { span: 3, url: '/arts/art-work-4.png' },
    { span: 1, url: '/arts/art-work-8.jpg' },
    { span: 1, url: '/arts/art-work-6.png' },
    { span: 2, url: '/arts/art-work-7.jpg' },
    { span: 1, url: '/arts/art-work-8.jpg' }
  ]

  return (
    <div className="relative">
      <div className="absolute left-0 rotate-180 top-10 opacity-5 h-16 md:h-28 w-auto">
        <LottieContainer path="/lottie/arrow-upwards.lottie" />
      </div>
      <div className="relative my-16">
        <h2 className="text-4xl font-bold text-center text-brand-secondary-600">
          Trending <span className="text-brand-primary-600">Arts</span>
        </h2>
        <div className="text-sm text-center text-brand-primary-200">
          Artworks which created another milestone
        </div>
      </div>
      <div className="bg-white h-full py-6 sm:py-8 lg:py-12 container mx-auto">
        <div className="text-brand-secondary-50 -z-10 text-9xl md:text-[200px] absolute right-0 top-0">
          <IoColorPaletteOutline />
        </div>
        <div className="px-2">
          <div
            className={clsx(
              'grid',
              'grid-cols-1',
              'md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]',
              'gap-2',
              'auto-rows-[minmax(80px,auto)]',
              'grid-flow-dense'
            )}
          >
            {_items.map(({ span, url }, index) => (
              <div
                key={url}
                className={clsx(
                  'border rounded overflow-hidden hover:scale-95 transition-all',
                  span === 2 && 'md:col-span-2 md:row-span-2 md:min-h-[200px]',
                  span === 3 && 'md:col-span-3 md:row-span-2 md:min-h-[400px]',
                  'md:min-h-[100px]'
                )}
              >
                <Image
                  src={url}
                  alt={`Artwork ${index + 1}`}
                  preview={true}
                  className="w-full h-full object-cover"
                  style={{ height: '100%', width: '100%' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
