import React, { useState } from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import { ReactComponent as Clock } from "../../Assets/Icons/RCClock.svg";
import { ReactComponent as Design } from "../../Assets/Icons/design.svg";
import { cropString } from "../../helpers/helper_function";
import ReactPlayer from "react-player";

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
  ind,
  featured_video
}) => {
  const [mouseHovered, setMouseHovered] = useState(null);

  const toggleHover = (index) => {
    setMouseHovered(index);
  };

  // console.log(description);
  return (
    <a
      // style={{ padding: "10px" }}
      onMouseEnter={() => toggleHover(ind)}
      onMouseLeave={() => toggleHover(null)}
      href={`/detailcourse/${slug}`}
      className={`shadow-lg  max-w-sm font-pop rounded-xl relative coursecardhome   bg-white p-2 xsm:rounded-lg  ${
        isSelected ? "border-2 border-blue-500" : ""
      }`}
    >
      {
        mouseHovered===ind?<ReactPlayer
        className=" rounded-xl xsm:rounded-md border"
        height={'40%'}
        width={'100%'}
        url={featured_video}
        controls={false}
        playing={true}
        muted
      />:<img
      // style={{ height: "10rem" }}
      className="w-full  rounded-lg h-[40%] xsm:h-[45%]"
      src={image}
      alt="Course"
    />
      }
      
      <div className=" h-[55%] xsm:h-[45%]">
        <div className="flex justify-between items-center text-[#696984] mt-2">
          <div className="flex space-x-2 items-center xsm:space-x-1">
            <Design className="h-4 w-4 xsm:h-2 xsm:w-2"/>
            <span className="text-[12px] xsm:text-[6px]">{category}</span>
          </div>
          <div
              style={{ color: "#" }}
              className="text-[18px] font-semibold text-[#1DBF73] xsm:text-[6px]"
            >
              ₹{price}
            </div>
       
        </div>
        <div className=" flex items-center mt-2 space-x-2 xsm:space-x-1">
            <Clock className="h-4 w-4 xsm:h-2 xsm:w-2"/>
            <p className="text-[12px] xsm:text-[6px] text-[#696984]"> {duration}</p>
          </div>
        <div className="px-2 py-5 mt-2 space-y-2 flex  flex-col h-full xsm:mt-1 xsm:py-1 xsm:px-0 xsm:justify-between xsm:space-y-0">
          <div>
            <div
              style={{ color: "#252641" }}
              className="font-bold text-[16px] mb-2 h-12 xsm:text-[8px] xsm:mb-0 xsm:h-4"
            >
              {cropString(title, 50)}
            </div>
            <div className="text-[#696984] text-[14px] text-pretty xsm:text-[11px] xsm:text-balance xsm:hidden">
              {cropString(description[0], 70)}
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex items-center space-x-1">
              <img src="/lina.png" className="h-10 w-10 xsm:h-4 xsm:w-4" />
              <div className="font-semibold text-sm xsm:text-[6px]">{firstName} {lastName}</div>
            </div>
            {/* <div
              style={{ color: "#" }}
              className="text-[18px] font-semibold text-[#1DBF73] xsm:text-[6px]"
            >
              ₹{price}
            </div> */}
          </div>
        </div>
      </div>
    </a>
  );
};

export default CourseCard;
