import React from 'react'
import Aboutme from './Aboutme'
import OurClients from './OurClients'
import Impactfulldesign from './ImpactfulDesign'

const Aboutus = () => {
  return (
    <div  id="aboutus" className='h-full  w-full '>
      <div className='pt-12 mt-12  w-full bg-[#4C00FF]'>
      <Aboutme/>
      </div>
      {/* <OurClients/> */}
      <OurClients/>
      
 <Impactfulldesign/>
    </div>
  )
}

export default Aboutus
