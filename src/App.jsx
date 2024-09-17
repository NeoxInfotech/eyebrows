import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Consultation from './pages/consultation/Consultation'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Services />} path='/services' />
        <Route element={<Consultation />} path='/consultancy' />
      </Routes>
      <Footer />
    </>
  )
}

export default App

