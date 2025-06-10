import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Mycourses({ courses }) {
  function formatDate(dateString) {
    const dateObj = new Date(dateString);
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

  return (
    <>
      {!courses?.length && (
        <div className="flex justify-center w-full mt-10">
          <div className="text-center font-semibold text-2xl  w-full">
            No Course Purchased
          </div>
        </div>
      )}

      <div className="my-[2%] mx-[5%] grid grid-cols-3 gap-16 xsm:my-3 xsm:gap-4 md:gap-10">
        {courses?.map((val, ind) => {
          let totallessons = 0;
          val?.course?.curriculum?.forEach((it) => {
            totallessons += it?.lessons?.length;
          });

          const course = val?.course;
          const isCourseAvailable =
            new Date(course?.courseStartDate) < new Date();

          return (
            <div
              key={course.id}
              className={`relative w-full h-[70vh] flex flex-col justify-between p-3 rounded-xl shadow-xl shadow-[#D9D9D9] xsm:mt-0 xsm:py-1 xsm:px-1 xsm:rounded-sm ${
                isCourseAvailable ? "" : "cursor-not-allowed"
              }`}
            >
              {course?.courseCategory === "liveCourse" && (
                <div className="bg-transparent p-4 absolute top-2 right-2 z-[99]">
                  <img
                    src="/liveclass.png"
                    alt="live class logo"
                    className="h-[30px] w-auto"
                  />
                </div>
              )}
              {/* <div className="w-full h-[50%]">
                                <img className="w-full h-full xsm:rounded-md xsm:h-[55px]" src={course?.featured_image} alt={course?.title} />
                            </div> */}
              <div className="w-full h-[50%]">
                <img
                  className="w-full h-full xsm:rounded-md xsm:h-[55px] rounded-xl"
                  src={
                    course?.featured_image?.trim()
                      ? course.featured_image
                      : "https://sbs.ac.in/wp-content/uploads/2023/09/Asset-5.png"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://sbs.ac.in/wp-content/uploads/2023/09/Asset-5.png";
                  }}
                  alt={course?.title || "Course Image"}
                />
              </div>
              <div className="w-full py-2 shadow-fuchsia-50 text-black">
                <hr />
              </div>
              <div className="h-[45%] flex flex-col justify-between mt-2 xsm:space-y-1 xsm:mt-1">
                <p className="font-pop font-semibold text-[18px] xsm:text-[6px] md:text-[16px]">
                  {course?.title}
                </p>
                {isCourseAvailable ? (
                  <a
                    href={
                      course?.courseCategory === "liveCourse"
                        ? `/liveclass/${course?.slug}`
                        : `/course/${course?.slug}`
                    }
                  >
                    <p className="text-gray-400 font-semibold text-sm">
                      Batch will start on {formatDate(course?.courseStartDate)}
                    </p>
                  </a>
                ) : (
                  <p className="text-gray-400 font-semibold text-sm">
                    Batch will start on {formatDate(course?.courseStartDate)}
                  </p>
                )}
                <div className="flex items-center gap-1">
                  {/* <img
                              className="w-[32px] h-[32px] xsm:w-[10px] xsm:h-[10px] md:h-[24px] md:w-[24px] rounded-full"
                              src={course?.instructor?.profile}
                              alt={course?.instructor?.name}
                            /> */}
                  <img
                    className="w-[32px] h-[32px] xsm:w-[10px] xsm:h-[10px] md:h-[24px] md:w-[24px] rounded-full"
                    src={
                      val?.course?.instructor?.profile?.trim()
                        ? val.course?.instructor?.profile
                        : `${process.env.PUBLIC_URL}/Avtars/Avtar-8.png`
                    }
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = `${process.env.PUBLIC_URL}/Avtars/Avtar-8.png`;
                    }}
                    alt="Instructor"
                  />
                  <p className="font-pop font-medium text-[16px] xsm:text-[6px] md:text-[12px] pl-4 justify-center flex items-center">
                    {" "}
                    {course?.instructor?.name}
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
          );
        })}
      </div>
    </>
  );
}
