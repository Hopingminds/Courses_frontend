import React from 'react'
import { useNavigate } from 'react-router-dom';

const PapHome = () => {
    const navigate = useNavigate();
    return (
        <div id='pap' className='px-[10%] py-20 flex flex-col items-center xsm:px-[5%] sm:px-[5%] md:px-[5%] xsm:pb-3 md:pb-5 xsm:py-5' >
            <h1 className='text-center text-[#1DBF73] text-[40px] font-pop font-semibold xsm:text-[18px] sm:text-[20px] md:text-[28px] lg:text-[32px]' > Pay After Placement</h1>
            <p className='text-center text-[#696984] text-[24px] font-pop mt-4 xsm:mt-2 xsm:text-[12px] sm:text-[10px] md:text-[12px] md:mt-3 lg:text-[16px]'>Hoping Minds is making education accessible for all with a unique Pay After Placement Model. <br /> PAP allows you to study the course of your choice with our PAP Agreement.</p>
            <div className='flex justify-between my-10 space-x-14 xsm:space-y-5 xsm:flex-col xsm:space-x-0 xsm:my-4 sm:space-x-5 sm:my-5 md:space-x-8 md:my-6 lg:space-x-10'>
                <div className='bg-[#E2FFF1] pt-10 p-8 flex flex-col items-center gap-4 shadow-md shadow-[#0000001C] rounded-lg xsm:px-2 xsm:py-3 sm:px-3 sm:py-4 w-[90%] xsm:w-full'>
                    <img alt='' className='xsm:w-[50px] xsm:h-auto sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[25px] lg:w-[40px] lg:h-[40px] w-[50px] h-[50px]' src='../Icons/pap1.svg' />
                    <h3 className='text-[#595959] text-center text-[30px] font-semibold xsm:text-[20px] sm:text-[12px] md:text-[14px] lg:text-[16px]  font-pop'>Enroll With Us</h3>
                    <p className='text-[#3C3C3CE5] text-center text-[22px] leading-7 tracking-wider xsm:text-[12px] xsm:text-balance sm:text-[8px] md:text-[8px] lg:text-[14px] xl:text-[14px] font-pop xsm:leading-5'>Take the first step towards a successful career. Join HopingMinds and be a part of a community that values growth, innovation, and success.</p>
                </div>
                <div className='bg-[#E2FFF1] pt-10 p-8 flex flex-col items-center gap-4 shadow-md shadow-[#0000001C] rounded-lg xsm:px-2 xsm:py-3 sm:px-3 sm:py-4 w-[90%] xsm:w-full'>
                    <img alt=''  className='xsm:w-[50px] xsm:h-auto sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[25px] lg:w-[40px] lg:h-[40px] w-[50px] h-[50px]' src='../Icons/pap2.svg' />
                    <h3 className='text-[#595959] text-center text-[30px] font-semibold xsm:text-[20px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-pop'>Get Trained</h3>
                    <p className='text-[#3C3C3CE5] text-center text-[22px] leading-7 tracking-wider xsm:text-[12px] xsm:text-balance sm:text-[8px] md:text-[8px] lg:text-[14px] font-pop xl:text-[14px] xsm:leading-5'>Our programs are meticulously crafted to meet the demands of the job market, ensuring you acquire the skills that employers truly value.</p>
                </div>
                <div className='bg-[#E2FFF1] pt-10 p-8 flex flex-col items-center gap-4 shadow-md shadow-[#0000001C] rounded-lg xsm:px-2 xsm:py-3 sm:px-3 sm:py-4 w-[90%] xsm:w-full'>
                    <img alt=''  className='xsm:w-[50px] xsm:h-auto sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[25px] lg:w-[40px] lg:h-[40px] w-[50px] h-[50px]' src='../Icons/pap3.svg' />
                    <h3 className='text-[#595959] text-center text-[30px] font-semibold xsm:text-[20px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-pop'>Work Now, Worry Later</h3>
                    <p className='text-[#3C3C3CE5] text-center text-[22px] leading-7 tracking-wider xsm:text-[12px] xsm:text-balance sm:text-[8px] md:text-[8px] lg:text-[14px] font-pop xl:text-[14px] xsm:leading-5'>You get a job before you pay any fees. It's a simple, stress-free, and risk-free approach. No job means no charges, ensuring peace of mind.</p>
                </div>
            </div>
            <button className='px-6 py-3 text-white bg-[#1DBF73] rounded-full xsm:text-[20px] xsm:py-1 xsm:px-6 sm:text-[15px] sm:py-2 sm:px-3 md:text-[12px] md:py-2 md:px-4 font-pop xsm:mt-0' onClick={() => navigate('/pap')}>Click to explore ?</button>
        </div>
    )
}

export default PapHome