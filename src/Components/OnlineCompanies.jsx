import React from 'react'
import Brand1 from '../assets/brand1.png'
import Brand2 from '../assets/brand2.png'
import Brand3 from '../assets/brand3.png'
import Brand4 from '../assets/brand4.png'
import Brand5 from '../assets/brand5.png'
import Brand6 from '../assets/brand6.png'

const OnlineCompanies = () => {
  return (
    <div className='mt-20 p-6 md:p-0'>
      <div className='max-w-7xl mx-auto flex flex-wrap items-center gap-6 md:gap-0 md:grid md:grid-cols-6 grayscale-100'>
        <img src={Brand1} alt="" className='w-[100px] md:w-[150px]'/>
        <img src={Brand2} alt="" className='w-[100px] md:w-[150px]'/>
        <img src={Brand3} alt="" className='w-[100px] md:w-[150px]'/>
        <img src={Brand4} alt="" className='w-[100px] md:w-[150px]'/>
        <img src={Brand5} alt="" className='w-[100px] md:w-[150px]'/>
        <img src={Brand6} alt="" className='w-[100px] md:w-[150px]'/>
      </div>
    </div>
  )
}

export default OnlineCompanies
