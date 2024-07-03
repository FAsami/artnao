import { TopArtists, TopArtworks, HeroSection } from './components/home/'

const HomePage = async () => {
  return (
    <div className="mt-4">
      <HeroSection />
      <TopArtists />
      <TopArtworks />
    </div>
  )
}

export default HomePage
