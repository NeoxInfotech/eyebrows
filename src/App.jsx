import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Consultation from './pages/consultation/Consultation'
import Loader from './components/loader/Loader'

const App = () => {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2500)
  }, [])
  return (
    <>

      {
        loader ? <Loader /> :
          <div>
            <Navbar />
            <Routes>
              <Route element={<Home />} path='/' />
              <Route element={<About />} path='/about' />
              <Route element={<Services />} path='/services' />
              <Route element={<Consultation />} path='/consultancy' />
            </Routes>
            <Footer />
          </div>
      }


    </>
  )
}

export default App

