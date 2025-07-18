import { Mail } from 'lucide-react'
import React from 'react'
import HeroImg from '../assets/Heroimg.png'

const Hero = () => {
  return (
    <div>
      <div className=' max-w-7xl h-[650px] p-6 md:p-0 mx-auto grid md:grid-cols-2 gap-6 md:gap-0 justify-center items-center'>
        <div className='md:space-y-7 spac-y-4'>
          <h1 className='md:text-7xl text-4xl font-bold drop-shadow-sm'>Understanding <span className='text-orange-800'>Trends </span> in global markets.</h1>
          <p className=''>Global market trends reveal economic shifts, <br /> helping investors and businesses make <br /> smarter, future-focused financial decisions daily.</p>
          <div className='flex md:gap-4 gap-2 items-center'>
            <div className='flex items-center md:gap-5 gap-2 shadow px-4 py-2 '>
              <Mail className='text-blue-700' />
              <input type="text" placeholder='Enter your Mail Address' className='w-[150px] md:w-[250px]' />
            </div>
            <button className='bg-orange-800 text-white px-4 py-2 rounded-sm'>Join Us Now</button>
          </div>
        </div>
        <img src={HeroImg}  alt="" className='w-[600px]' />
      </div>
    </div>
  )
}

export default Hero
