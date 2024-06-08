import React, { useContext, useEffect, useRef, useState } from "react";
import Img1 from "../../Assests/Images/searchbanner.png";
import Img2 from "../../Assests/Images/creator.png";
import Icon1 from "../../Assests/Icons/twitter.svg";
import Icon2 from "../../Assests/Icons/facebook.svg";
import Icon3 from "../../Assests/Icons/instagram.svg";
import Search from "../../Assests/Icons/search.svg";
import User1 from "../../Assests/Images/Saurabh Pal-Data Resolve.png";
import User2 from "../../Assests/Images/Sumit.jpg";
import User3 from "../../Assests/Images/Khushpreet Kaur-Delta IT.jpeg";
import User4 from "../../Assests/Images/Amritpal Protiviti GDU 5.7.png";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import RecommendedCourses from "../RecommendedCourses/RecommendedCourses";
import NewTestimonial from "../Testimonial/NewTestimonial";
import Spinner from "../Spinner";
import ReactPlayer from "react-player";
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { GoUnmute } from "react-icons/go";

import { Globalinfo } from "../../App";
import Newinstructor from "../Newinstructor";
import HireTestimonial from "../HireFromUs/HireTestimonial";
import CourseCard from "../Courses_Home/CourseCard";
import MinorDegree from "../MinorCourses/minordegree";
import CountUp from 'react-countup';
import Skeleton from "../Skeleton/Skeletoncard";
import VideoSkeleton from "../Skeleton/videoskeleton";
const AllCourses = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [selectedUser, setSelectedUser] = useState(User1);
  const [allCourses, setAllCourses] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [Data, setData] = useState([]);
  const [SearchedData, setSearchedData] = useState([]);
  const [Temp, setTemp] = useState([]);
  const [show, setshow] = useState(false);
  const [videoSkeleton, setvideoSkeleton] = useState(true)
const [secondloader, setsecondloader] = useState(true)
  const [cat, setcat] = useState()
  const [userData, setUserData] = useState({

    [User1]: {
      name: "SAURABH PAL",
      email: "saurabh@dataresolve.com",
      description1:
        "Being a recent Computer Science graduate from Jaypee University, MP,I faced job challenges post-college. Enrolling in Hoping Minds for personal development and placement training, I swiftly secured a System Developer role at Data Resolve, grateful for their transformative assistance in my professional journey.",
      description2: "Lorem ipsuut labore et dolore magna aliqua.",
      description3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    [User2]: {
      name: "SUMIT VERMA",
      email: "sumit@example.com",
      description1:
        "HopingMinds played a crucial role in securing my first job, providing unwavering support, essential skills, and invaluable guidance. Their exceptional job placement assistance led me to a role aligned with my aspirations, illuminating my path to success.",
      description2:
        "Ut enim ad min, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      description3: "Ut enim ad minim vequat.",
    },
    [User3]: {
      name: "KHUSHPREET KAUR",
      email: "khushpreet@example.com",
      description1:
        "Hoping Minds' dedicated efforts and comprehensive job assistance program transformed me from a hopeful job seeker to a proud employee. Their personalized approach, insightful counseling, and invaluable support led to securing my first job and equipped me for future career success.",
      description2: "Duis aute irure dolor nulla pariatur.",
      description3:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillumulla pariatur.",
    },
    [User4]: {
      name: "AMRITPAL SINGH",
      email: "jack@example.com",
      description1:
        "Thrilled to join Protiviti, thanks to Hoping Minds' fantastic support. The journey was challenging, but their assistance and opportunities for growth were invaluable. Grateful to family, teachers, and friends. Excited and determined for this new career chapter!",
      description2: "Exce cupidatat non proident, sunt in culpaborum.",
      description3:
        "Excepteur sint occaect in culpa qui officia deserunt mollit anim id est laborum.",
    },
  });
  const { userDetail, getUserDetails } = useContext(Globalinfo);

  // console.log(userDetail.blocked_courses)
  const [IsMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const [loaded, setloaded] = useState(true)
  const [selectedCourse, setSelectedCourse] = useState("");
  // console.log(pat);

  let { pathname } = useLocation()
  const [params, setparams] = useSearchParams()
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
        setcat(category)
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

        setData(res?.data?.courses)
        setTemp(res?.data?.courses)
        setshow(false)

      }
    } catch (error) { }
  };

  const handleMute = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsMuted((prev) => !prev);

  };

  function SearchData(e) {
    let query = e.target.value;

    if (query == "") {
      setSearchedData([]);

      setAllCourses(Data);
    } else {
      setSearchedData(
        allCourses?.filter((item) => {
          const searchitem = query.toLowerCase();
          const slug = item.slug.toLowerCase();
          // console.log(slug);
          // console.log(searchitem && (slug.includes(searchitem)));
          return searchitem && slug.includes(searchitem);
        })
      );
      setAllCourses(    
        allCourses?.filter((item) => {
          const searchitem = query.toLowerCase();
          const slug = item.slug.toLowerCase();
          // console.log(slug);
          // console.log(searchitem && (slug.includes(searchitem)));
          return searchitem && slug.includes(searchitem);
        })
      );
    }
  }

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

  // console.log(SearchedData)



  const searchBarRef = useRef(null);
  const searchResultsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log(event)
      // Check if the clicked element is not inside the search bar or search results popup
      if (searchBarRef.current && !searchBarRef.current.contains(event.target) &&
        searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
        setSearchedData([])
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [searchBarRef, searchResultsRef]);

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent default context menu behavior
  };
