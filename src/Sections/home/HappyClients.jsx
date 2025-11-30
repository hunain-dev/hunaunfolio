import React from 'react'
import Button from '../../components/Ui/Button';

const HappyClients = () => {
    const obj = [
        {
          tagimg1: "https://framerusercontent.com/images/um3bxT2WVFF4kr6enjXB8pntPlo.svg",
          tagimg2: "https://framerusercontent.com/images/lWoxjUfzID4I2CJ2EAGpp1BxXk.svg",
          tagimg3: "https://framerusercontent.com/images/LtSGTHttO0ZpuCVLNu4mPIpOuk.svg",
        },
    ]
  return (
    <div className='lg:gap-4 gap-4 w-full grid grid-cols-1'>
        <div className='h-full w-full flex items-center justify-center lg:flex-row flex-col lg:gap-2 gap-4 '>
            <span className='flex items-center justify-center  '>   {Object.values(obj[0]).map((url, index) => (
        <img 
          key={index} 
          src={url} 
          alt={`client-${index}`} 
          width={33}
           
          height={10} 
          className='object-contain'
        />
      ))}</span>
      <h3 className='actay text-[1.3vw]  text-[#343539]'>5+ happy clients</h3>
        </div>
        <div className='h-full w-full flex items-center justify-center'>
        <Button btntext="Got and idea?- Let's talk"  link="/work" classname="actay px-5 text-2xl py-3  rounded-1xl"  />
        </div>


      
    </div>
  )
}

export default HappyClients
