import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work} from './container'
import { Navbar } from './components'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Testimonial />
      <Work />
      <Footer />
    </div>
  )
}

export default App
