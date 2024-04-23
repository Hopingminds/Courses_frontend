import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoMdArrowDropdown } from "react-icons/io";

const PostJobsForm = () => {
    const [value, setValue] = useState('');
  return (
    <div className='bg-[#e6e6e6] py-[3%] px-[15%] pr'>
        <div className='bg-[#fafafa] pr-[35%]'>
            <div className='bg-white px-4 py-2 text-[12px] font-pop flex flex-col gap-6' >
                <div className='flex flex-col '>
                    <p className='text-[24px] text-gray-600'>Post a Job - Hot Vacancy</p>
                    <p className='text-gray-500 text-[14px]'>Begin from scratch or <span className='text-blue-600'>prefill from previous jobs</span></p>
                </div>
                <div className='grid grid-cols-[1.5fr,1fr] gap-4'>
                    <div>
                        <p className='font-pop font-semibold '>Job title / Designation <span className='text-red-500 text-[16px]'>*</span></p>
                        <input type="text" placeholder='Enter the Job Title' className='border outline-none px-4 py-2 text-[14px] w-full' />
                    </div>
                    <div>
                        <p className='font-pop  font-semibold '>Employment type <span className='text-red-500 text-[16px]'>*</span></p>
                        <select name="" id="" className='border outline-none px-2 py-2 text-[14px] w-full'>
                            <option className='border-none' value="">Full Time, Permanent</option>
                            <option className='border-none' value="">Full Time, Temporary/Contractual</option>
                            <option className='border-none' value="">Full Time, Freelance/Homebased</option>
                            <option className='border-none' value="">Part Time, Permanent</option>
                            <option className='border-none' value="">Part Time, Temporary/Contractual</option>
                            <option className='border-none' value="">Part Time, Freelance/Homebased</option>
                        </select>
                    </div>
                </div>
                <div className='w-full'>
                    <p className='font-pop  font-semibold'>Key skills <span className='text-red-500 text-[16px]'>*</span></p>
                    <input type="text" placeholder='Add skills that are crucial for this job' className='border outline-none px-2 py-4 text-[14px] w-full' />
                </div>
                <div className='w-[65%]'>
                    <p className='font-pop  font-semibold'>Department & Role category <span className='text-red-500 text-[16px]'>*</span></p>
                    <select name="" id="" className='border outline-none px-2 py-2 text-[14px] w-full'>
                        <option className='border-none' value="" selected>Engineering - Software & QA</option>
                        <option className='border-none' value="">Customer Success, Service & Operations</option>
                        <option className='border-none' value="">IT & Information Security</option>
                        <option className='border-none' value="">Human Resources</option>
                        <option className='border-none' value="">Marketing & Communication</option>
                        <option className='border-none' value="">Sales & Business Development</option>
                    </select>
                </div>
                <div className='w-[65%]'>
                    <p className='font-pop  font-semibold'>Work mode <span className='text-red-500 text-[16px]'>*</span></p>
                    <select name="" id="" className='border outline-none px-2 py-2 text-[14px] w-full'>
                        <option className='border-none' value="" selected>In office</option>
                        <option className='border-none' value="">Hybrid</option>
                        <option className='border-none' value="">Remote</option>
                    </select>
                </div>
                <div className='w-[65%]'>
                    <p className='font-pop font-semibold '>Job location (maximum 3) <span className='text-red-500 text-[16px]'>*</span></p>
                    <input type="text" placeholder='Add locations' className='border outline-none px-4 py-2 text-[14px] w-full' />
                </div>
                <div className='w-[65%]'>
                    <p className='font-pop font-semibold '>Work experience (years) <span className='text-red-500 text-[16px]'>*</span></p>
                    <div className='flex items-center gap-2'>
                        <select name="" id="" className='border outline-none px-2 py-2 text-[14px] w-full'>
                            <option className='border-none' value="" selected>0</option>
                            <option className='border-none' value="">1</option>
                            <option className='border-none' value="">2</option>
                            <option className='border-none' value="">3</option>
                            <option className='border-none' value="">4</option>
                            <option className='border-none' value="">5</option>
                            <option className='border-none' value="">6</option>
                            <option className='border-none' value="">7</option>
                            <option className='border-none' value="">8</option>
                            <option className='border-none' value="">9</option>
                            <option className='border-none' value="">10</option>
                        </select>
                        <p  className='text-gray-500 text-[16px]'>To</p>
                        <select name="" id="" className='border outline-none px-2 py-2 text-[14px] w-full'>
                        <option className='border-none' value="" selected>0</option>
                            <option className='border-none' value="">1</option>
                            <option className='border-none' value="">2</option>
                            <option className='border-none' value="">3</option>
                            <option className='border-none' value="">4</option>
                            <option className='border-none' value="">5</option>
                            <option className='border-none' value="">6</option>
                            <option className='border-none' value="">7</option>
                            <option className='border-none' value="">8</option>
                            <option className='border-none' value="">9</option>
                            <option className='border-none' value="">10</option>
                        </select>
                    </div>
                </div>
                <div className='w-[65%]'>
                    <p className='font-pop font-semibold '>Work experience (years) <span className='text-red-500 text-[16px]'>*</span></p>
                    <div className='flex items-center gap-2'>
                        <select name="" id="" className='border outline-none px-2 py-2 text-[14px]'>
                            <option className='border-none' value="" selected>₹</option>
                            <option className='border-none' value="">$</option>
                        </select>
                        <select name="" id="" className='border outline-none px-2 py-2 text-[14px] w-full'>
                            <option className='border-none' value="" selected>10,000</option>
                            <option className='border-none' value="">20,000</option>
                            <option className='border-none' value="">30,000</option>
                            <option className='border-none' value="">40,000</option>
                            <option className='border-none' value="">50,000</option>
                            <option className='border-none' value="">60,000</option>
                            <option className='border-none' value="">70,000</option>
                            <option className='border-none' value="">80,000</option>
                            <option className='border-none' value="">90,000</option>
                            <option className='border-none' value="">100,000</option>
                        </select>
                        <p  className='text-gray-500 text-[16px]'>To</p>
                        <select name="" id="" className='border outline-none px-2 py-2 text-[14px] w-full'>
                        <option className='border-none' value="" selected>10,000</option>
                            <option className='border-none' value="">10,000</option>
                            <option className='border-none' value="">20,000</option>
                            <option className='border-none' value="">30,000</option>
                            <option className='border-none' value="">40,000</option>
                            <option className='border-none' value="">50,000</option>
                            <option className='border-none' value="">60,000</option>
                            <option className='border-none' value="">70,000</option>
                            <option className='border-none' value="">80,000</option>
                            <option className='border-none' value="">90,000</option>
                            <option className='border-none' value="">100,000</option>
                        </select>
                    </div>
                </div>
                <div className='w-[65%]'>
                    <p className='font-pop  font-semibold'>Company industry <span className='text-red-500 text-[16px]'>*</span></p>
                    <select name="" id="" className='border outline-none px-2 py-2 text-[14px] w-full'>
                        <option className='border-none' value="" selected>IT Services & Consulting  </option>
                        <option className='border-none' value="">Electronic Components / Semiconductors</option>
                        <option className='border-none' value="">Software Product</option>
                        <option className='border-none' value="">Banking</option>
                        <option className='border-none' value="">Financial Services</option>
                        <option className='border-none' value="">E-Learning / EdTech</option>
                    </select>
                </div>
                <div className='w-[65%]'>
                    <p className='font-pop  font-semibold'>Educational qualification <span className='text-red-500 text-[16px]'>*</span></p>
                    <select name="" id="" className='border outline-none px-2 py-2 text-[14px] w-full'>
                        <option className='border-none' value="" selected>Graduation Not Required</option>
                        <option className='border-none' value="">Graduate</option>
                        <option className='border-none' value="">Postgraduate</option>
                        <option className='border-none' value="">Doctoral/Ph.D</option>
                    </select>
                </div>

                {/* Starts From Job Description */}
                <div className='flex flex-col h-[230px]'>
                    <p className='font-pop  font-semibold'>Job description <span className='text-red-500 text-[16px]'>*</span></p>
                    <ReactQuill theme="snow" value={value} onChange={setValue} className='h-[150px]' />
                </div>
                <div className='flex justify-center'>
                    <button className='font-pop text-[18px] w-max text-white bg-[#1FC074] px-16 py-2 rounded-xl '>Post Job</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostJobsForm