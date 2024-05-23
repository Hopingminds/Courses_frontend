import React from 'react'

const AddCourses = () => {
    
    return (
        <div className='flex flex-col gap-6 w-full px-14 py-14 font-int font-medium text-[#808080] text-[13px]'>
            <div className='grid grid-cols-2 gap-9 gap-y-4 border border-[#808080] px-8 py-4 w-full'>
                <div className='flex flex-col gap-2'>
                    <p>CourseID</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='CourseID' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Title</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Title'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Category</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Category' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Subcategory</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Subcategory'/>
                </div>
            </div>
            <div className='flex flex-col gap-4 border border-[#808080] px-8 py-4 w-full'>
                <div className='grid grid-cols-2 gap-9'>
                    <div className='flex flex-col gap-2'>
                        <p>Course</p>
                        <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Select Overview' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Level</p>
                        <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Level'/>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Overview</p>
                    <textarea className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Course Overview' />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-9 gap-y-4 border border-[#808080] px-8 py-4 w-full'>
                <div className='flex flex-col gap-2'>
                    <p>Preview Image</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="file" name="Preview Image" id="Preview Image" placeholder='Preview Image' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Preview Video</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="file" name="Preview Video" id="Preview Video" placeholder='Preview Video'/>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-9'>
                <div className='flex flex-col border border-[#808080] px-8 py-4 w-full'>
                    <div className='flex flex-col gap-2'>
                        <p>Frequently Asked Questions</p>
                        <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Questions' />
                        <textarea className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Answer' />
                    </div>
                </div>
                <div className='flex flex-col gap-4 border border-[#808080] px-8 py-4 w-full'>
                    <div className='grid grid-cols-2 gap-9'>
                        <div className='flex flex-col gap-2'>
                            <p>Course</p>
                            <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Select Overview' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p>Level</p>
                            <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Level'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Overview</p>
                        <textarea className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Course Overview' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 border border-[#808080] px-8 py-4 w-full'>
                <p>What will I learn?</p>
                <textarea className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='What will I learn?' />
            </div>
            <div className='flex justify-center font-normal text-[13px]'>
                <button className='flex text-white gap-2 bg-black px-12 py-3 rounded-lg justify-center items-center'>
                    <p>Upload Course</p>
                </button>
            </div>
        </div>
    )
}

export default AddCourses