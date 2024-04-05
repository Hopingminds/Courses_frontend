import React from 'react'

const OtherInfo = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 px-4 py-2'>
            <div className='grid grid-cols-2  gap-8'>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="fname" className='font-nu font-semibold '>Hacker Rank</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="lname" className='font-nu font-semibold '>GitHub</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
            </div>
            <div className='grid grid-cols-2  gap-8'>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="fname" className='font-nu font-semibold '>LinkedIn</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="lname" className='font-nu font-semibold '>Code Chef</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
            </div>
            <div className='grid grid-cols-2  gap-8'>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="fname" className='font-nu font-semibold '>LeetCode</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="lname" className='font-nu font-semibold '>Geek For Geeks</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
            </div>
        </div>
        <div className='flex justify-between'>
            <div className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4'>
                <img className='w-7' src="../Icons/resumeleftarrow.svg" alt="" />
                <button className=" text-white font-pop font-medium text-[18px]  xsm:text-[10px] xsm:py-1 xsm:px-4">Previous</button>
            </div>
            <div className='bg-[#1DBF73] flex items-center rounded-full px-8 py-2 gap-4'>
                <button className=" text-white font-pop font-medium text-[18px]  xsm:text-[10px] xsm:py-1 xsm:px-4">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default OtherInfo