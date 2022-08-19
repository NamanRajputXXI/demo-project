

import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "../node_modules/react-icons/ai";
import { GiTie } from "../node_modules/react-icons/gi";
import { GoLocation } from "../node_modules/react-icons/go";
// import { useTheme } from "next-themes";
// import Image from "next/image";

const Sidebar = () => {
  

  return (
    <>
      <img
        src="https://www.pngitem.com/pimgs/m/49-497522_transparent-guy-thinking-png-random-guy-cartoon-png.png"
        alt="avatar"
        className="mx-auto border rounded-full "
        
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Naman</span> Rajput
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <a
        
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Delhi,India </span>
        </div>
        <p className="my-2 "> namanrajput801.com </p>
        <p className="my-2"> 9625441390 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:code.namanrajput801@gmail.com")}
      >
        Email me
      </button>
      
    </>
  );
};

export default Sidebar;