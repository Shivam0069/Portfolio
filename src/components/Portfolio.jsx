import React from "react";

import IMDb from "../assets/portfolio/IMDb.webp";
import Google from "../assets/portfolio/Google.webp";
import Instagram from "../assets/portfolio/Instagram.jpeg";
import Ecommerce from "../assets/portfolio/Ecommerce.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: IMDb,
      title: "IMDb Clone",
      description:
        "Next.js, Next Themes, React, Tailwind CSS, React Icons, Slugify",
      demo: "https://imdb-clone-version.vercel.app/",
      code: "https://github.com/Shivam0069/IMDB_Clone",
    },
    {
      id: 2,
      src: Google,
      title: "Google Clone",
      description: "Next.js, React, React Icons, Tailwind CSS",
      demo: "https://my-google-project.vercel.app/",
      code: "https://github.com/Shivam0069/Google_CLone",
    },
    {
      id: 3,
      src: Instagram,
      title: "Instagram Clone",
      description:
        "Firebase, moment, Next.js, next-auth, React, react-modal, react-moment, recoil , Tailwind CSS",
      demo: "https://instagram-clone-shivam-singh-chauhans-projects.vercel.app/",
      code: "https://github.com/Shivam0069/instagram-clone",
    },
    {
      id: 4,
      src: Ecommerce,
      title: "E-commerce",
      description:
        "React, AOS, react-icons, react-modal, react-router-dom,Tailwind CSS, recoil,",
      demo: "https://e-commerce-delta-ten-83.vercel.app/",
      code: "https://github.com/Shivam0069/E-commerce",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen pt-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0" >
          {portfolios.map(({ id, src, demo, code, title, description }) => (
            <div
            data-aos="fade-up"
            data-aos-duration="700"
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg group"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-cover w-full h-64 sm:h-52"
              />
              <div className="pt-4 pl-2 w-fit group-hover:text-blue-500">
                {title}
              </div>
              <div className="text-[12px] p-2 h-12 text-gray-400">
                {description}
              </div>
              <div className="flex items-center justify-evenly mt-1">
                <button className="w-1/4 py-2 m-2 text-white bg-blue-500 rounded-md transition-transform transform duration-200 hover:scale-105">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full h-full"
                  >
                    Demo
                  </a>
                </button>
                <button className="w-1/4 py-2 m-2 text-white bg-green-500 rounded-md transition-transform transform duration-200 hover:scale-105">
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full h-full"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
