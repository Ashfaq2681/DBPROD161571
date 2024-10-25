import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
const categories = [
  "Psds",
  "Photos",
  "Mockups",
  "Social Media",
  "Pngs",
  "Vectors",
];
const Hero = () => {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState(null)
  const [searchError, setSearchError] = useState(false)
  const [searchDropDown, setSearchDropDown] = useState(false);
  const [searchPlaceholder, setSearchPlaceholder] = useState("Search Image...");
  const [filterType, setFilterType] = useState("");

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
  const handleCategoryDropDown = () => {
    setSearchDropDown(!searchDropDown);
  };

  const handleCategorySelect = (category) => {
    setFilterType(category);
    setSearchPlaceholder(
      `Search ${category.charAt(0).toUpperCase() + category.slice(1)}...`
    );
    setSearchDropDown(false);
  };
  return (
    <>
      <section className="px-8 md:px-32 py-5 md:py-16 lg:py-20">
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
            <div className="sm:my-8 my-4 border items-center border-[#4E4E55] rounded-full lg:w-[25rem] sm:w-96 flex justify-between shadow-md">
            <div className="">
              <button
                className="flex hover:opacity-80 bg-blue-700 text-sm sm:text-lg w-20 sm:w-36 justify-center items-center text-white font-normal rounded-full p-2"
                onClick={handleCategoryDropDown}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1) ||
                  "Category"}
                <RiArrowDropDownLine className="text-2xl" />
              </button>
              <div
                className={`bg-white mt-2 text-gray-500 w-20 sm:w-36 text-center absolute transition-transform duration-300 transform ${
                  searchDropDown ? "scale-y-100" : "scale-y-0"
                } origin-top z-10 border border-gray-200 shadow-lg rounded-xl overflow-hidden`}
              >
                <ul>
                  <li
                    className="p-2 bg-white hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("all")}
                  >
                    All
                  </li>
                  <li
                    className="p-2 bg-white hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("psds")}
                  >
                    Psds
                  </li>
                  <li
                    className="p-2 bg-white hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("photos")}
                  >
                    Photos
                  </li>
                  <li
                    className="p-2 bg-white hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("mockups")}
                  >
                    Mockups
                  </li>
                  <li
                    className="p-2 bg-white hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("social_media")}
                  >
                    Social Media
                  </li>
                  <li
                    className="p-2 bg-white hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("pngs")}
                  >
                    Pngs
                  </li>
                  <li
                    className="p-2 bg-white hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("vectors")}
                  >
                    Vectors
                  </li>
                </ul>
              </div>
            </div>
            <form>
              <div className="flex">
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
                placeholder={searchPlaceholder}
                className="bg-transparent outline-none pl-4 w-[80%] p-1 placeholder:text-gray-400"
              />
              {input === "" && 
              <button onClick={handleSearch} className="hover:opacity-80 text-xl text-gray-500 font-semibold rounded-full p-1">
               <GoSearch />
              </button>}
              {input !== "" && 
              <Link to={`/searchResult`} className="hover:opacity-80 text-xl text-gray-500 font-semibold rounded-full p-1" state={{ searchResult }} key={searchResult}>
                <GoSearch />
              </Link>}
              </div>
            </form>
          </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Hero);

