import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const NewModal = ({ handleModalOpen, handleModalClose, datas, type, title }) => {
    const [openDetails, setOpenDetails] = useState({0:true});
    console.log("datas", datas);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.classList.contains('backdrop-overlay')) {
                handleModalClose(); // Call your modal close function here
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleModalOpen]);

    const handleToggle = (index, isOpen) => {
        setOpenDetails((prevState) => ({
            ...prevState,
            [index]: isOpen,
        }));
    };

    return (
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-20 backdrop-blur-lg backdrop-overlay  pt-10">
        <div className="relative p-4 w-full max-w-4xl max-h-[78vh] bg-white rounded-lg shadow h-auto xsm:w-[90%] xsm:p-2">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t gap-4">
            <div>
              <p className="text-3xl font-bold text-black capitalize flex flex-col gap-1 xsm:text-[14px]">
                {title}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <button
                type="button"
                onClick={handleModalClose}
                className="absolute top-4 right-4 font-bold text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg xsm:xl text-2xl w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                X
              </button>
            </div>
          </div>
          {/* Modal body */}
          <div className="px-[1rem] py-[2rem] md:p-5 space-y-4 max-h-[65vh] overflow-y-auto no-scrollbar xsm:py-[1rem]">
            {datas.map(
              (module, index) =>
                module?.allData?.length > 0 && (
                  <details
                    className="cursor-text"
                    key={"c" + index}
                    open={openDetails[index]}
                    onToggle={(e) => handleToggle(index, e.target.open)}
                  >
                    <summary className="bg-gray-100 text-green-600 transition-all duration-300 ease-in-out hover:bg-green-100 px-[1rem] py-[1rem] rounded-md text-xl font-bold capitalize flex justify-between items-center xsm:text-[12px] xsm:leading-[17px] xsm:p-[1rem] cursor-pointer">
                      <p>
                        {module.title}{" "}
                        <span className="font-light text-black leading-[17px] ">
                          {module.duration}
                        </span>
                      </p>
                      {openDetails[index] ? (
                        <MdKeyboardArrowUp className="text-2xl font-semibold" />
                      ) : (
                        <MdKeyboardArrowDown className="text-2xl font-semibold" />
                      )}
                    </summary>
                    <div className="bg-white px-4 py-3 grid grid-cols-3 gap-3 items-center justify-between xsm:grid-cols-1">
                      {/* {module?.allData?.map((lesson, index) => ( */}
                      {module?.allData
                        .map((lesson, index) => (
                          <>
                            {type === "Project" && (
                              <div className="bg-white border border-gray-200 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:border-green-400 flex flex-col justify-center px-[2rem] py-[2rem] items-start rounded-md xsm:p-[1rem]">
                                <div className="flex gap-2 items-center">
                                  <img
                                    src={"/Icons/project.svg"}
                                    alt="project"
                                    className="text-green-500 h-[25px] w-auto xsm:h-[28px]"
                                  />
                                  <p className="capitalize text-xs xsm:text-[12px] xsm:leading-[18px] xsm:font-semibold">
                                    {lesson.title}
                                  </p>
                                </div>
                              </div>
                            )}
                            {type === "Module" && (
                              <div className="bg-white border border-gray-200 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:border-green-400 flex flex-col justify-center px-[2rem] py-[2rem] items-start rounded-md xsm:p-[1rem] ">
                                <div className="flex gap-2 items-center">
                                  <img
                                    src={"/Icons/module.svg"}
                                    alt="module"
                                    className="text-green-500 h-[25px] w-auto xsm:h-[28px]"
                                  />
                                  <p className="capitalize text-xs xsm:text-[12px] xsm:leading-[18px] xsm:font-semibold">
                                    {lesson?.lesson_name}
                                  </p>
                                </div>
                              </div>
                            )}
                            {type === "Assignment" &&
                              lesson.assignment !== "" && (
                                <div className="bg-white border border-gray-200 shadow-sm  transition-all duration-300 ease-in-out hover:shadow-md hover:border-green-400 flex flex-col justify-center px-[2rem] py-[2rem] items-start rounded-md xsm:p-[1rem]">
                                  <div className="flex gap-2 items-center">
                                    <img
                                      src={"/Icons/assignment.svg"}
                                      alt="assignment"
                                      className="text-green-500 h-[25px] w-auto xsm:h-[18px]"
                                    />
                                    <p className="capitalize text-xs ">
                                      {lesson.lesson_name}
                                    </p>
                                  </div>
                                </div>
                              )}
                            {type === "Notes" && lesson.notes !== "" && (
                              <div className="bg-white border border-gray-200 shadow-sm  transition-all duration-300 ease-in-out hover:shadow-md hover:border-green-400 flex flex-col justify-center px-[2rem] py-[2rem] items-start rounded-md xsm:p-[1rem]">
                                <div className="flex gap-2 items-center">
                                  <img
                                    src={"/Icons/notes.svg"}
                                    alt="Notes"
                                    className="text-green-500 h-[25px] w-auto xsm:h-[18px]"
                                  />
                                  <p className="capitalize text-xs">
                                    {lesson.lesson_name}
                                  </p>
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                    </div>
                  </details>
                )
            )}
          </div>
        </div>
      </div>
    );
};

export default NewModal;