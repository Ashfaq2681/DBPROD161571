import { useState } from "react";
import { usePlan } from "../../CustomHooks/usePlan";

const EnterpriseFree = {
  plan: "Enterprise Free",
  price: 0,
  quantity: "1",
};

const EnterprisePro = {
  plan: "Enterprise Pro",
  price: 49,
  quantity: "1",
};

const FullEnterprise = {
  plan: "Full Enterprise",
  price: 490,
  quantity: "1",
};

const AgencyFree = {
  plan: "Agency Free",
  price: 0,
  quantity: "1",
};

const AgencyPro = {
  plan: "Agency Pro",
  price: 49,
  quantity: "1",
};

const FullAgency = {
  plan: "Full Agency",
  price: 490,
  quantity: "1",
};

const Billing = ({ plan }) => {
  const { checkSubscription } = usePlan();
  const [packages, setPackages] = useState("EnterprisePro");
  const [packageDetail, setPackageDetail] = useState(EnterprisePro);

  const onOptionChange = (e) => {
    setPackages(e.target.value);
    console.log(e.target.value)
    switch (e.target.value) {
      case "EnterpriseBasic":
        setPackageDetail(EnterpriseFree);
        break;
      case "EnterprisePro":
        setPackageDetail(EnterprisePro);
        break;
      case "EnterpriseFull":
        setPackageDetail(FullEnterprise);
        break;
      case "AgencyBasic":
        setPackageDetail(AgencyFree);
        break;
      case "AgencyPro":
        setPackageDetail(AgencyPro);
        break;
      case "AgencyFull":
        setPackageDetail(FullAgency);
        break;
      default:
        setPackageDetail(EnterprisePro);
        break
    }
    console.log(packageDetail)
  };

  return (
    <div className="rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 max-w-[1500px] flex-grow">
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
      <div className="rounded-xl border border-[#E1E6EF] p-5 md:p-10 w-full lg:w-auto">
        <div className="flex flex-col gap-10 justify-center items-start w-full">
          <p className="text-[30px] font-bold">Upgrade plan</p>
          <hr />
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="flex flex-col gap-5 w-full font-bold">
              <p className="text-[30px] font-bold w-full lg:w-[300px]">Enterprise Packages</p>
              <div>
                <input
                  type="radio"
                  name="enterprise"
                  value="EnterpriseBasic"
                  id="enterprisebasic"
                  onChange={onOptionChange}
                  checked={packages === "EnterpriseBasic"}
                  className=" cursor-pointer"
                />
                <label htmlFor="enterprisebasic" className="ml-5 cursor-pointer text-[18px]">
                  Basic&nbsp;&nbsp;&nbsp;0$
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="enterprise"
                  value="EnterprisePro"
                  id="enterprisepro"
                  onChange={onOptionChange}
                  checked={packages === "EnterprisePro"}
                  className=" cursor-pointer"
                />
                <label htmlFor="enterprisepro" className="ml-5 cursor-pointer text-[18px]">
                  Pro&nbsp;&nbsp;&nbsp;49$
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="enterprise"
                  value="EnterpriseFull"
                  id="enterprisefull"
                  onChange={onOptionChange}
                  checked={packages === "EnterpriseFull"}
                  className=" cursor-pointer"
                />
                <label htmlFor="enterprisefull" className="ml-5 cursor-pointer text-[18px]">
                  Full&nbsp;&nbsp;&nbsp;449$
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full font-bold">
              <p className="text-[30px] font-bold">Agency Packages</p>
              <div>
                <input
                  type="radio"
                  name="agency"
                  value="AgencyBasic"
                  id="agencybasic"
                  onChange={onOptionChange}
                  checked={packages === "AgencyBasic"}
                  className=" cursor-pointer"
                />
                <label htmlFor="agencybasic" className="ml-5 cursor-pointer text-[18px]">
                  Basic&nbsp;&nbsp;&nbsp;0$
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="agency"
                  value="AgencyPro"
                  id="agencypro"
                  onChange={onOptionChange}
                  checked={packages === "AgencyPro"}
                  className=" cursor-pointer"
                />
                <label htmlFor="agencypro" className="ml-5 cursor-pointer text-[18px]">
                  Pro&nbsp;&nbsp;&nbsp;49$
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="agency"
                  value="AgencyFull"
                  id="agencyfull"
                  onChange={onOptionChange}
                  checked={packages === "AgencyFull"}
                  className=" cursor-pointer"
                />
                <label htmlFor="agencyfull" className="ml-5 cursor-pointer text-[18px]">
                  Full&nbsp;&nbsp;&nbsp;449$
                </label>
              </div>
            </div>
          </div>
          <button
            onClick={() => checkSubscription(packageDetail)}
            className="px-8 rounded-full bg-white text-black hover:bg-[#3b82f6] hover:text-white border border-gray-500 duration-300 hover:border-[#3b82f6] mx-auto py-2 w-full mb-3"
          >
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
