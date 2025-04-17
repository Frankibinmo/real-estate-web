import React from "react";
import { assets } from "./x";

const Footer = () => {
  return (
    <div
      className="pt-11 px-4 md:px-20 lg:px-32 bg-gray-800 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            this is an important part of the work that is making the app so
            wonderful to interact with always, just stay glued for more
            beautiiful experience
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 mb-2 text-gray-400">
            <a href="#header" className="hover: cursor-pointer">
              Home
            </a>
            <a href="#about" className="hover: cursor-pointer">
              About Us
            </a>
            <a href="#contact" className="hover: cursor-pointer">
              Contact Us
            </a>
            <a href="#" className="hover: cursor-pointer">
              Privacy policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our news letter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest information about land will be sent on a regular in your
            inbox
          </p>
          <div className="flex gap-2">
            <input
              type="Email"
              placeholder="Enter Your Email"
              className="p-2 rounded bg-gray-800
                 text-gray-400 border border-gray-200 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-green-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 py-4 mt-10 text-center text-gray-500">
        Copright 2025 @ Frank-Captain Coding Academy. ALL RIGHT RESERVED
      </div>
    </div>
  );
};

export default Footer;
