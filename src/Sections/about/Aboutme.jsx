
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Aboutme = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const paraRef = useRef(null)

  useEffect(() => {
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
    <div ref={sectionRef} className="min-h-[70vh] overflow-hidden  text-white w-full">
      <div className="h-full w-full">
        <div className="relative flex items-center justify-center flex-col w-full ">
          <h2
            ref={textRef}
            className="ppneuemontreal font-500 flex items-center justify-center uppercase text-[24vw] leading-[4%]"
          >
            Huna
            <span className="h-full   w-fit  ">
              <img
                src="/public/assets/videos/hunainvideo-unscreen.gif"
                width={140}
                height={110}
                alt="Hunain GIF"
                className="object-cover"
              />
            </span>
            n
          </h2>
          <h4 ref={subtitleRef} className="group text-8xl mt-5">
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
  className="h-full flex items-start  justify-start text-center px-30 absolute top-60 left-0 w-full opacity-0 translate-y-40"
>

          <h4 className="actay text-lg">
         Hi! I'm Muhammad Hunain, a Web Designer and Web Developer from Karachi, Pakistan. I specialize in creating interactive, visually appealing websites using ReactJS, GSAP, Framer Motion, and other modern technologies.With a focus on front-end development, I design sleek, user-friendly websites that are not only functional but also deliver seamless digital experiences. I love adding animations and smooth transitions to my projects, making them stand out. I’ve worked on a variety of projects, including those featured on Awwwards, and I'm always looking for new opportunities to collaborate and innovate in the world of web development. Feel free to explore my work and connect if you'd like to collaborate!
          </h4>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutme;
