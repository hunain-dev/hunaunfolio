import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "MAdeinuxstudio",
    image: "/assets/images/Madienstudio.webp",
  },
  {
    title: "jesko & Jets",
    image: "/assets/images/Jeskojets.webp",
    link: "https://jetsofjets.vercel.app/",

  },
  {
    title: "Mammoth Murals",
    cardvideo: "/assets/Videos/commingsoon.mp4",
    link: "https://jetsofjets.vercel.app/",

  },
  {
    title: "Klearmind Clinics",
    image: "/assets/images/Klearmindtherapy.webp",
    link:"https://klearmind-sec-lives.vercel.app/"

  },
  {
    title: "Digital Tobacco",
    image: "/assets/images/Tobacco.webp",
        link:"https://tabacco-awwwards-website-clone.vercel.app/"
  },
  {
    title: "Career Hunt",
    image: "/assets/images/jobs.webp",
    link:"https://job-board-app-azure-alpha.vercel.app/"

  },
  {
    title: "Ochi Clone",
    image: "/assets/images/ochidesign.webp",
    link:"https://ochi-web-production.vercel.app/"

  },
  {
    title: "Santa's Companion",
    image: "/assets/images/Christmas.webp",
    link:"https://christmas-website-in-reactjs.vercel.app/"

  },

  {
    title: "Tic-Tac-Toe Game",
    image: "/assets/images/tictac.webp",
    link:"https://tic-tac-toe-game-azure-xi.vercel.app/"

  },

  {
    title: "spencergabor work",
    image: "/assets/images/spacer.webp",
    link:"https://gabor-cyl3.vercel.app/"
  },

  {
    title: "Weather App",
    image: "/assets/images/weather.webp",
    link:"https://weather-app-bay-two-4enjejutpd.vercel.app/"
  },


  {
    title: "Furni – Interior Design",
    image: "/assets/images/twogoodco.webp",
    link:"https://furni-modern-interior-design-studio.vercel.app/"
  },

  {
    title: "rejouices",
    image: "/assets/images/rejouices.webp",
    link:""
  },
];

const ProjectsShowcase = () => {
  const sliderRef = useRef(null);

  useLayoutEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const items = gsap.utils.toArray(".item", slider);
    const itemsContainer = slider.querySelector(".items");
    const nextButton = slider.querySelector(".next");
    const prevButton = slider.querySelector(".prev");

    if (!items.length || !itemsContainer) return;

    // ========================================
    // SETTINGS
    // ========================================

    const angleStep = 360 / items.length;
    const cardGap = 1.5; // increase for more space between cards
    const cardWidth = items[0].offsetWidth;
    const radius =
      (cardWidth * cardGap) / (2 * Math.sin((angleStep * Math.PI) / 360));

    let current = 0;
    let rotation = 0;
    let isAnimating = false;

    // ========================================
    // PUT ITEMS AROUND CIRCLE
    // ========================================

    items.forEach((item, index) => {
      const angle = index * angleStep - 110;

      gsap.set(item, {
        x: Math.cos((angle * Math.PI) / 180) * radius,

        y: Math.sin((angle * Math.PI) / 180) * radius,

        rotation: angle + 90,
      });
    });

    // ========================================
    // GO TO ITEM
    // ========================================

    const goTo = (index) => {
      if (isAnimating) return;

      isAnimating = true;

      const diff = index - current;

      let shortest = diff;

      if (diff > items.length / 2) {
        shortest -= items.length;
      }

      if (diff < -items.length / 2) {
        shortest += items.length;
      }

      current = (current + shortest + items.length) % items.length;

      rotation -= shortest * angleStep;

      gsap.to(itemsContainer, {
        rotation,
        duration: 1,
        ease: "power2.inOut",

        onComplete: () => {
          isAnimating = false;
        },
      });
    };

    // ========================================
    // NEXT
    // ========================================

    const next = () => {
      goTo((current + 1) % items.length);
    };

    // ========================================
    // PREVIOUS
    // ========================================

    const prev = () => {
      goTo((current - 1 + items.length) % items.length);
    };

    // ========================================
    // BUTTON EVENTS
    // ========================================

    nextButton?.addEventListener("click", next);
    prevButton?.addEventListener("click", prev);

    // ========================================
    // ITEM CLICK
    // ========================================

    items.forEach((item, index) => {
      item.addEventListener("click", () => {
        goTo(index);
      });
    });

    // ========================================
    // KEYBOARD
    // ========================================

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        prev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // ========================================
    // AUTO PLAY
    // ========================================

    const autoPlay = setInterval(() => {
      next();
    }, 2000);

    // ========================================
    // CLEANUP
    // ========================================

    return () => {
      clearInterval(autoPlay);

      nextButton?.removeEventListener("click", next);

      prevButton?.removeEventListener("click", prev);

      window.removeEventListener("keydown", handleKeyDown);

      gsap.killTweensOf(itemsContainer);
    };
  }, []);

  return (
    <section
      ref={sliderRef}
      className="slider relative w-full lg:mt-13 xl:mt-0  h-screen overflow-hidden"
    >
      <div
        className="
          items
          absolute
          inset-0
          lg:top-[150%]
          2xl:top-[140%]
          top-0
          origin-[50%_50%]
          cursor-grab
          select-none
          touch-pan-y
        "
      >
        {projects.map((project, index) => (

          <a
          key={index}
          className="
          item
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          xl:w-[17vw]
          xl:h-[45vh]
          lg:h-[45vh]
          lg:w-[20vw]

          rounded-[1.2rem]
          overflow-hidden
          cursor-pointer
          select-none
          origin-center
        "
                href={index === 0 ? "#" : project.link}
           target="_blank"
           onClick={()=>{
            if (index === 0 || index === 12) {
              alert("The project is scheduled to go live next week.");
            }

           }}
           
          >

            {index == 2 && project.cardvideo ? (
              <video
                src={project.cardvideo}
                autoPlay
                loop
                muted
                loading="lazy"
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                className="
      w-full
      h-full
      block
      object-cover
    
    "
                src={project.image}
                alt={project.title}
                draggable="false"
              />
            )}

            <span
              className="
                absolute
                z-2
                left-[1.5vw]
                bottom-[1.3vw]
                text-base
                text-[whitesmoke]
              "
            >
              {project.title}
            </span>
          </a>
        ))}
      </div>

      <div
        className="
          controls
          absolute
          bottom-9
          left-1/2
          -translate-x-1/2
          gap-[4vw]
          flex
          items-center
          justify-between
          text-[2vw]
          cursor-pointer
        "
      >
        <FaArrowLeft type="button" className="prev cursor-pointer" />
        <FaArrowRight className="next cursor-pointer " aria-label="Next" />
      </div>
    </section>
  );
};

export default ProjectsShowcase;
