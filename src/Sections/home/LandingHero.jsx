import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import "@google/model-viewer";

const LandingHero = () => {

  const [isVisible, setIsVisible] = useState(false);
  const modelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // once visible, stop observing
          }
        });
      },
      { threshold: 0.2 } // when 20% of component visible
    );

    if (modelRef.current) observer.observe(modelRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className='min-full lg:mb-7 mb-15 w-full flex items-center justify-start flex-col'>
        <div className='hfull w-full gap-2 flex items-center justify-start  flex-col'>
        <h1 className='Fontspring uppercase lg:text-5xl xl:text-6xl text-4xl md:text-6xl 2xl:text-7xl'>{`Hi I’am Muhammad Hunain`}</h1>
        <h4 className='ActayCondensed lg:text-2xl xl:text-[1.6vw] text-1xl md:text-2xl'>Your product designer and developer partner!</h4>
        </div>
        <div className='h-full lg:mt-5 xl:mt-0 mt-15 md:mt-14 w-full '>
          <div className='Akrobat h-full w-full  relative flex gap-20'>
          {['Front-end reactjs developer','Front-end reactjs developer','Front-end reactjs developer' ].map(
            (elem, index) => {
              return (
                <motion.div
                  key={index}
                  className="Akrobat inline-block whitespace-nowrap pr-3 text-[19vw] md:text-[24vw]  text-[#343539]"
                  initial={{ x: '11%' }} 
                  animate={{ x: '-100%' }} 
                  
                    transition={{
                            ease: 'linear',
                            repeat: Infinity,
                            duration: 90
                          }}
                >
                  <h1>{elem}</h1>
                </motion.div>
              );
            }
          )}
                  
          <div className='h-full flex items-center justify-center absolute top-0 left-0  w-full '>
          <div className="Modelview" ref={modelRef}>
        {isVisible ? (
          <model-viewer
  src="/assets/images/cube.glb"
  alt="3D Cube"
  className="lg:w-94 lg:h-91 xl:w-95 xl:h-95 w-80 h-50 md:w-84 md:h-84 2xl:w-110 2xl:h-110"
  auto-rotate
  camera-controls
  disable-zoom
></model-viewer>
        ) : (
          <div className="text-center text-gray-500 py-10">Loading model...</div>
        )}
      </div>
            </div>
      
          </div>
        </div>

      
    </div>
  )
}

export default LandingHero
