import React from "react";
import logo from "./assets/logo.jpeg";
export default function Footer() {
  return (
    <footer>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-950">
        <div class="p-4">
          <div>
            <p className="text-2xl text-white font-normal">Resources</p>
            <span className="text-white">
              <p>Stock Photos Collection</p>
              <p>Editorials</p>
              <p>Featured Collection</p>
              <p>Premium</p>
              <p>Trending</p>
            </span>
          </div>
        </div>
        <div class="p-4">
          <div>
            <p className="text-lg text-white font-normal">Our Company</p>
            <span className="text-gray-600">
              <p>About Us</p>
              <p>Pricing</p>
              <p>Coupons</p>
              <p>Contacts</p>
            </span>
          </div>
        </div>
        <div class="p-4 ">
          <div>
            <p className="text-lg text-white font-normal">Legal</p>
            <span className="text-gray-600">
              <p>Terms of use</p>
              <p>Terms of service</p>
              <p>Privacy policy</p>
              <p>Patents</p>
              <p>Cookie policy</p>
            </span>
          </div>
        </div>
        <div class=" p-4">
          <div>
            <p className="text-lg text-white font-normal">Earn</p>
            <span className="text-gray-600">
              <p>Affiliate Partner Benifits</p>
              <p>Shop Benefits</p>
              <p>Become an Ambassador</p>
            </span>
          </div>
        </div>

        <div class="p-4 ">
          <div>
            <p className="text-lg text-white font-normal">Packages</p>
            <span className="text-gray-600">
              <p>Enterprise Package</p>
              <p>Agency Package</p>
            </span>
          </div>
        </div>
        <div class=" p-4 ">
          <div>
            <p className="text-lg text-white font-normal">Check Out More</p>
            <span className="text-gray-600">
              <p>Git Cards</p>
              <p>Coupons</p>
            </span>
          </div>
        </div>
        <div class=" p-4 ">
          <div>
            <p className="text-lg text-white font-normal">Privacy Policy</p>
            <span className="text-gray-600">
              <p>Licences</p>
              <p>Help Center</p>
            </span>
          </div>
        </div>
        <div class="p-4  text-white">
          <div>
            <p className="text-lg text-white font-normal">Languages</p>
            <span className="text-gray-600">
              <p>AR DE EN ES</p>
              <p>FR ID IT JA</p>
              <p>KD NL PL PT</p>
              <p>SV TH</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex bg-slate-950 justify-center">
        <span className="text-xl  text-gray-500 ml-4 py-3 font-bold flex items-center  justify-center space-x-1 w-4/12">
          <img
            src={logo}
            alt=""
            height={25}
            width={25}
            className="rounded-lg h-9 w-9"
          />
          <p>Harryphoto</p>
        </span>
        <span className="text-gray-500 py-4 ml-5 flex w-8/12 text-sm">
          Sign up for a free account today and start exploring our Image Content
          Library. Whether you're working on a professional project, sprucing up
          your personal blog, or simply seeking visual inspiration, we've got
          you covered
        </span>
      </div>
      <div className="bg-gray-600 text-white text-sm">
        <span className="flex ml-12 py-3">
          <p>Copyright © 2024 Harry Photo, All rights reserved.</p>
        </span>
      </div>
    </footer>
  );
}
