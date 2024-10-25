const Security = () => {
  return (
    <div className="rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 max-w-[1400px] flex-grow">
      <div className="rounded-xl border border-[#E1E6EF] p-5 md:p-10 w-full">
        <p className="text-[30px] font-bold">Security</p>
        <p>
          Your account is valuable to hackers. To make your acocunt more secure,
          enable 2-step verification
        </p>
        <hr />
        <div className="flex flex-row justify-between mt-10">
          <p className="text-[30px] font-bold">Google 2FA Verification</p>
          <button className="nav-btn bg-white text-black hover:bg-[#4A16D8] hover:text-white border border-gray-500 hover:border-[#4A16D8]">
            Enable
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;
