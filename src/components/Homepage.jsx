import React from 'react'

import { Electrician } from '../assets/index.js';
import { services, offers } from '../constants/index.js';

const search = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>;

export default function Homepage() {
  return (
    <div className='w-full flex'>
      <div className='w-2/4 h-[756px] relative'>

        <img src={Electrician} className=" h-full w-full object-cover" alt="" />

        <div className='absolute flex flex-col items-center justify-center top-0 left-0 right-0 bottom-0 lg:w-[550px] xl:w-[650px] h-[250px] space-y-2 m-auto'>
          <h1 className=' w-[430px] h-[150px] font-poppins font-semibold text-white text-center text-[48px]'>Home services, on demand</h1>

          <form action="#" className='relative w-full'>
            <input type="text" className=' relative w-full h-[60px] text-[20px] px-16' placeholder="Search for a Service" name="search" />
            <button className='absolute top-0 bottom-0 my-auto ml-5 left-0' type="submit"><i>{search}</i></button>
          </form>

          <span className='w-full text-[17px] text-dimWhite'>Examples: Salon, Women's hair, Men's grooming & Many more.</span>
        </div>

      </div>

      <div className=' w-2/4'>

        <h1 className='h-1/6 w-full flex justify-center items-center text-[36px] font-semibold font-dynapuff text-white'>What are you looking for?</h1>

        <div className='h-3/6 w-full flex flex-col items-center'>

          <div className='w-[780px] grid grid-cols-4 gap-2 shadow-xl shadow-gray-800'>
            {
              services.map((service) => (
                <div key={service.id} className=' flex flex-col justify-center items-center w-44 h-[95px] mx-2 my-2 p-2'>
                  <img src={service.icon} className="w-[54px] h-[54px] object-cover mb-2" alt="" />
                  <span className=' w-full text-dimWhite font-medium font-poppins text-center'>{service.title}</span>
                </div>
              ))
            }
          </div>

        </div>

        <div className=' flex items-center h-2/6'>
          <div className=" mt-16 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {
              offers.map((offer) => (
                <div key={offer.id} className='inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 py-2 px-4 rounded-lg'>
                  <img className='w-[400px] h-[200px] object-cover' src={offer.icon} alt="" />
                </div>
              ))
            }
          </div>
        </div>

      </div>


    </div>
  )
}


/*

<div className='h-3/4 flex flex-col justify-center items-center bg-rose-200'>

          <h1 className=' text-[36px] font-semibold font-dynapuff text-white'>What are you looking for?</h1>

          <div className='w-[780px] flex flex-wrap'>
            {
              services.map((service) => (
                <div key={service.id} className=' flex flex-col justify-center items-center w-40 h-[95px] mx-2 my-2 bg-slate-300 p-4'>
                  <img src={service.icon} className="w-[54px] h-[54px] object-cover mb-1" alt="" />
                  <span className=' w-full text-dimWhite font-medium font-poppins text-center'>{service.title}</span>
                </div>
              ))
            }

          </div>

        </div>
        */