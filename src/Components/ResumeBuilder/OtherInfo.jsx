import React from 'react'

const OtherInfo = ({fun}) => {

    function handlePrev(){
        fun('education')
    }
  return (
    <div className='flex flex-col justify-between gap-4 min-h-[70vh] md:min-h-[60vh] xsm:min-h-[50vh]'>
        <div className='flex flex-col gap-4 px-4 py-2'>
            <div className='grid grid-cols-2  gap-8'>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                    <label htmlFor="fname" className='font-nu font-semibold '>Hacker Rank</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                    <label htmlFor="lname" className='font-nu font-semibold '>GitHub</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
            </div>
            <div className='grid grid-cols-2  gap-8'>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                    <label htmlFor="fname" className='font-nu font-semibold '>LinkedIn</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                    <label htmlFor="lname" className='font-nu font-semibold '>Code Chef</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
            </div>
            <div className='grid grid-cols-2  gap-8'>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                    <label htmlFor="fname" className='font-nu font-semibold '>LeetCode</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                    <label htmlFor="lname" className='font-nu font-semibold '>Geek For Geeks</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
            </div>
        </div>
        <div className='flex justify-between'>
            <div onClick={handlePrev} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0'>
                <img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumeleftarrow.svg" alt="" />
                <button className=" text-white font-pop font-medium text-[18px]  xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Previous</button>
            </div>
            <div className='bg-[#1DBF73] flex items-center rounded-full px-8 py-2 gap-4 cursor-pointer'>
                <button className=" text-white font-pop font-medium text-[18px]  xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default OtherInfo