import BlogCard from "./BlogCard";
import { useLocation } from "react-router-dom";
// import { blogCardItems } from ".";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUploadsUrl, baseUrl } from "../constants/strings";

const BlogSinglePage = () => {
  const bloglocation = useLocation();
  const [blogCardItems, setBlogCardItems] = useState([]);
  const blogItem = bloglocation.state.i;

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

  const relatedArticles = blogCardItems.filter(
    (item) => item._id !== blogItem._id // Replace `id` with the correct unique property
  );
 

  return (
    <section className="bg-[#F9FAFB] p-5 lg:px-20 mt-5 lg:mt-0 text-[#505153]">
      <p className="text-[36px] md:text-[40px] font-bold w-full lg:w-[55%] my-2 md:my-10 leading-none">
        {blogItem.mainTitle}
      </p>
      <p className="text-[20px] font-light w-full lg:w-[55%] my-2 md:my-10 pt-3 md:pt-10 leading-tight">
        {blogItem.mainDescription}
      </p>
      <div className="flex flex-row justify-center items-center">
        <img
          loading="lazy"
          src={`${baseUploadsUrl}/articleImages/${blogItem.descriptionImage}`}
          alt="image35"
          className="min-w-[362px] max-w-[1350px] min-h-[388px] max-h-[550px] object-cover bg-white"
        />
      </div>
      <p className="hidden lg:inline-block text-[40px] font-bold w-[55%] leading-none mt-10">
        {blogItem.heading1}
      </p>
      <p className="hidden lg:inline-block text-[20px] font-light w-[55%] my-10 leading-tight">
        {blogItem.description1}
      </p>
      {/* <div className="flex flex-row flex-wrap justify-start gap-7 lg:gap-20 xl:gap-40 text-[20px]  font-bold my-10 lg:my-20 leading-none">
        <p>Headline A</p>
        <p>Headline B</p>
        <p>Headline C</p>
        <p>Headline D</p>
      </div> */}
      <p className="text-[28px] md:text-[40px] lg:text-[45px] font-bold my-2 pt-8">
        {/* Watercolor Wonders */}
        {blogItem.heading2}
      </p>
      <div className="flex flex-col md:flex-row justify-start items-center gap-5 lg:gap-10">
        <p className="text-[18px] font-light w-full lg:max-w-[825px] leading-none">
          {blogItem.description2_1}
          <br />
          <br />
          {blogItem.description2_2}
        </p>
        {blogItem.description1Image && <img
          // src="./blogSinglePage/image 27.png"
          src={`${baseUploadsUrl}/articleImages/${blogItem.description1Image}`}
          alt="image1"
          className="w-[366px] lg:w-[500px] xl:w-[600px] h-[552px] lg:h-[450px] xl:h-[400px] object-cover"
        />}
        
      </div>
      <div className="flex flex-col lg:flex-row gap-10 my-40">
        <BlogCard
          src={blogItem.description3_1Image? (`${baseUploadsUrl}/articleImages/${blogItem.description3_2Image}`):""}
          // src="./blogSinglePage/image 27.png"
          number="1"
          title={blogItem.heading3_1}
          subtitle={blogItem.description3_1}
        />

        <BlogCard
          // src="./blogSinglePage/image 33.png"
          src={blogItem.description3_1Image? (`${baseUploadsUrl}/articleImages/${blogItem.description3_2Image}`):""}
          number="2"
          title={blogItem.heading3_2}
          subtitle={blogItem.description3_2}
        />

        <BlogCard
          // src="./blogSinglePage/image 34.png"
          src={blogItem.description3_1Image? (`${baseUploadsUrl}/articleImages/${blogItem.description3_2Image}`):""}
          number="3"
          title={blogItem.heading3_3}
          subtitle={blogItem.description3_3}
        />
      </div>
      <p className="text-[36px] font-bold mt-28 max-w-[1456px]">Conclusion</p>
      <p className="text-[20px] font-light leading-tight mt-5 mb-40 max-w-[1456px]">
        {blogItem.conclusion}
      </p>
      <div className="flex flex-col flex-wrap gap-7 lg:justify-start  lg:mt-32">
        <div className="flex flex-col gap-3">
          <p className="text-[40px] font-bold text-[#505153]">
            Related Articles
          </p>
          <p className="text-[20px] font-light mr-20 text-[#505153] w-[75%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been. It has survived not only five
            centuries.
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-7">
          {relatedArticles.map((i) => (
            <div
              key={i.id}
              className="w-full md:w-80 bg-white h-auto md:h-[400px] flex-none"
            >
              <img
                loading="lazy"
                src={`${baseUploadsUrl}/articleImages/${i.descriptionImage}`}
                alt={i}
                className="w-full object-cover h-[200px] md:h-[242px]"
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
      </div>
    </section>
  );
};

export default BlogSinglePage;
