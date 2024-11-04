import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

const TPHome = () => {
    const [selectedComponent, setSelectedComponent] = useState('dashboard');

    const handleSidebarItemClick = (component) => {
        setSelectedComponent(component);
    };
    let navigate=useNavigate()
    return (<>
        {
             !localStorage.getItem("teachertoken") ? navigate('/teacherlogin') : 
        <div className='flex'>
            <div className='w-[20%] h-full sticky top-0'>
                <Sidebar onItemClick={handleSidebarItemClick} selectedComponent={selectedComponent}/>
            </div>
            <div className='flex flex-col w-full border-l border-[#808080] relative'>
                <div>
                    <Navbar/>
                </div>
                <Outlet/>
            </div>
        </div>
}
        </>)
}

export default TPHome