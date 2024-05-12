import React, { useState } from 'react'
import toast from 'react-hot-toast';

const CYPOtherInfo = ({finalData, setFinalData, setActiveDetail, setCompleteProfile }) => {
    const [otherFormData, setOtherFormData] = useState({hackerrank:"", github:"",linkedin:"", codechef:"", leetcode:"", gfg:""});

    function formHandler(e){
        setOtherFormData(prev =>(
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }

    function submitHandler(e) {
        e.preventDefault();
        if(otherFormData.hackerrank === "" || otherFormData.github === "" || otherFormData.linkedin === "" || otherFormData.codechef === "" || otherFormData.leetcode === "" || otherFormData.gfg === "" ){
            toast.error("Please fill out all valid fields.")
        }
        else{
            console.log(otherFormData);
            setFinalData(prevData => ({...prevData,otherFormData}));
            console.log(finalData);
            setOtherFormData({
                hackerrank: "",
                github: "",
                linkedin: "",
                codechef: "",
                leetcode: "",
                gfg: "",
            });
            toast.success("Your data is Saved Successfully")

            setTimeout(() => {
                setCompleteProfile('Profile')
            }, 1000);
        }
    }
      

    function handlePrev(){
        setActiveDetail('technical')
    }
    return (
        <div className='font-nu font-semibold flex flex-col gap-4 items-center w-full'>
            <div>
                <p className='font-semibold'>Other Info</p>
            </div>
            <div className='flex flex-col gap-4 px-12 py-6 w-full border border-[#00000050] rounded-xl '>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='grid grid-cols-2  gap-8 w-full'>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="fname" className='font-nu font-semibold '>Hacker Rank <span className='text-red-500'>*</span></label>
                            <input className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]' type="url" onChange={formHandler} value={otherFormData.hackerrank} name='hackerrank' />
                        </div>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="lname" className='font-nu font-semibold '>GitHub <span className='text-red-500'>*</span></label>
                            <input className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]' type="url" onChange={formHandler} value={otherFormData.github} name='github' />
                        </div>
                    </div>
                    <div className='grid grid-cols-2  gap-8'>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="fname" className='font-nu font-semibold '>LinkedIn <span className='text-red-500'>*</span></label>
                            <input className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]' type="url" onChange={formHandler} value={otherFormData.linkedin} name='linkedin' />
                        </div>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="lname" className='font-nu font-semibold '>Code Chef <span className='text-red-500'>*</span></label>
                            <input className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]' type="url" onChange={formHandler} value={otherFormData.codechef} name='codechef' />
                        </div>
                    </div>
                    <div className='grid grid-cols-2  gap-8'>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="fname" className='font-nu font-semibold '>LeetCode <span className='text-red-500'>*</span></label>
                            <input className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]' type="url" onChange={formHandler} value={otherFormData.leetcode} name='leetcode' />
                        </div>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="lname" className='font-nu font-semibold '>Geek For Geeks <span className='text-red-500'>*</span></label>
                            <input className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]' type="url" onChange={formHandler} value={otherFormData.gfg} name='gfg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between w-full'>
                <div onClick={handlePrev} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0'>
                    <img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumeleftarrow.svg" alt="" />
                    <button className=" text-white font-pop font-medium text-[18px]  xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Previous</button>
                </div>
                <div onClick={submitHandler} className='bg-[#1DBF73] flex items-center rounded-full px-8 py-2 gap-4 cursor-pointer'>
                    <button className=" text-white font-pop font-medium text-[18px]  xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CYPOtherInfo