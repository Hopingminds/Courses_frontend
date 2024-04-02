import React from 'react'
import { useNavigate } from 'react-router-dom';

const PapHome = () => {
    const navigate = useNavigate();
    return (
        <div id='pap' className='px-20 flex flex-col items-center xsm:px-[5%] md:px-[5%]' >
            <h1 className='text-center text-[#1DBF73] text-[42px] font-pop font-semibold xsm:text-[12px] md:text-[28px]' > Pay After Placement</h1>
            <p className='text-center text-[#696984] text-[20px] mt-4 xsm:text-[7px] md:text-[10px]'>Hoping Minds is democratising education with a unique Pay After Placement (PAP) Model. <br /> PAP allows you to study the course of your choice at ₹0 upfront fee with our PAP Agreement.</p>
            <div className='flex justify-between my-10 space-x-20 xsm:gap-x-2 xsm:space-x-0 xsm:my-4 md:space-x-8 md:my-6'>
                <div className='bg-white py-5 px-8 flex flex-col items-center gap-2 shadow-md shadow-[#b4e6ce] rounded-lg xsm:px-2'>
                    <img className='xsm:w-[24px] xsm:h-[24px] md:w-[35px] md:h-[25px]' src='../Icons/pap1.svg' />
                    <h3 className='text-[#696984] text-center text-[20px] xsm:text-[10px] md:text-[14px]'>Enroll With Us</h3>
                    <p className='text-[#696984] text-justify text-[14px] xsm:text-[7px] xsm:text-balance md:text-[8px]'>Get trained with online or offline class with additional to technical of aptitude and personality development classes.</p>
                </div>
                <div className='bg-white py-5 px-8 flex flex-col items-center gap-2 shadow-md shadow-[#b4e6ce] rounded-lg xsm:px-2'>
                    <img className='xsm:w-[24px] xsm:h-[24px] md:w-[35px] md:h-[25px]' src='../Icons/pap2.svg' />
                    <h3 className='text-[#696984] text-center text-[20px] xsm:text-[10px] md:text-[14px]'>Get Training</h3>
                    <p className='text-[#696984] text-justify text-[14px] xsm:text-[7px] xsm:text-balance md:text-[8px]'>Get trained with online or offline class with additional to technical of aptitude and personality development classes.</p>
                </div>
                <div className='bg-white py-5 px-8 flex flex-col items-center gap-2 shadow-md shadow-[#b4e6ce] rounded-lg xsm:px-2'>
                    <img className='xsm:w-[24px] xsm:h-[24px] md:w-[35px] md:h-[25px]' src='../Icons/pap3.svg' />
                    <h3 className='text-[#696984] text-center text-[20px] xsm:text-[10px] md:text-[14px]'>Get Placed & Pay</h3>
                    <p className='text-[#696984] text-justify text-[14px] xsm:text-[7px] xsm:text-balance md:text-[8px]'>Get trained with online or offline class with additional to technical of aptitude and personality development classes.</p>
                </div>
            </div>
            <button className='px-6 py-3 text-white bg-[#1DBF73] rounded-full mt-10 xsm:mt-2 xsm:text-[8px] xsm:py-1 xsm:px-3 md:mt-0 md:text-[12px] md:py-2 md:px-4' onClick={() => navigate('/pap')}>Get Started</button>
        </div>
    )
}

export default PapHome