import { Link } from "react-router-dom";
import { psdsList } from "../../../public/psds";
import { useState, useEffect } from "react";
import axios from "axios";

const Psds = () => {
  const [psds, setPsds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch images from the backend when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/user/getpsds"
        );
        setPsds(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch images");
        setLoading(false);
      }
    };

    fetchImages();
  }, []);
  console.log(psds);
  return (
    <section>
      <div className="flex flex-col md:flex-row-reverse justify-center md:items-center gap-5 px-8 md:px-32 py-5 md:py-16 lg:py-20">
        <img
          loading="lazy"
          src="./psds/p1.jpeg"
          alt="heroImage"
          className="w-[190px] md:w-[291px] lg:w-[569px] h-[282px] md:h-[380px] lg:h-[629px] my-6"
        />
        <div className="max-w-[1726px]">
          <p className="font-bold text-[35px] md:text-[50px] lg:text-[60px] text-[#505153] leading-none">
            Unlock your creativity and streamline your design
          </p>
          <p className="font-light text-2xl text-[#505153] my-6 w-full mt-5 md:mt-10 leading-tight">
            Our diverse range of Photoshop templates and curated selection of
            templates is tailored to meet your needs.
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {psdsList.map((i) => (
          <Link to={`/imagedownload`} state={{ i }} key={i} className="grow">
            <img
              loading="lazy"
              src={i}
              alt={i}
              className="object-cover w-full h-[292px]"
            />
          </Link>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {psds.map((image) =>
          image.psds.map((i) => (
            <Link
              to={`/imagedownload`}
              state={{ i }}
              key={i}
              className="grow"
            >
              <img
                loading="lazy"
                src={`http://localhost:4000/uploads/images/${i.preview}`}
                alt={i}
                className="object-cover w-full h-[292px]"
              />
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default Psds;
