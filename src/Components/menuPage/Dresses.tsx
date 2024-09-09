//Dresses
import React from "react";
import loadingImage from "../../assets/loading.gif";
import ProductsPage from "../ProductsPage";
import ClothingSidebar from "../ClothingSidebar";
const Dresses: React.FC = () => {
  const isLoading = false;
  return (
    <>
      {isLoading ? (
        <div className=" w-full h-full flex items-center justify-center mx-auto">
          <img src={loadingImage} alt="loading" />
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col items-center justify-center mx-auto mb-20 mt-[60px] ">
          {/* <h1 className=" uppercase text-xl font-bold my-5 ">Dresses</h1> */}
          <div className=" w-full h-full  ">
            <div className="text-black lg:px-10 px-2 w-full flex flex-col gap-5 ">
              <h1 className="text-2xl font-semibold text-center">Dresses</h1>
              <p className="text-base font-normal text-center">
                Discover fashion couture with our collection of women&times;s
                dresses at Couturelabs. With the standout prints and artisanal
                designs, you can express your individuality as a woman through
                fashion that is as unique as you are. Explore beautiful prints
                in a palette of exploding colours, that are here to elevate your
                style for all occasions. From maxi dresses to midi dresses, and
                shirt dresses to short dresses, find your style. Whether
                you&times;re looking for a statement dress that speaks your
                personality out loud or a casual dress for off-duty days we have
                you covered!
              </p>
            </div>
            <div className="w-full h-[2px] bg-gray-200 my-8"></div>
            <div className="flex w-full bg-white">
              {/* Sidebar */}
              <div className="max-md:hidden w-[40%] h-auto text-black p-4">
                <ClothingSidebar />
                {/* Add more content here if needed */}
              </div>
              {/* Main Content Area */}
              <div className=" w-full h-auto p-4">
                <ProductsPage />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dresses;
