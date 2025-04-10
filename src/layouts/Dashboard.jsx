import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
    return (
        <div className="flex flex-row ">
            <Sidebar />
            <div className=" w-full px-7 pt-7 pb-20 sm:mx-auto  shadow-2xl   md:w-[42rem]  lg:w-[57rem]  xl:w-[72rem]  min-h-screen">
                <Outlet />
            </div>
        </div>
    )
}
