import { investorCategories } from "..";

const Investor = () => {
  const companies = ["./investor/ic1.png", "./investor/ic2.png", "./investor/ic3.png", "./investor/ic4.png", "./investor/ic5.png"];
  return (
    <section>
      <div className="flex flex-col md:flex-row-reverse justify-center md:items-center gap-5 px-8 md:px-32 py-5 md:py-16 lg:py-40">
        <img
          loading="lazy"
          src="./investor/i1.jpg"
          alt="heroImage"
          className="w-[250px] md:w-[400px] lg:w-[600px] xl:w-[800px] h-[200px] md:h-[300px] lg:h-[450px] my-6 rounded-3xl md:rounded-lg lg:rounded-sm"
        />
        <div className="max-w-[1726px]">
          <p className="font-bold text-[40px] md:text-[60px] lg:text-[88px] text-[#505153] leading-none">
            Invest in one of the most exciting buisinesses
          </p>
          <p className="font-light text-[24px] text-[#505153] my-6 w-full mt-5 md:mt-10">
            Where great buisinesses and great people meet. We bring together
            buisinesses looking for investment and investors with the capital,
            talent, contacts and knowledge to help them succeed
          </p>
          <button className="px-8 rounded-full py-2 bg-[#4A16D8] text-white border border-[#4A16D8] text-[24px] lg:mt-10">
            Discover Interests
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-20 text-[#505153] my-5 md:my-10 lg:my-20">
        <div className="rounded-xl border border-gray-300 p-5 max-w-[300px]">
          <p className="text-[48px] font-bold">$1B+</p>
          <p className="text-[20px] font-bold">invested</p>
          <hr />
          <p className="text-[18px] font-light mt-4">
            Since 2020 we are the top investment in image stocks
          </p>
        </div>
        <div className="rounded-xl border border-gray-300 p-5 max-w-[300px]">
          <p className="text-[48px] font-bold">3.5M+</p>
          <p className="text-[20px] font-bold">members</p>
          <hr />
          <p className="text-[18px] font-light mt-4">
            Talented and passionate photographers
          </p>
        </div>
        <div className="rounded-xl border border-gray-300 p-5 max-w-[300px]">
          <p className="text-[48px] font-bold">5B+</p>
          <p className="text-[20px] font-bold">downloads</p>
          <hr />
          <p className="text-[18px] font-light mt-4">
            From A to every kind of photo downloaded
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-20 bg-[#F5F5F5] p-10 w-full mt-10 md:mt-32 lg:mt-60">
        {companies.map((items) => (
          <>
            <img src={items} alt="companies" className="w-[250px] h-[100px]" />
          </>
        ))}
      </div>
      <div className="flex flex-col gap-10 text-[#505153] md:gap-20 justify-center items-center mt-20 md:mt-40 lg:mt-60">
        <p className="text-[48px] font-bold max-w-[400px] text-center">
          Which Categories Interests you?
        </p>
        <div className="flex flex-row flex-wrap gap-10 mx-5 lg:mx-0 md:gap-20 justify-center ">
          {investorCategories.map((items) => (
            <div key={items.title} className="max-w-[200px] p-5">
              <img
                src={items.img}
                alt=""
                className="w-10 h-10 shadow-2xl rounded-2xl"
              />
              <p className="text-[26px] font-bold my-5">{items.title}</p>
              <p>{items.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investor;
