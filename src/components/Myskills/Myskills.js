import React from "react";
import { FiFigma } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

const Myskills = () => {
  return (
    <div className="mt-10 md:mt-20">
      <h1 className="border w-20 font-semibold text-center rounded-lg">
        My Skills
      </h1>
      <div>
        <h1 className="text-3xl md:text-5xl xl:text-7xl mt-10 lg:mt-20">
          My <span className="text-blue-400">Advantages</span>
        </h1>
        <div className="mt-10 lg:mt-20 grid grid-cols-3 sm:grid-cols-4 md:w-3/4 gap-5">
          <div className="border rounded-2xl mx-auto p-5 lg:p-8 md:p-6  border-blue-400 text-blue-400">
            <FiFigma className="xl:text-7xl lg:text-4xl md:text-3xl text-xl mb-3 "></FiFigma>
            <p className="text-xl text-center">92%</p>
          </div>
          <div className="border rounded-2xl mx-auto p-5 lg:p-8 md:p-6  border-blue-400 text-blue-400">
            <FaReact className="xl:text-7xl lg:text-4xl md:text-3xl text-xl mb-3 "></FaReact>
            <p className="text-xl text-center">85%</p>
          </div>
          <div className="border rounded-2xl mx-auto p-5 lg:p-8 md:p-6  border-blue-400 text-blue-400">
            <DiJavascript1 className="xl:text-7xl lg:text-4xl md:text-3xl text-xl mb-3 "></DiJavascript1>
            <p className="text-xl text-center">80%</p>
          </div>
          <div className="border rounded-2xl mx-auto p-5 lg:p-8 md:p-6  border-blue-400 text-blue-400">
            <SiTailwindcss className="xl:text-7xl lg:text-4xl md:text-3xl text-xl mb-3 "></SiTailwindcss>
            <p className="text-xl text-center">90%</p>
          </div>
          <div className="border rounded-2xl mx-auto p-5 lg:p-8 md:p-6  border-blue-400 text-blue-400">
            <SiFirebase className="xl:text-7xl lg:text-4xl md:text-3xl text-xl mb-3 "></SiFirebase>
            <p className="text-xl text-center">90%</p>
          </div>
          <div className="border rounded-2xl mx-auto p-5 lg:p-8 md:p-6  border-blue-400 text-blue-400">
            <SiExpress className="xl:text-7xl lg:text-4xl md:text-3xl text-xl mb-3 "></SiExpress>
            <p className="text-xl text-center">70%</p>
          </div>
          <div className="border rounded-2xl mx-auto p-5 lg:p-8 md:p-6  border-blue-400 text-blue-400">
            <SiMongodb className="xl:text-7xl lg:text-4xl md:text-3xl text-xl mb-3 "></SiMongodb>
            <p className="text-xl text-center">70%</p>
          </div>
          <div className="border rounded-2xl mx-auto p-5 lg:p-8 md:p-6  border-blue-400 text-blue-400">
            <FaNodeJs className="xl:text-7xl lg:text-4xl md:text-3xl text-xl mb-3 "></FaNodeJs>
            <p className="text-xl text-center">70%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myskills;
