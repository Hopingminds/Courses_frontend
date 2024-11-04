import React from "react";
import { useNavigate } from "react-router-dom";

const ManageJobsHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-pop font-semibold text-[30px] sm:text-[15px] xsm:text-[15px] sm:font-an">
          Manage Jobs and Responses
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div
          onClick={() => navigate("/postjob")}
          className="cursor-pointer bg-[#1FC074] text-white px-5 py-1 rounded-md sm:text-[10px] xsm:text-[12px]"
        >
          {/* <select name="" id="" className='bg-[#1FC074] w-full text-white text-[18px] outline-none'>
                    <option className='bg-white text-black text-[16px]' value="" disabled hidden selected>Post Job</option>
                    <option className='bg-white text-black text-[16px]' value="">A</option>
                    <option className='bg-white text-black text-[16px]' value="">B</option>
                    <option className='bg-white text-black text-[16px]' value="">C</option>
                    <option className='bg-white text-black text-[16px]' value="">D</option>
                </select> */}
          Post Job
        </div>
        {/* <IoIosSettings
          fontSize={"1.75rem"}
          className="text-gray-400 cursor-pointer"
        /> */}
      </div>
    </div>
  );
};

export default ManageJobsHeader;
