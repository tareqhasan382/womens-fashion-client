import HeroSlider from "./Components/HeroSlider";
import PressSticker from "./Components/PressSticker";
import ProductSlider from "./Components/ProductSlider";
import Style from "./Components/Style";
import middleBanner from "../src/assets/banner/middle-banner.webp";
import Testtimonial from "./Components/Testtimonial";
import Follow from "./Components/Follow";
function App() {
  return (
    <>
      <div className=" w-full h-full items-center text-black no-scrollbar ">
        <HeroSlider />
        <div className=" bg-white py-8">
          <h1 className=" uppercase font-bold text-xl text-center ">
            FLAT 50% off
          </h1>
          <div className=" my-4 lg:px-8 px-4  ">
            <ProductSlider />
          </div>
        </div>
        <div className=" w-full py-8 ">
          <h1 className=" uppercase font-semibold text-2xl text-center ">
            SHADES OF STYLE
          </h1>
          <div className=" my-4  bg-slate-100 lg:px-0 px-4 ">
            <Style />
          </div>
        </div>
        <div className=" w-full bg-white text-black py-4 ">
          <h1 className=" uppercase font-semibold text-2xl text-center ">
            FEATURED IN
          </h1>
          <div className=" my-4 ">
            <PressSticker />
          </div>
        </div>

        <div className=" bg-white py-8 ">
          <h1 className=" uppercase font-bold text-xl text-center ">
            PERSONALISED FOR YOU
          </h1>
          <div className=" my-4 lg:px-8 px-4  ">
            <ProductSlider />
          </div>
        </div>
        <div className=" w-full h-full bg-white py-4 ">
          <img
            src={middleBanner}
            alt="banner"
            className=" w-full h-full object-cover bg-no-repeat "
          />
        </div>
        <div className=" bg-white py-8 ">
          <h1 className=" uppercase font-bold text-xl text-center ">
            RECENTLY VIEWED
          </h1>
          <div className=" my-4 lg:px-8 px-4  ">
            <ProductSlider />
          </div>
        </div>
        <div className=" w-full h-[1px] bg-slate-200 "></div>
        <div className=" bg-white py-8 lg:px-8 px-4 ">
          <h1 className=" uppercase font-bold lg:text-xl text-lg text-center ">
            Hear from Our Happy Customers
          </h1>
          <p className=" text-center capitalize lg:text-lg text-xs ">
            Thank you for the beautiful messages sent on WhatsApp and Instagram!
          </p>
          <div className=" my-4   ">
            <Testtimonial />
          </div>
        </div>
        <div className=" w-full h-[1px] bg-slate-200 mb-4 "></div>
        <div className=" flex flex-col gap-8 bg-white lg:px-24 px-4 py-8  ">
          <h1 className=" uppercase lg:font-bold font-medium lg:text-xl text-sm text-center ">
            FOLLOW US ON INSTAGRAM @COUTURELABS.ME
          </h1>

          <div className=" my-4   ">
            <Follow />
          </div>
        </div>
        <div className=" w-full h-[1px] bg-slate-200 mb-2 "></div>
      </div>
    </>
  );
}

export default App;
