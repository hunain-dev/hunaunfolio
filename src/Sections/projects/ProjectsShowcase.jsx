"use client";

import SwiperSlider from "../../components/SwiperSlider"
const ProjectsShowcase = () => {

  return (
    <div className=" w-full h-screen  ">
      <div className="h-full w-full flex items-center justify-center relative">

        <div className="h-full flex items-center justify-center w-full   relative overflow-hidden">

<h2 className="Garelin font-normal uppercase text-[14vw] ">
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

