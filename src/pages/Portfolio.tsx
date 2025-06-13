import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'


import Navbar from '../components/Navbar'


function Portfolio() {
  const images = ["d1.jpg", "d2.jpg", "d3.jpg", "d4.jpg", "d5.jpg"];
  return (
    <div>
       <Navbar />
       <div className='p-12 md:pt-24 pb-1'>
            <ResponsiveMasonry  
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                gutterBreakpoints={{350: "20px", 750: "16px", 900: "48px"}}
            >
                <Masonry>
                {images.map(src => (
                    <img src={src} className="rounded-lg shadow" />
                ))}

                </Masonry>
            </ResponsiveMasonry>
        </div>
    </div>
  )
}

export default Portfolio

