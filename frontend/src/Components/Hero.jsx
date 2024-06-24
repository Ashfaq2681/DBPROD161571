import { memo, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState(null)
  const [searchError, setSearchError] = useState(false)

  const fetchData = (value) => {
    fetch("http://localhost:4000/api/user/getimage")
      .then((response) => response.json())
      .then((json) => {
        const result = json.data;
        console.log(result);
        const resultArray = result.filter((data) => {
          return (
            value &&
            data.image &&
            data.image &&
            data.image.toLowerCase().includes(value)
          );
        });
        setSearchResult(resultArray)
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    setSearchError(false)
  };

  const handleSearch = () => {
    if (input === "") setSearchError(true)
  }

  return (
    <>
      <section className="px-8 md:px-32 py-5 md:py-16 lg:py-40">
        <div className="flex flex-col md:flex-row-reverse justify-between md:items-center md:gap-12 lg:gap-28 max-w-[1400px] mx-auto">
          <img
            loading="lazy"
            src="./home/heroimagesmall.webp"
            alt="heroImage"
            className="w-[190px] md:w-[400px] lg:w-[446px] h-[182px] md:h-[300px] lg:h-[428px] my-6 rounded-3xl md:rounded-lg lg:rounded-sm"
          />
          <div className="max-w-[525px]">
            <p className="heading">Your Masterpiece Starts Here</p>
            <p className="subHeading w-full">
              Elevate your projects with stunning visuals and captivating
              sounds. From pixels to polygons, find the perfect asset to bring
              your ideas to life. Fuel your imagination with high-quality
              digital resources.
            </p>
            <form className="hidden md:flex flex-col relative">
              <div className="relative w-full">
              {searchError && (
                <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5  rounded-xl text-[20px]">
                  <img
                    src="./header/warning.png"
                    className="w-10 h-10"
                    alt="warning"
                  />
                  Search bar is Empty, please type something to search
                </p>
              )}
              <input
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                type="text"
                name="image"
                placeholder="Search image..."
                className="text-[20px] rounded-full border-2 border-gray-300 px-5 py-2 w-full focus:outline-none"
              />
              {input === "" && 
              <button onClick={handleSearch} className="px-8  rounded-full bg-[#4A16D8] text-white absolute right-0 mr-1.5 mt-[6px] text-[24px]">
                Search
              </button>}
              {input !== "" && 
              <Link to={`/searchResult`} className="px-8  rounded-full bg-[#4A16D8] text-white absolute right-0 mr-1.5 mt-[6px] text-[24px]" state={{ searchResult }} key={searchResult}>
                Search
              </Link>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Hero);

