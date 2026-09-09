import { motion } from "framer-motion";
import { useRef } from "react";
import Textanimation from "../../Components/Ui/Textaniamtion";

const TechStack = () => {
  const constraintsRef = useRef(null);
  const textphyscis = [
    { text: "Html" },
    { text: "Css" },
    { text: "Javascript" },
    { text: "Reactjs" },
    { text: "Nextjs" },
    { text: "Gsap" },
    { text: "Locomotive" },
    { text: "Matter js" },
    { text: "Tailwind css" },
  ];

  return (
    <div id="stack" className="myskills  lg:mt-[13vh]  mt-9 w-full  text-center">
      <Textanimation  text="My Skills" classname="Satoshi font-medium lg:text-[3vw] md:text-[6vw]  text-4xl text-[#242627] mb-6"/>

      <div
  ref={constraintsRef}
  className="relative w-full px-20 pb-15  grid grid-cols-5 gap-11 overflow-hidden"
>
  {textphyscis.map((elem, index) => {
    return (

  <motion.h1

  key={index}
  className="techskills  Satoshi cursor-pointer text-center border border-black  hover:bg-black hover:text-white text-sm h-fit w-fit px-12 py-1 uppercase rounded-4xl"
  drag
  dragElastic={0.2}
  dragMomentum={true}
  dragConstraints={{
    top: 0,
    left: 0,
    right: 200,
    bottom: 50,
  }}
>
  {elem.text}
</motion.h1>
    );
  })}
</div>
    

    </div>
  );
};

export default TechStack;
