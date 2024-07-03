import {
  TopArtists,
  TopArtworks,
  HeroSection,
  ArtworkCategories,
  FAQSection
} from './components/home/'

const HomePage = async () => {
  return (
    <div className="mt-4">
      <HeroSection />
      <ArtworkCategories />
      <TopArtworks />
      <TopArtists />
      <FAQSection />
    </div>
  )
}

export default HomePage
