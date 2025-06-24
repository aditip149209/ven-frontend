import React from 'react'
import { useState } from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'


function HomeSection2() {
    const images = ["d1.jpg", "d2.jpg", "d3.jpg", "d4.jpg", "d5.jpg", "person1.jpg"];

  return (
    <div className="bg-brownlight">
        <div className='text-center text-textmain text-5xl font-elasemi mt-30 '>
            Specialized in charcoal, graphite, acrylic, coffee and more...
        </div>
        <div className='p-12 md:pt-24 pb-1 max-w-7xl mx-auto'>
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

        <div className="flex justify-center p-8">
            <a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cardlight text-textmain px-8 py-4 mb-10 rounded shadow font-semibold text-lg hover:bg-coffee hover:textmain transition"
            >
                View My Portfolio
            </a>
        </div>
    </div>
  )
}

export default HomeSection2