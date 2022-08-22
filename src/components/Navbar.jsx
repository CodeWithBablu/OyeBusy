import React from 'react'

import { FaGooglePlay } from 'react-icons/fa';

import { navLinks } from '../constants';

const shop = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg>;

const location = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>;

const down = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>;

export default function Navbar() {
  return (

    <div className=' w-full h-[60px] flex justify-between items-center text-white navbar'>

      <h1 className='text-gradient font-extrabold font-dynapuff text-2xl'>Oye-Busy</h1>

      <div className='lg:w-[800px] xl:w-[1300px] flex justify-between items-center'>
        <div className='hidden sm:flex'>
          {location}
          <span className='text-sm text-dimWhite'>1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301</span>
          {down}
        </div>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>

          {
            navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins text-cyan-200 font-semibold cursor-pointer text-[16px]
              ${index == navLinks.length - 1 ? "mr-0" : "mr-3 lg:mr-5 xl:mr-10"}`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          }
          <span className='mr-3 lg:mr-5 xl:mr-10'>{down}</span>
          <span className='mr-3 lg:mr-5 xl:mr-10'>{shop}</span>

        </ul>
      </div>

      <div className=' bg-blue-gradient rounded-md px-1 py-1 flex justify-around cursor-pointer items-center w-40'>
        <FaGooglePlay className=' text-black inline-block' />
        <span className=' text-black font-bold font-dynapuff'>Download App</span>
      </div>

    </div>
  )
}
