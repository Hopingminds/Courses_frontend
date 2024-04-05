import React from 'react'

const DetailTableDashboard = ({data}) => {
    console.log(data);
  return (<>
    <div className='px-[4%] flex flex-col gap-4'>
        <div className='grid grid-cols-7 bg-[#000000] py-6 text-center'>
            <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Student Id</p>
            <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Name</p>
            <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Attendance</p>
            <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Branch</p>
            <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Field of study</p>
            <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Assesment</p>
            <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Status</p>
        </div>
        {
            data?.map((item)=>{
                return(<>
                 <div className='grid grid-cols-7 bg-[#fff] py-3 text-center shadow-lg'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>{item?._id.slice(0,10)}</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>{item?.name}</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>{item?.stream}</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Data Science</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Pending</p>
        </div>
                </>)
            })
        }
        {/* <div className='grid grid-cols-7 bg-[#fff] py-3 text-center shadow-lg'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Cse</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Data Science</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Pending</p>
        </div> */}
        {/* <div className='grid grid-cols-7 bg-[#fff] py-3 text-center shadow-lg'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Cse</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Data Science</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#1DBF73] text-[16px] font-pop font-semibold'>Success</p>
        </div> */}
        {/* <div className='grid grid-cols-7 bg-[#fff] py-3 text-center shadow-lg'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Cse</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Data Science</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#1DBF73] text-[16px] font-pop font-semibold'>Success</p>
        </div> */}
        {/* <div className='grid grid-cols-7 bg-[#fff] py-3 text-center shadow-lg'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Cse</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Data Science</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Pending</p>
        </div> */}
        {/* <div className='grid grid-cols-7 bg-[#fff] py-3 text-center shadow-lg'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Abc</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Cse</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Data Science</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>64%</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>Pending</p>
        </div> */}
    </div>

    <div className='w-full flex justify-center'>
        <button className='text-[#fff] text-[18px] rounded-3xl font-pop font-medium bg-[#000] px-12 py-3'>Download</button>
    </div>
    </>
  )
}

export default DetailTableDashboard