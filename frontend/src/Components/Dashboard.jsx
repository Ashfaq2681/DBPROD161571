import { memo, useEffect, useRef, useState } from "react";
import { useAuthContext } from "../CustomHooks/useAuthContext";
import Settings from "./AccoutSettings/Settings";
import Product from "./AccoutSettings/Product";
import Article from "./AccoutSettings/Article";
import UploadImages from "./AccoutSettings/UploadImages";
import UploadForm from "./AccoutSettings/Test";

const Dashboard = () => {
  const { user, plan } = useAuthContext();

  const [current, setCurrent] = useState("1");

  return (
    <section className="flex flex-row">
      <nav className="py-10 md:pr-5 w-auto md:w-[266px] h-lvh border-r-2 border-gray-300">
        <img
          src="./header/menu-bar-admin.png"
          alt="menubar"
          className="h-4 w-4 ml-5"
        />
        <div
          className={`flex flex-row justify-start items-center gap-2 py-2 w-full mt-10 cursor-pointer ${
            current === "1" && "bg-[#E1E6EF] font-bold rounded-none md:rounded-r-lg"
          }`}
          onClick={() => setCurrent("1")}
        >
          <img
            src={
              current === "1"
                ? "./header/overview-filled.png"
                : "./header/overview.png"
            }
            alt="overviewfilled"
            className="px-5 md:pr-0"
          />
          <p className="text-[14px] font-light hidden md:inline-block">
            Overview
          </p>
        </div>
        <div
          className={`flex flex-row justify-start items-center gap-2 py-2 w-full mt-2 cursor-pointer ${
            current === "2" && "bg-[#E1E6EF] font-bold rounded-r-lg"
          }`}
          onClick={() => setCurrent("2")}
        >
          <img
            src={
              current === "2"
                ? "./header/product-filled.png"
                : "./header/product.png"
            }
            alt="overviewfilled"
            className="pl-5"
          />
          <p className="text-[14px] font-light hidden md:inline-block">
            Product
          </p>
        </div>
        <div
          className={`flex flex-row justify-start items-center gap-2 py-2 w-full mt-2 mb-16 cursor-pointer ${
            current === "3" && "bg-[#E1E6EF] font-bold rounded-r-lg"
          }`}
          onClick={() => setCurrent("3")}
        >
          <img
            src={
              current === "3"
                ? "./header/product-filled.png"
                : "./header/product.png"
            }
            alt="overviewfilled"
            className="pl-5"
          />
          <p className="text-[14px] font-light hidden md:inline-block">
            Articles
          </p>
        </div>
        <hr />
        <p className="pl-5 pt-5 font-bold">Support</p>
        <div
          className={`flex flex-row justify-start items-center gap-2 py-2 w-full mt-2 cursor-pointer ${
            current === "4" && "bg-[#E1E6EF] font-bold rounded-r-lg"
          }`}
          onClick={() => setCurrent("4")}
        >
          <img
            src="./header/settings.png"
            alt="overviewfilled"
            className="pl-5"
          />
          <p className="text-[14px] font-light hidden md:inline-block">
            Settings
          </p>
        </div>
        <div className="flex flex-row justify-start items-center gap-2 py-2  w-full mt-2 cursor-pointer">
          <img src="./header/moon.png" alt="overviewfilled" className="pl-5" />
          <p className="text-[14px] font-light hidden md:inline-block">
            Dark Mode
          </p>
        </div>
      </nav>
      {/* */}
      {current === "1" &&<UploadImages/>  }
      {current === "2" && <Product user={user} plan={plan}/>}
      {current === "3" && <Article/>}
      {current === "4" && <Settings user={user} plan={plan}/>}
    </section>
  );
};

export default memo(Dashboard);
