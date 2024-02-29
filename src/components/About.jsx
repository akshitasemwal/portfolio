import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-[#0a192f] text-gray-300 h-full sm:h-full"
    >
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center h-full">
        <div className="justify-center items-center my-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 py-top-4">
            About
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
            <div className="text-right text-4xl font-bold">
              <p>Hi! I'm Akshita:) Please take a look around.</p>
            </div>
            <div>
              <p>
                I am passionate about building excellent software that improves
                the lives of those people around me. I am a MERN stack
                developer, with passionate interest in brainstorming and
                building new things. I am also proficient in various other web
                technologies and tools and as expected, most of my projects are
                made using the same. When I am not coding or learning something
                fascinating about technology, I can be found reading fictional
                novels and mythological fiction, Rick Riordan being one of my
                favorite authors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
