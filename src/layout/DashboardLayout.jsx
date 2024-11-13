import React, { useEffect } from 'react'
import Sidebar from '../Component/global/Sidebar'
import Navbar from '../Component/global/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import useAuthentication from '../hooks/UseAuthentication';
import { useCustomContext } from '../hooks/Context';
import NavLinksSlider from '../Component/NavLinksSlider';

export default function DashboardLayout() {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user', 'access']);
    const { setUser } = useAuthentication()
    const { setActive, showPanel, setShowPanel, panelType, setPanelType } = useCustomContext()

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



    const renderPanelContent = () => {
        switch (panelType) {
            case 'shoppingCart':
                return (
                    // Content for shopping cart
                    <div className='w-[350px] h-full'>
                  <NavLinksSlider />
                    </div>
                );
            case 'notifications':
                return (
                    // Content for notifications
                    <div className='w-[350px] h-full'>                        Notifications Content
                    </div>
                );
            case 'userProfile':
                return (
                    // Content for user profile
                    <div className='w-[350px] h-full'>                        User Profile Content
                    </div>
                );
            default:
                return null;
        }
    }


    return (
        <div className='grid grid-cols-12 h-screen'>
            <div className='col-span-2 h-full'>
                <Sidebar />
            </div>
            <div className='col-span-10 bg-[#FDFDFD] overflow-hidden'>
                <Navbar />
                {/* <Outlet /> */}
                <div className=' h-[90%] flex '>
                    <div className=' flex-1 overflow-y-auto'>
                        <Outlet />
                    </div>
                    {showPanel && (
                        <div className='w-[350px] border border-green-600' style={{ animation: showPanel ? 'slideIn 0.5s forwards' : 'slideOut 0.5s forwards' }}>
                            {renderPanelContent()}
                        </div>
                    )}
                </div>

            </div>

        </div>

    )
}
