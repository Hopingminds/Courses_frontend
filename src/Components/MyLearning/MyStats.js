import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import React, { useState, useEffect } from "react";

export default function MyStats({courses}) {
  console.log(courses);
  const [maxValues, setMaxValues] = useState({
    first: 0,
    second: 0,
    third: 0,
  }); //setting the maximum value for the progressbar by default to 0

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMaxValues({ first: 53, second: 70, third: 90 });
    }, 1500);

    return () => {
      clearTimeout(timeout);
    }; // Cleanup function to clear timeout on unmount or state change
  }, []);

  return (
    <div className="px-[8%] mt-20 mb-24 xsm:px-[5%] xsm:m-[6%]">
      <div className="flex flex-row justify-between xsm:flex-col-reverse xsm:gap-10">
        <div className="w-[43%] xsm:w-full">
          <p className="font-nu font-semibold text-[20px] text-[#243465] xsm:text-[10px]">
            TOTAL COURSES
          </p>
          <div className="">
            {
              courses?.map((val,ind)=>{
                return(<>
                <div className="flex justify-evenly py-6 xsm:justify-between xsm:py-2 xsm:pt-4">
              <div className="w-[17%] font-nu font-semibold xsm:w-[14%]">
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={maxValues.first}
                  duration={1.4}
                  easingFunction={easeQuadInOut}
                >
                  {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={val?.completed_lessons.length}
                        text={`${val?.completed_lessons.length}%`}
                        styles={buildStyles({
                          pathTransition: "stroke-dashoffset 1s ease 0s",
                          pathColor: "#04BFDA",
                          trailColor: "#E9EBF3",
                        })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </div>
              <div className="flex items-center justify-between w-[60%]">
                <div>
                  <p className="font-nu font-semibold text-[#243465] text-[22px] xsm:text-[10px] xsm:pb-1">
                    {val?.course.title}
                  </p>
                  {/* <p className="font-nu text-[#848A9C] text-[18px] xsm:text-[10px]">
                    Nabung jang imah dekah{" "}
                  </p> */}
                </div>
                <div>
                  <img
                    className="w-[16px] h-[16px] xsm:w-[8px] xsm:h-[8px]"
                    src="../Icons/MSarrow.svg"
                    alt="arrow"
                  />
                </div>
              </div>
            </div>

            <hr className="border-dashed" />
                
                </>)
              })
            }
            {/* <div className="flex xsm:justify-center">
            <button className="bg-[#F2F6F8] w-full py-4 font-nu font-semibold text-[23px] mt-12 text-[#243465] rounded-lg xsm:mt-4 xsm:py-2 xsm:w-[50%] xsm:text-[8px] xsm:rounded-sm">
              Show More
            </button>
            </div> */}
          </div>
        </div>
        <div className="w-[45%] xsm:w-full xsm:flex xsm:flex-col xsm:gap-2">
          <p className="font-nu font-semibold text-[20px] text-[#243465] xsm:text-[10px]">
            Your Spending
          </p>
          <div className="xsm:flex xsm:flex-row xsm:gap-40">
            <div
              className=" flex items-center justify-center mt-12 w-full h-[350px] xsm:w-[50%] xsm:h-[60%] xsm:mt-0"
            >
              {/* progressbar */}
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={0}
                duration={1.4}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbarWithChildren
                      value={0}
                      strokeWidth={3}
                      styles={buildStyles({
                        pathColor: "#FB67CA",
                        trailColor: "#E9EBF3",
                        pathTransition: "stroke-dashoffset 1s ease 0s",
                      })}
                    >
                      {/*
                                  Width here needs to be (100 - 2 * strokeWidth)% 
                                  in order to fit exactly inside the outer progressbar.
                                */}
                      <div style={{ width: "85%" }}>
                        <AnimatedProgressProvider
                          valueStart={0}
                          valueEnd={0}
                          duration={1.4}
                          easingFunction={easeQuadInOut}
                        >
                          {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                              <CircularProgressbarWithChildren
                                value={0}
                                strokeWidth={4}
                                styles={buildStyles({
                                  pathColor: "#FFA84A",
                                  trailColor: "#E9EBF3",
                                  pathTransition:
                                    "stroke-dashoffset 1s ease 0s",
                                })}
                              >
                                {/*
                                            Width here needs to be (100 - 2 * strokeWidth)% 
                                            in order to fit exactly inside the outer progressbar.
                                          */}
                                          <div style={{ width: "80%" }}>
                                          <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={0}
                                            duration={1.4}
                                            easingFunction={easeQuadInOut}
                                          >
                                            {value => {
                                              const roundedValue = Math.round(value);
                                              return (
                                                <CircularProgressbarWithChildren
                                                value={0}
                                                strokeWidth={5}
                                                styles={buildStyles({
                                                  pathColor: "#04BFDA",
                                                  trailColor: "#E9EBF3",
                                                  pathTransition: "stroke-dashoffset 1s ease 0s"
                                                })}
                                                >
                                                </CircularProgressbarWithChildren>
                                              );
                                            }}
                                          </AnimatedProgressProvider>
                                          </div>
                                        </CircularProgressbarWithChildren>
                                      );
                                    }}
                                  </AnimatedProgressProvider>
                                </div>
                              </CircularProgressbarWithChildren>
                            );
                          }}
                        </AnimatedProgressProvider>
                    </div>
                    <div className='flex space-x-10 mt-12'>
                        <div className='flex flex-col items-center'>
                            <div className='flex space-x-2 items-center'>
                                <img className='w-[15px] h-[15px]' src='../Icons/MSbluecircle.svg'/>
                                <p className='font-Inter font-semibold text-[#7A7A7A] text-[18px]'>Completed</p>
                            </div>
                            <p className='font-nu font-semibold text-[20px]'>0%</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex space-x-2 items-center'>
                                <img className='w-[15px] h-[15px]' src='../Icons/MSorangecircle.svg'/>
                                <p className='font-Inter font-semibold text-[#7A7A7A] text-[18px]'>Assignment</p>
                            </div>
                            <p className='font-nu font-semibold text-[20px]'>0%</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex space-x-2 items-center'>
                                <img className='w-[15px] h-[15px]' src='../Icons/MSpinkcircle.svg'/>
                                <p className='font-Inter font-semibold text-[#7A7A7A] text-[18px]'>Progress</p>
                            </div>
                            <p className='font-nu font-semibold text-[20px]'>0%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}
