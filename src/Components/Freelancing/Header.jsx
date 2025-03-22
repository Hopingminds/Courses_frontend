import cover from "../../Assests/freelance/cover.png";

export default function Header({ scrollToFreelancingPage }) {
  return (
    <div className="py-6 pl-[5vw] bg-gradient-to-l from-[#0F2027] via-[#0B1418] to-[#203A43] w-full flex flex-col lg:flex-row justify-between font-pop px-6 lg:px-[10%] h-[40%] lg:h-[40%] sm:h-[30%] md:h-[40vh] relative xsm:max-h-[20%] xsm:pb-1">
      <div className="text-white w-full ">
        <div className="flex flex-col py-[5vh] -mb-5 md:py-1 xsm:py-1">
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[2rem] lg:text-[3.75rem] xl:text-[4.375rem] 2xl:text-[5rem] font-semibold -mb-5 sm:mb-2 xsm:text-[1rem]">
            Unlock Your
          </h1>
          <h1 className="text-green-600 flex flex-wrap sm:gap-4 md:gap-3 lg:gap-0 text-[2rem] sm:text-[2.5rem] md:text-[2rem] lg:text-[3.75rem] xl:text-[4.375rem] 2xl:text-[5rem] font-semibold xsm:text-[0.9rem]">
            Freelancing Opportunities!
          </h1>
        </div>
        <div className="mb-[4vh] lg:mt-[5vh] w-full sm:w-[70vw] md:w-[60vw] lg:w-[70vw] xsm:mt-0">
          <p className="text-lg sm:text-xl md:text-lg lg:text-xl xsm:text-[10px]">
            Complete your course and start your freelancing
          </p>
          <p className="text-lg sm:text-xl md:text-lg lg:text-xl xsm:text-[10px]">
            journey with top companies.
          </p>
          <button
            className="bg-green-600 hover:bg-green-700 mt-12 sm:mt-5 text-white text-lg sm:text-xl md:text-lg lg:text-2xl font-pop rounded-full px-4 py-2 xsm:text-[6px] xsm:py-0 xsm:mt-2 xsm:mb-1"
            onClick={scrollToFreelancingPage}
          >
            Explore Opportunities
          </button>
        </div>
      </div>
      <div className="absolute right-0 -bottom-10 lg:bottom-[-2.2rem] md:bottom-[-1.4rem] md:left-[70%] sm:-bottom-[0.9rem] xsm:bottom-[-0.7rem] sm:left-[50%]">
        <img
          src={cover}
          alt="cover"
          className="w-[80%] xsm:w-[7rem] lg:w-[22rem] object-contain sm:w-[60%]"
        />
      </div>
    </div>
  );
}
