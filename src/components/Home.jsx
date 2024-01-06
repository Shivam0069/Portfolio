import React from "react";
import HeroImage from "../assets/shivam.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen pt-48 md:pt-0 md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 year of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            NextJS | ReactJS | TailwindCSS | SQL | MongoDB | NodeJs | Express.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-2/3">
          <img
          data-aos="fade-up" data-aos-duration="700"
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto object-cover w-2/3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
