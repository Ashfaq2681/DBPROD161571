import { useEffect, useState } from "react";
import { HeroButtons } from ".";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUploadsUrl, baseUrl } from "../constants/strings";
//  blogCardItems

const Blog = () => {
  const [isActive, setIsActive] = useState(null);
  const [blogCardItems, setBlogCardItems] = useState([]);

  // Fetch all article details from the server
  useEffect(() => {
    const getArticles = async () => {
      try {
        const result = await axios.get(
          `${baseUrl}/user/getarticles`
        );
        if (result && result.data.data) {
          // Update the blogCardItems state with the article details
          setBlogCardItems(result.data.data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    getArticles();
  }, []);

  useEffect(() => {
    const getImage = async () => {
      const result = await axios.get(`${baseUrl}/user/getimage`);
      if (result) {
        const result_images = result.data.data;
        for (let i = 0; i < result_images.length; i++) {
          blogCardItems[i].img = result_images[i + 20].image;
          console.log(blogCardItems[i].img);
        }
      }
    };
    getImage();
  }, []);

  const handleActive = (index) => {
    setIsActive(index);
  };


  //
  return (
    <section className="bg-[#F9FAFB] lg:px-20 my-5 md:my-10">
      {/* <div className="">
        {BlogCardItems.map((item,key)=>(
          <div key={key} className="">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <img
         src={`${baseUploadsUrl}/articleImages/${item.image}`}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
          </div>
        ))}
      </div> */}
      <form className="hidden md:flex justify-center items-center relative w-[724px] lg:w-[952px] mx-auto my-5 lg:mt-0">
        <input
          type="text"
          name="image"
          placeholder="Search image..."
          className="rounded-full border border-[#5E5E5E] pl-10 py-3 w-full focus:outline-none"
        />
        <button className="px-8 rounded-full bg-[#4A16D8] text-white absolute right-0 mr-1 py-2">
          Search
        </button>
      </form>
      <div className="hidden justify-center gap-10 underline decoration-[#5E5E5E] underline-offset-4 lg:flex mb-5">
        {HeroButtons.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className={`text-[20px] ${
              isActive === item.id ? "text-[#E3A9FC]" : "text-[#5E5E5E]"
            } hover:text-black`}
            onClick={() => handleActive(item.id)}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-7 lg:justify-start">
        {blogCardItems.slice(0,1).map((i) => (
          <div key={i.id} className="lg:w-[670px] bg-white">
            <img
              loading="lazy"
              src={`${baseUploadsUrl}/articleImages/${i.descriptionImage}`}
              alt={i}
              className="w-full object-cover h-[240px] md:h-[350px]"
            />
            <p className="text-[25px] px-3 my-4">{i.mainTitle}</p>
            <Link
              to={`/blogsinglepage`}
              state={{ i }}
              className="underline text-[20px] px-3 underline-offset-4 decoration-[#5E5E5E]"
            >
              Read More
            </Link>
          </div>
        ))}
        {blogCardItems.slice(1).map((i) => (
          <div
            key={i.id}
            className="w-full md:w-80 bg-white pb-10 md:pb-12 h-auto md:h-[500px] flex-none"
          >
            <img
              loading="lazy"
              src={`${baseUploadsUrl}/articleImages/${i.descriptionImage}`}
              alt={i}
              className="w-full object-cover h-[240px] md:h-[282px]"
            />
            <p className="text-[25px] px-3 my-4">{i.mainTitle}</p>
            <Link
              to={`/blogsinglepage`}
              state={{ i }}
              className="underline text-[20px] px-3 underline-offset-4 decoration-[#5E5E5E]"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-7 lg:justify-start lg:mt-32">
        <div className="flex flex-col gap-3">
          <p className="text-[36px] font-bold text-[#505153]">Category B</p>
          <p className="text-[18px] font-light mr-20 text-[#505153]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            placeat obcaecati, recusandae commodi laudantium modi exercitationem
            ad est quisquam vero asperiores mollitia sequi
          </p>
        </div>
        {blogCardItems.slice(6).map((i) => (
          <div
            key={i.id}
            className="w-full md:w-80 bg-white pb-10 md:pb-12 h-auto md:h-[500px] flex-none"
          >
            <img
              loading="lazy"
              src={`${baseUploadsUrl}/articleImages/${i.descriptionImage}`}
              alt={i}
              className="w-full object-cover h-[240px] md:h-[282px]"
            />
            <p className="text-[25px] px-3 my-4">{i.mainTitle}</p>
            <Link
              to={`/blogsinglepage`}
              state={{ i }}
              className="underline text-[20px] px-3 underline-offset-4 decoration-[#5E5E5E]"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
