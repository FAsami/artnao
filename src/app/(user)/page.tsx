import { Categories } from './components/home/Categories'
import { FAQSection } from './components/home/FAQSection'
import { FeaturedArtists } from './components/home/FeaturedArtists'
import { HeroSection } from './components/home/HeroSection'
import { ImageGallery } from './components/home/ImageGallery'

const HomePage = () => {
  return (
    <div className="relative">
      <div className="max-w-screen-xl px-3 mx-auto">
        <HeroSection />
      </div>
      <Categories />
      <ImageGallery />
      <FeaturedArtists />
      <FAQSection />

      <div className="blurry-light absolute  -translate-x-1/2 top-20 z-10 opacity-50"></div>
    </div>
  )
}
export default HomePage
