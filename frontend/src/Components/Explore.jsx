import { explore } from ".";

const Explore = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <div id="explorediv" className="relative">
        <p className="flex flex-row justify-center items-center gap-1 text-[#505153] cursor-pointer">Explore<img id="exploreicon" src="../header/arrowdown.svg" alt="arrowdown" className="w-4 h-4"/></p> 
        <ul
          id="submenu"
          className="absolute bg-white border border-gray-300 rounded-md w-[130px] shadow-lg duration-300"
        >
          {explore.map((item) => (
            <p key={item.id}>
              <li className="w-full hover:bg-gray-200 py-2 px-4">
                {item.title}
              </li>
            </p>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Explore;
