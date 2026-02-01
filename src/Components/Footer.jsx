import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Button from "./Ui/Button";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Textanimation from "./Ui/Textaniamtion";

const Footer = () => {
  const icons = [
    {
      icon: <FaLinkedin />,
      Link: "https://www.linkedin.com/in/muhammad-hunain-khan/",
    },
    { icon: <FaGithub />, Link: "https://github.com/hunain-dev" },
    { icon: <FaEnvelope />, Link: "mailto:huniiali1122@gmail.com" },

  ];
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const width = text.offsetWidth;

    gsap.fromTo(
      text,
      { x: 20 },
      {
        x: -width,
        duration: 140, // adjust speed
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);

  return (
    <div id="contact" className="min-h-full lg:mt-26 mt-15 w-full">
      <div className="h-full w-full flex items-center overflow-hidden ">
        {/* Duplicate text manually for seamless loop */}
        <div ref={textRef} className="actay tracking-tighter flex whitespace-nowrap text-[11vw] actay">
        {`Let's create something extra ordinary together `}
          {`Let's create something extra ordinary together `}
          </div>

        <div className="actay not-first:flex tracking-tighter whitespace-nowrap text-[11vw] ">
        {`Let's create something extra ordinary together `}
        {`Let's create something extra ordinary together `}
        </div>
        <div className="actay flex whitespace-nowrap tracking-tighter text-[11vw] ">
        {`Let's create something extra ordinary together `}
        {`Let's create something extra ordinary together `}
        </div>
        <div className="actay flex whitespace-nowrap tracking-tighter text-[11vw] ">
        {`Let's create something extra ordinary together `}
          {`Let's create something extra ordinary together `}
          </div>
        <div className="actay flex whitespace-nowrap tracking-tighter text-[11vw] ">
        {`Let's create something extra ordinary together `}
        {`Let's create something extra ordinary together `}
        </div>
      </div>
      <div className="relative flex">
        {/* Main Content */}
        <div className=" w-full  mx-auto  grid lg:grid-cols-2 md:grid-cols-2  ">
          <div className="actay w-full    h-full  px-3 py-3">
            <a href="#home">
              <h2 className="uppercase   text-center  lg:text-left cursor-pointer text-lg">
                Mohammad hunain studio@
              </h2>
            </a>
            {/* <a href="mailto:huniiali1122@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you">
              <h2 className="uppercase text-lg cursor-pointer   text-center  lg:text-left">
                Huniiali1122@gmail.com
              </h2>
            </a> */}
        <div className="h-fit bg-black mt-6 lg:w-fit">

    <Button
    href={`https://wa.me/923252991455?text=${encodeURIComponent("Hello Hunain")}`}
      btntext="Contact us"
      classname="uppercase px-15 py-2 bg-[#FFD900]"
      type="button"
    />
</div>

          </div>
          <div className="h-full px-7 py-3  flex lg:items-end items-center  lg:justify-right md:items-end md:justify-right flex-col">
            <h3 className="actay lg:text-3xl text-2xl md:text-3xl">Follow us</h3>
            <div className="flex flex-row gap-4 mt-2 md:mt-4 ">
              {icons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-full cursor-pointer shadow-lg transition-transform duration-500 border border-black hover:scale-125 hover:rotate-12 hover:shadow-2xl"
                    style={{ backgroundColor: item.color }}
                  >
                    <div className="text-black text-2xl">{item.icon}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="h-full py-10 w-full grid lg:grid-cols-[1fr_1fr] md:grid-cols-[1fr_2fr] px-3">
      
        
        <div className="h-full lg:mt-0 mt-3 md:mt-0  flex items-center justify-between lg:flex-row md:flex-row flex-col" >
          <a href="#home">
            <Textanimation text="Home" classname="text-black actay  text-2xl md:text-[2.5vw] lg:text-[1.7vw]" />
          </a>

          <a href="#aboutus">
            <Textanimation
              text="About us"
              classname="text-black actay  text-2xl md:text-[2.5vw] lg:text-[1.7vw]"
            />
          </a>
          <a href="#stack">
            <Textanimation
              text="stack"
              classname="text-black actay  text-2xl md:text-[2.5vw] lg:text-[1.7vw]"
            />
          </a>

          <a href="#services">
            <Textanimation
              text="Services"
              classname="text-black actay  text-2xl md:text-[2.5vw] lg:text-[1.6vw]"
            />
          </a>
          <a href="#project">
            <Textanimation
              text="Projects"
              classname="text-black actay  text-2xl md:text-[2.5vw] lg:text-[1.7vw]"
            />
          </a>
          <a href="#contact">
            <Textanimation
              text="Contact"
              classname="text-black actay  text-2xl lg:text-[1.7vw]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
