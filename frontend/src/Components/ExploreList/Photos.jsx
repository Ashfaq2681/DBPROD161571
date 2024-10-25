import { Link } from "react-router-dom";
import { photoList } from "../../../public/grid";

const Photos = () => {
  return (
    <section>
      <div
        className="mx-auto w-full flex flex-col items-center justify-end h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1000px]"
        style={{
          backgroundImage: `url("./photos/p1.jpeg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mb-20 text-white lg:max-w-[1000px] xl:max-w-[1408px] mx-10">
          <p className="text-[36px] md:text-[66px] font-bold">
            From breathtaking landscapes to intimate portraits
          </p>
          <p className="text-[20px] md:text-[35px] font-light">
            With enriched experiences through our vast collection of media
            spanning various genres, topics, and formats, to empower individuals
            with knowledge, inspiration, and entertainment. We believe that
            access to quality content is essential for personal growth and
            cultural enrichmen.
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-2 mt-2">
        {photoList.map((i) => (
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
    </section>
  );
};

export default Photos;
