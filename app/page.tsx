import React from 'react'
import HeroNavbar from './main'
import Projects from './projects'
import Footer from './timeline'
import Navbar from './navbar'
const page = () => {
  return (
    <div className='flexn '>
      <Navbar/>
      
      <HeroNavbar/>

      <Projects />

      <Footer/>
      
    </div>
  )
}

export default page
