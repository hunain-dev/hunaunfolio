// import { motion } from "framer-motion";

// const cards = [
//   {
//     img: "../../../assets/images/client1.webp",
//     title: "Marketing Manager",
//     tag: "Marrie vong",
//     desc:"Thank you, Hunain! You built our agency’s website exactly the way I wanted. Clean, fast and beautifully animated. Keep it up!"
//   },
//   {
//     img: "../../../assets/images/Client2.webp",
//     title: "Team Leader",
//     tag: "Uzair khan",
//     desc:"Welcome Hunain! Thank you so much for helping us fix critical bugs and supporting our project. Your contribution truly made a difference"

//   },
//   {

//     img: "../../../assets/images/Client3.webp",
//     title: "Development Team",
//     tag: "Mostafa",
//     desc:"Welcome Hunain! Thank you so much for helping us fix critical bugs and supporting our project. Your contribution truly made a difference"

//   },
// ];

// const OurClients = () => {
//   return (
//     <div className="w-full  min-h-screen md:min-h-fit md:px-4   ">
//         <h2 className="actay lg:text-3xl text-2xl md:text-3xl text-center mt-10">Kinds word from clients</h2>
//         <div className="w-full lg:mt-13 mt-7 md:mt-13  flex items-center justify-center lg:flex-row flex-col md:flex-row gap-6  ">
//         {cards.map((card, index) => (
//         <motion.div
//           key={index}
//           whileHover={{ y: -10 }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//           className="relative w-72 h-[420px] rounded-xl overflow-hidden shadow-lg bg-white"
//         >
//           {/* Image */}
//           <img
//             src={card.img}
//             className="w-full h-full object-cover"
//             alt="img"
//             loading="lazy"
//           />

//           {/* Hover Text Box */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileHover={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//             className="absolute bottom-5 left-5 right-5 bg-white p-4 rounded-xl shadow-lg cursor-pointer"
//           >
//             <p className="text-xs inline-block bg-blue-100 text-blue-600 px-2 py-[2px] rounded-md">
//               {card.tag}
//             </p>
//             <h2 className="actay text-lg  mt-1">{card.title}</h2>
//             <p className="text-gray-500 text-sm">{card.desc}</p>
//           </motion.div>
//         </motion.div>
//       ))}
//         </div>

//     </div>
//   );
// };

// export default OurClients;

import React from "react";

const OurClients = () => {
  return (
    <div className=" w-full mt-7">
      <div className="h-[40vh] text-3xl flex items-center justify-center w-full bg-blue-400">
        <h1>hi my name is hunain</h1>
      </div>

      <div className="h-screen  w-full  grid grid-cols-3 p-11 flex items-center justify-center">
        <div className="h-full rounded-lg  w-sm bg-red-500"></div>
        <div className="h-full w-sm rounded-lg   bg-red-300"></div>
        <div className="h-full w-sm rounded-lg bg-red-200"></div>
      </div>
    </div>
  );
};

export default OurClients;
