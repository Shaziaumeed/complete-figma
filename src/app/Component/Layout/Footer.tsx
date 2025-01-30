import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';  
import { IoLogoTwitter } from 'react-icons/io';
const Footer = () => {
  return (
    <>
      <div className='bg-black'>
        <div className='container grid grid-cols-1 md:grid-cols-2  mt-20'>
          <div className='grid md:grid-cols-4 '>
            <h1 className='text-white text-2xl font-bold mt-16 '>audiophile</h1>
          </div>
          <div className='grid md:grid-cols-4  text-white font-bold mt-10'>
            <h3>HOME</h3>
            <h3 className='text-[#D87D4A]'>HEADPHONES</h3>
            <h3>SPEAKERS</h3>
            <h3>EARPHONES</h3>
          </div>
          <div className='text-gray-400 mt-9 '>
            <p>Audiophile is an all in one stop to fulfill your {'audio needs. We,re}'} a small team of music lovers and sound specialists who are devoted to helping get the most out of personal{' audio. Come '}and visit our demo {'facility - were open 7 days a week.'}</p>
            <p className='mt-10'>{'Copyright 2021.'} All Rights Reserved</p>
          </div>
          <div className='flex space-x-6 mt-9 justify-center items-center lg:ml-96'>
            <FaFacebookSquare size={30} className="text-white" />
            <IoLogoTwitter size={30} className="text-white" />
            <FaInstagramSquare size={30} className="text-white" />
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer;






