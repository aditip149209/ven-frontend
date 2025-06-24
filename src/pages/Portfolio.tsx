import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Portfolio() {
  const images = ["d1.jpg", "d2.jpg", "d3.jpg", "d4.jpg", "d5.jpg", "person1.jpg", "sunset.jpg", "section1.jpg", "coffee1.jpg"];
  return (
    <div className='bg-brownfore'>   
      <Navbar />
      <div className="bg-brownfore">
        <div className='text-center text-textmain text-5xl font-elasemi mt-20'>
            My Works...
        </div>
        <div className='p-12 md:pt-20 pb-1 max-w-5xl mx-auto mb-30'>
            <ResponsiveMasonry  
                columnsCountBreakPoints={{750:1, 900: 2, 1200: 3}}
                gutterBreakpoints={{350: "20px", 750: "16px", 900: "48px"}}
            >
                <Masonry>
                {images.map(src => (
                    <img src={src} 
                         style={{
                            width: "100%",
                            display: "block",
                            borderRadius: "8px", 
                            objectFit: "cover"
                         }}      
                    className="rounded-lg shadow items-center" />
                ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Portfolio

