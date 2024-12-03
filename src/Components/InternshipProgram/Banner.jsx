import React from 'react'

const Banner = () => {
  function ScrollToPap(event) {
    event.preventDefault();
    const navbarHeight = 80;
    const papElement = document.getElementById("questionform");
    if (papElement) {
      const targetOffset = papElement.offsetTop - navbarHeight;
      window.scrollTo({ top: targetOffset, behavior: "smooth" });
    } 
  }
  return (
    <div className=" bg-white ">
    <div
      style={{ backgroundImage: "url('/internshipbackground.png')" }}
      className="bg-[#0F2027] bg-cover h-[80vh]"
    >
      <div className="flex justify-between h-[90vh]">
        <div className=" flex p-32 flex-col gap-6 xsm:p-10 sm:p-16 md:p-12 lg:p-16">
          <h1 className=" text-white font-semibold text-7xl xsm:text-3xl sm:text-4xl md:text-4xl lg:text-5xl ">
          Become Corporate-Ready <br />{" "}
            <span className=" text-[#1DBF73]">in Just 6 Months!</span>
          </h1>
          <p className="text-white tracking-wide ">
          Gain the skills, confidence, and connections to kickstart your career. Ready to take the leap? Let's get started!           
          </p>
          <button onClick={ScrollToPap} className=" bg-[#1DBF73] text-white w-[20%] p-2 xsm:w-full sm:w-full md:w-[30%] lg:w-[20%]  text-xl font-bold tracking-wide rounded-full">
            Book Now
          </button>
        </div>
        <div className="  xsm:hidden sm:hidden">
          <img src="Group.png" alt="" className="h-[80%]  lg:h-[60%]  md:h-[50%] md:w-[50vw]" />
        </div>
      </div>
    </div>
    <div className=" ml-[20%] relative bottom-32 xsm:ml-[12%] xsm:w-full sm:ml-24 sm:mt-24 md:right-[20%]  lg:bottom-28 xl:mt-10 xl:ml-[26%]">
      <div className=" border border-white p-14 lg:p-10 md:p-9 xl:p-10  bg-[#0F2027] xsm:flex-col sm:flex-col flex justify-between xsm:gap-5 sm:gap-5 lg:gap-4 w-9/12  xl:w-[65%] md:w-full md:ml-20 rounded-3xl relative">
        <img
          src="trophy.png"
          className=" xsm:hidden sm:hidden absolute top-0 -right-0 lg:right-2 transform -translate-x-1/2 -translate-y-[65%] bg-[#0F2027] rounded-full border border-white hover:bg-[#1DBF73] hover:cursor-pointer transition-all duration-300 w-[90px] h-[90px]"
          alt=""
        />
        <div className="flex flex-col gap-3 xsm:gap-1 items-center ">
          <h1 className="text-[#1DBF73] text-2xl font-bold xsm:text-2xl sm:text-3xl md:text-3xl lg:text-2xl tracking-tighter">
            6 Months
          </h1>
          <p className="text-white font-semibold ">Practical Learning</p>
        </div>
        <img
          src="bag.png"
          className=" xsm:hidden sm:hidden absolute top-0 left-[60%] md:left-[66%] lg:left-[64%] xl:left-[64%] transform -translate-x-1/2 -translate-y-[65%] bg-[#0F2027] rounded-full border border-white hover:bg-[#1DBF73] hover:cursor-pointer transition-all duration-300 w-[90px] h-[90px]"
          alt=""
        />
        <div className="flex flex-col gap-3 xsm:gap-1 items-center">
          <h1 className="text-[#1DBF73] text-2xl font-bold xsm:text-2xl sm:text-3xl md:text-3xl lg:text-2xl">
          Strengthen
          </h1>
          <p className="text-white font-semibold">Your Aptitude</p>
        </div>
        <img
          src="cal.png"
          className="xsm:hidden sm:hidden absolute top-0 left-[39%] md:left-[41%] transform -translate-x-1/2 -translate-y-[65%] bg-[#0F2027] rounded-full border border-white hover:bg-[#1DBF73] hover:cursor-pointer transition-all duration-300 w-[90px] h-[90px]"
          alt=""
        />
        <div className="flex flex-col gap-3 xsm:gap-1 items-center">
          <h1 className="text-[#1DBF73] text-2xl font-bold xsm:text-2xl sm:text-3xl md:text-3xl lg:text-2xl">
          Grow
          </h1>
          <p className="text-white font-semibold">Your Personality</p>
        </div>
        <img
          src="cale.png"
          className=" xsm:hidden sm:hidden absolute top-0 left-[14%] md:left-[16%] transform -translate-x-1/2 -translate-y-[65%] bg-[#0F2027] rounded-full border border-white hover:bg-[#1DBF73] hover:cursor-pointer transition-all duration-300 w-[90px] h-[90px]"
          alt=""
        />
        <div className="flex flex-col gap-3 xsm:gap-1 items-center">
          <h1 className="text-[#1DBF73] text-2xl font-bold xsm:text-2xl sm:text-3xl md:text-3xl lg:text-2xl">
          Gain
          </h1>
          <p className="text-white font-semibold">Career Access</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner
