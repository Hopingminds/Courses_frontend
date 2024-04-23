import React from 'react'
import { IoIosSettings } from "react-icons/io";

const ManageJobsHeader = () => {
  return (
    <div className='flex justify-between'>
        <div>
            <p className='font-pop font-semibold text-[30px]'>Manage Jobs and Responses</p>
        </div>
        <div className='flex items-center gap-4'>
            <div className='bg-[#1FC074] w-[120px] px-3 py-1 rounded-md'>
                <select name="" id="" className='bg-[#1FC074] w-full text-white text-[20px]'>
                    <option className='bg-white text-black w-[150px]' value="" selected>A</option>
                    <option className='bg-white text-black w-[150px]' value="">B</option>
                    <option className='bg-white text-black w-[150px]' value="">C</option>
                    <option className='bg-white text-black w-[150px]' value="">D</option>
                </select>
            </div>
            <IoIosSettings fontSize={'1.75rem'} className='text-gray-400' />
        </div>
    </div>
  )
}

export default ManageJobsHeader