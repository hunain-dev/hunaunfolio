
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Aboutme = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const paraRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia();
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top +=20%",
        end: "+=500%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(textRef.current, {
      scale: 0.4,
      y: -30,

    });

    tl.to(
      subtitleRef.current,
      {
        scale: 0.4,
        y: -135,
        ease: "power2.out",

      },
      0
    );

      // Paragraph comes UP from bottom
  tl.to(
    paraRef.current,
    {
      opacity: 1,
      y: -2,
      ease: "power2.out",
    },
    0.1   // ye delay hai
  );

  }, []);
  return (
    <div ref={sectionRef} className="lg:min-h-[80vh]  min-h-[30vh] overflow-hidden  text-white w-full">
      <div className="h-full w-full">
        <div className="relative flex items-center justify-center flex-col w-full ">
          <h2
            ref={textRef}
            className="ppneuemontreal font-500 flex items-center justify-center uppercase lg:text-[24vw] text-[24vw] lg:leading-[4%] leading-25"
          >
            Huna
            <span className="h-full   w-fit  ">
            <img
  src="/public/assets/videos/hunainvideo-unscreen.gif"
  alt="Hunain GIF"
  className="
    object-cover
    w-11 h-auto      
    sm:w-32           
    lg:w-40   
  "
/>

            </span>
            n
          </h2>
          <h4 ref={subtitleRef} className="group lg:text-8xl text-3xl lg:mt-5 mt-3">
            <span className="actay inline-block transition-transform duration-600 group-hover:-translate-x-50">
              Creative
            </span>
            <span className="mx-3"></span>
            <span className="actay inline-block transition-transform duration-600 group-hover:translate-x-50">
              Developer
            </span>
          </h4>
          <div
  ref={paraRef}
  className="h-full flex items-start  justify-start text-center lg:px-30 absolute lg:top-65 top-20 left-0 w-full opacity-0 translate-y-40"
>

          <h4 className="actay lg:text-lg text-[2vw]">
         Hi! I'm Muhammad Hunain, a Web Designer and Web Developer from Karachi, Pakistan. I specialize in creating interactive, visually appealing websites using ReactJS, GSAP, Framer Motion, and other modern technologies.With a focus on front-end development, I design sleek, user-friendly websites that are not only functional but also deliver seamless digital experiences. I love adding animations and smooth transitions to my projects, making them stand out. I’ve worked on a variety of projects, including those featured on Awwwards, and I'm always looking for new opportunities to collaborate and innovate in the world of web development. Feel free to explore my work and connect if you'd like to collaborate!
          </h4>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutme;
