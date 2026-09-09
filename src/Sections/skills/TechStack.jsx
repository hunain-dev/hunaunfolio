import { motion } from "framer-motion";
import { useRef } from "react";
import Textanimation from "../../Components/Ui/Textaniamtion";

const TechStack = () => {
  const skillsimg = [
    { img: "assets/images/html.png" },
    { img: "assets/images/css.png" },
    { img: "assets/images/js.png" },
    { img: "assets/images/react.png" },
    { img: "assets/images/framer.png" },
    { img: "assets/images/gsap.png" },
    { img: "assets/images/nextjs.jpeg" },
  ];

  const constraintsRef = useRef(null);

  return (
    <div id="stack" className="myskills  lg:mt-[13vh]  mt-9 w-full lg:px-[3vw] text-center">
      <Textanimation  text="My Skills" classname="Satoshi font-medium lg:text-[3vw] md:text-[6vw]  text-4xl text-[#242627] mb-2"/>
    

      <motion.div
        className="grid lg:grid-cols-7 md:grid-cols-7 grid-cols-4   gap-[3.5vw] lg:w-[75%] bg-black mx-auto py-[2vh] mt-[1vw]"
        ref={constraintsRef}
        
      >
        {skillsimg.map((elem, index) => (
          <motion.div
            key={index}
            className="skill-item flex justify-center items-center  bg-black md:h-[6vh]  md:w-[6vh] w-full  h-40  cursor-pointer 2xl:h-[5vw] 2xl:w-[5vw]"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
          >
            <img
              src={elem.img}
              alt={`Skill ${index + 1}`}
          loading="lazy"  
              width={100}
              height={100}
              className=" h-15 lg:w-14 w-15 object-contain "
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
