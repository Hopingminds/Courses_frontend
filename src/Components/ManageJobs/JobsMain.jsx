import React from 'react'
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AllJobs from './AllJobs';

const JobsMain = () => {
  return (
    <div className='w-[70%]'>
        {/* Header */}
        <div className='border-b flex justify-between '>
          <div className='flex gap-6'>
            <button className='text-[13px] focus:font-semibold py-2 focus:border-b-4 focus:border-green-500'>All Jobs <span>12</span></button>
            <button className='text-[13px] focus:font-semibold py-2 focus:border-b-4 focus:border-green-500'>Drafts</button>
          </div>
          <div className='flex py-2 gap-6'>
            <div className='flex items-center gap-2 text-gray-500'>
              <p className='text-[13px]'>Show</p>
              <div className='border px-2 '>
                <select name="" id="" className='outline-none text-[13px] bg-transparent'>
                  <option value="" selected>20</option>
                  <option value="">40</option>
                  <option value="">60</option>
                  <option value="">80</option>
                  <option value="">100</option>
                </select>
              </div>
            </div>
            <div className='flex items-center gap-2 text-gray-500'>
              <RxDoubleArrowLeft />
              <IoIosArrowBack />
              <div className='border px-2 py-[2px]'>
                <p className='text-[13px]'>Page 1 of 1</p>
              </div>
              <IoIosArrowForward />
              <RxDoubleArrowRight />
            </div>

          </div>
        </div>
        {/* content */}
        <div>
          <AllJobs/>
        </div>
    </div>
  )
}

export default JobsMain