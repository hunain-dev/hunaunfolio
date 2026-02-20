import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

const Loader = ({ onComplete }) => {

  const [count, setCount] = useState(0)
  const loaderRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {

    const interval = setInterval(() => {
      setCount(prev => {

        if (prev >= 100) {
          clearInterval(interval)

          const tl = gsap.timeline()

          // 1️⃣ Fade out inner content
          tl.to(contentRef.current, {
            opacity: 0,
            scale: 500,
            duration: 2,
            ease: "power2.in"
          })

          // 2️⃣ Slide whole screen left
          .to(loaderRef.current, {
            x: "-100%",
            duration: 2,
            ease: "power4.inOut",
            onComplete: () => {
              gsap.set(loaderRef.current, {
                display: "none",
                pointerEvents: "none"
              })
            }
          })

          return 100
        }

        return prev + 1
      })
    }, 60)

    return () => clearInterval(interval)

  }, [])

  return (
    <div 
      ref={loaderRef}
      className='bg-[#9AE600] pointer-events-auto px-10 flex items-center justify-center flex-col h-full w-full fixed top-0 left-0 z-[999999]'
    >

      {/* Number */}
      <div ref={contentRef} className='w-full flex text-black items-center justify-center'>
        <h2 className='ppneuemontreal text-[25vw] tracking-tight uppercase'>
          {count < 10 ? `0${count}` : count}
        </h2>
      </div>

      {/* Line */}
      <div className='w-full mt-5'>
        <div className='h-[0.5vh] w-full bg-black relative overflow-hidden'>
          <div 
            className='h-full bg-white'
            style={{ width: `${count}%` }}
          ></div>
        </div>
      </div>

    </div>
  )
}

export default Loader