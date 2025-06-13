import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "WORK", href: "#work" },
  { name: "ABOUT", href: "#about" },
  { name: "CLASSES", href: "#classes" },
  
];

export default function Navbar() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="w-full bg-brownlight text-textmain px-20 flex items-center justify-between min-h-[10vh] relative">
      {/* Logo/Brand */}
      <div className="flex items-center gap-2 ">
        <p className="text-4xl font-semibold font-elasemi">My Art</p>
      </div>
      {/* Nav Links */}
      <ul className="hidden md:flex space-x-10">
        {navLinks.map((link, idx) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={() => setActive(idx)}
              className={`text-textmain font-elareg uppercase tracking-wider ${
                active === idx
                  ? "text-2xl px-4 py-2 leading-none rounded-full underline underline-offset-8 decoration-2 hover:bg-cardlight"
                  : "text-2xl px-4 py-3 leading-none rounded-full hover:bg-cardlight hover:underline underline-offset-8 hover:decoration-2"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <button
        className="block md:hidden text-textmain text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-brownlight flex flex-col items-center md:hidden shadow-lg">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(idx);
                setMenuOpen(false);
              }}
              className={`py-4 w-full text-center text-textmain font-bold uppercase tracking-wider border-b border-white ${
                active === idx
                  ? "underline underline-offset-8 decoration-2"
                  : "hover:underline"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// on mobile, the navbar should be a hamburger menu


