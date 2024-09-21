import React, { useEffect } from "react";
import loadingImage from "../assets/loading.gif";
import { useAppDispatch } from "../Redux/hooks";
import { clearCart } from "../Redux/cardSlice";
const PaymentSuccess: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);
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
            Payment successfully!
          </h1>
        </div>
      )}
    </>
  );
};

export default PaymentSuccess;
