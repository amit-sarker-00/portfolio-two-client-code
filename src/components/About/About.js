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
          Since beginning my journey as a freelance designer nearly 8 years ago,
          I've done
          <br /> remote work for agencies, consulted for startups, and
          collaborated with
          <br /> talented people to create digital products for both
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
