import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import amit from "../../assets/myself-removebg-preview.png";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Introduction from "../Introduction/Introduction";
import Myskills from "../Myskills/Myskills";
import Projects from "../Projects/Projects";
import ProjectShow from "../ProjectShow/ProjectShow";
import Service from "../Services/Service";

const Home = () => {
  return (
    <div className="sm:flex sm:gap-5 md:gap-8 lg:gap-12 mx-5">
      <div className="sm:sticky rounded-xl md:border-2 border-blue-300 top-2 sm:top-8 md:top-16 w-full sm:w-64 md:w-80 lg:w-96 h-full ">
        <div className=" p-3  ">
          <div className="">
            <img
              className="md:border-2 border mb-5 w-64 h-72 mx-auto border-blue-300  rounded-xl"
              src={amit}
              alt=""
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl  my-2 font-bold">Amit Sarker</h1>
            <h3 className="text-xl font-semibold ">Frontend Developer</h3>
            <small>Email: amitsarker255@gmail.com</small>
            <p className="text-sm">Dhaka,Bangladesh</p>
            <p className="my-4">© 2023 Amit. All Rights Reseved</p>
          </div>
          <div className="mt-3 mb-7">
            <ul
              className="flex items-center gap-2 justify-center text-gray-400
"
            >
              <li className="hover:border-blue-400 transition-all  border-2 p-2 rounded-full">
                <a
                  className=""
                  href="https://www.facebook.com/amit.sarker.581187"
                >
                  <FaFacebook className=" h-5 w-5 "></FaFacebook>
                </a>
              </li>
              <li className="hover:border-blue-400 transition-all  border-2 p-2 rounded-full">
                <a href="https://www.linkedin.com/in/amitsarker0/">
                  <FaLinkedin className=" h-5 w-5"></FaLinkedin>
                </a>
              </li>
              <li className="hover:border-blue-600 transition-all p-2 border-2 rounded-full ">
                <a href="https://github.com/amit-sarker-00">
                  <FaGithub className=" h-5 w-5"></FaGithub>
                </a>
              </li>
              <li className="hover:border-blue-400 transition-all  border-2 p-2 rounded-full">
                <a
                  href="https://wa.me/01746889508"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="h-5 w-5 "></FaWhatsapp>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center mb-4">
            <button className="border rounded-md px-2 py-1 bg-blue-200 font-semibold  text-gray-800">
              <a href="#contact">CONTACT ME</a>
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-10 lg:mt-20 w-full  ">
        <div>
          <div>
            <h1 className="font-semibold w-20 border text-center rounded-lg">
              Introduce
            </h1>
            <div>
              <div className="md:flex justify-between">
                <Introduction></Introduction>
                <ProjectShow></ProjectShow>
              </div>
              <About></About>
              <Service></Service>
              <Myskills></Myskills>
              <Projects></Projects>
              <Contact></Contact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
