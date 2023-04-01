import React from "react";

const Introduction = () => {
  return (
    <div className="">
      <h1 className="text-3xl md:text-5xl xl:text-7xl mt-10 lg:mt-20">
        Say Hi from <span className="text-blue-400">Amit Sarker</span>,
        <br className="sm:block hidden" /> Frontend Developer
      </h1>
      <p className="mt-10">
        I design and code beautifully simple things{" "}
        <br className="lg:block hidden " /> and i love what i do. Just simple
        like that!
      </p>
      <ul className="sm:flex mt-5  gap-5 font-bold ">
        <li className="list-none ">Web Developer</li>
        <li className="relative">
          {" "}
          <span className="absolute -left-5 hidden sm:block bg-primary w-3 h-3 rounded-full top-1/3"></span>
          Frontend Developer{" "}
        </li>
        <li className="relative">
          <span className="absolute -left-5 hidden sm:block bg-primary w-3 h-3 rounded-full top-1/3"></span>
          MERN Stack Developer{" "}
        </li>
      </ul>
      <div className="flex mt-5 gap-2 items-center xs:flex-row	">
        <a
          href="https://drive.google.com/file/d/1EY7ocho6DCD1f2GpeLGDeDr_7IOCfQex/view?usp=sharing"
          className="  bg-blue-200 font-semibold  text-gray-800 py-2 sm:py-3  border-2 px-1 sm:px-4 "
        >
          Get Resume
        </a>
        <a
          href="#about"
          className="   border-2 sm:py-3 py-2 px-1 sm:px-4 font-bold"
        >
          About Me
        </a>
      </div>
    </div>
  );
};

export default Introduction;
