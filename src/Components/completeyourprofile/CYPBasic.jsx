import React from 'react';
import toast from 'react-hot-toast';

const CYPBasic = ({ setActiveDetail, user, setUser }) => {
    
    function formHandler(e) {
        setUser(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit() {
        const requiredFields = ['address', 'city', 'state', 'bio'];
        const isFormValid = requiredFields.every(field => user[field] && user[field].trim() !== '');

        if (!isFormValid) {
            toast.error("Fill all the fields");
        } else {
            toast.success("Submitted Successfully");
            setActiveDetail('education');
        }
    }

    return (
        <div className='font-nu font-semibold flex flex-col gap-4 items-center w-full'>
            <div>
                <p className='font-semibold'>Basic</p>
            </div>
            <div className='flex flex-col gap-4 px-12 py-6 w-full border border-[#00000050] rounded-xl xsm:p-4'>
                <div className=''>
                    <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                        <label htmlFor="address" className='font-nu font-semibold '>Address <span className='text-red-500'>*</span></label>
                        <textarea
                            onChange={formHandler}
                            required
                            className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                            type="text"
                            value={user.address}
                            name='address'
                            placeholder='Address'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2  gap-8'>
                    <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                        <label htmlFor="city" className='font-nu font-semibold '>City <span className='text-red-500'>*</span></label>
                        <input
                            onChange={formHandler}
                            required
                            className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                            type="text"
                            value={user.city}
                            name='city'
                        />
                    </div>
                    <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                        <label htmlFor="state" className='font-nu font-semibold '>State <span className='text-red-500'>*</span></label>
                        <input
                            onChange={formHandler}
                            required
                            className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                            type="text"
                            value={user.state}
                            name='state'
                        />
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                        <label htmlFor="bio" className='font-nu font-semibold '>Bio <span className='text-red-500'>*</span></label>
                        <textarea
                            onChange={formHandler}
                            required
                            className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                            type="text"
                            placeholder='Tell about Yourself'
                            value={user.bio}
                            name='bio'
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-end w-full'>
                <div onClick={handleSubmit} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0 xsm:px-2 xsm:py-1'>
                    <button className="text-white font-pop font-medium text-[18px] xsm:text-[10px] xsm:py-1 xsm:px-4 md:text-[14px]">Next</button>
                    <img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumerightarrow.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default CYPBasic;
