import React from 'react'
import StudentDashboard from '../assets/StudentDashboard.png'
import BlogSite from '../assets/BlogSite.png'
import EcoWare from '../assets/EcoWare.png'

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='my-8'> 
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 py-top-4 ">
            Projects
          </p>
          <p className='text-2xl text-[#8892b0] py-top-4'>Projects I have worked on.</p>
        </div>

        {/*Container*/}
        <div className='h-full w-full flex flex-col justify-start items-start pb-20'>
          
          {/*Grid item*/}
          <div style={{backgroundImage: `url(${StudentDashboard})`}}
            className='shadow-lg shadow-[#040c16] group container rounded mx-auto content-div p-10 lg:w-2/4 sm:min-w-fit my-bottom-7 h-52'>

            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <div className='pt-8 text-center'>
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a> */}
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <a href='https://github.com/akshitasemwal/StudentDashboard'>
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${BlogSite})`}}
            className='shadow-lg shadow-[#040c16] group container rounded mx-auto content-div p-10 lg:w-2/4 sm:min-w-fit h-52 my-7'>
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <div className='pt-8 text-center'>
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a> */}
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <a href='https://github.com/akshitasemwal/BlogSite'>
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${EcoWare})`}}
            className='shadow-lg shadow-[#040c16] group container rounded mx-auto content-div p-10 lg:w-2/4 sm:min-w-fit h-52'>
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <div className='pt-8 text-center'>
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a> */}
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <a href='https://github.com/akshitasemwal/EcoWare'>
                    Code
                  </a>
                </button>  
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Work
