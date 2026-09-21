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

    const itemsContainer = slider.querySelector(".items");
    const nextButton = slider.querySelector(".next");
    const prevButton = slider.querySelector(".prev");

    if (!itemsContainer) return;

    let current = 0;
    let rotation = 0;
    let isAnimating = false;
    let angleStep = 0;

    const getItems = () => gsap.utils.toArray(".item", slider);

    const layoutItems = () => {
      const items = getItems();
      if (!items.length) return;

      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      angleStep = 360 / items.length;
      const cardGap = isMobile ? 1.3 : isTablet ? 1.3 : 1.5;
      const cardWidth = items[0].offsetWidth;
      const radius =
        (cardWidth * cardGap) / (2 * Math.sin((angleStep * Math.PI) / 360));
      const startAngle = isMobile ? -92 : isTablet ? -104 : -110;

      items.forEach((item, index) => {
        const angle = index * angleStep + startAngle;

        gsap.set(item, {
          x: Math.cos((angle * Math.PI) / 180) * radius,
          y: Math.sin((angle * Math.PI) / 180) * radius,
          rotation: angle + 90,
        });
      });

      gsap.set(itemsContainer, {
        rotation,
        y: isMobile ? window.innerHeight * 0.08 : isTablet ? window.innerHeight * 0.02 : 0,
      });
    };

    const goTo = (index) => {
      const items = getItems();
      if (!items.length || isAnimating) return;

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

    const next = () => {
      const items = getItems();
      goTo((current + 1) % items.length);
    };

    const prev = () => {
      const items = getItems();
      goTo((current - 1 + items.length) % items.length);
    };

    const handleItemClick = (event) => {
      const item = event.target.closest(".item");
      if (!item) return;

      const items = getItems();
      const index = items.indexOf(item);
      if (index !== -1) goTo(index);
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(layoutItems, 150);
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(layoutItems);
    });

    nextButton?.addEventListener("click", next);
    prevButton?.addEventListener("click", prev);
    slider.addEventListener("click", handleItemClick);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    const autoPlay = setInterval(next, 2000);

    return () => {
      clearInterval(autoPlay);
      clearTimeout(resizeTimer);
      nextButton?.removeEventListener("click", next);
      prevButton?.removeEventListener("click", prev);
      slider.removeEventListener("click", handleItemClick);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      gsap.killTweensOf(itemsContainer);
    };
  }, []);

  return (
    <section
      ref={sliderRef}
      className="slider  relative w-full lg:mt-0  mt-3 xl:mt-0 min-h-[78vh] md:h-[92vh] lg:h-[100vh] xl:h-screen overflow-hidden"
    >
      <div
        className="
          items
          absolute
          inset-0
          top-[135%]
          md:top-[160%]
          lg:top-[162%]
          xl:top-[160%]
          2xl:top-[160%]
          origin-[50%_50%]
          max-lg:origin-[50%_42%]
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
          w-[65vw]
          h-[36vh]
          md:w-[53vw]
          md:h-[42vh]
          lg:w-[20vw]
          lg:h-[45vh]
          xl:w-[17vw]
          xl:h-[45vh]
          rounded-[1.2rem]
          overflow-hidden
          cursor-pointer
          select-none
          origin-center
        "
                href={index === 0 ? "#" : project.link}
           target="_blank"
           onClick={(e) => {
            if (index === 0 || index === 12) {
              e.preventDefault();
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
                left-[3vw]
                bottom-[2vw]
                text-sm
                md:text-base
                lg:left-[1.5vw]
                lg:bottom-[1.3vw]
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
          bottom-6
          md:bottom-8
          lg:bottom-9
          left-1/2
          -translate-x-1/2
          gap-10
          md:gap-[4vw]
          flex
          items-center
          justify-between
          text-3xl
          lg:text-4xl
          2xl:text-6xl
          xl:text-3xl
          
          md:text-[5vw]
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
