import React, { useState } from 'react'
import "./hirefromus.css";

const HireTable = () => {
    const [checkedMark, setCheckedMark] = useState(false);

    function checkHandler() {
        setCheckedMark(!checkedMark);
        console.log(checkedMark);
    }
  return (
    <div className='bg-[#E2FFF1] py-[1%] w-full'>
        <div className='bg-white w-[90%] my-[3%] mx-auto py-[3%] rounded-[30px] xsm:rounded-[20px]'>
            {/* HEADING */}
            <div className='flex justify-between px-[3%] pb-[3%]'>
                <p className='font-pop font-semibold text-[28px] md:text-[20px] xsm:text-[14px]'>All student</p>
                <div className='flex gap-4 xsm:justify-end xsm:gap-2'>
                    <div className='flex bg-[#F9FBFF] px-4 py-2 rounded-xl gap-x-2 md:py-1 md:px-3 xsm:py-1 xsm:px-2 xsm:w-[50%]'>
                        <img className='w-7 md:w-6 xsm:w-4' src="../Icons/hiresearch.svg" alt="" />
                        <input className=' bg-[#F9FBFF] outline-none md:text-[14px] xsm:text-[10px] xsm:w-[80%]' type="text" name="" id="" placeholder='Search' />
                    </div>
                    <div className='bg-[#F9FBFF] text-[#7E7E7E] rounded-xl overflow-hidden px-4 xsm:px-2'>
                        <select name="" id="" className='flex bg-[#F9FBFF] font-pop font-medium text-[20px] outline-none py-2 md:text-[16px] xsm:text-[10px] xsm:py-1'>
                            <option value="">FILTER</option>
                            <option value="">By Name</option>
                            <option value="">By Name</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Table */}
            {/* Table Heading */}
            <div className='grid grid-cols-[1.2fr,0.9fr,1fr,1.5fr,1fr,0.5fr] px-[3%] xsm:gap-1'>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px] md:text-[13px] xsm:text-[8px]'>Customer Name</p>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px] md:text-[13px] xsm:text-[8px]'>Filed</p>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px] md:text-[13px] xsm:text-[8px]'>Phone Number</p>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px] md:text-[13px] xsm:text-[8px]'>Email</p>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px] md:text-[13px] xsm:text-[8px]'>Country</p>
                <p className='font-pop font-medium text-[#B5B7C0] text-[17px] md:text-[13px] xsm:text-[8px]'>Status</p>
            </div>
            <hr className='mt-4 border-[1.1px] border-[#EEEEEE]'/>
            {/* Table Content */}
            <div>
                {/* content1 */}
                <div className='px-[3%] pt-[2%]'>
                    <div className='grid grid-cols-[1.2fr,0.9fr,1fr,1.5fr,1fr,0.5fr] place-content-center items-center xsm:gap-1'>
                        <p className='font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]'>Jane Cooper</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]'>Frontend</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]'>(225) 555-0118</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]'>jane@microsoft.com</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]'>United States</p>
                        <label className='container'>
                            <input type="checkbox" checked={checkedMark} onChange={checkHandler} />
                            <div className='checkmark'></div>
                        </label>
                    </div>
                    <hr className='mt-6 border-[1.1px] border-[#EEEEEE]'/>
                </div>
                {/* content2 */}
                <div className='px-[3%] pt-[2%]'>
                    <div className='grid grid-cols-[1.2fr,0.9fr,1fr,1.5fr,1fr,0.5fr] place-content-center items-center xsm:gap-1'>
                        <p className='font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]'>Jane Cooper</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]'>Frontend</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]'>(225) 555-0118</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]'>jane@microsoft.com</p>
                        <p className='font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]'>United States</p>
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
                <p className='font-pop font-medium text-[#B5B7C0] text-[15px] md:text-[11px] xsm:text-[6px] xsm:w-[25%] text-wrap'>Showing data 1 to 8 of  256K entries</p>
                <button className='font-pop font-medium text-white bg-[#292D32] px-4 py-1 rounded-full md:text-[14px] xsm:text-[8px] xsm:px-2'>Send Mail</button>
                <div className='flex gap-2 xsm:gap-1'>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md flex justify-center items-center md:text-[14px] md:w-[26px] xsm:text-[8px] xsm:w-[18px]'>
                        <img src="../Icons/hirelessthan.svg" alt="" className='xsm:w-2' />
                    </button>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md md:text-[14px] md:w-[26px] xsm:text-[8px] xsm:w-[18px]'>1</button>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md md:text-[14px] md:w-[26px] xsm:text-[8px] xsm:w-[18px]'>2</button>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md md:text-[14px] md:w-[26px] xsm:text-[8px] xsm:w-[18px]'>3</button>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md md:text-[14px] md:w-[26px] xsm:text-[8px] xsm:w-[18px]'>4</button>
                    <p className='font-pop md:text-[14px] xsm:text-[10px]'>...</p>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md md:text-[14px] md:w-[26px] xsm:text-[8px] xsm:w-[18px]'>50</button>
                    <button className='border border-[#EEEEEE] w-[33px] bg-[#F5F5F5] rounded-md flex justify-center items-center md:text-[14px] md:w-[26px] xsm:text-[8px] xsm:w-[18px]'>
                        <img src="../Icons/greaterthan.svg" alt="" className='xsm:w-2' />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HireTable