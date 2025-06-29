import { Link } from "react-router-dom"
import { mockupsList } from ".."
import { psdsList } from "../../../public/psds"

const Mockups = () => {
  return (
    <section className="text-[#505153] leading-tight">
        <div className='px-8 md:px-16 lg:px-20 xl:px-32'>
            <p className='text-[46px] lg:text-[88px] font-bold max-w-[1050px] my-10'>Unlock the creativity Streamline your Design</p>
            <p className='text-[24px] font-light max-w-[1050px]'>Whether you're a professional designer, a small business owner, or a social media enthusiast, our curated selection of templates is tailored to meet your needs.</p>
            <div className="flex flex-row gap-10">
                <img loading="lazy" src="./mockups/m1.jpeg" alt="hero" className=" hidden lg:inline-block h-auto lg:max-w-[568px] lg:h-[616px] mt-10"/>
                <div className="grid grid-cols-2 gap-x-40 gap-y-5 py-8 px-5 max-w-[808px] max-h-[616px] bg-[#3b82f6] rounded-lg text-white mt-10">
                    {mockupsList.map((item) => (
                        <div key={item.title} className="space-y-2 max-w-[300px]">
                            <img src={item.img} alt="icon" />
                            <p className="text-[24px] lg:text-[36px] font-bold mr-40">{item.title}</p>
                            <p className="text-[18px] lg:text-[22px] font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex flex-row flex-wrap gap-2 mt-10">
        {psdsList.map((i) => (
            <Link to={`/imagedownload`} state={{ i }} key={i} className="grow">
            <img loading="lazy" src={i} alt={i} className="object-cover w-full h-[292px]" />
            </Link>
        ))}
        </div>
    </section>
  )
}

export default Mockups