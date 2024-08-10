import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { BASE_URL } from '../../Api/api';
import axios from 'axios';

const CYPOtherInfo = ({setActiveDetail, setCompleteProfile, user, setUser }) => {
    // Ensure user object is properly initialized
    const initialUserState = {
        profileLinks: {
            hackerRank: '',
            github: '',
            linkedIn: '',
            codeChef: '',
            leetCode: '',
            geekForGeeks: '',
        },
        isProfileComplete: false,
    };

    user = { ...initialUserState, ...user };

    // Handle form changes
    function formHandler(e) {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            profileLinks: {
                ...prev.profileLinks,
                [name]: value,
            },
        }));
    }

    // Handle form submission
    async function submitHandler(e) {
        e.preventDefault();
        const { hackerRank, github, linkedIn, codeChef, leetCode, geekForGeeks } = user.profileLinks;
        if (!isValidURL(hackerRank)) return toast.error('Please enter a valid hackerRank URL');
        if (!isValidURL(github)) return toast.error('Please enter a valid github URL');
        if (!isValidURL(linkedIn)) return toast.error('Please enter a valid linkedIn URL');
        if (!isValidURL(codeChef)) return toast.error('Please enter a valid codeChef URL');
        if (!isValidURL(leetCode)) return toast.error('Please enter a valid leetCode URL');
        if (!isValidURL(geekForGeeks)) return toast.error('Please enter a valid geekForGeeks URL');
        // if (!hackerRank || !github || !linkedIn || !codeChef || !leetCode || !geekForGeeks) {
        //     toast.error("Please fill out all fields.");
        //     console.log("Missing fields:", { hackerRank, github, linkedIn, codeChef, leetCode, geekForGeeks });
        // } else {
            setUser(prev => ({
                ...prev,
                isProfileComplete: true
            }));

            if (!user.email) {
                toast.error("Enter valid Credentials");
            } else {
                try {
                    const res = await axios.put(`${BASE_URL}/updateuser`, user, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("COURSES_USER_TOKEN")}`,
                        },
                    });
                    // toast.success("Saved Successfully");
                    toast.success("Your data is Saved Successfully");
                    setTimeout(() => {
                        setCompleteProfile('Profile');
                    }, 1000);
                } catch (error) {
                    toast.error("Profile error");
                    console.error("Profile error", error);
                }
            // }
        }
    }
    const isValidURL = (string) => {
        if (!string) return true; // Allow empty strings
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;  
        }
    };
    // Handle previous button click
    function handlePrev() {
        setActiveDetail('technical');
    }

    return (
        <div className='font-nu font-semibold flex flex-col gap-4 items-center w-full'>
            <div>
                <p className='font-semibold'>Other Info</p>
            </div>
            <div className='flex flex-col gap-4 px-12 py-6 w-full border border-[#00000050] rounded-xl xsm:p-4'>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='grid grid-cols-2  gap-8 w-full'>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="hackerRank" className='font-nu font-semibold '>Hacker Rank</label>
                            <input  className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]' type="url" onChange={formHandler} value={user.profileLinks.hackerRank} name='hackerRank' />
                        </div>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="github" className='font-nu font-semibold '>GitHub</label>
                            <input  className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]' type="url" onChange={formHandler} value={user.profileLinks.github} name='github' />
                        </div>
                    </div>
                    <div className='grid grid-cols-2  gap-8'>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="linkedIn" className='font-nu font-semibold '>LinkedIn</label>
                            <input  className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]' type="url" onChange={formHandler} value={user.profileLinks.linkedIn} name='linkedIn' />
                        </div>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="codeChef" className='font-nu font-semibold '>Code Chef</label>
                            <input  className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]' type="url" onChange={formHandler} value={user.profileLinks.codeChef} name='codeChef' />
                        </div>
                    </div>
                    <div className='grid grid-cols-2  gap-8'>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="leetCode" className='font-nu font-semibold '>LeetCode</label>
                            <input  className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]' type="url" onChange={formHandler} value={user.profileLinks.leetCode} name='leetCode' />
                        </div>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="geekForGeeks" className='font-nu font-semibold '>Geek For Geeks</label>
                            <input  className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]' type="url" onChange={formHandler} value={user.profileLinks.geekForGeeks} name='geekForGeeks' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between w-full'> 
                <div onClick={handlePrev} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0 xsm:px-2 xsm:py-1'>
                    <img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumeleftarrow.svg" alt="" />
                    <button className=" text-white font-pop font-medium text-[18px]  xsm:text-[10px] xsm:py-1 xsm:px-0 md:text-[14px]">Previous</button>
                </div>
                <div onClick={submitHandler} className='bg-[#1DBF73] flex items-center rounded-full px-8 py-2 gap-4 cursor-pointer xsm:px-2 xsm:py-1'>
                    <button className=" text-white font-pop font-medium text-[18px]  xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CYPOtherInfo;
