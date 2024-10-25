const Premium = () => {
  return (
    <section className="text-[#505153]">
      <div className="flex flex-col justify-center items-center px-8 md:px-16 lg:px-20 xl:px-32 py-5 md:py-16 lg:py-40 text-center leading-tight">
        <p className="text-[46px] lg:text-[66px] font-bold max-w-[1000px]">
          {" "}
          Exclusive Content
          <br /> with Our Premium Subscription
        </p>
        <p className="text-[24px] lg:text-[36px] font-light max-w-[1200px] mt-6">
          Upgrade your experience and unlock a world of benefits with our
          premium content subscription.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center px-5 md:px-12 lg:px-20 xl:px-32 mx-auto w-full">
        <img
          loading="lazy"
          src="./premium/p1.jpeg"
          alt="hero"
          className="h-auto lg:max-w-[771px] lg:h-[608px] mt-10"
        />
        <div className="py-8 px-20 space-y-5 lg:space-y-14 bg-[#4A16D8] text-white text-[24px] font-bold lg:mt-10">
          <p>Access to Exclusive Content</p>
          <p>Ad-Free Experience</p>
          <p>Early Access and Sneak Peeks</p>
          <p>Enhanced Features and Customization</p>
          <p>Priority Support</p>
          <p>Exclusive Discounts and Offers</p>
        </div>
      </div>
      <div className=" lg:px-36 py-20 lg:py-40 mt-20 text-center flex flex-col justify-center items-center gap-8 mx-8 lg:mx-auto bg-[#F5F5F5]">
        <p className="text-[36px] font-bold max-w-[1000px] leading-tight">
        Join Our Premium Community Today
        </p>
        <p className="text-[36px] font-light max-w-[1150px] leading-tight">
        Ready to take your experience to the next level? Upgrade to our premium content subscription today and unlock a world of exclusive benefits and premium features. Join our premium community and discover why our subscribers love being part of the club.
        </p>
        <div className="flex flex-row flex-wrap gap-10 justify-center items-center duration-300 ease-in-out mt-20 mb-40">
          <div className="colldiv bg-white hover:bg-[#4A16D8] hover:text-white border-2 duration-300 ease-in-out border-[#4A16D8] rounded-md flex flex-col gap-2 justify-end items-start w-full lg:w-auto min-h-[330px] p-7 text-start">
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
          <div className="colldiv bg-white hover:bg-[#4A16D8] hover:text-white border-2  duration-300 ease-in-out border-[#4A16D8] rounded-md flex flex-col gap-2 justify-end items-start min-h-[330px] p-7 text-start w-full lg:max-w-[688px]">
            <p className="text-[30px] font-bold">
              Professional
              <br /> Quality
            </p>
            <p className="text-[24px] font-light">
              Every photEditorial is handpicked for we make it sure that it
              suits your needs.
            </p>
            <button className="collbutton px-7 py-4 rounded-full bg-white text-[#505153] font-bold text-[24px]">
              Sign up Now
            </button>
          </div>
          <div className="colldiv bg-white hover:bg-[#4A16D8] hover:text-white border-2  duration-300 ease-in-out border-[#4A16D8] rounded-md flex flex-col gap-2 justify-end items-start w-full lg:w-auto min-h-[330px] p-7 text-start">
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
      <div className="bg-[#F5F5F5] flex flex-col items-center gap-8 pb-40 text-[#505153] px-8 md:px-10 text-center">
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
            src="./featured/f6.jpeg"
            alt="login-image"
            className="hidden rounded-r-[16px] md:inline-block md:h-[680px] lg:h-[700px] md:w-[300px] lg:w-[500px] xl:w-[676px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Premium;
