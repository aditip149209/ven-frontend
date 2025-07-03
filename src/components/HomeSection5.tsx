
import { Link } from 'react-router-dom'

function HomeSection5() {
  return (
    <div>
         <section className="w-full min-h-[50vh] flex items-center justify-center bg-brownlight font-elasemi">
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center md:items-start px-10 py-16 mx-auto">
        {/* Left: Heading and Button */}
        <div className="md:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-semibold text-textmain mb-4">
            BRING YOUR VISION TO LIFE
          </h2>
          <p className="text-textmain text-base md:text-2xl mb-8">
            Ready for a custom portrait, a bold charcoal sketch, or to join a vibrant art class? Let’s create something unforgettable together—your story, your style, your art.
          </p>
          <button className="px-6 py-3 text-xl rounded-lg bg-textmain duration-400 ease-in-out text-browndark font-bold transition hover:bg-coffee hover:text-textmain">
            <Link to="/contactme">Start now</Link>  
          </button>
        </div>

        {/* Right: List of Options */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex flex-col gap-6 md:ml-10">
          <div className="flex items-start gap-3">
            <span className="text-textmain mt-1">→</span>
            <span className="text-textmain text-xl cursor-pointer">
              Order a one-of-a-kind artwork in charcoal, graphite, acrylic, or your favorite medium—crafted just for you.
            </span>
          </div>
          <hr className="border-textmain" />
          <div className="flex items-start gap-3">
            <span className="text-textmain mt-1">→</span>
            <span className="text-textmain text-xl cursor-pointer">
              Join my live online art classes from anywhere in the world.
            </span>
          </div>
          <hr className="border-textmain" />
          <div className="flex items-start gap-3">
            <span className="text-textmain mt-1">→</span>
            <span className="text-textmain text-xl cursor-pointer">
              Browse speed drawings and inspiring projects—each piece made with heart and skill.
            </span>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HomeSection5