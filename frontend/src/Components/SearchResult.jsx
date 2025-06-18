import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { baseUploadsUrl } from "../constants/strings";

const SearchResult = () => {
  const [imagesArray, setImagesArray] = useState([]);

  const images = useLocation();

  useEffect(() => {
    if (images) setImagesArray(images.state.searchResult);

    return undefined
  }, []);

  console.log(imagesArray);

  return (
    <section className="px-8 md:px-32 py-5 md:py-16 lg:py-40">
      <p className="heading">Search Results</p>
      <p className="subHeading">Search has found {imagesArray.length} results</p>
      <div className="gap-5 space-y-5 columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 w-full mx-auto">
        {images.state.searchResult == null
          ? ""
          : images.state.searchResult.map((data) => {
              return (
                <div className="grow" key={data.image}>
                  <img
                    loading="lazy"
                    src={`${baseUploadsUrl}/images/` + data.image}
                    key={data._id}
                    alt="image"
                    className="object-cover w-full h-[292px]"
                  />
                </div>
              );
            })}
      </div>
    </section>
  );
};

export default SearchResult;
