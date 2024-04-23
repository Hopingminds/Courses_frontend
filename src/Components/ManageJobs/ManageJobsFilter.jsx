import React from 'react'
import { IoFilterOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const ManageJobsFilter = () => {
  return (
    <div className='sticky top-0'>
        <div className='flex items-center gap-4 border-b py-2'>
            <IoFilterOutline fontSize={'1.5rem'} className='text-gray-500' />
            <p className='font-pop text-gray-700 font-medium'>Filters</p>
        </div>
        <div className='w-full py-6 border-b'>
            <div className='flex items-center justify-between '>
                <p className='font-pop text-gray-700 font-medium text-[14px]'>Jobs filtered by</p>
                <p className='font-pop text-blue-600 text-[12px] cursor-pointer'>Clear all</p>
            </div>
            <div className='flex flex-wrap py-2'>
                <div className='flex items-center gap-1 bg-[#f2faff] border border-[#d9eefc] rounded-full w-max px-2 py-1 m-1'>
                    <p className='font-pop text-gray-700 font-medium text-[12px]'>Active Jobs</p>
                    <RxCross2 fontSize={'1rem'} className='text-gray-500 cursor-pointer'/>
                </div>
            </div>
        </div>
        <div className='w-full py-6 border-b'>
            <div className='flex items-center bg-white px-3 py-2 border rounded-md'>
                <input className='w-full outline-none text-[14px]' type="text" placeholder='Search by Title/Ref Code/Job ID' />
                <IoSearchOutline fontSize={"1.4rem"} />
            </div>
        </div>
        <div className='w-full py-6 border-b'>
            <div className='flex items-center justify-between '>
                <p className='font-pop text-gray-700 font-medium text-[14px]'>Job status</p>
                <FaChevronDown fontSize={"1rem"} className='text-gray-500 cursor-pointer' />
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor="activejobs" className='flex justify-between py-2'>
                    <div className='flex items-center gap-x-2'>
                        <input className='w-4 h-4' type="checkbox" id='activejobs' />
                        <label htmlFor="activejobs" className='select-none text-[13px] text-gray-600'>Active Jobs</label>
                    </div>
                    <div>
                        <p className='select-none text-[13px] text-gray-600'>1</p>
                    </div>
                </label>
                <label htmlFor="closedjobs"  className='flex justify-between py-2'>
                    <div className='flex items-center gap-x-2'>
                        <input className='w-4 h-4' type="checkbox" id='closedjobs' />
                        <label htmlFor="closedjobs" className='select-none text-[13px] text-gray-600'>Closed Jobs</label>
                    </div>
                    <div>
                        <p className='select-none text-[13px] text-gray-600'>1</p>
                    </div>
                </label>
                <label htmlFor="expiredjobs" className='flex justify-between py-2'>
                    <div className='flex items-center gap-x-2'>
                        <input className='w-4 h-4' type="checkbox" id='expiredjobs' />
                        <label htmlFor="expiredjobs" className='select-none text-[13px] text-gray-600'>Expired Jobs</label>
                    </div>
                    <div>
                        <p className='select-none text-[13px] text-gray-600'>1</p>
                    </div>
                </label>
            </div>
        </div>
        <div className='w-full py-6 border-b'>
            <div className='flex items-center justify-between '>
                <p className='font-pop text-gray-700 font-medium text-[14px]'>Job posted by</p>
                <FaChevronDown fontSize={"1rem"} className='text-gray-500 cursor-pointer' />
            </div>
            <div className='py-4'>
                <div className='flex items-center bg-white px-3 py-2 border rounded-md'>
                    <input className='w-full outline-none text-[14px]' type="text" placeholder='Search by Username' />
                    <IoSearchOutline fontSize={"1.4rem"} />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor="me" className='flex justify-between py-2'>
                    <div className='flex items-center gap-x-2'>
                        <input className='w-4 h-4' type="checkbox" id='activejobs' />
                        <label htmlFor="me" className='select-none text-[13px] text-gray-600'>Me</label>
                    </div>
                    <div>
                        <p className='select-none text-[13px] text-gray-600'>12</p>
                    </div>
                </label>
            </div>
        </div>
    </div>
  )
}

export default ManageJobsFilter