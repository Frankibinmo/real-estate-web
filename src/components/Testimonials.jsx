import React from 'react'
import { assets, testimonialsData } from './assets'

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-34 w-full overflow-hidden"
      id="testimonials"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mt-2 text-center">
        Customer{" "}
        <span
          className="underline underline-offset-4 
      decoration-1 under font-light"
        >
          Testimonials
        </span>
      </h2>
      <p className="text-center mb-10 max-w-80 mx-auto">
        Testimonies of those thst bougth homes from us
      </p>
      {/* this is to display the testimonial data */}
      <div className="flex flex-wrap gap-7 justify-center">
        {testimonialsData.map((testimonials, index) => (
          <div
            key={index}
            className="max-w-[34opx] shadow border-b-gray-500 rounded px-6 py-10 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonials.image}
              alt={testimonials.alt}
            />
            <h2 className="text-xl text-gray-600 font-medium">
              {testimonials.Name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm ">{testimonials.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonials.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-500  text-center">{testimonials.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials
