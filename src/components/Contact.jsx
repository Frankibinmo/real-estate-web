import React from 'react'

const Contact = () => {
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="contact"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mt-2 text-center">
        Contact
        <span
          className="underline underline-offset-4 
      decoration-1 under font-light"
        >
          With Us
        </span>
      </h2>
      <p className="text-center mb-10 max-w-80 mx-auto">
        Are you ready to make a move? Lets build the future together in real
        Estate
      </p>

      <form className="max-w-2xl mx-auto text-gray-500 pt-7">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className='my-6 text-left'>
          Message
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 resize-none h-47' name="Message" placeholder="Message" required></textarea>
        </div>
        <button className='bg-green-600 text-white py-3 px-12 mb-10 rounded'>Send Message</button>
      </form>
    </div>
  );
}

export default Contact
