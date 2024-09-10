import { useContext, useEffect, useState } from "react";
import { ReactComponent as Down } from "../../Assets/Icons/Down.svg";
import { IoBookOutline } from "react-icons/io5";
import { BASE_URL } from "../../Api/api";
import { useNavigate } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ReactComponent as Notes } from "../../Assets/Icons/notes.svg";
import { ReactComponent as Assignment } from "../../Assets/Icons/assignment.svg";
import { Globalinfo } from "../../App";

export default function Coursecontents({
  data,
  courseId,
  completed_lessons,
  setMenu,
  handleActiveVideo,
  handleToggleNotes,
  ALLCHAPTER,
  count,
  courseCategory,
  handleProject,
}) {
  const navigate = useNavigate();
  // console.log(completed_lessons)

  const fileInputRef = useRef(null);
  const [clicked, setclicked] = useState(false);
  const [totallessons, setTotalLessons] = useState(0);
  const [openDropDown, setOpenDropdown] = useState("");
  let allchapters = [];
  let active = 0;
  // console.log(data);
  const { setLiveClassKey, liveClassKey } = useContext(Globalinfo);

  let completed = [];
  // console.log("completed_lesson",completed_lessons);
  if (completed_lessons) {
    completed_lessons?.map((val) => {
      completed.push(val);
    });
  }

  const countLessons = () => {
    let temp = 0;
    data?.forEach((val) => {
      temp += val?.lessons?.length;
      temp += val?.project?.length;
    });
    setTotalLessons(temp);
  };

  // console.log(courseCategory)

  useEffect(() => {
    countLessons();
  }, [data]);

  // console.log(totallessons)

  function ClickSection(id) {
    if (!clicked) {
      setclicked(true);
      let inner = document.getElementById(id);
      // console.log(inner);
      inner.style.display = "none";
    } else {
      setclicked(false);
      let inner = document.getElementById(id);

      // console.log(inner);
      inner.style.display = "flex";
    }
  }

  // console.log(openDropDown)

  const handleDropDown = (id) => {
    if (openDropDown) {
      setOpenDropdown("");
    } else {
      setOpenDropdown(id);
    }
  };

  const toggleMenu = () => {
    setMenu(false);
  };

  const handleUpload = async (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      let token = localStorage.getItem("COURSES_USER_TOKEN");

      const data = await fetch(BASE_URL + "/uploadassignmenttoaws/" + id, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const response = await data.json();
      if (response.success) {
        let grouped = { courseId: courseId, lessonId: id };
        const data1 = await fetch(BASE_URL + "/assignmentcompleted", {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(grouped),
        });
        const response1 = await data1.json();
        // console.log(response1);
        if (response1.success) {
          toast.success(response1.message);
        } else {
          toast.error(response1.message);
        }
      } else {
        toast.error(response.message);
      }
    }
  };

  const handleFileUploadClick = (e) => {
    // Programmatically trigger click event of file input element
    fileInputRef.current.click();
  };

  return (
    <div className="bg-[#E2FFF1] rounded-3xl  sm:absolute sm:top-[3rem] sm:right-0 sm:w-[80vw] sm:h-screen sm:overflow-y-auto xsm:absolute xsm:top-[3rem]  xsm:right-0 xsm:w-[80vw] xsm:h-screen xsm:overflow-y-auto z-20">
      <Toaster 
        toastOptions={{
          duration: 500,
        }}
      />
      <div className="px-5 py-8 xsm:py-4 sm:py-4 xsm:px-2 sm:px-2 md:px-3 md:py-5">
        <div className="space-y-2 xsm:space-y-1">
          <div className="flex flex-row justify-between">
            <p className="font-pop font-semibold text-[21px] text-[#1DBF73] xsm:text-[12px] sm:text-[16px] md:text-[16px]">
              Course Contents
            </p>
            {window.innerWidth <= 720 && (
              <MdClose className="cursor-pointer" onClick={toggleMenu} />
            )}
          </div>
          <div className="flex justify-between items-center">
            <p className="font-pop text-[12px] text-[#1DBF73] xsm:text-[10px] sm:text-[10px] md:text-[10px]">
              {completed_lessons?.length}/{totallessons} COMPLETED
            </p>
            {/* <img className="w-[19px] h-[19px] xsm:w-4 xsm:h-4 md:w-4 md:h-4" src="../Icons/Calender.svg" /> */}
          </div>
          <div>
            {/* progressbar */}
            <hr />
          </div>
        </div>
        {data?.map((val, ind) => {
          return (
            <>
              <div
                className="mt-3  border border-[#1DBF73] bg-[#F1FFF8] rounded-xl cursor-pointer md:p-1"
                key={ind}
              >
                <div className="">
                  <div>
                    <div
                      className="py-2 px-4"
                      onClick={() => ClickSection(ind + 1)}
                    >
                      <div className="flex justify-between ">
                        <p className="font-pop font-medium text-[12px] text-[#1DBF73] xsm:text-[10px] md:text-[10px] sm:text-[10px]">
                          {val?.chapter_name}
                        </p>
                        <Down />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center ml-2 space-x-1">
                          {/* <img className='text-[#252641CC]' src="../Icons/Clock.svg" /> */}
                          <p className="text-[#252641CC] text-[11px] font-pop font-medium"></p>
                        </div>
                        {/* <div className="flex items-center space-x-1">
                          <IoBookOutline className="text-[#252641CC] w-4 h-4 xsm:h-3 xsm:w-3 md:h-3 md:w-3" />
                          <p className="text-[#252641CC] text-[11px] font-pop font-medium xsm:text-[8px] md:text-[10px]">
                            {val?.lessons?.length} Lessons
                          </p>
                        </div> */}
                        <div className="flex items-center space-x-1">
                          <IoBookOutline className="text-[#252641CC] w-4 h-4 xsm:h-3 xsm:w-3 md:h-3 md:w-3 sm:h-3 sm:w-3" />
                          <p className="text-[#252641CC] text-[11px] font-pop font-medium xsm:text-[8px] md:text-[10px]">
                            {val?.lessons?.length}{" "}
                            {val?.lessons?.length === 1 ? "Lesson" : "Lessons"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id={ind + 1} className="pt-2 py-2 px-4 flex flex-col">
                      <div className="w-full">
                        {val?.lessons?.map((chapter, index) => {
                          // console.log("index"+index,completed_lessons?.includes(chapter?._id))
                          return (
                            <div
                              className={
                                courseCategory === "liveCourse"
                                  ? ""
                                  : `flex-col justify-between border-t py-2 w-full ${
                                      !completed_lessons?.includes(chapter?._id)
                                        ? "cursor-not-allowed text-gray-300"
                                        : ""
                                    }`
                              }
                              key={index}
                            >
                              <span className="flex justify-between">
                                {chapter?.isLiveClass ? (
                                  <p
                                    onClick={() =>
                                      setLiveClassKey(
                                        chapter?.liveClass?.streamKey
                                      )
                                    }
                                    className="font-pop font-bold text-[11px] xsm:text-[8px] sm:text-[10px] md:text-[10px] text-red-500 "
                                  >
                                    {index + 1}. {chapter?.lesson_name} (Live)
                                  </p>
                                ) : (
                                  <p
                                    onClick={() =>
                                      completed_lessons.includes(chapter._id) &&
                                      handleActiveVideo(
                                        chapter?.video,
                                        chapter?.lesson_name,
                                        chapter?._id
                                      )
                                    }
                                    className="font-pop font-bold text-[11px] xsm:text-[8px] sm:text-[10px] md:text-[10px]"
                                  >
                                    {index + 1}. {chapter?.lesson_name}
                                  </p>
                                )}
                                {/* <p className="font-pop font-bold text-[11px] xsm:text-[8px] md:text-[10px]">
                                  {chapter?.duration}Mins
                                </p> */}
                              </span>

                              {(chapter?.notes || chapter?.assignment) && (
                                <div className="relative">
                                  <button className="flex gap-2 align-middle justify-self-end w-fit items-center px-2 mt-3 realtive xsm:mt-2">
                                    {/* <TiFolderOpen className="xsm:w-3 xsm:h-3 md:w-4 md:h-4" /> */}
                                    <p className="text-[12px] xsm:text-[6px] sm:text-[10px] md:text-[10px]">
                                      Resources
                                    </p>
                                  </button>

                                  <ul className="list-none flex items-center bg-[#F1FFF8] text-sm  py-1 z-40 gap-1 text-[12px]">
                                    {chapter?.notes && (
                                      <span className=" flex justify-between items-center px-2 border rounded-md h-max">
                                        <div
                                          onClick={() =>
                                            completed_lessons.includes(
                                              chapter._id
                                            )
                                              ? handleToggleNotes(
                                                  chapter?.notes,
                                                  ALLCHAPTER[count]?.video,
                                                  chapter._id
                                                )
                                              : ""
                                          }
                                          className="flex items-center gap-1"
                                        >
                                          <Notes className="w-3 h-3" />
                                          <li className="text-[12px] sm:text-[10px] md:text-[10px]">
                                            Notes
                                          </li>
                                        </div>
                                      </span>
                                    )}

                                    {chapter?.assignment && (
                                      <span className=" flex gap-1 items-center h-max">
                                        <div
                                          onClick={() =>
                                            completed_lessons.includes(
                                              chapter._id
                                            )
                                              ? handleToggleNotes(
                                                  chapter?.assignment,
                                                  ALLCHAPTER[count]?.video,
                                                  chapter._id
                                                )
                                              : ""
                                          }
                                          href={chapter?.assignment}
                                          target="_blank"
                                          className="flex items-center border rounded-md gap-1 px-2"
                                        >
                                          <Assignment className="w-3 h-3" />
                                          <li className="text-[12px] sm:text-[10px] md:text-[10px]">
                                            Assignment
                                          </li>
                                        </div>
                                        <span className="flex gap-2 border rounded-md px-2 py-1 relative ">
                                          <MdOutlineFileUpload
                                            size={16}
                                            onClick={handleFileUploadClick}
                                            className="peer w-3 h-3"
                                          />
                                          <input
                                            ref={fileInputRef}
                                            type="file"
                                            style={{ display: "none" }}
                                            onChange={(e) =>
                                              handleUpload(e, chapter?._id)
                                            }
                                          />
                                          <p className="absolute top-8 right-[0px] bg-black text-[0.7rem] text-white w-[8rem] px-2 py-1 opacity-0 peer-hover:opacity-100 rounded-lg text-center">
                                            Upload Your assignment
                                          </p>
                                        </span>
                                      </span>
                                    )}
                                  </ul>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      {/* <div className="w-full border-t">
                        <div className="font-semibold text-sm text-[#1DBF73] py-1">Live Classes</div>

                        {val?.liveClasses?.map((chapter, index) => {
                          // console.log(chapter);

                          return (
                            <div

                              className={`flex flex-col justify-between border-t py-2 w-full`}
                              key={index}
                            >
                              <span className="flex justify-between">
                                <p onClick={courseCategory === "liveCourse" ? () => { } : () =>
                                  handleActiveVideo(chapter?.meetingLink)
                                } className="font-pop font-bold text-[11px] xsm:text-[8px] md:text-[10px]">
                                  {index + 1}. {chapter?.topic}
                                </p>
                                <p className="font-pop  text-[11px] xsm:text-[8px] md:text-[10px]">
                                  {chapter?.startDate?.split("T")[0]} {chapter?.time}
                                </p>
                              </span>
                            </div>
                          );
                        })}
                      </div> */}

                      {val?.project?.length > 0 && (
                        <div className="w-full border-t">
                          <div className="font-semibold text-sm text-[#1DBF73] py-1">
                            Projects
                          </div>
                          {val?.project?.map((chapter, index) => {
                            // console.log(chapter);
                            return (
                              <div
                                className={
                                  courseCategory === "liveCourse"
                                    ? ""
                                    : `flex flex-col justify-between border-t py-2 w-full ${
                                        !completed_lessons?.includes(
                                          chapter?._id
                                        )
                                          ? "cursor-not-allowed text-gray-300"
                                          : ""
                                      }`
                                }
                                key={index}
                              >
                                <span className="flex justify-between">
                                  <p
                                    onClick={() =>
                                      completed_lessons?.includes(chapter?._id)
                                        ? handleProject(chapter)
                                        : ""
                                    }
                                    className={`font-pop font-bold text-[11px] xsm:text-[8px] sm:text-[10px] md:text-[10px]`}
                                  >
                                    {index + 1}. {chapter?.title}(
                                    {chapter?.duration || "5 mins"})
                                  </p>
                                </span>
                                {/* <p className="font-pop font-bold text-[11px] xsm:text-[8px] md:text-[10px]">
                                  Duration-{chapter?.duration || '5 mins'}
                                </p> */}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
