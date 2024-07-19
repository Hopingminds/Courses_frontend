import React, { useState, useEffect } from "react";
import Courses from "../../Assets/Icons/CDcourse.svg";
import AssignmentIcon from "../../Assets/Icons/CDassignment.svg";
import Wishlist from "../../Assets/Icons/CDwishlist.svg";
import Certification from "../../Assets/Icons/CDcertification.svg";
import StatsIcon from "../../Assets/Icons/CDstats.svg";
import JobsIcon from "../../Assets/Icons/CDjobs.svg";
import { useNavigate } from "react-router-dom";
import WishList from "../MyLearning/WishList";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";

// import Jobs from "../Jobs/Jobs";

import CourseDrawer from "./CourseDrawer";
import Mycourse from "../MyLearning/Mycourse";
import Assignment from "../MyLearning/Assignment";
import MyStats from "../MyLearning/MyStats";
import JobOffering from "./MyJobs";
import Certificate from "./MyCertificate";

const DrawerNavbar = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [purchasedCourses, setPurchasedCourses] = useState();

  const renderComponent = (componentName) => {
    setActiveComponent(componentName);
    setDrawerOpen(true);
  };

  const navigate = useNavigate();

  const getComponent = () => {
    switch (activeComponent) {
      case "MyCourse":
        return <Mycourse courses={purchasedCourses} />;
      case "Assignment":
        return <Assignment courses={purchasedCourses} />;
      case "Wishlist":
        return <WishList courses={purchasedCourses} />;
        case "Certificate":
          return <Certificate courses={purchasedCourses} />;
      case "Stats":
        return <MyStats courses={purchasedCourses}/>
        case "Jobs":
          return <JobOffering courses={purchasedCourses} />;
      default:
        return null;
    }
  };

  const fetchUserData = async (email) => {
    // setDrawerOpen(true);
    try {
      const res = await axios.get(`${BASE_URL}/user/${email}`);
      console.log(
        "All Courses purchased",
        res?.data?.userDetails?.purchased_courses
      );
      setPurchasedCourses(res?.data?.userDetails?.purchased_courses);
      setDrawerOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let login = localStorage.getItem("COURSES_USER_TOKEN");
    // console.log(login)
    if (!login) {
      navigate("/login-2");
    } else {
      const token = localStorage.getItem("COURSES_USER_TOKEN");
      const decoded = jwtDecode(token);
      // console.log(decoded)
      fetchUserData(decoded?.email);
    }
  }, []);

  return (
    <div className="bg-[#E2FFF1] mx-4 my-6 px-6 py-8 h-[80vh] rounded-3xl font-int font-medium text-[#1DBF73] flex flex-col gap-2 xsm:hidden">
      <div
        onClick={() => renderComponent("MyCourse")}
        className="flex gap-2 items-center px-4 py-2 hover:rounded-xl hover:bg-[#F0FFF8] hover:font-bold hover:border hover:border-[#1DBF73] cursor-pointer"
      >
        <img className="w-6 h-6" src={Courses} alt="" />
        <p>My Course</p>
      </div>
      <div
        onClick={() => renderComponent("Assignment")}
        className="flex gap-2 items-center px-4 py-2 hover:rounded-xl hover:bg-[#F0FFF8] hover:font-bold hover:border hover:border-[#1DBF73] cursor-pointer"
      >
        <img className="w-6 h-6" src={AssignmentIcon} alt="" />
        <p>Assignment</p>
      </div>
      <div
        onClick={() => renderComponent("Wishlist")}
        className="flex gap-2 items-center px-4 py-2 hover:rounded-xl hover:bg-[#F0FFF8] hover:font-bold hover:border hover:border-[#1DBF73] cursor-pointer"
      >
        <img className="w-6 h-6" src={Wishlist} alt="" />
        <p>Wishlist</p>
      </div>
      <div
        onClick={() => renderComponent("Certificate")}
        className="flex gap-2 items-center px-4 py-2 hover:rounded-xl hover:bg-[#F0FFF8] hover:font-bold hover:border hover:border-[#1DBF73] cursor-pointer"
      >
        <img className="w-6 h-6" src={Certification} alt="" />
        <p>Certificate</p>
      </div>
      <div
        onClick={() => renderComponent("Stats")}
        className="flex gap-2 items-center px-4 py-2 hover:rounded-xl hover:bg-[#F0FFF8] hover:font-bold hover:border hover:border-[#1DBF73] cursor-pointer"
      >
        <img className="w-6 h-6" src={StatsIcon} alt="" />
        <p>My Stats</p>
      </div>
      <div
        onClick={() => renderComponent("Jobs")}
        className="flex gap-2 items-center px-4 py-2 hover:rounded-xl hover:bg-[#F0FFF8] hover:font-bold hover:border hover:border-[#1DBF73] cursor-pointer"
      >
        <img className="w-6 h-6" src={JobsIcon} alt="" />
        <p>Job Offering</p>
      </div>
      {drawerOpen && (
        <CourseDrawer
          isOpen={drawerOpen}
          setIsOpen={setDrawerOpen}
          component={getComponent()}
        />
      )}
    </div>
  );
};

export default DrawerNavbar;
