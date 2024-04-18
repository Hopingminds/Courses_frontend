import React, { useState } from 'react'
import "./hirefromus.css";

const HireTable = () => {
    const [checkedMark, setCheckedMark] = useState(true);

    function checkHandler() {
        setCheckedMark(!checkedMark);
        console.log(checkedMark);
    }
  return (
    <div className='bg-[#E2FFF1] py-[1%] w-full'>
        <div className='bg-white w-[90%] my-[3%] mx-auto py-[3%] rounded-[30px]'>
            {/* HEADING */}
            <div className='flex justify-between px-[3%] pb-[3%]'>
                <p className='font-pop font-semibold text-[28px]'>All student</p>
                <div className='flex gap-4'>
                    <div className='flex bg-[#F9FBFF] px-4 py-2 rounded-xl gap-x-2'>
                        <img className='w-8' src="../Icons/hiresearch.svg" alt="" />
                        <input className=' bg-[#F9FBFF] outline-none' type="text" name="" id="" placeholder='Search' />
                    </div>
                    <div className='bg-[#F9FBFF] text-[#7E7E7E] rounded-xl overflow-hidden px-4'>
                        <select name="" id="" className='flex bg-[#F9FBFF] font-pop font-medium text-[20px] outline-none py-2 '>
                            <option value="">FILTER</option>
                            <option value="">By Name</option>
                            <option value="">By Name</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Table */}
            {/* Table Heading */}
            <div className='grid grid-cols-[1.2fr,0.9fr,1fr,1.5fr,1fr,0.5fr] px-[3%]'>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px]'>Customer Name</p>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px]'>Filed</p>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px]'>Phone Number</p>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px]'>Email</p>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px]'>Country</p>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px]'>Status</p>
            </div>
            <hr className='mt-4 border-[1.1px] border-[#EEEEEE]'/>
            {/* Table Content */}
            <div>
                {/* content1 */}
                <div className='px-[3%] pt-[2%]'>
                    <div className='grid grid-cols-[1.2fr,0.9fr,1fr,1.5fr,1fr,0.5fr] place-content-center items-center'>
                        <p className='font-pop font-medium text-[#292D32] text-[17px]'>Jane Cooper</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px]'>Frontend</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px]'>(225) 555-0118</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px]'>jane@microsoft.com</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px]'>United States</p>
                        <label className='container'>
                            <input type="checkbox" checked={checkedMark} onChange={checkHandler} />
                            <div className='checkmark'></div>
                        </label>
                    </div>
                    <hr className='mt-6 border-[1.1px] border-[#EEEEEE]'/>
                </div>
                {/* content2 */}
                <div className='px-[3%] pt-[2%]'>
                    <div className='grid grid-cols-[1.2fr,0.9fr,1fr,1.5fr,1fr,0.5fr] place-content-center items-center'>
                        <p className='font-pop font-medium text-[#292D32] text-[17px]'>Jane Cooper</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px]'>Frontend</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px]'>(225) 555-0118</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px]'>jane@microsoft.com</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px]'>United States</p>
                        <label className='container'>
                            <input type="checkbox" checked={checkedMark} onChange={checkHandler} />
                            <div className='checkmark'></div>
                        </label>
                    </div>
                    <hr className='mt-6 border-[1.1px] border-[#EEEEEE]'/>
                </div>
            </div>
            {/* Footer */}
            <div className='flex justify-between px-[3%] pt-[3%]'>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px]'>Showing data 1 to 8 of  256K entries</p>
                <button className='font-pop font-medium text-white bg-[#292D32] px-4 py-1 rounded-full'>Send Mail</button>
                <div className='flex gap-2'>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md flex justify-center items-center'>
                        <img src="../Icons/hirelessthan.svg" alt="" />
                    </button>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md'>1</button>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md'>2</button>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md'>3</button>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md'>4</button>
                    <p className='font-pop'>...</p>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md'>50</button>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md flex justify-center items-center'>
                        <img src="../Icons/greaterthan.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HireTable