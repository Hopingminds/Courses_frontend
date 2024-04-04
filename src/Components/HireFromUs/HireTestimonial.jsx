import React from 'react'

const HireTestimonial = () => {
    
    const tempdata = [
        {
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimnisi ut aliquip ex ea commodo consequat.ptate velit esse cillum dolore eu fugiat nulla pariatur.',
            name:'Anna Hathway',
            star:3,
            emptystar:2,
        },
        {
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimnisi ut aliquip ex ea commodo consequat.ptate velit esse cillum dolore eu fugiat nulla pariatur.',
            name:'Anna Hathway',
            star:4,
            emptystar:1,
        },
    ]

  return (
    <div>
        <div className='py-[4%] text-white font-pop font-semibold text-[40px] text-center'>
            <p>What <span className='text-[#1DBF73]'>Our Students</span> Have To Say</p>
        </div>
        {/* splide */}
        <div>
            {/* row1 */}
            <div className='flex gap-4'>
                {
                    tempdata.map((data,index)=>(
                        <div
                            key={index}
                            className={`w-[23%] p-4 rounded-lg flex flex-col gap-2  ${index%2 === 0 ?'bg-[#FFFFFF] text-[#4C4646]':'bg-[#4C4646] text-white'}`}>
                            <div>
                                <img className='w-4' src="../Icons/hireinvertedcomma.svg" alt="" />
                            </div>
                            <div>
                                <p className='text-[12px] font-pop'>{data.text}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='rounded-full w-[22%]'>
                                    <img className='w-full' src="../img/hireprofileimg.png" alt="" />
                                </div>
                                <div>
                                    <div>
                                        <p className='font-pop font-semibold text-[12px]'>{data.name}</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        {[...Array(data.star)].map( () => {
                                            return (<img className='w-3' src='../Icons/hirestar.svg' alt="" />)
                                        })}
                                        {[...Array(data.emptystar)].map( () => {
                                            return (<img className='w-3' src='../Icons/hirestarempty.svg' alt="" />)
                                        })}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* row2 */}
            <div></div>
        </div>
    </div>
  )
}

export default HireTestimonial