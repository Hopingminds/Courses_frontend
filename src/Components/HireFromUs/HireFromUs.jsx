import React from "react";
import Resume2 from "./Resume2";
import Companies from "../Companies";
import "./hirefromus.css";
import WhyHM from "./WhyHM";

const HireFromUs = () => {
  return (
    <>
      <div className=" px-[5%] pt-[4%]  bg-gradient-to-r from-[#0F2027] to-[#203A43] backgroundsvg2"  style={{ width: "100%" }}>
        {/* Mainsection */}
        <div className=" flex justify-between pb-[18%]">
          <div className="flex flex-col gap-16 w-[70%]">
            <div>
              <p className="font-pop font-semibold text-[50px] text-white">
                Hire Tech Talent That Delivers{" "}
                <span className="text-[#1DBF73]">Quick.simple.</span>
              </p>
            </div>

            {/* set the color of the border in gradient */}

            <div className="grid grid-cols-2 gap-16 text-white w-[90%]">
              <div className="bg-[#00000033] flex flex-col gap-6 rounded-xl pb-4 bw-border">
                <div className="border-b-2 w-full flex justify-center items-center py-3">
                  <p className="font-pop font-semibold text-[20px]">
                    Roles You Can Hire From
                  </p>
                </div>

                <div className="flex flex-col gap-6 rounded-b-xl px-4">
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1">
                      1.
                    </div>
                    <p className="text-[20px] font-semibold font-int">
                      Full Stack Developer
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1">
                      2.
                    </div>
                    <p className="text-[20px] font-semibold font-int">
                    Backend Developer
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1">
                      3.
                    </div>
                    <p className="text-[20px] font-semibold font-int">
                    Frontend Developer
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1">
                      4.
                    </div>
                    <p className="text-[20px] font-semibold font-int">
                    Data Analyst
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1">
                      5.
                    </div>
                    <p className="text-[20px] font-semibold font-int">
                    Software Development Engineer In Test ( SDET)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#00000033] flex flex-col gap-6 rounded-xl pb-4 bw-border">
                <div className="border-b-2 w-full flex justify-center items-center py-3">
                  <p className="font-pop font-semibold text-[20px]">
                  Our Offerings
                  </p>
                </div>

                <div className="flex flex-col gap-6 rounded-b-xl px-4">
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1">
                      1.
                    </div>
                    <p className="text-[20px] font-semibold font-int">
                    Immediate Joining
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1">
                      2.
                    </div>
                    <p className="text-[20px] font-semibold font-int">
                    Zero Offer Dropouts
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1">
                      3.
                    </div>
                    <p className="text-[20px] font-semibold font-int">
                    Complete Hiring In 1 day
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1">
                      4.
                    </div>
                    <p className="text-[20px] font-semibold font-int">
                    PAN India Availabilitiy
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1">
                      5.
                    </div>
                    <p className="text-[20px] font-semibold font-int">
                    Continuous hiring pipeline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] self-end">
            <div className="bg-[#00000033] backdrop-blur rounded-xl py-6 text-white flex flex-col gap-6 bw-border z-[99999]">
              <div className="flex justify-center">
                <p className="font-pop font-semibold text-[20px]">Share Your Hiring Requirements</p>
              </div>
              <div className="flex flex-col gap-2 px-6">
                <div className="flex flex-col gap-1">
                  <label className="text-[16px] font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    className="bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px]"
                    type="text"
                    placeholder="Enter Your name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[16px] font-medium" htmlFor="pass">
                  Company
                  </label>
                  <input
                    id="pass"
                    className="bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px]"
                    type="password"
                    placeholder="Enter Your Company"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[16px] font-medium" htmlFor="study">
                  Work E-mail
                  </label>
                  <input
                    id="study"
                    className="bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px]"
                    type="text"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[16px] font-medium" htmlFor="time">
                  Phone number
                  </label>
                  <input
                    id="time"
                    className="bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px]"
                    type="text"
                    placeholder="Enter Your Mobile number"
                  />
                </div>
              </div>
              <div className="px-6">
                <button className="bg-[#1DBF73] border-[1px] border-[#808080] rounded-md py-1 font-int font-medium w-full">
                Submit
                </button>
              </div>
              <div className="flex justify-center px-6">
                <p className="font-int font-medium text-[14px]">
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
