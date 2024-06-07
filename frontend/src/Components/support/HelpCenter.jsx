import { investorCategories } from "..";

const HelpCenter = () => {
  return (
    <section className="text-[#727272] mt-10 lg:mt-0 leading-tight bg-[#F5F5F5]">
      <div className="px-8 md:px-16 lg:px-20 xl:px-32 py-5 md:py-16 lg:py-40 text-center max-w-[1500px] mx-auto">
        <span className="text-[48px] lg:text-[70px] font-bold my-5 lg:my-10">
          Help Center
        </span>
        <p className="text-[24px] font-light mt-2 lg:mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci dolor tempora labore voluptatibus recusandae iusto consequuntur voluptate eveniet? Ex esse dignissimos amet voluptatibus maxime natus laboriosam expedita, placeat voluptas?
        </p>
        <div className="flex flex-row flex-wrap gap-10 justify-center items-center mt-10 ml-0 md:ml-5 ">
            <button className="px-10 rounded-full bg-white hover:bg-[#4A16D8] hover:text-white duration-300 ease-in-out text-[#4A16D8] border border-[#4A16D8] font-bold py-4">Chat with Support</button>
            <p className="underline decoration-2 underline-offset-4 font-bold text-[18px] hover:text-[#4A16D8] cursor-pointer">+123 456 789</p>
            <p className="underline decoration-2 underline-offset-4 font-bold text-[18px] hover:text-[#4A16D8] cursor-pointer">support@harryphoto.com</p>
        </div>
      </div>
      <div className='flex flex-col gap-10 md:gap-20 justify-center items-center mt-20 px-10 pb-40'>
        <p className='text-[48px] font-bold max-w-[400px] text-center'>How can we help?</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-10 xl:gap-20 mx-5 lg:mx-0  justify-center '>
            {investorCategories.map((items) => (
                <div key={items.title} className='max-w-[300px] p-5 rounded-lg border border-gray-300 hover:shadow-xl hover:scale-105 cursor-pointer duration-500 ease-in-out bg-white'>
                    <img src={items.img} alt="" className='w-10 h-10 shadow-2xl rounded-2xl'/>
                    <p className='text-[26px] font-bold my-5'>{items.title}</p>
                    <p>{items.desc}</p>
                </div>
            ))}
        </div>
      </div>
      <div className="px-8 md:px-16 lg:px-20 xl:px-60 py-5 text-center space-y-10 pb-40">
        <p className="text-[48px] font-bold">Common Questions</p>
        <div className="underline decoration-2 space-y-5 underline-offset-4 font-bold text-[18px] text-[#5c3bb7] hover:text-[#4a16d8] cursor-pointer">
        <p>How do i reset my password?</p>
        <p>What payment methods are accepted?</p>
        <p>What are the terms and conditions?</p>
        <p>Are the pictures expensive?</p>
        <p>Are there any free photos?</p>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
