import React from "react";
import { ReactComponent as MyCourse } from "../../Assests/Icons/my-courses.svg";
import { ReactComponent as MyAssignment } from "../../Assests/Icons/assignments.svg";
import { ReactComponent as MyWhishlist } from "../../Assests/Icons/whishlist.svg";
import { ReactComponent as MyCertificate } from "../../Assests/Icons/certificate.svg";
import { ReactComponent as MyStats } from "../../Assests/Icons/stats.svg";
import { ReactComponent as MyJob } from "../../Assests/Icons/job.svg";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";

const InternshipSideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex justify-end ">
      <div className="flex flex-col justify-between w-16 h-[75vh] bg-[#1DBF73] mt-10 rounded-full p-2 mr-5 hover:p-0 hover:pt-12 sidebarHover ">
        <div className="flex flex-col gap-1 mt-4 sideBarMenus text-white">
          <div
            onClick={() => navigate("/learning?tab=courses")}
            className="flex items-center py-2 cursor-pointer sideBarMenu"
          >
            <MyCourse className="SidebarmenuIcons invert-0" />
            <div className="SideTextshow">
              <p className="text-[14px]">My Courses</p>
            </div>
          </div>
          <div
            onClick={() => navigate("/learning?tab=assignments")}
            className="flex items-center py-2 cursor-pointer sideBarMenu"
          >
            <MyAssignment className="SidebarmenuIcons invert-0" />
            <div className="SideTextshow">
              <p className="text-[14px]">Assignment</p>
            </div>
          </div>
          <div
            onClick={() => navigate("/learning?tab=wishlist")}
            className="flex items-center py-2 cursor-pointer sideBarMenu"
          >
            <MyWhishlist className="SidebarmenuIcons invert-0" />
            <div className="SideTextshow">
              <p className="text-[14px]">Wishlist</p>
            </div>
          </div>
          <div
            onClick={() => navigate("/learning?tab=certificate")}
            className="flex items-center py-2 cursor-pointer sideBarMenu"
          >
            <MyCertificate className="SidebarmenuIcons invert-0" />
            <div className="SideTextshow">
              <p className="text-[14px]">Certification</p>
            </div>
          </div>
          <div
            onClick={() => navigate("/learning?tab=stats")}
            className="flex items-center py-2 cursor-pointer sideBarMenu"
          >
            <MyStats className="SidebarmenuIcons invert-0" />
            <div className="SideTextshow">
              <p className="text-[14px]">My Stats</p>
            </div>
          </div>
          <div
            onClick={() => navigate("/learning?tab=job")}
            className="flex items-center py-2 cursor-pointer sideBarMenu"
          >
            <MyJob className="SidebarmenuIcons invert-0" />
            <div className="SideTextshow">
              <p className="text-[14px]">Job Offering</p>
            </div>
          </div>
        </div>
        <div className=" bg-white w-12 h-12 rounded-full SideBar-whitecircle"></div>
      </div>
    </div>
  );
};

export default InternshipSideBar;
