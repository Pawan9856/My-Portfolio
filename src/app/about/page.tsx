import Link from "next/link";
import React from "react";

const page = () => {
  const Skills = [
    "JavaScript",
    "React",
    "NextJs",
    "C++",
    "NodeJs",
    "ExpressJS",
    "GIT",
    "Tailwind Css",
    "Github",
    "DSA",
    "MongoDB",
    "Firebase",
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-20 text-mySecondaryColor pb-20 font-mono">
      <div className="w-full lg:w-1/2 px-10 lg:px-20 flex flex-col gap-10 h-full">
        <h1 className="font-bold text-2xl">Get to know me!</h1>
        <p className="">
          I am a dedicated software engineer with solid knowledge of C++,
          JavaScript, and C, and a basic understanding of Java. I have a keen
          interest in data structures and algorithms (DSA), which I enjoy using
          to solve complex problems. My experience in web development includes
          working with JavaScript, Tailwind CSS, MongoDB, NodeJs and Express,
          allowing me to create dynamic and user-friendly applications. I am
          always eager to learn and grow, and pride myself on the ability to
          blend technical expertise with creativity to create effective software
          solutions.
          <br/>
          I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to contact me. 
        </p>
        <div className="flex justify-start items-center">
          <Link
            href="/contact"
            className="py-3 text-lg hover:scale-105 transition-all duration-300 font-semibold px-10 rounded-lg bg-myExtraColor text-white"
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-10 lg:px-20 flex flex-col gap-14">
        <h1 className="font-bold text-2xl">My Skills</h1>
        <div className="flex gap-4 flex-wrap">
          {Skills.map((skill) => (
            <div
              key={skill}
              className="bg-mySecondaryColor/90 px-4 py-2 rounded-md hover:shadow-sm "
            >
              <span className="text-md text-myPrimaryColor">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
