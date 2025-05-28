import svg from "/svg.svg";

const HeroDiagramm = () => {
  return (
    <div className="w-full flex flex-col gap-2 relative">
      <img src={svg} alt="" className="absolute bottom-[-10px] left-5 z-10" />
      <div className="flex items-end justify-around w-full h-[12rem]">
        <div
          className="relative w-[4rem] h-[30%] bg-[#A9DEF4] rounded-[5px]
          before:content-[''] before:absolute before:w-[1.8rem] before:h-[1.8rem]
          before:top-[-13px] before:translate-x-[-50%] before:rounded-full
          before:border-[4px] before:border-white before:bg-[#A9DEF4]"
        ></div>
        <div className="w-[4rem] h-[45%] bg-[#9CC9DC] rounded-[5px]"></div>
        <div className="w-[4rem] h-[60%] bg-[#69A8C2] rounded-[5px]"></div>
        <div className="w-[4rem] h-[80%] bg-[#5190AA] rounded-[5px]"></div>
        <div
          className="relative w-[4rem] h-[100%] bg-[#31728D] rounded-[5px]
          before:content-[''] before:absolute before:w-[1.8rem] before:h-[1.8rem]
          before:top-[-13px] before:translate-x-[-50%] before:rounded-full
          before:border-[4px] before:border-white before:bg-[#31728D]"
        ></div>
      </div>
      <div className="flex justify-between mx-4 font-bold text-[1.2rem] ">
        <p>Week 1</p>
        <p>Week 5</p>
      </div>
    </div>
  );
};

export default HeroDiagramm;
