import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen  bg-gradient-to-b from-black to-gray-800 p-4 pt-20 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div data-aos="fade-up" data-aos-duration="700" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/81a22ba3-b8f4-467d-a7ad-652be3f6ac45"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              data-aos="fade-up"
              data-aos-duration="700"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              data-aos="fade-up"
              data-aos-duration="750"
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              data-aos="fade-up"
              data-aos-duration="800"
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
