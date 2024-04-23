import React, { useContext, useRef, useState } from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import { ReactComponent as Clock } from "../../Assets/Icons/RCClock.svg";
import { ReactComponent as Design } from "../../Assets/Icons/design.svg";
import { cropString } from "../../helpers/helper_function";
import ReactPlayer from "react-player";
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5";
import { Globalinfo } from "../../App";
import { IoIosLock } from "react-icons/io";
import abhishek from "../../Assets/Images/abhishek.jpeg";

const CourseCard = ({
  title,
  slug,
  featured_video,
  price,
  lastName,
  firstName,
  duration,
  image,
  onClick,
  isSelected,
  category,
  description,
  ind,
  _id,
  display,
}) => {
  // console.log(_id);
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
      className={`shadow-lg  max-w-sm font-pop rounded-2xl relative h-[480px] coursecardhome  bg-white p-2 xsm:rounded-lg  md:w-[95%] md:h-[300px] xsm:h-[200px] xsm:w-[100%] ${
        isSelected ? "border-2 border-blue-500" : ""
      }`}
      style={{
        pointerEvents:
          userDetail?.blocked_courses?.includes(_id) || !display
            ? "none"
            : "auto",
      }}
    >
      {(userDetail?.blocked_courses?.includes(_id) || !display) && (
        <span className="absolute top-0 left-0 h-[100%] w-[100%] z-[9] bg-[rgba(0,0,0,0.6)] rounded-xl grid place-items-center">
          <IoIosLock size={"60"} color={"white"} />
        </span>
      )}
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
      <div className="h-[45%] md:h-[40%]">
        {mouseHovered === ind ? (
          <ReactPlayer
            className=" rounded-xl xsm:rounded-md border"
            height={"100%"}
            width={"100%"}
            url={featured_video}
            controls={false}
            playing={true}
            ref={videoRef}
            muted={IsMuted}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload", // Disable download option
                },
              },
            }}
          />
        ) : (
          <img
            // style={{ height: "10rem" }}
            className="w-full  rounded-lg h-full object-cover "
            src={image}
            alt="Course"
          />
        )}
      </div>
      <div className="space-y-2 flex flex-col justify-between h-[53%] xsm:space-y-2 md:space-y-2 md:mt-0 xsm:mt-0">
        <div className="flex flex-col gap-2 mt-2 xsm:mt-1 xsm:gap-0 md:gap-0">
          <div className="flex justify-between items-center min-h-[30%]">
            <div className="flex items-center space-x-3 max-w-[80%] xsm:max-w-[70%] xsm:space-x-1 md:space-x-2 md:max-w-[70%]">
              <img
                className="w-[32px] h-[32px] xsm:w-[14px] xsm:h-[14px] md:h-4 md:w-4 rounded-full"
                src={abhishek}
              />
              <p className="font-pop font-medium text-[14px] flex-wrap xsm:text-[6px] md:text-[7px]">
                {firstName + " " + lastName}
              </p>
            </div>
            <div>
              <p className="font-pop font-bold text-[#1DBF73] text-[16px] xsm:text-[6px] md:text-[10px]">
                ₹ {price}
              </p>
            </div>
          </div>
          <p className="font-pop h-10 font-semibold text-[16px] text-[#252641] xsm:text-[8px] md:text-[12px] md:h-12 xsm:mt-2 xsm:h-6">
            {title}
          </p>
          <p className="font-pop text-[14px] h-12 text-[#555555] xsm:hidden md:text-[8px]">
            {description.slice(0, 70)}..
          </p>
        </div>
        <div className=" flex items-center justify-between">
          <div className="flex space-x-2 items-center xsm:space-x-1">
            <img
              className="w-[16px] h-[16px] xsm:w-[8px] xsm:h-[8px] md:h-3 md:w-3"
              src="../Icons/RCDesign.svg"
            />
            <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[5px] md:text-[6px]">
              {category}
            </p>
          </div>
          <div className="flex space-x-2 items-center xsm:space-x-0">
            <img
              className="w-[16px] h-[16px] text-[#555555] xsm:w-[8px] xsm:h-[8px] md:h-2 md:w-2"
              src="../Icons/RCClock.svg"
            />
            <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[5px] md:text-[6px]">
              45 Hours
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CourseCard;
