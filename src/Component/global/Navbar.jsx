import React, { useState } from 'react';
import { MdOutlineTune, MdShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaRegCircleUser } from 'react-icons/fa6';
import { useCustomContext } from '../../hooks/Context';

export default function Navbar() {
    const { isOpen, setIsOpen , panelType,  setShowPanel , setPanelType } = useCustomContext(false);

    
    const togglePanel = (type) => {
        if (type === panelType) {
            setShowPanel(false);
            setPanelType(null);
        } else {
            setShowPanel(true);
            setPanelType(type);
        }
    }


    return (
        <div className='h-[10%] w-full items-center flex justify-between pl-8'>
            <div className='items-center flex rounded-[100px] w-[580px] border-[#D1D1D1] border text-[#D1D1D1]'>
                <div className='px-2 flex items-center w-full'>
                    <CiSearch size={24} /> <input type="text" className='outline-none bg-transparent placeholder:text-[#D1D1D1] w-full' placeholder='What can we help you find' />
                </div>
                <button className='flex items-center bg-primary text-white px-4 py-2 rounded-[100px]'>
                    <MdOutlineTune /> Filter
                </button>
            </div>

            <div className={`flex gap-10 text-[#D9D9D9] text-3xl ${panelType !== null ? "bg-[#F5EAD6]" : ""}  h-full items-center w-[350px] justify-center`}>
                     <p className={`cursor-pointer ${panelType === 'shoppingCart' ? 'text-[#CF9832]' : panelType === null ? 'text-[#666666]' : 'text-[#F5F5F5]'}`}>   <MdShoppingCart size={22} onClick={() => togglePanel('shoppingCart')} /></p>
                     <p className={`cursor-pointer ${panelType === 'notifications' ? 'text-[#CF9832]' : panelType === null ? 'text-[#666666]' : 'text-[#F5F5F5]'}`}> <IoIosNotificationsOutline size={22} onClick={() => togglePanel('notifications')}/></p>
                     <p className={`cursor-pointer ${panelType === 'userProfile' ? 'text-[#CF9832]' : panelType === null ? 'text-[#666666]' : 'text-[#F5F5F5]'}`}>  <FaRegCircleUser size={22} onClick={() => togglePanel('userProfile')}/></p>
                    </div>
        </div>
    )
}
