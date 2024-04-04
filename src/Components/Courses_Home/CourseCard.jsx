import React, { useContext, useRef, useState } from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import { ReactComponent as Clock } from "../../Assets/Icons/RCClock.svg";
import { ReactComponent as Design } from "../../Assets/Icons/design.svg";
import { cropString } from "../../helpers/helper_function";
import ReactPlayer from "react-player";
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5";
import { Globalinfo } from "../../App";

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
  featured_video,
}) => {
  const [mouseHovered, setMouseHovered] = useState(null);
  const [IsMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const { userDetail, getUserDetails } = useContext(Globalinfo);

  const toggleHover = (index) => {
    setMouseHovered(index);
  };

  const handleMute = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsMuted((prev) => !prev);
  };

  // console.log(description);
  return (
    <a
      // style={{ padding: "10px" }}
      onMouseEnter={() => toggleHover(ind)}
      onMouseLeave={() => toggleHover(null)}
      href={`/detailcourse/${slug}`}
      className={`shadow-lg  max-w-sm font-pop rounded-2xl relative coursecardhome   bg-white p-2 xsm:rounded-lg w-[283px] h-[443px] ${
        isSelected ? "border-2 border-blue-500" : ""
      }`}
    >
      {mouseHovered === ind && (
        <span className="bg-transparent p-4 absolute top-2 left-2 z-[9999]">
          {IsMuted ? (
            <IoVolumeMuteOutline
              size={"20"}
              style={{
                cursor: "pointer",
                color: "black",

                zIndex: "999999",
              }}
              onClick={handleMute}
            />
          ) : (
            <IoVolumeMediumOutline
              size={"20"}
              style={{
                cursor: "pointer",
                color: "black",

                zIndex: "999999",
              }}
              onClick={handleMute}
            />
          )}
        </span>
      )}
      {mouseHovered === ind ? (
        <ReactPlayer
          className=" rounded-xl xsm:rounded-md border"
          height={"40%"}
          width={"100%"}
          url={featured_video}
          controls={false}
          playing={true}
          ref={videoRef}
          muted={IsMuted}
        />
      ) : (
        <img
          // style={{ height: "10rem" }}
          className="w-full  rounded-lg h-[40%] xsm:h-[45%] md:h-[35%]"
          src={image}
          alt="Course"
        />
      )}

      <div className=" h-[45%] xsm:h-[45%]">
        <div className="px-2 flex justify-between items-center h-[15%] text-[#474747] mt-4">
          <div className="flex items-center gap-2">
            <img
              src="/lina.png"
              className="h-8 w-8 bg-[#0000001A] rounded-full xsm:h-4 xsm:w-4 md:h-6 md:w-6"
            />
            <div className="font-medium font-pop text-[16px] xsm:text-[6px] md:text-[8px]">
              {firstName} {lastName}
            </div>
          </div>
          {/* <div className="flex space-x-2 items-center xsm:space-x-1">
            <Design className="h-4 w-4 xsm:h-2 xsm:w-2 md:w-3 md:h-3"/>
            <span className="text-[12px] xsm:text-[6px] md:text-[8px]">{category}</span>
          </div> */}
          <div
            style={{ color: "#" }}
            className="text-[22px] font-bold text-[#1DBF73] xsm:text-[6px] md:text-[8px]"
          >
            ₹{price}
          </div>
        </div>
        {/* <div className=" flex items-center mt-2 space-x-2 xsm:space-x-1 md:mt-1">
            <Clock className="h-4 w-4 xsm:h-2 xsm:w-2 md:w-3 md:h-3"/>
            <p className="text-[12px] xsm:text-[6px] text-[#696984] md:text-[8px]"> {duration}</p>
          </div> */}
        <div className="px-2 pt-4 flex gap-6 flex-col justify-between h-[85%] xsm:mt-1 xsm:py-1 xsm:px-0 xsm:justify-between xsm:space-y-0 md:py-2 md:mt-0">
          <div>
            <div
              style={{ color: "#3C3C3C" }}
              className="font-semibold text-[16.5px] mb-2 h-12 xsm:text-[8px] xsm:mb-0 xsm:h-4 md:text-[10px] md:mb-0"
            >
              {cropString(title, 50)}
            </div>
            <div className="text-[#3C3C3C] text-[14px] text-pretty xsm:text-[11px] xsm:text-balance xsm:hidden md:text-[10px]">
              {cropString(description[0], 70)}
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex items-center space-x-1">
              <img
                src="/lina.png"
                className="h-10 w-10 xsm:h-4 xsm:w-4 md:h-6 md:w-6"
              />
              <div className="font-semibold text-sm xsm:text-[6px] md:text-[10px]">
                {firstName} {lastName}
              </div>
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
