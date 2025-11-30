
const Impactfulldesign = () => {
    const design = [
      {
        h1: "IMPACTFUL",
        h2: "Design",
        h2_1: "IS THE",
        h2_2: "Design",
        h1_2: "THAT WORK!",
      },
    ];
  
    return (
      <div className="relative w-full lg:mt-[3vh] mt-20 p-[1vw] text-center uppercase text-[#1e1e1f] lg:leading-[21vw] leading-[34vw]  overflow-hidden">
  
        {/* Astronaut Image (No separate component now) */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 z-[99]  w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden flex items-center justify-center">
        <img
  src="/assets/images/astronuat.png"
  alt="Astronaut"
  loading="lazy"
  className="
    object-contain object-center animate-float
    w-100        /* 📱 Mobile */
    sm:w-56     /* 📱 Tablet */
    md:w-72     /* 💻 Small laptop */
    lg:w-96     /* 💻 Big laptop/desktop */
    xl:w-[620px] /* 🖥️ Very large screens */
    h-auto
  "
/>
        </div>
  
        {design.map((elem, index) => {
          return (
            <div key={index} className="masker">
              <div className="text-content">
                <div className="work-with-image"></div>
  
                <h2 className="lg:text-[28vw] text-[43vw] font-[Morganite]">
                  {elem.h1}
                </h2>
                <h2 className="lg:text-[28vw] text-[43vw] font-[Morganite]">
                  {elem.h2}
                </h2>
                <h2 className="lg:text-[28vw] text-[43vw] font-[Morganite]">
                  {elem.h2_1}
                </h2>
                <h2 className="lg:text-[28vw] text-[43vw] font-[Morganite]">
                  {elem.h2_2}
                </h2>
                <h2 className="lg:text-[28vw] text-[43vw] font-[Morganite]">
                  {elem.h1_2}
                </h2>
  
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Impactfulldesign;
  