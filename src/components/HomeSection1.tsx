import React from 'react'

function HomeSection1() {
  return (
    <section className="bg-teal-50 w-full">
      <div className="mx-auto flex flex-col md:flex-row items-center min-h-[80vh]">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="/section1.jpg" 
            alt="Section Visual" 
            className="w-full h-64 md:h-auto p-10 rounded-[50px] object-cover"
          />
        </div>
        {/* Right: Text */}
        <div className="w-full p-10 md:w-1/2 flex flex-col items-start md:pl-12 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#f47c5b] mb-6">
            Hi! I'm Lauren Hom.
          </h1>
          <p className="text-xl md:text-2xl text-teal-900 mb-8 font-serif">
            I'm a <span className="font-bold">designer & lettering artist</span> with a knack for marketing who loves helping creatives and brands get more eyes on their work.
          </p>
          <button
            className="bg-[#f47c5b] text-white px-8 py-4 rounded shadow font-semibold text-lg hover:bg-[#e05d3c] transition "
          >
            TELL ME MORE!
          </button>
        </div>
      </div>
    </section>
    
  )
}

export default HomeSection1
