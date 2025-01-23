import React from 'react'
import LyricsWeb from '../home/LyricsWeb'
import Songs from '../home/Songs'
import AlphabetsTab from '../home/AlphabetsTab'
import Footer from '../home/Footer'

const Home = () => {
  return (
    <div>
      <LyricsWeb />
      <Songs />
      <AlphabetsTab />
      <Footer/>
    </div>
  )
}

export default Home
