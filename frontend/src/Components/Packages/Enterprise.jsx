import { useState } from "react";

const Enterprise = () => {
  const [monthly, setMonthly] = useState(true);

  const handleMonthly = () => {
    setMonthly(!monthly);
  };

  return (
    <section className="text-[#727272] mt-10 lg:mt-0">
      <div className="px-8 md:px-16 lg:px-20 xl:px-32 py-5 md:py-16 lg:py-40 text-center leading-tight">
        <p className="text-[20px] font-light mb-2 lg:mb-10">
          Enterprise plans for everyday images at your enterprise
        </p>
        <span className="text-[70px] font-bold my-5 lg:my-10">
          Get all your images with the{" "}
          <p className="text-[#4A16D8]">Enterprise plans</p>
        </span>
        <p className="text-[24px] font-light mt-2 lg:mt-10">
          From small stuff to the big picture, streamline, explore, choose and
          get efficient with our plans
        </p>
      </div>
      <div className="px-8 md:px-16 lg:px-20 xl:px-32 py-5  bg-[#F5F5F5]">
        <div className="flex flex-col items-center justify-center py-40 px-7 ">
          <div className="flex flex-row mx-auto font-bold">
            <button
              onClick={handleMonthly}
              className={`p-4 border-y border-l rounded-l-full ${
                monthly
                  ? "bg-[#4A16D8] text-white border-[#4A16D8]"
                  : "bg-[#F5F5F5] text-black border-black"
              }`}
            >
              Monthly Payment
            </button>
            <button
              onClick={handleMonthly}
              className={`p-4 border-y border-r rounded-r-full ${
                monthly
                  ? "bg-[#F5F5F5] text-black border-black"
                  : "bg-[#4A16D8] text-white border-[#4A16D8]"
              }`}
            >
              Annual Payment
            </button>
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-14 text-[#727272] mt-24">
            <div className="p-10 bg-white rounded-md shadow-lg hover:shadow-2xl duration-300 ease-in-out">
              <p className="text-[24px] font-bold">Basic</p>
              <span className="text-[48px] font-bold text-black flex flex-row items-center gap-3">
                Free <p className="text-[#727272] text-[20px]">/ Month</p>
              </span>
              <hr />
              <ul
                className="text-[20px] font-bold"
                style={{ listStyleType: "disc" }}
              >
                <li className="flex flex-row gap-3 my-10"><img loading="lazy" src="./legal/tick.svg" alt="tick" className="w-6 h-6"/>Acess our pixel-perfect Svg icons</li>
                <li className="flex flex-row gap-3 my-10"><img loading="lazy" src="./legal/tick.svg" alt="tick" className="w-6 h-6"/>Unimited projects & page views</li>
                <li className="flex flex-row gap-3 my-10"><img loading="lazy" src="./legal/tick.svg" alt="tick" className="w-6 h-6"/>Mac/Windows App</li>
                <li className="flex flex-row gap-3 my-10"><img loading="lazy" src="./legal/tick.svg" alt="tick" className="w-6 h-6"/>Free lifetime updates</li>
              </ul>
              <button className="px-8 rounded-full bg-[#4A16D8] text-white border border-[#4A16D8] mx-auto font-bold py-2 w-full mb-3">
                Buy Premium Images
              </button>
            </div>
            <div className="p-10 bg-[#4A16D8] rounded-md shadow-lg hover:shadow-2xl duration-300 ease-in-out text-gray-300">
              <p className="text-[24px] font-bold">Pro</p>
              <span className="text-[48px] font-bold text-white flex flex-row items-center gap-3">
                $49 <p className="text-gray-200 text-[20px]">/ Month</p>
              </span>
              <hr />
              <ul
                className="text-[20px] font-bold"
                style={{ listStyleType: "disc" }}
              >
                <li className="flex flex-row gap-3 my-10"><img loading="lazy" src="./legal/tick.svg" alt="tick" className="w-6 h-6 bg-white rounded-full"/>Acess our pixel-perfect Svg icons</li>
                <li className="flex flex-row gap-3 my-10"><img loading="lazy" src="./legal/tick.svg" alt="tick" className="w-6 h-6 bg-white rounded-full"/>Unimited projects & page views</li>
                <li className="flex flex-row gap-3 my-10"><img loading="lazy" src="./legal/tick.svg" alt="tick" className="w-6 h-6 bg-white rounded-full"/>Mac/Windows App</li>
                <li className="flex flex-row gap-3 my-10"><img loading="lazy" src="./legal/tick.svg" alt="tick" className="w-6 h-6 bg-white rounded-full"/>Free lifetime updates</li>
              </ul>
              <button className="px-8 rounded-full bg-white text-[#4A16D8] border border-white mx-auto font-bold py-2 w-full mb-3">
                Buy Premium Images
              </button>
            </div>
            <div className="p-10 bg-white rounded-md shadow-lg hover:shadow-2xl duration-300 ease-in-out">
              <p className="text-[24px] font-bold">Enterprise</p>
              <span className="text-[48px] font-bold text-black flex flex-row items-center gap-3">
                $490 <p className="text-[#727272] text-[20px]">/ Month</p>
              </span>
              <hr />
              <ul
                className="text-[20px] font-bold"
                style={{ listStyleType: "disc" }}
              >
                <li className="flex flex-row gap-3 my-10"><img loading="lazy" src="./legal/tick.svg" alt="tick" className="w-6 h-6"/>Acess our pixel-perfect Svg icons</li>
                <li className="flex flex-row gap-3 my-10"><img loading="lazy" src="./legal/tick.svg" alt="tick" className="w-6 h-6"/>Unimited projects & page views</li>
                <li className="flex flex-row gap-3 my-10"><img loading="lazy" src="./legal/tick.svg" alt="tick" className="w-6 h-6"/>Mac/Windows App</li>
                <li className="flex flex-row gap-3 my-10"><img loading="lazy" src="./legal/tick.svg" alt="tick" className="w-6 h-6"/>Free lifetime updates</li>
              </ul>
              <button className="px-8 rounded-full bg-[#4A16D8] text-white border border-[#4A16D8] mx-auto font-bold py-2 w-full mb-3">
                Buy Premium Images
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
