import React, { useState } from 'react'
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AllJobs from './AllJobs';
import Draft from './Draft';

const JobsMain = () => {
  const [showPage, setShowPage] = useState("AllJobs");
  return (
    <div className='w-[70%]'>
        {/* Header */}
        <div className='border-b flex justify-between '>
          <div className='flex gap-6'>
            <button className={`text-[13px] py-2 ${showPage==="AllJobs"?'border-b-4 border-green-500 font-semibold':''}`} onClick={() => setShowPage("AllJobs")}>All Jobs <span>4</span></button>
            {/* <button className={`text-[13px] py-2 ${showPage==="drafts"?'border-b-4 border-green-500 font-semibold':''}`} onClick={() => setShowPage("drafts")}>Drafts</button> */}
          </div>
          {/* <div className='flex py-2 gap-6'>
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

          </div> */}
        </div>
        {/* content */}
        <div>
          {showPage=== "AllJobs" ? <AllJobs/>:<Draft/>}
          
        </div>
    </div>
  )
}

export default JobsMain