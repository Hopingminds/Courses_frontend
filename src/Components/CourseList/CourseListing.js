import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
const CourseListing = () => {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState(1);

  const arrowBack = () => {
    navigate("/");
  };

  const handlePageClick = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  return (
    <div className="flex flex-col font-mons">
      <div className="flex flex-row px-10  pb-10">
        <div onClick={arrowBack} className="cursor-pointer mr-2">
          <Arrow />
        </div>
        <div className="flex flex-row gap-12">
          <div className="w-[890px] flex flex-col justify-center gap-10">
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
            <div className="grid grid-cols-2 gap-8">
              {/* 1 */}
              <div className="flex flex-col w-[380px] min-h-[430px] rounded-3xl border border-[#EAEAEA] ">
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
              {/* 2 */}
              <div className="flex flex-col w-[380px] min-h-[430px] rounded-3xl border border-[#EAEAEA] ">
                <img src={Cyber} className="h-[220px] rounded-t-3xl w-[380px]" />
                <div className="flex flex-col gap-2 px-4 py-5">
                  <p className="text-[#555555] text-[16px] font-Montserrat">
                    by Determined-Instructors
                  </p>
                  <p className="text-[#000000] text-[16.5px] font-semibold font-Montserrat">
                  Cyber Security
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
              {/* 3 */}
              <div className="flex flex-col w-[380px] min-h-[430px] rounded-3xl border border-[#EAEAEA] ">
                <img src={Aiml} className="h-[220px] rounded-t-3xl w-[380px]" />
                <div className="flex flex-col gap-2 px-4 py-5">
                  <p className="text-[#555555] text-[16px] font-Montserrat">
                    by Determined-Instructors
                  </p>
                  <p className="text-[#000000] text-[16.5px] font-semibold font-Montserrat">
                  Beginner course for AI/ML
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
              {/* 4 */}
              <div className="flex flex-col w-[380px] min-h-[430px] rounded-3xl border border-[#EAEAEA] ">
                <img src={Ds} className="h-[220px] rounded-t-3xl w-[380px]" />
                <div className="flex flex-col gap-2 px-4 py-5">
                  <p className="text-[#555555] text-[16px] font-Montserrat">
                    by Determined-Instructors
                  </p>
                  <p className="text-[#000000] text-[16.5px] font-semibold font-Montserrat">
                  Introduction to Data Science
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
              {/* 5 */}
              <div className="flex flex-col w-[380px] min-h-[430px] rounded-3xl border border-[#EAEAEA] ">
                <img src={Ui} className="h-[220px] rounded-t-3xl w-[380px]" />
                <div className="flex flex-col gap-2 px-4 py-5">
                  <p className="text-[#555555] text-[16px] font-Montserrat">
                    by Determined-Instructors
                  </p>
                  <p className="text-[#000000] text-[16.5px] font-semibold font-Montserrat">
                  Professional Website Using UI/UX
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
              {/* 6 */}
              <div className="flex flex-col w-[380px] min-h-[430px] rounded-3xl border border-[#EAEAEA] ">
                <img src={Hc} className="h-[220px] rounded-t-3xl w-[380px]" />
                <div className="flex flex-col gap-2 px-4 py-5">
                  <p className="text-[#555555] text-[16px] font-Montserrat">
                    by Determined-Instructors
                  </p>
                  <p className="text-[#000000] text-[16.5px] font-semibold font-Montserrat">
                  Introduction to hydrocarbons
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
              {/* 7 */}
              <div className="flex flex-col w-[380px] min-h-[430px] rounded-3xl border border-[#EAEAEA] ">
                <img src={Ai} className="h-[220px] rounded-t-3xl w-[380px]" />
                <div className="flex flex-col gap-2 px-4 py-5">
                  <p className="text-[#555555] text-[16px] font-Montserrat">
                    by Determined-Instructors
                  </p>
                  <p className="text-[#000000] text-[16.5px] font-semibold font-Montserrat">
                  Beginner course for AI/ML
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
              {/* 8 */}
              <div className="flex flex-col w-[380px] min-h-[430px] rounded-3xl border border-[#EAEAEA] ">
                <img src={Datas} className="h-[220px] rounded-t-3xl w-[380px]" />
                <div className="flex flex-col gap-2 px-4 py-5">
                  <p className="text-[#555555] text-[16px] font-Montserrat">
                    by Determined-Instructors
                  </p>
                  <p className="text-[#000000] text-[16.5px] font-semibold font-Montserrat">
                  Introduction to Data Science
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
              {/* 9 */}
              <div className="flex flex-col w-[380px] min-h-[430px] rounded-3xl border border-[#EAEAEA] ">
                <img src={Ux} className="h-[220px] rounded-t-3xl w-[380px]" />
                <div className="flex flex-col gap-2 px-4 py-5">
                  <p className="text-[#555555] text-[16px] font-Montserrat">
                    by Determined-Instructors
                  </p>
                  <p className="text-[#000000] text-[16.5px] font-semibold font-Montserrat">
                  Professional Website Using UI/UX
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
              {/* 10 */}
              <div className="flex flex-col w-[380px] min-h-[430px] rounded-3xl border border-[#EAEAEA] ">
                <img src={Hcs} className="h-[220px] rounded-t-3xl w-[380px]" />
                <div className="flex flex-col gap-2 px-4 py-5">
                  <p className="text-[#555555] text-[16px] font-Montserrat">
                    by Determined-Instructors
                  </p>
                  <p className="text-[#000000] text-[16.5px] font-semibold font-Montserrat">
                  Introduction to hydrocarbons
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
            </div>
            <div className="flex flex-row justify-center gap-2">
              <div
                className={`rounded-full border flex justify-center items-center text-[#000000] text-[18px] font-Jost font-semibold ${
                  selectedPage === "<" ? "selected-page" : ""
                }`}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                {" < "}
              </div>
              {[1, 2, 3].map((pageNumber) => (
                <div
                  key={pageNumber}
                  onClick={() => handlePageClick(pageNumber)}
                  className={`rounded-full border flex justify-center items-center text-[#000000] text-[18px] font-Jost font-semibold ${
                    selectedPage === pageNumber ? (pageNumber === 1 ? "selected-page bg-[#000000] text-[#FFFFFF]" : "selected-page bg-white") : ""
                  }`}
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                >
                  {pageNumber}
                </div>
              ))}
              <div
                className={`rounded-full border flex justify-center items-center text-[#000000] text-[18px] font-Jost font-semibold ${
                  selectedPage === ">" ? "selected-page" : ""
                }`}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                {" > "}
              </div>
            </div>
          </div>
          <div className="w-[300px] pt-2">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseListing;
