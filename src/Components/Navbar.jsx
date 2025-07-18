import React, { useState } from 'react'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import Responsive from './Responsive'

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    const MenuTogle = () => {
        setisOpen(!isOpen)
    }
    return (
        <div className='py-3'>
            <div className='max-w-7xl mx-auto flex items-center px-6 md:px-0 justify-between'>
                <h1 className='md:text-3xl text-2xl font-bold'>NextEra Solutions</h1>
                <nav className='hidden md:block'>
                    <ul className='flex gap-9 items-center text-xl font-semibold text-gray-800'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Services</li>
                        <li className='cursor-pointer'>Contact</li>
                        <li className='cursor-pointer'>Help</li>
                    </ul>
                </nav>
                <div className='hidden md:flex gap-7 items-center'>
                    <button className='text-orange-800 font-bold'>Sign up</button>
                    <button className='bg-orange-800 text-white px-4 py-2 mt-2 rounded-sm'>Get Join Us</button>

                </div>
                <div className='md:hidden text-4xl text-orange-300'>
                    {
                        isOpen ? <HiMenuAlt3 onClick={MenuTogle}/> : <HiMenuAlt1 onClick={MenuTogle}/>
                    }
                </div>
            </div>
            <Responsive isOpen={isOpen} setisOpen={setisOpen}/>
        </div>
    )
}

export default Navbar
