import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Api/api";

export default function RecommendedCourses() {
  const [showAllCards, setShowAllCards] = useState(false);
  const [allCourses, setAllCourses] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/courses`);
      console.log(res);
      setAllCourses(res.data);
    } catch (error) { }
  };

  const toggleShowAllCards = () => {
    setShowAllCards((prevShowAllCards) => !prevShowAllCards);
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
    <div className="mt-12 py-10 px-[5%] flex flex-col justify-center gap-6 bg-[#E2FFF1] xsm:mt-[8%] xsm:py-[4%] xsm:gap-2">
      <div className="px-6 flex flex-row justify-between items-center xsm:px-1">
        <p className="font-pop font-semibold text-[30px] xsm:text-[10px]">
          Recommended For You
        </p>
        <p
          className="font-pop font-semibold text-[22px] cursor-pointer xsm:text-[6px]"
          onClick={toggleShowAllCards}
        >
          {showAllCards ? "See Less" : "See All"}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 xsm:grid-cols-3 xsm:gap-3">
        {allCourses
          .slice(
            0,
            screenWidth >= 320 && screenWidth <= 480 ? 3 : allCourses.length
          )
          .map((course, index) => (
            <div
              key={index}
              className={`w-[full] h-full flex flex-col gap-4 items-center px-4 py-5 rounded-xl shadow-2xl shadow-[#D9D9D9] bg-white xsm:rounded-md xsm:px-1 xsm:py-2 xsm:gap-2 ${
                !showAllCards && index > 3 ? "hidden" : ""
              }`}
            >
              <div className="h-[50%] w-full rounded-xl xsm:rounded-md">
                <img className="w-full h-full" src="../img/RCimg1.png" />
              </div>
              <div className="w-[95%] h-full flex flex-col justify-between space-y-4 xsm:space-y-2">
                <div className="flex flex-col gap-4 xsm:gap-2">
                  <div className="flex justify-between">
                    <div className="flex space-x-2 items-center xsm:space-x-1">
                      <img
                        className="w-[16px] h-[16px] xsm:w-[8px] xsm:h-[8px]"
                        src="../Icons/RCDesign.svg"
                      />
                      <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[5px]">
                        Design
                      </p>
                    </div>
                    <div className="flex space-x-2 items-center xsm:space-x-1">
                      <img
                        className="w-[16px] h-[16px] text-[#555555] xsm:w-[8px] xsm:h-[8px]"
                        src="../Icons/RCClock.svg"
                      />
                      <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[5px]">
                        3 Month
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-pop text-[18px] font-medium xsm:text-[8px]">
                      AWS Certified solutions Architect
                    </p>
                  </div>
                  <div>
                    <p className="font-pop text-[14px] text-[#555555] xsm:hidden">
                      Lorem ipsum dolor sit amet, consectetur adipising elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-[34px] h-[34px] xsm:w-[12px] xsm:h-[12px]"
                      src="../img/RCimg2.png"
                    />
                    <p className="font-pop font-medium text-[14px] xsm:text-[6px]">
                      Lina
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="font-pop font-bold text-[#49BBBD] xsm:text-[5px]">
                      ₹250
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
