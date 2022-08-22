import React from 'react'

const home = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
</svg>

const booking = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
</svg>;

const fav = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>;

const account = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>;

export default function BottomNavBar() {
  return (
    <div className='md:hidden fixed left-0 bottom-2 sm:bottom-8 w-full h-[50px] '>

      <div className='flex justify-around items-center rounded-md bg-gray-900 sm:p-2 mx-3'>
        <div className='flex flex-col justify-center items-center p-1 hover:scale-105 duration-150 ease-in-out'>
          {home}
          <span className=' text-sm sm:text-md text-red-400'>Home</span>
        </div>
        <div className='flex flex-col justify-center items-center p-1'>
          {booking}
          <span className=' text-sm sm:text-md text-cyan-200'>Bookings</span>
        </div>
        <div className='flex flex-col justify-center items-center p-1'>
          {fav}
          <span className=' text-sm sm:text-md text-cyan-200'>Favourite</span>
        </div>
        <div className='flex flex-col justify-center items-center p-1'>
          {account}
          <span className=' text-sm sm:text-md text-cyan-200'>Account</span>
        </div>
      </div>

    </div>
  )
}
