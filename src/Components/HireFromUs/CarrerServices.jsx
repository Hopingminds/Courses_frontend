import React, { useState } from 'react'
import Resume from './Resume'
import Companies from '../Companies'
import './hirefromus.css'
import HireTestimonial from './HireTestimonial'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import toast, { Toaster } from 'react-hot-toast';
import { BASE_URL } from '../../Api/api'

const CareerServices = () => {
    const [carreer, setcarreer] = useState({
        "name": "",
        "email": "",
        "phone": "",
        "degree": ""
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setcarreer({
            ...carreer,
            [name]: value,
            
        });
    };
    async function handleRegister(){
        if(!carreer.degree || !carreer.email || !carreer.name|| !carreer.phone ){
            toast.error('Every input must be filled')
            return;
        }
        else{
            try {
                let url=BASE_URL+'/addcareerform'
                const data=await fetch(url,{
                    method:'POST',
                    headers: {
                        'Accept': 'application.json',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(carreer),
                })
                const response=await data.json()
                if(response.success){
                    toast.success(response.message)
                    // setcarreer({
                    //     "name": "",
                    //     "email": "",
                    //     "phone": "",
                    //     "degree": ""
                    // })
                }
                else{
toast.error(response.message)
                }
            } catch (error) {
                
            }
        }
    }
  return (
    <>
                <Toaster position="top-right" />

        <div className=' px-[5%] py-[5%] bg-gradient-to-r from-[#0F2027] to-[#203A43] backgroundsvg md:mb-6 xsm:pb-[14%]'>
            {/* Mainsection */}

            <div className=' flex justify-between pr-[12%] md:pr-[0%] xsm:flex-col xsm:pr-[0%] xsm:gap-4'>
                <div className='w-[55%] flex flex-col gap-16 xsm:w-full xsm:gap-6'>
                    <div>
                        <p className='font-pop font-semibold text-[50px] text-white md:text-[32px] xsm:text-[20px]'>Make your career thrive with <span className='text-[#1DBF73]'>Hoping Minds !</span></p>
                    </div>

                    {/* set the color of the border in gradient */}

                        <div className='text-white pl-8 md:pl-0 xsm:pl-0 xsm:pr-8'>
                        <Splide
                            options={{
                                type: "loop",
                                perPage: (window.innerWidth >= 721 && window.innerWidth <= 1024) ? 2 : 3,
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
                                gap: window.innerWidth <= 480 ? '1rem' : (window.innerWidth >= 721 && window.innerWidth <= 1024) ? '2rem' : '4rem',
                            }}>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border md:gap-4 xsm:gap-2'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10 md:w-6 md:h-6 xsm:w-4 xsm:h-4' src="../Icons/hireheadicon1.svg" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px] md:text-[12px] xsm:text-[10px]'>Job Placement Guarantee</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border md:gap-4 xsm:gap-2'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10 md:w-6 md:h-6 xsm:w-4 xsm:h-4' src="../Icons/hireheadicon2.svg" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px] md:text-[12px] xsm:text-[10px]'>Tailored Curriculum</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border md:gap-4 xsm:gap-2'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10 md:w-6 md:h-6 xsm:w-4 xsm:h-4' src="../Icons/hireheadicon3.png" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px] md:text-[12px] xsm:text-[10px]'>Experienced Instructors</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border md:gap-4 xsm:gap-2'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10 md:w-6 md:h-6 xsm:w-4 xsm:h-4' src="../Icons/hireheadicon3.png" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px] md:text-[12px] xsm:text-[10px]'>Hands-on Projects</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border md:gap-4 xsm:gap-2'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10 md:w-6 md:h-6 xsm:w-4 xsm:h-4' src="../Icons/hireheadicon3.png" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px] md:text-[12px] xsm:text-[10px]'>Industry Partnerships</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border md:gap-4 xsm:gap-2'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10 md:w-6 md:h-6 xsm:w-4 xsm:h-4' src="../Icons/hireheadicon3.png" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px] md:text-[12px] xsm:text-[10px]'>Continuous Support</p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='bg-[#00000033] flex flex-col items-center px-2 py-4 gap-6 rounded-xl bw-border md:gap-4 xsm:gap-2'>
                                    <div className='bg-[#1DBF73] flex justify-center rounded-full px-2 py-2'>
                                        <img className='w-10 h-10 md:w-6 md:h-6 xsm:w-4 xsm:h-4' src="../Icons/hireheadicon3.png" alt="" />
                                    </div>
                                    <div>
                                        <p className='font-pop font-semibold text-center text-[14px] md:text-[12px] xsm:text-[10px]'>Flexible Learning Options</p>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
                <div className='w-[30%] md:w-[40%] xsm:w-[90%]'>
                    <div className='bg-[#00000033] bw-border rounded-xl p-6 text-white flex flex-col gap-4 md:p-4'>
                        <div>
                            <p className='font-int font-bold md:text-[14px] xsm:text-[12px]'>Connect with us!</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <label className='text-[13px] font-medium md:text-[12px] xsm:text-[10px]' htmlFor="name">Name</label>
                                <input onChange={handleChange} value={carreer.name} name="name"  id='name' className='bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[15px] md:text-[12px] xsm:text-[10px]' type="text" placeholder='Enter Your name' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-[13px] font-medium md:text-[12px] xsm:text-[10px]' htmlFor="email">Email</label>
                                <input onChange={handleChange} value={carreer.email} name="email" id='email' className='bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[15px] md:text-[12px] xsm:text-[10px]' type="email" placeholder='Enter Your Email' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-[13px] font-medium md:text-[12px] xsm:text-[10px]' htmlFor="study">Phone No.</label>
                                <input onChange={handleChange} value={carreer.phone} name='phone' id='phone' className='bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[15px] md:text-[12px] xsm:text-[10px]' type="number" placeholder='Enter Your Phone No.' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-[13px] font-medium md:text-[12px] xsm:text-[10px]' htmlFor="time">Degree</label>
                                <input onChange={handleChange} value={carreer.degree} id='degree' name="degree" className='bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[15px] md:text-[12px] xsm:text-[10px]' type="text" placeholder='Enter Your Degree' />
                            </div>
                        </div>
                        <div>
                            <button className='bg-[#1DBF73] border-[1px] border-[#808080] rounded-md py-1 font-int font-medium w-full md:text-[14px] xsm:text-[10px]' onClick={handleRegister}>Submit</button>
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-int font-medium text-[14px] md:text-[10px] xsm:text-[10px]'>Have Questions?</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            <Companies />
        <div className='px-[5%] py-[4%] bg-gradient-to-r from-[#0F2027] to-[#203A43] bottomsvg md:mt-6'>
            <Resume/> 
            <HireTestimonial/>
        </div>
    </>
  )
}

export default CareerServices
