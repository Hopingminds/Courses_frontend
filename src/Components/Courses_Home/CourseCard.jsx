import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import { ReactComponent as Clock } from "../../Assets/Icons/clock.svg";
import { ReactComponent as Design } from "../../Assets/Icons/design.svg";
import { cropString } from "../../helpers/helper_function";

const CourseCard = ({
  title,
  slug,
  price,
  description,
  duration,
  image,
  onClick,
  isSelected,
  category,
  firstName,
  lastName,
}) => {
  // console.log(description);
  return (
    <Link
      style={{ padding: "10px" }}
      to={`/detailcourse/${slug}`}
      className={`shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 max-w-sm font-pop rounded-xl relative coursecardhome   bg-white   ${
        isSelected ? "border-2 border-blue-500" : ""
      }`}
    >
      <img
        style={{ height: "10rem" }}
        className="w-full  rounded-lg "
        src={image}
        alt="Course"
      />
      <div className="h-max">
        <div className="flex justify-between items-center text-[#696984] mt-2">
          <div className="flex space-x-2 items-center">
            <Design className="h-4 w-4"/>
            <span className="text-[12px]">{category}</span>
          </div>
          <div className=" flex items-center space-x-2">
            <Clock className="h-4 w-4"/>
            <p className="text-[12px]"> {duration}</p>
          </div>
        </div>
        <div className="px-2 py-5 mt-2 space-y-2 flex  flex-col h-full">
          <div>
            <div
              style={{ color: "#252641" }}
              className="font-bold text-[16px] mb-2 "
            >
              {cropString(title, 50)}
            </div>
            <div className="text-[#696984] text-[14px] ">
              {cropString(description[0], 70)}
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex items-center space-x-1">
              <img src="/lina.png" className="h-10 w-10" />
              <div className="font-semibold text-sm">{firstName} {lastName}</div>
            </div>
            <div
              style={{ color: "#" }}
              className="text-[18px] font-semibold text-[#1DBF73]"
            >
              ₹{price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
