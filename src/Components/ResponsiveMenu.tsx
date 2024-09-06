import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineOrderedList } from "react-icons/ai";
import { LiaAngleRightSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

interface ResponsiveMenuProps {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({
  showNav,
  setShowNav,
}) => {
  //   const [openMenu, setOpenMenu] = useState<boolean>(false);

  //   const toggleMenu = (menu: boolean) => {
  //     setOpenMenu(openMenu === menu ? false : menu);
  //   };
  return (
    <div
      className={`fixed top-0 z-50 text-black ${
        showNav ? " left-0 " : " -left-[105%] "
      } h-screen w-screen bg-black bg-opacity-60 z-50  pb-6 flex flex-col justify-between md:hidden  `}
    >
      {/* className={`fixed top-0 z-50 text-black ${
        showNav ? " left-0 " : " -left-[100%] "
      } h-screen w-screen bg-black bg-opacity-60 z-50  pb-6 flex flex-col justify-between md:hidden  `} */}
      <div
        className={`fixed top-0 z-50 text-black ${
          showNav ? " left-0 " : " -left-[100%] "
        } h-full w-[75%] overflow-y-scroll bg-white z-50 transition-all duration-500 pb-6 flex flex-col justify-between md:hidden  `}
      >
        <div className=" w-full flex flex-col  ">
          {/* user section */}
          <div className=" flex items-center justify-between text-xl font-bold right-0 p-6 ">
            <div></div>
            <AiOutlineClose
              color="black"
              onClick={() => setShowNav(!showNav)}
              size={30}
              className=" text-end cursor-pointer "
            />
          </div>
          <div className=" w-full h-[1px] bg-slate-200 "></div>
          <nav>
            <ul className=" flex flex-col pt-2 text-black w-full h-full gap-4  ">
              <li
                onClick={() => setShowNav(!showNav)}
                className="pl-3 capitalize text-red-400 "
              >
                <Link to="/">Sale</Link>
              </li>
              <li className=" w-full h-[1px] bg-slate-200 "></li>
              <li className="px-3 capitalize flex items-center justify-between  ">
                <Link to="/">Trending Now</Link>
                <span>
                  <LiaAngleRightSolid />
                </span>
              </li>
              <li className=" w-full h-[1px] bg-slate-200 "></li>
              <li className="px-3 capitalize flex items-center justify-between  ">
                <Link to="/">Clothing</Link>
                <span>
                  <LiaAngleRightSolid />
                </span>
              </li>
              <li className=" w-full h-[1px] bg-slate-200 "></li>
              <li className="px-3 capitalize flex items-center justify-between  ">
                <Link to="/">Modestwear</Link>
                <span>
                  <LiaAngleRightSolid />
                </span>
              </li>
              <li className=" w-full h-[1px] bg-slate-200 "></li>
              <li className="px-3 capitalize flex items-center justify-between  ">
                <Link to="/">Accessories</Link>
                <span>
                  <LiaAngleRightSolid />
                </span>
              </li>
              <li className=" w-full h-[1px] bg-slate-200 "></li>
              <li className="px-3 capitalize flex items-center justify-between  ">
                <Link to="/">Featured</Link>
                <span>
                  <LiaAngleRightSolid />
                </span>
              </li>
              <li className=" w-full h-[1px] bg-slate-200 "></li>

              <li className="pl-3 capitalize  ">
                <Link to="/">About Us</Link>
              </li>
              <li className=" w-full h-[1px] bg-slate-200 "></li>
              <li className="pl-3 capitalize  ">
                <Link to="/">Love your planet</Link>
              </li>
              <li className=" w-full h-[1px] bg-slate-200 "></li>
            </ul>
          </nav>
          <div>
            <div className=" w-full pl-3 flex flex-row items-center gap-3 py-3 ">
              <AiOutlineOrderedList size={20} />
              <div>
                <h1 className=" font-bold ">My Orders</h1>
                <p>Track Or Return</p>
              </div>
            </div>
            <div className=" w-full h-[1px] bg-slate-200 "></div>
            <div className=" w-full pl-3 flex flex-row items-center gap-3 py-3 ">
              <h1 className=" capitalize font-medium ">shopping info</h1>
            </div>
            <div className=" w-full h-[1px] bg-slate-200 "></div>
            <div className=" w-full pl-3 flex flex-row items-center gap-3 py-3 ">
              <h1 className=" capitalize font-medium ">refund policy</h1>
            </div>
            <div className=" w-full h-[1px] bg-slate-200 "></div>
            <div className=" w-full pl-3 flex flex-row items-center gap-3 py-3 ">
              <h1 className=" capitalize font-medium ">
                return & exchange policy
              </h1>
            </div>
            <div className=" w-full h-[1px] bg-slate-200 "></div>
          </div>
        </div>
        <div className=" pl-3 py-2 flex gap-3 items-center">
          <span>
            <CiUser size={20} />
          </span>
          <h1 className=" capitalize font-medium ">login/register</h1>
        </div>
        <div className=" w-full h-[1px] bg-slate-200 "></div>
        <div className=" pl-3">
          <p>@2024 All rights reserves</p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
