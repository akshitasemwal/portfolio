import React from 'react'

const Contacts = () => {
  return (
    <div name='contact' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
      <div className='max-w-[1000px] mx-auto p-8 mx-top-8 flex flex-col justify-center w-full h-screen'>
        <div className='py-6 mx-top-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 py-top-4'>Contact</p>
            <p className='text-2xl text-[#8892b0] py-top-4'>Interested in my work, or want to contact me? Fill in the form below!</p>
        </div>

        <div className='w-full justify-center items-center max-w-[600]'>
          <form action="https://getform.io/f/2c8aec7f-5a4e-4550-9b14-58b811e74e26" method='POST' className='flex flex-col justify-between items-center'>
            <input type='text' className='bg-[#ccd6f6] p-2 rounded w-3/5' placeholder='Name' name='name'/>
            <input type='email' className='my-4 p-2 bg-[#ccd6f6] rounded w-3/5' placeholder='Email' name='email'/>
            <textarea className='p-2  bg-[#ccd6f6] rounded w-3/5' placeholder='Message' name='message' rows="8"/>
            <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-pink-600 hover:text-gray-300 cursor-pointer hover:border-pink-600'>Let's collaborate:)</button>
          </form>
        </div>
      </div> 
    </div>
  )
}

export default Contacts
