import React from "react";
import Img1 from "../../Assests/Icons/hat-sub.svg";
import Img2 from "../../Assests/Icons/couse-sub.svg";
import Img3 from "../../Assests/Icons/bar-sub.svg";
import Img4 from "../../Assests/Icons/Oval1-sub.svg";
import Img5 from "../../Assests/Icons/Oval2-sub.svg";
import Img6 from "../../Assests/Icons/Oval3-sub.svg";
import ProgressBar from "@ramonak/react-progress-bar";

const DataDashboard = () => {
  return (
    <div className="flex flex-col gap-12 px-[4%] pt-[2%] mb-2 w-full">
      <div className="flex flex-row justify-between">
        <div className="bg-white rounded-lg shadow-lg flex flex-row gap-6 justify-between items-center px-2 py-6 w-[30%]">
          <img src={Img1} className="w-[30%]" />
          <div className="flex flex-col gap-1 w-[70%]">
            <p className="font-pop font-semibold text-[26px]">24</p>
            <p className="font-pop font-semibold text-[14px]">
              Enrolled Students
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg flex flex-row gap-8 justify-between items-center px-2 py-6 w-[30%]">
          <img src={Img2} className="w-[28%]" />
          <div className="flex flex-col gap-1">
            <p className="font-pop font-semibold text-[26px]">14</p>
            <p className="font-pop font-semibold text-[14px]">
              Enrolled courses
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg flex flex-row gap-8 justify-between items-center px-2 py-6 w-[30%]">
          <img src={Img3} className="w-[28%]" />
          <div className="flex flex-col gap-1">
            <p className="font-pop font-semibold text-[26px]">14</p>
            <p className="font-pop font-semibold text-[14px]">
              Completed Course
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="bg-white rounded-xl shadow-lg flex flex-col gap-2 p-4">
          <p className="font-pop font-semibold text-[18px]">Completed Course</p>
          <div className="flex flex-row justify-between">
            <p>bar</p>
            <div className="flex flex-col justify-between">
              <div className="flex flex-row gap-2 items-start">
                <img src={Img4} className="w-[20px]" />
                <div className="flex flex-col items-center pt-1">
                  <p className="font-nu font-semibold text-[#7A7A7A] text-[18px]">
                    Completed
                  </p>
                  <p className="font-nu font-semibold text-[#243465] text-[20px]">
                    90%
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start">
                <img src={Img4} className="w-[20px]" />
                <div className="flex flex-col items-center pt-1">
                  <p className="font-nu font-semibold text-[#7A7A7A] text-[18px]">
                    Assignment
                  </p>
                  <p className="font-nu font-semibold text-[#243465] text-[20px]">
                    50%
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start">
                <img src={Img4} className="w-[20px]" />
                <div className="flex flex-col items-center pt-1">
                  <p className="font-nu font-semibold text-[#7A7A7A] text-[18px]">
                    Progress
                  </p>
                  <p className="font-nu font-semibold text-[#243465] text-[20px]">
                    60%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg flex flex-col gap-2 p-4">
          <p className="font-pop font-semibold text-[18px]">Attendance</p>
          <div>graph</div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow=lg pl-[3%] pr-[5%] py-[4%] flex flex-row justify-between">
        <div className="flex flex-col gap-6 w-[75%]">
          <div className="flex flex-row items-center">
            <p className="font-pop font-semibold text-[#000000] text-[12px] w-[37%]">
              Full Stack Development
            </p>
            <div className="w-full">
            <ProgressBar 
              completed={50}
              bgColor="#29B27E"
              height="10px"
              width="100%"
              baseBgColor="#EDF2F7"
              labelColor="#e80909"
              labelSize="0"
              />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <p className="font-pop font-semibold text-[#000000] text-[12px] w-[37%]">
            AI&ML
            </p>
            <div className="w-full">
            <ProgressBar 
              completed={50}
              bgColor="#29B27E"
              height="10px"
              width="100%"
              baseBgColor="#EDF2F7"
              labelColor="#e80909"
              labelSize="0"
              />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <p className="font-pop font-semibold text-[#000000] text-[12px] w-[37%]">
            Data Science
            </p>
            <div className="w-full">
            <ProgressBar 
              completed={50}
              bgColor="#29B27E"
              height="10px"
              width="100%"
              baseBgColor="#EDF2F7"
              labelColor="#e80909"
              labelSize="0"
              />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <p className="font-pop font-semibold text-[#000000] text-[12px] w-[37%]">
            Cyber Security
            </p>
            <div className="w-full">
            <ProgressBar 
              completed={50}
              bgColor="#29B27E"
              height="10px"
              width="100%"
              baseBgColor="#EDF2F7"
              labelColor="#e80909"
              labelSize="0"
              />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <p className="font-pop font-semibold text-[#000000] text-[12px] w-[37%]">
            Digital Marketing
            </p>
            <div className="w-full">
            <ProgressBar 
              completed={50}
              bgColor="#29B27E"
              height="10px"
              width="100%"
              baseBgColor="#EDF2F7"
              labelColor="#e80909"
              labelSize="0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <div className="flex flex-row gap-3 items-center">
              <input
                type="radio"
                id="complete"
                name="progress"
                value="complete"
              />
              <label
                htmlFor="complete"
                className="text-[#848A9C] text-[12px] font-nu"
              >
                Completed
              </label>
            </div>
            <p className="font-nu font-semibold text-[#243465] text-[14px] text-center">
              60%
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-3 items-center">
              <input type="radio" id="total" name="progress" value="total" />
              <label
                htmlFor="total"
                className="text-[#848A9C] text-[12px] font-nu"
              >
                Total
              </label>
            </div>
            <p className="font-nu font-semibold text-[#243465] text-[14px] text-center">
              90%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDashboard;