setTimeout(() => {
  setloaded(false)
}, 1000);
  return (
    <>
      <head>
        <title>Courses | HopingMinds</title>
      </head>
      {/* Search */}
      {/* <div
        className="flex flex-col gap-5 p-20 items-center xsm:py-6 xsm:px-0 xsm:gap-2 md:p-10 bg-[#000000]"
        style={{ backgroundImage: `url(${Img1})`, backgroundSize: "cover" }}
      > */}

      {/* </div> */}

      <div className="relative h-auto w-full mb-14 xsm:mb-8">
        <div className="flex flex-row rounded-md w-[50%] p-1 bg-[#f3fffa] xsm:p-0 xsm:w-[90%] xsm:rounded-md md:rounded-lg absolute z-20 top-[30%] xsm:top-[25%] left-[50%] translate-x-[-50%] md:w-[70%]">
          <div className="relative w-full rounded-md">
            <input
              type="text"
              placeholder="Search for course"
              ref={searchBarRef}
              onChange={SearchData}
              className={`flex-1 w-full outline-none placeholder-[#808080] text-[16px] font-pop rounded-bl-md rounded-tl-md py-2 px-4 xsm:rounded-l-md xsm:py-1 xsm:text-[10px] md:rounded-l-lg md:text-[14px] ${!SearchedData.length ? "rounded-bl-2xl" : "rounded-bl-0"
                }`}
            />
            <div className="flex flex-col w-full absolute bg-[#f3fffa] justify-center" ref={searchResultsRef}>
              {SearchedData?.map((item, ind) => {
                // console.log(item.);
                return (
                  <>
                    <Link
                      key={ind}
                      to={"/detailcourse/" + item.slug}
                      className="text-left pl-2 py-1 border-b-[2px]"
                    >
                      {item.title}
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
          <button className="text-[#ffffff] text-[22px] flex flex-row gap-2 justify-center items-center font-pop bg-[#1DBF73] rounded-md py-1 px-4 xsm:rounded-r-md xsm:text-[10px] xsm:py-0 xsm:px-2 md:text-[14px] md:rounded-r-lg">
            <span> <img src={Search} className="w-12 h-8 md:w-10 md:h-6 xsm:w-6 xsm:h-2" /> </span>Search
          </button>
        </div>

        <div className="h-full w-full bg-gray-300">
         <ReactPlayer
          onContextMenu={handleContextMenu}
            // url='https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/assets/1712146617474-vid-1.mp4'
            url='https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/assets/1712146617474-vid-1.mp4'
            height="100%"
            width={'100%'}
            playing={true}
            loop={true}
            controls={false}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload" // Disable download option
                }
              }
            }}
          />

        </div>

        <div className="w-full bg-[rgba(0,0,0,0.6)] h-28 flex justify-center space-x-28 text-white  absolute bottom-0 items-center xsm:h-10 xsm:space-x-5 md:h-16 md:space-x-12">
          <div className="text-white xsm:flex xsm:flex-col">

            <div className="text-center text-xl font-semibold xsm:text-[6px] md:text-[14px]"><CountUp start={0} delay={2} duration={5} end={28725} />+</div>
            <div className="xsm:text-[6px] md:text-[14px]">Students Enrolled</div>
          </div>
          <div className="xsm:flex xsm:flex-col">
            <div className="text-center text-xl font-semibold xsm:text-[6px] md:text-[14px]"><CountUp start={0} delay={2} duration={5} end={5000} />+</div>
            <div className="xsm:text-[6px] md:text-[14px]">Students Placed</div>
          </div>
          {/* <div className="xsm:flex xsm:flex-col">
            <div className="text-center text-xl font-semibold xsm:text-[6px] md:text-[14px]"><CountUp start={0} delay={2} duration={5} end={175} />+</div>
            <div className="xsm:text-[6px] md:text-[14px]">Courses Enrolled</div>
          </div> */}
          <div className="xsm:flex xsm:flex-col">
            <div className="text-center text-xl font-semibold xsm:text-[6px] md:text-[14px]"><CountUp start={0} delay={2} duration={5} end={626} />+</div>
            <div className="xsm:text-[6px] md:text-[14px]">Industry Experts</div>
          </div>
          <div className="xsm:flex xsm:flex-col">
            <div className="text-center text-xl font-semibold xsm:text-[6px] md:text-[14px]"><CountUp start={0} delay={2} duration={5} end={256} />+</div>
            <div className="xsm:text-[6px] md:text-[14px]">Corporate Partners</div>
          </div>
        </div>
      </div>
      {/* cards */}
      {/* {!allCourses?.length ? (
        <div className="flex justify-center  w-full mt-10">
          <div className="text-center font-semibold text-2xl w-full ">
            {" "}
            No Course Found
          </div>
        </div>
      ) : (
        ""
      )} */}
      <div className="text-2xl font-bold pl-[5%]">{cat}</div>

      <div id="CoursesContent" className="my-5 mx-[5%] grid grid-cols-4 gap-6 xsm:grid-cols-3 xsm:gap-3 xsm:my-[4%] md:my-[2%] md:gap-3 md:mx-[3%]">
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
        {
        (show && window.innerWidth<=480) ? [1,2,3,4,5,6].map((item)=>{
          return(<Skeleton/>)
        }):
        show && window.innerWidth>480 ? [1,2,3,4].map((item)=>{
          return(<Skeleton/>)
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
            // Pass category to CourseCard component
            />
          );
        })}
      </div>
      <Newinstructor />
      {/* <div className="flex flex-col gap-14 px-24 py-20 md:px-[5%] md:gap-2 md:py-10">
        <p className="text-[#252641] text-[32px] font-poppins font-semibold pl-4 md:text-[18px]">
          Classes taught by real creators
        </p>
        <div className="grid grid-cols-3 gap-20">
          <div className="h-[45vh] flex justify-center items-end relative md:h-[16vh]">
            <div
              className="flex flex-col gap-2 h-[70%] justify-end items-center text-center py-6 md:py-2 md:gap-1 md:h-[60%]"
              style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-[#252641] text-[20px] font-poppins font-semibold md:text-[14px]">
                Adam
              </p>
              <p className="text-[#696984] text-[16px] font-poppins w-[70%] md:text-[8px]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>
            <img src={Img2} className="absolute top-5 w-[35%]" />
          </div>

          <div className="h-[45vh] flex justify-center items-end relative md:h-[16vh]">
            <div
              className="flex flex-col gap-2 h-[70%] justify-end items-center text-center py-6 md:py-2 md:gap-1 md:h-[60%]"
              style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-[#252641] text-[20px] font-poppins font-semibold md:text-[14px]">
                Adam
              </p>
              <p className="text-[#696984] text-[16px] font-poppins w-[70%] md:text-[8px]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>
            <img src={Img2} className="absolute top-5 w-[35%]" />
          </div>

          <div className="h-[45vh] flex justify-center items-end relative md:h-[16vh]">
            <div
              className="flex flex-col gap-2 h-[70%] justify-end items-center text-center py-6 md:py-2 md:gap-1 md:h-[60%]"
              style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-[#252641] text-[20px] font-poppins font-semibold md:text-[14px]">
                Adam
              </p>
              <p className="text-[#696984] text-[16px] font-poppins w-[70%] md:text-[8px]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>
            <img src={Img2} className="absolute top-5 w-[35%]" />
          </div>
        </div>
      </div> */}

      {/* recommended cards */}
      <RecommendedCourses />
      <MinorDegree />
      {/* <div className="flex flex-col gap-10 bg-[#E2FFF1] px-28 py-16 xsm:px-[5%] xsm:py-[5%] xsm:gap-2">
        <p className="text-[#000000] text-[30px] font-pop font-semibold xsm:text-[8px]">
          What our students have to say
        </p>
        <div className="bg-[#ffffff] rounded-xl flex flex-row gap-20 py-10 pt-20 px-14 xsm:py-2 xsm:px-2 xsm:gap-0">
          <div className="flex w-[65%] justify-center xsm:items-center">
            <img
              src={selectedUser === User1 ? User1 : selectedUser}
              className="h-[300px] w-[300px] rounded-full object-cover"
              onClick={() => toggleUserImage("")}
            />
          </div>
          <div className="flex flex-col gap-5 w-full justify-end pl-4 xsm:gap-1 xsm:justify-center">
            <p className="text-[#252641] text-[30px] font-pop font-semibold xsm:text-[8px]">
              {userData[selectedUser]?.name}
            </p>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-8 w-[65%] xsm:gap-2">
                <div className="flex flex-col gap-3 xsm:gap-0">
                  <p className="text-[#252641] text-[24px] font-pop font-semibold xsm:text-[6px]">
                    {userData[selectedUser]?.email}
                  </p>
                  <p className="text-[#696984] text-[16px] font-pop xsm:text-[6px]">
                    {userData[selectedUser]?.description1}
                  </p>
               <p className="text-[#696984] text-[16px] font-pop xsm:hidden">
                    {userData[selectedUser]?.description2}
                  </p>
                  <p className="text-[#696984] text-[16px] font-pop xsm:hidden">
                    {userData[selectedUser]?.description3}
                  </p> 
                </div>
                <div className="flex flex-row gap-6 xsm:gap-2">
                  <img src={Icon1} className="w-[6%] object-contain " />
                  <img src={Icon2} className="w-[6%] object-contain" />
                  <img src={Icon3} className="w-[6%] object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-between xsm:gap-1">
                <img
                  src={User1}
                  className="w-[50px] h-[50px] object-cover cursor-pointer xsm:w-[15px] rounded-full"
                  onClick={() => toggleUserImage(User1)}
                />
                <img
                  src={User2}
                  className="w-[50px] h-[50px] object-cover cursor-pointer xsm:w-[15px] rounded-full"
                  onClick={() => toggleUserImage(User2)}
                />
                <img
                  src={User3}
                  className="w-[50px] h-[50px] object-cover cursor-pointer xsm:w-[15px] rounded-full"
                  onClick={() => toggleUserImage(User3)}
                />
                <img
                  src={User4}
                  className="w-[50px] h-[50px] object-cover cursor-pointer xsm:w-[15px] rounded-full"
                  onClick={() => toggleUserImage(User4)}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* {show ? (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80 z-50">
          <Spinner className="" />
        </div>
      ) : (
        ""
      )} */}
      <div className="px-[5%] py-[4%] bg-[#111F25]">
        <HireTestimonial />
      </div>
      {/* <NewTestimonial /> */}
    </>
  );
};

export default AllCourses;
