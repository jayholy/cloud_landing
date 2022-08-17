import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import support from "../assets/support.jpg";

const Support = () => {
  return (
    <div name='support' className="w-full h-full mt-24">
      <div
        className="w-full absolute
      h-[700px] bg-gray-900/90"
      >
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={support}
          alt=""
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 ">
          <h2 className="py-8 text-3xl text-slate-300 uppercase text-center">
            Support
          </h2>
          <p className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </p>
          <p className="text-3xl py-4 text-slate-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            tempore dolorum vero, qui reiciendis, tenetur nisi sequi fugit, esse
            error quo? Veniam ipsum fuga totam consequuntur quasi pariatur
            voluptatibus obcaecati hic excepturi, enim voluptatem tempore! Animi
           .
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 text-white p-4 rounded-lg mt-[-4rem] bg-indigo-600" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus excepturi in magni molestiae ipsa aliquid,
                perferendis autem incidunt tenetur ea.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center cursor-pointer text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 text-white p-4 rounded-lg mt-[-4rem] bg-indigo-600" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus excepturi in magni molestiae ipsa aliquid,
                perferendis autem incidunt tenetur ea.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex cursor-pointer items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>{" "}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="w-16 text-white p-4 rounded-lg mt-[-4rem] bg-indigo-600" />
              <h3 className="font-bold text-2xl my-6">Media Enqiuries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus excepturi in magni molestiae ipsa aliquid,
                perferendis autem incidunt tenetur ea.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center cursor-pointer text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
