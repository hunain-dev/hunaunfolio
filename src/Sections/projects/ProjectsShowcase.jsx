"use client";

import SwiperSlider from "../../components/SwiperSlider"
const ProjectsShowcase = () => {

  return (
    <div className=" w-full lg:h-screen h-[80vh]     ">
      <div className="h-full w-full flex items-center justify-center relative">

        <div className="h-full flex items-center justify-center w-full   relative overflow-hidden">

<h2 className="Garelin font-normal uppercase lg:text-[14vw] text-8xl md:text-[22vw] ">
Projects
</h2>
          <div className="absolute flex items-center justify-center left-0   w-full ">
            
 <SwiperSlider/>
          </div>
        </div>
      
       


     
      </div>
    </div>
  );
};

export default ProjectsShowcase;

