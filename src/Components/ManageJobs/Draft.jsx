import React from 'react'
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom';

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
                            <div className=' w-[60%]'>
                                <div>
                                    <p className='font-pop font-medium text-[14px]'>FrontEnd Intern</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <Link to={'/postjob'}><BsPencilSquare fontSize={'1.5rem'} className='text-gray-500'/></Link>
                            <MdDelete fontSize={'1.5rem'} className='text-gray-500'/>
                        </div>
                    </div>
                    <div className='flex justify-between my-2'>
                        <div>
                            <p className='text-gray-500 bg-gray-300 px-1 rounded-sm text-[10px]'>Hot Vacancy</p>
                        </div>
                        {/* <div>
                            <p className='text-green-500 bg-green-100 px-1 rounded-sm text-[10px]'>Hot Vacancy (active)</p>
                        </div> */}
                        <div className='flex gap-2'>
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