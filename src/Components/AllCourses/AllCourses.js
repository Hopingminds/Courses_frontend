import React, { useEffect, useRef, useState } from "react";
import Search from "../../Assests/Icons/search.svg";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import RecommendedCourses from "../RecommendedCourses/RecommendedCourses";
import ReactPlayer from "react-player";

import Newinstructor from "../Newinstructor";
import HireTestimonial from "../HireFromUs/HireTestimonial";
import CourseCard from "../Courses_Home/CourseCard";
import CountUp from "react-countup";
import Skeleton from "../Skeleton/Skeletoncard";
const AllCourses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [Data, setData] = useState([]);
  const [SearchedData, setSearchedData] = useState([]);
  const [Temp, setTemp] = useState([]);
  const [show, setshow] = useState(false);

  const [cat, setcat] = useState();

  // console.log(userDetail.blocked_courses)
  const [loaded, setloaded] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState("");
  // console.log(pat);

  let { pathname } = useLocation();
  const [params, setparams] = useSearchParams();
  useEffect(() => {
    fetchCourses();
  }, [params.get("category"), pathname]);
  const fetchCourses = async () => {
    try {
      // console.log("yes");
      let category = params.get("category");

      // console.log(category);
      if (category) {
        category = category.replace(/%20/g, " ");
        setcat(category);
        setshow(true);
        const res = await axios.get(`${BASE_URL}/courses?category=${category}`);
        // console.log(res.data.courses);
        setAllCourses(res.data.courses);
        setData(res.data.courses);
        setTemp(res.data.courses);
        setshow(false);
      } else {
        setshow(true);

        const res = await axios.get(`${BASE_URL}/courses`);
        // console.log(res?.data?.courses);

        setAllCourses(res?.data?.courses);
        // setAllCourses(newCourses)

        setData(res?.data?.courses);
        setTemp(res?.data?.courses);
        setshow(false);
      }
    } catch (error) {}
  };

  const debounce = (func, wait) => {
    let timeout;

    return function (...args) {
      const context = this;

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  };
  async function SearchData(e) {
    let query = e.target.value;
    if (query === "") {
      setSearchedData([]);

      setAllCourses(Data);
    } else {
      try {
        const tempdata = await fetch(BASE_URL + "/courses?search=" + query);
        const response = await tempdata.json();
        console.log(response);

        if (response.success) {
          setSearchedData(response?.courses);
          setAllCourses(response?.courses);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  const debouncedSearchData = debounce(SearchData, 300);
  // const debouncedSearchData = debounce(SearchData, 300);
  const handleCourseClick = (courseTitle) => {
    setSelectedCourse(courseTitle);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const searchBarRef = useRef(null);
  const searchResultsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is not inside the search bar or search results popup
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target) &&
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target)
      ) {
        setSearchedData([]);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [searchBarRef, searchResultsRef]);

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent default context menu behavior
  };
  setTimeout(() => {
    setloaded(false);
  }, 1000);

  return (
    <>
      <head>
        <title>Courses | HopingMinds</title>
      </head>
      {/* Search */}
      <div className="relative h-auto w-full mb-14 xsm:mb-8">
        <div className="flex flex-row rounded-md w-[50%] p-1 bg-[#f3fffa] xsm:p-0 xsm:w-[90%] xsm:rounded-md md:rounded-lg absolute z-20 top-[30%] xsm:top-[25%] left-[50%] translate-x-[-50%] md:w-[70%] sm:w-[70%]">
          <div className="relative w-full rounded-md">
            <input
              type="text"
              placeholder="Search for course"
              ref={searchBarRef}
              onChange={debouncedSearchData}
              className={`flex-1 w-full outline-none placeholder-[#808080] text-[16px] font-pop rounded-bl-md rounded-tl-md py-2 px-4 xsm:rounded-l-md xsm:py-1 xsm:text-[10px] md:rounded-l-lg md:text-[14px] sm:text-[12px] ${
                !SearchedData.length ? "rounded-bl-2xl" : "rounded-bl-0"
              }`}
            />
            {SearchedData?.length ? (
              <div
                className="flex flex-col w-full absolute bg-[#f3fffa] justify-center  pt-2"
                ref={searchResultsRef}
              >
                {SearchedData?.map((item) => {
                  // console.log(item.);
                  return (
                    <>
                      <Link
                        to={"/detailcourse/" + item.slug}
                        className="text-left pl-2 py-1 border-b-[2px]"
                      >
                        {item.title}
                      </Link>
                    </>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
          <button className="text-[#ffffff] text-[22px]  flex flex-row gap-2 justify-center items-center font-pop bg-[#1DBF73] rounded-md py-1 px-4 xsm:rounded-r-md xsm:text-[10px] xsm:py-0 xsm:px-2 md:text-[14px] md:rounded-r-lg sm:text-[14px] ">
            <span>
              {" "}
              <img
                src={Search}
                alt=""
                className="w-12 h-8 md:w-10 md:h-6 xsm:w-6 xsm:h-2 sm:w-10 sm:h-6 "
              />{" "}
            </span>
            Search
          </button>
        </div>

        <div className="h-full w-full bg-gray-300 video-container">
          <ReactPlayer
            onContextMenu={handleContextMenu}
            playsinline={true}
            url="https://drdy957pjga3n.cloudfront.net/assets/1712146617474-vid-1.mp4"
            height="100%"
            width={"100%"}
            playing={true}
            loop={true}
            controls={false}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload", // Disable download option
                },
              },
            }}
          />
        </div>

        <div className="w-full bg-[rgba(0,0,0,0.6)] h-28 sm:h-16 flex justify-center space-x-28 text-white font-pop  absolute bottom-0 items-center xsm:h-10 xsm:space-x-3 md:h-16 md:space-x-12 sm:space-x-4">
          <div className="text-white xsm:flex xsm:flex-col xsm:text-center xsm:gap-1">
            <div className="text-center text-xl font-semibold xsm:leading-none xsm:text-[10px] md:text-[14px] sm:text-[14px]">
              <CountUp start={0} delay={2} duration={5} end={28725} />+
            </div>
            <div className="xsm:text-[9px] xsm:leading-none md:text-[14px] sm:text-[14px]">
              Students Enrolled
            </div>
          </div>
          <div className="xsm:flex xsm:flex-col xsm:text-center xsm:gap-1">
            <div className="text-center text-xl font-semibold xsm:leading-none xsm:text-[10px] md:text-[14px] sm:text-[14px]">
              <CountUp start={0} delay={2} duration={5} end={8000} />+
            </div>
            <div className="xsm:text-[9px] xsm:leading-none md:text-[14px] sm:text-[14px]">
              Students Placed
            </div>
          </div>

          <div className="xsm:flex xsm:flex-col xsm:text-center xsm:gap-1">
            <div className="text-center text-xl font-semibold xsm:leading-none xsm:text-[10px] md:text-[14px] sm:text-[14px]">
              <CountUp start={0} delay={2} duration={5} end={626} />+
            </div>
            <div className="xsm:text-[9px] xsm:leading-none md:text-[14px] sm:text-[14px]">
              Industry Experts
            </div>
          </div>
          <div className="xsm:flex xsm:flex-col xsm:text-center xsm:gap-1">
            <div className="text-center text-xl font-semibold xsm:leading-none xsm:text-[10px] md:text-[14px] sm:text-[14px]">
              <CountUp start={0} delay={2} duration={5} end={256} />+
            </div>
            <div className="xsm:text-[9px] xsm:leading-none md:text-[14px] sm:text-[14px]">
              Corporate Partners
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="text-2xl font-bold pl-[5%]">{cat}</div>

      <div
        id="CoursesContent"
        className="my-5 mx-[5%] grid grid-cols-4 gap-8 xsm:grid-cols-1 lg:grid-cols-3 lg:gap-10 xsm:gap-3 xsm:my-[4%] sm:grid-cols-3 sm:gap-4 md:my-[2%] md:gap-3 md:mx-[3%]"
      >
        {!allCourses?.length && !show ? (
          <div className="flex justify-center  w-full mt-10">
            <div className="text-center font-semibold text-2xl w-full ">
              {" "}
              No Course Found
            </div>
          </div>
        ) : (
          ""
        )}
        {show && window.innerWidth <= 480
          ? [1, 2, 3, 4, 5, 6].map(() => {
              return <Skeleton />;
            })
          : show && window.innerWidth > 480
          ? [1, 2, 3].map(() => {
              return <Skeleton />;
            })
          : allCourses?.map((val, ind) => {
              return (
                <CourseCard
                  key={val?.title}
                  title={val?.title}
                  featured_video={val?.featured_video}
                  price={val?.base_price}
                  name={val?.instructor?.name}
                  duration={val?.duration}
                  image={val?.featured_image}
                  profile={val?.instructor?.profile}
                  email={val?.instructor?.email}
                  experience={val?.instructor?.experience}
                  bio={val?.instructor?.bio}
                  slug={val?.slug}
                  phone={val?.instructor?.phone}
                  onClick={() => handleCourseClick(val?.title)}
                  isSelected={selectedCourse === val?.title}
                  category={val?.category}
                  description={val?.overview}
                  ind={ind}
                  _id={val?._id}
                  display={val?.display}
                  IsMinorDegreeCourse={val?.IsMinorDegreeCourse}
                  credits={val?.credits}
                  courseCategory={val?.courseCategory}
                  discount={val?.discount_percentage}
                  // Pass category to CourseCard component
                />
              );
            })}
      </div>
      <Newinstructor />
      {/* recommended cards */}
      <RecommendedCourses />
      {/* <MinorDegree /> */}
      <div className="px-[5%] py-[4%] bg-[#111F25]">
        <HireTestimonial />
      </div>
      {/* <NewTestimonial /> */}
    </>
  );
};

export default AllCourses;
