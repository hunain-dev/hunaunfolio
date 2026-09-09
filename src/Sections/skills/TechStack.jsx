import { motion } from "framer-motion";
import { useRef } from "react";
import Textanimation from "../../Components/Ui/Textaniamtion";

const TechStack = () => {
  // const skillsimg = [
  //   { img: "assets/images/html.png" },
  //   { img: "assets/images/css.png" },
  //   { img: "assets/images/js.png" },
  //   { img: "assets/images/react.png" },
  //   { img: "assets/images/framer.png" },
  //   { img: "assets/images/gsap.png" },
  //   { img: "assets/images/nextjs.jpeg" },
  // ];

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
  const constraintsRef = useRef(null);

  return (
    <div id="stack" className="myskills  lg:mt-[13vh]  mt-9 w-full  text-center">
      <Textanimation  text="My Skills" classname="Satoshi font-medium lg:text-[3vw] md:text-[6vw]  text-4xl text-[#242627] mb-6"/>

      <motion.div
  ref={constraintsRef}
  className="relative h-[30vh] px-20  grid grid-cols-5 w-full overflow-hidden"
>
  {textphyscis.map((elem, index) => {
    return (
      // <Textanimation
      //   key={index}
      //   text={elem.text}
      //   className="Satoshi text-center border border-black text-sm h-fit w-fit px-12 py-1 uppercase rounded-4xl"
      //   drag
      //   dragConstraints={constraintsRef}
      //   dragElastic={0.2}
      //   dragMomentum={true}
      //   dragTransition={{
      //     bounceStiffness: 300,
      //     bounceDamping: 20,
      //   }}
      //   whileDrag={{
      //     scale: 1.05,
      //     cursor: "grabbing",
      //   }}
      // />


  <motion.h1
  key={index}
  className="Satoshi text-center border border-black  hover:bg-black hover:text-white text-sm h-fit w-fit px-12 py-1 uppercase rounded-4xl"
  drag
  dragConstraints={constraintsRef}
  dragElastic={0.4}
  dragMomentum={true}
  dragTransition={{
    bounceStiffness: 300,
    bounceDamping: 20,
  }}
  whileDrag={{
    scale: 1.05,
    cursor: "grabbing",
  }}
>
  {elem.text}
</motion.h1>
    );
  })}
</motion.div>
    

    </div>
  );
};

export default TechStack;
