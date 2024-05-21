import React from 'react'

const AddCourses = () => {
    
    return (
        <div className='flex flex-col gap-6 w-full px-14 py-14 font-int font-medium text-[#808080] text-[13px]'>
            <div className='grid grid-cols-2 gap-9 gap-y-4 border border-[#808080] px-8 py-4 w-full'>
                <div>
                    <p>CourseID</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='CourseID' />
                </div>
                <div>
                    <p>Title</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Title'/>
                </div>
                <div>
                    <p>Category</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Category' />
                </div>
                <div>
                    <p>Subcategory</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Subcategory'/>
                </div>
            </div>
            <div className='flex flex-col gap-4 border border-[#808080] px-8 py-4 w-full'>
                <div className='grid grid-cols-2 gap-9'>
                    <div>
                        <p>Course</p>
                        <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Select Overview' />
                    </div>
                    <div>
                        <p>Level</p>
                        <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Level'/>
                    </div>
                </div>
                <div>
                    <p>Overview</p>
                    <textarea className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="text" name="" id="" placeholder='Course Overview' />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-9 gap-y-4 border border-[#808080] px-8 py-4 w-full'>
                <div>
                    <p>Preview Image</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="file" name="Preview Image" id="Preview Image" placeholder='Preview Image' />
                </div>
                <div>
                    <p>Preview Video</p>
                    <input className='w-full border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal' type="file" name="Preview Video" id="Preview Video" placeholder='Preview Video'/>
                </div>
                {/* <div>
                    <label htmlFor="Preview Image" className=' font-normal text-[14px] px-6 py-1 border border-[#808080] rounded-full'>Choose</label>
                </div>
                <div>
                    <label htmlFor="Preview Video" className=' font-normal text-[14px] px-6 py-1 border border-[#808080] rounded-full'>Choose</label>
                </div> */}
            </div>
        </div>
    )
}

export default AddCourses