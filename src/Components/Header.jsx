import React from 'react'
import { Link } from 'react-router-dom';
import Textanimation from './Ui/Textaniamtion';
import Button from './Ui/Button';

  const downloadResume = () => {
    window.open("/Assets/images/Muhammad Hunain Resume.pdf", "_blank");
  };
const Header = () => {
  return (
    <div className=" fixed top-0 left-1/2 -translate-x-1/2 h-[9vh] w-[93%] flex items-center justify-between z-999 mt-[1vw] lg:opacity-100 opacity-0">
      <div className="
      flex items-center justify-center 
      gap-[2.2vw] 
      bg-[#f7f4f3] 
      rounded-[3vw] 
      px-[4vw] py-[1vw]
      shadow-[1px_1px_14px_rgba(29,28,28,0.5)]
      font-[Satoshi]">
      
 <a href="#home">
  <Textanimation
    text="Home"
    classname="text-black text-[1.2vw]"
  />
</a>
<a href='#aboutus'>
  <Textanimation
    text="About us"
    classname="text-black text-[1.2vw]"
  />
</a>
  
  
<a href="#stack">
  <Textanimation
    text="Stack"
    classname="text-black text-[1.2vw]"
  />
</a>
  
<a href="#services">
  <Textanimation
    text="Services"
    classname="text-black text-[1.2vw]"
  />
</a>
  
  
<a href="#project">
  <Textanimation
    text="Project"
    classname="text-black text-[1.2vw]"
  />
</a>
  
<a href="#contact">
  <Textanimation
    text="Contact"
    classname="text-black text-[1.2vw]"
  />
</a>
  
    </div>
  
    {/* RIGHT BUTTON */}
    <div className="flex items-center justify-end h-full">
    <Button   btntext="Resume" onclick={downloadResume}  classname="uppercase px-5 py-2 bg-[#FFD900]"  />

    </div>
  
  </div>
  )
}

export default Header
