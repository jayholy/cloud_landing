import { CheckIcon } from "@heroicons/react/solid";
import React from "react";

const Pricing = () => {
  return (
    <div name='pricing' className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute  mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center  py-8 text-slate-300">
          <h3 className="uppercase text-3xl">Pricing</h3>
          <h3 className="uppercase font-bold text-white py-8 text-5xl">
            The right price for your research
          </h3>
          <p className=" text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi
            excepturi cumque, labore hic consequatur! Vel quae distinctio
            provident expedita?
          </p>
        </div>
        <div className="grid  md:grid-cols-2">
          <div className="bg-white text-slate-800 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-0 bg-indigo-200 text-indigo-900 rounded-2xl  text-sm">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $21.99{" "}
                <span className="text-xl flex flex-col justify-end text-slate-500">
                  /month
                </span>
              </p>
            </div>
            <p className="text-2xl text-slate-500 py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="text-2xl ">
              <p className="flex">
                <CheckIcon
                  className="w-8 mr-5 text-green-500
                "
                />{" "}
                Lorem, ipsum dolor.
              </p>
              <p className="flex">
                <CheckIcon
                  className="w-8 mr-5 text-green-500
                "
                />{" "}
                Lorem, ipsum dolor.
              </p>
              <p className="flex">
                <CheckIcon
                  className="w-8 mr-5 text-green-500
                "
                />{" "}
                Lorem, ipsum dolor.
              </p>
              <p className="flex">
                <CheckIcon
                  className="w-8 mr-5 text-green-500
                "
                />{" "}
                Lorem, ipsum dolor.
              </p>
              <p className="flex">
                <CheckIcon
                  className="w-8 mr-5 text-green-500
                "
                />{" "}
                Lorem, ipsum dolor.
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-800 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-0 bg-indigo-200 text-indigo-900 rounded-2xl  text-sm">
              premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $98.99{" "}
                <span className="text-xl flex flex-col justify-end text-slate-500">
                  /month
                </span>
              </p>
            </div>
            <p className="text-2xl text-slate-500 py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="text-2xl ">
              <p className="flex">
                <CheckIcon
                  className="w-8 mr-5 text-green-500
                "
                />{" "}
                Lorem, ipsum dolor.
              </p>
              <p className="flex">
                <CheckIcon
                  className="w-8 mr-5 text-green-500
                "
                />{" "}
                Lorem, ipsum dolor.
              </p>
              <p className="flex">
                <CheckIcon
                  className="w-8 mr-5 text-green-500
                "
                />{" "}
                Lorem, ipsum dolor.
              </p>
              <p className="flex">
                <CheckIcon
                  className="w-8 mr-5 text-green-500
                "
                />{" "}
                Lorem, ipsum dolor.
              </p>
              <p className="flex">
                <CheckIcon
                  className="w-8 mr-5 text-green-500
                "
                />{" "}
                Lorem, ipsum dolor.
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
