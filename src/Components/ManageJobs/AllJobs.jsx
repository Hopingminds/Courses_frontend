import React, { useEffect, useState } from "react";
import { MdRefresh } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, Router } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import { formatDate } from "../../helpers/helper_function";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../Spinner";

const AllJobs = () => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [allJobsData, setAllJobsData] = useState([]);
  const [loader, setLoader] = useState(true);

  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    setSelectAllChecked(isChecked);

    // Check or uncheck all job checkboxes
    const jobCheckboxes = document.querySelectorAll(
      'input[type="checkbox"][name="jobCheckbox"]'
    );
    jobCheckboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  };

  const handleReloadClick = () => {
    // Reload the page
    window.location.reload();
  };

  const toggleMenu = (menuId) => {
    console.log(menuId);
    setMenuOpen((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };

  const getJobs = async () => {
    setLoader(false);
    try {
      const res = await axios.get(
        `${BASE_URL}/getalljobppenings/rec 

`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("RECTR_TOKEN")}`,
          },
        }
      );
      console.log(res.data?.jobOpenings?.length);
      setAllJobsData(res?.data?.jobOpenings);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const changeStatus = async (id, status) => {
    console.log(id);
    try {
      const res = await axios.put(
        `${BASE_URL}/update-job-opening-status`,
        {
          id: id,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("RECTR_TOKEN")}`,
          },
        }
      );
      console.log(res);

      status === "active"
        ? toast.success("Job Reposted Successfully")
        : toast.success("Job Closed Successfully");

      getJobs();
    } catch (error) {
      console.log(error);
    }
  };

  if (loader) {
    return (
      <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
        <Spinner className="" />
      </div>
    );
  }

  return (
    <>
      <Toaster />
      <div>
        {/* Heading */}
        <div className="text-gray-500 flex justify-between items-center px-4 py-2 border bg-white mt-4 rounded-md">
          <div className="flex items-center gap-8">
            <div>
              <label
                htmlFor="selectall"
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="selectall"
                  className="w-4 h-4"
                  checked={selectAllChecked}
                  onChange={handleSelectAllChange}
                />
                <p className="text-[13px]">Select All</p>
              </label>
            </div>
            <div
              onClick={handleReloadClick}
              className="flex items-center gap-1 cursor-pointer"
            >
              <MdRefresh fontSize={"1.5rem"} />
              <p className="text-[13px]">Refresh</p>
            </div>
            {/* <div className='flex items-center gap-1 cursor-pointer'>
                        <FcCollaboration fontSize={'1.5rem'} className='text-gray-500'/>
                        <p className='text-[13px]'>Collaborate</p>
                    </div> */}
            <div className="flex items-center gap-1 cursor-pointer">
              <IoIosCloseCircleOutline
                fontSize={"1.5rem"}
                className="text-gray-500"
              />
              <p className="text-[13px]">Close</p>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="mt-6 flex flex-col gap">
          {allJobsData?.map((jobdata, ind) => {
            return (
              <div
                className="bg-white rounded-lg shadow-md my-2 overflow-hidden"
                key={ind}
              >
                <div className=" px-4 py-2 mt-2 w-full">
                  <div className="flex w-full">
                    <div className="flex gap-2 w-full">
                      <input
                        type="checkbox"
                        name="jobCheckbox"
                        className="w-4 h-4"
                      />
                      <div className="grid grid-cols-[2fr,1fr,1fr] w-[60%]">
                        <div>
                          <p className="font-pop font-medium text-[14px]">
                            {jobdata?.position}
                          </p>
                          <p className="font-nu text-[12px] font-semibold text-gray-500">
                            {jobdata?.location}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <p className="font-pop font-medium text-[14px]">
                              879
                            </p>
                            {/* <p className='font-pop font-medium text-[10px] bg-[#1FC074] text-white px-1 rounded-full'>35 new</p> */}
                          </div>
                          <p className="font-nu text-[12px] font-semibold text-gray-500">
                            Total
                          </p>
                        </div>
                        <div>
                          <p className="font-pop font-medium text-[14px]">12</p>
                          <p className="font-nu text-[12px] font-semibold text-gray-500">
                            Shortlisted
                          </p>
                        </div>
                      </div>
                    </div>
                    {jobdata?.publishStatus !== "active" && (
                      <div className="flex gap-4 items-center relative">
                        <button
                          className="border border-[#1FC074] text-[#1FC074] text-[13px] px-2 hover:bg-[#1fc07552]"
                          onClick={() => changeStatus(jobdata?._id, "active")}
                        >
                          Repost
                        </button>
                      </div>
                    )}
                    <div className="flex gap-4 items-center relative">
                      {/* <button className='border border-[#1FC074] text-[#1FC074] text-[13px] px-2 hover:bg-[#1fc07552]'>Repost</button> */}
                      <BsThreeDotsVertical
                        className="cursor-pointer"
                        onClick={() => toggleMenu(ind)}
                      />
                      {menuOpen[ind] && (
                        <div
                          className="bg-[#FAFAFA] absolute border w-max top-[70%] -right-[100%] "
                          onClick={() => toggleMenu(ind)}
                        >
                          <div
                            className="text-center px-4 border-b cursor-pointer text-[14px]"
                            onClick={() => changeStatus(jobdata?._id, "closed")}
                          >
                            Close Job
                          </div>
                          <Link
                            to={"/jobpreview?jobid=" + jobdata?._id}
                            className="text-center px-4  cursor-pointer text-[14px]"
                          >
                            Preview Job
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between my-2">
                    {/* <div>
                                <p className='text-gray-500 bg-gray-300 px-1 rounded-sm text-[10px]'>Job Vacancy (expired)</p>
                            </div> */}
                    {jobdata?.publishStatus == "active" ? (
                      <div>
                        <p className="text-green-500 bg-green-100 px-1 rounded-sm text-[10px]">
                          Job Vacancy (active)
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-red-500 bg-red-100 px-1 rounded-sm text-[10px]">
                          Job Vacancy (Closed)
                        </p>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <div className="border-r px-2">
                        <p className="font-nu text-gray-500 text-[12px]">
                          posted by Me
                        </p>
                      </div>
                      <div>
                        <p className="font-nu text-gray-500 text-[12px]">
                          {formatDate(jobdata?.publishDate)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllJobs;
