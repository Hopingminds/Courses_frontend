import React, { useState } from "react";
import Overview from "../Overview/Overview";
import Instructor from "../Instructor/Instructor";
import LaunchLab from "../LaunchLab";
import CNAssignment from "./CNAssignment";
import CNCertifications from "./CNCertifications";
import CNMyStats from "./CNMyStats";
import LiveClass from "../LiveClass";

const CourseNavigation = ({
  courseLessons,
  totalLessons,
  courseAssignment,
}) => {
  const [activeComponent, setActiveComponent] = useState("Overview");

  const renderComponent = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <div className="w-full min-h-[540px] mt-[20px] xsm:w-full">
      <div className="grid grid-cols-5 border w-full overflow-hidden border-[#EAEAEA] font-nu font-semibold text-[16px] leading-[24px] rounded-t-[20px] xsm:w-full">
        <button
          className={`btn_corners_first py-[12px]  ${
            activeComponent === "Overview" ? "bg-[#1FC074] text-[#FFFFFF]" : ""
          }`}
          onClick={() => renderComponent("Overview")}
        >
          Overview
        </button>
        <button
          className={`btn_border py-[12px] border-l border-[#EAEAEA] ${
            activeComponent === "Instructor"
              ? "bg-[#1FC074] text-[#FFFFFF]"
              : ""
          }`}
          onClick={() => renderComponent("Instructor")}
        >
          Instructor
        </button>
        <button
          className={`btn_border py-[12px] border-l border-[#EAEAEA] ${
            activeComponent === "assignment"
              ? "bg-[#1FC074] text-[#FFFFFF]"
              : ""
          }`}
          onClick={() => renderComponent("assignment")}
        >
          Assignment
        </button>
        {/* <button className={`btn_border py-[12px] border-l border-[#EAEAEA] ${activeComponent === 'certifications' ? 'bg-[#1FC074] text-[#FFFFFF]' : ''}`} 
                        onClick={() => renderComponent('certifications')}>Certifications</button> */}
        <button
          className={`btn_border py-[12px] border-l border-[#EAEAEA] ${
            activeComponent === "mystats" ? "bg-[#1FC074] text-[#FFFFFF]" : ""
          }`}
          onClick={() => renderComponent("mystats")}
        >
          MyStats
        </button>
        <button
          className={`btn_corners_last py-[12px] border-l border-[#EAEAEA] ${
            activeComponent === "liveClass" ? "bg-[#1FC074] text-[#FFFFFF]" : ""
          }`}
          onClick={() => renderComponent("liveClass")}
        >
          Live Class
        </button>
      </div>

      {activeComponent === "Overview" && <Overview />}
      {activeComponent === "Instructor" && <Instructor />}
      {activeComponent === "assignment" && (
        <CNAssignment courseAssignment={courseAssignment} />
      )}
      {/* {activeComponent === 'certifications' && <CNCertifications />} */}
      {activeComponent === "mystats" && (
        <CNMyStats
          courseLessons={courseLessons}
          totalLessons={totalLessons}
          courseAssignment={courseAssignment}
        />
      )}
      {activeComponent === "liveClass" && <LiveClass />}
      {/* {activeComponent === "Launch" && <LaunchLab />} */}
    </div>
  );
};

export default CourseNavigation;
