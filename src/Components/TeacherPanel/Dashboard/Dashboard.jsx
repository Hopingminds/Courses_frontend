import React from 'react'
import Link from '../../../Assets/Icons/tplink.svg'
import LinkGray from '../../../Assets/Icons/tplinkgray.svg'
import LiveClassCard from './LiveClassCard'
import MyCourseCard from './MyCourseCard'
import MyBatchCard from './MyBatchCard'

const Dashboard = () => {
  return (
    <div className='px-8 py-10 grid grid-cols-3 gap-12'>
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between font-int'>
                <p className='text-[#808080] font-medium text-[18px]'>Live Classes</p>
                <div className='flex items-center gap-1 bg-black rounded-[4px] font-normal text-white px-2 py-1 text-[12px]'>
                    <p>View All</p>
                    <img src={Link} alt="" />
                </div>
            </div>
            <div className='flex flex-col gap-6 h-[80vh] overflow-y-auto customScrollfortp'>
                <LiveClassCard />
                <LiveClassCard />
                <LiveClassCard />
                <LiveClassCard />
                <LiveClassCard />
            </div>
        </div>
        <div className='flex flex-col gap-2 px-4'>
            <div className='flex justify-between font-int'>
                <p className='text-[#808080] font-medium text-[18px]'>My Course</p>
            </div>
            <div className='flex flex-col gap-6 h-[80vh] overflow-y-auto customScrollfortp'>
                <MyCourseCard />
                <MyCourseCard />
                <MyCourseCard />
                <MyCourseCard />
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between font-int'>
                <p className='text-[#808080] font-medium text-[18px]'>My Batches</p>
                <div className='flex items-center gap-1  rounded-[4px] font-normal text-[#808080] border border-[#808080] px-2 py-1 text-[12px]'>
                    <p>View All</p>
                    <img src={LinkGray} alt="" />
                </div>
            </div>
            <div className='flex flex-col gap-6 h-[80vh] overflow-y-auto customScrollfortp'>
                <MyBatchCard />
                <MyBatchCard />
                <MyBatchCard />
                <MyBatchCard />
            </div>
        </div>
    </div>
  )
}

export default Dashboard