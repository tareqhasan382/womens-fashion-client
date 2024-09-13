import logo from "../assets/Couturelabs_logo.png";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import Sidebar from "./Sidebar";
import CartPage from "./CartPage";
import { useAppSelector } from "../Redux/hooks";

const Navbar = () => {
  const { products } = useAppSelector((state) => state.cart);
  const { favoriteProducts } = useAppSelector((state) => state.favorite);

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
        <div className=" relative w-[150px] flex gap-2 py-1 text-black ">
          <CiSearch size={25} className="cursor-pointer" />
          <Link to="/profile">
            <CiUser size={25} className="cursor-pointer" />
          </Link>
          <Link to="/favorite">
            <span className=" absolute w-[20px] text-center right-16 -top-4 ">
              {favoriteProducts ? favoriteProducts.length : 0}
            </span>
            <FaRegHeart size={25} className="cursor-pointer" />
          </Link>

          <LuShoppingCart
            onClick={toggleCart}
            size={25}
            className="cursor-pointer  "
          />
          <span className=" absolute w-[20px] text-center right-6 -top-3 ">
            {products ? products.length : 0}
          </span>
        </div>
      </div>
      {/* logo section end*/}
      {/* dekstop menu section start*/}
      <div className=" ">
        <div className=" w-full max-md:hidden uppercase flex xl:gap-5 text-black xl:text-base md:text-[14px] portrait:md:text-[12px]  xl:font-medium md:font-light font-normal gap-2 ">
          <div className=" text-red-500 ">
            <Link className="flex items-center gap-[2px] h-[80px]" to="/sale">
              Sale
            </Link>
          </div>
          <div className="relative group cursor-pointe ">
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
                <Link to="new-in">
                  <li className=" p-2 hover:bg-gray-200 capitalize  ">
                    New In
                  </li>
                </Link>
                <Link to="vacation-edit">
                  <li className=" p-2 hover:bg-gray-200 capitalize  ">
                    Vacation Edit
                  </li>
                </Link>
              </ul>
            </div>
            {/* Dropdown section end */}
          </div>
          <div className="relative group cursor-pointe ">
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
                <Link to="dresses">
                  <li className=" p-2 hover:bg-gray-200 capitalize ">
                    Dresses
                  </li>
                </Link>
                <Link to="abayas">
                  <li className=" p-2 hover:bg-gray-200 capitalize ">Abayas</li>
                </Link>
                <Link to="kaftans">
                  <li className=" p-2 hover:bg-gray-200 capitalize ">
                    Kaftans
                  </li>
                </Link>
                <Link to="co-ord-sets">
                  <li className=" p-2 hover:bg-gray-200 capitalize ">
                    Co-ord Sets
                  </li>
                </Link>
                <Link to="tops">
                  <li className=" p-2 hover:bg-gray-200 capitalize  ">Tops</li>
                </Link>
                <Link to="bottoms">
                  <li className=" p-2 hover:bg-gray-200 capitalize ">
                    Bottoms
                  </li>
                </Link>
                <Link to="beachwear">
                  <li className=" p-2 hover:bg-gray-200 capitalize  ">
                    Beachwear
                  </li>
                </Link>

                <Link to="jumpsuit">
                  <li className=" p-2 hover:bg-gray-200 capitalize  ">
                    Jumpsuit
                  </li>
                </Link>
              </ul>
            </div>
            {/* Dropdown section end */}
          </div>
          <div className="relative group cursor-pointe ">
            <Link to="hijabs" className="flex items-center gap-[2px] h-[80px]">
              Hijabs
            </Link>
          </div>
          <div className="relative group cursor-pointe ">
            <Link to="bags" className="flex items-center gap-[2px] h-[80px]">
              bags
            </Link>
          </div>
          <div className="relative group cursor-pointe ">
            <Link to="/orders" className="flex items-center gap-[2px] h-[80px]">
              my orders
            </Link>
          </div>

          <div>
            <Link
              className="flex items-center gap-[2px] h-[80px]"
              to="/about-us"
            >
              About Us
            </Link>
          </div>
          <div>
            <Link
              className="flex items-center gap-[2px] h-[80px]"
              to="/love-your-planet"
            >
              Love your planet
            </Link>
          </div>
        </div>
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
