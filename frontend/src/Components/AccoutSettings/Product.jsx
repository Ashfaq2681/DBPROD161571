const Product = ({ plan, user }) => {
  return (
    <div className="bg-[#F9FAFB] w-full h-auto ">
      <div className="mt-5 md:mt-16 mx-5 md:mx-20">
        <p className="text-[36px] font-bold">Product Details</p>
        <div className="rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 max-w-[1400px] flex-grow mt-10">
          <div className="rounded-xl border border-[#E1E6EF] p-5 md:p-10 w-full">
            <p className="text-[30px] font-bold">Product</p>
            <hr />
            <div className="grid grid-cols-2 grid-rows-2 gap-10 w-full mt-10">
              <div>
                <p>Name</p>
                <p className="text-[20px] font-bold">Harry Photo</p>
              </div>
              <div>
                <p>Owner</p>
                <p className="text-[20px] font-bold">
                  {user.name && user.name}
                </p>
              </div>
              <div>
                <p>Images Owned</p>
                <p className="text-[20px] font-bold">
                  0
                </p>
              </div>
            </div>
            <hr/>
            <hr/>
            <p className="text-[30px] font-bold mt-10">Plan Subscribed</p>
            <hr />
            <div className="grid grid-cols-2 grid-rows-2 gap-10 w-full mt-10">
              <div>
                <p>Plan Name</p>
                <p className="text-[20px] font-bold">
                  {plan ? plan.plan : "None"}
                </p>
              </div>
              <div>
                <p>Price</p>
                <p className="text-[20px] font-bold">
                  {plan ? plan.price : "0"} $
                </p>
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
      </div>
    </div>
  );
};

export default Product;
