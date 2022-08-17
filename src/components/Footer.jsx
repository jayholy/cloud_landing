import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram,FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div
      className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2
    "
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-88">
        <div>
          <h6 className="font-bold uppercase pt2">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1"> Cloud</li>
            <li className="py-1">Data</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1"> Privacy</li>
            <li className="py-1">Data</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Terms</li>
          </ul>
        </div>{" "}
        <div>
          <h6 className="font-bold uppercase pt2">Support</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1"> Cloud</li>
            <li className="py-1">Data</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>{" "}
        <div>
          <h6 className="font-bold uppercase pt2">About</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1"> Cloud</li>
            <li className="py-1">Partners</li>
            <li className="py-1">Press</li>
            <li className="py-1">Jobs</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Suscribe to our newsletter</p>
          <p className="py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. dicta
            vitae ipsam!
          </p>
          <form className="flex gap-2 flex-col sm:flex-row" action="">
            <input
              className="w-full pt-2 rounded-md mb-4"
              placeholder=" Enter email..."
              type="email"
            />
            <button className="p-2 mb-4 hover:text-indigo-50">Subscribe</button>
          </form>
        </div>
      </div>
      <div>
        <p className="font-sm text-gray-500 text-center mt-2 uppercase">
          2022 Jayholy, LLC. All rights reserved
        </p>
        <div className="flex items-center text-gray-500 justify-center mt-4 gap-3">
          <FaFacebook className="hover:cursor-pointer text-3xl" />
          <FaTwitter className="hover:cursor-pointer text-3xl" />
          <FaInstagram className="hover:cursor-pointer text-3xl" />
          <FaGithub className="hover:cursor-pointer text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Footer