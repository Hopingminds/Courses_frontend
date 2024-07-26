import React, { useState, useEffect } from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../MyLearning/AnimatedProgressProvider"

export default function MyStats({ courses }) {
  // console.log(courses);
  const [completed, setcompleted] = useState(0)
  const [completedLessons,setCompletedLessons] = useState(0);
  const [completedAssignments,setCompletedAssignments] = useState(0);

  const [maxValues, setMaxValues] = useState({
    first: 0,
    second: 0,
    third: 0,
  }); //setting the maximum value for the progressbar by default to 0

  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMaxValues({ first: 0, second: 0, third: 0 });
    }, 1500);

    return () => {
      clearTimeout(timeout);
    }; // Cleanup function to clear timeout on unmount or state change
  }, []);

  const countLessons = () => {
    let temp = 0;
    selectedCourse?.course?.curriculum?.forEach((val) => {
        temp += val?.lessons?.length;
    })
    return temp;
  }
  let totalLessons = countLessons();
  // console.log("asdfhhgfdsfg",totalLessons)

  const handleCourseClick = (course,total) => {
    // console.log("selectedCourse",course?.course?.curriculum);
    let totalless = 0;
    course?.course?.curriculum?.forEach((val) => {
      totalless += val?.lessons?.length;
    })
    setSelectedCourse(course);
    let currpercentageLesson = ((course?.completed_lessons?.length / totalless) * 100).toFixed(2);
    setcompleted(currpercentageLesson)
    setCompletedLessons(course?.completed_lessons?.length)
    setCompletedAssignments(course?.completed_assignments?.length)
  };

  let percentageLesson = 0;
  let percentageAssignments  = 0;
  if(totalLessons!==0){
    percentageLesson = ((completedLessons / totalLessons) * 100).toFixed(2);
    percentageAssignments  = ((completedAssignments / totalLessons) * 100).toFixed(2);
  }
  const calculateAverageProgress = (percentageLesson, percentageAssignments) => {
		let totalCompleted = (((percentageLesson+percentageAssignments)  / 200) * 100).toFixed(2);
		return totalCompleted > 0
		? ((completedAssignments + completedLessons) / 2).toFixed(2)
		: 0;
	};

  return (
    <div className="px-[8%] mt-20 mb-24 xsm:px-[5%] xsm:m-[6%]">
      {!courses?.length?<div className="flex justify-center  w-full mt-10"><div className="text-center font-semibold text-2xl w-full "> No Stats</div></div>:
      <div className="flex flex-row justify-between xsm:flex-col-reverse xsm:gap-10">
        <div className="w-[43%] xsm:w-full">
          <p className="font-nu font-semibold text-[20px] text-[#243465] xsm:text-[10px] md:text-[16px]">
            TOTAL COURSES
          </p>
          <div className="">
            {courses?.map((val, ind) => {
              let total=0;
              val?.course?.curriculum?.map((it)=>{
                total+=it.lessons.length;
              })
              let totalpercent  = ((val?.completed_lessons.length / total) * 100).toFixed(2);
              return (
                <div key={ind} onClick={() => handleCourseClick(val,total)}>
                  {/* Course Item */}
                  <div className="flex justify-evenly py-6 cursor-pointer xsm:justify-between xsm:py-2 xsm:pt-4 md:py-4">
                    <div className="w-[17%] font-nu font-semibold xsm:w-[14%] md:w-[15%]">
                      <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={totalpercent}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                      >
                        {(value) => {
                          // const roundedValue = Math.round(value);
                          // console.log(total,val?.completed_lessons?.length*100);
                          return (
                            <CircularProgressbar
                              value={totalpercent}
                              text={`${totalpercent}%`}
                              styles={buildStyles({
                                pathTransition:
                                  "stroke-dashoffset 1s ease 0s",
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
                        <p className="font-nu font-semibold text-[#243465] text-[22px] xsm:text-[10px] xsm:pb-1 md:text-[18px]">
                          {val?.course?.title}
                        </p>
                      </div>
                      <div>
                        <img
                          className="w-[16px] h-[16px] xsm:w-[8px] xsm:h-[8px] md:w-[12px] md:h-[12px]"
                          src="../Icons/MSarrow.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="border-dashed" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[45%] xsm:w-full xsm:flex xsm:flex-col xsm:gap-2">
          {/* Right Side Progress Bars */}
          <p className="font-nu font-semibold text-[20px] text-[#243465] xsm:text-[10px] md:text-[16px]">
            Your Spending
          </p>
          <div className="xsm:flex xsm:flex-row xsm:gap-40 xsm:items-center">
            <div className=" flex items-center justify-center mt-12 w-full h-[350px] xsm:w-[50%] xsm:h-[60%] xsm:mt-0 md:mt-8 md:w-[70%] md:h-[70%] md:items-center">
              {/* progressbar of each Course */}
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={calculateAverageProgress(selectedCourse?.completed_assignments.length || 0,completed || 0)}
                duration={1.4}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbarWithChildren
                      value={calculateAverageProgress(selectedCourse?.completed_assignments.length || 0,completed || 0)}
                      strokeWidth={3}
                      styles={buildStyles({
                        pathColor: "#FB67CA",
                        trailColor: "#E9EBF3",
                        pathTransition: "stroke-dashoffset 1s ease 0s",
                      })}
                    >
                      <div style={{ width: "85%" }}>
                        <AnimatedProgressProvider
                          valueStart={0}
                          valueEnd={percentageAssignments || 0}
                          duration={1.4}
                          easingFunction={easeQuadInOut}
                        >
                          {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                              <CircularProgressbarWithChildren
                                value={percentageAssignments || 0}
                                strokeWidth={4}
                                styles={buildStyles({
                                  pathColor: "#FFA84A",
                                  trailColor: "#E9EBF3",
                                  pathTransition:
                                    "stroke-dashoffset 1s ease 0s",
                                })}
                              >
                                <div style={{ width: "80%" }}>
                                  <AnimatedProgressProvider
                                    valueStart={0}
                                    valueEnd={percentageLesson || 0}
                                    duration={1.4}
                                    easingFunction={easeQuadInOut}
                                  >
                                    {(value) => {
                                      const roundedValue = Math.round(value);
                                      return (
                                        <CircularProgressbarWithChildren
                                          value={percentageLesson || 0}
                                          strokeWidth={5}
                                          styles={buildStyles({
                                            pathColor: "#04BFDA",
                                            trailColor: "#E9EBF3",
                                            pathTransition:
                                              "stroke-dashoffset 1s ease 0s",
                                          })}
                                        />
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
            <div className="flex space-x-10 mt-12 xsm:flex-col xsm:mt-0 xsm:space-x-0 xsm:gap-3 xsm:items-start md:mt-6 md:space-x-8">
              <div className="flex flex-col items-center">
                <div className="flex space-x-2 items-center md:space-x-1">
                  <img
                    className="w-[15px] h-[15px] xsm:w-3 xsm:h-3 md:w-3 md:h-3"
                    src="../Icons/MSpinkcircle.svg"
                  />
                  <p className="font-Inter font-semibold text-[#7A7A7A] text-[18px] xsm:text-[10px] md:text-[14px]">
                    Completed
                  </p>
                </div>
                <p className="font-nu font-semibold text-[20px] xsm:text-[10px] md:text-[14px]">{calculateAverageProgress(selectedCourse?.completed_assignments.length,completed)}%</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex space-x-2 items-center md:space-x-1">
                  <img
                    className="w-[15px] h-[15px] xsm:w-3 xsm:h-3 md:w-3 md:h-3"
                    src="../Icons/MSorangecircle.svg"
                  />
                  <p className="font-Inter font-semibold text-[#7A7A7A] text-[18px] xsm:text-[10px] md:text-[14px]">
                    Assignment
                  </p>
                </div>
                <p className="font-nu font-semibold text-[20px] xsm:text-[10px] md:text-[14px]">{percentageAssignments}%</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex space-x-2 items-center md:space-x-1">
                  <img
                    className="w-[15px] h-[15px] xsm:w-3 xsm:h-3 md:w-3 md:h-3"
                    src="../Icons/MSbluecircle.svg"
                  />
                  <p className="font-Inter font-semibold text-[#7A7A7A] text-[18px] xsm:text-[10px] md:text-[14px]">
                    Lessons
                  </p>
                </div>
                <p className="font-nu font-semibold text-[20px] xsm:text-[10px] md:text-[14px]">{percentageLesson}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </div>
  );
}
