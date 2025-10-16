import React, { useState } from "react";
import Overview from "../Overview/Overview";
import Instructor from "../Instructor/Instructor";
import CNAssignment from "./CNAssignment";
import CNMyStats from "./CNMyStats";

import CNAssessment from "./CNAssessment";
import Coding from "./CodingPlateform/Coding";
import PracticeSession from "./PracticeSession/PracticeSession";
import Disscussion from "./Disscussion/Disscussion";

const CourseNavigation = ({
  courseLessons,
  totalLessons,
  courseAssignment,
  liveclass,
  slug,
}) => {
  const [activeComponent, setActiveComponent] = useState("Overview");
  // console.log("courseLessons",courseLessons);
  // console.log("totalLessons",totalLessons);
  // console.log("courseAssignment",courseAssignment);

  const renderComponent = (componentName) => {
    setActiveComponent(componentName);
    
    // Ensure the component is set before scrolling
    setTimeout(() => {
      const scrollDiv = document.getElementById('ScrollToTop');
      if (scrollDiv) {
          scrollDiv.scrollIntoView({ behavior: 'smooth' });
      }
  }, 0);
  };
  return (
   <div className="w-full min-h-[840px] mt-[20px] xsm:w-full sm:w-full sm:px-4 z-50">
  {/* Tabs container */}
  <div className="grid md:grid-cols-7 grid-cols-3 gap-1 border w-full overflow-hidden border-[#EAEAEA] font-nu font-semibold text-[16px] xsm:text-[10px] sm:text-[12px] leading-[24px] rounded-t-[20px]">
    <button
      className={`btn_corners_first py-[12px] border-b ${
        activeComponent === "Overview" ? "bg-[#1FC074] text-[#FFFFFF]" : ""
      }`}
      onClick={() => renderComponent("Overview")}
    >
      Overview
    </button>
    <button
      className={`btn_border py-[12px] border-l border-[#EAEAEA] border-b ${
        activeComponent === "Instructor"
          ? "bg-[#1FC074] text-[#FFFFFF]"
          : ""
      }`}
      onClick={() => renderComponent("Instructor")}
    >
      Instructor
    </button>
    <button
      className={`btn_border py-[12px] border-l border-[#EAEAEA] border-b ${
        activeComponent === "mystats" ? "bg-[#1FC074] text-[#FFFFFF]" : ""
      }`}
      onClick={() => renderComponent("mystats")}
    >
      MyStats
    </button>
    <button
      className={`btn_border py-[12px] border-l border-[#EAEAEA] border-b ${
        activeComponent === "assessment"
          ? "bg-[#1FC074] text-[#FFFFFF]"
          : ""
      }`}
      onClick={() => renderComponent("assessment")}
    >
      Assessment
    </button>
    <button
      className={`btn_border py-[12px] border-l border-[#EAEAEA] border-b ${
        activeComponent === "disscussion"
          ? "bg-[#1FC074] text-[#FFFFFF]"
          : ""
      }`}
      onClick={() => renderComponent("disscussion")}
    >
      Disscussion
    </button>
    {/* <button
      className={`btn_border py-[12px] border-l border-[#EAEAEA] border-b ${
        activeComponent === "coding" ? "bg-[#1FC074] text-[#FFFFFF]" : ""
      }`}
      onClick={() => renderComponent("coding")}
    >
      Coding
    </button> */}
    <button
      className={`btn_corners_last py-[12px] border-l border-r border-[#EAEAEA] border-b ${
        activeComponent === "pratice" ? "bg-[#1FC074] text-[#FFFFFF]" : ""
      }`}
      onClick={() => renderComponent("pratice")}
    >
      Practice
    </button>
  </div>

  {/* Render Components */}
  {activeComponent === "Overview" && <Overview />}
  {activeComponent === "Instructor" && <Instructor />}
  {activeComponent === "assignment" && (
    <CNAssignment courseAssignment={courseAssignment} />
  )}
  {activeComponent === "mystats" && (
    <CNMyStats
      courseLessons={courseLessons}
      totalLessons={totalLessons}
      courseAssignment={courseAssignment}
    />
  )}
  {activeComponent === "assessment" && <CNAssessment slug={slug} />}
  {activeComponent === "disscussion" && <Disscussion />}
  {/* {activeComponent === "coding" && <Coding />} */}
  {activeComponent === "pratice" && <PracticeSession />}
</div>

  );
};

export default CourseNavigation;
