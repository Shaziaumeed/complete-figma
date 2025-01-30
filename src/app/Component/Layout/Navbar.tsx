"use client"
import { useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
const Navbar = () => {
const [isClick,setClick] = useState(false)
const toggleNav = () =>{
  setClick(!isClick)
}
  return (
    <div>
       <header>
            <nav className=' justify-between flex bg-[#101010] h-[90px] text-white px-20 w-full mx-auto max-w-[1440px] '>
                  <div className='flex  pt-[20px]'>
                    <p className='text-3xl font-bold md:text-4xl '>audiophile</p>
                </div>
                <div className='md:flex gap-8 pt-8 hidden'>
                <h3>HOME</h3>
            <h3 className='text-[#D87D4A]'>HEADPHONES</h3>
            <h3>SPEAKERS</h3>
            <h3>EARPHONES</h3>
                </div>
                <div className='pt-9 text-2xl md:flex hidden  '>
                <FaCartShopping />
                </div>
                
              <div className='md:hidden flex items-center'>
                <button className='inline-flex items-center justify-center p-2  rounded-md text-white md:text-white
                hover:text-white focus:outline-none focus:ring-inset focus:ring-white' onClick={toggleNav}
                >
{isClick ? (
<svg className='h-6 w-6'
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox='0 0 24 24'
stroke='currentColor'
>
  <path
  strokeLinecap='round'
  strokeLinejoin='round'
  strokeWidth={2}
  d='M6 18L18 6M6 6l12 12'
  />
</svg>
):(
  <svg className='h-6 w-6'
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox='0 0 24 24'
stroke='currentColor'
>
  <path
  strokeLinecap='round'
  strokeLinejoin='round'
  strokeWidth={2}
  d='M4 6h16M4 12h16m-7 b 6h7'
  />
  </svg>
)}
                </button>

              </div>
            </nav>
        </header>
         <hr/>
        {isClick && (
          <div>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 md:hidden'>
<p>HOME</p>
<p className='text-[#D87D4A]'>HEADPHONES</p>
<p>SPEAKERS</p>
<p>EARPHONES</p>
            </div>
          </div>
          
        )}
    </div>
  )
}

export default Navbar



