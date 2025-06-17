import { useContext, useRef, useState } from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5";
import { Globalinfo } from "../../App";
import { IoTrendingUpSharp } from "react-icons/io5";

const CourseCard = ({
  title,
  slug,
  featured_video,
  price,
  name,
  email,
  experience,
  phone,
  duration,
  image,
  onClick,
  isSelected,
  category,
  description,
  ind,
  profile,
  _id,
  display,
  IsMinorDegreeCourse,
  credits,
  courseCategory,
  discount
}) => {
  // console.log(courseCategory);
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
  function getDirectGoogleDriveLink(url) {
    const regex = /\/file\/d\/([a-zA-Z0-9_-]+)\//;
    const match = url.match(regex);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return url; // fallback
  }

  // console.log(description);
  return (
    <Link
      onMouseEnter={() => toggleHover(ind)}
      onMouseLeave={() => toggleHover(null)}
      to={`/detailcourse/${slug}`}
      className={`shadow-xl  max-w-sm font-pop rounded-2xl relative pb-[50px] h-full 2xl:h-[450px] coursecardhome  bg-white px-3 py-3 xsm:rounded- xsm:p-1 md:p-[6px] md:w-[95%] xsm:w-[100%] md:rounded-xl sm:p-2  ${
        isSelected ? "border-2 border-blue-500" : ""
      }`}
      style={{
        pointerEvents:
          userDetail?.blocked_courses?.includes(_id) || !display
            ? "none"
            : "auto",
      }}
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

      <div className="h-fit aspect-[16/10] ">
        {mouseHovered === ind ? (
          <ReactPlayer
            className="rounded-t-2xl xsm:rounded-md border overflow-hidden"
            height="100%"
            width="100%"
            url={featured_video}
            controls={false}
            playing={true}
            ref={videoRef}
            muted={IsMuted}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
              },
            }}
          />
        ) : (
          <img
            className="w-full rounded-t-2xl h-full"
            src={getDirectGoogleDriveLink(image)}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://sbs.ac.in/wp-content/uploads/2023/09/Asset-5.png";
            }}
            alt="Course"
          />
        )}
      </div>

      <div className="flex flex-col gap-6 justify-between xsm:gap-1 sm:gap-3 md:gap-0 md:mt-0 xsm:mt-0 xsm:p-2 ">
        <div className="flex flex-col justify-between gap-1 mt-2 xsm:mt-1 xsm:gap-1 sm:gap-2 md:gap-0">
          <div className="flex justify-between items-center min-h-[30%] sm:min-h-[20%] md:min-h-0">
            <div className="flex items-center space-x-3 max-w-[80%] xsm:max-w-[70%] xsm:space-x-1 sm:space-x-1 md:space-x-2 md:max-w-[70%]">
              {/* <FaUserCircle  className="text-2xl  xsm:w-[14px] xsm:h-[14px] md:h-4 md:w-4 rounded-full"/> */}
              <img
                alt=""
                className="w-[35px] h-[32px] xsm:w-[14px] xsm:h-[14px] sm:w-5 sm:h-5 md:h-4 md:w-4 rounded-full"
                src={
                  profile ||
                  "https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg"
                }
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg";
                }}
              />
              <p className="font-pop font-medium text-[13px] flex-wrap xsm:text-[10.3px] sm:text-[9px] md:text-[7px]">
                {name}
              </p>
            </div>
            <div className="flex gap-2">
              {/* <p className="font-pop font-semibold italic text-[#1DBF73] text-[16px] xsm:text-[13px] sm:text-[10px] md:text-[10px]">{discount}% off</p> */}
              {discount ? (
                <strike className="font-pop font-semibold text-gray-400 italic text-[14px] xsm:text-[11px] sm:text-[8px] md:text-[8px]">
                  {price == 0 ? "Free" : "₹" + price}
                </strike>
              ) : (
                ""
              )}
              <p className="font-pop font-bold text-[#1DBF73] text-[16px] xsm:text-[13px] sm:text-[10px] md:text-[10px]">
                {price == 0
                  ? "Free"
                  : "₹" + parseFloat(price - price * (discount / 100))}
              </p>
            </div>
          </div>
          <p
            className="line-clamp-2 min-h-12 w-full font-pop font-semibold text-[16px] text-[#252641] xsm:text-[12px] sm:text-[12px] sm:leading-none sm:h-6 md:text-[10px] md:h-6 xsm:mt-1  xsm:line-clamp-2"
            title={typeof title === "string" ? title : "Title"}
          >
            {title}
          </p>
          {description && (
            <p className=" line-clamp-3 font-pop mt-2 text-[14px]  text-[#555555] xsm:text-[11px] sm:text-[11px] sm:leading-none  md:text-[8px]  ">
              {description}
            </p>
          )}
        </div>
        <div className=" flex items-start justify-between 2xl:pb-2 sm:flex-wrap xl:absolute bottom-[10px] w-[90%] ">
          <span className="flex flex-col w-[70%]">
            {credits !== undefined ? (
              <div className="flex space-x-2 items-center xsm:space-x-1 sm:space-x-1">
                <IoTrendingUpSharp className="w-[16px] h-[16px] text-[#DFDFDF] xsm:w-[8px] xsm:h-[8px] sm:w-3 sm:h-3 md:h-3 md:w-3" />
                <p className="font-pop text-[14px] font-medium text-[#555555] xsm:text-[10px] sm:text-[10px] sm:leading-none md:text-[6px]">
                  {credits > 1 && (
                    <span className="font-bold uppercase text-green-500">
                      Credit eligible ({credits})
                    </span>
                  )}
                </p>
              </div>
            ) : null}

            {/* {credits ? (
              <p className="text-green-500 font-bold uppercase text-sm xsm:text-xs">
               CRADITS - Yes
              </p>
            ) : null} */}

            <div className="flex space-x-2 items-start xsm:space-x-1 sm:space-x-1">
              <img
                className="w-[16px] h-[16px] xsm:w-[8px] xsm:h-[8px] sm:w-3 sm:h-3 md:h-3 md:w-3"
                src="../Icons/RCDesign.svg"
                alt="icon"
              />
              <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[8px] sm:text-[8px] sm:leading-none md:text-[6px]">
                {category}
              </p>
            </div>
          </span>
          <span className="flex flex-col">
            <div className="flex space-x-2 items-center xsm:space-x-0 sm:space-x-1">
              <img
                className="w-[16px] h-[16px] text-[#555555] xsm:w-[8px] xsm:h-[8px] sm:w-3 sm:h-3 md:h-2 md:w-2"
                src="../Icons/RCClock.svg"
                alt=""
              />
              <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[8px] sm:text-[8px] sm:leading-none md:text-[6px]">
                {duration} Hours
              </p>
            </div>
          </span>
        </div>
        {/* {credits !== undefined && credits > 0 && (
          <div className="flex items-center gap-3 bg-green-50 border border-green-400 rounded-md px-4 py-2 xsm:px-2 xsm:py-1">

            <div className="w-3 h-3 rounded-full bg-red-500 animate-ping-custom xsm:w-2 xsm:h-2"></div>

            <div className="flex flex-col text-sm leading-tight xsm:text-xs">
              <span className="text-gray-700 font-medium">
                Registration live till{" "}
                <span className="text-red-500 font-semibold">25th July</span>
              </span>
            </div>
          </div>
        )} */}
      </div>
    </Link>
  );
};

export default CourseCard;
