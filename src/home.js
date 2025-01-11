import React from "react";
import Header from "./header";
import background from "./assets/background.jpeg";
import Footer from "./footer";
import dropdown from "./assets/dropdown.png";
import dropdown2 from "./assets/dropdown2.png";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="aspect-auto object-contain h-full"
        >
          <div className=" md:flex lg:flex xl:flex">
            <div className="w-full  lg:w-6/12 relative flex justify-center items-center p-3">
              <span className="text-white my-10">
                <h1 className="text-5xl font-bold">Pricing that suits you</h1>
                <p className="my-5 text-gray-200">
                  With enriched experiences through our vast collection of media
                  spanning various genres, topics, and formats, to empower
                  individuals with knowledge, inspiration, and entertainment. We
                  believe that access to quality content is essential for
                  personal growth and cultural enrichmen.
                </p>
              </span>
            </div>
            <div className="w-full lg:w-6/12 flex justify-center mt-6 ">
              <div className="p-3 bg-white rounded-md w-8/12  border-2 border-solid my-10">
                <div className="flex justify-center">
                  <h1 className="text-gray-600 font-bold text-2xl my-3">
                    Contact Us
                  </h1>
                </div>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-6/12 rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="last-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-6/12 rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                <div className="my-3">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                <div className="my-3">
                  <input
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                <div class="mt-2">
                  <textarea
                    type="text"
                    placeholder="Type your message here"
                    name="message"
                    id="about"
                    rows="3"
                    class="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  ></textarea>
                  <div className="mt-2 flex justify-end">
                    <button className="bg-indigo-600 border-solid text-white rounded-2xl px-5 font-normal text-sm py-1 hover:bg-indigo-700">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="flex justify-center my-10">
        <button className="bg-indigo-600 border-solid text-white rounded-l-full px-5 font-normal text-lg py-1 hover:bg-indigo-700">
          Monthly Payment
        </button>
        <button className="bg-white border border-indigo-800 text-indigo-800 rounded-r-full px-5 font-normal text-lg py-1 hover:bg-slate-200">
          Annual Payment
        </button>
      </div>
      <div className="md:flex p-3">
        <div className="flex justify-center w-full  lg:w-6/12  md:flex md:justify-end text-black ">
          <div className="border-2 border-solid rounded-lg  p-3 w-8/12 md:w-8/12 m-3 lg:w-6/12 xl:w-6/12">
            <div className="text-gray-500">
              <h1 className="font-bold text-2xl">Indiviual Creator</h1>
              <p className="text-sm">
                Buy for your self pay monthly of per year
              </p>
              <ul className="text-sm p-2 list-disc ml-2">
                <li>Acess our pixel-pperfect Svg icons</li>
                <li>Unimited projects & page views</li>
                <li>Mac/Windows App</li>
                <li>Free lifetime updates</li>
              </ul>
              <div className="border-2 border-solid rounded-lg p-3 my-2">
                <span className="text-2xl text-gray-500 font-bold flex justify-between">
                  <p>Premium Images</p>
                  <p>$300</p>
                </span>
                <span className="flex w-8/12  justify-between mt-2">
                  <input type="radio"></input>
                  <p>160 images</p>
                  <p>HD Resolution</p>
                </span>
              </div>
              <div className="border-2 border-solid rounded-lg p-3 my-2">
                <span className="text-2xl text-gray-500 font-bold flex justify-between">
                  <p>Premium Vectors</p>
                  <p>$450</p>
                </span>
                <span className="flex w-8/12 justify-between mt-2">
                  <input type="radio"></input>
                  <p>150 Vectors</p>
                  <p>Inifite Resolution</p>
                </span>
              </div>
              <div className="border-2 border-solid rounded-lg p-3 my-2">
                <span className="text-2xl text-gray-500 font-bold flex justify-between">
                  <p>Premium Icons</p>
                  <p>$99</p>
                </span>
                <span className="flex w-8/12 justify-between mt-2">
                  <input type="radio"></input>
                  <p>150 Vectors</p>
                  <p>Inifite Resolution</p>
                </span>
              </div>
              <div className="border-2 border-solid rounded-lg p-3 my-2">
                <span className="text-2xl text-gray-500 font-bold flex justify-between">
                  <p>Animation Templates</p>
                  <p>$899</p>
                </span>
                <span className="flex w-8/12 justify-between mt-2">
                  <input type="radio"></input>
                  <p>50 Templates</p>
                  <p>2k Resolution</p>
                </span>
              </div>
            </div>
            <div className="flex justify-center my-4">
              <button className="bg-indigo-600 border-solid text-white rounded-2xl px-5 font-normal text-sm py-1 hover:bg-indigo-700">
                Buy Premium Images
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full  lg:w-6/12  md:flex md:justify-start text-black">
          <div className="border-2 border-solid rounded-lg  p-3 w-8/12 md:w-8/12 m-3 lg:w-6/12 xl:w-6/12">
            <div className="text-gray-500">
              <h1 className="font-bold text-2xl">Team Collaborator</h1>
              <p className="text-sm">
                Buy for your self pay monthly of per year
              </p>
              <ul className="text-sm p-2 list-disc ml-2">
                <li>Acess our pixel-pperfect Svg icons</li>
                <li>Unimited projects & page views</li>
                <li>Mac/Windows App</li>
                <li>Free lifetime updates</li>
              </ul>
              <div className="border-2 border-solid rounded-lg p-3 my-2">
                <span className="text-2xl text-gray-500 font-bold flex justify-between">
                  <p>Premium Images</p>
                  <p>$300</p>
                </span>
                <span className="flex w-8/12  justify-between mt-2">
                  <input type="radio"></input>
                  <p>160 images</p>
                  <p>HD Resolution</p>
                </span>
              </div>
              <div className="border-2 border-solid rounded-lg p-3 my-2">
                <span className="text-2xl text-gray-500 font-bold flex justify-between">
                  <p>Premium Vectors</p>
                  <p>$450</p>
                </span>
                <span className="flex w-8/12 justify-between mt-2">
                  <input type="radio"></input>
                  <p>150 Vectors</p>
                  <p>Inifite Resolution</p>
                </span>
              </div>
              <div className="border-2 border-solid rounded-lg p-3 my-2">
                <span className="text-2xl text-gray-500 font-bold flex justify-between">
                  <p>Premium Icons</p>
                  <p>$99</p>
                </span>
                <span className="flex w-8/12 justify-between mt-2">
                  <input type="radio"></input>
                  <p>150 Vectors</p>
                  <p>Inifite Resolution</p>
                </span>
              </div>
              <div className="border-2 border-solid rounded-lg p-3 my-2">
                <span className="text-2xl text-gray-500 font-bold flex justify-between">
                  <p>Animation Templates</p>
                  <p>$899</p>
                </span>
                <span className="flex w-8/12 justify-between mt-2">
                  <input type="radio"></input>
                  <p>50 Templates</p>
                  <p>2k Resolution</p>
                </span>
              </div>
            </div>
            <div className="flex justify-center my-4">
              <button className="bg-indigo-600 border-solid text-white rounded-2xl px-5 font-normal text-sm py-1 hover:bg-indigo-700">
                Buy Premium Images
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center  my-2">
        <div className="border-2 border-solid rounded-lg w-8/12 p-3">
          <span className="text-gray-500 flex justify-between">
            <span>
              <h1 className="text-2xl font-bold">
                What types of content are included in the subscription?
              </h1>
              <p className="text-sm">
                Our subscription offers access to a wide range of digital
                content, including eBooks, audiobooks,videos, online courses,
                and more. We regularly update our library to provide diverse and
                engaging content for our subscribers.
              </p>
            </span>
            <img src={dropdown} alt="" className="h-7 mt-7" />
          </span>
        </div>
        <div className="border-2 border-solid rounded-lg w-8/12 p-3 my-2">
          <span className="text-gray-500 flex justify-between">
            <h1 className="text-2xl font-bold">
              Can I cancel my subscription at any time?
            </h1>
            <img src={dropdown2} alt="" className="h-7 mt-2" />
          </span>
        </div>
        <div className="border-2 border-solid rounded-lg w-8/12 p-3 my-2">
          <span className="text-gray-500 flex justify-between">
            <h1 className="text-2xl font-bold ">
              Are there any limitations on the number of devices I can use with
              my subscription?
            </h1>
            <img src={dropdown2} alt="" className="h-7 mt-2" />
          </span>
        </div>
        <div className="border-2 border-solid rounded-lg w-8/12 p-3 my-2">
          <span className="text-gray-500 flex justify-between">
            <h1 className="text-2xl font-bold">
              Do you offer a free trial for new subscribers?
            </h1>
            <img src={dropdown2} alt="" className="h-7 mt-2" />
          </span>
        </div>
        <div className="border-2 border-solid rounded-lg w-8/12 p-3 my-2">
          <span className="text-gray-500 flex justify-between">
            <h1 className="text-2xl font-bold">
              Are there any hidden fees or additional charges with the
              subscription?
            </h1>
            <img src={dropdown2} alt="" className="h-7 mt-2" />
          </span>
        </div>
        <div className="border-2 border-solid rounded-lg w-8/12 p-3 my-2">
          <span className="text-gray-500 flex justify-between">
            <h1 className="text-2xl font-bold">
              Can I upgrade or downgrade my subscription plan?
            </h1>
            <img src={dropdown2} alt="" className="h-7 mt-2" />
          </span>
        </div>
        <div className="border-2 border-solid rounded-lg w-8/12 p-3 my-2">
          <span className="text-gray-500 flex justify-between">
            <h1 className="text-2xl font-bold">
              Is there a student or military discount available?
            </h1>
            <img src={dropdown2} alt="" className="h-7 mt-2" />
          </span>
        </div>
        <div className="flex justify-center my-4">
          <button className="bg-indigo-600 border-solid text-white rounded-2xl px-5 font-normal text-sm py-1 hover:bg-indigo-700">
            Explore More Faqs
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
