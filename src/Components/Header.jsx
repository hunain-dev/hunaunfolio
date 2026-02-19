import React, { useState } from 'react'
import { VscMenu } from "react-icons/vsc";
import Hunainresume from "../../public/assets/images/Hunain.png"
import Textanimation from './Ui/Textaniamtion';
import { GiReturnArrow } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa";

const Header = () => {
  const [MEnuoepn, setMEnuoepn] = useState(false)


const obj = [
  {
    text:"Home"

  },
  {
    text:"About"

  },
  {
    text:"Stack"

  },
  {
    text:"Services"

  },
  {
    text:"Project"

  },
  {
    text:"Conatct"

  },

]
  return (
    <div className=' w-full  py-4 flex-col items-center gap-2 justify-center bottom-0    flex  fixed z-999'>
      
      {
        MEnuoepn && (
          <div className=' w-lg py-4  overflow-hidden grid grid-cols-2  rounded-2xl bg-black '>
        <div className='flex justify-center h-full w-full items-center gap-3  flex-col'>
  {
    obj.map((elem, index) => {
      return (
        <div key={index} className='ppneuemontreal flex items-center justify-center w-full px-3'>
          <button className='bg-[#BBFD6A] tracking-tight w-full py-3 rounded-[1vw] font-bold uppercase text-[1vw]'>
            <Textanimation text={elem.text}/>
          </button>
        </div>
      )
    })
  }
</div>
            <div className='h-full pt-10 text-white  '>
              <div className=' w-full px-10 '>
              <img src={Hunainresume} className='h-full  w-full object-cover' alt="" />

              </div>
              <div className='h-fit w-full  flex items-center justify-center gap-1'>
              <h2 className='actay text-[1.4vw] text-center pt-3'>Resume</h2>
              <FaLocationArrow    className='text-white mt-3 text-1xl '/>
              </div>
            


            </div>
             </div>

        )
      }

      <div className='actay p-2  cursor-pointer w-sm  rounded-1xl px-3  overflow-hidden  bg-[#000000] grid grid-cols-2'>
        <div className=' h-full flex items-center justify-start gap-2 text-white'>
          <div   onClick={() => {
    setMEnuoepn(prev => !prev)
  }}  className='bg-[#BBFD6A] rounded-[0.3vw] p-1 px-2 text-black flex items-center justify-center'>
          <VscMenu className='text-[1.5vw]' />

          </div>
          <h2 className=' text-[1.2vw]'>Menu</h2>
        </div>
        <div className='h-full  flex items-center justify-end '>
            <button className='px-4 py-2 font-bold bg-[#BBFD6A] rounded-[0.3vw] text-[1.1vw] rounded-1xl'>Contact Us</button>
        </div>
      </div>

      
    </div>
  )
}

export default Header
