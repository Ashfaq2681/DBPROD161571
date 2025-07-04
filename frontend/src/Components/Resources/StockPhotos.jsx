const StockPhotos = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row-reverse justify-center md:items-center gap-7 px-8 md:px-32 py-5 md:py-16 lg:py-40">
        <img
          loading="lazy"
          src="./stockphotos/spbg.jpeg"
          alt="heroImage"
          className="w-[190px] md:w-[291px] lg:w-[808px] h-[282px] md:h-[280px] lg:h-[886px] my-6"
        />
        <div className="max-w-[1726px]">
          <p className="font-bold text-[40px] md:text-[60px] lg:text-[88px] text-[#505153] leading-none">
            Your Source For Stunning Stock Photos
          </p>
          <p className="font-light text-[35px] text-[#505153] my-6 w-full mt-5 md:mt-10 leading-tight">
            Unlock a world of visual possibilities with StockPics, your premier
            destination for high-quality stock photos.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-10 flex-wrap justify-center items-center py-10 mx-auto bg-[#F7F7F7] text-[#505153] leading-tight">
        <div className="bg-white rounded-lg max-w-[928px] p-10 h-auto lg:h-[448px]">
            <p className="mt-16 text-[40px] lg:text-[56px] font-bold max-w-[249px]">Diverse Selection</p>
            <p className="text-[24px] lg:text-[35px] font-light mt-3">Diverse Selection: Explore our vast library of images spanning every category imaginable. From landscapes to lifestyle, business to beauty, we've got you covered.</p>
        </div>
        <div className="bg-white rounded-lg w-full max-w-[928px] lg:max-w-[448px] p-10 h-auto lg:h-[448px]">
            <p className="mt-16 text-[40px] lg:text-[56px] font-bold max-w-[331px]">Professional Quality</p>
            <p className="text-[24px] lg:text-[35px] font-light mt-3">Every photo in our collection is handpicked for we make it sure that it suits your needs.</p>
        </div>
      </div>
      <div className="bg-[#3b82f6] text-white flex flex-col justify-center items-center gap-5 py-10 text-center leading-tight">
        <p className="text-[48px] font-bold">Enjoy Peace of Mind</p>
        <p className="text-[24px] font-light max-w-[1100px]">Enjoy peace of mind knowing that all our photos come with royalty-free licensing. Use them for commercial projects, social media, websites, and more without worrying about additional fees.</p>
        <button className="px-9 py-4 rounded-full bg-white text-[#505153] font-bold text-[24px]">Sign up Now</button>
      </div>
      <div className="bg-[#F5F5F5] px-auto w-full leading-tight text-[#505153]">
            <div className=" flex flex-col-reverse justify-center items-center lg:flex-row gap-10 lg:gap-40 mt-10 lg:mt-0 ">
                <div className="px-8 py-10 lg:py-0">
                    <p className="text-[49px] lg:text-[88px] font-bold max-w-[570px]">Start Exploring Now</p>
                    <p className="text-[24px] lg:text-[35px] font-light max-w-[570px] mt-5">Our intuitive search and filter features make it a breeze to find the perfect photo for your needs. Narrow down your search by keyword, category, color, orientation, and more.</p>
                </div>
                <img src="./stockphotos/s1.jpeg" alt="s1" className="w-full h-auto md:w-[500px] md:h-[500px] xl:w-[748px] xl:h-[748px]"/>
            </div>
        </div>
    </section>
  );
};

export default StockPhotos;
