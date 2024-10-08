import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { AiOutlineClose, AiOutlineOrderedList } from "react-icons/ai";
import { LiaAngleRightSolid } from "react-icons/lia";

type ResponsiveMenuProps = {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

type MenuItem = {
  label: string;
  path?: string;
  submenu?: MenuItem[];
};

const Sidebar: React.FC<ResponsiveMenuProps> = ({ showNav, setShowNav }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuItems: MenuItem[] = [
    {
      label: "Sale",
      path: "/sale",
    },
    {
      label: "Trending now",
      submenu: [
        { label: "New In", path: "/new-in" },
        { label: "Vacation Edit", path: "/vacation-edit" },
        // { label: "Lucky Sizes", path: "/lucky-sizes" },
        // { label: "Curvy Chic", path: "/curvy-chic" },
      ],
    },
    {
      label: "Clothing",
      submenu: [
        { label: "Dresses", path: "/dresses" },
        { label: "Abayas", path: "/abayas" },
        { label: "Kaftans", path: "/kaftans" },
        { label: "Co-ord Sets", path: "/co-ord-sets" },
        { label: "Tops", path: "/tops" },
        { label: "Bottoms", path: "/bottoms" },
        { label: "Beachwear", path: "/beachwear" },
        { label: "Jumpsuit", path: "/jumpsuit" },
      ],
    },
    {
      label: "Hijabs",
      path: "/hijabs",
    },
    {
      label: "Bags",
      path: "/bags",
    },
    {
      label: "my orders",
      path: "/orders",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Love your planet",
      path: "/love-your-planet",
    },
  ];

  return (
    <div
      className={`fixed top-0 text-black ${
        showNav ? "left-0" : "-left-[105%]"
      } h-screen w-screen bg-black bg-opacity-60 z-50 pb-6 flex flex-col justify-between md:hidden`}
    >
      <div
        className={`fixed top-0 z-50 text-black ${
          showNav ? "left-0" : "-left-[100%]"
        } h-full w-[75%] overflow-y-scroll no-scrollbar bg-white z-50 transition-all duration-500 pb-6 flex flex-col justify-between md:hidden`}
      >
        <div className="w-full flex flex-col">
          {/* Close Button */}
          <div className="flex items-center justify-between text-xl font-bold p-6">
            <div></div>
            <AiOutlineClose
              color="black"
              onClick={() => setShowNav(!showNav)}
              size={30}
              className="cursor-pointer"
            />
          </div>
          <div className="w-full h-[1px] bg-slate-200"></div>

          {/* Navigation Menu */}
          <nav>
            <div className="space-y-4 pl-3 pt-4 z-30">
              {menuItems.map((menu, index) => (
                <div key={index} className="relative group">
                  {menu.path ? (
                    <Link
                      to={menu.path}
                      onClick={() => setShowNav(false)} // Close the sidebar on navigation
                      className="w-full text-left flex justify-between items-center pr-4"
                    >
                      <span
                        className={`${
                          menu.label === "Sale" ? "text-red-500" : ""
                        }`}
                      >
                        {menu.label}
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleMenu(menu.label)}
                      className="w-full text-left flex justify-between items-center pr-4"
                    >
                      <span>{menu.label}</span>
                      {menu.submenu && (
                        <LiaAngleRightSolid
                          size={20}
                          className={`transform transition-transform ${
                            openMenu === menu.label ? "rotate-90" : ""
                          }`}
                        />
                      )}
                    </button>
                  )}

                  {openMenu === menu.label && menu.submenu && (
                    <div className="mt-2 space-y-2 bg-slate-200 -ml-3">
                      {menu.submenu.map((submenu, subIndex) => (
                        <div key={subIndex} className="pl-5 hover:bg-gray-400">
                          <Link
                            to={submenu.path!}
                            onClick={() => setShowNav(false)} // Close the sidebar on submenu navigation
                            className="block p-2 rounded-md capitalize"
                          >
                            {submenu.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="w-full h-[1px] bg-slate-200 mt-4"></div>
                </div>
              ))}
            </div>
          </nav>

          {/* Additional Links */}
          <div>
            <div className="w-full pl-3 flex flex-row items-center gap-3 py-3">
              <AiOutlineOrderedList size={20} />
              <div>
                <h1 className="font-bold">My Orders</h1>
                <p>Track Or Return</p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-slate-200"></div>
            <div className="w-full pl-3 flex flex-row items-center gap-3 py-3">
              <h1 className="capitalize font-medium">shopping info</h1>
            </div>
            <div className="w-full h-[1px] bg-slate-200"></div>
            <div className="w-full pl-3 flex flex-row items-center gap-3 py-3">
              <h1 className="capitalize font-medium">refund policy</h1>
            </div>
            <div className="w-full h-[1px] bg-slate-200"></div>
            <div className="w-full pl-3 flex flex-row items-center gap-3 py-3">
              <h1 className="capitalize font-medium">
                return & exchange policy
              </h1>
            </div>
            <div className="w-full h-[1px] bg-slate-200"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="pl-3 py-2 flex gap-3 items-center">
          <span>
            <CiUser size={20} />
          </span>
          <h1 className="capitalize font-medium">login/register</h1>
        </div>
        <div className="w-full h-[1px] bg-slate-200"></div>
        <div className="pl-3">
          <p>@2024 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
