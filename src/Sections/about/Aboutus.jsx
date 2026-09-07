import React from 'react'
import Aboutme from './Aboutme'
import OurClients from './OurClients'
import Impactfulldesign from './ImpactfulDesign'

const Aboutus = () => {
  return (
    <div  id="aboutus" className='h-full  w-full '>
      <div className='pt-9 mt-11  w-full bg-[#4C00FF] overflow-hidden'>
      <Aboutme/>
      </div>
      {/* <OurClients/> */}
      <OurClients/>
      
 <Impactfulldesign/>
    </div>
  )
}

export default Aboutus
