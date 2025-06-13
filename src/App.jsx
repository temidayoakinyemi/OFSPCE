import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Launch from './Components/Launch/Launch'
import Build from './Components/Build/Build'
import Compliance from './Components/Compliance/Compliance'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Launch />
      <Build />
      <Compliance />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App