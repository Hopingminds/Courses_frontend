import React from 'react'
import Img from '../../../Assets/Images/hrhomeimg.png'
import StudentList from './HomeStudentList'
import { useNavigate } from 'react-router-dom'

const HRHome = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col font-pop bg-[#F4F4F4] text-[#808080] '>
        <div className='w-full px-[4%] py-[2%]'>
          <p className='text-[27px] font-medium pb-2'>Jobs / Internship</p>
          <div className='bg-white border border-dashed border-[#808080] rounded-lg w-full flex flex-col items-center py-[2%]'>
            <img className='w-[35%]' src={Img} alt="" />
            <div className='w-[70%] flex flex-col items-center font-medium py-[2%]'>
              <p className='text-[30px]'>Post Your First Job</p>
              <p className='text-center'>It looks like you haven't posted any jobs yet. Posting a job is super easy. Get started to find the right candidates for your company now.</p>
            </div>
            <div className='py-[2%]'>
              <button onClick={() => navigate('/postjob')} className='bg-[#1DBF73] text-white text-[18px] px-6 py-2 rounded-lg'>Post New Job</button>
            </div>
          </div>
        </div>
        <StudentList/>
    </div>
  )
}

export default HRHome