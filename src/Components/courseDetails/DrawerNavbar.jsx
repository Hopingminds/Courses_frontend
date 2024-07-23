import React, { useState, useEffect, useRef } from "react";
import Courses from "../../Assets/Icons/CDcourse.svg";
import AssignmentIcon from "../../Assets/Icons/CDassignment.svg";
import Wishlist from "../../Assets/Icons/CDwishlist.svg";
import Certification from "../../Assets/Icons/CDcertification.svg";
import StatsIcon from "../../Assets/Icons/CDstats.svg";
import JobsIcon from "../../Assets/Icons/CDjobs.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";
import CourseDrawer from "./CourseDrawer";
import Assignment from "../MyLearning/Assignment";
import MyStats from "../MyLearning/MyStats";
import JobOffering from "./MyJobs";
import Certificate from "./MyCertificate";
import Mycourse from "../MyLearning/Mycourse";
import WishList from "./WishList";

const DrawerNavbar = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const drawerRef = useRef(null);
  const navigate = useNavigate();

  const renderComponent = (componentName) => {
    if (componentName !== selectedItem) {
      setActiveComponent(componentName);
      setSelectedItem(componentName);
    }
    if (!drawerOpen) {
      setDrawerOpen(true);
    }
  };

  const getComponent = () => {
    switch (activeComponent) {
      case "MyCourse":
        return <Mycourse courses={purchasedCourses} onCourseClick={handleCourseClick} />;
      case "Assignment":
        return <Assignment courses={purchasedCourses} />;
      case "Wishlist":
        return <WishList courses={purchasedCourses} />;
      case "Certificate":
        return <Certificate courses={purchasedCourses} />;
      case "Stats":
        return <MyStats courses={purchasedCourses} />;
      case "Jobs":
        return <JobOffering courses={purchasedCourses} />;
      default:
        return null;
    }
  };

  const fetchUserData = async (email) => {
    try {
      const res = await axios.get(`${BASE_URL}/user/${email}`);
      setPurchasedCourses(res?.data?.userDetails?.purchased_courses || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const login = localStorage.getItem("COURSES_USER_TOKEN");
    if (!login) {
      navigate("/login-2");
    } else {
      const token = localStorage.getItem("COURSES_USER_TOKEN");
      const decoded = jwtDecode(token);
      fetchUserData(decoded?.email);
    }
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawerOpen(false);
        setSelectedItem("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCourseClick = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="bg-[#E2FFF1] mx-4 my-6 pl-6 py-8 h-[80vh] rounded-3xl font-int font-medium text-[#1DBF73] flex flex-col gap-2 xsm:hidden">
      <div
        onClick={() => renderComponent("MyCourse")}
        className={`relative flex gap-2 items-center z-100 px-4 py-2 hover:rounded-l-xl hover:bg-[#F0FFF8] hover:font-bold cursor-pointer ${
          selectedItem === "MyCourse" ? "bg-white font-bold rounded-l-xl" : ""
        }`}
      >
        <img className="w-6 h-6" src={Courses} alt="" />
        <p>My Course</p>
        {selectedItem === "MyCourse" && (
          <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-12 border-b-12 border-l-12 border-t-transparent border-b-transparent border-l-white"></div>
        )}
      </div>
      <div
        onClick={() => renderComponent("Assignment")}
        className={`relative flex gap-2 items-center px-4 py-2 hover:rounded-l-xl hover:bg-[#F0FFF8] hover:font-bold cursor-pointer ${
          selectedItem === "Assignment" ? "bg-white font-bold rounded-l-xl" : ""
        }`}
      >
        <img className="w-6 h-6" src={AssignmentIcon} alt="" />
        <p>Assignment</p>
        {selectedItem === "Assignment" && (
          <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-12 border-b-12 border-l-12 border-t-transparent border-b-transparent border-l-white"></div>
        )}
      </div>
      <div
        onClick={() => renderComponent("Wishlist")}
        className={`relative flex gap-2 items-center px-4 py-2 hover:rounded-l-xl hover:bg-[#F0FFF8] hover:font-bold cursor-pointer ${
          selectedItem === "Wishlist" ? "bg-white font-bold rounded-l-xl" : ""
        }`}
      >
        <img className="w-6 h-6" src={Wishlist} alt="" />
        <p>Wishlist</p>
        {selectedItem === "Wishlist" && (
          <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-12 border-b-12 border-l-12 border-t-transparent border-b-transparent border-l-white"></div>
        )}
      </div>
      <div
        onClick={() => renderComponent("Certificate")}
        className={`relative flex gap-2 items-center px-4 py-2 hover:rounded-l-xl hover:bg-[#F0FFF8] hover:font-bold cursor-pointer ${
          selectedItem === "Certificate"
            ? "bg-white font-bold rounded-l-xl"
            : ""
        }`}
      >
        <img className="w-6 h-6" src={Certification} alt="" />
        <p>Certificate</p>
        {selectedItem === "Certificate" && (
          <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-12 border-b-12 border-l-12 border-t-transparent border-b-transparent border-l-white"></div>
        )}
      </div>
      <div
        onClick={() => renderComponent("Stats")}
        className={`relative flex gap-2 items-center px-4 py-2 hover:rounded-l-xl hover:bg-[#F0FFF8] hover:font-bold cursor-pointer ${
          selectedItem === "Stats" ? "bg-white font-bold rounded-l-xl" : ""
        }`}
      >
        <img className="w-6 h-6" src={StatsIcon} alt="" />
        <p>My Stats</p>
        {selectedItem === "Stats" && (
          <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-12 border-b-12 border-l-12 border-t-transparent border-b-transparent border-l-white"></div>
        )}
      </div>
      <div
        onClick={() => renderComponent("Jobs")}
        className={`relative flex gap-2 items-center px-4 py-2 hover:rounded-l-xl hover:bg-[#F0FFF8] hover:font-bold cursor-pointer ${
          selectedItem === "Jobs" ? "bg-white font-bold rounded-l-xl" : ""
        }`}
      >
        <img className="w-6 h-6" src={JobsIcon} alt="" />
        <p>Job Offering</p>
        {selectedItem === "Jobs" && (
          <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-12 border-b-12 border-l-12 border-t-transparent border-b-transparent border-l-white"></div>
        )}
      </div>
      <CourseDrawer
        ref={drawerRef}
        isOpen={drawerOpen}
        setIsOpen={setDrawerOpen}
        component={getComponent()}
      />
    </div>
  );
};

export default DrawerNavbar;
