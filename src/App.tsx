import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import AboutMe from './pages/AboutMe'
import Enquire from './pages/Enquire'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactme" element={<Enquire/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/aboutme" element = {<AboutMe/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
