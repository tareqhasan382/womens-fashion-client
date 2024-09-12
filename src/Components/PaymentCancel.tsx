import React from "react";
import loadingImage from "../assets/loading.gif";
const PaymentCancel: React.FC = () => {
  const isLoading = false;
  return (
    <>
      {isLoading ? (
        <div className=" w-full h-full flex items-center justify-center mx-auto">
          <img src={loadingImage} alt="loading" />
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col items-center justify-center mx-auto mb-20 ">
          <h1 className=" uppercase text-xl font-bold my-5 ">
            Payment Cancel!
          </h1>
        </div>
      )}
    </>
  );
};

export default PaymentCancel;
