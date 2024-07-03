import React from 'react'
import { HeroSection } from './components/home'
import { TopArtists } from './components/home/TopArtist'

const HomePage = async () => {
  return (
    <div className="mt-4">
      <HeroSection />
      <TopArtists />
    </div>
  )
}

export default HomePage
