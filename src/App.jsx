import React from 'react'
import Home from './sections/home/Home'
import Aboutus from './sections/about/Aboutus'
import TechStack from './Sections/skills/TechStack'
import Ourservices from './Sections/services/OurServices'
import Projects from './Sections/projects/Projects'


const App = () => {
  return (
    <div className=' lg:pt-31 pt-10 w-full '>
      <Home/>
      <Aboutus/>
      <TechStack/>
      <Ourservices/>
      <Projects/>


      
    </div>
  )
}

export default App
