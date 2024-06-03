import React, { useState } from "react";
import wapp from "../../assets/wapp.png";
import mail from "../../assets/mail.png";
import Insta from "../../assets/Insta.png";
import facebook from "../../assets/facebook.png";
import { BiMenuAltLeft } from "react-icons/bi";

const navItems = [
  "Live Darshan",
  "Live Lectures",
  "Volunteers",
  "Temple",
  "Srila Prabhupada",
  "Gallery",
];

const MainHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navItems = [
    "Live Darshan",
    "Live Lectures",
    "Volunteers",
    "Temple",
    "Srila Prabhupada",
    "Gallery",
  ];
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar">
          <nav>
            <ul className="absolute top-12 z-10 text-slate-50 flex flex-col items-center justify-around text-sm bg-red-800 w-52 h-96 md:hidden">
              {navItems.map((el, ind) => (
                <li
                  key={`${el}_${ind}`}
                  className="cursor-pointer hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 active:bg-red-900 rounded-md p-2"
                >
                  {el}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      <nav className=" bg-red-800 min-h-12 flex items-center justify-between w-full px-1 md:px-3">
        <ul className="text-slate-50 md:gap-10 items-center justify-between md:text-base text-sm md:flex hidden">
          {navItems.map((el, ind) => (
            <li
              key={`${el}_${ind}`}
              className="cursor-pointer hover:bg-red-600 transition-all hover:scale-105 active:scale-95 active:bg-red-700 rounded-md p-2"
            >
              {el}
            </li>
          ))}
        </ul>
        <div
          className="text-slate-50 text-3xl md:hidden"
          onClick={toggleSidebar}
        >
          <BiMenuAltLeft />
        </div>
        <div className="gap-2 flex items-center">
          <img
            className="md:h-7 h-6 cursor-pointer transition-all hover:scale-105 active:scale-95"
            src={wapp}
            alt="wapp"
          />
          <img
            className="md:h-6 h-5 cursor-pointer transition-all hover:scale-105 active:scale-95"
            src={mail}
            alt="mail"
          />
          <img
            className="md:h-7 h-6 cursor-pointer transition-all hover:scale-105 active:scale-95"
            src={Insta}
            alt="Instagram"
          />
          <img
            className="md:h-9 h-8 cursor-pointer transition-all hover:scale-105 active:scale-95"
            src={facebook}
            alt="facebook"
          />
        </div>
      </nav>
    </>
  );
};

export default MainHeader;
