import React from 'react'

function ClassesInfo() {
  return (
    <div>
        <div>
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-brownfore">
      {/* Header & Description */}
      <div className="max-w-2xl text-left left-10 mb-12">
        <h2 className="text-5xl md:text-4xl font-elasemi text-textdark mb-4 tracking-wide">
          ART THAT MOVES, INSPIRES, CONNECTS
        </h2>
        <p className="text-textmain font-elareg text-base md:text-lg leading-relaxed">
          Step into a world where every stroke tells your story. From soulful charcoal portraits to vibrant acrylics, each piece is crafted with care and passion. Whether you’re looking for a custom commission or eager to learn new techniques, you’re always welcome here. Let’s create something unforgettable together.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-cardlight rounded-xl p-8 shadow-md flex flex-col items-start">
     
          <h3 className="text-3xl font-elasemi text-textmain mb-2 uppercase tracking-wide">
            Charcoal & Graphite Brilliance
          </h3>
          <p className="text-textmain font-elareg text-base leading-relaxed text-xl">
            Bring your memories to life with expressive sketches and detailed portraits. These classic mediums capture emotion and personality, making every piece a heartfelt keepsake or a truly special gift.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-cardlight rounded-xl p-8 shadow-md flex flex-col items-start">
          <h3 className="text-3xl font-elasemi text-textmain mb-2 uppercase tracking-wide">
            Acrylic & Color Pencil Wonders
          </h3>
          <p className="text-textmain font-elareg text-base leading-relaxed text-xl">
            Add energy and color to your space with bold acrylics and delicate pencil work. From lively scenes to imaginative abstracts, each artwork is designed to spark joy and inspiration.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-cardlight rounded-xl p-8 shadow-md flex flex-col items-start">
          <h3 className="text-3xl font-elasemi text-textmain mb-2 uppercase tracking-wide">
            Interactive Online Art Classes
          </h3>
          <p className="text-textmain font-elareg text-base leading-relaxed text-xl">
            Join my class and learn at your own pace. Explore everything from beginner basics to advanced speed drawing, and discover the joy of creating art together.
          </p>
        </div>
      </div>
    </section>
    </div>

    </div>
  )
}

export default ClassesInfo