import React, { useState } from 'react'
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'

const Basic = ({fun}) => {
    const [num, setNum] = useState('');

    function handleSubmit(){
        fun('education');
    }
  return (
    <div className='flex flex-col gap-4 min-h-[70vh]'>
        <div className='flex flex-col gap-4 px-4 py-2'>
            <div className='grid grid-cols-2  gap-8'>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="fname" className='font-nu font-semibold '>First Name</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="lname" className='font-nu font-semibold '>Last Name</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
            </div>
            <div className='grid grid-cols-2  gap-8'>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="email" className='font-nu font-semibold '>Email</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="email" />
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="number" className='font-nu font-semibold '>Contact Number</label>
                    <PhoneInput
                        className='resumephoneinput'
                        defaultCountry="IN"
                        placeholder="Enter phone number"
                        value={num}
                        onChange={setNum}
                        />
                </div>
            </div>
            <div className=''>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="address" className='font-nu font-semibold '>Address</label>
                    <textarea className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />
                </div>
            </div>
            <div className='grid grid-cols-2  gap-8'>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="city" className='font-nu font-semibold '>City</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="email" />  {/* make it select*/}
                </div>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="number" className='font-nu font-semibold '>State</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" />   {/* make it select*/}
                </div>
            </div>
            <div className=''>
                <div className='flex flex-col text-[15px]'>
                    <label htmlFor="address" className='font-nu font-semibold '>Objective</label>
                    <textarea className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md font-nu font-light' type="text" placeholder='Tell about Yourself' />
                </div>
            </div>
        </div>
        <div className='flex justify-end'>
            <div onClick={handleSubmit} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer'>
                <button  className=" text-white font-pop font-medium text-[18px]  xsm:text-[10px] xsm:py-1 xsm:px-4">Submit</button>
                <img className='w-7' src="../Icons/resumerightarrow.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Basic