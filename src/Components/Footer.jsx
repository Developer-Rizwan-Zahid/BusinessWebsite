import React from 'react'
import Twitter from '../assets/twit.png'
import Facebook from '../assets/face.png'
import Instagram from '../assets/inst.png'

const Footer = () => {
  return (
    <div className='bg-orange-800 p-6 md:p-20'>
        <div className='max-w-7xl mx-auto text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-0 md:mb-16 mb-10 '>
                <div className='space-y-7'>
                    <h1 className='font-bold text-2xl'>NextEra Solutions</h1>
                    <p>NextEra Solutions is committed to delivering innovative, reliable, and client-focused digital services that drive growth, efficiency, and long-term business success.</p>
                    <div className='flex gap-7'>
                        <div className='flex gap-3'>
                            <img src={Facebook} alt="" />
                            <p className='hidden md:block'>Facebook</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={Instagram} alt="" />
                            <p className='hidden md:block'>Instagram</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={Twitter} alt="" />
                            <p className='hidden md:block'>Twitter</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 md:pl-28'>
                    <h1 className='font-bold text-xl'>Our Services</h1>
                    <p>Insurance Planing</p>
                    <p>Estate Planing</p>
                    <p>Tax Optimization</p>
                    <p>Debt Management</p>
                </div>
                <div className='space-y-5 md:pl-28'>
                    <h1 className='font-bold text-xl'>Explore More</h1>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Sitemap</p>
                    <p>Privacy</p>
                </div>
                <div className='space-y-5 md:pl-28'>
                    <h1 className='font-bold text-xl'>Contact Me</h1>
                    <p>rizwanzahid091@gmail.com</p>
                    <p>+92 (030) 20467050</p>
                </div>
            </div>
            <hr />
            <div className='mt-5 flex justify-between text-center'>
                <p>NextEraSolutions 2025 @ All rights reserved</p>
                <div className='flex gap-4 md:gap-7'>
                    <p>Terms & Conditions</p>
                    <p>Privacy</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
