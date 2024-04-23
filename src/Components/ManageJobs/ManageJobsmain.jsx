import React from 'react'
import ManageJobsHeader from './ManageJobsHeader'
import ManageJobsFilter from './ManageJobsFilter'
import Jobs from './Jobs'

const ManageJobsmain = () => {
  return (
    <div className='flex flex-col px-[5%] pt-[3%]'>
        <ManageJobsHeader/>
        <div className='flex'>
            <ManageJobsFilter/>
            <Jobs/>
        </div>
    </div>
  )
}

export default ManageJobsmain