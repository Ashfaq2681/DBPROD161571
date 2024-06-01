import { Link } from "react-router-dom";
import { FooterItems } from ".";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black px-5 md:px-32 py-5 md:py-16 bottom-0 mt-40">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-8 md:grid-rows-2 gap-x-32 gap-y-0 md:gap-y-10">
          {FooterItems.map((item) => (
            <div key={item.id}>
              <p className="text-white text-[16px] md:text-[18px] font-bold">
                {item.title}
              </p>
              <ul>
                {item.sub.map((item) => (
                  <Link key={item.title} to={item.link}>
                    <li
                    className="text-[#5E5E5E] hidden md:flex flex-col cursor-pointer"
                  >
                    {item.title}
                  </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-20 md:mr-20 lg:mr-48">
          <img
            loading="lazy"
            src="./home/Logo white.svg"
            alt="footerLogo"
            className="w-[140px] my-5 md:mt-0"
          />
          <span className="text-[#5E5E5E] text-[17px]">
            Sign up for a free account today and start exploring our Image
            Content Library.
            <p className="hidden md:inline-block">
              Whether you're working on a professional project, sprucing up your
              personal blog, or simply seeking visual inspiration, we've got you
              covered
            </p>
          </span>
        </div>
      </div>
      <p className="bg-[#5E5E5E] text-white text-[18px] text-center py-2">
        Copyright © 2024 Harry Photo, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
