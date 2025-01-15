import Header from "./header";
import Footer from "./footer";
import vector from "@src/assets/icons/vector.png";
export default function Payments() {
  return (
    <div>
      <Header />
      <div>
        <div className=" md:flex lg:flex xl:flex">
          <div className="w-full  lg:w-6/12 flex justify-center">
            <div className="flex justify-center items-center p-3">
              <span className="my-12 p-3 ml-14">
                <h1 className="text-gray-500 font-bold text-3xl">
                  Welcome Your Individual Creators Journey Starts here
                </h1>
                <p className="text-gray-500 text-md mt-5">
                  Here, you can discover and connect with talented
                  independentcreators who bring a unique touch to their digital
                  content. Whether you're looking for custom designs, creative
                  assets, or original resources,{" "}
                </p>
              </span>
            </div>
          </div>
          <div className="w-full  lg:w-6/12  ">
            <span className="flex justify-center">
              <img src={vector} alt="" className="w-[75%] h-84" />
            </span>
          </div>
        </div>
      </div>
      <div className="border-2 border-solid radius-xl p-3 m-2">
        <div className="text-gray-500 p-3 ml-5">
          <span>
            <h1 className="text-2xl font-bold">Ready to join?</h1>
            <p className="text-sm my-2">
              Click Start Membership to unlock unlimited access to a world of
              high quality creative content. Dive into the collection and find
              the perfect content to elevate your projects!
            </p>
            <h2 className="text-lg font-bold">Premium Vectors</h2>
          </span>
          <span className="flex text-sm space-x-3 my-2">
            <p>Anually</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
            </label>

            <input id="toggle" type="checkbox" className="sr-only" />
            <button className="bg-white border border-indigo-800 text-indigo-800 rounded-2xl px-5 font-normal text-xs py-1 hover:bg-slate-200">
              save 30%
            </button>
          </span>
          <span className="text-sm my-2">
            <p> 450$ +Taxes (Save 135$)</p>
            <p>
              This plan will renew anyally. you will be chraged now and again at
              each renewal I have readand agree tocuratedgallery images licences
              and term of use
            </p>
          </span>
        </div>
        <div className="border-b-4 border-solid w-11/12 ml-8"></div>
        <div className="flex justify-center">
          <div className="w-10/12 m-3 ">
            <span className="text-gray-500 ">
              <h1 className="text-2xl font-bold">Payment Details</h1>
              <p className="text-sm my-2">
                Find and enjoy your royality free content in a creative way
              </p>
            </span>
            <div className="w-full">
              <div className="flex space-x-3 ">
                <input
                  type="text"
                  placeholder="Name"
                  name="first-name"
                  id="first-name"
                  className="block w-6/12 rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <input
                  type="text"
                  placeholder="Country"
                  name="first-name"
                  id="first-name"
                  className="block w-6/12 rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="w-full my-3">
                <input
                  type="text"
                  placeholder="*Address"
                  name="first-name"
                  id="first-name"
                  className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="w-full my-3">
                <input
                  type="text"
                  name="first-name"
                  placeholder="*Address"
                  id="first-name"
                  className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="flex space-x-3 ">
                <input
                  type="text"
                  placeholder="City"
                  name="first-name"
                  id="first-name"
                  className="block w-full sm:w-4/12 rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <input
                  type="text"
                  placeholder="*Postal Code"
                  name="first-name"
                  id="first-name"
                  className="block w-full sm:w-4/12 rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div>
                <div className="w-full my-3">
                  <input
                    type="number"
                    name="first-name"
                    placeholder="Card Number"
                    id="first-name"
                    className="block w-full sm:w-4/12 rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="w-full my-3">
                <input
                  type="number"
                  placeholder="Expiration Date"
                  name="first-name"
                  id="first-name"
                  className="block w-full sm:w-4/12 rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="w-full my-3 ">
                <input
                  type="text"
                  placeholder="Region"
                  name="first-name"
                  id="first-name"
                  className="block w-full sm:w-4/12 rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="mt-3">
                <button className="bg-indigo-800  text-white rounded-2xl px-7 font-normal text-sm py-1 hover:bg-indigo-600">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
