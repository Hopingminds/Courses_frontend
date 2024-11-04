import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../Api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { applyJob, getAllJobAplicants } from "../../helpers/helperapi";

const InternshipJobOffering = ({ courses }) => {
  const navigate = useNavigate();

  const [jobOpeningData, setJobOpeningData] = useState();
  const [isApplied, setIsApplied] = useState(false);
  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();

    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[dateObj.getMonth()];

    let hours = dateObj.getHours();
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');

    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    const time = `${hours}.${minutes}${ampm}`;

    return `${day} ${month} ${year} ${time}`;
}
  useEffect(() => {
    getAllJobAplicants();
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getalljobppenings`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("COURSES_USER_TOKEN")}`,
        },
      });
      // console.log(res.data?.jobOpenings);
      setJobOpeningData(res?.data?.jobOpenings);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApply = async (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const res = await applyJob(id);
      // console.log(res);
      if (res) {
        toast.success("You have Successfully Applied");
      } else {
        toast.error("Error while applying");
      }
    } catch (error) {
      toast.error("Error while applying");
    }
  };

  return (
    <>
      <div className="px-[5%] my-[3%] flex gap-10 space-y-8 justify-between xsm:flex-col-reverse xsm:mt-3">
        <div
          className={`flex flex-col justify-between xsm:w-[100%] md:w-[65%] md:gap-3 ${
            !jobOpeningData ? "w-full" : "w-[60%]"
          }`}
        >
          {!jobOpeningData ? (
            <div className="flex justify-center  items-center w-full mt-10">
              <div className="text-center font-semibold text-2xl w-full ">
                {" "}
                No Job Found
              </div>
            </div>
          ) : (
            ""
          )}

          {jobOpeningData?.map((item, ind) => {
            let expiry=new Date(item?.lastDate);
            let today=new Date()
            let check=expiry<today;
            // console.log("keyskills",item?.key_skills);
            return (
              <>
                <div
                  //   onClick={() => navigate("/jobpreview?jobid=" + item?._id)}
                  key={ind}
                  className="h-[12rem] w-full flex flex-row gap-4 bg-[#E2FFF1] p-4 mt-4 rounded-2xl justify-between shadow-2xl shadow-[#D9D9D9] xsm:p-2 xsm:rounded-lg xsm:h-[10vh] md:mt-0 md:p-3"
                >
                  <div className="w-[35%] rounded-2xl">
                    <img
                      className="w-full h-full rounded-xl xsm:rounded-lg object-cover "
                      src={item?.logoUrl}
                    />
                  </div>
                  <div className="w-full flex flex-col justify-between">
                    <div className="space-y-2 xsm:space-y-1">
                      <p className="font-pop font-semibold text-[18px] xsm:text-[12px] md:text-[16px]">
                        {item?.position}
                      </p>
                      <p className="font-pop text-[#555555] text-[13px] xsm:hidden md:text-[10px]">
                        {item?.company}
                      </p>
                      <div className="flex gap-20 xsm:space-x-10 md:space-x-16">
                        <div className="flex space-x-2 items-center xsm:space-x-1">
                          <img
                            className="w-[16px] h-[16px] xsm:w-3 xsm:h-3 md:w-4 md:h-4 object-cover"
                            src="../Icons/RCDesign.svg"
                          />
                          <p className="font-pop text-[11px] font-medium text-[#555555] xsm:text-[8px] md:text-[10px]">
                            {item?.interview_mode}
                          </p>
                        </div>
                        {item.salaryType=="Salary Range" ?<p className=" text-sm">₹{item?.annual_salary_range.from}-{item?.annual_salary_range.from} LPA</p>:
                        item.salaryType=="Upto" ?<p className=" text-sm">Upto ₹{item?.uptoPackage} LPA</p>:
                        <p className="text-sm">₹{item?.annualSalary} LPA</p>
}
                      </div>
                    </div>
                    <div className="flex space-x-2 items-center xsm:space-x-1">
                        <p className="text-[14px] font-semibold">Skills required</p>
                        {item?.key_skills?.map((it)=>{
                          return<p className="font-pop capitalize text-[11px] font-medium text-[#555555] xsm:text-[8px] md:text-[10px]">
                            {it},
                              </p>
                            })}
                         
                        </div>
                    <div className="flex gap-2 items-center xsm:space-x-1 w-[70%]">
                      <h3 className="text-[14px] font-semibold">Job expires on</h3>

                      <p className="font-pop text-[14px] font-medium text-[#555555] xsm:text-[8px] md:text-[10px]">
                        {formatDate(item?.lastDate)}
                      </p>
                    </div>


                    {/* <div className="flex gap-2 items-center xsm:space-x-1 w-[70%]">
                      <h3 className="text-[14px] font-semibold">Position</h3>

                      <p className="font-pop text-[14px] font-medium text-[#555555] xsm:text-[8px] md:text-[10px]">
                        
                        {item?.position}
                      </p>
                    </div> */}
                  </div>
                  <div className="flex flex-col w-[25%] justify-start gap-3 justify-self-start items-start md:mt-2">
                    {!isApplied && (
                      <button
                        onClick={(e) => handleApply(e, item?._id)}
                        className={`bg-[#1DBF73] py-1 px-6 mr-12 rounded-full text-white text-[14px] font-nu font-bold xsm:text-[6px] xsm:py-1 xsm:px-3 md:text-[10px] md:px-3 md:py-1 ${check ? 'cursor-not-allowed opacity-50 pointer-events-none':''}`}
                      >
                        Apply
                      </button>
                    )}

                    <button
                      onClick={() => navigate("/jobpreview?jobid=" + item?._id)}
                      className={`bg-transparent text-[#1DBF73] py-1 px-6 rounded-full border border-[#1DBF73] text-[14px] font-nu font-bold xsm:text-[6px] xsm:py-1 xsm:px-3 md:text-[10px] md:px-3 md:py-1 `}
                    >
                      View
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/* <div className="w-[25%] justify-self-start flex flex-col Certificate-right gap-y-5 xsm:flex-row xsm:justify-between md:gap-y-4">
                    <p className="font-pop text-center font-semibold text-[18px] xsm:hidden md:text-[14px]">Explore Jobs</p>
                    <button className="bg-[#E2FFF1] py-3 px-10 rounded-lg font-nu font-semibold xsm:text-[8px] xsm:py-2 xsm:px-6 xsm:rounded-sm md:text-[14px] md:py-2">Applied Jobs</button>
                    <button className="bg-[#E2FFF1] py-3 px-10 rounded-lg font-nu font-semibold xsm:text-[8px] xsm:py-2 xsm:px-6 xsm:rounded-sm md:text-[14px] md:py-2">Openings For You</button>
                </div> */}
      </div>
    </>
  );
};

export default InternshipJobOffering;
