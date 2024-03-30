import React, { useEffect, useState } from "react";
import Img1 from "../../Assests/Images/searchbanner.png";
import Img2 from "../../Assests/Images/creator.png";
import Icon1 from "../../Assests/Icons/twitter.svg";
import Icon2 from "../../Assests/Icons/facebook.svg";
import Icon3 from "../../Assests/Icons/instagram.svg";
import User1 from "../../Assests/Images/Saurabh Pal-Data Resolve.png";
import User2 from "../../Assests/Images/Sumit.jpg";
import User3 from "../../Assests/Images/Khushpreet Kaur-Delta IT.jpeg";
import User4 from "../../Assests/Images/Amritpal Protiviti GDU 5.7.png";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import { Link, useSearchParams } from "react-router-dom";
import RecommendedCourses from "../RecommendedCourses/RecommendedCourses";
import NewTestimonial from "../Testimonial/NewTestimonial";

const AllCourses = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [selectedUser, setSelectedUser] = useState(User1);
  const [allCourses, setAllCourses] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [Data, setData] = useState([])
  const [SearchedData, setSearchedData] = useState([])
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

  useEffect(() => {
    fetchCourses();
  }, []);

  const [params, setparams] = useSearchParams()
  const fetchCourses = async () => {
    try {
      let category = params.get('category')

      if (category) {
        const res = await axios.get(`${BASE_URL}/courses?category=${category}`);
        // console.log(res);
        setAllCourses(res.data.courses);
        setData(res.data.courses)
      }
      else {
        const res = await axios.get(`${BASE_URL}/courses`);
        // console.log(res);
        setAllCourses(res.data.courses);
        setData(res.data.courses)
      }

    } catch (error) { }
  };
  function SearchData(e) {
    let query = e.target.value;
    // console.log(query);
    // console.log(query);
    if (query == '') {
      setSearchedData([])
      // console.log("query:",Data);
      setAllCourses(Data)
    }
    else {
      setSearchedData(allCourses.filter((item) => {
        const searchitem = query.toLowerCase()
        const slug = item.slug.toLowerCase()
        // console.log(slug);
        // console.log(searchitem && (slug.includes(searchitem)));
        return searchitem && (slug.includes(searchitem));
      }))
    }
  }
  const toggleShowAllCards = () => {
    setShowAllCards((prevShowAllCards) => !prevShowAllCards);
  };

  const toggleUserImage = (user) => {
    setSelectedUser((prevUser) => {
      return prevUser !== user ? user : prevUser;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <head>
        <title>Courses | HopingMinds</title>
      </head>
      {/* Search */}
      <div
        className="flex flex-col gap-5 p-20 items-center xsm:py-6 xsm:px-0 xsm:gap-2 bg-[#000000]"
        style={{ backgroundImage: `url(${Img1})`, backgroundSize: "cover" }}
      >
        <div className="flex flex-row rounded-2xl w-[80%] xsm:w-[90%] xsm:rounded-md">
          <div className="relative w-full">
            <input
              type="text"
              placeholder=""
              onChange={SearchData}
              className={`flex-1 w-full outline-none placeholder-gray-500 text-[16px] font-pop rounded-tl-2xl py-2 px-4 xsm:rounded-l-md xsm:py-1 xsm:text-[10px] ${!SearchedData.length ? "rounded-bl-2xl" : 'rounded-bl-0'}`}
            />
            <div className="flex flex-col w-full absolute bg-[#f3fffa] justify-center">
              {
                SearchedData.map((item, ind) => {
                  // console.log(item.);
                  return (<>
                    <Link key={ind} to={"/detailcourse/" + item.slug} className="text-center py-1 border-b-[2px]" >{item.title}</Link>

                  </>)
                })
              }
            </div>
          </div>
          <button className="text-[#ffffff] text-[22px] font-pop bg-[#1DBF73] rounded-r-2xl py-1 px-10 xsm:rounded-r-md xsm:text-[10px] xsm:py-1 xsm:px-2">
            Search
          </button>
        </div>

      </div>

      {/* cards */}
      <div className="my-10 mx-[5%] grid grid-cols-4 gap-6 xsm:grid-cols-3 xsm:gap-3 xsm:my-[4%]">
        {allCourses.map((val, ind) => {
          return (
            <Link
              to={"/detailcourse/" + val.slug}
              className="px-4 py-6 h-full flex flex-col gap-4 rounded-xl shadow-xl shadow-[#D9D9D9] xsm:gap-2 xsm:py-2 xsm:px-1 xsm:rounded-md"
            >
              <div className="h-[45%]">
                <img
                  className="w-full h-full rounded-xl xsm:rounded-md"
                  src={val?.featured_image}
                />
              </div>
              <div className="space-y-4 flex flex-col justify-between h-[53%] xsm:space-y-2">
                <div className="flex flex-col gap-3 xsm:gap-2">
                  <div className="flex justify-between">
                    <div className="flex space-x-2 items-center xsm:space-x-1">
                      <img
                        className="w-[16px] h-[16px] xsm:w-[8px] xsm:h-[8px]"
                        src="../Icons/RCDesign.svg"
                      />
                      <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[5px]">
                        {val?.category}
                      </p>
                    </div>
                    <div className="flex space-x-2 items-center xsm:space-x-0">
                      <img
                        className="w-[16px] h-[16px] text-[#555555] xsm:w-[8px] xsm:h-[8px]"
                        src="../Icons/RCClock.svg"
                      />
                      <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[5px]">
                        {val?.duration}
                      </p>
                    </div>
                  </div>
                  <p className="font-pop font-semibold text-[16px] text-[#252641] xsm:text-[8px]">
                    {val?.title}
                  </p>
                  <p className="font-pop text-[14px] text-[#555555] xsm:hidden">
                    {
                      val?.overview.slice(0, 70)
                    }..
                  </p>
                </div>
                <div className=" flex items-center justify-between">
                  <div className="flex items-center space-x-3 xsm:space-x-1">
                    <img
                      className="w-[32px] h-[32px] xsm:w-[14px] xsm:h-[14px]"
                      src="../img/RCimg2.png"
                    />
                    <p className="font-pop font-medium text-[14px] xsm:text-[6px]">
                      {val?.instructor.firstName + ' ' + val?.instructor.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="font-pop font-bold text-[#1DBF73] text-[16px] xsm:text-[6px]">
                      ₹ {val?.base_price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* recommended cards */}
      <RecommendedCourses />



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
                  {/* <p className="text-[#696984] text-[16px] font-pop xsm:hidden">
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
      <NewTestimonial />
    </>
  );
};

export default AllCourses;
