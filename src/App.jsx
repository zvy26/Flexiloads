import React from 'react'
import HomePage from './components/HomePage'
import About from './components/About'
import Advantages from './components/Advantages'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Faqs from './components/Faqs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
       <HomePage/>
       <About/>
       <Advantages/>
       <Services/>
       <Testimonials/>
       <Faqs/>
       <Footer/>
    </div>
  )
}

export default App