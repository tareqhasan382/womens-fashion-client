import ClothingSidebar from "./ClothingSidebar";
import Follow from "./Follow";
import ProductSlider from "./ProductSlider";
import ProductsPage from "./ProductsPage";

const Clothing: React.FC = () => {
  return (
    <div className="mx-auto w-full min-h-screen pt-[60px]">
      {/* mx-auto pt-[82px] bg-white text-black w-full min-h-screen */}
      <div className=" w-full h-full  ">
        <div className="text-black lg:px-10 px-2 w-full flex flex-col gap-5 ">
          <h1 className="text-2xl font-semibold text-center">Dresses</h1>
          <p className="text-base font-normal text-center">
            Discover fashion couture with our collection of women&times;s
            dresses at Couturelabs. With the standout prints and artisanal
            designs, you can express your individuality as a woman through
            fashion that is as unique as you are. Explore beautiful prints in a
            palette of exploding colours, that are here to elevate your style
            for all occasions. From maxi dresses to midi dresses, and shirt
            dresses to short dresses, find your style. Whether you&times;re
            looking for a statement dress that speaks your personality out loud
            or a casual dress for off-duty days we have you covered!
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
      <div className=" w-full h-[2px] bg-gray-200 "></div>
      <div className=" bg-white py-8 ">
        <h1 className=" uppercase font-bold text-xl text-center ">
          RECENTLY VIEWED
        </h1>
        <div className="  my-4 lg:px-8 px-4  ">
          <ProductSlider />
        </div>
      </div>
      <div>
        <Follow />
      </div>
      <div className=" w-full h-[2px] bg-gray-200 my-6 "></div>
    </div>
  );
};

export default Clothing;
