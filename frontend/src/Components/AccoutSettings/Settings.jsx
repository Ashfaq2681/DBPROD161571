import { useState } from "react";
import { AccountSettings } from "..";
import Profile from "./Profile";
import Billing from "./Billing";
import TeamMembers from "./TeamMembers";
import Notification from "./Notification";
import Security from "./Security";

const Settings = ({ user, plan }) => {
  const [current, setCurrent] = useState("1");

  const handleActive = (value) => {
    switch (value) {
      case "1":
        setCurrent("1");
        break;
      case "2":
        setCurrent("2");
        break;
      case "3":
        setCurrent("3");
        break;
      case "4":
        setCurrent("4");
        break;
      case "5":
        setCurrent("5");
        break;
      default:
        setCurrent("1");
    }
  }
  return (
    <div className="bg-[#F9FAFB] w-full h-auto ">
      <div className="mt-5 md:mt-16 mx-5 md:mx-20">
        <p className="text-[36px] font-bold">Account Settings</p>
        <div className="flex flex-row flex-wrap gap-x-4 justify-start ">
          {AccountSettings.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className={`accountSettingButtons ${
                current === item.id ? "font-bold" : "font-regular"
              }`}
              onClick={() => handleActive(item.id)}
            >
              {item.name}
            </a>
          ))}
        </div>
        {current === "1" && <Profile user={user} plan={plan} />}
        {current === "2" && <Billing plan={plan} />}
        {current === "3" && <TeamMembers/>}
        {current === "4" && <Notification/>}
        {current === "5" && <Security/>}
      </div>
    </div>
  );
};

export default Settings;
