import { collectionButtons } from "..";

const Editorial = () => {
  return (
    <section className="text-[#505153] mt-10 md:mt-20 lg:mt-40">
      <div className=" lg:px-36 text-center flex flex-col justify-center items-center gap-8 mx-8 lg:mx-auto">
        <p className="text-[48px] lg:text-[66px] font-bold max-w-[1000px] leading-tight">
          Trusted for Editorial Excellence Your Partner in Crafting Compelling
          Content
        </p>
        <p className="text-[24px] lg:text-[36px] font-light max-w-[1150px] leading-tight">
          Whether you're a publisher, author, business owner, or content
          creator, our team of seasoned editors is here to elevate your content
          to new heights.
        </p>
        <div className="flex flex-row flex-wrap gap-10 justify-center items-center duration-300 ease-in-out mt-20 mb-40">
          <div className="colldiv hover:bg-[#4A16D8] hover:text-white border-2 duration-300 ease-in-out border-[#4A16D8] rounded-md flex flex-col gap-2 justify-end items-start w-full lg:w-auto min-h-[330px] p-7 text-start">
            <p className="text-[30px] font-bold">
              Tailored
              <br /> Solutions
            </p>
            <p className="text-[24px] font-light">
              Tailored to your specific needs and goals.
            </p>
            <button className="collbutton px-7 py-4 rounded-full bg-white text-[#505153] font-bold text-[24px]">
              Sign up Now
            </button>
          </div>
          <div className="colldiv hover:bg-[#4A16D8] hover:text-white border-2  duration-300 ease-in-out border-[#4A16D8] rounded-md flex flex-col gap-2 justify-end items-start min-h-[330px] p-7 text-start w-full lg:max-w-[688px]">
            <p className="text-[30px] font-bold">
              Professional
              <br /> Quality
            </p>
            <p className="text-[24px] font-light">
              Every photEditorial is handpicked for we make it sure
              that it suits your needs.
            </p>
            <button className="collbutton px-7 py-4 rounded-full bg-white text-[#505153] font-bold text-[24px]">
              Sign up Now
            </button>
          </div>
          <div className="colldiv hover:bg-[#4A16D8] hover:text-white border-2  duration-300 ease-in-out border-[#4A16D8] rounded-md flex flex-col gap-2 justify-end items-start w-full lg:w-auto min-h-[330px] p-7 text-start">
            <p className="text-[30px] font-bold">
              Get Started <br />
              Today
            </p>
            <p className="text-[24px] font-light">
              Tailored to your specific needs and goals.
            </p>
            <button className="collbutton px-7 py-4 rounded-full bg-white text-[#505153] font-bold text-[24px]">
              Sign up Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-7 justify-center lg:px-40 bg-[#F7F7F7] py-20">
        <div className="md:pb-12 w-[419px] h-[530px] bg-white rounded-lg">
          <p className="text-[36px] px-5 my-4 font-bold">
            Copy
            <br />
            Editing
          </p>
          <p className="text-[24px] px-5 my-4 font-light">
            Ensure clarity, consistency, and correctness in your written content
            with our copy editing services.
          </p>
          <img
            loading="lazy"
            src="./editorial/c1.jpeg"
            alt="c1"
            className="w-[419px] h-[264px] object-contain"
          />
        </div>
        <div className="md:pb-12 w-[419px] h-[530px] bg-white rounded-lg">
          <p className="text-[36px] px-5 my-4 font-bold">
            Copy
            <br />
            Editing
          </p>
          <p className="text-[24px] px-5 my-4 font-light">
            Ensure clarity, consistency, and correctness in your written content
            with our copy editing services.
          </p>
          <img
            loading="lazy"
            src="./editorial/c2.jpeg"
            alt="c2"
            className="w-[419px] h-[264px] object-contain"
          />
        </div>
        <div className="md:pb-12 w-[419px] h-[530px] bg-white rounded-lg">
          <p className="text-[36px] px-5 my-4 font-bold">
            Copy
            <br />
            Editing
          </p>
          <p className="text-[24px] px-5 my-4 font-light">
            Ensure clarity, consistency, and correctness in your written content
            with our copy editing services.
          </p>
          <img
            loading="lazy"
            src="./editorial/c3.jpeg"
            alt="c3"
            className="w-[419px] h-[264px] "
          />
        </div>
      </div>
      <div className="bg-[#F7F7F7] text-center flex flex-col justify-center items-center gap-8 px-8 py-20 lg:mx-auto">
        <p className="text-[48px] font-bold">Industries</p>
        <p className="text-[24px] font-light max-w-[1100px]">
          Photos, vectors, and social media designs can be incredibly valuable
          across a wide range of industries. Here are some industries and
          sectors that can benefit from utilizing digital content creatively:
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center gap-7 text-center max-w-[1150px]">
          {collectionButtons.map((item) => (
            <p key={item} className="px-8 py-4 bg-[#4A16D8] text-white text-[24px] font-bold rounded-full">
            {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Editorial;
