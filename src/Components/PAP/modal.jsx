import React from 'react'

const modal = () => {
  return (
    <div className='w-[45%] rounded-lg flex flex-col gap-4 border'>
        <div className='border-black border-b-2 px-4 py-1'>
            <p className='font-nu font-extrabold text-[#1DBF73] text-[22px]'>Pay After Placement Form</p>
        </div>
        <div className='grid grid-cols-2 gap-6 px-4 py-2'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>First Name</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Email</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="email" />
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>College/University</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Branch</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Year Of Passing </label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Last Name</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Contact Number</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="email" />
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Degree</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Field Of Study</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
             <button className="bg-[#1DBF73] text-white font-pop font-medium text-[18px] px-6 py-2 rounded-full xsm:text-[10px] xsm:py-1 xsm:px-4">Submit</button>
        </div>
    </div>
  )
}

export default modal