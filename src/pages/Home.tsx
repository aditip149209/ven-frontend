import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeSection1 from '../components/HomeSection1'
import HomeSection2 from '../components/HomeSection2'
import { Router } from 'react-router-dom'



function Home() {
  return (
    <div className='max-h-screen flex flex-col'>
        <Navbar />
        <HomeSection1 />
        <HomeSection2 />
        <Footer />
    </div>
  )
}

export default Home