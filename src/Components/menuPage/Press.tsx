import React from "react";
import loadingImage from "../../assets/loading.gif";
const Press: React.FC = () => {
  const isLoading = false;
  return (
    <>
      {isLoading ? (
        <div className=" w-full h-full flex items-center justify-center mx-auto">
          <img src={loadingImage} alt="loading" />
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col items-center justify-center mx-auto mb-20 ">
          <h1 className=" uppercase text-xl font-bold my-5 ">Press</h1>
        </div>
      )}
    </>
  );
};

export default Press;
