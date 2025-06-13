import React from 'react'

function HomeSection4() {
  return (
    <div>
        <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-cardlight">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-brownlight rounded-2xl p-8 shadow-lg flex flex-col">
          <span className="text-4xl text-textmain mb-6">
            {/* Replace with your own icon */}
            <svg width="32" height="32" fill="currentColor" className="inline"></svg>
          </span>
          <h3 className="text-4xl font-elasemi text-textmain mb-2 tracking-wide uppercase">
            SPEED DRAWING, ART IN MINUTES
          </h3>
          <p className="text-textmain font-elareg text-2xl leading-relaxed">
            Feel the rush as portraits and scenes take shape before your eyes—each piece is a burst of creativity, perfect for anyone who loves art with energy and flair.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-brownlight rounded-2xl p-8 shadow-lg flex flex-col">
          <span className="text-4xl text-textmain mb-6">
            {/* Replace with your own icon */}
            <svg width="32" height="32" fill="currentColor" className="inline"></svg>
          </span>
          <h3 className="text-4xl font-elasemi text-textmain mb-2 tracking-wide uppercase">
            CHARCOAL & GRAPHITE, PURE EXPRESSION
          </h3>
          <p className="text-textmain text-2xl font-elareg text-2xl leading-relaxed">
            Step into a world of striking contrasts and delicate details. Every drawing is crafted with care, bringing emotion and timeless beauty to your space.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-brownlight rounded-2xl p-8 shadow-lg flex flex-col">
          <span className="text-4xl text-textmain mb-6">
            {/* Replace with your own icon */}
            <svg width="32" height="32" fill="currentColor" className="inline"></svg>
          </span>
          <h3 className="text-4xl font-elasemi text-textmain mb-2 tracking-wide uppercase">
            COLOR PENCIL, VIBRANT STORYTELLING
          </h3>
          <p className="text-textmain font-elareg text-2xl leading-relaxed">
            Watch your ideas bloom in vivid color. From lifelike portraits to playful scenes, each artwork is full of warmth, personality, and imagination.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-brownlight rounded-2xl p-8 shadow-lg flex flex-col">
          <span className="text-4xl text-textmain mb-6">
            {/* Replace with your own icon */}
            <svg width="32" height="32" fill="currentColor" className="inline"></svg>
          </span>
          <h3 className="text-4xl font-elasemi text-textmain mb-2 tracking-wide uppercase">
            ART CLASSES, CREATIVITY FOR EVERYONE
          </h3>
          <p className="text-textmain font-elareg text-2xl leading-relaxed">
            Join and explore new techniques together. Whether you’re just starting or looking to grow, interactive classes make learning art fun and accessible.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HomeSection4