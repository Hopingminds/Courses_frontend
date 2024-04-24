import React from 'react'
import { FcCollaboration } from 'react-icons/fc'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { MdDelete, MdRefresh } from 'react-icons/md'

const Draft = () => {
  return (
    <div>
        {/* Heading */}
        <div className='text-gray-500 flex justify-between items-center px-4 py-2 border bg-white mt-4 rounded-md'>
            <div className='flex items-center gap-8'>
                <div>
                    <label htmlFor="selectall" className='flex items-center gap-2 cursor-pointer'>
                        <input type="checkbox" name="" id="selectall" className='w-4 h-4' />
                        <p className='text-[13px]'>Select All</p>
                    </label>
                </div>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <MdDelete fontSize={'1.5rem'} />
                    <p className='text-[13px]'>Delete</p>
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
                                    <p className='font-pop font-medium text-[14px]'>FrontEnd Intern</p>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Chandigarh, Mohali</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-1'>
                                        <p className='font-pop font-medium text-[14px]'>879</p>
                                        <p className='font-pop font-medium text-[10px] bg-[#1FC074] text-white px-1 rounded-full'>35 new</p>
                                    </div>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Total</p>
                                </div>
                                <div>
                                    <p className='font-pop font-medium text-[14px]'>12</p>
                                    <p className='font-nu text-[12px] font-semibold text-gray-500'>Shortlisted</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <button className='border border-[#1FC074] text-[#1FC074] text-[13px] px-2 hover:bg-[#1fc07552]'>Repost</button>
                            {/* <BsThreeDotsVertical className='cursor-pointer'/> */}
                        </div>
                    </div>
                    <div className='flex justify-between my-2'>
                        {/* <div>
                            <p className='text-gray-500 bg-gray-300 px-1 rounded-sm text-[10px]'>Hot Vacancy (expired)</p>
                        </div> */}
                        <div>
                            <p className='text-green-500 bg-green-100 px-1 rounded-sm text-[10px]'>Hot Vacancy (active)</p>
                        </div>
                        <div className='flex gap-2'>
                            <div className='border-r px-2'>
                                <p className='font-nu text-gray-500 text-[12px]'>posted by Me</p>
                            </div>
                            <div>
                                <p className='font-nu text-gray-500 text-[12px]'>20 Apr 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Draft