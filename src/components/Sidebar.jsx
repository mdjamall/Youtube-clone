import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { BiLike } from "react-icons/bi";

const Sidebar = () => {
  const mainLinks = [
    {
      icon: <GoHome size={20} />,
      name: "Home",
    },
    {
      icon: <SiYoutubeshorts size={20} />,
      name: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={20} />,
      name: "Subscriptions",
    },
  ];

  const otherLinks = [
    {
      icon: <RiHistoryLine size={20} />,
      name: "History",
    },
    {
      icon: <RiVideoLine size={20} />,
      name: "Your videos",
    },
    {
      icon: <MdOutlineWatchLater size={20} />,
      name: "Watch later",
    },
    {
      icon: <LiaDownloadSolid size={20} />,
      name: "Downloads",
    },
    {
      icon: <BiLike size={20} />,
      name: "Liked Videos",
    },
  ];

  return (
    <div className="w-3/12 hidden sm:block p-1 lg:w-2/12  h-screen pr-5 overflow-auto pb-8 bg-[#212121]">
      <ul className="flex ml-1 flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => (
          <li key={name} className={`pl-5 py-3 rounded-md hover:bg-[#474747]`}>
            <a href="#" className="flex items-center gap-5">
              {icon}
              <span className="tracking-wide text-sm">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex ml-1 flex-col mt-4">
        {otherLinks.map(({ icon, name }) => (
          <li key={name} className={`pl-5 py-3 rounded-md hover:bg-[#474747]`}>
            <a href="#" className="flex items-center gap-5">
              {icon}
              <span className="tracking-wide text-sm">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
