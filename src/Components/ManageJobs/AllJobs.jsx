import React, { useState } from 'react'
import { MdRefresh } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, Router } from 'react-router-dom';

const AllJobs = () => {
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSelectAllChange = (e) => {
        const isChecked = e.target.checked;
        setSelectAllChecked(isChecked);
        
        // Check or uncheck all job checkboxes
        const jobCheckboxes = document.querySelectorAll('input[type="checkbox"][name="jobCheckbox"]');
        jobCheckboxes.forEach((checkbox) => {
            checkbox.checked = isChecked;
        });
    };


    const handleReloadClick = () => {
        // Reload the page
        window.location.reload();
    };

    const toggleMenu = (menuId) => {
        setMenuOpen(prevState => ({
            ...prevState,
            [menuId]: !prevState[menuId]  // Toggle the menuId state
        }));
    };

    return (
        <div>
            {/* Heading */}
            <div className='text-gray-500 flex justify-between items-center px-4 py-2 border bg-white mt-4 rounded-md'>
                <div className='flex items-center gap-8'>
                    <div>
                        <label htmlFor="selectall" className='flex items-center gap-2 cursor-pointer'>
                            <input 
                                type="checkbox" 
                                id="selectall" 
                                className='w-4 h-4' 
                                checked={selectAllChecked}
                                onChange={handleSelectAllChange}
                            />
                            <p className='text-[13px]'>Select All</p>
                        </label>
                    </div>
                    <div onClick={handleReloadClick} className='flex items-center gap-1 cursor-pointer'>
                        <MdRefresh fontSize={'1.5rem'} />
                        <p className='text-[13px]'>Refresh</p>
                    </div>
                    {/* <div className='flex items-center gap-1 cursor-pointer'>
                        <FcCollaboration fontSize={'1.5rem'} className='text-gray-500'/>
                        <p className='text-[13px]'>Collaborate</p>
                    </div> */}
                    <div className='flex items-center gap-1 cursor-pointer'>
                        <IoIosCloseCircleOutline  fontSize={'1.5rem'} className='text-gray-500'/>
                        <p className='text-[13px]'>Close</p>
                    </div>
                </div>
                {/* <div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[13px]'>Sort by:</p>
                        <select name="" id="" className='outline-none text-gray-800 text-[13px]'>
                            <option value="">Posted Date</option>
                            <option value="">Job title (A-&gt;Z)</option>
                        </select>
                    </div>
                </div> */}
            </div>
            {/* Content */}
            <div className='mt-6 flex flex-col gap'>
                {/* 1 */}
                <div className='bg-white rounded-lg shadow-md my-2 overflow-hidden'>
                    <div className=' px-4 py-2 mt-2 w-full'>
                        <div className='flex w-full'>
                            <div className='flex gap-2 w-full'>
                                <input 
                                    type="checkbox" 
                                    name="jobCheckbox"
                                    className='w-4 h-4'
                                />
                                <div className='grid grid-cols-[2fr,1fr,1fr] w-[60%]'>
                                    <div>
                                        <p className='font-pop font-medium text-[14px]'>FrontEnd Intern</p>
                                        <p className='font-nu text-[12px] font-semibold text-gray-500'>Chandigarh, Mohali</p>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-1'>
                                            <p className='font-pop font-medium text-[14px]'>879</p>
                                            {/* <p className='font-pop font-medium text-[10px] bg-[#1FC074] text-white px-1 rounded-full'>35 new</p> */}
                                        </div>
                                        <p className='font-nu text-[12px] font-semibold text-gray-500'>Total</p>
                                    </div>
                                    <div>
                                        <p className='font-pop font-medium text-[14px]'>12</p>
                                        <p className='font-nu text-[12px] font-semibold text-gray-500'>Shortlisted</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center relative'>
                                {/* <button className='border border-[#1FC074] text-[#1FC074] text-[13px] px-2 hover:bg-[#1fc07552]'>Repost</button> */}
                                <BsThreeDotsVertical className='cursor-pointer' onClick={() => toggleMenu('menu1')}/>
                                {menuOpen['menu1'] && (
                                    <div className='bg-[#FAFAFA] absolute border w-max top-[70%] -right-[100%] '>
                                        <div className='text-center px-4 border-b cursor-pointer text-[14px]'>Close Job</div>
                                        <Link to={'/jobpreview'} className='text-center px-4  cursor-pointer text-[14px]'>Preview Job</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='flex justify-between my-2'>
                            {/* <div>
                                <p className='text-gray-500 bg-gray-300 px-1 rounded-sm text-[10px]'>Job Vacancy (expired)</p>
                            </div> */}
                            <div>
                                <p className='text-green-500 bg-green-100 px-1 rounded-sm text-[10px]'>Job Vacancy (active)</p>
                            </div>
                            <div className='flex gap-2'>
                                <div className='border-r px-2'>
                                    <p className='font-nu text-gray-500 text-[12px]'>posted by Me</p>
                                </div>
                                <div>
                                    <p className='font-nu text-gray-500 text-[12px]'>20 Apr 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Below will be active when the job post get expired */}
                    {/* <div className='bg-[#fff7e8] flex gap-2 items-center px-4 py-2'>
                        <div>
                            <p className='font-pop text-[12px]'>This job is no longer active on site. Would you like to mark it as closed?</p>
                        </div>
                        <div className='flex gap-2'> 
                            <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>Yes</button>
                            <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>No</button>
                        </div>
                    </div> */}
                </div>
                {/* 2 */}
                <div className='bg-white rounded-lg shadow-md my-2 overflow-hidden'>
                    <div className=' px-4 py-2 mt-2 w-full'>
                        <div className='flex w-full'>
                            <div className='flex gap-2 w-full'>
                                <input type="checkbox" name="jobCheckbox" id="" className='w-4 h-4'/>
                                <div className='grid grid-cols-[2fr,1fr,1fr] w-[60%]'>
                                    <div>
                                        <p className='font-pop font-medium text-[14px]'>AI/ML Intern</p>
                                        <p className='font-nu text-[12px] font-semibold text-gray-500'>Delhi/NCR</p>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-1'>
                                            <p className='font-pop font-medium text-[14px]'>235</p>
                                            {/* <p className='font-pop font-medium text-[10px] bg-[#1FC074] text-white px-1 rounded-full'>45 new</p> */}
                                        </div>
                                        <p className='font-nu text-[12px] font-semibold text-gray-500'>Total</p>
                                    </div>
                                    <div>
                                        <p className='font-pop font-medium text-[14px]'>24</p>
                                        <p className='font-nu text-[12px] font-semibold text-gray-500'>Shortlisted</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center relative'>
                                {/* <button className='border border-[#1FC074] text-[#1FC074] text-[13px] px-2 hover:bg-[#1fc07552]'>Repost</button> */}
                                <BsThreeDotsVertical className='cursor-pointer' onClick={() => toggleMenu('menu2')}/>
                                {menuOpen['menu2'] && (
                                    <div className='bg-[#FAFAFA] absolute border w-max top-[70%] -right-[100%] '>
                                        <div className='text-center px-4 border-b cursor-pointer text-[14px]'>Close Job</div>
                                        <div className='text-center px-4 cursor-pointer text-[14px]'>Preview Job</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='flex justify-between my-2'>
                            {/* <div>
                                <p className='text-gray-500 bg-gray-300 px-1 rounded-sm text-[10px]'>Job Vacancy (expired)</p>
                            </div> */}
                            <div>
                                <p className='text-green-500 bg-green-100 px-1 rounded-sm text-[10px]'>Job Vacancy (active)</p>
                            </div>
                            <div className='flex gap-2'>
                                <div className='border-r px-2'>
                                    <p className='font-nu text-gray-500 text-[12px]'>posted by Me</p>
                                </div>
                                <div>
                                    <p className='font-nu text-gray-500 text-[12px]'>12 Feb 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='bg-[#fff7e8] flex gap-2 items-center px-4 py-2'>
                        <div>
                            <p className='font-pop text-[12px]'>This job is no longer active on site. Would you like to mark it as closed?</p>
                        </div>
                        <div className='flex gap-2'> 
                            <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>Yes</button>
                            <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>No</button>
                        </div>
                    </div> */}
                </div>
                {/* 3 */}
                {/* <div className='bg-white rounded-lg shadow-md my-2 overflow-hidden'>
                    <div className=' px-4 py-2 mt-2 w-full'>
                        <div className='flex w-full'>
                            <div className='flex gap-2 w-full'>
                                <input type="checkbox" name="" id="" className='w-4 h-4'/>
                                <div className='grid grid-cols-[2fr,1fr,1fr] w-[60%]'>
                                    <div>
                                        <p className='font-pop font-medium text-[14px]'>HR Manager</p>
                                        <p className='font-nu text-[12px] font-semibold text-gray-500'>Delhi/NCR</p>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-1'>
                                            <p className='font-pop font-medium text-[14px]'>945</p>
                                        </div>
                                        <p className='font-nu text-[12px] font-semibold text-gray-500'>Total</p>
                                    </div>
                                    <div>
                                        <p className='font-pop font-medium text-[14px]'>4</p>
                                        <p className='font-nu text-[12px] font-semibold text-gray-500'>Shortlisted</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <button className='border border-[#1FC074] text-[#1FC074] text-[13px] px-2 hover:bg-[#1fc07552]'>Repost</button>
                                <BsThreeDotsVertical className='cursor-pointer'/>
                            </div>
                        </div>
                        <div className='flex justify-between my-2'>
                            <div>
                                <p className='text-gray-500 bg-gray-300 px-1 rounded-sm text-[10px]'>Job Vacancy (expired)</p>
                            </div>
                            <div className='flex gap-2'>
                                <div className='border-r px-2'>
                                    <p className='font-nu text-gray-500 text-[12px]'>posted by Me</p>
                                </div>
                                <div>
                                    <p className='font-nu text-gray-500 text-[12px]'>20 Mar 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#fff7e8] flex gap-2 items-center px-4 py-2'>
                        <div>
                            <p className='font-pop text-[12px]'>This job is no longer active on site. Would you like to mark it as closed?</p>
                        </div>
                        <div className='flex gap-2'> 
                            <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>Yes</button>
                            <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>No</button>
                        </div>
                    </div>
                </div> */}
                {/* 4 */}
                <div className='bg-white rounded-lg shadow-md my-2 overflow-hidden'>
                    <div className=' px-4 py-2 mt-2 w-full'>
                        <div className='flex w-full'>
                            <div className='flex gap-2 w-full'>
                                <input type="checkbox" name="jobCheckbox" id="" className='w-4 h-4'/>
                                <div className='grid grid-cols-[2fr,1fr,1fr] w-[60%]'>
                                    <div>
                                        <p className='font-pop font-medium text-[14px]'>Backend Developer</p>
                                        <p className='font-nu text-[12px] font-semibold text-gray-500'>Chandigarh, Mohali</p>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-1'>
                                            <p className='font-pop font-medium text-[14px]'>1945</p>
                                            {/* <p className='font-pop font-medium text-[10px] bg-[#1FC074] text-white px-1 rounded-full'>345 new</p> */}
                                        </div>
                                        <p className='font-nu text-[12px] font-semibold text-gray-500'>Total</p>
                                    </div>
                                    <div>
                                        <p className='font-pop font-medium text-[14px]'>7</p>
                                        <p className='font-nu text-[12px] font-semibold text-gray-500'>Shortlisted</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center relative'>
                                <button className='border border-[#1FC074] text-[#1FC074] text-[13px] px-2 hover:bg-[#1fc07552]'>Repost</button>
                                {/* <BsThreeDotsVertical className='cursor-pointer'/> */}
                                {/* <div className='bg-[#FAFAFA] absolute w-max top-[70%] -right-[100%] '>
                                    <div className='text-center px-4 border cursor-pointer text-[14px]'>Close Job</div>
                                    <div className='text-center px-4 border cursor-pointer text-[14px]'>Preview Job</div>
                                </div> */}
                            </div>
                        </div>
                        <div className='flex justify-between my-2'>
                            <div>
                                <p className='text-red-500 bg-red-100 px-1 rounded-sm text-[10px]'>Job Vacancy (Closed)</p>
                            </div>
                            <div className='flex gap-2'>
                                <div className='border-r px-2'>
                                    <p className='font-nu text-gray-500 text-[12px]'>posted by Me</p>
                                </div>
                                <div>
                                    <p className='font-nu text-gray-500 text-[12px]'>20 Mar 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='bg-[#fff7e8] flex gap-2 items-center px-4 py-2'>
                        <div>
                            <p className='font-pop text-[12px]'>This job is no longer active on site. Would you like to mark it as closed?</p>
                        </div>
                        <div className='flex gap-2'> 
                            <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>Yes</button>
                            <button className='w-[50px] border border-[#1FC074] text-[#1FC074] py-1 rounded-md text-[13px] px-2 hover:bg-[#1fc07552]'>No</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AllJobs