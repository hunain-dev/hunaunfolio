import React from 'react'
import TechStack from './Sections/skills/TechStack'
import Ourservices from './Sections/services/OurServices'
import Projects from './Sections/projects/Projects'
import Aboutus from "./Sections/about/Aboutus"
import Home from "./Sections/home/Home"
const App = () => {
  return (
    <div className='lg:pt-15 pt-13 w-full '>
      <Home/>
      <Aboutus/>
      <TechStack/>
      <Ourservices/>
      <Projects/>


      
    </div>
  )
}

export default App
