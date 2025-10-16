import React, { useState } from "react";
import Img1 from "../../Assests/Icons/hat-sub.svg";
import Img2 from "../../Assests/Icons/couse-sub.svg";
import Img3 from "../../Assests/Icons/bar-sub.svg";
import Img4 from "../../Assests/Icons/Oval1-sub.svg";

import ProgressBar from "@ramonak/react-progress-bar";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DataDashboard = ({ data }) => {
  let complete = 0;
  let count = 0;
  let completedlessons = 0;


  console.log("Check data is comming", data)

  data?.purchased_courses?.forEach((item) => {
    count += parseInt(item?.totalLessons?.length) || 0;
    completedlessons += parseInt(item?.completedLessons?.length) || 0;
    if (item?.completedLessons?.length === item?.totalLessons?.length && item?.totalLessons?.length > 0) {
      complete += 1;
    }
  });



  return (
    <div className="flex flex-col gap-12 px-[4%] pt-[2%] mb-2 w-full">
      <div className="flex flex-row justify-between">
        <div className="bg-white rounded-lg shadow-lg flex flex-row gap-6 justify-between items-center px-2 py-6 w-[30%]">
          <img src={Img1} className="w-[30%]" />
          <div className="flex flex-col gap-1 w-[70%]">
            <p className="font-pop font-semibold text-[14px]">{data?.name}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg flex flex-row gap-8 items-center px-3 py-6 w-[30%]">
          <img src={Img2} className="w-[25%] " />
          <div className="flex flex-col gap-1">
            <p className="font-pop font-semibold text-[26px]">{data?.purchased_courses?.length}</p>
            <p className="font-pop font-semibold text-[14px]">Enrolled courses</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg flex flex-row gap-8 items-center px-2 py-6 w-[30%]">
          <img src={Img3} className="w-[25%]" />
          <div className="flex flex-col gap-1">
            <p className="font-pop font-semibold text-[26px]">{complete}</p>
            <p className="font-pop font-semibold text-[14px]">Completed Course</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="bg-white rounded-xl shadow-lg flex flex-col gap-2 p-4 w-[45%]">
          <p className="font-pop font-semibold text-[18px]">Total Completed Courses</p>
          <div className="flex flex-row justify-between items-center my-auto">
            <div
              className="w-[60%] border-[6px] rounded-full p-2 border-[#36AE8F] font-semibold"
              style={{ borderImage: "linear-gradient(toright,#36AE8F,#1A35DD47,#32AF8B)1" }}
            >
              <CircularProgressbar
                value={((completedlessons / count) * 100).toFixed(2) || 0}
                text={`${((completedlessons / count) * 100).toFixed(2) || 0}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  pathColor: "#1DBF73",
                  textSize: "10px",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow=lg pl-[3%] pr-[5%] py-[4%] flex flex-row justify-between">
        <div className="flex flex-col gap-6 w-[75%]">
          {data?.purchased_courses?.map((item) => {
            let courseCount = 0;
            
              courseCount += parseInt(item?.totalLessons?.length) || 0;
           
            return (
              <div className="flex flex-row items-center" key={item?.course?._id}>
                <p className="font-pop font-semibold text-[#000000] text-[12px] w-[37%]">
                  {item?.course?.title}
                </p>
                <div className="w-full">
                  <ProgressBar
                    completed={item?.completedLessons?.length}
                    maxCompleted={courseCount}
                    bgColor="#29B27E"
                    height="15px"
                    width="100%"
                    baseBgColor="#EDF2F7"
                    labelColor="black"
                    labelSize="13px"
                    isLabelVisible={true}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataDashboard;
