import React from "react";

const Textanimation = ({ text, classname }) => {
  return (
    <div
      className={`relative inline-block overflow-hidden cursor-pointer group ${classname}`}
    >
      {/* Top Text (visible initially) */}
      <span className="font-[400] block transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full">
        {text}
      </span>

      {/* Bottom Text (hidden initially, slides in on hover) */}
      <span className="font-[400] block  absolute left-0 top-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full">
        {text}
      </span>
    </div>
  );
};

export default Textanimation;