import React from 'react'
import Narvbar from './Narvbar'


const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full
     overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="header"
    >
      <Narvbar />
      <div
       
        className="container text-center mx-auto py-4 px-6 m:px-23 lg:px-31 text-white"
      >
        <h1 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that suits your Dreams
        </h1>
        <div className="space-x-6 mt-15 ">
          <a href="#project" className="border border-white px-7 py-3 rounded">
            Projcts
          </a>
          <a href="#contact" className="bg-blue-500 px-7 py-3 rounded">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header
