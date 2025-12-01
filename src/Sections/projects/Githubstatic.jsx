import Textanimation from "../../components/Ui/Textaniamtion";

const Githubstatic = () => {
  return (
    <div className="w-full lg:px-0 px-4 lg:mt-0 mt-3 flex flex-col items-center justify-center ">
      <h1 className="Satoshi text-[4vw]">
        <Textanimation
          text="        My GitHub Activity

"
          classname="Satoshi text-black lg:text-[3.5vw] md:text-5xl text-2xl"
        />{" "}
      </h1>

      <div
  className="
    border border-gray-500
   lg:py-10 md:py-10

 lg:px-30 md:px-22 py-6 overflow-x-auto flex justify-center
    shadow-lg
    rounded-xl
  "
>

        <img
          src="https://ghchart.rshah.org/hunain-dev"
          alt="GitHub Contributions"
          width={500}
          height={400}
          className="
            w-full 
            h-auto 
            object-contain 
            lg:scale-125
            md:scale-120
          "

          unoptimized
        />
      </div>
    </div>
  );
};

export default Githubstatic;
