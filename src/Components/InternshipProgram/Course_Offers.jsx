import React, { useEffect, useState } from "react";
import "./Courses.css";
import { BASE_URL } from "../../Api/api";
import Skeleton from "../Skeleton/Skeletoncard";
import Internshipcard from "./InternshipCard";

const Course_Offers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Internship Programs");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = `${BASE_URL}/getInternships?search=${searchTerm}`;
        const response = await fetch(url);
        const data = await response.json();
        setCourses(data?.courses || []);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    // Debounce the fetch call by using a timeout
    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 300);

    // Cleanup function to clear the timeout if searchTerm changes before delay
    return () => clearTimeout(delayDebounceFn);

  }, [searchTerm]); // Only rerun when searchTerm changes

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="h-[100%] w-full px-16 py-8 font-pop bg-[#E2FFF1] sm:px-4 xsm:px-2 xsm:py-4 xsm:mt-0 xsm:space-y-0 md:px-6 md:space-y-2">
      <div className="text-center text-[40px] font-semibold text-[#000] xsm:text-[12px] sm:text-[18px] md:text-[20px]">
        Internship <span className="text-[#1dbf73]">Programs</span>
      </div>
      
      <div className="justify-between h-12 md:h-8 sm:h-8 xsm:h-fit flex w-full font-semibold space-x-10 font-pop xl:space-x-12 xsm:space-x-1 xsm:flex-nowrap xsm:gap-y-2 xsm:gap-x-[8px] xsm:justify-between xsm:text-[8px] sm:space-x-4 sm:gap-y-2 sm:text-[10px] sm:flex-wrap md:text-[12px] md:space-x-6 xsm:overflow-x-auto xsm:w-[90vw] xsm:overflow-y-hidden xsm:py-[6px]">
        {[
          "All Internship Programs",
          // Add other categories as needed
        ].map((category, index) => (
          <button
            key={category + index}
            onClick={() => handleCategoryClick(category)}
            className={
              selectedCategory === category
                ? "px-5 py-[6px] afterclick rounded-full xsm:py-1 sm:py-[4px] xsm:px-4 whitespace-nowrap"
                : "beforeclick whitespace-nowrap py-[6px]"
            }
          >
            {category}
          </button>
        ))}

        <div className="flex justify-center text-center text-[40px]  text-[#000] xsm:text-[12px] sm:text-[18px] md:text-[20px]">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-[#1DBF73] text-[16px]  xsm:text-[10px] md:text-[14px] px-4 py-2 rounded-md border-2 border-[#1DBF73] shadow-lg focus:outline-none focus:border-[#1DAF63] focus:shadow-md transition-all duration-200 ease-in-out"
            placeholder="Search by internship name..."
          />
        </div>
      </div>

      <div className="grid grid-cols-4 xsm:grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 mt-3">
        {loading
          ? [1, 2, 3, 4].map((item) => <Skeleton key={item} />)
          : courses?.map((course) => (
              <Internshipcard key={course.id} course={course} />
            ))}
      </div>
    </div>
  );
};

export default Course_Offers;
