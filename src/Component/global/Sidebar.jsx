import React from 'react'
import logoIcon from "../../assets/Images/logo (2).png"
import { LuLayoutDashboard } from "react-icons/lu";
import { MdEventSeat, MdHistory, MdOutlineInventory2 } from "react-icons/md";
import { IoIosList } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useCustomContext } from '../../hooks/Context';
import useAuthentication from '../../hooks/UseAuthentication';




const link = [
    {
        title: "Dashboard",
        link: "/",
        icon: <LuLayoutDashboard />
    },
    {
        title: "Inventory",
        link: "/inventory",
        icon: <MdOutlineInventory2 />
    },
    {
        title: "My Lists",
        link: "/myLists",
        icon: <IoIosList />
    }
    , {
        title: "Order Reports",
        link: "/orderReports",
        icon: <MdHistory />
    }
    , {
        title: "Reservations",
        link: "/reservations",
        icon: <MdEventSeat />
    }
    , {
        title: "Settings",
        icon: <IoSettingsOutline />
    }
    , {
        title: "My Account",
        link: "/myAccount",
        icon: <FaRegCircleUser />
    }

]

const endTabs = [
    {
        title: "Logout",
        icon: <CiLogout />
    }
]

export default function Sidebar() {

    const { active, setActive } = useCustomContext()
    const {logout} = useAuthentication()
    return (
        <div className='bg-[#FFFFFFF]  h-full p-2 flex flex-col justify-between py-4 '>
            <div>
                <img src={logoIcon} alt="" />
            </div>
            <div>
                {link.map((item, index) => (
                    <div className={`flex items-center  h-[40px] px-6 gap-3 rounded-[100px] ${active === item.title ? "bg-primary text-white" : " bg-none text-[#404040]"}`} onClick={() => setActive(item.title)}>
                        {item.icon}
                        <Link to={item.link} className=' font-[400] text-[14px]'>{item.title}</Link>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-5 '>
                <div className='w-full h-[137px] rounded-[8px] bg-gray-950 text-white '>
<div className='flex ml-[2rem] gap-5 mt-2 '><h3 className='font-bold font-mono'>EmiMish!</h3><h4>POS</h4></div>
<div className='flex gap-[10px] items-center ml-4 '>
    <p>Help Center</p><p>Support</p> <p>Legal</p>
</div>
<div className='mt-2  text-sm text font-sans font-thin '>
    <p>Lorem ipsum dolor sit amet  elit rus ey. aperiam laborum um  minima tempore omnis. </p>
</div>
                </div>
                <div>
                    {endTabs.map((item, index) => (
                        <div className='flex items-center cursor-pointer  h-[40px] px-6 gap-3 ' onClick={() => logout()}>
                            {item.icon}
                            <p className='text-[#404040] font-[400] text-[14px]'>{item.title}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
