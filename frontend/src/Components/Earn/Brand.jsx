const Brand = () => {
  return (
    <section className="text-[#505153] leading-tight">
        <div className='px-8 md:px-16 lg:px-20 xl:px-32'>
            <p className='text-[46px] lg:text-[88px] font-bold max-w-[1050px] my-10'>An opportunity to represent our digital products to your audience.</p>
            <p className='text-[24px] font-light max-w-[1050px]'>Are you passionate about photography and eager to share your love for stunning visuals with others? Join our team of brand ambassadors at HarryPhoto and become an integral part of our vibrant community of photographers and creators.</p>
            <img loading="lazy" src="./brand/brandHero.png" alt="hero" className="w-full h-auto lg:max-w-[1295px] lg:h-[606px] mt-10"/>
        </div>
        <div className="bg-[#F5F5F5] px-auto w-full">
            <div className=" flex flex-col-reverse justify-center items-center lg:flex-row gap-10 lg:gap-40 mt-10 lg:mt-0 ">
                <div className="px-8 py-10 lg:py-0">
                    <p className="text-[49px] font-bold max-w-[400px]">Expand your reach and grow your audience</p>
                    <p className="text-[24px] font-light max-w-[550px]"> As a HarryPhoto ambassador, you'll have the opportunity to connect with like-minded individuals and tap into our global network of photographers and creatives.</p>
                </div>
                <img src="./brand/brand2.png" alt="brand2" className="w-full h-auto md:w-[500px] md:h-[500px] xl:w-[748px] xl:h-[748px]"/>
            </div>
            <div className=" flex flex-col justify-center items-center lg:flex-row gap-10  mt-10 lg:mt-0 px-8 md:px-16 lg:px-20 xl:px-3 ">
                <img loading="lazy" src="./brand/brand3.png" alt="brand2" className="w-full h-auto md:w-[550px] md:h-[300px] xl:w-[686px] xl:h-[352px]"/>
                <div className="px-8 py-10 lg:py-0">
                    <p className="text-[49px] font-bold max-w-[400px] lg:max-w-[600px]">Join supportive community of fellow ambassadors</p>
                    <p className="text-[24px] font-light max-w-[550px]">Exchange tips, collaborate on projects, and celebrate each other's successes as you work together to promote HarryPhoto and spread the joy of photography to the world.</p>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-10 mt-10 w-full">
                <img loading="lazy" src="./brand/brand4.png" alt="brand4" />
                <img loading="lazy" src="./brand/brand5.png" alt="brand5" />
                <img loading="lazy" src="./brand/brand6.png" alt="brand6" />
            </div>
        </div>
    </section>
  )
}

export default Brand