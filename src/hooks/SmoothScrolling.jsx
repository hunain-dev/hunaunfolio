import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import CSS

const SmoothScrolling = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1, // speed
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });

      return () => {
        if (locoScroll) locoScroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScrolling;
