import { FaCarSide } from "react-icons/fa6";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";
import { GrShieldSecurity } from "react-icons/gr";
const Follow = () => {
  return (
    <div className=" grid lg:grid-cols-4 grid-cols-2 gap-4 ">
      <div className=" flex flex-col items-center  ">
        <FaCarSide size={50} />
        <h1 className=" lg:font-bold font-normal lg:text-lg text-sm ">
          WORLDWIDE DELIVERY
        </h1>
      </div>
      <div className=" flex flex-col items-center ">
        <SiAmazonsimpleemailservice size={50} />
        <h1 className=" lg:font-bold font-normal lg:text-lg text-sm ">
          CUSTOMER SUPPORT
        </h1>
      </div>
      <div className=" flex flex-col items-center ">
        <FiCodesandbox size={50} />
        <h1 className=" lg:font-bold font-normal lg:text-lg text-sm ">
          5 DAYS RETURN
        </h1>
      </div>
      <div className=" flex flex-col items-center ">
        <GrShieldSecurity size={50} />
        <h1 className=" lg:font-bold font-normal lg:text-lg text-sm ">
          100% SECURE PAYMENT
        </h1>
      </div>
    </div>
  );
};

export default Follow;
