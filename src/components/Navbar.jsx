import React from 'react'

import { FaGooglePlay } from 'react-icons/fa';

import { navLinks } from '../constants';

const shop = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg>;

const location = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>;

const down = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>;

const search = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xl:h-6 xl:w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>;

export default function Navbar() {
  return (

    <div className=' w-full h-[60px] flex justify-center xl:justify-between items-center text-white navbar pt-10 xl:pt-0'>

      <h1 className=' hidden xl:block text-gradient font-extrabold font-dynapuff text-2xl'>Oye-Busy</h1>

      <div className='w-full px-2 sm:px-6 lg:w-[900px] xl:w-[1000px] flex justify-between items-center'>

        <div className='w-full flex flex-col items-center space-y-4 mt-5 shadow-lg shadow-gray-700 xl:shadow-none xl:mt-0'>

          <div className=' flex items-center space-x-3 xl:space-x-1'>
            {location}
            <span className='text-sm xl:text-[16px] text-dimWhite'>Sector-44, Real Estate, Sector-62, Gurugram</span>
            {down}
          </div>

          <form action="#" className='xl:hidden relative w-full'>
            <input type="text" className=' rounded-sm relative w-full h-[32px] lg:h-[44px] text-[14px] text-gray-700 px-8' placeholder="Search for a Service" name="search" />
            <button className='absolute top-0 bottom-0 my-auto ml-1 left-0' type="submit"><i>{search}</i></button>
          </form>

        </div>

      </div>

      <ul className=' hidden list-none xl:flex justify-end items-center flex-1'>

        {
          navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins text-cyan-200 font-semibold cursor-pointer text-[16px]
              ${index == navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))
        }
        <span className='mr-10'>{down}</span>
        <span className='mr-10'>{shop}</span>

      </ul>

      <div className='hidden bg-blue-gradient rounded-md px-1 py-1 xl:flex justify-around cursor-pointer items-center w-40'>
        <FaGooglePlay className=' text-black inline-block' />
        <span className=' text-black font-bold font-dynapuff'>Download App</span>
      </div>

    </div>
  )
}
