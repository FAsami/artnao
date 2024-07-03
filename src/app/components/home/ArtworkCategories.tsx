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

const ArtworkCategories = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center shadow-sm rounded-xl p-4 backdrop-blur-lg bg-white/30 border border-white/20"
          >
            <div className="rounded-full bg-amber-200 p-4 mb-2 relative z-10">
              <category.icon className="text-4xl text-amber-800" />
            </div>
            <h3 className="text-lg font-secondary font-semibold mb-2 relative z-10">
              {category.name}
            </h3>
            {category.description && (
              <p className="text-sm text-gray-600 px-3 relative z-10">
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

export { ArtworkCategories }
