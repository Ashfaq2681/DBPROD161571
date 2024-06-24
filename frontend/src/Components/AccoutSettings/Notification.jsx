import { useEffect} from "react";
import { useAuthContext } from "../../CustomHooks/useAuthContext";


const Notification = () => {
  const { notify } = useAuthContext();
  useEffect(() => {
    console.log(notify)
  }, []);
  return (
    <div className="rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 max-w-[1400px] flex-grow">
      <div className="rounded-xl border border-[#E1E6EF] p-5 md:p-10 w-full">
        <p className="text-[30px] font-bold">Notifications</p>
        <hr />
        <ul className="mt-5 ml-4" style={{listStyleType: "disc"}}>
            <li>{notify}</li>
        </ul>
      </div>
    </div>
  );
};

export default Notification;
