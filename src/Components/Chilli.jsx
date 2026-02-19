import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import chilliwaling from "../../public/assets/images/chilliman.gif"
gsap.registerPlugin(ScrollTrigger)

const Chilli = () => {
  const imgRef = useRef(null)

  useEffect(() => {
    // Initial position - off screen to the right
    gsap.set(imgRef.current, {
      x:1200,
      opacity: 0
    });

    // Entrance animation with delay
    gsap.to(imgRef.current, {
      x: 0,
      opacity: 1,
      delay: 2, // 3 second delay after page load
      duration: 4,
      ease: "power2.out"
    });

    // Scroll animation
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
end: "bottom+=4000",
        scrub:25,
      }
    });
    
    tl.to(imgRef.current, {
      x:-1200,
      rotate: 0,
    })

    tl.to(imgRef.current, {
      x: 0,
      rotate:370,
    })


  }, [])    

  return (
    <div className="chilliman lg:opacity-100 opacity-0 fixed bottom-0 right-0 z-6 h-[25vh] w-[7%] sm:w-[10%] md:w-[14%] md:h-[20vh] flex items-end justify-end">
    <img
      ref={imgRef}
    src={chilliwaling}
      alt=""
      className="h-full object-contain"
    />
  </div>
  
  )
}

export default Chilli