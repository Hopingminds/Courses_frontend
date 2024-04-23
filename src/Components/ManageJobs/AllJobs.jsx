import React from 'react'
import { MdRefresh } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { BsThreeDotsVertical } from "react-icons/bs";

const AllJobs = () => {
  return (
    <div>
        {/* Heading */}
        <div className='text-gray-500 flex justify-between items-center px-4 py-2 border bg-white mt-4 rounded-md'>
            <div className='flex items-center gap-8'>
                <div>
                    <label htmlFor="selectall" className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="selectall" className='w-4 h-4' />
                        <p className='text-[13px]'>Select All</p>
                    </label>
                </div>
                <div className='flex items-center gap-1'>
                    <MdRefresh fontSize={'1.5rem'} />
                    <p className='text-[13px]'>Refresh</p>
                </div>
                <div className='flex items-center gap-1'>
                    <FcCollaboration fontSize={'1.5rem'} className='text-gray-500'/>
                    <p className='text-[13px]'>Collaborate</p>
                </div>
                <div className='flex items-center gap-1'>
                    <IoIosCloseCircleOutline  fontSize={'1.5rem'} className='text-gray-500'/>
                    <p className='text-[13px]'>Close</p>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2'>
                    <p className='text-[13px]'>Sort by:</p>
                    <select name="" id="" className='outline-none text-gray-800 text-[13px]'>
                        <option value="">Posted Date</option>
                        <option value="">Job title (A-&gt;Z)</option>
                    </select>
                </div>
            </div>
        </div>
        {/* Content */}
        <div className='mt-6 flex flex-col gap'>
            {/* 1 */}
            <div className='bg-white rounded-lg shadow-md my-2 overflow-hidden'>
                <div className=' px-4 py-2 mt-2 w-full'>
                    <div className='flex w-full'>
                        <div className='flex gap-2 w-full'>
                            <input type="checkbox" name="" id="" className='w-4 h-4'/>
                            <div className='grid grid-cols-[2fr,1fr,1fr] w-[60%]'>
                                <div>
                                    <p className='font-pop font-medium text-[14px]'>Hiring Director/VP HR</p>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Delhi/NCR +1</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-1'>
                                        <p className='font-pop font-medium text-[14px]'>2345</p>
                                        <p className='font-pop font-medium text-[10px] bg-[#1FC074] text-white px-1 rounded-full'>345 new</p>
                                    </div>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Total</p>
                                </div>
                                <div>
                                    <p className='font-pop font-medium text-[14px]'>0</p>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Shortlisted</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <button className='border border-[#1FC074] text-[#1FC074] text-[13px] px-2 hover:bg-[#1fc07552]'>Repost</button>
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                    <div className='flex justify-between my-2'>
                        <div>
                            <p className='text-gray-500 bg-gray-300 px-1 rounded-sm text-[10px]'>Hot Vacancy (expired)</p>
                        </div>
                        <div className='flex gap-2'>
                            <div className='border-r px-2'>
                                <p className='font-nu text-gray-500 text-[12px]'>posted by Me</p>
                            </div>
                            <div>
                                <p className='font-nu text-gray-500 text-[12px]'>20 Mar 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#fff7e8] flex gap-2 items-center px-4 py-2'>
                    <div>
                        <p className='font-pop text-[12px]'>This job is no longer active on site. Would you like to mark it as closed?</p>
                    </div>
                    <div className='flex gap-2'> 
                        <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>Yes</button>
                        <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>No</button>
                    </div>
                </div>
            </div>
            {/* 1 */}
            <div className='bg-white rounded-lg shadow-md my-2 overflow-hidden'>
                <div className=' px-4 py-2 mt-2 w-full'>
                    <div className='flex w-full'>
                        <div className='flex gap-2 w-full'>
                            <input type="checkbox" name="" id="" className='w-4 h-4'/>
                            <div className='grid grid-cols-[2fr,1fr,1fr] w-[60%]'>
                                <div>
                                    <p className='font-pop font-medium text-[14px]'>Hiring Director/VP HR</p>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Delhi/NCR +1</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-1'>
                                        <p className='font-pop font-medium text-[14px]'>2345</p>
                                        <p className='font-pop font-medium text-[10px] bg-[#1FC074] text-white px-1 rounded-full'>345 new</p>
                                    </div>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Total</p>
                                </div>
                                <div>
                                    <p className='font-pop font-medium text-[14px]'>0</p>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Shortlisted</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <button className='border border-[#1FC074] text-[#1FC074] text-[13px] px-2 hover:bg-[#1fc07552]'>Repost</button>
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                    <div className='flex justify-between my-2'>
                        <div>
                            <p className='text-gray-500 bg-gray-300 px-1 rounded-sm text-[10px]'>Hot Vacancy (expired)</p>
                        </div>
                        <div className='flex gap-2'>
                            <div className='border-r px-2'>
                                <p className='font-nu text-gray-500 text-[12px]'>posted by Me</p>
                            </div>
                            <div>
                                <p className='font-nu text-gray-500 text-[12px]'>20 Mar 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#fff7e8] flex gap-2 items-center px-4 py-2'>
                    <div>
                        <p className='font-pop text-[12px]'>This job is no longer active on site. Would you like to mark it as closed?</p>
                    </div>
                    <div className='flex gap-2'> 
                        <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>Yes</button>
                        <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>No</button>
                    </div>
                </div>
            </div>
            {/* 1 */}
            <div className='bg-white rounded-lg shadow-md my-2 overflow-hidden'>
                <div className=' px-4 py-2 mt-2 w-full'>
                    <div className='flex w-full'>
                        <div className='flex gap-2 w-full'>
                            <input type="checkbox" name="" id="" className='w-4 h-4'/>
                            <div className='grid grid-cols-[2fr,1fr,1fr] w-[60%]'>
                                <div>
                                    <p className='font-pop font-medium text-[14px]'>Hiring Director/VP HR</p>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Delhi/NCR +1</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-1'>
                                        <p className='font-pop font-medium text-[14px]'>2345</p>
                                        <p className='font-pop font-medium text-[10px] bg-[#1FC074] text-white px-1 rounded-full'>345 new</p>
                                    </div>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Total</p>
                                </div>
                                <div>
                                    <p className='font-pop font-medium text-[14px]'>0</p>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Shortlisted</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <button className='border border-[#1FC074] text-[#1FC074] text-[13px] px-2 hover:bg-[#1fc07552]'>Repost</button>
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                    <div className='flex justify-between my-2'>
                        <div>
                            <p className='text-gray-500 bg-gray-300 px-1 rounded-sm text-[10px]'>Hot Vacancy (expired)</p>
                        </div>
                        <div className='flex gap-2'>
                            <div className='border-r px-2'>
                                <p className='font-nu text-gray-500 text-[12px]'>posted by Me</p>
                            </div>
                            <div>
                                <p className='font-nu text-gray-500 text-[12px]'>20 Mar 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#fff7e8] flex gap-2 items-center px-4 py-2'>
                    <div>
                        <p className='font-pop text-[12px]'>This job is no longer active on site. Would you like to mark it as closed?</p>
                    </div>
                    <div className='flex gap-2'> 
                        <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>Yes</button>
                        <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>No</button>
                    </div>
                </div>
            </div>
            {/* 1 */}
            <div className='bg-white rounded-lg shadow-md my-2 overflow-hidden'>
                <div className=' px-4 py-2 mt-2 w-full'>
                    <div className='flex w-full'>
                        <div className='flex gap-2 w-full'>
                            <input type="checkbox" name="" id="" className='w-4 h-4'/>
                            <div className='grid grid-cols-[2fr,1fr,1fr] w-[60%]'>
                                <div>
                                    <p className='font-pop font-medium text-[14px]'>Hiring Director/VP HR</p>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Delhi/NCR +1</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-1'>
                                        <p className='font-pop font-medium text-[14px]'>2345</p>
                                        <p className='font-pop font-medium text-[10px] bg-[#1FC074] text-white px-1 rounded-full'>345 new</p>
                                    </div>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Total</p>
                                </div>
                                <div>
                                    <p className='font-pop font-medium text-[14px]'>0</p>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Shortlisted</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <button className='border border-[#1FC074] text-[#1FC074] text-[13px] px-2 hover:bg-[#1fc07552]'>Repost</button>
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                    <div className='flex justify-between my-2'>
                        <div>
                            <p className='text-gray-500 bg-gray-300 px-1 rounded-sm text-[10px]'>Hot Vacancy (expired)</p>
                        </div>
                        <div className='flex gap-2'>
                            <div className='border-r px-2'>
                                <p className='font-nu text-gray-500 text-[12px]'>posted by Me</p>
                            </div>
                            <div>
                                <p className='font-nu text-gray-500 text-[12px]'>20 Mar 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#fff7e8] flex gap-2 items-center px-4 py-2'>
                    <div>
                        <p className='font-pop text-[12px]'>This job is no longer active on site. Would you like to mark it as closed?</p>
                    </div>
                    <div className='flex gap-2'> 
                        <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>Yes</button>
                        <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>No</button>
                    </div>
                </div>
            </div>
            {/* 1 */}
            <div className='bg-white rounded-lg shadow-md my-2 overflow-hidden'>
                <div className=' px-4 py-2 mt-2 w-full'>
                    <div className='flex w-full'>
                        <div className='flex gap-2 w-full'>
                            <input type="checkbox" name="" id="" className='w-4 h-4'/>
                            <div className='grid grid-cols-[2fr,1fr,1fr] w-[60%]'>
                                <div>
                                    <p className='font-pop font-medium text-[14px]'>Hiring Director/VP HR</p>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Delhi/NCR +1</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-1'>
                                        <p className='font-pop font-medium text-[14px]'>2345</p>
                                        <p className='font-pop font-medium text-[10px] bg-[#1FC074] text-white px-1 rounded-full'>345 new</p>
                                    </div>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Total</p>
                                </div>
                                <div>
                                    <p className='font-pop font-medium text-[14px]'>0</p>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Shortlisted</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <button className='border border-[#1FC074] text-[#1FC074] text-[13px] px-2 hover:bg-[#1fc07552]'>Repost</button>
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                    <div className='flex justify-between my-2'>
                        <div>
                            <p className='text-gray-500 bg-gray-300 px-1 rounded-sm text-[10px]'>Hot Vacancy (expired)</p>
                        </div>
                        <div className='flex gap-2'>
                            <div className='border-r px-2'>
                                <p className='font-nu text-gray-500 text-[12px]'>posted by Me</p>
                            </div>
                            <div>
                                <p className='font-nu text-gray-500 text-[12px]'>20 Mar 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#fff7e8] flex gap-2 items-center px-4 py-2'>
                    <div>
                        <p className='font-pop text-[12px]'>This job is no longer active on site. Would you like to mark it as closed?</p>
                    </div>
                    <div className='flex gap-2'> 
                        <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>Yes</button>
                        <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>No</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllJobs