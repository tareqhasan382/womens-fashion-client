import pyment_methods from "../assets/Payment_Methods.webp";
const Footer = () => {
  return (
    <footer className="w-full h-full lg:px-28 px-2 py-6 gap-10 ">
      <div className="w-full h-full grid lg:grid-cols-4 md:grid-cols-2 mx-auto gap-5">
        <div className=" flex flex-col gap-2  p-4  ">
          <h1 className=" font-bold ">KNOW YOUR BRAND</h1>
          <p>Reward Points</p>
          <p>Brand</p>
        </div>
        <div className=" flex flex-col  p-4 gap-2 ">
          <h1 className=" font-bold ">CUSTOMER CARE</h1>
          <p>Contact Us</p>
          <p>FAQs</p>
          <p>Shipping Info</p>
          <p>Refund Policy</p>
          <p>Return & Exchange Policy</p>
          <p>Orders and Returns</p>
        </div>
        <div className="flex flex-col gap-2  p-4">
          <h1 className=" font-bold ">ABOUT US</h1>
          <p>Our Story</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
        <div className="flex flex-col gap-2  p-4">
          <h1 className=" font-bold ">STAY UP TO DATE</h1>
          <p>
            Get Early Access to New Collections, Offers & Exclusive Fashion
            Advice from our in-house experts.
          </p>
        </div>
      </div>
      <div className=" w-full h-[50px] flex flex-col pt-10 items-center justify-center bg-white ">
        <img src={pyment_methods} alt="pyment_methods" className="" />
        <h1 className=" text-center lg:text-base text-[12px] ">
          Copyright © 2023 Couturelabs. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
