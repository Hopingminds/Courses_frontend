import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import './hirefromus.css'

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
            name:'Anna ',
            star:4,
            emptystar:1,
        },
        {
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimnisi ut aliquip ex ea commodo consequat.ptate velit esse cillum dolore eu fugiat nulla pariatur.',
            name:'Anna Hathway',
            star:3,
            emptystar:2,
        },
        {
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimnisi ut aliquip ex ea commodo consequat.ptate velit esse cillum dolore eu fugiat nulla pariatur.',
            name:'Anna ',
            star:4,
            emptystar:1,
        },
        {
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimnisi ut aliquip ex ea commodo consequat.ptate velit esse cillum dolore eu fugiat nulla pariatur.',
            name:'Anna Hathway',
            star:3,
            emptystar:2,
        },
        {
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimnisi ut aliquip ex ea commodo consequat.ptate velit esse cillum dolore eu fugiat nulla pariatur.',
            name:'Anna ',
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
        <div className='flex flex-col gap-8'>
            {/* row1 */}
            <div className=' '>
                <Splide
                    options={{
                        type: "loop",
                        perPage: 4,
                        pagination: false,
                        perMove: 1,
                        wheel: false,
                        arrows: false,
                        autoplay: true,
                        interval: 2000,
                        speed: 1500,
                        delay: 4,
                        pauseOnHover: false,
                        drag: true,
                        gap:'1rem',
                    }}>
                    {tempdata.map((data,index)=>(
                    <SplideSlide>
                        <div
                            key={index}
                            className={`w-full p-4 rounded-lg flex flex-col gap-2  ${index%2 === 0 ?'bg-[#FFFFFF] text-[#4C4646]':'bg-[#4C4646] text-white'}`}>
                            <div>
                                <img className={`w-4 ${index%2 === 0 ?' hire-icon-color-invert':' '}`} src="../Icons/hireinvertedcomma.svg" alt="" />
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
                </SplideSlide>
                    ))}
                </Splide>
            </div>
            {/* row2 */}
            <div className=' '>
                <Splide
                    options={{
                        type: "loop",
                        perPage: 4,
                        pagination: false,
                        perMove: 1,
                        wheel: false,
                        arrows: false,
                        autoplay: true,
                        interval: 2000,
                        speed: 1500,
                        direction:'rtl',
                        right: true, // Set rtl option to true to move from left to right
                        pauseOnHover: false,
                        drag: true,
                        gap:'1rem',
                    }}>
                    {tempdata.slice(0).reverse().map((data,index)=>(
                    <SplideSlide>
                        <div
                            key={index}
                            className={`w-full p-4 rounded-lg flex flex-col gap-2  ${index%2 === 0 ?'bg-[#FFFFFF] text-[#4C4646]':'bg-[#4C4646] text-white'}`}>
                            <div>
                                <img className={`w-4 ${index%2 === 0 ?' hire-icon-color-invert':' '}`} src="../Icons/hireinvertedcomma.svg" alt="" />
                            </div>
                            <div>
                                <p className='text-[12px] font-pop text-left'>{data.text}</p>
                            </div>
                            <div className='flex flex-row-reverse items-center'>
                                <div className='rounded-full w-[22%]'>
                                    <img className='w-full' src="../img/hireprofileimg.png" alt="" />
                                </div>
                                <div>
                                    <div>
                                        <p className='font-pop font-semibold text-left text-[12px]'>{data.name}</p>
                                    </div>
                                    <div className='flex flex-row-reverse gap-1'>
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
                </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    </div>
  )
}

export default HireTestimonial