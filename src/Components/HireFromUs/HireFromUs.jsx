import React from "react";
import Resume2 from "./Resume2";
import Companies from "../Companies";
import "./hirefromus.css";
import WhyHM from "./WhyHM";
import {ReactComponent as Ok} from '../../Assets/Icons/ok.svg'
const HireFromUs = () => {
  return (
    <>
      <div className=" px-[5%] pt-[4%]  bg-gradient-to-r from-[#0F2027] to-[#203A43] wavebg"  style={{ width: "100%" }}>
        {/* Mainsection */}
        <div className=" flex justify-between pb-[18%] xsm:flex-col xsm:gap-2 xsm:pb-[35%] ">
          <div className="flex flex-col gap-16 w-[70%] md:gap-10 xsm:w-full xsm:gap-6 ">
            <div>
              <p className="font-pop font-semibold text-[50px] text-white md:text-[32px] xsm:text-[24px]">
                Hire Tech Talent That Delivers{" "}
                <span className="text-[#1DBF73]">Quick.simple.</span>
              </p>
            </div>


            <div className="flex flex-col gap-y-7">
              <div className="flex items-center gap-x-4">
                <Ok/>
                <div className="text-[#FFFFFF] font-semibold text-lg">Hire from our Pan-India Talent pool, across 100+ colleges</div>
              </div>
              <div className="flex items-center gap-x-4">
                <Ok/>
                <div className="text-[#FFFFFF] font-semibold text-lg">Pre-Trained Developers available across 10 profiles</div>
              </div>
              <div className="flex items-center gap-x-4">
                <Ok/>
                <div className="text-[#FFFFFF] font-semibold text-lg">Experience ranging from 0 to 3 years</div>
              </div>
              <div className="flex items-center gap-x-4">
                <Ok/>
                <div className="text-[#FFFFFF] font-semibold text-lg">Available for Full-Time as well as for Internships</div>
              </div>
              <div className="flex items-center gap-x-4">
                <Ok/>
                <div className="text-[#FFFFFF] font-semibold text-lg">Solve your long-term Entry-Level Tech recruitment needs</div>
              </div>
            </div>

            {/* set the color of the border in gradient */}

            {/* <div className="grid grid-cols-2 gap-16 text-white w-[90%] md:gap-6 xsm:w-full xsm:gap-2">
              <div className="bg-[#00000033] flex flex-col gap-6 rounded-xl pb-4 bw-border md:gap-4 xsm:gap-3">
                <div className="border-b-2 w-full flex justify-center items-center py-3 xsm:py-2">
                  <p className="font-pop font-semibold text-[20px] md:text-[14px] xsm:text-[9px]">
                    Roles You Can Hire From
                  </p>
                </div>

                <div className="flex flex-col gap-6 rounded-b-xl px-4 md:gap-3 md:px-2 xsm:gap-3">
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      1.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                      Full Stack Developer
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      2.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Backend Developer
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      3.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Frontend Developer
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      4.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Data Analyst
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      5.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Software Development Engineer In Test ( SDET)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#00000033] flex flex-col gap-6 rounded-xl pb-4 bw-border md:gap-4 xsm:gap-3">
                <div className="border-b-2 w-full flex justify-center items-center py-3 xsm:py-2">
                  <p className="font-pop font-semibold text-[20px] md:text-[14px] xsm:text-[9px]">
                  Our Offerings
                  </p>
                </div>

                <div className="flex flex-col gap-6 rounded-b-xl px-4 md:gap-3 md:px-2 xsm:gap-3">
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      1.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Immediate Joining
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      2.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Zero Offer Dropouts
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      3.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Complete Hiring In 1 day
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      4.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    PAN India Availabilitiy
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      5.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Continuous hiring pipeline
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="w-[30%] self-end xsm:w-full">
            <div className="bg-[#00000033] backdrop-blur rounded-xl py-6 text-white flex flex-col gap-6 bw-border md:gap-4 md:py-3 xsm:gap-4">
              <div className="flex justify-center text-center">
                <p className="font-pop font-semibold text-[20px] md:text-[14px] xsm:text-[16px]">Share Your Hiring Requirements</p>
              </div>
              <div className="flex flex-col gap-2 px-6">
                <div className="flex flex-col gap-1">
                  <label className="text-[16px] font-medium md:text-[12px] xsm:text-[14px]" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    className="bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px] xsm:text-[14px]"
                    type="text"
                    placeholder="Enter Your name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[16px] font-medium md:text-[12px] xsm:text-[14px]" htmlFor="pass">
                  Company
                  </label>
                  <input
                    id="pass"
                    className="bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px] xsm:text-[14px]"
                    type="password"
                    placeholder="Enter Your Company"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[16px] font-medium md:text-[12px] xsm:text-[14px]" htmlFor="study">
                  Work E-mail
                  </label>
                  <input
                    id="study"
                    className="bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px] xsm:text-[14px]"
                    type="text"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[16px] font-medium md:text-[12px] xsm:text-[14px]" htmlFor="time">
                  Phone number
                  </label>
                  <input
                    id="time"
                    className="bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px] xsm:text-[14px]"
                    type="text"
                    placeholder="Enter Your Mobile number"
                  />
                </div>
              </div>
              <div className="px-6">
                <button className="bg-[#1DBF73] border-[1px] border-[#808080] rounded-md py-1 font-int font-medium w-full md:text-[14px] xsm:text-[14px]">
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
