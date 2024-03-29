import React from 'react'

import { deliveryman, Assured, Shavenman } from '../assets/index.js'
import { premiumServices, peoples, cleaningServices, elecServices, pluServices, carServices } from '../constants/index.js';


const left = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
</svg>;

const right = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>;

export default function Services() {

  function slideLeft() {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 200;
  }

  function slideRight() {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 200;
  }

  return (
    <div className='w-full bg-white'>

      <div className='w-full flex flex-col justify-center items-center'>

        <h1 className=' mt-16 font-poppins font-semibold text-[36px] w-full text-[#025B5D] text-center'>Trending Services</h1>
        <span className=' w-full text-center text-[18px] font-poppins'>Premium Home Services</span>

        <div className='flex flex-wrap w-full justify-center xl:grid grid-cols-5 xl:w-[1350px] xl:mt-32'>
          {
            premiumServices.map((service) => (
              <div key={service.id} className=" mt-20 flex flex-col justify-end px-2 xl:px-10 items-center relative shadow-2xl rounded-xl w-[170px] h-[100px] xl:w-[225px] xl:h-[140px]" >
                <img src={service.icon} className=" absolute -top-14 right-0 left-0 mx-auto w-[120px] h-[100px] xl:w-[200px] xl:h-[140px] object-cover" alt="" />
                <span className=' mb-1 text-center w-full'>{service.title}</span>
              </div>
            ))
          }
        </div>

      </div>

      <div className='w-full flex flex-col justify-center items-center'>

        <h1 className=' mt-16 font-poppins font-semibold text-[36px] w-full text-[#025B5D] text-center'>Same Day Services</h1>
        <span className=' w-full text-center text-[18px] font-poppins'>Premium Home Services</span>

        <div className='flex flex-wrap w-full justify-center space-x-4 xl:grid grid-cols-5 xl:w-[1480px] xl:mt-40'>
          {
            peoples.map((people) => (
              <div key={people.id} className=" flex flex-col justify-end mt-28 xl:px-10 items-center relative shadow-2xl shadow-cyan-500 rounded-xl w-[120px] h-[140px] xl:w-[220px] xl:h-[230px] bg-blue-gradient" >
                <img src={people.icon} className=" absolute -top-20 xl:-top-28 right-0 left-0 mx-auto w-[100px] h-[150px] xl:w-[190px] xl:h-[250px] object-cover" alt="" />
                <span className=' mb-2 xl:mb-4 text-center text-[16px] xl:text-[22px] font-semibold font-poppins w-full'>{people.title}</span>
              </div>
            ))
          }
        </div>

      </div>

      <div className='mt-16 xl:mt-40 p-2 xl:p-0  w-full flex justify-center items-center'>
        <div className='flex justify-around items-center w-full h-[150px] lg:w-[950px] xl:h-[200px] bg-[#ECECEE] rounded-lg shadow-xl shadow-gray-600'>

          <div className=' w-3/4 p-4 xl:p-10'>
            <h1 className=' text-[#025B5D] font-semibold text-[20px] sm:text-[36px] '>100% Safe Services</h1>

            <div className='flex text-[12px] h-[80px] sm:text-lg xl:w-[500px] xl:h-[80px]'>
              <ul className='flex flex-col w-1/2 list-disc justify-around lg:px-6 py-2'>
                <li>Masks</li>
                <li>Gloves</li>
              </ul>
              <ul className='flex flex-col w-1/2 list-disc justify-around lg:px-6 py-2'>
                <li>Temperature Checks</li>
                <li>Sanitized Tools</li>
              </ul>
            </div>

          </div>

          <img className=' w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full xl:w-[200px] xl:h-[200px] xl:rounded-lg object-cover' src={deliveryman} alt="" />

        </div>
      </div>

      <div className='w-full flex flex-col justify-center items-center'>

        <h1 className=' mt-16 font-poppins font-semibold text-[36px] w-full text-[#025B5D] text-center'>Professional Cleaning Services</h1>
        <span className=' w-full text-center text-[18px] font-poppins'>Premium Home Services</span>

        <div className='flex items-center w-full xl:w-[1380px] h-[320px] mt-10'>
          <div className='flex items-center w-full h-full overflow-x-scroll scroll whitespace-wrap scroll-smooth scrollbar-hide'>
            {
              cleaningServices.map((service) => (
                <div key={service.id} className='inline-block px-2 xl:px-6 hover:scale-105 duration-200 ease-in-out cursor-pointer'>
                  <div className=" flex flex-col items-center w-[300px] h-[250px]">
                    <div className=' w-[280px] h-[150px] bg-blue-gradient mb-4'></div>
                    <span className=' mb-2 text-center text-[16px] font-semibold font-poppins w-full'>{service.title}</span>
                    <span className=' text-[14px] '>{service.description}</span>
                  </div>
                </div>

              ))
            }
          </div>
        </div>

      </div>

      <div className='w-full flex flex-col justify-center items-center'>

        <h1 className=' mt-16 font-poppins font-semibold text-[36px] w-full text-[#025B5D] text-center'>Most Used Services</h1>
        <span className=' w-full text-center text-[18px] font-poppins'>Premium Home Services</span>

        <div className='flex items-center w-full xl:w-[1380px] h-[320px] mt-10'>
          <div className='flex items-center w-full h-full overflow-x-scroll scroll whitespace-wrap scroll-smooth scrollbar-hide'>
            {
              cleaningServices.map((service) => (
                <div key={service.id} className='inline-block px-2 xl:px-6 hover:scale-105 duration-200 ease-in-out cursor-pointer'>
                  <div className=" flex flex-col items-center w-[300px] h-[250px]">
                    <div className=' w-[280px] h-[150px] bg-blue-gradient mb-4'></div>
                    <span className=' mb-2 text-center text-[16px] font-semibold font-poppins w-full'>{service.title}</span>
                    <span className=' text-[14px] '>{service.description}</span>
                  </div>
                </div>

              ))
            }
          </div>
        </div>

      </div>

      <div className=' w-full -mt-24 sm:-mt-16 lg:mt-20'>
        <img src={Assured} className=" w-full h-[320px] " alt="" />
      </div>

      <div className='w-full flex flex-col justify-center items-center'>

        <h1 className=' -mt-10 sm:-mt-5 lg:mt-5 font-poppins font-semibold text-[36px] w-full text-[#025B5D] text-center'>Trending Services</h1>
        <span className=' w-full text-center text-[18px] font-poppins'>Premium Home Services</span>

        <div className='flex items-center w-full xl:w-[1380px] h-[320px] mt-10'>
          <div className='flex items-center w-full h-full overflow-x-scroll scroll whitespace-wrap scroll-smooth scrollbar-hide'>
            {
              cleaningServices.map((service) => (
                <div key={service.id} className='inline-block px-2 xl:px-6 hover:scale-105 duration-200 ease-in-out cursor-pointer'>
                  <div className=" flex flex-col items-center w-[300px] h-[250px]">
                    <div className=' w-[280px] h-[150px] bg-blue-gradient mb-4'></div>
                    <span className=' mb-2 text-center text-[16px] font-semibold font-poppins w-full'>{service.title}</span>
                    <span className=' text-[14px] '>{service.description}</span>
                  </div>
                </div>

              ))
            }
          </div>
        </div>

      </div>


      <div className='hidden xl:flex justify-around items-center mt-12 lg:px-16 w-full h-[380px] bg-gradient-to-r from-[#f2bf35] to-[#F1BA29]'>
        <img src={Shavenman} className=" w-1/4 h-[380px] object-cover" alt="" />
        <div className=' flex flex-col items-center w-3/4 text-center'>
          <h1 className=' w-[950px] text-[50px] font-semibold font-poppins'>TRY OUR TRENDING SERVICES WITH UPTO 50% OFF!</h1>

          <div className=' space-x-4 mb-10'>
            <hr className=' inline-block w-32 rounded-xl h-2 bg-gray-800' />
            <span className=' text-[32px] font-poppins'>On any service you book</span>
            <hr className=' inline-block w-32 rounded-xl h-2 bg-gray-800' />
          </div>

          <button className='border border-y-black border-x-0 text-[22px] font-poppins font-semibold hover:scale-105 duration-300 ease-in-out '>Book A Service</button>

        </div>
      </div>

      <div className='w-full flex flex-col lg:flex-row justify-center items-center mt-5 xl:mt-32 space-x-4'>

        <div className='flex flex-col items-center w-full lg:w-[200px] h-[140px] '>
          <h1 className='font-poppins font-semibold text-[36px] w-full text-[#025B5D] text-center'>Electrician Services</h1>
          <span className=' text-center'>Premium Services</span>
        </div>

        <span
          onClick={slideLeft}
          className='hidden lg:flex justify-center items-center cursor-pointer hover:opacity-50 border-2 border-cyan-400 w-10 h-10  rounded-full'>{left}</span>

        {/* //// */}
        <div className='flex items-center w-full lg:w-[850px] xl:w-[1350px] h-[280px] lg:h-[320px]'>
          <div id='slider' className='flex items-center w-full h-full overflow-x-scroll scroll whitespace-wrap scroll-smooth scrollbar-hide'>
            {
              elecServices.map((service) => (
                <div key={service.id} className="inline-block px-6 hover:scale-105 duration-200 ease-in-out cursor-pointer" >

                  <div className='flex flex-col justify-end items-center relative shadow-2xl shadow-cyan-300 rounded-xl w-[200px] h-[150px]'>
                    <img src={service.icon} className="absolute -top-14 left-0 right-0 mx-auto w-[135px] h-[135px] object-cover" alt="" />

                    <div className='flex flex-col mb-2 items-center text-center w-[180px] h-[60px]'>
                      <span className='w-full text-center text-md fonmt-10 sm:-mt-5t-medium font-poppins'>{service.title}</span>
                      <span className='w-full text-center text-sm text-gray-500 font-poppins'>{service.desc}</span>
                    </div>

                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <span
          onClick={slideRight}
          className='hidden lg:flex justify-center items-center cursor-pointer hover:opacity-50 border-2 border-cyan-400 w-10 h-10  rounded-full'>{right}</span>

      </div>

      {/* Plumber Services //// */}
      <div className='w-full flex flex-col lg:flex-row justify-center items-center mt-5 xl:mt-32 space-x-4'>

        <div className='flex flex-col items-center w-full lg:w-[200px] h-[140px] '>
          <h1 className='font-poppins font-semibold text-[36px] w-full text-[#025B5D] text-center'>Plumber Services</h1>
          <span className=' text-center'>Premium Services</span>
        </div>

        <span
          onClick={slideLeft}
          className='hidden lg:flex justify-center items-center cursor-pointer hover:opacity-50 border-2 border-cyan-400 w-10 h-10  rounded-full'>{left}</span>

        {/* //// */}
        <div className='flex items-center w-full lg:w-[850px] xl:w-[1350px] h-[280px] lg:h-[320px]'>
          <div id='slider' className='flex items-center w-full h-full overflow-x-scroll scroll whitespace-wrap scroll-smooth scrollbar-hide'>
            {
              pluServices.map((service) => (
                <div key={service.id} className="inline-block px-6 hover:scale-105 duration-200 ease-in-out cursor-pointer" >

                  <div className='flex flex-col justify-end items-center relative shadow-2xl shadow-cyan-300 rounded-xl w-[200px] h-[150px]'>
                    <img src={service.icon} className="absolute -top-14 left-0 right-0 mx-auto w-[135px] h-[135px] object-cover" alt="" />

                    <div className='flex flex-col mb-2 items-center text-center w-[180px] h-[60px]'>
                      <span className='w-full text-center text-md fonmt-10 sm:-mt-5t-medium font-poppins'>{service.title}</span>
                      <span className='w-full text-center text-sm text-gray-500 font-poppins'>{service.desc}</span>
                    </div>

                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <span
          onClick={slideRight}
          className='hidden lg:flex justify-center items-center cursor-pointer hover:opacity-50 border-2 border-cyan-400 w-10 h-10  rounded-full'>{right}</span>

      </div>

      {/* Carpenter Services //// */}
      <div className='w-full flex flex-col lg:flex-row justify-center items-center mt-5 xl:mt-32 space-x-4'>

        <div className='flex flex-col items-center w-full lg:w-[200px] h-[140px] '>
          <h1 className='font-poppins font-semibold text-[36px] w-full text-[#025B5D] text-center'>Carpenter Services</h1>
          <span className=' text-center'>Premium Services</span>
        </div>

        <span
          onClick={slideLeft}
          className='hidden lg:flex justify-center items-center cursor-pointer hover:opacity-50 border-2 border-cyan-400 w-10 h-10  rounded-full'>{left}</span>

        {/* //// */}
        <div className='flex items-center w-full lg:w-[850px] xl:w-[1350px] h-[280px] lg:h-[320px]'>
          <div id='slider' className='flex items-center w-full h-full overflow-x-scroll scroll whitespace-wrap scroll-smooth scrollbar-hide'>
            {
              carServices.map((service) => (
                <div key={service.id} className="inline-block px-6 hover:scale-105 duration-200 ease-in-out cursor-pointer" >

                  <div className='flex flex-col justify-end items-center relative shadow-2xl shadow-cyan-300 rounded-xl w-[200px] h-[150px]'>
                    <img src={service.icon} className="absolute -top-14 left-0 right-0 mx-auto w-[135px] h-[135px] object-cover" alt="" />

                    <div className='flex flex-col mb-2 items-center text-center w-[180px] h-[60px]'>
                      <span className='w-full text-center text-md fonmt-10 sm:-mt-5t-medium font-poppins'>{service.title}</span>
                      <span className='w-full text-center text-sm text-gray-500 font-poppins'>{service.desc}</span>
                    </div>

                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <span
          onClick={slideRight}
          className='hidden lg:flex justify-center items-center cursor-pointer hover:opacity-50 border-2 border-cyan-400 w-10 h-10  rounded-full'>{right}</span>

      </div>

    </div>
  )
}

