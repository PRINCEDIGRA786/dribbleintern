import React, { useContext, useEffect, useState } from 'react';
import { TbShoppingBagX } from "react-icons/tb";
import { MdMarkEmailRead } from "react-icons/md";
import { Fa500Px, FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { IoIosBasketball } from "react-icons/io";
import Usercon from '../contextapi/Usercontext';

export default function Verifypage() {
  const context = useContext(Usercon);
  const { getUser, userdata } = context;
  const [pic, setpic] = useState();
  const [email, setemail] = useState();

  return (
    <>
      <div className='flex justify-between items-center pt-2 px-4 md:px-10'>
        <h1 className='text-3xl font-cursive text-pink-500 font-extrabold'>
          dribble
        </h1>
        <ul className='hidden md:flex space-x-5'>
          <li>Inspiration</li>
          <li>Find Work</li>
          <li>Learn Design</li>
          <li>Go Pro</li>
          <li>Hire Designers</li>
        </ul>
        <div className='flex space-x-5'>
          <div className="relative">
            <input type="text" placeholder={` 🔍  Search`} className="py-1 px-2 bg-slate-200 pr-12 font-semibold rounded-lg border w-36 md:w-48 border-gray-300 focus:outline-none focus:ring focus:border-blue-500" />
          </div>
          <div className='pt-2'>
            <TbShoppingBagX className='h-6 w-6' />
          </div>
          <div className='flex space-x-2'>
            <img src={userdata.profilepic} className='h-8 w-8 rounded-full' />
            <button className='text-white font-semibold p-1 md:p-2 text-xs md:text-sm rounded-md bg-pink-500'>Upload</button>
          </div>
        </div>
      </div>

      <div className='text-center space-y-3 text-[#383838] pt-10 text-sm px-4 pb-8'>
        <h1 className='text-xl font-bold'>Please verify your email...</h1>
        <div className=' justify-center'>
          <MdMarkEmailRead className='h-28 mx-auto w-28 text-[#383838]' />
        </div>
        <h2>Please verify your email address. We've sent a confirmation email to:</h2>
        <h2 className=' text-md font-semibold'>{userdata.email}</h2>
        <h2 className=''>Click the confirmation link in that email to begin using Dribble.</h2>
        <p className='px-6 md:px-80'>Didn't receive the email? Check your Spam folder. It may have been caught by a filter. If you still don't see it, you can <span className=' text-pink-400'>resend the confirmation email</span></p>
        <h2>Wrong email address?<span className='text-pink-600'>Change it</span></h2>
      </div>

      {/* Footer */}

      <footer className="bg-gray-100 text-black py-6">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="mb-4 px-4 md:px-10 md:mb-0 w-full md:w-[25%]">
            <h3 className="text-xl font-cursive text-pink-400">Dribbble</h3>
            <p className="mt-2 text-sm font-semibold">Dribbls is the world's leading community for creatives to share, grow and get hired.</p>
            <div className='flex pt-3 space-x-5'>
              <IoIosGlobe className='h-5 w-5' />
              <FaTwitter className='h-5 w-5' />
              <FaFacebookSquare className='h-5 w-5' />
              <FaInstagram className='h-5 w-5' />
              <IoLogoPinterest className='h-5 w-5' />
            </div>
          </div>
          <div className="flex flex-wrap justify-between md:justify-start w-full md:w-[75%] px-4 md:px-20 text-xs">
      <ul className="mr-8 mb-4 md:mb-0 space-y-5">
        <li className="mb-2"><a href="#" className="text-black font-bold">For designers</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Go Pro!</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Explore design work</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Design blog</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Overtime podcast</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Playoffs</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Weekly Warm-up</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Refer a Friend</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Code of conduct</a></li>
      </ul>
      <ul className="mr-8 mb-4 md:mb-0 space-y-5">
        <li className="mb-2"><a href="#" className="font-bold">Hire designers</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Posta job opening</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Post a freelance project</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Search for designers</a></li>
        <li className="mb-2"><a href="#" className="font-bole">Design blog</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Brands</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Advertise with us</a></li>
      
      
      </ul>
      <ul className="mr-8 mb-4 md:mb-0 space-y-5 ">
        <li className="mb-2"><a href="#" className="text-black font-bold">Company</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">About</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Careers</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Support</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Media Kit</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Testimonials</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">API</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Terms of service</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Privacy policy</a></li>
      </ul>
      <ul className="mr-8 mb-4 md:mb-0 space-y-5">
        <li className="mb-2"><a href="#" className="text-black font-bold">Directories</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Design jobs</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Freelance designers for hire</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Tags</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Places</a></li>
        <li className="mb-2"><a href="#" className=" font-bold">Design assests</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Dribble marketplace</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Creative materials</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Fontspring</a></li>
      </ul>
      <ul className="mr-8 mb-4 md:mb-0 space-y-5">
        <li className="mb-2"><a href="#" className="text-black font-bold">Design REsources</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Freelancing</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Design hiring</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Design Portfolio</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Design Education</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Creative Process</a></li>
        <li className="mb-2"><a href="#" className="text-[#383838]">Design industry trends</a></li>
      </ul>
    </div>
          </div>
        

        <div className='pt-16 text-xs flex justify-between px-4 md:px-20'>
          <h1>@2023 Dribble,All rights reserved</h1>
          <h1 className='flex space-x-2'><span className='text-extrabold'>
            20,501,853
          </span>
            shots dribbled
          <IoIosBasketball className='text-pink-600 h-4 w-4' />
          </h1>
        </div>
      </footer>
    </>
  )
}
