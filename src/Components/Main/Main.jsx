import React, { useState } from "react";
import Overview from "../Overview/Overview";
import Curriculum from "../Curriculum/Curriculum";
import Instructor from "../Instructor/Instructor";
import Faqs from "../Faqs/Faqs";
import Reviews from "../Reviews/Reviews";
import "./Main.css";
import LaunchLab from "../LaunchLab";

function Main() {
  const [activeComponent, setActiveComponent] = useState("Overview");

  const renderComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="container1 xsm:w-full ">
      <div className="nav-buttons overflow-hidden xsm:w-full">
        <button
          className={`btn_corners_first font-nu text-[14px]  ${
            activeComponent === "Overview" ? "active" : ""
          }`}
          onClick={() => renderComponent("Overview")}
        >
          Overview
        </button>
        <button
          className={`btn_border font-nu text-[14px]  ${
            activeComponent === "Curriculum" ? "active" : ""
          }`}
          onClick={() => renderComponent("Curriculum")}
        >
          Curriculum
        </button>
        <button
          className={`btn_border font-nu text-[14px]  ${
            activeComponent === "Instructor" ? "active" : ""
          }`}
          onClick={() => renderComponent("Instructor")}
        >
          Instructor
        </button>
        <button
          className={`btn_corners_last font-nu text-[14px]  ${
            activeComponent === "Faqs" ? "active" : ""
          }`}
          onClick={() => renderComponent("Faqs")}
        >
          FAQs
        </button>
        {/* <button
          className={`btn_corners_last font-nu text-[14px]  ${
            activeComponent === "Reviews" ? "active" : ""
          }`}
          onClick={() => renderComponent("Reviews")}
        >
          Reviews
        </button> */}
        {/* <button className={`btn_corners_last font-nu text-[14px]  ${activeComponent === 'Launch' ? 'active' : ''}`}
                    onClick={() => renderComponent('Launch')}>Launch Lab</button> */}
      </div>

      {/* <div className="component"> */}
      {activeComponent === "Overview" && <Overview />}
      {activeComponent === "Curriculum" && <Curriculum />}
      {activeComponent === "Instructor" && <Instructor />}
      {activeComponent === "Faqs" && <Faqs />}
      {activeComponent === "Reviews" && <Reviews />}
      {activeComponent === "Launch" && <LaunchLab />}
      {/* </div> */}
    </div>
  );
}

export default Main;
