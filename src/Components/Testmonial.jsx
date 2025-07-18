import React from 'react'
import Line from '../assets/line1.png'
import Profile3 from '../assets/profile3.png'
import Profile2 from '../assets/profile2.png'
import Profile1 from '../assets/profile1.png'
import { Quote } from 'lucide-react'

const Testmonial = () => {
  return (
    <div className=' my-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid p-6 md:p-0 md:grid-cols-2'>
            <div className='space-y-5'>
                <div className='flex gap-5 items-center'>
                    <h3 className='bg-orange-100 text-orange-800 font-bold px-6 py-1'>TESTIMONIALS</h3>
                    <img src={Line} alt="" />
                </div>
                <h1 className='md:tex-4xl text-3xl font-bold '>What Clients Are Saying</h1>
                <p>Our clients consistently praise our reliable service, professional approach, and commitment to delivering exceptional results.</p>
            </div>
            <div className='hidden md:block'></div>
        </div>

        <div className='grid p-6 md:p-0 md:grid-cols-3 my-10 gap-14'>
            <div className='border-2 border-amber-400 rounded-tl-4xl rounded-br-4xl p-10 spac-y-5'>
                <div className='flex gap-7'>
                    <img src={Profile3} alt="" className='rounded-full w-[50px]' />
                    <div className='space-y-1'>
                        <h1 className='font-bold text-xl'>Rizwan-zahid</h1>
                        <p className='text-gray-400'>Director</p>
                    </div>
                </div>
                <p className='mt-4'>Rizwan, the visionary director, drives business growth through innovation, strategic planning, and exceptional leadership across all operations.</p>
                <div className='flex justify-end'>
                    <Quote fill='#008080'/>
                </div>
            </div>
             <div className='border-2 border-amber-400 bg-orange-800 text-white rounded-tl-4xl rounded-br-4xl p-10 spac-y-5'>
                <div className='flex gap-7'>
                    <img src={Profile1} alt="" className='rounded-full w-[50px]' />
                    <div className='space-y-1'>
                        <h1 className='font-bold text-xl'>Joy danial</h1>
                        <p className='text-gray-400'>Analyst</p>
                    </div>
                </div>
                <p className='mt-4'>Joy Danial, a skilled analyst, delivers data-driven insights to enhance business decisions and optimize strategic performance.</p>
                <div className='flex justify-end'>
                    <Quote fill='#008080'/>
                </div>
            </div>
             <div className='border-2 border-amber-400 rounded-tl-4xl rounded-br-4xl p-10 spac-y-5'>
                <div className='flex gap-7'>
                    <img src={Profile2} alt="" className='rounded-full w-[50px]' />
                    <div className='space-y-1'>
                        <h1 className='font-bold text-xl'>Folexa</h1>
                        <p className='text-gray-400'>Attorney</p>
                    </div>
                </div>
                <p className='mt-4'>Floex, a dedicated attorney, provides expert legal guidance to protect business interests and ensure regulatory compliance effectively</p>
                <div className='flex justify-end'>
                    <Quote fill='#008080'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testmonial
