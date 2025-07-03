

function Footer() {
  return (
    <footer className="bg-textdark w-full p-8 flex flex-col items-center justify-center min-h-[20vh]">
      <div className="flex space-x-6 mb-4">
        {/* Example social icons or links can go here */}
        <a href="#" className="text-slate-300 hover:text-blue-400"><img 
          src="instagram.png"
          className='h-12 w-12'
          />
          </a>
      </div>
      <p className="text-brownfore text-sm text-center border-t border-coffee pt-4 w-full max-w-2xl mb-0">
        Art by Vishwanath 
      </p>
    </footer>
  )
}

export default Footer