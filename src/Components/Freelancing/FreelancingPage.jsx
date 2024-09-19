import React, { useState, useEffect, useContext } from "react";
import { FaSortDown } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import { Globalinfo } from "../../App";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal"; // Modal Component

const FreelancingPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const { userDetail } = useContext(Globalinfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseSlug, setSelectedCourseSlug] = useState(""); // Store the slug of the selected course
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/courses`);
        if (response.data.success) {
          setCourses(response.data.courses);
        }
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleCheckEligibility = () => {
    if (!selectedCourse) {
      toast.error("Please select a course.");
      return;
    }

    const selectedCourseData = courses?.find(
      (course) => course._id === selectedCourse
    );

    if (selectedCourseData) {
      const purchasedCourse = userDetail?.purchased_courses?.find(
        (course) => course.course._id === selectedCourse
      );

      if (purchasedCourse) {
        // If purchased, navigate to internship page
        navigate("/learning?tab=job");
      } else {
        // If not purchased, open modal and set the selected course slug
        setSelectedCourseSlug(selectedCourseData.slug); // Set slug
        setIsModalOpen(true);
      }
    } else {
      toast.error("Selected course is not available.");
    }
  };

  return (
    <div className="py-10 flex flex-col items-center justify-center text-center">
      <div className="flex flex-col gap-4 items-center max-w-screen-lg mx-auto px-4">
        <p className="text-4xl md:text-[30px] sm:text-[30px] xsm:text-[30px] xsm:w-full font-bold font-pop">
          Freelancing Opportunities for Graduates
        </p>

        <p className="mt-10 xsm:mt-2 text-base sm:text-lg md:text-xl xsm:w-full xl:text-xl font-pop xsm:px-0 px-10">
          At Hoping Minds, we believe in empowering our students with real-world
          opportunities. Once you complete your course, you can unlock a wide
          range of freelancing jobs tailored to your skills and interests.
        </p>
        <p className="text-base sm:text-lg md:text-xl xsm:w-full xl:text-xl px-10 xsm:px-0 font-pop">
          Use our eligibility checker tool below to see if you qualify for these
          exciting opportunities and take the first step towards your
          freelancing career.
        </p>
      </div>

      <div className="mt-5 flex sm:flex-col xsm:flex-col xl:flex-row lg:flex-row md:flex-row 2xl:flex-row gap-4 justify-center items-center sm:w-[40vw] max-w-screen-lg px-4 py-10 lg:w-[70%] w-[70%] ">
        {/* Input Dropdown */}
        <div className="relative w-full xl:w-[30vw] sm:w-[80vw]">
          <select
            className="appearance-none border-2 border-green-600 h-[6vh] rounded-md p-2 w-full xsm:h-[5vh]"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="" disabled>
              Select Your Course Completion
            </option>
            {courses.length > 0 ? (
              courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.title}
                </option>
              ))
            ) : (
              <option value="">No Courses Available</option>
            )}
          </select>
  
          <FaSortDown className="absolute top-1/3 right-2 transform -translate-y-1/2 pointer-events-none h-[5vh] w-[2vw] text-[#1DBF73] cursor-pointer" />
        </div>

        <button
          className="bg-[#1DBF73] h-[6vh] text-white py-2 px-4 rounded-md w-[25vw] xl:w-[25vw] font-pop sm:w-full xsm:w-full md:w-[30vw] text-lg"
          onClick={handleCheckEligibility}
        >
          Check Eligibility
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          slug={selectedCourseSlug}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default FreelancingPage;
