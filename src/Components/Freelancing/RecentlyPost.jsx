import React, { useState, useEffect } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../../Api/api";
import { Link, useNavigate } from "react-router-dom";
import { applyJob } from "../../helpers/helperapi";
import { Check } from "@mui/icons-material";

const RecentlyPost = () => {
  const navigate = useNavigate();
  const [recentJobData, setRecentJobData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");

  // Fetch jobs from API
  useEffect(() => {
    fetchRecentJobs();
  }, []);

  const handleApply = async (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const res = await applyJob(id);
      if (res) {
        toast.success("You have Successfully Applied");
        fetchRecentJobs();
      } else {
        toast.error("Error while applying");
      }
    } catch (error) {
      toast.error("Error while applying");
    }
  };

  const fetchRecentJobs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getalljobppenings`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("COURSES_USER_TOKEN")}`,
        },
      });
      setRecentJobData(res?.data?.jobOpenings || []);
    } catch (error) {
      toast.error("Failed to fetch recent jobs.");
    }
  };

  const handlePrev = () => {
    setDirection("prev");
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Update logic for carousel navigation
    }
  };

  const handleNext = () => {
    setDirection("next");
    if (currentIndex < Math.ceil(recentJobData.length / 3) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="py-5 px-[4vw] pb-6">
      <div>
        <p className="text-[30px] font-pop text-[#9D9D9D]">
          The latest freelance work!
        </p>
        <div className="flex flex-row">
          <p className="text-[50px] font-pop">Recently Posted</p>
          <p className="text-[#1DBF73] text-[50px] font-pop ml-2">Works</p>
        </div>
      </div>

      <div className="relative mt-5">
        <div className="flex justify-end space-x-3 mb-3">
          <button
            onClick={handlePrev}
            className="bg-white shadow-md p-3 rounded-full"
          >
            <GrLinkPrevious />
          </button>
          <button
            onClick={handleNext}
            className="bg-white shadow-md p-3 rounded-full"
          >
            <GrLinkNext />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden relative">
          <div
            className={`flex transition-transform duration-500 ${
              direction === "next"
                ? "translate-x-[-100%]"
                : "translate-x-[100%]"
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className="grid grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 lg:grid-cols-3 gap-4 w-full">
              {recentJobData?.map((item) => (
                <div
                  key={item._id}
                  className="bg-[#F2F7F1] p-4 rounded-xl shadow-sm w-full"
                >
                  <h3 className="text-2xl font-semibold py-4">
                    {item.position}
                  </h3>
                  <p className="text-sm text-gray-500 py-2">
                    Expires on: {new Date(item.lastDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500 py-2">
                    Company: {item.company}
                  </p>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 py-2">
                      Employment Type: {item.employment_type}
                    </p>
                    <p className="text-sm text-gray-500 py-2">
                      Package: {item.uptoPackage} LPA
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 py-2">
                    Skills Required: {item.key_skills}
                  </p>
                  <div className="flex flex-wrap mt-2 py-2">
                    {item.key_skills.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 mr-2 mb-2 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-row w-full justify-start gap-3 items-start mt-4">
                    <div className="flex justify-center items-center gap-2 bg-[#1DBF73] py-1 px-6 rounded-full text-white text-[14px] font-bold">
                      <img
                        src="https://media.tenor.com/7d64hlDIV9sAAAAi/red-circle-blink.gif"
                        alt="status"
                        className="w-3 h-3"
                      />
                      <p>{item.publishStatus}</p>
                    </div>

                    <button
                      onClick={() => navigate("/jobpreview?jobid=" + item?._id)}
                      className="bg-transparent text-[#1DBF73] py-1 px-6 rounded-full border border-[#1DBF73] text-[14px] font-bold"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyPost;
