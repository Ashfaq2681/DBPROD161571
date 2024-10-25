import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import ChatBot from "react-chatbotify";

const CustomChatBot = () => {
    const [open, setOpen] = useState(false)
    const [searchResult, setSearchResult] = useState([])

    const fetchImages = (value) => {
      fetch("http://localhost:4000/api/user/getimage")
        .then((response) => response.json())
        .then((json) => {
          const result = json.data;
          console.log(result);
          const resultArray = result.filter((data) => {
            return (
              value &&
              data.image &&
              data.image &&
              data.image.toLowerCase().includes(value)
            );
          });
          setSearchResult(resultArray)
          console.log(searchResult)
        });
    };
  
  const formStyle = {
      marginTop: 10,
      marginLeft: 20,
      border: "1px solid #491d8d",
      padding: 10,
      borderRadius: 5,
      maxWidth: 300,
  }
  
  const customTheme = {
      embedded: true,
      primaryColor: "#FF00FF",
      secondaryColor: "#4A16D8"
  }
  
  const header = {
      title: (
          <h3>ChatBot</h3>
      ),
      closeChatIcon: "./header/close.svg"
  }
  
  const helpOptions = ["Images", "Account Settings", "Pricing", "About us", "Contact Info"];
  // const image_type = ["Dark", "Light", "Street", "girl", "woman", "kids", "man", "night", "cosmos", "stars", "desert", "beautiful"]
  const flow = {
      start: {
          message: "Hello, I am Harry 👋!",
          transition: {duration: 1000},
          path: "show_options"
      },
      show_options: {
          message: "What can i help you with today 😊?",
          options: helpOptions,
          path: "process_options"
      },
      prompt_again: {
          message: "Do you need any other help?",
          options: helpOptions,
          path: "process_options"
      },
      unknown_input: {
          message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on " +
              "the Github option and open an issue there or visit our discord.",
          options: helpOptions,
          path: "process_options"
      },
      process_options: {
          transition: {duration: 0},
          chatDisabled: true,
          path: async (params) => {
            let link = "";
            switch (params.userInput) {
            case "Images":
                return "image_type_prompt"
            case "Account Settings":
                link = "/login";
                break;
            case "Pricing":
                link = "/pricing";
                break;
            case "About us":
                link = "/about";
                break;
            case "Contact Info":
                link = "/contact";
                break;
            default:
                return "unknown_input";
            }
            await params.injectMessage("Sit tight! I'll send you right there!");
            setTimeout(() => {
                window.open(link, "_self");
            }, 500)
            return "repeat"
        },
      },
      image_type_prompt: {
          message: "What kind of images you want?",
          path: async (params) => {
              fetchImages(params.userInput)
              return ( searchResult) ? "end" : "image_notfound_prompt" 
          }
      },
      end: {
          message: `${searchResult.length} Images found`,
          render: (
              <div className="mt-5">
                <Link to={`/searchResult`} className="px-4 py-3 rounded-full text-[#4A16D8] hover:text-white hover:bg-[#4A16D8] border border-[#4A16D8] ml-5 mt-[10px] text-[16px]" state={{ searchResult }}>
                  Check Images
              </Link>
              </div>
          ),
          path: "prompt_again"
      },
      image_notfound_prompt : {
          message: "Images not found",
          path: "repeat"
      },
      repeat: {
          transition: {duration: 3000},
          path: "prompt_again"
      },
  }
	
  return (
    <>
        <img src="./header/support.png" alt="support" className={`w-28 h-28 p-2 rounded-full cursor-pointer ${open ? "hidden" : "block"}`} onClick={() => setOpen(!open)}/>
        <div className={`${open ? "block" : "hidden"} ${"focus:" ? "block" : "hidden"}`}>
            <ChatBot options={{theme: customTheme, chatHistory: {storageKey: "example_basic_form"}, header: header}} flow={flow}/>
        </div>
    </>
  )
}

export default CustomChatBot