import SwiperSlider from "../../Components/SwiperSlider"
const ProjectsShowcase = () => {

  return (
    <div className=" w-full lg:h-screen h-100 lg:mb-0 mb-12">
      <div className="h-full w-full flex items-center  justify-center lg:relative">
        <div className="h-full flex items-center justify-center w-full relative overflow-hidden">
<h2 className="Garelin font-normal uppercase lg:text-[14vw] lg:opacity-100 opacity-0 text-6xl md:text-[22vw] ">
Projects
</h2>

<div className="absolute  flex items-center  justify-center h-full left-0    w-full ">            
 <SwiperSlider/>
          </div>
        </div>
      
       


     
      </div>
    </div>
  );
};

export default ProjectsShowcase;

