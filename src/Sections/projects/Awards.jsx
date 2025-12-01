import React from "react";
import Textanimation from "../../components/Ui/Textaniamtion";

const Awards = () => {
  const data = [
    {
      cardimg: "/public/Assets/images/winning.jpg",
    },
  ];

  return (
    <div className="lg:h-screen lg:mt-10 mt-7 md:mt-20  w-full flex flex-col items-center justify-center lg:px-8 px-1">
      <h2 className="Satoshi font-[400] text-center text-[5vw] md:text-4xl lg:text-4xl">
        <Textanimation
          text="1st Runner-Up in Web Design | Techwiz Pakistan Web Design Competition
"
          classname="Satoshi text-black lg:text-[2.3vw] md:text-3xl text-1xl"
        />{" "}
      </h2>

      <div className="flex justify-center w-full gap-8 flex-wrap py-10">
        {data.map((elem, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg  lg:h-[70vh] relative group"
          >
            {/* Image default grayscale/opacity */}
            <img
              src={elem.cardimg}
              alt="Certification"
              loading="lazy"
              height={500}
              width={500}
              className="w-full h-full object-cover object-center grayscale brightness-50 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:brightness-100"
            />

            {/* Optional overlay for smoother effect */}
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-0 transition-opacity duration-500 rounded-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
