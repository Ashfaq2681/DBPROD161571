import { useState } from "react";

const TeamMembers = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const copyLink = () => {
    var copyText = document.getElementById("invitelink");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    setCopiedLink(true)
  };

  return (
    <div className="rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 w-auto">
      <div className="rounded-xl border border-[#E1E6EF] p-5 md:p-10 flex flex-col gap-10 justify-start items-start">
        <form className="w-full lg:w-[550px]">
          <p className="text-[36px] font-bold text-[#727272]] text-[#727272]">
            Add Team members
          </p>
          <div className="flex flex-row gap-5 lg:gap-10 w-full my-3">
            <input
              type="text"
              className="inputContact"
              placeholder="First Name"
            />
            <input
              type="text"
              className="inputContact"
              placeholder="Last Name"
            />
          </div>
          <input
            type="email"
            className="inputContact my-3 w-full"
            placeholder="Email"
          />
          <button className="nav-btn bg-[#3b82f6] text-white border border-[#3b82f6] float-end">
            Add
          </button>
          <p className="text-[36px] font-bold text-[#727272]] text-[#727272] mt-10">
            Or Invite Via a Link
          </p>
        </form>
        {copiedLink && (
          <p className="bg-green-300 py-2 px-5 flex flex-row items-center gap-4 rounded-xl text-[18px] w-full">
            <img
              src="./header/checkmark.png"
              className="w-7 h-7"
              alt="warning"
            />
            Link Copied
          </p>
        )}
        <div className="flex flex-row gap-10 w-full">
          <input
            id="invitelink"
            type="text"
            className="inputContact"
            placeholder="invitelink@harryphoto.com"
            value="invitelink@harryphoto.com"
            disabled={true}
          />
          <button
            onClick={copyLink}
            className="bg-[#EDEDED] rounded-md py-2 px-5"
          >
            Copy
          </button>
        </div>
      </div>
      <div className="rounded-xl border border-[#E1E6EF] p-5 md:p-10 flex flex-col gap-10 justify-start items-start">
        <p className="text-[36px] font-bold text-[#727272]] text-[#727272]">
          Team members
        </p>
      </div>
    </div>
  );
};

export default TeamMembers;
