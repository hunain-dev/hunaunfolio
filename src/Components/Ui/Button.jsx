import React from "react";
import { Link } from "react-router-dom";

const Button = ({ btntext, classname, href, onclick, type }) => {
  const isExternal = href?.startsWith("http");

  // 🌍 External link (LinkedIn, WhatsApp, etc.)
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        type={type}
        onClick={onclick}
        className={`group relative overflow-hidden cursor-pointer SuisseIntl border border-black text-black flex items-center justify-center gap-2 ${classname}`}
      >
        <h2 className="relative z-10 transition-all duration-300 group-hover:text-white">
          {btntext}
        </h2>
        <span className="absolute left-0 bottom-0 w-full h-0 bg-black transition-all duration-300 ease-in-out group-hover:h-full"></span>
      </a>
    );
  }

  // 🏠 Internal routing
  return (
    <Link
      to={href || "/"}   // 👈 internal path bhi href se
      onClick={onclick}
      className={`group relative overflow-hidden cursor-pointer SuisseIntl border border-black text-black flex items-center justify-center gap-2 ${classname}`}
    >
      <h2 className="relative z-10 transition-all duration-300 group-hover:text-white">
        {btntext}
      </h2>
      <span className="absolute left-0 bottom-0 w-full h-0 bg-black transition-all duration-300 ease-in-out group-hover:h-full"></span>
    </Link>
  );
};

export default Button;
