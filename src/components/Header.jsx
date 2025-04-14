import React from 'react'
import { Picture1, Picture2, Picture3, Picture4, Picture5 } from "../images";

const images = [Picture1, Picture2, Picture3, Picture4, Picture5];

const Header = ({ title, image, type }) => {
  return (
    <div className='w-full h-[100vh]'>
      <div className='relative w-full h-full'>
        <img src={image ?? images[Math.floor(Math.random() * images.length)]} alt='Hero' className='w-full h-full object-cover' />
      </div>
      <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4'>
        <h1 className='text-white text-4md:text-5xl font-bold text-center'>{title}</h1>
        {type === 'home' && (
          <p className='text-sm mt text-center text-purple-400 bg-[#00000090] px-6 py-4 rounded-full'>
            Welcome to your kitchen companion! Recipe Rover helps you cook with ease! <br className='hidden md:block' /> Discover what flavors you're craving and let Recipe Rover guide you.
          </p>
        )}
      </div>
    </div>
  )
}

export default Header;






