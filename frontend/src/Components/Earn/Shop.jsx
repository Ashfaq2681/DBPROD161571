import { shopCategories } from ".."

const Shop = () => {
  return (
    <section className="text-[#505153] mt-10">
        <div className="flex flex-col justify-center items-center px-8 md:px-16 lg:px-20 xl:px-32 py-5 md:py-16 lg:py-40 text-center leading-tight">
            <p className="text-[56px] lg:text-[88px] font-bold max-w-[850px]">Discover the Benefits of your Shop with Us</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center my-20 gap-7">
                <img loading="lazy" src="./shop/shop1.png" alt="shop hero" className="w-[250px] lg:w-[328px] h-[270px] lg:h-[368px] object-cover"/>
                <img loading="lazy" src="./shop/shop2.png" alt="shop hero" className="w-[250px] lg:w-[328px] h-[270px] lg:h-[368px] object-cover"/>
                <img loading="lazy" src="./shop/shop3.png" alt="shop hero" className="w-[250px] lg:w-[328px] h-[270px] lg:h-[368px] object-cover"/>
                <img loading="lazy" src="./shop/shop4.png" alt="shop hero" className="w-[250px] lg:w-[328px] h-[270px] lg:h-[368px] object-cover"/>
            </div>
            <p className="text-[24px] font-light max-w-[1300px] mt-0 md:mt-8 lg:mt-16">Join our affiliate program today and start earning generous commissions by promoting our products to your audience. partnering with HarryPhoto is a fantastic way to monetize your platform while sharing valuable resources with your followers.</p>
        </div>
        <div className="bg-[#F5F5F5]">
            <div className="flex flex-row flex-wrap justify-center gap-7 text-white leading-tight py-20">
                <div className="relative">
                    <img loading="lazy" src="./shop/shop5.png" alt="img5"  className="h-[328px] w-[328px] rounded-lg"/>
                    <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-[30px] font-bold mb-5 max-w-[200px]">Global Exposure</p>
                    <p className="text-[20px] font-light">Showcase your photography skills to a worldwide audience of creatives.</p>
                    </div>
                </div>
                <div className="relative">
                    <img loading="lazy" src="./shop/shop6.png" alt="img6"  className="h-[328px] w-[328px] rounded-lg"/>
                    <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-[30px] font-bold mb-5 max-w-[200px]">Monetize Your Skills</p>
                    <p className="text-[20px] font-light">Turn your passion for  into a profitable venture by monetizing your digital assets.</p>
                    </div>
                </div>
                <div className="relative">
                    <img loading="lazy" src="./shop/shop7.png" alt="img7"  className="h-[328px] w-[328px] md:w-[688px] object-cover rounded-lg"/>
                    <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-[30px] font-bold mb-5 max-w-[200px]">Flexibility and Control</p>
                    <p className="text-[20px] font-light max-w-[250px]">Enjoy the freedom to set your own prices, and control how you sell your products.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 md:gap-20 lg:gap-40 xl:gap-60 md:flex-row px-8 md:px-16 lg:px-20 xl:px-32 py-5 md:py-16 lg:py-40 text-center leading-tight max-w-[1408px] mx-auto justify-center items-center">
                <p className="text-[48px] font-bold max-w-[300px] text-center md:text-right">tailor your shop And your unique Style</p>
                <div className="flex flex-row flex-wrap items-center gap-7 text-center">
                    <p className="px-3 py-1 bg-white text-[24px] font-bold rounded-full">Passive Income Stream</p>
                    <p className="px-3 py-1 bg-white text-[24px] font-bold rounded-full">Build Your Brand</p>
                    <p className="px-3 py-1 bg-white text-[24px] font-bold rounded-full">Promotion</p>
                    <p className="px-3 py-1 bg-white text-[24px] font-bold rounded-full">Secure Payment Processing</p>
                    <p className="px-3 py-1 bg-white text-[24px] font-bold rounded-full">Support and Resources</p>
                    <p className="px-3 py-1 bg-white text-[24px] font-bold rounded-full">Reach a Wider Audience</p>
                    <p className="px-3 py-1 bg-white text-[24px] font-bold rounded-full">Access Global Insights</p>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-7 items-center px-8 md:px-16 lg:px-20 xl:px-32 py-5 md:py-16 lg:py-40 leading-tight ">
                <p className="text-[48px] font-bold">Partenering with the Best</p>
                <p className="text-[24px] font-light max-w-[1048px] text-center">Gain valuable insights into your shop's performance with access to detailed analytics and reporting tools. Track key metrics such as sales, revenue, and customer behavior to optimize your pricing strategies, marketing efforts, and product offerings for maximum profitability.</p>
                <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-20">
                {shopCategories.map((items) => (
                    <div className="relative">
                    <img loading="lazy" src={items.img} alt="img" className="w-[250px] lg:w-[328px] h-[250px] lg:h-[328px] object-cover"/>
                    <p className="absolute bottom-0 left-0 text-[40px] lg:text-[60px] text-white leading-none p-4 font-bold">{items.title}</p>
                    </div>
                ))}
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Shop