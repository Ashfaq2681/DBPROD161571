import { useState } from "react";
import { photoList } from "../../public/grid";
import { HeroButtons } from ".";
import { Link } from "react-router-dom";

const ImageGrid = () => {
  const psdsList=[{}]
  const mockList=[{}]
  const socialList=[{}]
  const pngList=[{}]
  const vectorList=[{}]

  const [isActive, setIsActive] = useState("2");
  const [value, setValue] = useState(photoList)

  const handleActive = (index) => {
    setIsActive(index);
    if (index == "1") {
      setValue(psdsList)
    } else if (index == "2") {
      setValue(photoList)
    } else if (index == "3") {
      setValue(mockList)
    } else if (index == "4") {
      setValue(socialList)
    } else if (index == "5") {
      setValue(pngList)
    } else if (index == "6") {
      setValue(vectorList)
    }
  };

  return (
    <>
      <div className="w-1/2 mx-auto">
        <hr className="mx-auto" />
      </div>
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-3 justify-start md:justify-center md:my-5 px-8 md:px-32 py-5 mb-10">
        {HeroButtons.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className={`heroButtons ${
              isActive === item.id
                ? "bg-[#E3A9FC] text-white border-[#E3A9FC]"
                : "text-[#505153] border-[#969696] bg-white"
            }`}
            onClick={() => handleActive(item.id)}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-2">
      {value.map((i) => (
        <Link to={`/imagedownload`} state={{ i }} key={i} className="grow">
          <img loading="lazy" src={i} alt={i} className="object-cover w-full h-[292px]" />
        </Link>
      ))}
      </div>
    </>
  );
};

export default ImageGrid;

{/* <div className="gap-1 columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 w-full mx-auto ">
{value.map((i) => (
  <Link to={`/imagedownload`} state={{ i }}>
    <img src={i} alt={i} className="object-cover w-full py-[2px]" />
  </Link>
))}
</div> */}