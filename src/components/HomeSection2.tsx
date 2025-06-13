import React from 'react'
import { useState } from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'




function HomeSection2() {
    const images = ["d1.jpg", "d2.jpg", "d3.jpg", "d4.jpg", "d5.jpg"];

  return (
    <div>
        
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
        <div className="flex justify-center p-8">
            <a 
                href="https://your-portfolio-url.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#f47c5b] text-white px-8 py-4 rounded shadow font-semibold text-lg hover:bg-[#e05d3c] transition"
            >
                View My Portfolio
            </a>
        </div>

    </div>
  )
}

export default HomeSection2