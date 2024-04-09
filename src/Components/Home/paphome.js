import React from 'react'
import { useNavigate } from 'react-router-dom';

const PapHome = () => {
    const navigate = useNavigate();
    return (
        <div id='pap' className='px-20 flex flex-col items-center xsm:px-[5%] md:px-[5%] pb-10' >
            <h1 className='text-center text-[#1DBF73] text-[36px] font-pop font-semibold xsm:text-[12px] md:text-[28px]' > Pay After Placement</h1>
            <p className='text-center text-[#696984] text-[20px] font-pop mt-4 xsm:mt-2 xsm:text-[7px] md:text-[10px] md:mt-3'>Hoping Minds is democratising education with a unique Pay After Placement (PAP) Model. <br /> PAP allows you to study the course of your choice at ₹0 upfront fee with our PAP Agreement.</p>
            <div className='flex justify-between my-10 space-x-10 xsm:gap-x-2 xsm:space-x-0 xsm:my-4 md:space-x-8 md:my-6'>
                <div className='bg-[#E2FFF1] py-5 px-8 flex flex-col items-center gap-2 shadow-md shadow-[#0000001C] rounded-lg xsm:px-2 xsm:py-3 w-[90%]'>
                    <img className='xsm:w-[24px] xsm:h-[24px] md:w-[35px] md:h-[25px] w-[50px] h-[50px]' src='../Icons/pap1.svg' />
                    <h3 className='text-[#595959] text-center text-[26px] font-semibold xsm:text-[10px] md:text-[14px] font-pop'>Enroll With Us</h3>
                    <p className='text-[##3C3C3CE5] text-center text-[18px] xsm:text-[7px] xsm:text-balance md:text-[8px] font-pop'>Take the first step towards a successful career. Join HopingMinds and be a part of a community that values growth, innovation, and success.</p>
                </div>
                <div className='bg-[#E2FFF1] py-5 px-8 flex flex-col items-center gap-2 shadow-md shadow-[#0000001C] rounded-lg xsm:px-2 xsm:py-3 w-[90%]'>
                    <img className='xsm:w-[24px] xsm:h-[24px] md:w-[35px] md:h-[25px] w-[50px] h-[50px]' src='../Icons/pap2.svg' />
                    <h3 className='text-[#595959] text-center text-[26px] font-semibold xsm:text-[10px] md:text-[14px] font-pop'>Get Trained</h3>
                    <p className='text-[##3C3C3CE5] text-center text-[18px] xsm:text-[7px] xsm:text-balance md:text-[8px] font-pop'>Our programs are meticulously crafted to meet the demands of the job market, ensuring you acquire the skills that employers truly value.</p>
                </div>
                <div className='bg-[#E2FFF1] py-5 px-8 flex flex-col items-center gap-2 shadow-md shadow-[#0000001C] rounded-lg xsm:px-2 xsm:py-3 w-[90%]'>
                    <img className='xsm:w-[24px] xsm:h-[24px] md:w-[35px] md:h-[25px] w-[50px] h-[50px]' src='../Icons/pap3.svg' />
                    <h3 className='text-[#595959] text-center text-[26px] font-semibold xsm:text-[10px] md:text-[14px] font-pop'>Work Now, Worry Later</h3>
                    <p className='text-[##3C3C3CE5] text-center text-[18px] xsm:text-[7px] xsm:text-balance md:text-[8px] font-pop'>With HopingMinds, you get a job before you pay any fees. It's a simple, stress-free, and risk-free approach. No job means no charges, ensuring peace of mind.</p>
                </div>
            </div>
            <button className='px-6 py-3 text-white bg-[#1DBF73] rounded-full xsm:text-[8px] xsm:py-1 xsm:px-3 md:text-[12px] md:py-2 md:px-4 font-pop mt-4' onClick={() => navigate('/pap')}>Kick Start</button>
        </div>
    )
}

export default PapHome