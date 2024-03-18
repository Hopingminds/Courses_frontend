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
}) => {
  console.log(description);
  return (
    <Link
      style={{ padding: "12px" }}
      to={`/detailcourse/${slug}`}
      className={` font-pop rounded-xl relative coursecardhome m-4  bg-white   ${
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
            <Design />
            <span className="">{category}</span>
          </div>
          <div className=" flex items-center space-x-2">
            <Clock />
            <p> {duration}</p>
          </div>
        </div>
        <div className="px-2 py-5 mt-2 space-y-2 flex  flex-col h-full">
          <div>
            <div
              style={{ color: "#252641" }}
              className="font-bold text-[14px] mb-2 "
            >
              {cropString(title, 13)}
            </div>
            <div className="text-[#696984]">
              {cropString(description[0], 50)}
            </div>
          </div>
          <div className="flex justify-between items-center bottom-4">
            <div className="flex items-center space-x-2">
              <img src="/lina.png" className="h-14 w-14" />
              <div className="font-semibold">Lina</div>
            </div>
            <div
              style={{ color: "#49BBBD" }}
              className="text-[20px] font-semibold"
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
