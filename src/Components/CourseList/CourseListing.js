import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ReactComponent as Arrow } from "../../Assets/Icons/arrow-back.svg";
import { ReactComponent as Menu } from "../../Assets/Icons/menu.svg";
import { ReactComponent as Window } from "../../Assets/Icons/window.svg";
import { ReactComponent as Search } from "../../Assets/Icons/search.svg";
import { ReactComponent as Watch } from "../../Assets/Icons/watch.svg";
import { ReactComponent as Edu } from "../../Assets/Icons/edu.svg";
import Fullstack from "../../Assets/Images/fullstack.png";
import Cyber from "../../Assets/Images/cyber.png";
import Aiml from "../../Assets/Images/ai-ml.png";
import Ds from "../../Assets/Images/ds.png";
import Ui from "../../Assets/Images/ui-ux.png";
import Hc from "../../Assets/Images/hydrocarbons.png";
import Ai from "../../Assets/Images/ai.png";
import Datas from "../../Assets/Images/datas.png";
import Ux from "../../Assets/Images/ux.png";
import Hcs from "../../Assets/Images/hcs.png";
import Categories from './Categories'
import { fetchcourseByCategory } from "../../Api/api";


// const fetchCourses = async () => {
//   const courses = await fetchcourseByCategory();
//   const courseData = courses.data.courses;
//   console.log(courseData);
//   return courseData;
// }

const CourseListing = () => {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState(1);
  const [coursesData, setCoursesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();


  // console.log(searchParams.get('category'));
  const arrowBack = () => {
    navigate("/");
  };

  const handlePageClick = (pageNumber) => {
    setSelectedPage(pageNumber);
    console.log(pageNumber)
  };


  const fetchData = async () => {

    const cData = await fetchcourseByCategory(searchParams.get('category'));
    const courseData = cData.data.courses
    console.log(courseData);
    setCoursesData(courseData)
  }

  useEffect(() => {
    fetchData();
  }, [])





  return (
    <div className="flex flex-col font-mons w-full ">
      <div className="flex flex-row  pb-10 justify-evenly ">
        <div onClick={arrowBack} className="cursor-pointer mr-2">
          <Arrow />
        </div>
        <div className="flex flex-row gap-12 w-full">
          <div className="w-[85%] flex flex-col justify-center gap-10">
            <div className="flex flex-row justify-between">
              <p className="text-[#000000] text-[36px] font-Outfit font-semibold">
                All Courses
              </p>
              <div className="flex flex-row gap-4 pt-4 ">
                <div className="flex flex-row justify-between w-[270px] h-[31px] border-b-2 border-[#000000]">
                  <input
                    type="text"
                    id="Search"
                    name="Search"
                    placeholder="Search"
                    className="text-[#9D9D9D] text-[18px] font-Montserrat outline-none"
                  />
                  <Search className="cursor-pointer" />
                </div>
                <div className="flex flex-row gap-4 items-start pt-1">
                  <Window className="cursor-pointer" />
                  <Menu className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className=" w-[100%] flex flex-wrap justify-between">
              {
                coursesData.map((val, ind) => {
                  return (
                    <>
                      <div className="flex flex-col w-[380px] min-h-[430px] rounded-3xl border my-4 border-[#EAEAEA] " key={ind}>
                        <img src={Fullstack} className="h-[220px] rounded-t-3xl w-[380px]" />
                        <div className="flex flex-col gap-2 px-4 py-5">
                          <p className="text-[#555555] text-[16px] font-Montserrat">
                            by Determined-Instructors
                          </p>
                          <p className="text-[#000000] text-[16.5px] font-semibold font-Montserrat">
                            Beginner Guide For full Stack Developent
                          </p>
                          <div className=" flex flex-row gap-8">
                            <div className="flex flex-row items-center gap-2">
                              <Watch />
                              <p className="text-[#555555] text-[16px] font-Montserrat">
                                2Weeks
                              </p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <Edu />
                              <p className="text-[#555555] text-[16px] font-Montserrat">
                                156 Students
                              </p>
                            </div>
                          </div>
                          <div className="pt-2 pb-2">
                            <hr />
                          </div>
                          <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-2">
                              <p className="text-[#9D9D9D] text-[18px] font-Jost">
                                $29.0
                              </p>
                              <p className="text-[#1DBF73] text-[18px] font-Jost">
                                Free
                              </p>
                            </div>
                            <p className="text-[#000000] text-[18px] font-Montserrat">
                              View more
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }



            </div>
            <div className="flex flex-row justify-center gap-2">
              <div
                className={`rounded-full border flex justify-center items-center text-[#000000] text-[18px] font-Jost font-semibold ${selectedPage === "<" ? "selected-page" : ""
                  }`}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                {" < "}
              </div>
              {[1, 2, 3].map((pageNumber) => (
                <div
                  key={pageNumber}
                  onClick={() => handlePageClick(pageNumber)}
                  className={`rounded-full border flex justify-center items-center text-[#000000] text-[18px] font-Jost font-semibold ${selectedPage === pageNumber ? (pageNumber === 1 ? "selected-page bg-[#000000] text-[#FFFFFF]" : "selected-page bg-white") : ""
                    }`}
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                >
                  {pageNumber}
                </div>
              ))}
              <div
                className={`rounded-full border flex justify-center items-center text-[#000000] text-[18px] font-Jost font-semibold ${selectedPage === ">" ? "selected-page" : ""
                  }`}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                {" > "}
              </div>
            </div>
          </div>

        </div>
        <div className="w-[450px] pt-2">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default CourseListing;
