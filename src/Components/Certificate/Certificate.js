import React from "react";
import Img1 from "../../Assests/Images/certificate.png";

const Certificate = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center bg-[#F0FFF7] gap-10 px-[5%] py-14 xsm:py-6 xsm:gap-4 md:py-10">
        <div className="w-[65%] h-[55vh] xsm:h-[14vh] md:h-[16vh] md:w-[50%]">
          <img src='/Divyam-vashisht.jpg' className="w-full h-full object-fit" />
        </div>
        <div className="flex flex-col space-y-3 w-[70%] xsm:gap-2 xsm:space-y-0">
          <p className="text-[36px] text-[#000000] font-pop font-semibold xsm:text-[12px] md:text-[28px]">
            {" "}
            <span className="text-[#1DBF73]"> Certification </span> Provided In Partnership With N.S.D.C
          </p>
          <p className="text-[#000000] text-[20px] font-pop text-justify xsm:text-[7px] xsm:leading-3 xsm:text-balance md:text-[10px] md:leading-5">
            NSDC Certification is a prestigious recognition for students who
            have completed accredited skill-based training programs. <span className="text-[#000000] text-[20px] font-pop xsm:hidden md:text-[10px]"> It
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
