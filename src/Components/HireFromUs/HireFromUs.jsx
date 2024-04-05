import React from "react";
import Resume2 from "./Resume2";
import Companies from "../Companies";
import "./hirefromus.css";
import WhyHM from "./WhyHM";

const HireFromUs = () => {
  return (
    <>
      <div className=" px-[5%] pt-[4%]  bg-gradient-to-r from-[#0F2027] to-[#203A43] wavebg"  style={{ width: "100%" }}>
        {/* Mainsection */}
        <div className=" flex justify-between pb-[14%]">
          <div className="flex flex-col gap-16 w-[70%] md:gap-10">
            <div>
              <p className="font-pop font-semibold text-[50px] text-white md:text-[32px]">
                Hire Tech Talent That Delivers{" "}
                <span className="text-[#1DBF73]">Quick.simple.</span>
              </p>
            </div>

            {/* set the color of the border in gradient */}
            {/* set the color of the border in gradient */}

            <div className="grid grid-cols-2 gap-16 text-white w-[90%] md:gap-6">
              <div className="bg-[#00000033] flex flex-col gap-6 rounded-xl pb-4 bw-border md:gap-4">
                <div className="border-b-2 w-full flex justify-center items-center py-3">
                  <p className="font-pop font-semibold text-[20px] md:text-[14px]">
                    Roles You Can Hire From
                  </p>
                </div>

                <div className="flex flex-col gap-6 rounded-b-xl px-4 md:gap-3 md:px-2">
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2">
                      1.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px]">
                      Full Stack Developer
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2">
                      2.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px]">
                    Backend Developer
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2">
                      3.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px]">
                    Frontend Developer
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2">
                      4.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px]">
                    Data Analyst
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2">
                      5.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px]">
                    Software Development Engineer In Test ( SDET)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#00000033] flex flex-col gap-6 rounded-xl pb-4 bw-border md:gap-4">
                <div className="border-b-2 w-full flex justify-center items-center py-3">
                  <p className="font-pop font-semibold text-[20px] md:text-[14px]">
                  Our Offerings
                  </p>
                </div>

                <div className="flex flex-col gap-6 rounded-b-xl px-4 md:gap-3 md:px-2">
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2">
                      1.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px]">
                    Immediate Joining
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2">
                      2.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px]">
                    Zero Offer Dropouts
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2">
                      3.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px]">
                    Complete Hiring In 1 day
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2">
                      4.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px]">
                    PAN India Availabilitiy
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2">
                      5.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px]">
                    Continuous hiring pipeline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] self-end">
            <div className="bg-[#00000033] backdrop-blur rounded-xl py-6 text-white flex flex-col gap-6 bw-border md:gap-4 md:py-3">
              <div className="flex justify-center text-center">
                <p className="font-pop font-semibold text-[20px] md:text-[14px]">Share Your Hiring Requirements</p>
              </div>
              <div className="flex flex-col gap-2 px-6">
                <div className="flex flex-col gap-1">
                  <label className="text-[16px] font-medium md:text-[12px]" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    className="bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px]"
                    type="text"
                    placeholder="Enter Your name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[16px] font-medium md:text-[12px]" htmlFor="pass">
                  Company
                  </label>
                  <input
                    id="pass"
                    className="bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px]"
                    type="password"
                    placeholder="Enter Your Company"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[16px] font-medium md:text-[12px]" htmlFor="study">
                  Work E-mail
                  </label>
                  <input
                    id="study"
                    className="bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px]"
                    type="text"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[16px] font-medium md:text-[12px]" htmlFor="time">
                  Phone number
                  </label>
                  <input
                    id="time"
                    className="bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px]"
                    type="text"
                    placeholder="Enter Your Mobile number"
                  />
                </div>
              </div>
              <div className="px-6">
                <button className="bg-[#1DBF73] border-[1px] border-[#808080] rounded-md py-1 font-int font-medium w-full md:text-[14px]">
                Submit
                </button>
              </div>
              <div className="flex justify-center px-6">
                <p className="font-int font-medium text-[14px] md:text-[10px]">
                  Have Questions?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Companies />
      <Resume2 />
      <WhyHM />
    </>
  );
};

export default HireFromUs;
