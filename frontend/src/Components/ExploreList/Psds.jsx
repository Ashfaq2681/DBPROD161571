import { Link } from "react-router-dom"
import { psdsList } from "../../../public/psds"

const Psds = () => {
  return (
    <section>
        <div className="flex flex-col md:flex-row-reverse justify-center md:items-center gap-5 px-8 md:px-32 py-5 md:py-16 lg:py-40">
        <img
          loading="lazy"
          src="./psds/p1.jpeg"
          alt="heroImage"
          className="w-[190px] md:w-[291px] lg:w-[569px] h-[282px] md:h-[380px] lg:h-[629px] my-6"
        />
        <div className="max-w-[1726px]">
          <p className="font-bold text-[40px] md:text-[60px] lg:text-[88px] text-[#505153] leading-none">
            Unlock your creativity and streamline your design
          </p>
          <p className="font-light text-[35px] text-[#505153] my-6 w-full mt-5 md:mt-10 leading-tight">
            Our diverse range of Photoshop templates and curated selection of templates is tailored to meet your needs.
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-2">
      {psdsList.map((i) => (
        <Link to={`/imagedownload`} state={{ i }} key={i} className="grow">
          <img loading="lazy" src={i} alt={i} className="object-cover w-full h-[292px]" />
        </Link>
      ))}
      </div>
    </section>
  )
}

export default Psds