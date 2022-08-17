import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = ( ) => setNav(!nav)


  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">BRAND</h1>
          <ul className="hidden md:flex">
            <li className="cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out">
              Home
            </li>
            <li className="cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out">
              About
            </li>
            <li className="cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out">
              Support
            </li>
            <li className="cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out">
              Pricing
            </li>
            <li className="cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out">
              Platforms
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none cursor-pointer bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 cursor-pointer py-3"> Sign Up</button>
        </div>
        <div onClick={handleClick} className="md:hidden ">
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute  bg-zinc-200 px-8 w-full"}>
        <li className="cursor-pointer border-zinc-300 w-full border-b-2">
          Home
        </li>
        <li className="cursor-pointer border-zinc-300 w-full border-b-2">
          About
        </li>
        <li className="cursor-pointer  border-zinc-300 w-full border-b-2">
          Support
        </li>
        <li className="cursor-pointer border-zinc-300 w-full border-b-2">
          Pricing
        </li>
        <li className="cursor-pointer border-zinc-300 w-full border-b-2">
          Platforms
        </li>
        <div className="flex flex-col my-4">
          <button className=" cursor-pointer bg-transparent text-indigo-600 py-3 px-8 mb-4">
            Sign In
          </button>
          <button className="px-8 cursor-pointer py-3"> Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
