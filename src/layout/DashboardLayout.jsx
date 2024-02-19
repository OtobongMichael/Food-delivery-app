import React, { useEffect } from 'react'
import Sidebar from '../Component/global/Sidebar'
import Navbar from '../Component/global/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import useAuthentication from '../hooks/UseAuthentication';
import { useCustomContext } from '../hooks/Context';

export default function DashboardLayout() {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user', 'access']);
    const { setUser } = useAuthentication()
    const { setActive } = useCustomContext()

    useEffect(() => {
        const cookieUser = cookies.user;
        const token = cookies.access;

        if (cookieUser) {
            setUser(cookieUser);
            navigate("/")
        } else {
            navigate('/login');
        }
        console.log("Use effect");
    }, [cookies, navigate]);


    useEffect(() => {
        setActive("Dashboard")
        navigate("/")
    }, [])


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
