const Featured = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row-reverse justify-center md:items-center gap-5 px-8 md:px-32 py-5 md:py-16 lg:py-40">
        <img
          loading="lazy"
          src="./featured/fhero.jpeg"
          alt="heroImage"
          className="w-[190px] md:w-[591px] lg:w-[805px] h-[182px] md:h-[380px] lg:h-[690px] my-6 rounded-3xl md:rounded-lg lg:rounded-sm"
        />
        <div className="max-w-[1726px]">
          <p className="font-bold text-[32px] md:text-[40px] lg:text-[52px] text-[#505153] leading-none">
            Discover the best of the best with our Featured Collection
          </p>
          <p className="font-light text-[24px] lg:text-[35px] text-[#505153] my-6 w-full mt-5">
            Products to trending items, this carefully selected assortment
            showcases some of our most popular and beloved offerings.
          </p>
          <button className="px-8 py-4 rounded-full font-bold bg-[#3b82f6] text-white border border-[#3b82f6]">
            Sign Up to Start
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center pt-20 px-5 w-full text-white bg-[#F5F5F5]">
        <div className="w-auto h-auto lg:w-[688px] lg:h-[400px] relative">
          <img
            loading="lazy"
            src="./featured/f1.jpeg"
            alt="pic1"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 left-0 z-10 p-6 leading-tight">
            <p className="text-[30px] font-bold mb-5">Handpicked Selection</p>
            <p className="text-[24px] font-extralight">
              scours the globe to bring you the finest products from top brands
              and emerging designers.
            </p>
          </div>
        </div>
        <div className="w-auto h-auto lg:w-[688px] lg:h-[400px] relative">
          <img
            loading="lazy"
            src="./featured/f2.jpeg"
            alt="pic2"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 left-0 z-10 p-6 leading-tight">
            <p className="text-[30px] font-bold mb-5">Trending & Timeless</p>
            <p className="text-[24px] font-extralight">
              Whether you're looking for the latest fashion trends, timeless
              classics, or innovative gadgets, our Featured Collection has
              something for everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center pt-10 px-5 w-full text-white bg-[#F5F5F5]">
        <div className="w-auto h-auto lg:w-[452px] lg:h-[300px] relative">
          <img
            loading="lazy"
            src="./featured/f3.jpeg"
            alt="pic1"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 left-0 z-10 p-6 leading-tight">
            <p className="text-[30px] font-bold mb-5">
              Exceptional
              <br />
              Quality
            </p>
            <p className="text-[24px] font-extralight">
              We believe in offering only the best to our customers.
            </p>
          </div>
        </div>
        <div className="w-auto h-auto lg:w-[452px] lg:h-[300px] relative">
          <img
            loading="lazy"
            src="./featured/f4.jpeg"
            alt="pic2"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 left-0 z-10 p-6 leading-tight">
            <p className="text-[30px] font-bold mb-5">
              Exclusive Deals
              <br />
              and Discounts
            </p>
            <p className="text-[24px] font-extralight">
              njoy special offers, exclusive discounts, and limited-time
              promotions
            </p>
          </div>
        </div>
        <div className="w-auto h-auto lg:w-[452px] lg:h-[300px] relative">
          <img
            loading="lazy"
            src="./featured/f5.jpeg"
            alt="pic2"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 left-0 z-10 p-6 leading-tight">
            <p className="text-[30px] font-bold mb-5">
              Expert
              <br />
              Editors
            </p>
            <p className="text-[24px] font-extralight">
              Our team consists of experienced editors with a keen eye for
              detail.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] flex flex-col items-center gap-8  text-[#505153] px-8 md:px-10 py-20 lg:py-40 text-center">
        <p className="text-[#3b82f6] text-[30px] font-bold bg-white px-8 py-1 shadow-xl rounded-md">
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
              <button className="px-8 rounded-full py-1 bg-[#3b82f6] text-white border border-[#3b82f6] float-end">
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

export default Featured;
