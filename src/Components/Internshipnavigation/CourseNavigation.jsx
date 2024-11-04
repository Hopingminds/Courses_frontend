import React, { useState } from "react";


import InternshipCNAssessment from "./CNAssessment";
import InternshipCNMyStats from "./CNMyStats";
import InternshipCNAssignment from "./CNAssignment";
import InternshipOverview from "../Overview/internshipoverview";

const InternshipCourseNavigation = ({
  courseLessons,
  totalLessons,
  courseAssignment,
  liveclass,
  slug
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
    <div className="w-full min-h-[540px] mt-[20px] xsm:w-full sm:w-full sm:px-4  z-50">
      <div className="grid grid-cols-1 border w-full overflow-hidden border-[#EAEAEA] font-nu font-semibold text-[16px] xsm:text-[10px] sm:text-[12px] leading-[24px] rounded-t-[20px] xsm:w-full">
        <button
          className={`btn_corners_first py-[12px]  ${
            activeComponent === "Overview" ? "bg-[#1FC074] text-[#FFFFFF]" : ""
          }`}
          onClick={() => renderComponent("Overview")}
        >
          Overview
        </button>
        {/* <button
          className={`btn_border py-[12px] border-l border-[#EAEAEA] ${
            activeComponent === "Instructor"
              ? "bg-[#1FC074] text-[#FFFFFF]"
              : ""
          }`}
          onClick={() => renderComponent("Instructor")}
        >
          Instructor
        </button> */}
        {/* <button
          className={`btn_border py-[12px] border-l border-[#EAEAEA] ${
            activeComponent === "assignment"
              ? "bg-[#1FC074] text-[#FFFFFF]"
              : ""
          }`}
          onClick={() => renderComponent("assignment")}
        >
          Assignment
        </button> */}
        {/* <button className={`btn_border py-[12px] border-l border-[#EAEAEA] ${activeComponent === 'certifications' ? 'bg-[#1FC074] text-[#FFFFFF]' : ''}`} 
                        onClick={() => renderComponent('certifications')}>Certifications</button> */}
        {/* <button
          className={`btn_border py-[12px] border-l border-[#EAEAEA] ${
            activeComponent === "mystats" ? "bg-[#1FC074] text-[#FFFFFF]" : ""
          }`}
          onClick={() => renderComponent("mystats")}
        >
          MyStats
        </button> */}
        {/* <button
          className={`btn_border py-[12px] border-l border-[#EAEAEA] ${
            activeComponent === "liveClass" ? "bg-[#1FC074] text-[#FFFFFF]" : ""
          }`}
          onClick={() => renderComponent("liveClass")}
        >
          Live Class
        </button> */}
        {/* <button
          className={`btn_corners_last py-[12px] border-l border-[#EAEAEA] ${
            activeComponent === "assessment" ? "bg-[#1FC074] text-[#FFFFFF]" : ""
          }`}
          onClick={() => renderComponent("assessment")}
        >
          Assessment
        </button> */}
      </div>

      {activeComponent === "Overview" && <InternshipOverview />}
      {/* {activeComponent === "Instructor" && <Instructor />} */}
      {activeComponent === "assignment" && (
        <InternshipCNAssignment courseAssignment={courseAssignment} />
      )}
      {/* {activeComponent === 'certifications' && <CNCertifications />} */}
      {activeComponent === "mystats" && (
        <InternshipCNMyStats
          courseLessons={courseLessons}
          totalLessons={totalLessons}
          courseAssignment={courseAssignment}
        />
      )}
      {/* {activeComponent === "liveClass" && <LiveClass data={liveclass} />} */}
      {activeComponent === "assessment" && <InternshipCNAssessment slug={slug}/>}
    </div>
  );
};

export default InternshipCourseNavigation;
