import React, { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation, useNavigate} from "react-router-dom";
import Logo from "../../assets/logo.png";
import { IoMdClose } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaSearch } from "react-icons/fa"
import { MdDynamicFeed } from "react-icons/md";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const {authUser} = useAuthContext()
  const location = useLocation()

  const [active, setActive] = useState(location.pathname); // Track which text is clicked
  const handleClick = (path) => {
    setActive(path); // Set active tab when a menu item is clicked
  };

  
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  
  return (
    <>
      <div className=" ">
        <div className=" menu-container bg-pink-100 h-[70px] md:h-[95px] w-full  p-0 m-0 items-center lg:px-[120px] ">
          <div className="container flex items-center justify-between p-3">
            {/* left */}
            <div className="navLeft flex items-center m-0 p-0">
              <div className="md:hidden items-center cursor-pointer">
                <MdOutlineMenu
                  onClick={toggleMenu}
                  className="w-[45px] h-[50px] cursor-pointer"
                />
              </div>
              <Link to={"/"}>
                <div className="hidden md:block md:ms-5">
                  {/* <img src={Logo} className="md:block h-[70px] w-[70px]" /> */}
                  <p className=" font-bold text-yellow-700 md:text-[40px]">LIV</p>
                </div>
              </Link>

              {/* search */}
              {/* <div className="hidden md:flex lg:ms-[290px]">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[100px] md:w-[300px] h-[50px] lg:w-[500px] ps-4 outline-pink-200"
                />
                <div className="bg-pink-300 w-[50px] flex items-center justify-center rounded-tr-md rounded-br-md">
                  <FaSearch />
                </div>
              </div> */}
            </div>
            <Link to={"/profile"}>
              <div className=" cursor-pointer">
                <img src={authUser.profilePic} className=" w-[50px] h-[50px] md:w-[60px] md:h-[60px]" alt="" />
              </div>
            </Link>
          </div>
        </div>
        {/* end up */}
        <div className="w-full flex items-center h-[50px] bg-pink-200 justify-around p-0 m-0">
          <div className="flex gap-3 mx-auto md:gap-7 lg:gap-[60px]">
            <Link to={"/"} onClick={()=>handleClick}>
            <p className={`font-bold md:text-[25px] cursor-pointer ${active === '/' ? 'text-blue-600': 'text-black'}`}>
              Posts
            </p>
            </Link>
            <Link to={"/counsellors"} onClick={()=>handleClick}>
            <p className={`font-bold md:text-[25px] cursor-pointer ${active ==='/counsellors' ? 'text-blue-600': 'text-black'}`}
          
            >
              Counsellors
            </p>
            </Link>
            <Link to={"/articles"} onClick={()=>handleClick}>
            <p className={`font-bold md:text-[25px] cursor-pointer ${active ==='/articles' ? 'text-blue-600': 'text-black'}`}
          
            >
              Articles
            </p>
            </Link>
            <Link to={"/chat"}>
            <p className="  font-bold md:text-[25px] cursor-pointer">
              Chats
            </p>
            </Link>
          </div>
        </div>
        <div>
          {/* menu */}

          <div
            className={
              isMenuOpen
                ? "downone fixed top-0 left-0 h-full bg-black p-4 opacity-80 w-full ease-in-out duration-500"
                : " fixed left-[-100%]"
            }
          ></div>
          <div
            className={
              isMenuOpen
                ? "fixed top-0 left-0 h-full bg-pink-100 p-2 opacity-100 w-[230px] ease-in-out duration-500"
                : " fixed left-[-100%]"
            }
          >
            <div
              className=" flex justify-end text-black cursor-pointe top-0 left-0 font-bold"
              onClick={closeMenu}
            >
              <IoMdClose size={35} className=" cursor-pointer text-pink-600" />
            </div>

            {/* Menu content goes here */}
            <ul className=" text-black mt-5">
              {/* profile */}
              <Link to={"/profile"}>
                <li className=" p-3 flex border-b border-gray-400 items-center font-serif mb-3 hover:bg-pink-400 rounded-sm hover:text-white justify-between">
                  <a href="" className=" text-[25px]">
                    Profile
                  </a>
                  <FaRegUser size={25}/>
                </li>
              </Link>
              <Link to={"/counsellors"}>
                <li className=" p-3 flex border-b border-gray-400 items-center font-serif mb-3 hover:bg-pink-400 rounded-sm hover:text-white justify-between">
                  <a href="" className=" text-[25px]">
                    Counsellors
                  </a>
                  <FaRegUser size={25} />
                </li>
              </Link>
              <li className=" p-3 flex border-b border-gray-400 items-center font-serif mb-3 hover:bg-pink-400 rounded-sm hover:text-white justify-between">
                <a href="" className=" text-[25px]">
                  Logout
                </a>
                <IoIosLogOut size={25} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
