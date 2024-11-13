import React from 'react'
import images6 from '../assets/Images/unsplash_kcA-c3f_3FE.png';
import { IoArrowForwardSharp } from "react-icons/io5";
import FeaturedProductCarousel from '../Component/FeaturedProductCarousel';
import Recent from "../Component/Recent";
import Table from "../Component/Table";
import { useCustomContext } from '../hooks/Context';



export default function Dashboard() {
  const {open} = useCustomContext
  return (
  <div>
      <div>
      <p className='text-3xl ml-8'>Welcome back!  Michael👍</p>

      <div className='bg-gradient-to-r from-[#F5EAD6] overflow-hidden to-[#E7CB98] w-[50vw] h-[26vh] mt-8 ml-8 rounded-3xl relative'>
        <svg width="62" height="96" viewBox="0 0 62 96" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 left-0 z-10'>
          <circle cx="12" cy="50" r="50" fill="#FCFCFC" fill-opacity="0.4" />
        </svg>
        <svg width="62" height="77" viewBox="0 0 62 77" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 left-0'>
          <circle cx="12" cy="50" r="50" fill="#CF9832" />
        </svg>
        <svg width="99" height="47" viewBox="0 0 99 47" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 right-0 z-10'>
          <circle cx="50" cy="65" r="50" fill="#CF9832" />
          <circle cx="63" cy="50" r="50" fill="#FCFCFC" fill-opacity="0.4" />
        </svg>
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-[10px] left-[200px] z-10'>
          <circle cx="8" cy="8" r="8" fill="#EBD4AC
"/>
        </svg>
        <svg width="20" height="12" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 left-[370px] z-10'>
<circle cx="8" cy="8" r="8" fill="#EBD4AC"/>
</svg>
<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-[60px] left-[450px] z-10 '>
<circle cx="8" cy="8" r="8" fill="#EBD4AC"/>
</svg>
<div className='flex'>
<div className='mt-10'>
<h2 className='ml-6 text-xl font-bold'>
Let’s order food and groceries at McFestine’s
</h2>
<p className='ml-6 mt-4 absolute z-10  text-[#666666]'>
The products are guaranteed to be authentic,<br />
delicious food and of course healthy.
</p>
</div>
<img src={images6} alt="unsplash_kcA-c3f_3FE.png" className='mt-3 ml-[8rem]' />
</div>

      </div>

      <div className='flex ml-8 mt-6 font-semibold'>
        <h3>Featured Products</h3>
        <div className='flex ml-[32rem] text-[#CF9832]'>
          <button className='mr-3'>Go to store</button>
          <IoArrowForwardSharp className='mt-1'/>
        </div>
      </div>
      <FeaturedProductCarousel/>
      <Recent/>
      <Table/>
    </div>

    <div>

    </div>
  </div>
    
  )
  
}

