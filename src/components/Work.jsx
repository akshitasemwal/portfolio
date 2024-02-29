import React from "react";
import StudentDashboard from "../assets/StudentDashboard.png";
import BlogSite from "../assets/BlogSite.png";
import EcoWare from "../assets/EcoWare.png";
import EstateEcommerce from "../assets/EstateEcommerce.png";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="my-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 py-top-4 ">
            Projects
          </p>
          <p className="text-2xl text-[#8892b0] py-top-4">
            Projects I have worked on.
          </p>
        </div>

        {/*Container*/}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-6 p-8">
            <div>
              <h2 className="text-4xl py-2 text-left font-bold text-[#dce2f3]">
                Estate Ecommerce
              </h2>
              {/* <p className="text-[#ccd6f6]"> */}
              <div>
                <p>
                  MERN stack based real estate marketplace application with
                  responsive UI that conducts seam-less CRUD operations for
                  property listings. Authenticated users can buy/sell/rent any
                  listings of their choice and search for desired listings using
                  the search functionality.
                </p>
                <a
                  href="https://github.com/akshitasemwal/Estate-Ecommerce"
                  target="new"
                  className=""
                >
                  <button className="pink-600 p-2 border-2 border-[#dce2f3]">
                    Code
                  </button>
                </a>

                <button>Live</button>
              </div>
            </div>
            <div className="items-center">
              <div
                style={{ backgroundImage: `url(${EstateEcommerce})` }}
                className="shadow-lg shadow-[#040c16] rounded mx-auto content-div p-6 sm:min-w-fit my-bottom-7 h-60"
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-6 p-8">
            <div className="items-center">
              <div
                style={{ backgroundImage: `url(${BlogSite})` }}
                className="shadow-lg shadow-[#040c16] group container rounded mx-auto content-div p-6 sm:min-w-fit my-bottom-7 h-60"
              ></div>
            </div>
            <div className="text-left text-3xl font-bold text-[#dce2f3]">
              <p>BlogSite</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-6 p-8">
            <div className="text-left text-3xl font-bold text-[#dce2f3]">
              <p>Estate Ecommerce</p>
            </div>
            <div className="items-center">
              <div
                style={{ backgroundImage: `url(${StudentDashboard})` }}
                className="shadow-lg shadow-[#040c16] group container rounded mx-auto content-div p-6 sm:min-w-fit my-bottom-7 h-60"
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-6 p-8">
            <div className="items-center">
              <div
                style={{ backgroundImage: `url(${StudentDashboard})` }}
                className="shadow-lg shadow-[#040c16] group container rounded mx-auto content-div p-6 sm:min-w-fit my-bottom-7 h-60"
              ></div>
            </div>
            <div className="text-left text-3xl font-bold text-[#dce2f3]">
              <p>Estate Ecommerce</p>
            </div>
          </div>
        </div>
        {/* ok */}
      </div>
    </div>
  );
};

export default Work;
