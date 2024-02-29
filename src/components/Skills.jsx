import React from "react";
import Next from "../assets/next.png";
import Redux from "../assets/redux.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div className="justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 py-top-4">
            Skills
          </p>
          <p className="text-2xl text-[#8892b0] py-top-4">
            Technologies I have worked with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-4">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-4">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-4">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-4">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="my-4">MongoDB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-4">
            <img className="w-20 mx-auto" src={Next} alt="Next icon" />
            <p className="my-4">Next</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-4">
            <img className="w-20 mx-auto" src={Redux} alt="Redux icon" />
            <p className="my-4">Redux</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-4">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-4">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
