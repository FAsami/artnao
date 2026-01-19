import { IconType } from 'react-icons/lib'
import { GiPaintBrush, GiPhotoCamera, GiCube, GiPalette } from 'react-icons/gi'

interface Category {
  name: string
  icon: IconType
  description?: string
}

const categories: Category[] = [
  {
    name: 'Paintings',
    icon: GiPaintBrush,
    description:
      'Explore a variety of paintings in different styles and mediums.'
  },
  {
    name: 'Photography',
    icon: GiPhotoCamera,
    description:
      'Discover stunning photographs captured by talented photographers.'
  },
  {
    name: 'Prints',
    icon: GiPalette,
    description:
      'Find high-quality prints of original artworks, perfect for collectors.'
  },
  {
    name: 'Sculptures',
    icon: GiCube,
    description:
      'Experience the beauty of three-dimensional sculptures in various materials.'
  },
  {
    name: 'Digital Art',
    icon: GiPaintBrush,
    description:
      'Immerse yourself in the world of digital creativity and innovation.'
  }
]

const Categories = () => {
  return (
    <div className="container mx-auto my-20 md:my-48 relative">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-6 px-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative transition-all hover:bg-brand-primary-50 hover:scale-105 flex flex-col items-center text-center shadow-sm rounded-xl p-4 backdrop-blur-lg bg-white/30 border border-brand-primary-50"
          >
            <div className="rounded-full bg-brand-primary-50 p-4 mb-2 relative z-10">
              <category.icon className="text-2xl md:text-4xl text-brand-secondary-600" />
            </div>
            <h3 className="text-base md:text-lg text-brand-secondary-900 font-semibold mb-2 relative z-10">
              {category.name}
            </h3>
            {category.description && (
              <p className="text-xs md:text-sm text-gray-400 px-3 relative z-10">
                {category.description}
              </p>
            )}
            <div className="absolute inset-0 bg-brush-stroke bg-cover opacity-25 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Categories }
