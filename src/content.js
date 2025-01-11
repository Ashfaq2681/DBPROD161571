import React from "react";

export default function Content() {
  return (
    <div className="m-3">
      <div className="flex justify-center py-56 border-solid border rounded-lg border-gray-300">
        <div className="text-gray-500">
          <span className="flex justify-center">
            <h1 className="text-lg  sm:text-2xl font-bold">
              Thank you for your order!
            </h1>
          </span>
          <p className="text-sm sm:text-lg">
            Your payment is sucessfull, you'll get the confirmation mail soon{" "}
          </p>
          <span className="flex justify-center mt-10">
            <p className=" text-sm sm:text-lg font-bold">Animation Templates</p>
          </span>
          <div className="flex justify-center mt-4">
            <button className="bg-indigo-800 border-solid text-white rounded-2xl px-5 font-bold text-sm py-1 hover:bg-indigo-700">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
