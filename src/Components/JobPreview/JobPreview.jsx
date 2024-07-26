import React, { useEffect, useState } from "react";
import { FcBriefcase } from "react-icons/fc";
import { GiWallet } from "react-icons/gi";
import { FaBriefcase, FaMapLocationDot } from "react-icons/fa6";
import { Link, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../Api/api";
import axios from "axios";
import { formatDate } from "../../helpers/helper_function";
import { applyJob, getAllJobAplicants } from '../../helpers/helperapi'
import toast, { Toaster } from "react-hot-toast";

const JobPreview = () => {
  const [loader, setLoader] = useState(true);
  const [jobDetails, setJobdetails] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const getJobDetails = async () => {
    // console.log(searchParams.get("jobid"));
    setLoader(false);
    try {
      const res = await axios.get(
        `${BASE_URL}/get-one-job-opening-details/${searchParams.get("jobid")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("RECTR_TOKEN")}`,
          },
        }
      );
      // console.log(res.data);
      setJobdetails(res?.data?.jobOpenings);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  const handleApply = async (e, id) => {
    // e.stopPropagation();
    // e.preventDefault();
    try {
        const res = await applyJob(id)
        // console.log(res)
        if (res) {

            toast.success('You have Successfully Applied')
        }
        else {
            toast.error("Error while applying")
        }
    } catch (error) {
        toast.error("Error while applying")
    }


}
  useEffect(() => {
    getJobDetails();
  }, []);

  return (
    <div className="bg-[#f7f7f7] px-[12%] py-[3%]">
      <Toaster toastOptions={{
         duration: 500,
      }} />
      <div className="bg-white border font-pop rounded-2xl">
        {/* Heading */}
        <div className="px-8 py-4 border-b  flex flex-col gap-1">
          <div className="flex flex-col">
            <p className="font-semibold text-[25px]">{jobDetails?.position}</p>
            <p className="font-nu text-[14px]">{jobDetails?.company}</p>
          </div>
          <div className="flex justify-between mt-4 mb-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <FaBriefcase fontSize={"1.3rem"} className="text-gray-500" />
                {jobDetails?.work_experience?.isFresher?
                <p className="font-nu text-[12px]">
                  {" "}
                  Fresher
                  {/* {jobDetails?.work_experience?.isFresher ? 'Fresher':`${jobDetails?.work_experience?.from}-${jobDetails?.work_experience?.to} Years`} */}
                </p>:<p className="font-nu text-[12px]">{jobDetails?.work_experience?.from}-{jobDetails?.work_experience?.to} Years</p>}
              </div>
              <div className="flex items-center gap-3">
                <GiWallet fontSize={"1.3rem"} className="text-gray-500" />
                {jobDetails.salaryType=="Salary Range" ?<p className="font-nu text-[12px]">₹{jobDetails?.annual_salary_range.from}-{jobDetails?.annual_salary_range.from} LPA</p>:
                        jobDetails.salaryType=="Upto" ?<p className="font-nu text-[12px]" >Upto ₹{jobDetails?.uptoPackage} LPA</p>:
                        <p className="font-nu text-[12px]">₹{jobDetails?.annualSalary} LPA</p>}

              </div>
              <div className="flex items-center gap-3">
                <FaMapLocationDot
                  fontSize={"1.3rem"}
                  className="text-gray-500"
                />
                <p className="font-nu text-[12px]">{jobDetails?.company_address}</p>
              </div>
            </div>
            <div className="flex items-end">
              <button onClick={(e)=>handleApply(e,searchParams.get("jobid"))} className="font-medium text-[20px] bg-green-400 text-white px-6 py-1 rounded-full">
                Apply Now
              </button>
            </div>
          </div>
          <hr />
          <div className="flex justify-end gap-4 py-1">
            <p className="font-nu text-[14px]">
              Posted:{" "}
              <span className="font-semibold">
                {formatDate(jobDetails?.publishDate)}
              </span>
            </p>
            {/* <p className="font-nu text-[14px]">
              Openings: <span className="font-semibold">1</span>{" "}
            </p> */}
          </div>
        </div>
        {/* Job Information */}
        <div className="px-8 py-4 flex flex-col gap-4">
          {/* Job description */}
          <div>
            <p className="font-semibold">Job Description</p>
            <p
              className="font-nu text-[14px]"
              dangerouslySetInnerHTML={{ __html: jobDetails?.job_description }}
            ></p>
          </div>
          {/* Job Details */}
          <div className="grid grid-cols-2 gap-1 gap-x-10 font-nu text-[14px]">
            <div className="grid grid-cols-[1fr,2fr]">
              <p className="font-medium">Role</p>
              <p>{jobDetails?.position}</p>
            </div>
            <div className="grid grid-cols-[1fr,2fr]">
              <p className="font-medium">Work mode </p>
              <p>{jobDetails?.work_mode}</p>
            </div>

            <div className="grid grid-cols-[1fr,2fr]">
              <p className="font-medium">Specialization</p>
              <p> {jobDetails?.specialization}</p>
            </div>
            <div className="grid grid-cols-[1fr,2fr]">
              <p className="font-medium">Employment Type</p>
              <p>{jobDetails?.employment_type}</p>
            </div>
            <div className="grid grid-cols-[1fr,2fr]">
              <p className="font-medium">Role Category</p>
              <p> {jobDetails?.role_category}</p>
            </div>
            <div className="grid grid-cols-[1fr,2fr]">
              <p className="font-medium">Education</p>
              <p>{jobDetails?.educational_qualification}</p>
            </div>
          </div>
          {/* Key Skills */}
          <div className="flex flex-col gap-1 font-nu text-[14px]">
            <p className="font-medium">Key Skills</p>
            <div className="flex flex-wrap gap-2">
              {jobDetails?.key_skills?.map((skill, ind) => {
                return (
                  <p className="px-3 border w-max rounded-full" key={ind}>
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* About Company */}
      <div className="bg-white border mt-10 rounded-2xl px-8 py-4">
        <div className="flex flex-col gap-1">
          <p className="font-semibold">About Company</p>
          <p className="font-nu text-[14px]">{jobDetails?.about_company}</p>
        </div>
        <div className="flex flex-col gap-1 mt-6 font-nu">
          <p className="font-semibold">Company Info</p>
          <div className="flex text-[14px]">
            <p className="font-medium text-gray-500 w-[120px]">Website</p>
            <Link to={"/"} className="text-blue-400">
              {jobDetails?.company_website_link}
            </Link>
          </div>
          <div className="flex text-[14px]">
            <p className="font-medium text-gray-500 w-[120px]">Address:</p>

            {jobDetails?.company_address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPreview;
