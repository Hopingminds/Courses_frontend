import React, { useState, useEffect } from "react";
import ManageJobsHeader from "./ManageJobsHeader";
import ManageJobsFilter from "./ManageJobsFilter";
import Jobs from "./JobsMain";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import AllJobs from "./AllJobs";

const ManageJobsmain = () => {
  const [allJobsData, setAllJobsData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showPage, setShowPage] = useState("AllJobs");
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

  useEffect(() => {
    let filtered = allJobsData;

    if (selectedFilters.includes("Active Jobs")) {
      filtered = filtered.filter((job) => job.publishStatus === "active");
    }

    if (selectedFilters.includes("Closed Jobs")) {
      filtered = filtered.filter((job) => job.publishStatus === "closed");
    }

    setFilteredJobs(filtered);
  }, [selectedFilters, allJobsData]);
  return (
    <div className="flex flex-col px-[5%] pt-[3%] bg-[#fafafa]">
      <ManageJobsHeader />
      <div className="flex my-[2%] justify-between">
        <div className="w-[25%]  h-full">
          <ManageJobsFilter
            allJobsData={allJobsData}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <div className="w-[70%]">
          {/* Header */}
          <div className="border-b flex flex-col justify-between ">
            <div className="flex gap-6">
              <button
                className={`text-[13px] py-2 ${
                  showPage === "AllJobs"
                    ? "border-b-4 border-green-500 font-semibold"
                    : ""
                }`}
                onClick={() => setShowPage("AllJobs")}
              >
                All Jobs <span>{filteredJobs.length}</span>
              </button>
              {/* <button className={`text-[13px] py-2 ${showPage==="drafts"?'border-b-4 border-green-500 font-semibold':''}`} onClick={() => setShowPage("drafts")}>Drafts</button> */}
            </div>
            <AllJobs filteredJobs={filteredJobs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageJobsmain;
