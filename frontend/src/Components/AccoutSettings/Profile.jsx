const Profile = ({ user, plan }) => {
  return (
    <div className="rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 max-w-[1400px] flex-grow">
      <div className="rounded-xl border border-[#E1E6EF] p-5 md:p-10">
        <div className="flex flex-row flex-wrap gap-10 justify-center md:justify-start items-center">
          <img
            loading="lazy"
            src={user.email ? user.picture : "Nil"}
            alt="user Image"
            className="rounded-full w-32 h-32"
          />
          <p className="text-[36px] font-bold">{user.name && user.name}</p>
        </div>
        <hr />
        <div className="flex flex-col gap-10 justify-center items-start w-full">
          <p className="text-[30px] font-bold mt-5">Personal Information</p>
          <div className="grid grid-cols-2 grid-rows-2 gap-10 w-full">
            <div>
              <p>First Name</p>
              <p className="text-[20px] font-bold">
                {user.given_name ? user.given_name : "Nil"}
              </p>
            </div>
            <div>
              <p>Last Name</p>
              <p className="text-[20px] font-bold">
                {user.family_name ? user.family_name : "Nil"}
              </p>
            </div>
            <div>
              <p>Email</p>
              <p className="text-[20px] font-bold">
                {user.email ? user.email : "Nil"}
              </p>
            </div>
            <div>
              <p>Phone Number</p>
              <p className="text-[20px] font-bold">
                {user.phone ? user.phone : "Nil"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-[#E1E6EF] p-5 md:p-10 flex flex-col gap-10 justify-start items-start flex-grow">
        <p className="text-[30px] font-bold">Plan Subscribed</p>
        <hr />
        <div className="grid grid-cols-2 grid-rows-2 gap-10 w-full">
          <div>
            <p>Plan Name</p>
            <p className="text-[20px] font-bold">{plan ? plan.plan : "None"}</p>
          </div>
          <div>
            <p>Price</p>
            <p className="text-[20px] font-bold">{plan ? plan.price : "0"} $</p>
          </div>
          <div>
            <p>Quantity</p>
            <p className="text-[20px] font-bold">
              {plan ? plan.quantity : "0"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
