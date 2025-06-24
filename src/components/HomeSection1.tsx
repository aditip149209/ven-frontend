import React from 'react'

function HomeSection1() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center bg-brownfore font-elasemi">
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-24 mx-auto">
      {/* Left: Text Content */}
      <div className="md:w-1/2 flex flex-col items-start">
        <h1 className="text-textmain text-4xl md:text-5xl font-elareg mb-6 leading-tight tracking-wide">
          ART IN EVERY<br />SHADE AND STORY
        </h1>
        <p className="text-textmain text-base md:text-2xl mb-10 max-w-lg">
          From bold charcoal sketches to vibrant acrylics, every piece is crafted with heart. Commission your own portrait, join our online art classes, or browse a gallery of expressive works. Wherever you are in India, let’s create something unforgettable together.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-md bg-textdark text-brownfore text-xl font-medium shadow transition hover:bg-coffee">
            Commission
          </button>
          <button className="px-6 py-2 rounded-md bg-coffee text-textmain text-xl font-medium shadow transition hover:bg-cardlight">
            Portfolio
          </button>
        </div>
      </div>

      {/* Right: Image Grid */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <div className="flex gap-4">
          <img
            src="coffee1.jpg"
            alt="Art process"
            className="w-1/2 aspect-[1/1] object-cover rounded-xl"
          />
          <img
            src="pencils.jpg"
            alt="Colored pencils"
            className="w-1/2 aspect-[1/1.2] object-cover rounded-xl"
          />
        </div>
        <div className="flex gap-4">
          <img
            src="paintbrush.jpg"
            alt="Abstract art"
            className="w-full aspect-[2/1.2] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeSection1
