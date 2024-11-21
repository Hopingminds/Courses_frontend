import React from 'react'

const Banner = () => {
  return (
    <div className=' bg-black font-pop'>
      <div style={{ backgroundImage: "url('/background.png')" }} className="bg-[#0F2027]">
      <div className='flex justify-between'>
        <div className=' flex p-32 flex-col gap-6 xsm:p-10 sm:p-16 md:p-12 lg:p-16'>
            <h1 className=' text-white font-semibold text-7xl xsm:text-3xl sm:text-4xl md:text-4xl lg:text-5xl '>Become Corporate-Ready <br /> <span className=' text-[#1DBF73]'>in Just 6 Months!</span></h1>
            <p className='text-white font-pop tracking-wide '>Gain the skills, confidence, and connections to kickstart your career. Ready to take the leap? Let's get started!</p>
            <button className=' bg-[#1DBF73] text-white w-[48%] py-6 px-5 xsm:w-full sm:w-full md:w-[70%] lg:w-[70%]  text-2xl font-bold tracking-wide rounded-full'>Claim Your Free Consultation Now</button>
        </div>
        <div className='xsm:hidden sm:hidden h-[90%]'>
            {/* <img src="Vector 2.png" alt="" className='py-9 relative z-50 '/>
            <img src="Rectangle 2.png" alt="" className=' absolute top-5 right-0 z-40 h-[520px] md:h-[200px] lg:h-[300px] mt-8' />
            <img src="Rectangle 36.png" alt="" className=' relative ml-60 -mt-24 z-40 md:hidden '/>
            <img src="Rectangle 37.png" alt="" className=' absolute top-0 mt-24 z-40 md:mt-16 ' /> */}
            <img src="/Group.png" alt="" className='h-full'/>
        </div>
      </div>
      </div>
      <div className=' ml-[20%] relative bottom-32 xsm:ml-[20%] xsm:mt-[40%] sm:ml-24 sm:mt-24 md:right-[20%] md:mt-36 lg:bottom-0 xl:mt-10 xl:ml-[26%]'>
        <div className=' border border-white p-10 lg:p-10 md:p-9 xl:p-10  bg-[#0F2027] xsm:flex-col sm:flex-col flex justify-between xsm:gap-5 sm:gap-5 lg:gap-5 w-[80%] xl:w-[65%] md:w-screen rounded-3xl relative'>
        <img src="trophy.png" className=' xsm:hidden sm:hidden absolute top-0 right-[2.25rem] lg:right-7 transform -translate-x-1/2 -translate-y-[65%] bg-[#0F2027] rounded-full border border-white hover:bg-[#1DBF73] hover:cursor-pointer transition-all duration-300 w-[90px] h-[90px]' alt="" />
            <div className='flex flex-col gap-3 xsm:gap-1 items-center '>
            
                <h1 className='text-[#1DBF73] font-pop text-2xl font-bold xsm:text-2xl sm:text-3xl md:text-3xl lg:text-2xl tracking-tighter'>6 Months</h1>
                <p className='text-white font-pop font-semibold '>of Practical Learning</p>
                
            </div>
            <img src="bag.png" className=' xsm:hidden sm:hidden absolute top-0 left-[65%] lg:left-[60%] transform -translate-x-1/2 -translate-y-[65%] bg-[#0F2027] rounded-full border border-white hover:bg-[#1DBF73] hover:cursor-pointer transition-all duration-300 w-[90px] h-[90px]' alt="" />
            <div className='flex flex-col gap-3 xsm:gap-1 items-center'>
            
                <h1 className='text-[#1DBF73] font-pop text-2xl font-bold xsm:text-2xl sm:text-3xl md:text-3xl lg:text-2xl'>Strengthen</h1>
                <p className='text-white font-pop font-semibold'>Your Aptitude</p>
            </div>
            <img src="cal.png" className='xsm:hidden sm:hidden absolute top-0 left-[39%] transform -translate-x-1/2 -translate-y-[65%] bg-[#0F2027] rounded-full border border-white hover:bg-[#1DBF73] hover:cursor-pointer transition-all duration-300 w-[90px] h-[90px]' alt="" />
            <div className='flex flex-col gap-3 xsm:gap-1 items-center'>
            
                <h1 className='text-[#1DBF73] font-pop text-2xl font-bold xsm:text-2xl sm:text-3xl md:text-3xl lg:text-2xl'>Grow</h1>
                <p className='text-white font-pop font-semibold'>Your Personality</p>
            </div>
            <img src="cale.png" className=' xsm:hidden sm:hidden absolute top-0 left-[14%] transform -translate-x-1/2 -translate-y-[65%] bg-[#0F2027] rounded-full border border-white hover:bg-[#1DBF73] hover:cursor-pointer transition-all duration-300 w-[90px] h-[90px]' alt="" />
            <div className='flex flex-col gap-3 xsm:gap-1 items-center'>
            
                <h1 className='text-[#1DBF73] font-pop text-2xl font-bold xsm:text-2xl sm:text-3xl md:text-3xl lg:text-2xl'>Open Doors</h1>
                <p className='text-white font-pop font-semibold'>To Career Opportunities</p>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
