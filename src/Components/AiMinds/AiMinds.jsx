import { useEffect, useState } from "react";
import AiBenefits from "./AiBenefits";
import AiCareerBenefits from "./AiCareerBenefits";
import AiHead from "./AiHead";
import AiJourney from "./AiJourney";
import AiOpportunities from "./AiOpportunities";
import AiOverview from "./AiOverview";
import AiProject from "./AiProject ";
import AiTools from "./AiTools";

export default function AiMinds() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    function handleScroll() {
      var overview = document.getElementById("overview");
      var tools = document.getElementById("tools");
      var journey = document.getElementById("journey");
      var benefits = document.getElementById("benefits");
      var hm = document.getElementById("hm");
      var opportunities = document.getElementById("opportunities");
      var project = document.getElementById("project");
      // var experts = document.getElementById('experts');
      var windowHeight = window.innerHeight;

      // Check if elements are found
      if (
        overview &&
        tools &&
        journey &&
        benefits &&
        hm &&
        opportunities &&
        project
      ) {
        var overviewTop = overview.getBoundingClientRect().top;
        var toolsTop = tools.getBoundingClientRect().top;
        var journeyTop = journey.getBoundingClientRect().top;
        var benefitsTop = benefits.getBoundingClientRect().top;
        var hmTop = hm.getBoundingClientRect().top;
        var opportunitiesTop = opportunities.getBoundingClientRect().top;
        var projectTop = project.getBoundingClientRect().top;
        var projectBottom = project.getBoundingClientRect().bottom;

        if (overviewTop <= windowHeight / 2 && toolsTop > windowHeight / 2) {
          setSidebarVisible(true);
          setActiveSection("overview");
        } else if (
          toolsTop <= windowHeight / 2 &&
          journeyTop > windowHeight / 2
        ) {
          setSidebarVisible(true);
          setActiveSection("tools");
        } else if (
          journeyTop <= windowHeight / 2 &&
          benefitsTop > windowHeight / 2
        ) {
          setSidebarVisible(true);
          setActiveSection("journey");
        } else if (
          benefitsTop <= windowHeight / 2 &&
          hmTop > windowHeight / 2
        ) {
          setSidebarVisible(true);
          setActiveSection("benefits");
        } else if (
          hmTop <= windowHeight / 2 &&
          opportunitiesTop > windowHeight / 2
        ) {
          setSidebarVisible(true);
          setActiveSection("hm");
        } else if (
          opportunitiesTop <= windowHeight / 2 &&
          projectTop > windowHeight / 2
        ) {
          setSidebarVisible(true);
          setActiveSection("opportunities");
        } else if (
          projectTop <= windowHeight / 2 &&
          projectBottom > windowHeight
        ) {
          setSidebarVisible(true);
          setActiveSection("project");
        } else {
          setSidebarVisible(false);
          setActiveSection("");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function onSectionEnter(section) {
    setActiveSection(section);
  }

  return (
    <div className="">
      <AiHead />
      <div className="relative">
        <div
          id="sidebar"
          className={`bg-[#169F63] text-white flex flex-col py-4 shadow-xl full-shadow xsm:hidden ${
            sidebarVisible
              ? "fixed top-[30%] left-[6%] 2xl:left-[22%]"
              : "hidden"
          }`}
        >
          <a
            href="#overview"
            className={`text-[15px] font-mons px-4 py-1 ${
              activeSection === "overview" ? "border-l-4 border-white" : ""
            }`}
          >
            Program Overview
          </a>
          <a
            href="#tools"
            className={`text-[15px] font-mons px-4 py-1 ${
              activeSection === "tools" ? "border-l-4 border-white" : ""
            }`}
          >
            Languages & Tools
          </a>
          <a
            href="#journey"
            className={`text-[15px] font-mons px-4 py-1 ${
              activeSection === "journey" ? "border-l-4 border-white" : ""
            }`}
          >
            Career Journey
          </a>
          <a
            href="#benefits"
            className={`text-[15px] font-mons px-4 py-1 ${
              activeSection === "benefits" ? "border-l-4 border-white" : ""
            }`}
          >
            Guaranteed Growth
          </a>
          <a
            href="#hm"
            className={`text-[15px] font-mons px-4 py-1 ${
              activeSection === "hm" ? "border-l-4 border-white" : ""
            }`}
          >
            Benefits With HM
          </a>
          <a
            href="#opportunities"
            className={`text-[15px] font-mons px-4 py-1 ${
              activeSection === "opportunities" ? "border-l-4 border-white" : ""
            }`}
          >
            Job Opportunities
          </a>
          <a
            href="#project"
            className={`text-[15px] font-mons px-4 py-1 ${
              activeSection === "project" ? "border-l-4 border-white" : ""
            }`}
          >
            Project Powerhouse
          </a>
        </div>
        <AiOverview onSectionEnter={() => onSectionEnter("overview")} />
        <AiTools onSectionEnter={() => onSectionEnter("tools")} />
        <AiJourney onSectionEnter={() => onSectionEnter("journey")} />
        <AiCareerBenefits onSectionEnter={() => onSectionEnter("benefits")} />
        <AiBenefits onSectionEnter={() => onSectionEnter("hm")} />
        <AiOpportunities
          onSectionEnter={() => onSectionEnter("opportunities")}
        />
        <AiProject onSectionEnter={() => onSectionEnter("project")} />
      </div>
    </div>
  );
}
