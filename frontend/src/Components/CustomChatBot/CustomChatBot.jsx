import { useEffect, useState } from "react";
import { chatResponse } from ".";

const CustomChatBot = () => {
    const [open, setOpen] = useState(false)
    // const [botPrompt, setBotPrompt] = useState("Hello There! How can i help you today?")
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages((prevMessages) => [...prevMessages, { text: 'Hello There! How can i help you today?', user: false }]);
    
      return () => {
        null
      }
    }, [])
    

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!input.trim()) return;
      if (e.key == "Enter") {
        const userMessage = { text: input, user: true };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        const newAiMessage = { text: chatResponse(input), user: false };
        setMessages((prevMessages) => [...prevMessages, newAiMessage]);
        setInput('');
      } else {
        const userMessage = { text: input, user: true };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        const newAiMessage = { text: chatResponse(input), user: false };
        setMessages((prevMessages) => [...prevMessages, newAiMessage]);
        setInput('');
      }
     
    };

  return (
    <>
        <img src="./header/support.png" alt="support" className={`w-28 h-28 p-2 rounded-full cursor-pointer ${open ? "hidden" : "block"}`} onClick={() => setOpen(!open)}/>
        <div className={`${open ? "block" : "hidden"} ${"focus:" ? "block" : "hidden"} w-[500px]`}>
            <div className="bg-[#4A16D8] flex flex-row justify-between items-center p-6 rounded-t-2xl ">
                <div className="flex flex-row items-center gap-5">
                  <img src="./chatbot/bot_white.png" alt="bot_white" className="w-12 h-15"/>
                  <p className="text-white font-bold text-[20px]">HarryPhoto Chat</p>
                </div>
                <div>
                  <img src="./chatbot/close_white.png" alt="close" className="w-6 h-6 cursor-pointer" onClick={() => setOpen(!open)}/>
                </div>
            </div>
            <div className="h-[500px] border border-x-[#4A16D8] border-b-white -mt-1 bg-white flex flex-col ">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`text-[18px] m-5 p-5 rounded-2xl overflow-hidden ${message.user ? 'float-left bg-[#4A16D8] text-white  rounded-tr-none ml-40' : 'float-right bg-[#F5F5F5] text-[#505153] rounded-tl-none mr-40'}`}
              >
                {message.text}
              </div>
            ))}
            </div>
            <div className=" border border-x-[#4A16D8] border-t-white border-b-[#4A16D8] rounded-b-2xl bg-white">
              <form className="m-5 border border-gray-400 rounded-2xl" onSubmit={handleSubmit}>
              <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              name="contactMessage"
              id="contactMessage"
              className="rounded-md p-2 lg:py-3 lg:px-5 focus:outline-none my-3 w-full"
              placeholder="Type Your Message Here"
              rows={1}
              />
              <div className="flex flex-row justify-between items-center mb-5 mx-5">
                <div className="flex flex-row gap-5 items-center">
                  <img src="./chatbot/mic.png" alt="mic" className="w-6 h-8 cursor-pointer"/>
                  <img src="./chatbot/file.png" alt="file" className="w-8 h-8 cursor-pointer"/>
                  <img src="./chatbot/happy_emoji.png" alt="emoji" className="w-8 h-8 cursor-pointer"/>
                </div>
                <button type="submit"><img src="./chatbot/send.png" alt="send" className="w-10 h-8 cursor-pointer"/></button>
              </div>
              </form>
            </div>
        </div>
    </>
  )
}

export default CustomChatBot