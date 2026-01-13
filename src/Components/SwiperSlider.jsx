import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const SwiperSlider = () => {
  
  const cardcollection = [
    {
      cardimg: "/assets/images/elastic.jpg",
      desctittle: "Estrela studio",
      carddesc:
        "Estrela studio is an awwwards winning website these cloned with precision and attention to detail.",
    },
    {
      cardimg: "/assets/images/Creative.png",
      desctittle: "Creative Giants",
      carddesc:
        "Creative Giants is an Awwwards-winning website that I successfully cloned with precision and attention to detail.",
      link: "https://klearmind-therapy-clinics.netlify.app/",
    },

    {
      cardvideo: "/assets/Videos/commingsoon.mp4",
      desctittle: "Mammoth Murals",
      carddesc:
        "Unearthed agency is a mural and sign painting agency based in Irondale, Alabama.",
      link: "https://mammoth-murals.netlify.app/",
    },
    {
      cardimg: "/assets/images/Klearmindtherapy.png",
      desctittle: "Klearmind Clinics",
      carddesc:
        "A modern website for a Ketamine & IV therapy clinic in California.",
      link: "https://klearmind-therapy-clinics.netlify.app/",
    },
    {
      cardimg: "/assets/images/Camille-Bas-1200x908.png",
      desctittle: "Digital Tobacco",
      carddesc: "Transforming traditional industry into digital excellence.",
      link: "https://tabaccino.netlify.app/",
    },
    {
      cardimg: "/assets/images/jobs.jpg",
      desctittle: "Career Hunt",
      carddesc: "An interactive job-based game to test accuracy and focus.",
      link: "https://careerhant.netlify.app/",
    },

    {
      cardimg: "/assets/images/ochidesign.png",
      desctittle: "Ochi Clone",
      carddesc:
        "Ochi Designs is a modern and minimalistic creative agency website clone, built to highlight branding, strategy, and interactive design.",
      link: "https://ochi-design-production.netlify.app/",
    },

    {
      cardimg: "/assets/images/Christmas image.png",
      desctittle: "Santa's Companion",
      carddesc:
        "Santa Company is a festive and interactive web experience designed to capture the magic of the holiday season",
      link: "https://santas-store.netlify.app/",
    },
    {
      cardimg: "/assets/images/tictac.png",
      desctittle: "Tic-Tac-Toe Game",
      carddesc:
        "Tic Tac Toe is a simple and interactive web game designed to capture the fun and competitive spirit of the classic two-player strategy",
      link: "https://reactxogame.netlify.app/",
    },
    {
      cardimg: "/assets/images/spacer.png",
      desctittle: "spencergabor work",
      carddesc:
        "Memory Game is an engaging and interactive web-based project designed to challenge concentration and recall skills. With smooth animations,",
      link: "https://spancer-gabor.netlify.app/",
    },
    {
      cardimg: "/assets/images/weather.jpg",
      desctittle: "Weather App",
      carddesc:
        "Weather App is a modern and user-friendly web application designed to provide real-time weather updates for any location.",
      link: "https://macro-weather-app.netlify.app/",
    },
    {
      cardimg: "/assets/images/Klearmindtherapy.png",
      desctittle: "Two Good Company",
      carddesc:
        "Two Good Company is a fully animated and responsive website clone inspired by the award-winning brand. With smooth animations, responsive layout,",
      link: "https://twogoodcompany.netlify.app/",
    },
    {
      cardimg: "/assets/images/TwoGoodGoodSave.jpg",
      desctittle: "Furni – Interior Design",
      carddesc:
        "Furni is a modern and minimalistic interior design website built to showcase elegant layouts and stylish aesthetics. With smooth animations,",

      link: "https://furni-interior-design.netlify.app/",
    },
    {
      cardimg: "/assets/images/hello.jpg",
      desctittle: "We think elastic",
      carddesc:
        "We Think Elastic is a modern and interactive website clone inspired by an award-winning design. With smooth animations, responsive layout,",

      link: "https://myrejoucie.netlify.app/",
    },
    {
      cardimg: "/assets/images/rejouices.jpeg",
      desctittle: "rejouices",
      carddesc:
        "Rejouice is a fully animated and responsive website clone inspired by the award-winning agency site. With smooth animations,",

      link: "https://wethinkelastic.netlify.app/",
    },
  ];


  return (
    <>
      <div>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {cardcollection.map((elem, index) => {
            return (
              <SwiperSlide key={index}>
                <a
                  href={index === 0 ? "#" : elem.link}
                  target="_blank"
                  onClick={(e) => {
                    if (index === 0) {
                      e.preventDefault();
                      alert("“The project is scheduled to go live next week.”")
                    }
                  }}
                  className="lg:h-[40vh] xl:h-[40vh] h-[23vh] md:h-[23vh]  w-full rounded-xl overflow-hidden block"
                >
                  {(index === 0 || index === 2) && elem.cardvideo ? (
                    <video
                      src={elem.cardvideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      height={500}
                      width={500}
                      src={elem.cardimg}
                      className="h-full w-full object-cover"
                      alt={elem.desctittle}
                      loading="lazy"
                    />
                  )}
                </a>

                <h1 className="actay lg:mt-5 xl:mt-7 mt-6 px-2 text-white  lg:text-[2vw] xl:text-[1.3vw] md:text-[3vw] font-500">
                  {elem.desctittle}
                </h1>
                <p className="actay mt-1 px-2 lg:text-[1vw]  xl:text-[0.8vw] md:text-[2vw] text-[3vw] text-white">
                  {elem.carddesc}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSlider;
