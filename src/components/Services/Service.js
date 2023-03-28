import React from "react";
import { Link } from "react-router-dom";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { SiAltiumdesigner } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const Service = () => {
  return (
    <div className="mt-10 md:mt-20">
      <h1 className="border w-20 font-semibold text-center rounded-lg">
        Services
      </h1>
      <div>
        <h1 className="text-3xl md:text-5xl xl:text-7xl mt-10 lg:mt-20">
          My <span className="text-blue-400">Specializations</span>
        </h1>
        <div className="">
          <div className="border hover:border-blue-400 transition-all rounded-lg sm:p-10 p-2 mt-10 md:w-3/4 md:mt-20 flex items-center justify-between">
            <div>
              <h1 className="sm:text-4xl text-xl mb-2">Website Design</h1>
              <p>I created digital products with unique ideas use Figma</p>
              <h3 className="mt-7">
                <Link className="">24 PROJECTS</Link>
              </h3>
            </div>
            <div>
              <SiInteractiondesignfoundation className="w-12 h-12 text-blue-400"></SiInteractiondesignfoundation>
            </div>
          </div>
          <div className="border hover:border-blue-400 transition-all rounded-lg sm:p-10 p-2 mt-10 md:w-3/4  flex items-center justify-between">
            <div>
              <h1 className="sm:text-4xl text-xl mb-2">Development</h1>
              <p>I build website with Javascript and React as a framework.</p>
              <h3 className="mt-7">
                <Link className="">40 PROJECTS</Link>
              </h3>
            </div>
            <div>
              <MdDesignServices className="w-12 h-12 text-blue-400"></MdDesignServices>
            </div>
          </div>
          <div className="border hover:border-blue-400 transition-all rounded-lg sm:p-10 p-2 mt-10 md:w-3/4  flex items-center justify-between">
            <div>
              <h1 className="sm:text-4xl text-xl mb-2">Website Design</h1>
              <p>I created digital products with unique ideas use Figma</p>
              <h3 className="mt-7">
                <Link className="">24 PROJECTS</Link>
              </h3>
            </div>
            <div>
              <SiAltiumdesigner className="w-12 h-12 text-blue-400"></SiAltiumdesigner>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
