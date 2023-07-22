import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi! I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Akshita Semwal</h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>I can help you in bringing your ideas to life:)</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am a 4th year CSE student, with passion for building digital experiences, and solving problems(mostly the ones I create on my own).
          I am a Full Stack developer and a problem solver. 
          Currently, I am focusing on developing responsive web applications and solving DSA problems.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 p-3 my-2 flex items-center hover:bg-pink-600 hover:text-gray-300 cursor-pointer hover:border-pink-600'>View Work
              <span className='group-hover:rotate-90 duration-500'>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </Link>  
        </div>
      </div>
    </div>
  )
}

export default Home;
