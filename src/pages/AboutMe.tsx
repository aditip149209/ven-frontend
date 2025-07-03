
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function AboutMe() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div>
        <section className="w-full min-h-[100vh] flex items-center justify-center bg-cardlight font-elareg">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-20 mx-auto">

        <div className="md:w-2/3 flex flex-col items-start">
          <h2 className="text-textmain text-3xl md:text-5xl font-elasemi mb-6">
            About Me
          </h2>
          <p className="text-textmain text-base md:text-3xl mb-6 max-w-xl">
            Hello! I’m Vishwanath, a passionate artist and educator specializing in charcoal, graphite, acrylic, and coffee art. With over 10 years of experience, I’ve helped hundreds of students across India unlock their creativity—whether through custom commissions or engaging online classes.
            <br /><br />
            My mission is to make art accessible, fun, and deeply personal. Every lesson and artwork is crafted with care, attention to detail, and a love for storytelling through visual expression.
          </p>
          <div className="flex gap-4 mt-4">
            <button 
            onClick={() => navigate('/contactme')}
            className="px-6 py-2 rounded-md text-2xl bg-textmain text-brownfore font-medium shadow transition hover:bg-coffee">
              Enquire
            </button>
            <button 
            onClick={() => navigate('/portfolio')}
            className="px-6 py-2 rounded-md text-2xl bg-brownlight text-textmain font-medium shadow transition hover:bg-coffee">
              Portfolio
            </button>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img
            src="person1.jpg"
            alt="Teacher portrait"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    </div>
    <Footer />
    </>
  )
}

export default AboutMe