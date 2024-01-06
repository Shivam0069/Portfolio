import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen  md:h-screen bg-gradient-to-b from-gray-800 to-black pt-24 md:pt-0 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello there! 👋 I'm Shivam Singh Chauhan, a passionate full-stack developer currently pursuing my B.Tech in Information Technology at Jabalpur Engineering College, Jabalpur. I'm currently in my 3rd year and hailing from the beautiful town of Sidhi in Madhya Pradesh.
        </p>

        <br />

        <p className="text-xl">
        My journey in the world of technology has been an exhilarating adventure. From diving into the fundamentals of programming to exploring the vast landscape of web development, I've been on a constant quest for knowledge and growth.
        </p>
      </div>
    </div>
  );
};

export default About;