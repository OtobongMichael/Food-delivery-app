import React from 'react'
import Sidebar from '../Component/global/Sidebar'
import Navbar from '../Component/global/Navbar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
    return (
        <div className='grid grid-cols-12 h-screen'>
            <div className='col-span-2 h-full'>
                <Sidebar />
            </div>
            <div className='col-span-10 bg-[#FDFDFD]'>
                <Navbar />
                <Outlet />     
            </div> 
                
        </div>
    )
}
