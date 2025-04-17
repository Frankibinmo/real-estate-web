import React from 'react'
import { assets } from "../assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container m-auto
     p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span
          className="underline underline-offset-4 under
       font-light"
        >
          Our brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-7">
        passionate about properties? this is for you to take advantage of
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brandImg}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects completed </p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>mn. sq. ft Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing projects</p>
            </div>
          </div>
          <p className='my-10 max-w-lg'>
            from the very first day of working with Bright, he understood my
            vision and provided me with a befiting house of my choice
            <button className='bg-green-600 text-white px-8 py-2 rounded'>Learn More</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
