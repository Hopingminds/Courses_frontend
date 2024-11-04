import React from 'react'
import Icon1 from '../../../Assets/Icons/hrreporticon1.svg'
import Icon2 from '../../../Assets/Icons/hrreporticon2.svg'

const Reports = ({ onItemClick }) => {

    return (
        <div className='min-h-screen'>
            <div className='grid grid-cols-2 gap-10 px-[4%] py-[2%] font-pop text-[#808080] '>
                <div className='border border-[#808080] rounded-lg bg-white px-4 py-6 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <img className='w-12' src={Icon1} alt="" />
                        <p className='font-medium text-[22px]'>Applications</p>
                        <p className='text-[17px]'>Get all applications received in a single report</p>
                    </div>
                    <div className='flex justify-between items-center cursor-pointer' onClick={() => onItemClick('application')}>
                        <p className='text-[#1DBF73]'>View Reports </p>
                        <img src={Icon2} alt="" />
                    </div>
                </div>
                <div className='border border-[#808080] rounded-lg bg-white px-4 py-6 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <img className='w-12' src={Icon1} alt="" />
                        <p className='font-medium text-[22px]'>View frontend hiring results</p>
                        <p className='text-[17px]'>Get all applications received in a single report</p>
                    </div>
                    <div className='flex justify-between items-center cursor-pointer' onClick={() => onItemClick('results')}>
                        <p className='text-[#1DBF73]'>View Reports </p>
                        <img src={Icon2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports