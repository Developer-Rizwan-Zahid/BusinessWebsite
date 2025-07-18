import React from 'react'
import Service1 from '../assets/service.png'
import Line1 from '../assets/line1.png'
import Logo1 from '../assets/logo1.png'
import Logo2 from '../assets/logo2.png'
import Logo3 from '../assets/logo3.png'
import Logo4 from '../assets/logo4.png'

const Service = () => {
  return (
     <div className='my-20'>
            <div className='max-w-7xl mx-auto grid p-6 md:p-0 md:grid-cols-2 gap-28 items-center'>
                 <div className='bg-blue-100 rounded-br-4xl rounded-tl-4xl'>
                  <img src={Service1} alt="" />
                </div>
                <div className='space-y-7'>
                    <div className='flex gap-5 items-center'>
                        <h3 className='bg-orange-100 text-orange-800 font-bold px-3 py-1'>Services We Offer</h3>
                        <img src={Line1} alt="" />
                    </div>
                    <div className='space-y-7'>
                      <h1 className='md:text-5xl text-3xl font-bold'>
                     We offer smart, reliable, and innovative digital solutions for growth.
                      </h1>
                      <p>We offer smart, reliable, and innovative digital solutions tailored to your business needs. Our services are designed to boost growth, improve efficiency, and help you stay competitive in the digital landscape.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-pink-100  w-15 h-15 flex items-center justify-center rounded-full'>
                            <img src={Logo1} alt="" className='w-[50px]' />
                            </div>
                            <h5 className='font-semibold'>Investment planning</h5>
                        </div>
                         <div className='flex gap-3 items-center'>
                            <div className='bg-yellow-100  w-15 h-15 flex items-center justify-center rounded-full'>
                            <img src={Logo2} alt="" className='w-[50px]' />
                            </div>
                            <h5 className='font-semibold'>Financial guidance</h5>
                        </div>
                         <div className='flex gap-3 items-center'>
                            <div className='bg-green-100  w-15 h-15 flex items-center justify-center rounded-full'>
                            <img src={Logo4} alt="" className='w-[50px]' />
                            </div>
                            <h5 className='font-semibold'>Estate Planing</h5>
                        </div>
                         <div className='flex gap-3 items-center'>
                            <div className='bg-gray-100  w-15 h-15 flex items-center justify-center rounded-full'>
                            <img src={Logo3} alt="" className='w-[50px]' />
                            </div>
                            <h5 className='font-semibold'>Inestment Management</h5>
                        </div>
                    </div>
                    <button className=' p-2 border-2 border-amber-600'>More Offers</button>
                </div>
            </div>
        </div>
  )
}

export default Service
