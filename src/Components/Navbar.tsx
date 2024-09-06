import logo from "../assets/Couturelabs_logo.png";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import Sidebar from "./Sidebar";
import CartPage from "./CartPage";

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const toggleCart = () => {
    setOpenCart(!openCart);
  };
  return (
    <nav className=" w-full h-full flex items-center justify-between px-2 ">
      {/* logo section start*/}
      <div className=" lg:w-[180px] portrait:md:w-[170px] w-full h-full flex md:flex-col flex-row items-center justify-between lg:gap-2 gap-1 pt-5 ">
        <div className=" flex items-center">
          <span
            onClick={() => setShowNav(!showNav)}
            className=" md:hidden overflow-hidden text-black pr-3 "
          >
            <IoMenuSharp
              size={30}
              className=" cursor-pointer transition ease-in duration-150"
            />
          </span>
          <div className="  cursor-pointer ">
            <Link to="/">
              <img
                src={logo}
                alt="Couturelabs_logo"
                className=" w-[160px]   "
              />
            </Link>
          </div>
        </div>
        <div className=" w-[150px] flex gap-2 py-1 text-black ">
          <CiSearch size={25} className="cursor-pointer" />
          <CiUser size={25} className="cursor-pointer" />
          <FaRegHeart size={25} className="cursor-pointer" />
          <HiOutlineShoppingBag
            onClick={toggleCart}
            size={25}
            className="cursor-pointer  "
          />
        </div>
      </div>
      {/* logo section end*/}
      {/* dekstop menu section start*/}
      <div className=" ">
        <ul className=" w-full max-md:hidden uppercase flex xl:gap-5 text-black xl:text-base md:text-[14px] portrait:md:text-[8px]  text-sm xl:font-medium md:font-light font-normal ">
          <li className=" text-red-500 ">
            <Link className="flex items-center gap-[2px] h-[80px]" to="/sale">
              Sale
            </Link>
          </li>
          <li className="relative group cursor-pointe ">
            <h1 className="flex items-center gap-[2px] h-[80px]">
              Trending now
              <span>
                <FaAngleDown
                  size={20}
                  className="group-hover:rotate-180 transition-transform duration-200 pt-1 cursor-pointer"
                />
              </span>
            </h1>
            {/* Dropdown section start top-[52px] w-[150px]*/}
            <div className="absolute  z-[99] hidden w-full bg-white shadow-md p-2 text-black rounded-md group-hover:block transition-all duration-200 ">
              <ul className=" py-2 w-full font-normal ">
                <li className=" p-2 hover:bg-gray-200 capitalize  ">New In</li>
                <li className=" p-2 hover:bg-gray-200 capitalize  ">
                  Vacation Edit
                </li>
                <li className=" p-2 hover:bg-gray-200 capitalize  ">
                  Lucky Sizes
                </li>
                <li className=" p-2 hover:bg-gray-200 capitalize  ">
                  Curvy Chic
                </li>
              </ul>
            </div>
            {/* Dropdown section end */}
          </li>
          <li className="relative group cursor-pointe ">
            <h1 className="flex items-center gap-[2px] h-[80px]">
              Clothing
              <span>
                <FaAngleDown
                  size={20}
                  className="group-hover:rotate-180 transition-transform duration-200 pt-1 cursor-pointer"
                />
              </span>
            </h1>
            {/* Dropdown section start top-[52px] w-[150px]*/}
            <div className="absolute z-[99] hidden w-[300px] bg-white shadow-md p-2 text-black rounded-md group-hover:block transition-all duration-200 ">
              <ul className=" py-2 grid grid-cols-2 font-normal ">
                <li className=" p-2 hover:bg-gray-200 capitalize ">Dresses</li>
                <li className=" p-2 hover:bg-gray-200 capitalize ">Abayas</li>
                <li className=" p-2 hover:bg-gray-200 capitalize ">Kaftans</li>
                <li className=" p-2 hover:bg-gray-200 capitalize ">
                  Co-ord Sets
                </li>
                <li className=" p-2 hover:bg-gray-200 capitalize  ">Tops</li>
                <li className=" p-2 hover:bg-gray-200 capitalize ">Bottoms</li>
                <li className=" p-2 hover:bg-gray-200 capitalize  ">
                  Beachwear
                </li>
                <li className=" p-2 hover:bg-gray-200 capitalize  ">
                  Jumpsuit
                </li>
              </ul>
            </div>
            {/* Dropdown section end */}
          </li>
          <li className="relative group cursor-pointe ">
            <h1 className="flex items-center gap-[2px] h-[80px]">
              Modestwear
              <span>
                <FaAngleDown
                  size={20}
                  className="group-hover:rotate-180 transition-transform duration-200 pt-1 cursor-pointer"
                />
              </span>
            </h1>
            {/* Dropdown section start top-[52px] w-[150px]*/}
            <div className="absolute z-[99] hidden w-full bg-white shadow-md p-2 text-black rounded-md group-hover:block transition-all duration-200 ">
              <ul className=" py-2 w-full font-normal">
                <li className=" p-2 hover:bg-gray-200 capitalize  ">Abayas</li>
                <li className=" p-2 hover:bg-gray-200 capitalize  ">Kaftans</li>
                <li className=" p-2 hover:bg-gray-200 capitalize  ">Hijabs</li>
              </ul>
            </div>
            {/* Dropdown section end */}
          </li>
          <li className="relative group cursor-pointe ">
            <h1 className="flex items-center gap-[2px] h-[80px]">
              Accessories
              <span>
                <FaAngleDown
                  size={20}
                  className="group-hover:rotate-180 transition-transform duration-200 pt-1 cursor-pointer"
                />
              </span>
            </h1>
            {/* Dropdown section start top-[52px] w-[150px]*/}
            <div className="absolute z-[99] hidden w-full bg-white shadow-md p-2 text-black rounded-md group-hover:block transition-all duration-200 ">
              <ul className=" py-2 w-full font-normal">
                <li className=" p-2 hover:bg-gray-200 capitalize  ">Bags</li>
                <li className=" p-2 hover:bg-gray-200 capitalize  ">Hijabs</li>
              </ul>
            </div>
            {/* Dropdown section end */}
          </li>
          <li className="relative group cursor-pointe ">
            <h1 className="flex items-center gap-[2px] h-[80px]">
              Featured
              <span>
                <FaAngleDown
                  size={20}
                  className="group-hover:rotate-180 transition-transform duration-200 pt-1 cursor-pointer"
                />
              </span>
            </h1>
            {/* Dropdown section start top-[52px] w-[150px]*/}
            <div className="absolute z-[99] hidden w-[180px] bg-white shadow-md p-2 text-black rounded-md group-hover:block transition-all duration-200 ">
              <ul className=" py-2 w-full font-normal ">
                <li className=" p-2 hover:bg-gray-200 capitalize ">Press</li>
                <li className=" p-2 hover:bg-gray-200 capitalize  ">
                  Blog Posts
                </li>
                <li className=" p-2 hover:bg-gray-200 capitalize ">Magazine</li>
                <li className=" p-2 hover:bg-gray-200 capitalize  ">
                  Influencer Edit
                </li>
              </ul>
            </div>
            {/* Dropdown section end */}
          </li>

          <li>
            <Link className="flex items-center gap-[2px] h-[80px]" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-[2px] h-[80px]" to="/love">
              Love your planet
            </Link>
          </li>
        </ul>
      </div>
      {/*dekstop menu section end*/}
      {/*mobile menu section start*/}
      <div className=" -top-[80px] ">
        <Sidebar showNav={showNav} setShowNav={setShowNav} />
      </div>

      {/*mobile menu section end*/}
      {/* Cart Drawer */}
      {openCart && <CartPage open={openCart} onClose={toggleCart} />}
    </nav>
  );
};

export default Navbar;
