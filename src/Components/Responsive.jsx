import { Menu } from 'lucide-react'
import React from 'react'

const Responsive = ({isOpen, setisOpen}) => {
  return (
    <div className={`${isOpen ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75% flex-col justify-between bg-amber-800 ] px-8 pb-6 pt-16 md:hidden rounded-r-xl shadow-md transition-all`}>
        <div >
            <h1 className='font-bold text-2xl text-center text-white'>Nextra Solution</h1>
            <nav className='mt-12'>
                <ul className='flex flex-col gap-9 items-center text-xl font-semibold text-white'>
                    <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Services</li>
                        <li className='cursor-pointer'>Contact</li>
                        <li className='cursor-pointer'>Help</li>
                        <button className='bg-orange-300 px-4 py-1 text-white rounded-sm'>Sign in</button>
                </ul>
            </nav>
        </div>
      <div>
        <h1 className='text-gray-300'>Made with Rizwan zahid</h1>
      </div>
    </div>
  )
}

export default Responsive
