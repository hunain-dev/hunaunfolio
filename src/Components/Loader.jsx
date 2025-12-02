import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const columns = loaderRef.current.querySelectorAll(".column");
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", duration: 3 },
      onComplete: () => {
        if (onComplete) onComplete(); // Notify parent when loader finishes
      },
    });

    tl.to(columns, {
      yPercent: -100,
      stagger: 0.5, // Animate columns sequentially
    }).to(
      loaderRef.current,
      {
        opacity: 0,
        pointerEvents: "none",
        duration: 2,
      },
      "-=0.3"
    );
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-999999 grid grid-cols-5 overflow-hidden"
    >
      <div className="column h-full bg-[#232A27]"></div>
      <div className="column h-full bg-[#232A27]"></div>
      <div className="column h-full bg-[#232A27]"></div>
      <div className="column h-full bg-[#232A27]"></div>
      <div className="column h-full bg-[#232A27]"></div>
    </div>
  );
};

export default Loader;