import Textanimation from "../../components/Ui/Textaniamtion";

const Githubstatic = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <h1 className="Satoshi text-[4vw]">
        <Textanimation
          text="        My GitHub Activity

"
          classname="Satoshi text-black text-[3.5vw]"
        />{" "}
      </h1>

      {/* Full width BIG container */}
      <div
  className="
    border border-gray-500
   py-10

 px-30 py-10 overflow-x-auto flex justify-center
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
            scale-125
          "
          unoptimized
        />
      </div>
    </div>
  );
};

export default Githubstatic;
