import ProgressBar from "@ramonak/react-progress-bar";
import {  useNavigate } from "react-router-dom";
import BatchModal from "./Batchmodal";
import { useState } from "react";
import { BASE_URL } from "../../Api/api";
import InternshipBatchModal from "./Internshipbatchmodal";
const image = `${process.env.PUBLIC_URL}/colors.png`;
// import { useMediaQuery } from 'react-responsive';

export default function Mycourse({ courses, fetchUserData,internships }) {
  const [Data, setData] = useState([]);

  // console.log(courses && courses[5]?.course?.courseCategory);
  const navigate = useNavigate();
  function formatDate(dateString) {
    const dateObj = new Date(dateString);

    // Subtract 5.5 hours from the date object
    const hoursToSubtract = 5.5; // 5.5 hours
    dateObj.setTime(dateObj.getTime() - hoursToSubtract * 60 * 60 * 1000);

    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const month = monthNames[dateObj.getMonth()];

    let hours = dateObj.getHours();
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const time = `${hours}.${minutes}${ampm}`;

    return `${day} ${month} ${year} ${time}`;
}
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ismodalopenforinternship, setismodalopenforinternship] = useState(false)
  function closeModal() {
    setIsModalOpen(false);
    setismodalopenforinternship(false);
  }
  async function openModal(val) {
    setIsModalOpen(true);
    try {
      const data = await fetch(
        BASE_URL + "/getUpcomingBatchesForCourse/" + val?.course?._id
      );
      const response = await data.json();
      if (response.success) {
        setData(response?.batches);
      }
    } catch (error) {}
  }
  async function openModalinternship(val) {
    setismodalopenforinternship(true);
    try {
      const data = await fetch(
        BASE_URL + "/getUpcomingBatchesForInternship/" + val?.internship?._id
      );
      const response = await data.json();
      if (response.success) {
        setData(response?.batches);
      }
    } catch (error) {}
  }

  function handleNavigation(val) {
    if (!val?.BatchId) {
      openModal(val);
    } else {
      navigate(`/course/${val?.course?.slug}`);
    }
  }
  function handleInternshipbatch(val) {
    console.log("val?.BatchId",!val?.BatchId);
    
    if (!val?.BatchId) {
      openModalinternship(val);
    } else {
      navigate(`/internship/${val?.internship?.slug}`);
    }
  }
  return (
    <>
      <BatchModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        openModal={openModal}
        Data={Data}
        fetchUserData={fetchUserData}
      />
      <InternshipBatchModal
        isOpen={ismodalopenforinternship}
        onRequestClose={closeModal}
        openModal={handleInternshipbatch}
        Data={Data}
        fetchUserData={fetchUserData}
      />

      {!courses?.length ? (
        <div key={courses?._id} className="flex justify-center  w-full mt-10">
          <div className="text-center font-semibold text-2xl w-full ">
            {" "}
            No Course Purchased
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="my-[5%] mx-[5%] grid grid-cols-3 sm:grid-cols-2 gap-16 xsm:my-3 xsm:gap-4 md:gap-10">
        {courses?.map((val, ind) => {
          let totallessons = 0;
          val?.course?.curriculum?.map((it) => {
            totallessons += it?.lessons?.length;
            totallessons += it?.project?.length;
          });
          return new Date(val?.course?.courseStartDate) < new Date() ? (
            <div
              onClick={() => handleNavigation(val)}
              className="cursor-pointer relative w-full flex flex-col justify-between p-4  mt-2 rounded-xl shadow-xl shadow-[#D9D9D9] xsm:mt-0 xsm:py-1 xsm:px-1 xsm:rounded-sm"
            >
              {val?.course?.courseCategory === "liveCourse" && (
                <div className="bg-transparent p-4 absolute top-2 right-2 z-[99]">
                  <img
                    src="/liveclass.png"
                    alt="live class logo "
                    className="h-[30px] w-auto"
                  />
                </div>
              )}
              <div className="w-full h-[50%]">
                <img
                  className="w-full h-full xsm:rounded-md xsm:h-[55px]"
                  src={val?.course?.featured_image}
                  alt=""
                />
              </div>
              <div className="h-[45%] flex flex-col justify-between mt-2 xsm:space-y-1 xsm:mt-1">
                <p className="font-pop font-semibold text-[18px] xsm:text-[6px] md:text-[16px] sm:text-[14px]">
                  {val?.course?.title}
                </p>
                <div className=" flex items-center gap-1">
                  <img
                    className="w-[32px] h-[32px] xsm:w-[10px] xsm:h-[10px] md:h-[24px] md:w-[24px] rounded-full"
                    src={val?.course?.instructor?.profile}
                    alt=""
                  />
                  <p className="font-pop font-medium text-[16px] xsm:text-[6px] md:text-[12px]">
                    {" "}
                    {val?.course?.instructor?.name}
                  </p>
                </div>
                <ProgressBar
                  completed={val?.completed_lessons.length}
                  maxCompleted={totallessons}
                  height={5}
                  bgColor="#1DBF73"
                  isLabelVisible={false}
                  className="mt-2"
                />

                <p className="font-pop text-end text-[12px] xsm:text-[6px] md:text-[10px]">
                  Lesson {val?.completed_lessons.length} of {totallessons}
                </p>
              </div>
            </div>
          ) : (
            <div className=" relative w-full flex flex-col justify-between p-4  mt-2 rounded-xl shadow-xl shadow-[#D9D9D9] xsm:mt-0 xsm:py-1 xsm:px-1 xsm:rounded-sm">
              {val?.course?.courseCategory === "liveCourse" && (
                <div className="bg-transparent p-4 absolute top-2 right-2 z-[99]">
                  <img
                    src="/liveclass.png"
                    alt="live class logo "
                    className="h-[30px] w-auto"
                  />
                </div>
              )}
              <div className="w-full h-[50%]">
                <img
                  className="w-full h-full xsm:rounded-md xsm:h-[55px]"
                  src={val?.course?.featured_image}
                  alt=""
                />
              </div>
              <div className="h-[45%] flex flex-col justify-between mt-2 xsm:space-y-1 xsm:mt-1">
                <p className="font-pop font-semibold text-[18px] xsm:text-[6px] md:text-[16px]">
                  {val?.course?.title}
                </p>
                <p className="text-gray-400 font-semibold text-sm">
                  Batch will starts on{" "}
                  {formatDate(val?.course?.courseStartDate)}
                </p>
                <div className=" flex items-center gap-1">
                  <img
                    className="w-[32px] h-[32px] xsm:w-[10px] xsm:h-[10px] md:h-[24px] md:w-[24px] rounded-full"
                    src={val?.course?.instructor?.profile}
                    alt=""
                  />
                  <p className="font-pop font-medium text-[16px] xsm:text-[6px] md:text-[12px]">
                    {" "}
                    {val?.course?.instructor?.name}
                  </p>
                </div>
                <ProgressBar
                  completed={val?.completed_lessons.length}
                  maxCompleted={totallessons}
                  height={5}
                  bgColor="#1DBF73"
                  isLabelVisible={false}
                  className="mt-2"
                />

                <p className="font-pop text-end text-[12px] xsm:text-[6px] md:text-[10px]">
                  Lesson {val?.completed_lessons?.length} of {totallessons}
                </p>
              </div>
            </div>
          );
        })}
        {internships?.map((val, ind) => {
          let totallessons = 0;
          val?.internship?.curriculum?.map((it) => {
            it?.chapters?.map((lesson)=>{
              totallessons += lesson?.lessons?.length;
              // console.log(lesson?.lessons?.length);
              
            })
            totallessons += it?.project?.length;

          });
          return new Date(val?.internship?.internshipStartDate) < new Date() ? (
            <div
              onClick={() => handleInternshipbatch(val)}
              className="cursor-pointer relative w-full flex flex-col justify-between p-4  mt-2 rounded-xl shadow-xl shadow-[#D9D9D9] xsm:mt-0 xsm:py-1 xsm:px-1 xsm:rounded-sm"
            >
              {val?.internship?.internshipCategory === "liveCourse" && (
                <div className="bg-transparent p-4 absolute top-2 right-2 z-[99]">
                  <img
                    src="/liveclass.png"
                    alt="live class logo "
                    className="h-[30px] w-auto"
                  />
                </div>
              )}
              <div className="w-full h-[50%]">
                <img
                  className="w-full h-full xsm:rounded-md xsm:h-[55px]"
                  src={val?.internship?.featured_image?val?.internship?.featured_image:image}
                  alt=""
                />
              </div>
              <div className="h-[45%] flex flex-col justify-between mt-2 xsm:space-y-1 xsm:mt-1">
                <p className="font-pop font-semibold text-[18px] xsm:text-[6px] md:text-[16px] sm:text-[14px]">
                  {val?.internship?.title}
                </p>
                <div className=" h-16">
                 
                </div>
                <ProgressBar
                  completed={val?.completed_lessons.length}
                  maxCompleted={totallessons}
                  height={5}
                  bgColor="#1DBF73"
                  isLabelVisible={false}
                  className="mt-2"
                />

                <p className="font-pop text-end text-[12px] xsm:text-[6px] md:text-[10px]">
                  Lesson {val?.completed_lessons.length} of {totallessons}
                </p>
              </div>
            </div>
          ) : (
            <div
            className="cursor-pointer relative w-full flex flex-col justify-between p-4  mt-2 rounded-xl shadow-xl shadow-[#D9D9D9] xsm:mt-0 xsm:py-1 xsm:px-1 xsm:rounded-sm"
          >
            {val?.internship?.internshipCategory === "liveCourse" && (
              <div className="bg-transparent p-4 absolute top-2 right-2 z-[99]">
                <img
                  src="/liveclass.png"
                  alt="live class logo "
                  className="h-[30px] w-auto"
                />
              </div>
            )}
            <div className="w-full h-[50%]">
              <img
                className="w-full h-full xsm:rounded-md xsm:h-[55px]"
                src={val?.internship?.featured_image}
                alt=""
              />
            </div>
            <div className="h-[45%] flex flex-col justify-between mt-2 xsm:space-y-1 xsm:mt-1">
              <p className="font-pop font-semibold text-[18px] xsm:text-[6px] md:text-[16px] sm:text-[14px]">
                {val?.internship?.title}
              </p>
              {/* <div className=" flex items-center gap-1">
                <img
                  className="w-[32px] h-[32px] xsm:w-[10px] xsm:h-[10px] md:h-[24px] md:w-[24px] rounded-full"
                  src={val?.internship?.instructor?.profile}
                />
                <p className="font-pop font-medium text-[16px] xsm:text-[6px] md:text-[12px]">
                  {" "}
                  {val?.internship?.instructor?.name}
                </p>
              </div> */}
              <ProgressBar
                completed={val?.completed_lessons.length}
                maxCompleted={totallessons}
                height={5}
                bgColor="#1DBF73"
                isLabelVisible={false}
                className="mt-2"
              />

              <p className="font-pop text-end text-[12px] xsm:text-[6px] md:text-[10px]">
                Lesson {val?.completed_lessons.length} of {totallessons}
              </p>
            </div>
          </div>
          );
        })}
      </div>
    </>
  );
}
