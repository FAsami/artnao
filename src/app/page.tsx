import {
  TopArtists,
  TopArtworks,
  HeroSection,
  ArtworkCategories
} from './components/home/'

const HomePage = async () => {
  return (
    <div className="mt-4">
      <HeroSection />
      <ArtworkCategories />
      <TopArtworks />
      <TopArtists />
    </div>
  )
}

export default HomePage
