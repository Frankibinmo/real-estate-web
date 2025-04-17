import React, { useEffect, useState } from 'react'
import { assets } from "../assets";

const Narvbar = () => {
     
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
      if(showMobileMenu){
        document.body.style.overflow = 'hidden'
        
      }else{
        document.body.style.overflow = "auto";

      } return () =>{
        document.body.style.overflow = "auto";
         
      }
    },[showMobileMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-end gap-3 items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#header" className="cursor-pointer hover:bg-gray-400">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:bg-gray-400">
            About
          </a>
          <a href="#projects" className="cursor-pointer hover:bg-gray-400">
            Project
          </a>
          <a href="#testimonials" className="cursor-pointer hover:bg-gray-400">
            Testimonials
          </a>
        </ul>
        <button className=" bg-white px-6 py-3 rounded-full hidden lg:block">
          Sign Up
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-6"
          alt=""
        />
      </div>
      {/*       mobile view */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0  overflow-hidden bg-white transition-all`}
      >
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <div className="flex justify-end p-6 cursor-pointer">
            <img
              onClick={() => setShowMobileMenu(false)}
              src={assets.cross_icon}
              className="w-6"
              alt=""
            />
          </div>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Narvbar
