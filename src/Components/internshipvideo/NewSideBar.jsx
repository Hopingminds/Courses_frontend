import React from 'react'
import Courses from '../../Assets/Icons/CDcourse.svg'
import Assignment from '../../Assets/Icons/CDassignment.svg'
import Wishlist from '../../Assets/Icons/CDwishlist.svg'
import Certification from '../../Assets/Icons/CDcertification.svg'
import Stats from '../../Assets/Icons/CDstats.svg'
import Jobs from '../../Assets/Icons/CDjobs.svg'
import { useNavigate } from 'react-router-dom'

const InternshipNewSideBar = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-[#E2FFF1] mx-4 my-6 px-6 py-8 h-[80vh] rounded-3xl font-int font-medium text-[#1DBF73] flex flex-col gap-2 xsm:hidden sm:hidden'>
            <div onClick={() => navigate("/learning?tab=courses")} className='flex gap-2 items-center px-4 py-2 hover:rounded-xl hover:bg-[#F0FFF8] hover:font-bold hover:border hover:border-[#1DBF73] cursor-pointer'>
                <img className='w-6 h-6' src={Courses} alt="" />
                <p>My Courses</p>
            </div>
            <div onClick={() => navigate("/learning?tab=assignments")} className='flex gap-2 items-center px-4 py-2 hover:rounded-xl hover:bg-[#F0FFF8] hover:font-bold hover:border hover:border-[#1DBF73] cursor-pointer'>
                <img className='w-6 h-6' src={Assignment} alt="" />
                <p>Assignment</p>
            </div>
            <div onClick={() => navigate("/learning?tab=wishlist")} className='flex gap-2 items-center px-4 py-2 hover:rounded-xl hover:bg-[#F0FFF8] hover:font-bold hover:border hover:border-[#1DBF73] cursor-pointer'>
                <img className='w-6 h-6' src={Wishlist} alt="" />
                <p>Wishlist</p>
            </div>
            <div onClick={() => navigate("/learning?tab=certificate")} className='flex gap-2 items-center px-4 py-2 hover:rounded-xl hover:bg-[#F0FFF8] hover:font-bold hover:border hover:border-[#1DBF73] cursor-pointer'>
                <img className='w-6 h-6' src={Certification} alt="" />
                <p>Certification</p>
            </div>
            <div onClick={() => navigate("/learning?tab=stats")} className='flex gap-2 items-center px-4 py-2 hover:rounded-xl hover:bg-[#F0FFF8] hover:font-bold hover:border hover:border-[#1DBF73] cursor-pointer'>
                <img className='w-6 h-6' src={Stats} alt="" />
                <p>My Stats</p>
            </div>
            <div onClick={() => navigate("/learning?tab=job")} className='flex gap-2 items-center px-4 py-2 hover:rounded-xl hover:bg-[#F0FFF8] hover:font-bold hover:border hover:border-[#1DBF73] cursor-pointer'>
                <img className='w-6 h-6' src={Jobs} alt="" />
                <p>Job Offering</p>
            </div>
        </div>
    )
}

export default InternshipNewSideBar