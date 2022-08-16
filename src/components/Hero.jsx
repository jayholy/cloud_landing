import React from "react";
import {
  CloudDownloadIcon,
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import Cyber from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div className=" bg-zinc-200 flex flex-col h-screen justify-between w-full">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start px-2 py-8 w-full ">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 my-4 px-6 sm:w-[60%]">Get Started </button>
        </div>
        <div>
          <img className="w-full" src={Cyber} alt="" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl">
          <p>Data Services</p>
          <div className="flex flex-wrap justify-between px-4">
            <p className="flex  text-slate-500 py-2 px-4"><CloudUploadIcon className="h-6 text-indigo-600"/> APP Security</p>
            <p className="flex  text-slate-500 py-2 px-4"><DatabaseIcon className="h-6 text-indigo-600"/> Dashboard Design</p>
            <p className="flex  text-slate-500 py-2 px-4"><ServerIcon className="h-6 text-indigo-600"/> Cloud Data</p>
            <p className="flex  text-slate-500 py-2 px-4"><PaperAirplaneIcon className="h-6 text-indigo-600" /> API </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
