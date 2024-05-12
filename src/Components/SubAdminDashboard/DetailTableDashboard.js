import React from 'react'
import {ReactComponent as Cap} from '../../Assets/Icons/cap.svg'
import {ReactComponent as Coin} from '../../Assets/Icons/coin.svg'
import {ReactComponent as Upload} from '../../Assets/Icons/upload.svg'
import {ReactComponent as Download} from '../../Assets/Icons/download.svg'
import { Link } from 'react-router-dom'
const DetailTableDashboard = ({data}) => {
  return (<>
    <div className='px-[4%] flex flex-col gap-4 w-full'>
        <div className='w-full flex justify-between'>
        <div className='h-32 w-56 flex justify-center items-center shadow-xl'>
            <Cap className='h-20 w-20'/>
            <div className='flex flex-col '>
                <p className=' font-bold text-center text-xl'>24</p>
                <p className='text-xs font-semibold'>Enrolled students</p>
            </div>
        </div>
        <div className='h-32 w-56 flex justify-center items-center shadow-xl gap-1'>
            <Coin className='h-12 w-16'/>
            <div className='flex flex-col '>
                <p className=' font-bold text-center text-xl'>24</p>
                <p className='text-xs font-semibold'>Enrolled students</p>
            </div>
        </div>
        <div className='h-32 w-56 flex justify-center items-center shadow-xl gap-1'>
            <Upload className='h-16 w-12'/>
            <div className='flex flex-col '>
                {/* <p className=' font-bold text-center text-xl'>24</p> */}
                <p className='text-xs font-semibold'>Upload Sheet</p>
            </div>
        </div>
        <div className='h-32 w-56 flex justify-center items-center shadow-xl gap-1'>
            <Download className='h-16 w-12'/>
            <div className='flex flex-col '>
                {/* <p className=' font-bold text-center text-xl'>24</p> */}
                <p className='text-xs font-semibold'>Download Sheets</p>
            </div>
        </div>
        </div>
        <div className='grid grid-cols-5  bg-[#000000] py-6 text-center w-full' >
            <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Student Id</p>
            <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Name</p>
            {/* <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Attendance</p> */}
            <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Batch</p>
            <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Branch</p>
            <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Action</p>
        </div>
        {
            // data?.map((item)=>{
                // return(<>
            <div className='grid grid-cols-5 bg-[#fff] py-3 text-center shadow-lg w-full'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>dfasdf</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>fds</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>dfadsf</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <Link to="/subadmin-studentdata" className='text-[#000] text-[16px] font-pop font-semibold'>View</Link>
            </div>
                // </>)
            // })
        }
        {/* <div className='grid grid-cols-7 bg-[#fff] py-3 text-center shadow-lg'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Cse</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Data Science</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Pending</p>
        </div> */}
        {/* <div className='grid grid-cols-7 bg-[#fff] py-3 text-center shadow-lg'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Cse</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Data Science</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#1DBF73] text-[16px] font-pop font-semibold'>Success</p>
        </div> */}
        {/* <div className='grid grid-cols-7 bg-[#fff] py-3 text-center shadow-lg'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Cse</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Data Science</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#1DBF73] text-[16px] font-pop font-semibold'>Success</p>
        </div> */}
        {/* <div className='grid grid-cols-7 bg-[#fff] py-3 text-center shadow-lg'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Cse</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Data Science</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Pending</p>
        </div> */}
        {/* <div className='grid grid-cols-7 bg-[#fff] py-3 text-center shadow-lg'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Cse</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Data Science</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Pending</p>
        </div> */}
    

    <div className='w-full flex justify-center'>
        <button className='text-[#fff] text-[18px] rounded-3xl font-pop font-medium bg-[#000] px-12 py-3'>Download</button>
    </div>
    </div>
    </>
  )
}

export default DetailTableDashboard