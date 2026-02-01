import React, { useState } from 'react'

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    
const Faqss = [
    {
      question: "Do you create Awwwards-level websites?",
      answer: "Yes! I specialize in high-end, award-worthy websites with smooth animations, advanced interactions, and responsive designs that stand out."
    },
    {
      question: "Why would clients choose you?",
      answer: "Clients choose me for my attention to detail, creative approach, and proven results. I turn ideas into interactive web experiences that not only look amazing but also perform flawlessly."
    },
    {
      question: "What services do you provide?",
      answer: <>
      I offer full frontend development services, including:
      Animated landing pages
Interactive websites
UI/UX enhancements
GSAP & Scroll-based animations
Responsive and performance-optimized websites
      </> 
      
    },
    {
      question: "How long does it take you to complete a project?",
      answer: "Depending on the project scope, most websites take 1–3 weeks. I ensure quality, animation, and responsiveness without compromising deadlines."
    },
    {
      question: "Can I be compared to a normal Frontend Developer?",
      answer: "Absolutely! My work speaks for itself. I go beyond just writing code — I create interactive, animated, and visually engaging web experiences that leave a lasting impression, something a typical frontend developer may not offer."
    },
  
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=' pt-16  w-full overflow-hidden '>
        <div className='actay  flex items-center lg:gap-2 md:gap-5 justify-center flex-col w-full '>
        <h6 className='flex items-center text-gray-600'>
  <span className='w-3 h-3 bg-[#8CFF2E] rounded-full mr-2'></span>
  — FAQ
</h6>            <h1 className='lg:text-7xl text-4xl md:text-6xl  tracking-tighter text-[#2F2F2F]'>Got Questions?
            </h1>
            
            </div>

            <div  className='h-full pt-5  lg:w-3xl 2xl:w-3xl xl:w-3xl md:w-3xl m-auto overflow-hidden '>
           <div className="lg:py-12 py-9 lg:px-1 px-4">
      <div className="lg:space-y-7 space-y-10">
        {Faqss.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-400 lg:pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="figee flex justify-between items-center">
              <h3 className="lg:text-[1.6vw] text-[3.7vw] md:text-[3vw] 2xl:text-[1.4vw] text-[#222221FF] ">{faq.question}</h3>
              <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 lg:text-[1.4vw] text-[2.5vw] md:text-[2.6vw] 2xl:text-[1.2vw] ">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Faqs
