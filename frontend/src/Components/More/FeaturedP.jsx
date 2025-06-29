import { Link } from "react-router-dom"
import { photoList } from "../../../public/grid";

const FeaturedP = () => {
  return (
    <section className="text-[#727272] mt-10 lg:mt-0">
        <div className="px-8 md:px-16 lg:px-20 xl:px-32 py-5 md:py-16 lg:py-40 text-center leading-tight">
        <p className="text-[20px] font-light mb-2 lg:mb-10">
          Photos that take take your breath away
        </p>
        <span className="text-[70px] font-bold my-5 lg:my-10">
          Check out all the amazing Photos with{" "}
          <p className="text-[#3b82f6]">Featured Photos</p>
        </span>
        <p className="text-[24px] font-light mt-2 lg:mt-10">
          From the best photographers out there wth real passion and talent to show more
        </p>
      </div>
      <div className="gap-2 columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 w-full mx-auto mt-20">
        {photoList.map((i) => (
        <Link to={`/imagedownload`} state={{ i }}>
            <img src={i} alt={i} className="object-cover w-full py-[4px]" />
        </Link>
        ))}
        </div>
    </section>
  )
}

export default FeaturedP