import { collabApps } from "..";

const Affiliate = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row-reverse justify-center md:items-center gap-5 px-8 md:px-32 py-5 md:py-16 lg:py-40">
        <img
          loading="lazy"
          src="./affiliate/affiliate.png"
          alt="heroImage"
          className="w-[190px] md:w-[291px] lg:w-[569px] h-[182px] md:h-[280px] lg:h-[529px] my-6 rounded-3xl md:rounded-lg lg:rounded-sm"
        />
        <div className="max-w-[1726px]">
          <p className="font-bold text-[40px] md:text-[60px] lg:text-[88px] text-[#505153] leading-none">
            Welcome to Harry Photo Affiliate Program!
          </p>
          <p className="font-light text-[24px] text-[#505153] my-6 w-full mt-5 md:mt-10 lg:mt-20">
            Join our affiliate program today and start earning generous
            commissions by promoting our products to your audience. partnering
            with HarryPhoto is a fantastic way to monetize your platform while
            sharing valuable resources with your followers.
          </p>
          <button className="nav-btn bg-[#4A16D8] text-white border border-[#4A16D8]">
            Explore
          </button>
        </div>
      </div>
      <div className="mt-40 md:mt-52 lg:mt-60 px-8 md:px-32">
        <div className="relative mt-16 left-1/2 flex w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[45rem] aspect-square border-4 border-[#D9D9D9] rounded-full -translate-x-1/2 scale:75 md:scale-100 ">
          <div className="flex w-32 sm:w-40 md:w-52 lg:w-40 aspect-square m-auto rounded-full">
            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
              <p className="text-[30px] md:text-[50px] lg:text-[80px] font-bold text-center text-[#4A16D8]">
                How Affiliate Work?
              </p>
            </div>
          </div>
          <ul>
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute top-0 left-1/2 h-1/2 -ml-14 md:-ml-16 lg:-ml-28 origin-bottom rotate-${
                  index * 45
                }`}
              >
                <div
                  className={`relative pr-10 hover:-translate-y-2 -mt-2 md:-mt-4 lg:-mt-7 hover:scale-110 ease-in-out duration-500 cursor-pointer navshadow rounded-xl -rotate-${
                    index * 45
                  }`}
                >
                  <p className="text-[16px] md:text-[20px] lg:text-[30px] rounded-full text-center w-[100px] md:w-[140px] md:py-1 lg:w-[210px] lg:py-2 bg-[#4A16D8] text-white border border-[#4A16D8]">
                    {app.title}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-[#F5F5F5] flex flex-col items-center gap-8 my-10 text-[#505153] px-8 md:px-10 py-20 text-center mt-60">
        <p className="text-[#4A16D8] text-[30px] font-bold bg-white px-8 py-1 shadow-xl rounded-md">
          Join Our Affiliate Program
        </p>
        <p className="text-[24px] font-bold max-w-[750px]">
          is quick and easy. Simply fill out the application form, and once
          approved. you'll gain access to your affiliate dashboard.
        </p>
        <p className="text-[24px] font-light max-w-[1100px]">
          Start promoting HarryPhoto products to your audience using your unique
          affiliate links. Share them on your website, blog, social media
          channels, email newsletters, or any other platform where your audience
          engages with your content.
        </p>
        <div className="flex flex-row mt-16">
          <div className="flex flex-col justify-center items-center text-center rounded-xl md:rounded-r-none border border-[#c7c7c7] md:border-r-0 p-12 m-4 md:m-0 md:mr-0 shadow-2xl bg-white text-[#727272] h-[680px] lg:h-[700px] max-w-[500px] lg:max-w-[1000px]">
            <form className="my-6 space-y-5 py-10 max-w-[600px]" action="POST">
              <p className="text-[36px] font-bold text-[#727272]] text-start">
                Become Affiliate Signup Here
              </p>
              <div className="flex flex-row gap-5 lg:gap-10 w-full my-3">
                <input
                  type="text"
                  className="inputContact"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="inputContact"
                  placeholder="Last Name"
                />
              </div>
              <input
                type="email"
                className="inputContact my-3 w-full"
                placeholder="Email"
              />
              <input
                type="number"
                className="inputContact my-3 w-full"
                placeholder="Phone"
              />
              <textarea
                name="contactMessage"
                id="contactMessage"
                className="inputContact my-3 w-full"
                placeholder="Type Your Message Here"
                rows={10}
              />
              <button className="px-8 rounded-full py-1 bg-[#4A16D8] text-white border border-[#4A16D8] float-end">
                Submit
              </button>
            </form>
          </div>
          <img
            loading="lazy"
            src="./coupons/c3.png"
            alt="login-image"
            className="hidden rounded-r-[16px] md:inline-block md:h-[680px] lg:h-[700px] md:w-[300px] lg:w-[500px] xl:w-[676px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Affiliate;
