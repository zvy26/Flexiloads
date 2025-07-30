import React from 'react'
import HomePage from './components/HomePage'
import About from './components/About'
import Advantages from './components/Advantages'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import ContactPage from './routes/ContactPage'
import TariffPage from './routes/TariffPage'
import ServicesPage from './routes/ServicesPage'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <HomePage />
            <About />
            <Advantages />
            <Services />
            <Testimonials />
            <Faqs />
          </>
        } />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/tariffs' element={<TariffPage/>} />
        <Route path='/services' element={<ServicesPage/>} />
      </Routes>
       <Footer />
    </div>
  )
}

export default App
