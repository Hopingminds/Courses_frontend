import React, { useState } from 'react'

const OtherInfo = ({changeComponent,finalData,setFinalData}) => {

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
    }
      

    function handlePrev(){
        changeComponent('education')
    }
  return (
    <div className='flex flex-col justify-between gap-4 min-h-[70vh] md:min-h-[60vh] xsm:min-h-[50vh]'>
        <div className='flex flex-col gap-4 px-4 py-2'>
            <div className='grid grid-cols-2  gap-8'>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                    <label htmlFor="fname" className='font-nu font-semibold '>Hacker Rank</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" onChange={formHandler} value={otherFormData.hackerrank} name='hackerrank' />
                </div>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                    <label htmlFor="lname" className='font-nu font-semibold '>GitHub</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" onChange={formHandler} value={otherFormData.github} name='github' />
                </div>
            </div>
            <div className='grid grid-cols-2  gap-8'>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                    <label htmlFor="fname" className='font-nu font-semibold '>LinkedIn</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" onChange={formHandler} value={otherFormData.linkedin} name='linkedin' />
                </div>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                    <label htmlFor="lname" className='font-nu font-semibold '>Code Chef</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" onChange={formHandler} value={otherFormData.codechef} name='codechef' />
                </div>
            </div>
            <div className='grid grid-cols-2  gap-8'>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                    <label htmlFor="fname" className='font-nu font-semibold '>LeetCode</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" onChange={formHandler} value={otherFormData.leetcode} name='leetcode' />
                </div>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                    <label htmlFor="lname" className='font-nu font-semibold '>Geek For Geeks</label>
                    <input className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" onChange={formHandler} value={otherFormData.gfg} name='gfg' />
                </div>
            </div>
        </div>
        <div className='flex justify-between'>
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

export default OtherInfo