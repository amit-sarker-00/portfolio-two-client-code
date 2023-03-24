import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import amit from "../../assets/myself-removebg-preview.png";
import Drawer from "../Drawer/Drawer";
import Introduction from "../Introduction/Introduction";

const Home = () => {
  return (
    <div className="sm:flex sm:gap-5 md:gap-8 lg:gap-12 mx-5">
      <div className="sm:sticky rounded-xl border-2 border-blue-300 top-0 sm:top-10 w-full sm:w-64 md:w-72 lg:w-80 h-full ">
        <div className=" p-3  ">
          <div className="">
            <img
              className="border-2 mb-5 h-72 w-full border-blue-300  rounded-xl"
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
              <li className="hover:text-blue-600 transition-all">
                <a href="https://www.facebook.com/amit.sarker.581187">
                  <FaFacebook className="w-8 h-8 "></FaFacebook>
                </a>
              </li>
              <li className="hover:text-blue-600 transition-all">
                <a href="https://www.linkedin.com/in/amitsarker0/">
                  <FaLinkedin className="w-8 h-8 "></FaLinkedin>
                </a>
              </li>
              <li className="hover:text-blue-600 transition-all">
                <a href="https://github.com/amit-sarker-00">
                  <FaGithub className="w-8 h-8 "></FaGithub>
                </a>
              </li>
              <li className="hover:text-green-600 transition-all">
                <a
                  href="https://wa.me/01746889508"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="w-8 h-8 "></FaWhatsapp>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center mb-4">
            <button className="border rounded-md px-2 py-1 bg-blue-200 font-semibold  text-gray-800">
              <Link>CONTACT ME</Link>
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-20 w-full flex justify-around">
        <div>
          <div>
            <h1 className="font-semibold ">Introduce</h1>
            <div>
              <Introduction></Introduction>
            </div>
          </div>
        </div>
        <div>
          <Drawer></Drawer>
        </div>
      </div>
    </div>
  );
};

export default Home;
