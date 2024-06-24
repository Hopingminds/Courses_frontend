import React from 'react';
import toast from 'react-hot-toast';

const CYPEducation = ({ setActiveDetail, user, setUser }) => {

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setUser(prevField => ({
            ...prevField,
            [name]: value
        }));
    };

    const handleNext = () => {
        const { degree, college, yearofpass, percentage } = user;
        if (!degree || !college || !yearofpass || !percentage) {
            toast.error("Please fill out all the fields.");
        } else {
            toast.success("Submitted Successfully");
            setActiveDetail('technical');
        }
    };

    const handlePrev = () => {
        setActiveDetail('Basic');
    };

    return (
        <div className='font-nu font-semibold flex flex-col gap-4 items-center w-full'>
            <div>
                <p className='font-semibold'>Education</p>
            </div>
            <div className='flex flex-col gap-4 px-12 py-6 w-full border border-[#00000050] rounded-xl xsm:p-4'>
                <div className='flex flex-col gap-4 py-2 w-full'>
                    <div className='grid grid-cols-2 gap-8 w-full'>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="degree" className='font-nu font-semibold'>Degree <span className='text-red-500'>*</span></label>
                            <input
                                id="degree"
                                name="degree"
                                value={user.degree}
                                onChange={handleChangeInput}
                                className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                type="text"
                            />
                        </div>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="university" className='font-nu font-semibold'>College/University <span className='text-red-500'>*</span></label>
                            <input
                                id="university"
                                name="college"
                                value={user.college}
                                onChange={handleChangeInput}
                                className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                type="text"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-8 w-full'>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="passingYear" className='font-nu font-semibold'>Passing Year <span className='text-red-500'>*</span></label>
                            <input
                                id="passingYear"
                                name="yearofpass"
                                value={user.yearofpass}
                                onChange={handleChangeInput}
                                className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                type="number"
                            />
                        </div>
                        <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                            <label htmlFor="percentage" className='font-nu font-semibold'>Percentage <span className='text-red-500'>*</span></label>
                            <input
                                id="percentage"
                                name="percentage"
                                value={user.percentage}
                                onChange={handleChangeInput}
                                className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                type="number"
                                max={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-end w-full'>
                <div onClick={handlePrev} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0 xsm:px-2 xsm:py-1'>
                    <img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumeleftarrow.svg" alt="" />
                    <button className="text-white font-pop font-medium text-[18px] xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Previous</button>
                </div>
                <div onClick={handleNext} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0 xsm:px-2 xsm:py-1'>
                    <button className="text-white font-pop font-medium text-[18px] xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Next</button>
                    <img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumerightarrow.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default CYPEducation;
