import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Chair",
    image:
      "https://cdn.cosmos.so/f4589303-22a8-4ad1-8ab7-02fa8a0af0ec?format=webp",
  },
  {
    title: "Skin",
    image:
      "https://cdn.cosmos.so/686e7ba8-cbb8-41ba-bc88-9d8c2bd19ed8?format=webp&w=2048",
  },
  {
    title: "Black & White",
    image:
      "https://cdn.cosmos.so/06d6831f-1ead-4a8f-a47a-d0ca32262260?format=webp",
  },
  {
    title: "Butterfly",
    image:
      "https://cdn.cosmos.so/9c020ef4-5d24-44d5-89fb-fe21ed3bb175?format=webp",
  },
  {
    title: "Shadow",
    image:
      "https://cdn.cosmos.so/9c046dec-1f12-4bfd-a299-71521c60e39f?format=webp",
  },
  {
    title: "Perception",
    image:
      "https://cdn.cosmos.so/c4ff3589-4ed8-4b73-b402-2f00fff7a6e2?format=webp",
  },
  {
    title: "Portrait",
    image:
      "https://cdn.cosmos.so/6946e847-933f-4990-8cd8-3e4862060dba?format=webp",
  },
  {
    title: "Bifur",
    image:
      "https://cdn.cosmos.so/7ebeae71-98a1-45be-b5af-56c79e014c8d?format=webp",
  },
  {
    title: "Terracotta",
    image:
      "https://cdn.cosmos.so/071fdb5f-dc62-4afb-ace9-161ebc7d4f96?format=webp",
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

    const radius = 500;
    const angleStep = 360 / items.length;

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
      className="slider relative w-full h-screen overflow-hidden mb-10"
    >
      <div
        className="
          items
          absolute
          inset-0
          top-[120%]
          origin-[50%_50%]
          cursor-grab
          select-none
          touch-pan-y
        "
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              item
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[15vw]
              h-[18vw]
              rounded-[1.2rem]
              overflow-hidden
              cursor-pointer
              select-none
              origin-center
            "
          >
            <img
              className="
                w-full
                h-full
                block
                object-cover
                grayscale-[25%]
              "
              src={project.image}
              alt={project.title}
              draggable="false"
            />

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
          </div>
        ))}
      </div>

      <div
        className="
          controls
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          gap-[5vw]
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
