import React from 'react'
import { ReactComponent as Pap1 } from "../../Assets/Icons/pap1.svg";
import { ReactComponent as Pap2 } from "../../Assets/Icons/pap2.svg";
import { ReactComponent as Pap3 } from "../../Assets/Icons/pap3.svg";
import { useNavigate } from 'react-router-dom';

const PapHome = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-[#F0FFF7] py-5 px-20 flex flex-col items-center ' id='pap'>
            <h1 className='text-center text-[#1DBF73] text-[25px]'> Pay After Placement</h1>
            <p className='text-center text-[#696984] text-[12px] mt-4'>Hoping Minds is democratising education with a unique Pay After Placement (PAP) Model. <br /> PAP allows you to study the course of your choice at ₹0 upfront fee with our PAP Agreement.</p>
            <div className='flex justify-between my-10 space-x-20'>
                <div className='bg-white py-5 px-8 flex flex-col items-center gap-2'>
                    <Pap1 />
                    <h3 className='text-[#696984] text-center text-[20px]'>Enroll With Us</h3>
                    <p className='text-[#696984] text-justify text-[13px]'>Get trained with online or offline class with additional to technical of aptitude and personality development classes.</p>
                </div>
                <div className='bg-white py-5 px-8 flex flex-col items-center gap-2'>
                    <Pap2 />
                    <h3 className='text-[#696984] text-center text-[20px]'>Get Training</h3>
                    <p className='text-[#696984] text-justify text-[13px]'>Get trained with online or offline class with additional to technical of aptitude and personality development classes.</p>
                </div>
                <div className='bg-white py-5 px-8 flex flex-col items-center gap-2'>
                    <Pap3 />
                    <h3 className='text-[#696984] text-center text-[20px]'>Get Placed & Pay</h3>
                    <p className='text-[#696984] text-justify text-[13px]'>Get trained with online or offline class with additional to technical of aptitude and personality development classes.</p>
                </div>
            </div>
            <button className='px-6 py-3 text-white bg-[#1DBF73] rounded-full ' onClick={() => navigate('/')}>Get Started</button>
        </div>
    )
}

export default PapHome