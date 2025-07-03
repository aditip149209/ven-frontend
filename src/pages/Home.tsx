import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeSection1 from '../components/HomeSection1'
import HomeSection2 from '../components/HomeSection2'
import HomeSection3 from '../components/HomeSection3'
import HomeSection4 from '../components/HomeSection4'
import HomeSection5 from '../components/HomeSection5'
import TestimonialSections from '../components/TestimonialSections'

import { Link } from 'react-router-dom'

import { Router } from 'react-router-dom'


function Home() {
  return (
    <div className='max-h-screen flex flex-col overflow-y-scroll hide-scrollbar md:custom-scroll'>
        <Navbar />
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection5 />
        <Footer />
    </div>
  )
}

export default Home