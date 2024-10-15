import React, { useState, useEffect } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { BASE_URL } from "../../Api/api";
import FreelanceCard from "./components/FreelanceCard";

const RecentlyPost = () => {
  const [recentJobData, setRecentJobData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const [loading, setloading] = useState(false);
  async function fetchAllFreelancing() {
    setloading(true);
    const url = `${BASE_URL}/getAllFreelanceOpenings`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("COURSES_USER_TOKEN")}`,
        },
      });

      if (!response.ok) {
        // If the response status is not in the range 200-299, handle the error
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setRecentJobData(data.freelanceOpenings); // Use the data here (like setting it in state)
    } catch (error) {
      console.log("Error in fetching all freelancing job posts:", error);
    } finally {
      setloading(false);
    }
  }

  let temp = true;
  useEffect(() => {
    if (temp) {
      fetchAllFreelancing();
      temp = false;
    }
  }, []);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
      </div>
    );
  }

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
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 lg:grid-cols-2 gap-8 w-full my-4 px-4">
              {recentJobData?.map((item) => (
                <FreelanceCard item={item} key={item._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyPost;
