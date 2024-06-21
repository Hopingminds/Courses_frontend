import { useState, useEffect } from "react";
import { HiSquare3Stack3D } from "react-icons/hi2";
// import { dummy } from "./data";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const NewModal = ({ handleModalOpen,datas,type }) => {
    const [openDetails, setOpenDetails] = useState({});
    console.log(datas)
    
    useEffect(() => {
        // Add the no-scroll class to the body when the modal is open
        document.body.classList.add('overflow-hidden');
        // Remove the no-scroll class from the body when the modal is closed
        return () => document.body.classList.remove('overflow-hidden');
    }, []);

    const handleToggle = (index, isOpen) => {
        setOpenDetails((prevState) => ({
            ...prevState,
            [index]: isOpen,
        }));
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-700 bg-opacity-20 backdrop-blur-lg">
            <div className="relative p-4 w-full max-w-4xl max-h-[75vh] bg-[#E2FFF1] rounded-lg shadow dark:bg-gray-700 h-auto">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 gap-4">
                    <div>
                        {/* <h3 className="text-3xl font-bold text-gray-900 dark:text-white capitalize flex flex-col gap-1">
                            {data.title}
                        </h3> */}
                       
                    </div>
                    <div className="flex gap-4 items-center">
                       
                        <button
                            type="button"
                            onClick={handleModalOpen}
                            className="absolute top-4 right-4 font-bold text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal"
                        >
                            X
                        </button>
                    </div>
                </div>
                {/* Modal body */}
                <div className="px-[1rem] py-[2rem] md:p-5 space-y-4 max-h-[65vh] overflow-y-auto no-scrollbar">
                    {datas.map((module, index) => (
                        <details
                            className="cursor-pointer"
                            key={index + 67}
                            onToggle={(e) => handleToggle(index, e.target.open)}
                        >
                            <summary className="bg-[#FFE5E5] px-[1rem] py-[2rem] rounded-md text-xl font-bold capitalize flex justify-between items-center">
                                <p>
                                    {module.title}{" "}
                                    <span className="font-light text-black">{module.duration}</span>
                                </p>
                                {openDetails[index] ? (
                                    <MdKeyboardArrowUp className="text-2xl font-semibold" />
                                ) : (
                                    <MdKeyboardArrowDown className="text-2xl font-semibold" />
                                )}
                            </summary>
                            <div className="bg-white px-4 py-3 grid grid-cols-3 gap-3 items-center justify-between">
                                {module?.allData?.map((lesson, index) => (
                                    
                                        
                                        <div className="bg-[#F5F5F5] flex flex-col px-[2rem] py-[2rem] items-start rounded-md">
                                            {type === "Project" && <>
                                                <div className="flex gap-2 items-center">
                                                <HiSquare3Stack3D className="text-green-500 h-[25px] w-auto"/>

                                                    <p className="font-semibold uppercase text-xl">{lesson.title}</p>
                                                </div>
                                               <a href={lesson.projectInfoPdf} className="font-semibold">Open Project</a>
                                            </>}
                                            {type === "Module" && <>
                                                <div className="flex gap-2 items-center">
                                                <HiSquare3Stack3D className="text-green-500 h-[25px] w-auto"/>

                                                    <p className="font-semibold uppercase text-sm">{lesson.lesson_name}</p>
                                                </div>
                                               {/* <a href={lesson.projectInfoPdf} className="font-semibold">Open Project</a> */}
                                            </>}
                                        </div>
                                  
                                ))}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
};



export default NewModal