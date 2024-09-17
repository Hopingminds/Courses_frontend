export default function Header({ scrollToFreelancingPage }) {
  return (
    <div className="py-6 pl-[5vw] bg-gradient-to-l from-[#0F2027] via-[#0B1418] to-[#203A43] w-full flex flex-col lg:flex-row justify-between font-pop px-6 lg:px-[10%] h-[80vh] lg:h-[80vh] xsm:h-[60vh]">
      <div className="text-white w-full">
        <div className="flex flex-col py-[5vh]">
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[70px] 2xl:text-[80px] 3xl:text-[90px] font-semibold font-pop mb-4">
            Unlock Your
          </h1>
          <h1 className="text-4xl text-green-600 sm:text-[50px] sm:flex sm:gap-4 xsm:gap-2 md:text-[60px] md:flex lg:text-[60px] lg:flex xl:text-[70px] xl:flex 2xl:text-[80px] 2xl:flex 3xl:text-[90px] 3xl:flex font-semibold font-pop">
            Freelancing Opportunities!
          </h1>
        </div>
        <div className="mt-[6vh] lg:mt-[9vh] w-full sm:w-[70vw] md:w-[60vw] lg:w-[70vw] font-pop">
          <p className="text-2xl sm:text-xl md:text-2xl  lg:text-2xl">
            Complete your course and start your freelancing journey with top
            companies.
          </p>
          <button
            className="bg-green-600 hover:bg-green-700 xsm:w-[60%] xsm:mt-5 sm:w-[60%] sm:mt-5 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-pop rounded-full w-[20vw] md:w-[60%] lg:w-[25vw] h-[7vh] mt-[15vh] lg:mt-[10vh]"
            onClick={scrollToFreelancingPage}
          >
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  );
}
