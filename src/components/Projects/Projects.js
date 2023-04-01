import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="mt-10 md:mt-20" id="projects">
      <h1 className="border w-20 font-semibold text-center rounded-lg">
        Projects
      </h1>
      <div>
        <h1 className="text-3xl md:text-5xl xl:text-7xl mt-10 lg:mt-20">
          Recent <span className="text-blue-400">Projects</span>
        </h1>
        <div className="mt-10 md:w-3/4 md:mt-20">
          {projects?.map((project) => (
            <div key={project?._id} className="mb-16">
              <div className="relative ">
                <div className="gradient ">
                  <img
                    className="h-96 w-full object-cover"
                    src={project?.photo}
                    alt=""
                  />
                </div>
              </div>
              <div className=" mt-4 text-blue-400 font-bold ">
                <ul className="flex text-xs sm:text-base items-center gap-4 ">
                  <li>
                    <Link to={project?.live}>Live-Link</Link>
                  </li>
                  <li>
                    <Link to={project?.client}>Client-Side</Link>
                  </li>
                  <li>
                    <Link to={project?.server}>Server-Side</Link>
                  </li>
                </ul>
              </div>
              <h1 className="sm:text-xl text-sm mt-4">
                {project?.projectName} - <span> {project?.title}</span>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
