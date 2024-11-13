import { Link } from "react-router-dom";
import { FooterItems } from ".";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black px-4 sm:px-8 md:px-16 lg:px-32 py-6 md:py-12 lg:py-16 mt-20">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-4 gap-x-8 lg:gap-x-32 text-white">
          {FooterItems.map((item) => (
            <div key={item.id}>
              <p className="text-lg lg:text-xl font-semibold mb-2">{item.title}</p>
              <ul>
                {item.sub.map((subItem) => (
                  <li
                    key={subItem.title}
                    className="text-[#5E5E5E] text-sm lg:text-base mb-1 cursor-pointer max-sm:hidden hover:text-white transition"
                  >
                    <Link to={subItem.link}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-y-0 md:gap-x-10 lg:gap-x-20 mt-10">
          <img
            loading="lazy"
            src="./home/Logo white.svg"
            alt="footerLogo"
            className="w-32 md:w-36 lg:w-40"
          />
          <div className="text-gray-400 text-sm lg:text-base leading-6">
            Sign up for a free account today and start exploring our Image Content Library.<br />
            <span className="hidden md:inline">
              Whether you're working on a professional project, sprucing up your personal blog, or simply seeking visual inspiration, we've got you covered.
            </span>
          </div>
        </div>
      </div>

      <p className="bg-gray-600 text-white text-center text-xs md:text-sm py-2">
        Copyright © 2024 Harry Photo, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
