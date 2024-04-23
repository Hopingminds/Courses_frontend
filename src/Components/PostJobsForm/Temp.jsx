import React from 'react'

const Temp = () => {
  return (
    <div>
      <div className='flex flex-col gap-1'>
                    <p className='font-semibold'>Do you have more than one vacancy for this job?</p>
                    <div className='flex gap-6'>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name="vacancy" id="Yes" />
                            <label htmlFor="Yes">Yes</label>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name="vacancy" id="No" />
                            <label htmlFor="No">No</label>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="reqvideoprofile" />
                    <label htmlFor="reqvideoprofile" className='font-semibold'>Request candidates for video profile</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="walkin" />
                    <label htmlFor="walkin" className='font-semibold'>Include walk-in details</label>
                </div>
            </div>
            <div className='bg-white px-4 py-8 text-[12px] font-pop flex flex-col gap-4 border-t-2'>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Questions for candidates</p>
                    <p>To better evaluate candidates, ask them questions regarding the job</p>
                </div>
                <button className='text-[18px] text-[#1FC074] border border-[#1FC074]'><span className='text-[22px]'>+</span> Add a question</button>
            </div>
            <div className='bg-white px-4 py-8 text-[12px] font-pop flex flex-col gap-4 border-t-2'>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Collaborate with other users</p>
                    <p>Responses can be viewed by only you. To let other sub-users manage responses, <span className='text-blue-500'>add them</span></p>
                </div>
                <div className='flex gap-1'>
                    <input type="checkbox" id='notify' />
                    <label htmlFor="notify">Notify me about </label>
                    <p className='flex items-center font-semibold'> AI-recommendedapplicants through email <IoMdArrowDropdown fontSize={'1rem'} /></p>
                </div>
                {/* disply if above is checked */}
                {/* from */}
                <div>
                    <p>On which email ids do you want to receive notifications of matching applies?</p>
                    <p>hr@hopingminds.com</p>
                    <select name="" id="">
                        <option value="">
                            <input type="checkbox" /> 
                            <label htmlFor="">hr@hopingminds.com</label>
                        </option>
                    </select>
                </div>
                <div>
                    <p>How often should mails be sent ?</p>
                    <select name="" id="" className='text-[16px] border outline-none'>
                        <option className='border-none' value="">On every new apply</option>
                        <option className='border-none' value="">Daily summary</option>
                    </select>
                </div>
                {/* to */}
    </div>
  )
}

export default Temp