import React from 'react'
import Line1 from '../assets/line1.png'
import Meeting from '../assets/meeting.png'

const Start = () => {
  return (
    <div className='my-20 p-3 md:p-0'>
      <div className='max-w-7xl mx-auto bg-orange-800 gap-10 md:gap-0 grid md:grid-cols-2 items-center rounded-tl-4xl rounded-br-4xl md:p-10 py-10 px-3'>
        <div className='space-y-10'>
        <div className='flex gap-5 items-center'>
            <h3 className='text-orange-300 font-bold px-3 py-1'>Get Started</h3>
            <img src={Line1} alt="" />
        </div>
        <h1 className='text-4xl md:text-5xl text-white font-bold'>Get Start For Free No Credit Card Required </h1>
      <div className='flex md:gap-5 gap-2'>
        <input type="text" placeholder='Add your Mail Address' className='bg-white px-5 rounded-sm py-3 md:w-[300px]'/>
        <button className='bg-orange-300 text-white px-4 py-2 rounded-sm '>Get Started</button>
      </div>
        <p className='text-gray-300'>Want to connect our team and book a call <span className='text-orange-300'>Try it now</span></p>
      </div>
      <img src={Meeting} alt="" />
      </div>
    </div>
  )
}

export default Start
