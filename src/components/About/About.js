import React from "react";

const About = () => {
  return (
    <div className="mt-10">
      <h1 className="border w-20 font-semibold text-center rounded-lg">
        About
      </h1>
      <div className="md:mt-10 lg:mt-20">
        <h1 className="text-3xl md:text-5xl xl:text-7xl mt-10 lg:mt-20">
          Every <span className="text-blue-400">great design</span> begin with
          <br />
          an even <span className="text-blue-400">better story</span>
        </h1>
        <p className="mt-10">
          Since beginning my journey as a frontend Developer nearly 1 years ago,
          I've done
          <br /> multiple projects using Javascript, React, Tailwind CSS,
          Express JS, MongodDB for database and collaborated with
          <br /> talented people to create unique Design for both
          <br />
          business and consumer use. I'm quietly confident, naturally curious,
          <br />
          and perpetually working on improving my chopsone design problem at a
          time.
        </p>
      </div>
    </div>
  );
};

export default About;
