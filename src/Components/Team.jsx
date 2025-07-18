import React from 'react'
import Grad from '../assets/grad.png'
import Risk from '../assets/risk.png'
import Cust from '../assets/cust.png'

const Team = () => {
  return (
    <div>
      <div className='my-20'>
        <div className='max-w-7xl mx-auto p-6 md:p-0'>
            <h1 className='text-3xl md:text-4xl font-bold'>Count on us—our team stands by <br /> you in every situation</h1>
            <div className='grid md:grid-cols-3 my-10 md:my-20 gap-10 md:gap-20'>
                <div className='space-y-4 pr-10'>
                <div className='h-20 w-20 flex items-center justify-center rounded-full bg-amber-100'>
                    <img src={Grad} alt="" className='w-[50px]' />
                </div>
                <h1 className='font-bold text-xl'>Your success, guided by specialists</h1>
                <p>Your success, guided by specialists who bring deep industry knowledge, strategic insight, and unwavering commitment to excellence.</p>
                <button className='text-orange-600'>Read more</button>
            </div>
              <div className='space-y-4 pr-10'>
                <div className='h-20 w-20 flex items-center justify-center rounded-full bg-red-100'>
                    <img src={Risk} alt="" className='w-[70px]' />
                </div>
                <h1 className='font-bold text-xl'>Threat Management</h1>
                <p>Threat management ensures proactive strategies are in place to identify, assess, and neutralize potential business disruptions effectively.</p>
                <button className='text-orange-600'>Read more</button>
            </div>
              <div className='space-y-4 pr-10'>
                <div className='h-20 w-20 flex items-center justify-center rounded-full bg-green-100'>
                    <img src={Cust} alt="" className='w-[70px]' />
                </div>
                <h1 className='font-bold text-xl'>Professional advice</h1>
                <p>Professional advice empowers you to make confident decisions, backed by knowledge, experience, and industry-specific insight.</p>
                 <button className='text-orange-600'>Read more</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team
