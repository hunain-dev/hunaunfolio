import React from 'react'
import ProjectsShowcase from "../projects/ProjectsShowcase"
import MoreProofsSection from './MoreProofsSection'
import Awards from './Awards'
import Githubstatic from './Githubstatic'
const Projects = () => {
  return (
    <div id="project" className='h-full  w-full mt-10'>
       <div className="px-30 mx-auto mb-[1vw]">
      <h2 className="Satoshi font-medium text-[3vw] mb-4 text-center  text-[#242627]">
        Work Collection
      </h2>
      <h5 className="Satoshi font-medium text-[1.7vw] text-center text-[#242627]">
        Explore my collection of dynamic and engaging UI animations crafted using ReactJS, GSAP ScrollTrigger, and Locomotive Scroll. From smooth transitions to interactive experiences, each project showcases my expertise in bringing static designs to life with creativity, precision, and seamless motion.
      </h5>
    </div>

    <ProjectsShowcase/>
    <MoreProofsSection/>
    <Awards/>
    <Githubstatic/>
    </div>
  )
}

export default Projects
