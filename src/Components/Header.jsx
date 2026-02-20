import React, { useEffect, useRef, useState } from 'react'
import { VscMenu } from "react-icons/vsc";
import Hunainresume from "../../public/assets/images/Hunain.png"
import Textanimation from './Ui/Textaniamtion';
import { FaLocationArrow } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import gsap from 'gsap';

const Header = () => {
  const [MEnuoepn, setMEnuoepn] = useState(false)
  const menuRef = useRef(null)
  const tl = useRef(null)

  useEffect(() => {
    // Set initial state so it's hidden but exists in the DOM
    gsap.set(menuRef.current, {
      scaleY: 0,
      transformOrigin: "bottom center",
      autoAlpha: 0,
      display: "none"
    });

    tl.current = gsap.timeline({ paused: true })
      // Animate the menu container to scale up from bottom like a TV
      .to(menuRef.current, {
        scaleY: 1,
        autoAlpha: 1,
        display: "grid",
        duration: 0.8,
        scrub:3,
        ease: "power4.inOut",
      })
      // Stagger the text items appearance inside
      .fromTo(".menu-item", {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        delay:0.5,
        opacity: 1,
        stagger: 0.3,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.3")
      // Animate the resume section at the end
      .fromTo(".resume-section", {
        opacity: 0,
        scale: 0.9,
        y: 20
      }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.5)"
      }, "-=0.3");

  }, [])

  useEffect(() => {
    if (MEnuoepn) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }
  }, [MEnuoepn])

  const obj = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#aboutus" },
    { text: "Stack", href: "#stack" },
    { text: "Services", href: "#services" },
    { text: "Project", href: "#project" },
  ]

  return (
    <div className=' w-full lg:px-0 px-2  lg:py-4 py-3 flex-col items-center gap-2 justify-center bottom-0    flex  fixed z-999'>

      {/* We keep the menu in the DOM always, but handle visibility with GSAP */}
      <div ref={menuRef} className=' lg:w-lg  lg:py-4 md:py-10 py-4  overflow-hidden grid grid-cols-2  rounded-2xl bg-black'>
        <div className='flex justify-center  h-full w-full items-center gap-3  flex-col'>
          {
            obj.map((elem, index) => {
              return (
                <div key={index} className='menu-item ppneuemontreal flex items-center justify-center w-full px-3'>
                  <button className='bg-[#BBFD6A] tracking-tight w-full lg:py-3 py-2 rounded-[1vw] font-bold uppercase lg:text-[1vw] text-[3vw] md:text-2xl' >
                    <Textanimation text={elem.text} href={elem.href} />
                  </button>
                </div>
              )
            })
          }
        </div>
        
        <div className='resume-section h-full pt-10 text-white  '>
          <div className=' w-full lg:px-10 px-6 md:px-20'>
            <img src={Hunainresume} className='h-full  w-full object-cover' alt="" />
          </div>
          <div className='h-fit w-full  flex items-center justify-center gap-1'>
            <h2 className='actay lg:text-[1.3vw] xl:text-1xl md:text-3xl 2xl:text-md text-center pt-3 '>Resume</h2>
            <FaLocationArrow className='text-white mt-3  2xl:text-sm xl:text-[1.3vw] lg:text-[1.5vw] text-1xl md:text-2xl  ' />
          </div>  
        </div>
      </div>

      <div className='actay p-2  cursor-pointer lg:w-sm md:w-md 2xl:w-md w-full   rounded-1xl lg:px-3 px-2  overflow-hidden  bg-[#000000] grid grid-cols-2'>
        <div className=' h-full flex items-center justify-start gap-2 text-white'>
          <div onClick={() => {
            setMEnuoepn(prev => !prev)
          }} className='bg-[#BBFD6A] rounded-[0.3vw] p-1 px-2 text-black flex items-center justify-center'>
            {
              MEnuoepn ? (
                <IoCloseOutline className='lg:text-[1.6vw] text-1xl md:text-2xl' />

              ) :(
                <VscMenu  className="lg:text-[1.5vw] text-1xl md:text-2xl " />

              )
            }
          </div>
          <h2 className=' lg:text-[1.2vw] text-1xl md:text-2xl'>Menu</h2>
        </div>
        <a href='#contact' className='h-full  cursor-pointer flex items-center justify-end '>
          <button className='px-4 py-2 font-bold bg-[#BBFD6A] rounded-[0.3vw] lg:text-[1.1vw] text-sm md:text-lg rounded-1xl'>Contact Us</button>
        </a>
      </div>

    </div>
  )
}

export default Header
