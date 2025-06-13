import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-800 w-full p-8 flex flex-col items-center justify-center h-full">
      <div className="flex space-x-6 mb-4">
        {/* Example social icons or links can go here */}
        <a href="#" className="text-slate-300 hover:text-blue-400"><img 
          src="instagram.png"
          className='h-12 w-12'
          />
          </a>
      </div>
      <p className="text-slate-300 text-sm text-center border-t border-slate-600 pt-4 w-full max-w-2xl">
        Copyright © 2025
      </p>
    </footer>
  )
}

export default Footer