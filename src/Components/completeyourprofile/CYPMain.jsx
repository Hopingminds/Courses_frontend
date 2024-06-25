import React, { useState } from 'react'
import Step1 from "../../Assets/Images/CYPstep1.png"
import Step2 from "../../Assets/Images/CYPstep2.png"
import Step3 from "../../Assets/Images/CYPstep3.png"
import Step4 from "../../Assets/Images/CYPstep4.png"
import CYPBasic from './CYPBasic'
import CYPEducation from './CYPEducation'
import CYPTechnical from './CYPTechnical'
import CYPOtherInfo from './CYPOtherInfo'

const CYPMain = ({setCompleteProfile,user, setUser}) => {
    const [activeDetail, setActiveDetail] = useState("Basic");
    const[finalData, setFinalData] = useState([]);

    return (
        <div className='flex justify-between  pl-[7%] pr-[20%] xsm:pr-[10%] xsm:gap-2'>
            <div className='flex flex-col items-center gap-4 font-pop text-[16px] font-semibold'>
                <div className='flex flex-col items-center gap-2 cursor-pointer' onClick={() => setActiveDetail('Basic')}>
                    <img className='w-32' src={Step1} alt="" />
                    <p className={`${activeDetail === 'Basic' && 'text-[#1DBF73]'}`}>Basic</p>
                </div>
                <div className='flex flex-col items-center gap-2 cursor-pointer' onClick={() => setActiveDetail('education')}>
                    <img className='w-32' src={Step2} alt="" />
                    <p className={`${activeDetail === 'education' && 'text-[#1DBF73]'}`}>Education</p>
                </div>
                <div className='flex flex-col items-center gap-2 cursor-pointer' onClick={() => setActiveDetail('technical')}>
                    <img className='w-32' src={Step3} alt="" />
                    <p className={`${activeDetail === 'technical' && 'text-[#1DBF73]'}`}>Technical</p>
                </div>
                <div className='flex flex-col items-center gap-2 cursor-pointer' onClick={() => setActiveDetail('otherinfo')}>
                    <img className='w-32' src={Step4} alt="" />
                    <p className={`${activeDetail === 'otherinfo' && 'text-[#1DBF73]'}`}>Other Info</p>
                </div>
            </div>
            <div className='w-[75%] mt-[5%]'>
                {activeDetail==="Basic" && <CYPBasic setFinalData={setFinalData} setActiveDetail={setActiveDetail} user={user} setUser={setUser}/>}
                {activeDetail==="education" && <CYPEducation setFinalData={setFinalData} setActiveDetail={setActiveDetail} user={user} setUser={setUser}/>}
                {activeDetail==="technical" && <CYPTechnical setFinalData={setFinalData} setActiveDetail={setActiveDetail} user={user} setUser={setUser}/>}
                {activeDetail==="otherinfo" && <CYPOtherInfo setFinalData={setFinalData} setActiveDetail={setActiveDetail} finalData={finalData} setCompleteProfile={setCompleteProfile} user={user} setUser={setUser}/>}
            </div>
        </div>
    )
}

export default CYPMain