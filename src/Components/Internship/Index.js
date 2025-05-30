import React, { useContext, useEffect, useRef, useState } from "react";
import Search from "../../Assests/Icons/search.svg";
import User1 from "../../Assests/Images/Saurabh Pal-Data Resolve.png";
import User2 from "../../Assests/Images/Sumit.jpg";
import User3 from "../../Assests/Images/Khushpreet Kaur-Delta IT.jpeg";
import User4 from "../../Assests/Images/Amritpal Protiviti GDU 5.7.png";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import RecommendedCourses from "../RecommendedCourses/RecommendedCourses";
import ReactPlayer from "react-player";

import { Globalinfo } from "../../App";
import Newinstructor from "../Newinstructor";
import HireTestimonial from "../HireFromUs/HireTestimonial";
import CourseCard from "../Courses_Home/CourseCard";
import CountUp from 'react-countup';
import Skeleton from "../Skeleton/Skeletoncard";


const Internship = () => {

  const [allCourses, setAllCourses] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [Data, setData] = useState([]);
  const [SearchedData, setSearchedData] = useState([]);
  const [Temp, setTemp] = useState([]);
  const [show, setshow] = useState(false);

  const [cat, setcat] = useState()


  // console.log(userDetail.blocked_courses)
  const [IsMuted, setIsMuted] = useState(true);
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

        const res = await axios.get(`${BASE_URL}/courses?type=internship`);
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

  async function SearchData(e) {
  
    let query = e.target.value;
    let temp=[]
    if (query === "") {
      setSearchedData([]);

      setAllCourses(Data);
    } else {
      try {
      const tempdata=await fetch(BASE_URL+'/search?title='+query+'&category=internship')
      const response=await tempdata.json();
      
      if(response.success){
        response?.courses?.map((course)=>{
        temp.push(course)
        })
        // console.log(temp);
        setSearchedData(temp);
         setAllCourses(
          response?.courses
         );
      }
    } catch (error) {
        console.log(error);
    }
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
        <div className="flex flex-row rounded-md w-[50%] p-1 bg-[#f3fffa] xsm:w-[90%] xsm:top-[50%] xsm:rounded-md md:rounded-lg absolute z-20 top-[40%] left-[50%] translate-x-[-50%] md:w-[70%]">
          <div className="relative w-full rounded-md">
            <input
              type="text"
              placeholder="Search for an Internship program"
              ref={searchBarRef}
              onChange={SearchData}
              className={`flex-1 w-full outline-none placeholder-[#808080] text-[16px] font-pop rounded-bl-md rounded-tl-md py-2 px-4 xsm:rounded-l-md xsm:py-1 xsm:text-[10px] md:rounded-l-lg xsm:leading-none md:text-[14px] ${
                !SearchedData.length ? "rounded-bl-2xl" : "rounded-bl-0"
              }`}
            />
            {SearchedData.length ? (
              <div
                className="flex flex-col w-full absolute bg-[#f3fffa] justify-center  pt-2"
                ref={searchResultsRef}
              >
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
            ) : (
              ""
            )}
          </div>
          <button className="text-[#ffffff] text-[22px] flex flex-row gap-2 justify-center items-center font-pop bg-[#1DBF73] rounded-md py-1 px-4 xsm:rounded-r-md xsm:text-[10px] xsm:py-0 xsm:px-2 xsm:leading-none md:text-[14px] md:rounded-r-lg">
            <span>
              {" "}
              <img
                src={Search}
                className="w-12 h-8 md:w-10 md:h-6 xsm:w-6 xsm:h-2"
              />{" "}
            </span>
            Search
          </button>
        </div>

        <div className="absolute z-20 top-[10%] flex justify-center items-center text-center w-full text-white text-[50px] font-pop font-semibold md:text-[35px] xsm:text-[18px]">
          Gain Professional Skills
        </div>
        <div className="absolute z-20 top-[27%] flex justify-center items-center text-center w-full text-white font-pop md:text-[16px] xsm:text-[12px] px-[5%]">
          Unlock your potential with real-world experience in your field of
          study.
        </div>

        <div className="h-full w-full bg-gray-300">
          <ReactPlayer
            onContextMenu={handleContextMenu}
            playsInline={true}
            // url='https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/assets/1712146617474-vid-1.mp4'
            // url='https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/assets/1716441485951-stock%20web_1compressed_1.mp4'
            url={
              window.innerWidth > 500
                ? "https://drdy957pjga3n.cloudfront.net/assets/1716441485951-stock%20web_1compressed_1.mp4"
                : "/internshipvideo.mp4"
            }
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

        <div className="w-full bg-[rgba(0,0,0,0.6)] h-28 flex justify-center space-x-28 text-white font-pop  absolute bottom-0 items-center xsm:h-8 xsm:space-x-5 md:h-16 md:space-x-12">
          <div className="text-white xsm:flex xsm:flex-col xsm:gap-1">
            <div className="text-center text-xl font-semibold xsm:text-[10px] xsm:leading-none md:text-[14px]">
              <CountUp start={0} delay={2} duration={5} end={28725} />+
            </div>
            <div className="text-center xsm:text-[9px] xsm:leading-none md:text-[14px]">
              Students Enrolled
            </div>
          </div>
          <div className="xsm:flex xsm:flex-col xsm:gap-1">
            <div className="text-center text-xl font-semibold xsm:text-[10px] xsm:leading-none md:text-[14px]">
              <CountUp start={0} delay={2} duration={5} end={5000} />+
            </div>
            <div className="text-center xsm:text-[9px] xsm:leading-none md:text-[14px]">
              Students Placed
            </div>
          </div>
          {/* <div className="xsm:flex xsm:flex-col xsm:gap-1">
            <div className="text-center text-xl font-semibold xsm:text-[10px] xsm:leading-none md:text-[14px]"><CountUp start={0} delay={2} duration={5} end={175} />+</div>
            <div className="text-center xsm:text-[9px] xsm:leading-none md:text-[14px]">Courses Enrolled</div>
          </div> */}
          <div className="xsm:flex xsm:flex-col xsm:gap-1">
            <div className="text-center text-xl font-semibold xsm:text-[10px] xsm:leading-none md:text-[14px]">
              <CountUp start={0} delay={2} duration={5} end={626} />+
            </div>
            <div className="text-center xsm:text-[9px] xsm:leading-none md:text-[14px]">
              Industry Experts
            </div>
          </div>
          <div className="xsm:flex xsm:flex-col xsm:gap-1">
            <div className="text-center text-xl font-semibold xsm:text-[10px] xsm:leading-none md:text-[14px]">
              <CountUp start={0} delay={2} duration={5} end={256} />+
            </div>
            <div className="text-center xsm:text-[9px] xsm:leading-none md:text-[14px]">
              Corporate Partners
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
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
      <div className="text-2xl font-bold pl-[5%]">{cat}</div>

      <div className="my-5 mx-[5%] grid grid-cols-4 gap-6 xsm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xsm:gap-3 xsm:my-[4%] md:my-[2%] ">
        {show
          ? [1, 2, 3, 4].map((item) => {
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
                  discount={val?.discount_percentage}
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
              <p className="text-[#252641] text-[20px] font-poppins font-semibold xsm:leading-none md:text-[14px]">
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
              <p className="text-[#252641] text-[20px] font-poppins font-semibold xsm:leading-none md:text-[14px]">
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
              <p className="text-[#252641] text-[20px] font-poppins font-semibold xsm:leading-none md:text-[14px]">
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
      {/* <MinorDegree /> */}
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
                  <p className="text-[#252641] text-[24px] font-pop font-semibold xsm:text-[10px]">
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

      <div className="px-[5%] py-[4%] bg-[#111F25]">
        <HireTestimonial />
      </div>
      {/* <NewTestimonial /> */}
    </>
  );
};

export default Internship;
