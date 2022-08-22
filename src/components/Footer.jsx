import React from 'react'
import { FaGooglePlay } from 'react-icons/fa';

import {
  Women,
  Refer,
  Trademark,
  instagram,
  linkedin,
  google,
  facebook,
  twitter,
  quotes,
} from '../assets/index'

import { customerReviews } from '../constants/index.js'

const comment = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
</svg>;


export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center w-full lg:p-10 bg-primary'>

      <div className=' flex items-center justify-around w-full xl:w-[1730px] p-5 xl:h-[420px] bg-slate-800'>
        <img src={Women} className=" w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] xl:w-[420px] xl:h-[420px] object-cover rounded-full p-4" alt="" />
        <div className='flex flex-col pl-10 justify-center xl:w-[800px] xl:h-[360px] rounded-xl '>
          <h1 className=' text-sm font-normal sm:font-semibold sm:text-xl md:text-2xl lg:text-4xl  font-poppins text-cyan-400'>Why People Choose Us</h1>
          <ul className='sm:pl-10 list-disc text-dimWhite text-[12px] lg:text-xl mt-5 font-poppins sm:font-medium'>
            <li>Affordable Rates</li>
            <li>30 days Srevice guarantee</li>
            <li>On time service</li>
            <li>Verified Professionals</li>
            <li>Excellent Service</li>
          </ul>
        </div>
      </div>

      <div className=' w-full xl:w-[1450px] h-[340px] flex flex-col items-center mt-10'>

        <h1 className=' my-10 text-white text-xl sm:text-4xl font-dynapuff font-semibold'>What Our Customer Say</h1>
        <div className=' flex items-center w-full h-full overflow-x-scroll scroll  scroll-smooth scrollbar-hide'>
          {
            customerReviews.map((review) => (
              <div className=' inline-block px-3 xl:px-6 hover:scale-105 duration-200 ease-in-out cursor-pointer'>
                <div key={review.id} className=' w-[300px] h-[190px] rounded-md shadow-lg bg-gray-800 shadow-cyan-200'>
                  <div className=' flex flex-col p-2'>
                    <span className='p-2'>{comment}</span>
                    <span className=' pl-5 text-[14px] font-poppins font-medium  text-white'>{review.feedback}</span>
                    <span className=' pl-5 pt-4 text-[14px] font-mono font-medium text-sky-400 '>{review.name}</span>
                  </div>
                </div>
              </div>

            ))
          }
        </div>

      </div>

      <div className='mt-5 sm:mt-12'>
        <img src={Refer} alt="" />
      </div>

      <div className='mt-5 mb-20 sm:my-20'>
        <img src={Trademark} alt="" />
      </div>

      {/* //// Footer */}
      <div className='hidden md:block w-full'>

        <div className='flex p-10 justify-between xl:justify-around bg-gray-800'>
          <h2 className=' w-44 text-md text-cyan-300 font-poppins font-semibold'>Related Services</h2>
          <div className='flex flex-wrap space-x-3 w-full xl:w-[1280px] h-[50px] '>

            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Electrician</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />

            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Plumber</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">carpenter</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">wiring</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Pest control</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Filler</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Animate</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">pop</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Electrician</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Electrician</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Electrician</a>

          </div>
        </div>

        <div className='flex p-10 justify-between xl:justify-around bg-gray-800'>
          <h2 className=' w-44 text-md text-cyan-300 text-md font-poppins font-semibold'>Top Location</h2>
          <div className='flex flex-wrap text-left space-x-3 xl:w-[1280px] h-[50px] '>

            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Pune</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Mumbai</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Gurgaon</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Noida</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Greater Noida</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Ghaziabad</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Delhi</a>
            <hr className=' bg-dimWhite border-x-2 h-5 rounded-xl' />
            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Farihabad</a>
          </div>
        </div>

        <div className='flex pt-10 justify-center items-center bg-gray-800'>

          <div className='flex justify-center items-center text-left space-x-4 lg:space-x-8 xl:space-x-16 w-[1280px] h-[50px] '>

            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">About Us</a>

            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Near Me</a>

            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Blog</a>

            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Careers</a>

            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Terms & Conditions</a>

            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Privacy Policy</a>

            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Offer & Gift Cards</a>

            <a className=' text-md text-gray-200 font-poppins font-medium hover:scale-105 duration-150 ease-in-out' href="">Contact Us</a>
          </div>
        </div>

        <div className='flex pt-10 justify-center items-center bg-gray-800'>

          <div className='flex w-[500px] h-[100px] text-left space-x-16  '>

            <div className=' text-white flex flex-col'>
              <h2 className=' text-lg text-cyan-300 font-semibold font-dynapuff mb-2'>Contact Us</h2>
              <span>Phone : +91 9990001089</span>
              <span>Email : support@oyebusy</span>
            </div>

            <div className=' text-white flex flex-col'>
              <h2 className=' text-lg text-cyan-300 font-semibold font-dynapuff mb-4'>Download Oyebusy App</h2>
              <div className='rounded-md px-1 py-1 flex justify-around cursor-pointer items-center w-44 h-10 hover:scale-105 duration-200 ease-in-out'>
                <img src={google} className="w-40 object-cover" alt="" />
              </div>
            </div>

          </div>

        </div>

        <div className=' flex flex-col items-center bg-gray-800 p-10'>

          <div className='py-12 flex w-full justify-center space-x-6'>
            <img className=' w-10 h-10 hover:scale-105 duration-200 ease-in-out' src={instagram} alt="" />
            <img className=' w-10 h-10 hover:scale-105 duration-200 ease-in-out' src={facebook} alt="" />
            <img className=' w-10 h-10 hover:scale-105 duration-200 ease-in-out' src={twitter} alt="" />
            <img className=' w-10 h-10 hover:scale-105 duration-200 ease-in-out' src={linkedin} alt="" />
          </div>

          <span className=' text-white'>@ 2023 Oyebusy Technologies Pvt. Ltd</span>

        </div>




      </div>

    </div>
  );
}
