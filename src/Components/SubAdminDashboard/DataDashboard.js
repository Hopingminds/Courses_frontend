import React from 'react';
import Img1 from "../../Assests/Icons/hat-sub.svg";
import Img2 from "../../Assests/Icons/couse-sub.svg";
import Img3 from "../../Assests/Icons/bar-sub.svg";

const DataDashboard = () => {
  return (
    <div className="flex flex-col gap-4 px-[4%] py-[2%] w-full">
        <div className='flex flex-row justify-between'>
            <div className='bg-white rounded-lg shadow-lg flex flex-row gap-6 justify-between items-center px-4 py-6'>
                <img src={Img1} className='w-[80px]'/>
                <div className='flex flex-col gap-1'>
                    <p className='font-pop font-semibold text-[30px]'>24</p>
                    <p className='font-pop font-semibold text-[18px]'>Enrolled Students</p>
                </div>
            </div>
            <div className='bg-white rounded-lg shadow-lg flex flex-row gap-8 justify-between items-center px-4 py-6'>
                <img src={Img2} className='w-[70px]'/>
                <div className='flex flex-col gap-1'>
                    <p className='font-pop font-semibold text-[30px]'>14</p>
                    <p className='font-pop font-semibold text-[18px]'>Enrolled courses</p>
                </div>
            </div>
            <div className='bg-white rounded-lg shadow-lg flex flex-row gap-8 justify-between items-center px-4 py-6'>
                <img src={Img3} className='w-[70px]'/>
                <div className='flex flex-col gap-1'>
                    <p className='font-pop font-semibold text-[30px]'>14</p>
                    <p className='font-pop font-semibold text-[18px]'>Completed Course</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataDashboard