import React from 'react'
import { MdOutlineTune, MdShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaRegCircleUser } from 'react-icons/fa6';

export default function Navbar() {
    return (
        <div className=' h-[90px] items-center flex justify-around'>
            <div className='items-center flex rounded-[100px] w-[580px] border-[#D1D1D1] border text-[#D1D1D1]'>
<div className='px-2 flex items-center w-full'>
<CiSearch size={24}/> <input type="text" className=' outline-none bg-transparent  placeholder:text-[#D1D1D1] w-full' placeholder='What can we help you find'/>
</div>                <button className='flex items-center bg-primary text-white px-4 py-2 rounded-[100px]'>
                    <MdOutlineTune /> Filter
                </button>
            </div>

            <div className='flex gap-8 text-[#D9D9D9]'>
            <MdShoppingCart  size={22} />
            <IoIosNotificationsOutline  size={22}/>
            <FaRegCircleUser size={22} />
            </div>
        </div>
    )
}
