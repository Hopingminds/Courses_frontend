
import { Link } from 'react-router-dom'
import React from 'react'

const LaunchLab = () => {
  return (<>
    <div className='bg-[#E2FFF1] min-h-[425px] rounded-b-[20px] px-[30px] py-[24px]  flex flex-col gap-10 '> 
    <p className='text-[#555555] text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at voluptas laboriosam itaque impedit porro voluptate pariatur illo nesciunt rem sed, quod quam a ab non eaque, qui, blanditiis earum?</p>
    <div className='flex justify-center'>
      <Link to='' className='rounded-full bg-[#1DBF73] py-2 px-8 text-white font-medium'>Launch Lab</Link>
    </div>
    </div>
    </>)
}

export default LaunchLab