import React from 'react'
import { Link } from 'react-router-dom';
import Textanimation from './Ui/Textaniamtion';
import Button from './Ui/Button';

  const downloadResume = () => {
    window.open("/Assets/images/Muhammad Hunain Resume.pdf", "_blank");
  };
const Header = () => {
  return (
<header
  className="
    fixed 
    left-1/2 -translate-x-1/2 
    lg:h-[9vh] lg:w-[93%] 
    flex items-center justify-between 
    z-999 mt-[1vw] lg:opacity-100
    w-[100%]

    top-0

    /* Mobile ke liye bottom se */
    sm:top-0
    top-auto bottom-2
  "
>
      <div className="
      flex items-center justify-center 
      lg:gap-[2.2vw] 
      gap-[5vw]
      bg-[#f7f4f3] 
      lg:rounded-[3vw]
      rounded-[5vw] 
      lg:px-[4vw] lg:py-[1vw]
      
      px-[6.5vw] py-[3vw]
      shadow-[1px_1px_14px_rgba(29,28,28,0.5)]
      font-[Satoshi]">
      
 <a href="#home">
  <Textanimation
    text="Home"
    classname="text-black lg:text-[1.2vw] 2xl:text-[1.3vw] text-[3.5vw] "
  />
</a>
<a href='#aboutus'>
  <Textanimation
    text="About"
    classname="text-black text-[1.2vw] 2xl:text-[1.3vw] text-[3.5vw] "
  />
</a>
  
  
<a href="#stack">
  <Textanimation
    text="Stack" 
    classname="text-black text-[1.2vw] 2xl:text-[1.3vw] text-[3.5vw]"
  />
</a>
  
<a href="#services">
  <Textanimation
    text="Services"
    classname="text-black text-[1.2vw] 2xl:text-[1.3vw] text-[3.5vw]"
  />
</a>
  
  
<a href="#project">
  <Textanimation
    text="Project"
    classname="text-black text-[1.2vw] 2xl:text-[1.3vw] text-[3.5vw]"
  />
</a>
  
<a href="#contact">
  <Textanimation
    text="Contact"
    classname="text-black text-[1.2vw] 2xl:text-[1.3vw] text-[3.5vw]"
  />
</a>
  
    </div>
  
    {/* RIGHT BUTTON */}
    <div className="flex items-center justify-end h-full">
    <Button   btntext="Resume" onclick={downloadResume}  classname="lg:opacity-100 md:opacity-100 opacity-0 uppercase px-5 py-2 bg-[#FFD900]"  />

    </div>
  
  </header>
  )
}

export default Header
