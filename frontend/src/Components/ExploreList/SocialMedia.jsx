import { Link } from "react-router-dom"
import { socialGrid } from "../../../public/socialMedia"

const SocialMedia = () => {
  return (
    <section>
        <div className="text-[#505153] px-8 md:px-32 py-5 md:py-16 lg:py-40 flex flex-col md:flex-row-reverse justify-between md:items-center md:gap-12 lg:gap-32 max-w-[1500px] mx-auto leading-tight">
          <img
            loading="lazy"
            src="./socialMedia/shero.jpeg"
            alt="heroImage"
            className="w-[190px] md:w-[300px] lg:w-[567px] h-[182px] md:h-[350px] lg:h-[661px] my-6 rounded-3xl md:rounded-lg lg:rounded-sm"
          />
          <div className="max-w-[555px]">
            <p className="text-[48px] lg:text-[88px] font-bold">For updated peoples and trends experts</p>
            <p className="text-[35px] font-light w-full mt-10">
            Offering countless opportunities for connection, communication, and creativity.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-2 py-10 mt-10 bg-[#F5F5F5]">
        {socialGrid.map((i) => (
            <Link to={`/imagedownload`} state={{ i }} key={i} className="grow">
            <img loading="lazy" src={i} alt={i} className="object-cover w-full h-[292px]" />
            </Link>
        ))}
        </div>
    </section>
  )
}

export default SocialMedia