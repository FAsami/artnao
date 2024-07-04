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
      <TopArtists />
      <TopArtworks />
      <FAQSection />
    </div>
  )
}

export default HomePage
