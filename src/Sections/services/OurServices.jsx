// import Faqs from "./Faqs";

const Ourservices = () => {
  return (
    <div  id="services" className="w-full mt-[8vh] h-full relative bg-[#689D48]">

      {/* Top Section */}
      <div className="w-full px-[1vw] text-center">
        <h2 className="Impacted font-medium lg:text-[13vw] md:text-[14vw] text-5xl lg:leading-[12vw] uppercase text-white">
          Our Services,
        </h2>
        <h2 className="Impacted font-medium lg:text-[13vw] text-5xl lg:leading-[12vw] md:leading-[12vw] md:text-[13vw] leading-13 uppercase text-white">
          WHAT I OFFER, & WHY CHOOSE ME
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="mt-[-2vw] w-full">
        <div className="h-full w-full bg-[#e0e05f] flex items-center justify-center overflow-hidden border border-black">
          <div className="flex items-center justify-center w-full lg:h-[183vh] mt-[-10vw] overflow-hidden" data-scroll data-scroll-speed="0.3">
          <img
  src="/public/assets/images/Ourservicesimages (1).png"
  alt="Service 1"
  className="
    object-contai object-center
    w-100 h-100         /* Mobile */
    md:w-110 md:h-210   /* Small Laptop */
    lg:w-230 lg:h-230   /* Desktop */
    xl:w-300 xl:h-300   /* Desktop */

  "
/>
<img
  src="/public/assets/images/Ourservicesimages (2).png"
  alt="Service 1"
  className="
    object-contai object-center
    w-100 h-100         /* Mobile */
    md:w-110 md:h-210   /* Small Laptop */
    lg:w-230 lg:h-230   /* Desktop */
    xl:w-300 xl:h-300   /* Desktop */
  "
/>        </div>
        </div>
      </div>

      {/* FAQ Section */}
      {/* <Faqs/> */}
    

    </div>
  );
};

export default Ourservices;
