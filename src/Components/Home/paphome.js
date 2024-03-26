import React from 'react'
import { useNavigate } from 'react-router-dom';

const PapHome = () => {
    const navigate = useNavigate();
    return (
        <div id='pap' className='px-20 flex flex-col items-center' >
            <h1 className='text-center text-[#1DBF73] text-[42px] font-pop font-semibold' > Pay After Placement</h1>
            <p className='text-center text-[#696984] text-[20px] mt-4'>Hoping Minds is democratising education with a unique Pay After Placement (PAP) Model. <br /> PAP allows you to study the course of your choice at ₹0 upfront fee with our PAP Agreement.</p>
            <div className='grid grid-cols-3 justify-between my-10 gap-10'>
                <div className='bg-white py-5 px-8 flex flex-col items-center gap-2'>
                    <img src='../Icons/pap1.svg' />
                    <h3 className='text-[#696984] text-center text-[20px]'>Enroll With Us</h3>
                    <p className='text-[#696984] text-justify text-[14px]'>Take the first step towards a successful career. Join HopingMinds and be a part of a community that values growth, innovation, and success</p>
                </div>
                <div className='bg-white py-5 px-8 flex flex-col items-center gap-2 shadow-md shadow-[#b4e6ce] rounded-lg'>
                    <img src='../Icons/pap2.svg' />
                    <h3 className='text-[#696984] text-center text-[20px]'>Get Training</h3>
                    <p className='text-[#696984] text-justify text-[14px]'>Choose between online or offline classes and gain additional skills in technical subjects, aptitude, and personality development. Join us to unlock your full potential!</p>
                </div>
                <div className='bg-white py-5 px-8 flex flex-col items-center gap-2 shadow-md shadow-[#b4e6ce] rounded-lg'>
                    <img src='../Icons/pap3.svg' />
                    <h3 className='text-[#696984] text-center text-[20px]'>Get Placed & Pay</h3>
                    <p className='text-[#696984] text-justify text-[14px]'>With HopingMinds, you get a job before you pay any fees. It's a simple, stress-free approach. No job means no charges</p>
                </div>
            </div>
            <button className='px-6 py-3 text-white bg-[#1DBF73] rounded-full mt-10' onClick={() => navigate('/pap')}>Get Started</button>
        </div>
    )
}

export default PapHome