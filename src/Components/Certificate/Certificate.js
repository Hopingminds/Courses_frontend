import React from "react";

const Certificate = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center bg-[#F0FFF7] gap-14 px-[5%] py-16 xsm:py-6 xsm:gap-4 md:py-10 xsm:flex-col">
        <div className="w-[65%] h-[520px] sm:h-[200px] md:h-[220px] md:w-[50%] lg:h-[300px] lg:w-[50%] xsm:w-[90%] xsm:h-auto">
          <img src='/Divyam-vashisht.jpg' className="w-full h-full object-fit" alt="" />
        </div>
        <div className="flex flex-col space-y-6 w-[70%] xsm:gap-2 xsm:space-y-0 xsm:w-[90%]">
          <p className="text-[40px] text-[#000000] font-pop font-semibold xsm:text-[18px] sm:text-[20px] md:text-[28px] xsm:text-center ">
            {" "}
            <span className="text-[#1DBF73]"> Certification </span> Provided In Partnership With N.S.D.C
          </p>
          <p className="text-[#3C3C3C] text-[24px] font-pop text-justify leading-10 xsm:text-[12px] sm:text-[10px] xsm:leading-6 xsm:text-balance sm:leading-4 md:text-[10px] md:leading-5 lg:text-[18px] lg:leading-8 ">
            NSDC Certification is a prestigious recognition for students who
            have completed accredited skill-based training programs.<span className="text-[#000000] text-[24px] font-pop xsm:hidden sm:text-[10px] md:text-[10px] lg:text-[18px] lg:leading-8 xsm:leading-8"> It
            validates their expertise, demonstrating their dedication to
            practical skills. This certification provides a competitive edge in
            the job market, showcasing proficiency and adherence to industry
            standards. </span> NSDC certifications are widely accepted, unlocking
            rewarding career opportunities and personal growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default Certificate;
