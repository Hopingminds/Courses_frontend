import React from 'react'
import ManageJobsHeader from './ManageJobsHeader'
import ManageJobsFilter from './ManageJobsFilter'
import Jobs from './JobsMain'

const ManageJobsmain = () => {
  return (
    <div className='flex flex-col px-[5%] pt-[3%] bg-[#fafafa]'>
        <ManageJobsHeader/>
        <div className='flex my-[2%] justify-between'>
            <div className='w-[25%]  h-full'>
                <ManageJobsFilter/>
            </div>
            <Jobs/>
        </div>
    </div>
  )
}

export default ManageJobsmain