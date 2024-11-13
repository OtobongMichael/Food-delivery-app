import React from 'react'
import images6 from '../assets/Images/Logo (5).png';
import images7 from '../assets/Images/Logo (6).png';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function Inventory() {
  return (
    <div>
      <div className='flex gap-4'>
        <div>
          <div className='flex gap-3 text-[#CF9832]'>
            <img src={images6} alt="Logo(5).png" />
            <p>Resturant</p>
          </div>
          <div className='mt-2'>
            <svg width="200" height="4" viewBox="0 0 200 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="4" rx="2" fill="#CF9832" />
            </svg>
          </div>
        </div>
        <div className='flex gap-3 ml-6'>
          <img src={images7} alt="Logo(6).png" className='h-7' />
          <p>Supermarket</p>
        </div>

      </div>
      <div>

        <div className=' flex mt-4 gap-8'>
          <button className='bg-[#CF9832] px-6 py-[5px] rounded-full text-white'>All</button>
          <button className='px-6 py-[5px] rounded-full text-[#D1D1D1] border border-[#D1D1D1]'>Soup</button>

          <button className='px-6 py-[5px] rounded-full text-[#D1D1D1] border border-[#D1D1D1]'>Salads</button>

          <button className='px-6 py-[5px] rounded-full text-[#D1D1D1] border border-[#D1D1D1]'>Bakery products</button>

          <button className='px-6 py-[5px] rounded-full text-[#D1D1D1] border border-[#D1D1D1]'>Pasta</button>

          <button className='px-6 py-[5px] rounded-full text-[#D1D1D1] border border-[#D1D1D1]'>Vegies</button>

          <button className='px-6 py-[5px] rounded-full text-[#D1D1D1] border border-[#D1D1D1]'>Fruits</button>

          <button className='px-6 py-[5px] rounded-full text-[#D1D1D1] border border-[#D1D1D1]'>Pasta</button>

          <button className='px-6 py-[5px] rounded-full text-[#D1D1D1] border border-[#D1D1D1]'>Vegies</button>


          <div className='mt-[7px]'>
            <button className='bg-[#F7F7F7] rounded-3xl w-6 h-6'><MdKeyboardArrowLeft className='text-[#D1D1D1] ml-1'/></button>
            <button className='bg-[#CF9832] rounded-3xl w-6 h-6 ml-2'><MdKeyboardArrowRight className='text-[#F5F5F5] ml-1'/></button>
          </div>

        </div>

        <div className='flex justify-between mt-4'>
          <h4 className='ml-1 text-[#1A1A1A] font-bold'>Soup menu</h4>
          <h5 className='mr-[5rem] text-[#CF9832] font-semibold'>See all</h5>

        </div>
        <div>
          <div>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.94993 0.763282L5.73743 1.55078L2.28743 5.00078L5.73743 8.45078L4.94993 9.23828L0.712427 5.00078L4.94993 0.763282Z" fill="#D1D1D1" />
            </svg>

          </div>
          <div>

          </div>

        </div>
      </div>

    </div>
  )
}
