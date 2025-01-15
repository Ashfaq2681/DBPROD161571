import React from "react";
import logo from "./assets/logo.jpeg";
export default function Header() {
  return (
    <header className="border-solid border-b-4">
      <nav className="flex items-center justify-between my-4">
        <div className="flex items-center space-x-20 ml-24">
          <div className="font-bold text-gray-800 text-lg font-sans space-x-16">
            <span className="flex space-x-2">
              <img src={logo} alt="" height={30} width={30} />
              <p>Harryphoto</p>
            </span>
          </div>
          <div className="hidden md:flex space-x-10 text-gray-700 font-sans text-sm">
            <p>Discover</p>
            <span className="flex">
              <p>Explore</p>
              <svg
                class="-mr-1 size-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="hidden sm:flex space-x-4 mr-28">
          <button className="bg-indigo-600 border-solid text-white rounded-2xl px-5 font-normal text-xs py-1 hover:bg-indigo-700">
            Signup
          </button>
          <button className="bg-white border border-indigo-800 text-indigo-800 rounded-2xl px-5 font-normal text-xs py-1 hover:bg-slate-200">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}
