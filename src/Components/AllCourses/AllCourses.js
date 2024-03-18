import React, { useEffect, useState } from "react";
import Img1 from "../../Assests/Images/searchbanner.png";
import Img2 from "../../Assests/Images/creator.png";
import Icon1 from "../../Assests/Icons/twitter.svg";
import Icon2 from "../../Assests/Icons/facebook.svg";
import Icon3 from "../../Assests/Icons/instagram.svg";
import User1 from "../../Assests/Images/user1.png";
import User2 from "../../Assests/Images/user2.png";
import User3 from "../../Assests/Images/user3.png";
import User4 from "../../Assests/Images/user4.png";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import { Link } from "react-router-dom";

const AllCourses = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [selectedUser, setSelectedUser] = useState(User1);
  const [allCourses, setAllCourses] = useState([]);
  const [userData, setUserData] = useState({
    [User1]: {
      name: "John",
      email: "john@example.com",
      description1:
        "Lorem ipsum dolor sit amet, consectetuor incididunt ut labore et dolore magna aliqua.",
      description2: "Lorem ipsuut labore et dolore magna aliqua.",
      description3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    [User2]: {
      name: "Deo",
      email: "deo@example.com",
      description1:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut sequat.",
      description2:
        "Ut enim ad min, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      description3: "Ut enim ad minim vequat.",
    },
    [User3]: {
      name: "Sam",
      email: "sam@example.com",
      description1:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      description2: "Duis aute irure dolor nulla pariatur.",
      description3:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillumulla pariatur.",
    },
    [User4]: {
      name: "Jack",
      email: "jack@example.com",
      description1:
        "Excepteur sint occaecat cupidatat non proident, sunt in culit anim id est laborum.",
      description2: "Exce cupidatat non proident, sunt in culpaborum.",
      description3:
        "Excepteur sint occaect in culpa qui officia deserunt mollit anim id est laborum.",
    },
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/courses`);
      console.log(res);
      setAllCourses(res.data);
    } catch (error) {}
  };

  const toggleShowAllCards = () => {
    setShowAllCards((prevShowAllCards) => !prevShowAllCards);
  };

  const toggleUserImage = (user) => {
    setSelectedUser((prevUser) => {
      return prevUser !== user ? user : prevUser;
    });
  };

  return (
    <>
      <head>
        <title>Courses | HopingMinds</title>
      </head>
      {/* Search */}
      <div
        className="flex flex-col gap-5 p-20 items-center"
        style={{ backgroundImage: `url(${Img1})`, backgroundSize: "cover" }}
      >
        <div className="flex flex-row rounded-2xl w-[80%]">
          <input
            type="text"
            placeholder=""
            className="flex-1 outline-none placeholder-gray-500 text-[18px] font-poppins rounded-l-2xl py-2 px-4"
          />
          <button className="text-[#ffffff] text-[22px] font-poppins bg-[#1DBF73] rounded-r-2xl py-2 px-10">
            Search
          </button>
        </div>
        <div className="grid grid-cols-6 gap-4 w-[80%]">
          <select className="w-full p-3 px-1 text-[18px] text-[#000000] rounded-lg outline-none flex text-center">
            <option value="" disabled selected hidden>
              Subject
            </option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
          </select>
          <select className="w-full p-3 px-1 text-[18px] text-[#000000] rounded-lg outline-none flex text-center">
            <option value="" disabled selected hidden>
              Partner
            </option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
          </select>
          <select className="w-full p-3 px-1 text-[18px] text-[#000000] rounded-lg outline-none flex text-center">
            <option value="" disabled selected hidden>
              Program
            </option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
          </select>
          <select className="w-full p-3 px-1 text-[18px] text-[#000000] rounded-lg outline-none flex text-center">
            <option value="" disabled selected hidden>
              Language
            </option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
          </select>
          <select className="w-full p-3 px-1 text-[18px] text-[#000000] rounded-lg outline-none flex text-center">
            <option value="" disabled selected hidden>
              Abaility
            </option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
          </select>
          <select className="w-full py-3 text-[18px] text-[#000000] rounded-lg outline-none flex text-center">
            <option value="" disabled selected hidden>
              Learning Type
            </option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
          </select>
        </div>
      </div>

      {/* cards */}
      <div className="my-6 mx-[5%] grid grid-cols-4 gap-6">
        {allCourses.map((val, ind) => {
          return (
            <Link
              to={"/detailcourse/" + val.slug}
              className="px-4 py-6 h-full flex flex-col gap-4 rounded-xl shadow-xl shadow-[#D9D9D9]"
            >
              <div className="h-[45%]">
                <img
                  className="w-full h-full rounded-xl"
                  src={val?.featured_image}
                />
              </div>
              <div className="space-y-4 flex flex-col justify-between h-[53%]">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <div className="flex space-x-2 items-center">
                      <img
                        className="w-[16px] h-[16px]"
                        src="../Icons/RCDesign.svg"
                      />
                      <p className="font-pop text-[12px] font-medium text-[#555555]">
                        {val?.category}
                      </p>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <img
                        className="w-[16px] h-[16px] text-[#555555]"
                        src="../Icons/RCClock.svg"
                      />
                      <p className="font-pop text-[12px] font-medium text-[#555555]">
                        {val?.duration}
                      </p>
                    </div>
                  </div>
                  <p className="font-pop font-semibold text-[18px] text-[#252641]">
                    {val?.title}
                  </p>
                  <p className="font-pop text-[14px] text-[#555555]">
                      Lorem ipsum dolor sit amet, consectetur adipising elit,
                      sed do eiusmod tempor
                    </p>
                </div>
                <div className=" flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      className="w-[32px] h-[32px]"
                      src="../img/RCimg2.png"
                    />
                    <p className="font-pop font-medium text-[14px]">
                      {val?.instructor.firstName + val?.instructor.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="font-pop font-bold text-[#49BBBD] text-[18px]">
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
      <div className="mt-12 py-10 px-[5%] flex flex-col justify-center gap-6 bg-[#E2FFF1]">
        <div className="px-6 flex flex-row justify-between items-center">
          <p className="font-pop font-semibold text-[30px]">
            Recommended For You
          </p>
          <p
            className="font-pop font-semibold text-[22px] cursor-pointer"
            onClick={toggleShowAllCards}
          >
            {showAllCards ? "See Less" : "See All"}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {allCourses.map((course, index) => (
            <div
              key={index}
              className={`w-[full] h-full flex flex-col gap-4 items-center px-4 py-5 rounded-xl shadow-2xl shadow-[#D9D9D9] bg-white ${
                !showAllCards && index > 3 ? "hidden" : ""
              }`}
            >
              <div className="h-[50%] w-full rounded-xl">
                <img className="w-full h-full" src="../img/RCimg1.png" />
              </div>
              <div className="w-[95%] h-full flex flex-col justify-between space-y-4">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <div className="flex space-x-2 items-center">
                      <img
                        className="w-[16px] h-[16px]"
                        src="../Icons/RCDesign.svg"
                      />
                      <p className="font-pop text-[12px] font-medium text-[#555555]">
                        Design
                      </p>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <img
                        className="w-[16px] h-[16px] text-[#555555]"
                        src="../Icons/RCClock.svg"
                      />
                      <p className="font-pop text-[12px] font-medium text-[#555555]">
                        3 Month
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-pop text-[18px] font-medium">
                      AWS Certified solutions Architect
                    </p>
                  </div>
                  <div>
                    <p className="font-pop text-[14px] text-[#555555]">
                      Lorem ipsum dolor sit amet, consectetur adipising elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-[34px] h-[34px]"
                      src="../img/RCimg2.png"
                    />
                    <p className="font-pop font-medium text-[14px]">Lina</p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="line-through italic text-[#555555] font-pop">
                      ₹300
                    </p>
                    <p className="font-pop font-bold text-[#49BBBD]">₹250</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* creater */}
      <div className="flex flex-col gap-14 px-24 py-16">
        <p className="text-[#252641] text-[32px] font-poppins font-semibold pl-4">
          Classes taught by real creators
        </p>
        <div className="grid grid-cols-3 gap-16">
          <div className="h-[40vh] flex justify-center items-end relative">
            <div
              className="flex flex-col gap-2 h-[65%] justify-end items-center text-center py-6"
              style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-[#252641] text-[22px] font-poppins font-semibold">
                Adam
              </p>
              <p className="text-[#696984] text-[14px] font-poppins w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>
            <img src={Img2} className="absolute top-0 w-[53%]" />
          </div>
          <div className="h-[40vh] flex justify-center items-end relative">
            <div
              className="flex flex-col gap-2 h-[65%] justify-end items-center text-center py-6"
              style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-[#252641] text-[22px] font-poppins font-semibold">
                Adam
              </p>
              <p className="text-[#696984] text-[14px] font-poppins w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>
            <img src={Img2} className="absolute top-0 w-[53%]" />
          </div>
          <div className="h-[40vh] flex justify-center items-end relative">
            <div
              className="flex flex-col gap-2 h-[65%] justify-end items-center text-center py-6"
              style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-[#252641] text-[22px] font-poppins font-semibold">
                Adam
              </p>
              <p className="text-[#696984] text-[14px] font-poppins w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>
            <img src={Img2} className="absolute top-0 w-[53%]" />
          </div>
          <div className="h-[40vh] flex justify-center items-end relative">
            <div
              className="flex flex-col gap-2 h-[65%] justify-end items-center text-center py-6"
              style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-[#252641] text-[22px] font-poppins font-semibold">
                Adam
              </p>
              <p className="text-[#696984] text-[14px] font-poppins w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>
            <img src={Img2} className="absolute top-0 w-[53%]" />
          </div>
          <div className="h-[40vh] flex justify-center items-end relative">
            <div
              className="flex flex-col gap-2 h-[65%] justify-end items-center text-center py-6"
              style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-[#252641] text-[22px] font-poppins font-semibold">
                Adam
              </p>
              <p className="text-[#696984] text-[14px] font-poppins w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>
            <img src={Img2} className="absolute top-0 w-[53%]" />
          </div>
          <div className="h-[40vh] flex justify-center items-end relative">
            <div
              className="flex flex-col gap-2 h-[65%] justify-end items-center text-center py-6"
              style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-[#252641] text-[22px] font-poppins font-semibold">
                Adam
              </p>
              <p className="text-[#696984] text-[14px] font-poppins w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>
            <img src={Img2} className="absolute top-0 w-[53%]" />
          </div>
        </div>
      </div>

      {/* review */}
      <div className="flex flex-col gap-10 bg-[#E2FFF1] px-28 py-16">
        <p className="text-[#000000] text-[30px] font-poppins font-semibold">
          What our students have to say
        </p>
        <div className="bg-[#ffffff] rounded-xl flex flex-row gap-20 py-10 pt-20 px-14">
          <div className="flex w-[65%] justify-center">
            <img
              src={selectedUser === User1 ? User1 : selectedUser}
              className="w-[80%] h-[80%] object-contain"
              onClick={() => toggleUserImage("")}
            />
          </div>
          <div className="flex flex-col gap-5 w-full justify-end pl-4">
            <p className="text-[#252641] text-[30px] font-poppins font-semibold">
              {userData[selectedUser]?.name}
            </p>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-8 w-[65%]">
                <div className="flex flex-col gap-3">
                  <p className="text-[#252641] text-[24px] font-poppins font-semibold">
                    {userData[selectedUser]?.email}
                  </p>
                  <p className="text-[#696984] text-[16px] font-poppins">
                    {userData[selectedUser]?.description1}
                  </p>
                  <p className="text-[#696984] text-[16px] font-poppins">
                    {userData[selectedUser]?.description2}
                  </p>
                  <p className="text-[#696984] text-[16px] font-poppins">
                    {userData[selectedUser]?.description3}
                  </p>
                </div>
                <div className="flex flex-row gap-6">
                  <img src={Icon1} className="w-[6%] object-contain" />
                  <img src={Icon2} className="w-[6%] object-contain" />
                  <img src={Icon3} className="w-[6%] object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-between">
                <img
                  src={User1}
                  className="w-full object-contain cursor-pointer"
                  onClick={() => toggleUserImage(User1)}
                />
                <img
                  src={User2}
                  className="w-full object-contain cursor-pointer"
                  onClick={() => toggleUserImage(User2)}
                />
                <img
                  src={User3}
                  className="w-full object-contain cursor-pointer"
                  onClick={() => toggleUserImage(User3)}
                />
                <img
                  src={User4}
                  className="w-full object-contain cursor-pointer"
                  onClick={() => toggleUserImage(User4)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCourses;
