import React from 'react'
import Aboutus from './sections/about/Aboutus'
import Home from "./Sections/Home/Home"
import TechStack from './Sections/skills/TechStack'
import Ourservices from './Sections/services/OurServices'
import Projects from './Sections/projects/Projects'
const App = () => {
  return (
    <div className='lg:pt-31 pt-13 w-full '>
      <Home/>
      <Aboutus/>
      <TechStack/>
      <Ourservices/>
      <Projects/>


      
    </div>
  )
}

export default App
