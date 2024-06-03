import React from "react";
import logo from "../../assets/ISKCON-bhopal-logo-magenta-1-150x150.webp";

const navItems = [
  "Home",
  "About",
  "Festivals",
  "Activities",
  "Store",
  "Contact",
];

const NavHeader = () => {
  return (
    <header className=" flex md:flex-row flex-col w-full justify-between items-center min-h-20 px-3 bg-white">
      <img className="md:w-20 w-14 cursor-pointer" src={logo} alt="Instagram" />

      <div className="md:h-12 flex items-center justify-center ">
        <ul className="flex text-gray-700 text-sm md:text-lg justify-between items-center md:gap-10">
          {navItems.map((el, ind) => (
            <li
              key={`${el}_${ind}`}
              className="cursor-pointer transition-all hover:text-gray-900 active:text-gray-950 rounded-md p-2 active:scale-95"
            >
              {el}
            </li>
          ))}
        </ul>
      </div>

      <button className="bg-red-700 transition-all rounded hover:bg-red-600 text-slate-50 cursor-pointer h-7 md:h-10 w-16 md:w-24 md:text-lg text-sm my-2 shadow-md active:scale-95 hover:scale-105">
        Donate
      </button>
    </header>
  );
};

export default NavHeader;
