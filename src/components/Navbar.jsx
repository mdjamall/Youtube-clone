import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoYoutube } from "react-icons/io";
import { TfiSearch } from "react-icons/tfi";
import { FaMicrophone } from "react-icons/fa";
import { TbVideoPlus } from "react-icons/tb";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center lg:px-6 px-8 h-14 bg-[#212121] opacity-95 sticky ">
      <div className="flex gap-8 items-center ">
        <div className="">
          <RxHamburgerMenu size={22} />
        </div>
        <div className="flex gap-1  items-center ">
          <IoLogoYoutube className=" text-[#f00] " size={30} />
          <span className="text-xl font-semibold mb-1">Youtube</span>
        </div>
      </div>
      <div className="flex  justify-center items-center gap-5">
        <form className="">
          <div className=" flex items-center border border-[#474747] bg-zinc-900  px-4 h-10 pr-0 rounded-3xl">
            <div className="flex gap-5   items-center pr-5">
              <input
                type="
                text"
                placeholder="Search"
                className="lg:w-[30rem] w-32  bg-zinc-900 focus:outline-none border-none"
              />
            </div>
            <button className="h-10 w-14 flex items-center justify-center bg-[#474747] hover:bg-[#424242] rounded-r-full ">
              <TfiSearch size={20} className="  " />
            </button>
          </div>
        </form>

        <div className="p-3 cursor-pointer hover:bg-[#424242] bg-[#474747] rounded-full">
          <FaMicrophone size={18} />
        </div>
      </div>
      <div className="flex justify-between items-center gap-7">
        <TbVideoPlus size={25} />

        <div className="relative">
          <FaBell size={20} className="bg-transparent" />
          <span className="bottom-2 absolute left-2 bg-[#f00] rounded-full text-xs">
            9+
          </span>
        </div>
        <img
          src="https://1.bp.blogspot.com/-qdRfUNOtjkM/XeI_00z9pzI/AAAAAAAAF4E/FeD2SvVFnKUjPAKQ_cNM6-D2ahjKb0HkQCLcBGAsYHQ/s1600/Youtube-Icon-square-2340x2340-2.png"
          alt="profile"
          className="h-9 w-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
