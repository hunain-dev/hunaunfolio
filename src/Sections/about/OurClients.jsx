"use client";
import { motion } from "framer-motion";

const cards = [
  {
    img: "../../../assets/images/client1.png",
    title: "Marketing Manager",
    tag: "Marrie vong",
    desc:"Thank you, Hunain! You built our agency’s website exactly the way I wanted. Clean, fast and beautifully animated. Keep it up!"
  },
  {
    img: "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhbmRzaGFrZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Team Leader",
    tag: "Uzair khan",
    desc:"Welcome Hunain! Thank you so much for helping us fix critical bugs and supporting our project. Your contribution truly made a difference"

  },
  {
    img: "https://cdn.pixabay.com/photo/2025/06/02/12/27/man-9637000_1280.jpg",
    title: "Development Team",
    tag: "Mostafa",
    desc:"Welcome Hunain! Thank you so much for helping us fix critical bugs and supporting our project. Your contribution truly made a difference"

  },
];

const OurClients = () => {
  return (
    <div className="w-full  min-h-screen  ">
        <h2 className="actay lg:text-3xl text-2xl text-center mt-10">Kind word from clients</h2>
        <div className="w-full lg:mt-13 mt-7  flex items-center justify-center lg:flex-row flex-col gap-6  ">
        {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-72 h-[420px] rounded-xl overflow-hidden shadow-lg bg-white"
        >
          {/* Image */}
          <img
            src={card.img}
            className="w-full h-full object-cover"
            alt="img"
          />

          {/* Hover Text Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute bottom-5 left-5 right-5 bg-white p-4 rounded-xl shadow-lg cursor-pointer"
          >
            <p className="text-xs inline-block bg-blue-100 text-blue-600 px-2 py-[2px] rounded-md">
              {card.tag}
            </p>
            <h2 className="actay text-lg  mt-1">{card.title}</h2>
            <p className="text-gray-500 text-sm">{card.desc}</p>
          </motion.div>
        </motion.div>
      ))}
        </div>
    
    </div>
  );
};

export default OurClients;
