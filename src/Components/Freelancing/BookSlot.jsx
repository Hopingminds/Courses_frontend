import React from "react";
import { useNavigate } from "react-router-dom";

const BookSlot = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/internshipProgram', { state: { scrollToQuestionForm: true } });  // Pass state to trigger scroll
  };

  return (
    <div className="bg-gradient-to-l from-[#0F2027] via-[#0B1418] to-[#203A43] w-full font-pop xsm:pl-2 pl-[5%] xsm:h-[80vh] sm:h-[100vh] py-10 md:h-[70vh] lg:h-[70vh] h-[70vh]">
      <div className="flex w-[100%] xsm:flex xsm:flex-col xsm:justify-center sm:flex sm:flex-col sm:justify-center">
        <p className="text-[40px] sm:text-[30px] xsm:w-full xsm:text-[20px] md:text-[30px] lg:text[40px] xl:text-[40px] 2xl:text-[40px] text-[#1DBF73] font-pop mr-2 font-semibold">
          Book A Slot With Our Experts
        </p>
        <p className="text-[40px] xsm:w-full xsm:text-[20px] sm:text-[30px] md:text-[30px] lg:text[40px] xl:text-[40px] 2xl:text-[40px] font-pop text-white font-semibold">
          To Have Guidance
        </p>
      </div>
      <div className="flex sm:flex sm:flex-col sm:justify-center xsm:flex xsm:flex-col xsm:justify-center h-full">
        {/* Left Section - Text (70%) */}
        <div className="w-[70%] h-full flex flex-col py-10 gap-10 xsm:w-full sm:w-full">
          <div className="xsm:w-full sm:w-full">
            <p className="text-white font-pop text-[22px] mt-4 space-y-1">
              Need guidance on your learning journey or career path? Our experts
              are here to help! Book your slot now, and we'll give you a call to
              provide personalized advice on your next steps.
            </p>
          </div>
          <div className="mt-[9vh] w-[20vw] font-pop xsm:mt-2 sm:mt-2 xsm:w-full sm:w-full">
            <button
              onClick={handleBookNowClick}
              className="bg-green-600 hover:bg-green-700 text-white text-lg xsm:text-sm sm:text-sm xsm:h-[6vh] sm:h-[6vh] font-pop xsm:top-0 sm:top-0  rounded-full xsm:w-[30%]  xsm:items-center sm:w-[30%] sm:items-center w-[15vw] md:w-[30vw] h-[7vh]  top-4 mt-10"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Right Section - Image (30%) */}
        <div className="w-[30%] flex xsm:w-full sm:w-full sm:flex-col xsm:flex-col md:w-full md-h-full lg:w-full lg:h-full justify-end items-end">
          <img
            src="/freelancingImage.png"
            alt="Expert Guidance"
            className="w-full object-cover rounded-lg self-end pb-4 md:pb-0 sm:pb-[3rem] xsm:pb-[3rem] sm:px-6 xsm:px-6 xsm:flex xsm:items-center sm:flex sm:items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default BookSlot;
