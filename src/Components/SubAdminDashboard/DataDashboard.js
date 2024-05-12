import React from "react";
import Img1 from "../../Assests/Icons/hat-sub.svg";
import Img2 from "../../Assests/Icons/couse-sub.svg";
import Img3 from "../../Assests/Icons/bar-sub.svg";
import Img4 from "../../Assests/Icons/Oval1-sub.svg";
import Img5 from "../../Assests/Icons/Oval2-sub.svg";
import Img6 from "../../Assests/Icons/Oval3-sub.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import Temp from "../temp";

const DataDashboard = ({data}) => {
// console.log(data);
  // const data = [10,0,2.5,5];
  return (
    <div className="flex flex-col gap-12 px-[4%] pt-[2%] mb-2 w-full">
      <div className="flex flex-row justify-between">
        <div className="bg-white rounded-lg shadow-lg flex flex-row gap-6 justify-between items-center px-2 py-6 w-[30%]">
          <img src={Img1} className="w-[30%]" />
          <div className="flex flex-col gap-1 w-[70%]">
            <p className="font-pop font-semibold text-[26px]">{data?.enrolled_students}</p>
            <p className="font-pop font-semibold text-[14px]">
              Davinder Kumar
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg flex flex-row gap-8 items-center px-3 py-6 w-[30%]">
          <img src={Img2} className="w-[25%] " />
          <div className="flex flex-col gap-1">
            <p className="font-pop font-semibold text-[26px]">{data?.enrolled_courses || 30}</p>
            <p className="font-pop font-semibold text-[14px]">
              Enrolled courses
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg flex flex-row gap-8  items-center px-2 py-6 w-[30%]">
          <img src={Img3} className="w-[25%]" />
          <div className="flex flex-col gap-1">
            <p className="font-pop font-semibold text-[26px]">{data?.enrolled_courses || 20}</p>
            <p className="font-pop font-semibold text-[14px]">
              Completed Course
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="bg-white rounded-xl shadow-lg flex flex-col  gap-2 p-4 w-[45%]">
          <p className="font-pop font-semibold text-[18px]">Completed Course</p>
          <div className="flex flex-row justify-between items-center  my-auto">
            <div className="w-[60%] border-[6px] rounded-full p-2 border-[#36AE8F] font-semibold  "
              style={{borderImage:'linear-gradient(toright,#36AE8F,#1A35DD47,#32AF8B)1'}}
            >
              <CircularProgressbar
                value={50}
                text={`${50}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  pathColor: "#1DBF73",
                  textSize:'10px',
                  trailColor:'#fff'
                })}
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-row gap-2 items-start">
                <img src={Img4} className="w-[14px]" />
                <div className="flex flex-col items-center">
                  <p className="font-nu font-semibold text-[#7A7A7A] text-[14px]">
                    Completed
                  </p>
                  <p className="font-nu font-semibold text-[#243465] text-[16px]">
                    90%
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start">
                <img src={Img4} className="w-[14px]" />
                <div className="flex flex-col items-center">
                  <p className="font-nu font-semibold text-[#7A7A7A] text-[14px]">
                    Assignment
                  </p>
                  <p className="font-nu font-semibold text-[#243465] text-[16px]">
                    50%
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start">
                <img src={Img4} className="w-[14px]" />
                <div className="flex flex-col items-center">
                  <p className="font-nu font-semibold text-[#7A7A7A] text-[14px]">
                    Progress
                  </p>
                  <p className="font-nu font-semibold text-[#243465] text-[16px]">
                    60%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white rounded-xl shadow-lg flex flex-col gap-2 p-4 w-[50%]">
          <p className="font-pop font-semibold text-[18px]">Attendance</p>
          <div>
          <Temp/>
          </div>
        </div> */}
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
