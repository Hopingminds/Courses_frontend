import React, { useState } from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../MyLearning/AnimatedProgressProvider";

const CNMyStats = ({ courseLessons, totalLessons, courseAssignment }) => {
  const [completedLessons, setCompletedLessons] = useState(
    courseLessons.length
  );
  const [completedAssignments, setCompletedAssignments] = useState(
    courseAssignment.length
  );
  let percentageLesson = ((courseLessons?.length / totalLessons) * 100).toFixed(
    2
  );
  let percentageAssignment = (
    (courseAssignment?.length / totalLessons) *
    100
  ).toFixed(2);

  const calculateAverageProgress = (completedAssignments, completedLessons) => {
    const totalCompleted = completedAssignments + completedLessons;
    return totalCompleted > 0
      ? (percentageLesson/2 + percentageAssignment/2)
      : 0
  };

  // console.log(completedAssignments);

  return (
    <div className="bg-[#FFFFFF] min-h-[425px] rounded-b-[20px] px-[30px] py-[24px]  flex flex-col items-center gap-2 ">
      <p className="font-nu font-semibold text-[20px] text-black xsm:text-[10px] md:text-[16px]">
        Your Progress
      </p>
      <div className="flex justify-around items-center">
        <div className=" flex items-center justify-center h-[350px] xsm:w-[50%] xsm:h-[60%] xsm:mt-0 md:mt-8 md:w-[70%] md:h-[70%] md:items-center">
          {/* progressbar of each Course */}
          <AnimatedProgressProvider
            // className="-z-50"
            valueStart={0}
            valueEnd={calculateAverageProgress(
              completedLessons || 0,
              completedAssignments || 0
            )}
            duration={1.4}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbarWithChildren
                  value={calculateAverageProgress(
                    completedLessons || 0,
                    completedAssignments || 0
                  )}
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
                      valueEnd={percentageAssignment || 0}
                      duration={1.4}
                      easingFunction={easeQuadInOut}
                    >
                      {(value) => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbarWithChildren
                            value={percentageAssignment || 0}
                            strokeWidth={4}
                            styles={buildStyles({
                              pathColor: "#FFA84A",
                              trailColor: "#E9EBF3",
                              pathTransition: "stroke-dashoffset 1s ease 0s",
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
        <div className="flex flex-col items-start w-[50%]  xsm:flex-col xsm:mt-0 xsm:space-x-0 xsm:gap-3 xsm:items-start md:mt-6 md:space-x-8">
          <div className="flex justify-between items-center w-full">
            <div className="flex space-x-2 items-center md:space-x-1">
              <img
                className="w-[15px] h-[15px] xsm:w-3 xsm:h-3 md:w-3 md:h-3"
                src="../Icons/MSpinkcircle.svg"
              />
              <p className="font-Inter font-semibold text-[#7A7A7A] text-[18px] xsm:text-[10px] md:text-[14px]">
                Average
              </p>
            </div>
            <p className="font-nu font-semibold text-black text-[20px] xsm:text-[10px] md:text-[14px]">
              {calculateAverageProgress(
              completedLessons || 0,
              completedAssignments || 0
            )}
              %
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex space-x-2 items-center md:space-x-1">
              <img
                className="w-[15px] h-[15px] xsm:w-3 xsm:h-3 md:w-3 md:h-3"
                src="../Icons/MSorangecircle.svg"
              />
              <p className="font-Inter font-semibold text-[#7A7A7A] text-[18px] xsm:text-[10px] md:text-[14px]">
                Completed Assignments
              </p>
            </div>
            <p className="font-nu font-semibold text-black text-[20px] xsm:text-[10px] md:text-[14px]">
              {percentageAssignment}%
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex space-x-2 items-center md:space-x-1">
              <img
                className="w-[15px] h-[15px] xsm:w-3 xsm:h-3 md:w-3 md:h-3"
                src="../Icons/MSbluecircle.svg"
              />
              <p className="font-Inter font-semibold text-[#7A7A7A] text-[18px] xsm:text-[10px] md:text-[14px]">
               Completed Lessons
              </p>
            </div>
            <p className="font-nu font-semibold text-black text-[20px] xsm:text-[10px] md:text-[14px]">
              {percentageLesson}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNMyStats;
