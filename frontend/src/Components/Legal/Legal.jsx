import { useState } from "react";
import TermsofUse from "./TermsofUse";
import TermsofService from "./TermsofService";
import PrivacyPolicy from "./PrivacyPolicy";
import Patents from "./Patents";
import CookiePolicy from "./CookiePolicy";

const Legal = () => {
  const [isActive, setIsActive] = useState("1");


  return (
    <section className="bg-[#F5F5F5] text-[#505153] mt-10">
      <nav className="flex flex-row flex-wrap justify-center md:justify-start text-[24px] font-bold gap-20 bg-white p-5 lg:px-36">
        <p onClick={() => setIsActive("1")} className={`cursor-pointer decoration-[#4A16D8] decoration-4 underline-offset-8 ${isActive === "1" ? "underline" : "no-underline"}`}>Terms of Use</p>
        <p onClick={() => setIsActive("2")} className={`cursor-pointer decoration-[#4A16D8] decoration-4 underline-offset-8 ${isActive === "2" ? "underline" : "no-underline"}`}>Terms of Service</p>
        <p onClick={() => setIsActive("3")} className={`cursor-pointer decoration-[#4A16D8] decoration-4 underline-offset-8 ${isActive === "3" ? "underline" : "no-underline"}`}>Privacy Policy</p>
        <p onClick={() => setIsActive("4")} className={`cursor-pointer decoration-[#4A16D8] decoration-4 underline-offset-8 ${isActive === "4" ? "underline" : "no-underline"}`}>Patents</p>
        <p onClick={() => setIsActive("5")} className={`cursor-pointer decoration-[#4A16D8] decoration-4 underline-offset-8 ${isActive === "5" ? "underline" : "no-underline"}`}>Cookie Policy</p>
      </nav>
      {isActive === "1" && <TermsofUse />}
      {isActive === "2" && <TermsofService />}
      {isActive === "3" && <PrivacyPolicy />}
      {isActive === "4" && <Patents />}
      {isActive === "5" && <CookiePolicy />}
    </section>
  );
};

export default Legal;
