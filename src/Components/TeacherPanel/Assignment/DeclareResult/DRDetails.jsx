import React from 'react'
import Clock from '../../../../Assets/Icons/tpassignmentclock.svg'
import Calender from '../../../../Assets/Icons/tpassignmentcalender.svg'

const DRDetails = () => {
  return (
    <div className='flex flex-col gap-6'>
        <div className='text-[#434343] font-semibold'>
            <p><span className='font-normal'>Course</span>  B.Tech Spcl. in Health Informatics</p>
            <p><span className='font-normal'>Subject</span> Networking</p>
        </div>
        <p className='text-[#434343] font-semibold'>Total Marks : 50</p>
        <div className='flex flex-col gap-2'>
            <p className='text-[#434343] text-[13px]'>Uploaded Filed</p>
            <div className='text-[11px] text-[#434343] flex gap-2 flex-wrap'>
                <div className='flex justify-center items-center px-2 py-1 border border-[#D7D7D7] rounded'>
                    <p>New Assignment .pdf</p>
                </div>
                <div className='flex justify-center items-center px-2 py-1 border border-[#D7D7D7] rounded'>
                    <p>New Assignment .pdf</p>
                </div>
                <div className='flex justify-center items-center px-2 py-1 border border-[#D7D7D7] rounded'>
                    <p>New Assignment .pdf</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-4 mt-3'>
            <div className='flex flex-col gap-2'>
                <p className='text-[#434343] text-[13px]'>Schedule</p>
                <div className='flex gap-4 items-center text-[12px] text-[#3C3C3C]'>
                    <div className='flex gap-3 items-center bg-[#EDEDF5] rounded px-3 py-1'>
                        <img className='w-4 h-4' src={Calender} alt="" />
                        <p>3-01-2023</p>
                    </div>
                    <div className='flex gap-3 items-center bg-[#EDEDF5] rounded px-3 py-1'>
                        <img className='w-4 h-4' src={Clock} alt="" />
                        <p>12:30 AM</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-[#434343] text-[13px]'>Due Date</p>
                <div className='flex gap-4 items-center text-[12px] text-[#3C3C3C]'>
                    <div className='flex gap-3 items-center bg-[#EDEDF5] rounded px-3 py-1'>
                        <img className='w-4 h-4' src={Calender} alt="" />
                        <p>3-01-2023</p>
                    </div>
                    <div className='flex gap-3 items-center bg-[#EDEDF5] rounded px-3 py-1'>
                        <img className='w-4 h-4' src={Clock} alt="" />
                        <p>12:30 AM</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-2 text-[#6A6A6A] text-[13px] mt-3'>
            <p className='text-[#434343] text-[16px] font-semibold'>Batches</p>
            <p>3CO - JVY</p>
            <p>3CO - JVY</p>
            <p>3CO - JVY</p>
        </div>
    </div>
  )
}

export default DRDetails