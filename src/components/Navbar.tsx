import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "WORK", href: "/portfolio" },
  { name: "ABOUT", href: "/aboutme" },
  { name: "CLASSES", href: "/contactme" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-brownlight text-textmain px-4 md:px-20 flex items-center justify-between min-h-[10vh] max-h-[10vh] relative">
      {/* Logo/Brand */}
      <div className="flex items-center gap-2 ">
        <p className="text-4xl font-semibold font-elasemi">My Art</p>
      </div>
      {/* Nav Links */}
      <ul className="hidden md:flex space-x-10">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.href}
              className={({ isActive }) => 
                `text-textmain font-elareg uppercase duration-400 ease-in-out tracking-wider text-2xl px-4 py-3 leading-none rounded-full hover:bg-cardlight hover:underline underline-offset-8 hover:decoration-2 ${
                  isActive ? "underline underline-offset-8 decoration-2" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
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
        <div className="absolute top-full left-0 w-full bg-brownlight font-elareg flex flex-col items-center md:hidden shadow-lg z-50">
          {navLinks.map((link) => (
            <NavLink
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-6 w-full text-center text-textmain font-elareg uppercase tracking-wider border-b border-white text-xl ${isActive ? "underline underline-offset-8 decoration-2" : "hover:underline"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

// on mobile, the navbar should be a hamburger menu


