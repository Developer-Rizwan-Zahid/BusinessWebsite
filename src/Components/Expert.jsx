import React from 'react'
import Line1 from '../assets/line1.png'
import Invet from '../assets/investment.png'

const Expert = () => {
  return (
    <div className='my-20'>
        <div className='max-w-7xl mx-auto grid p-6 md:p-0 md:grid-cols-2 gap-28 items-center'>
            <div className='space-y-7'>
                <div className='flex gap-5 items-center'>
                    <h3 className='bg-orange-100 text-orange-800 font-bold px-3 py-1'>Solutions We Offer</h3>
                    <img src={Line1} alt="" />
                </div>
                <div className='space-y-7'>
                  <h1 className='md:text-5xl text-3xl font-bold'>
                    Empowering futures <br /> through smart financial <br /> planning
                  </h1>
                  <p>Empowering futures through smart financial planning means taking control of your financial goals today to build a more secure tomorrow. By making informed decisions, managing resources wisely, and planning strategically, individuals can achieve long-term stability, grow their wealth, and confidently navigate life’s financial challenges. Whether it's saving for retirement, investing in opportunities, or budgeting effectively, smart financial planning creates a strong foundation for lasting success.</p>
                  <p>We're Committed to providing you with Expert Guidance, Proven Stratgies & Personlized Approach Financial Prosperity</p>
                </div>
                <button className=' p-2 border-2 border-amber-800'>More Services</button>
            </div>
            <div className='bg-blue-100 rounded-br-4xl rounded-tl-4xl'>
              <img src={Invet} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Expert
