import { Link } from "react-router-dom"
import { vectorGrid } from "../../../public/vectors"

const Vectors = () => {
  return (
    <section className="text-[#505153] mt-10">
        <div className="flex flex-col justify-center items-center px-8 md:px-16 lg:px-20 xl:px-32 py-5 md:py-16 lg:py-40 text-center leading-tight">
            <p className="text-[56px] lg:text-[88px] font-bold max-w-[850px]">Vibrant chracters and Detailed landscapes</p>
            <p className="text-[24px] font-light max-w-[1300px] mt-0 md:mt-8 lg:mt-16">Our vector illustrations offer endless possibilities for your projects. To sleek icons and stylish patterns, our collection has something for everyone..</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center my-20 gap-7">
                <img loading="lazy" src="./vectors/v1.jpeg" alt="shop hero" className="w-[250px] lg:w-[328px] h-[270px] lg:h-[368px] object-cover"/>
                <img loading="lazy" src="./vectors/v2.jpeg" alt="shop hero" className="w-[250px] lg:w-[328px] h-[270px] lg:h-[368px] object-cover"/>
                <img loading="lazy" src="./vectors/v3.jpeg" alt="shop hero" className="w-[250px] lg:w-[328px] h-[270px] lg:h-[368px] object-cover"/>
                <img loading="lazy" src="./vectors/v4.jpeg" alt="shop hero" className="w-[250px] lg:w-[328px] h-[270px] lg:h-[368px] object-cover"/>
            </div>
        </div>
        <div className="flex flex-row flex-wrap gap-2 pb-10 mt-20 bg-[#F5F5F5]">
        {vectorGrid.map((i) => (
            <Link to={`/imagedownload`} state={{ i }} key={i} className="grow">
            <img loading="lazy" src={i} alt={i} className="object-cover w-full h-[292px]" />
            </Link>
        ))}
        </div>
    </section>
  )
}

export default Vectors