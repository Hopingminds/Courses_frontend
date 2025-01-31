import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { BASE_URL } from "../../Api/api";
import toast, { Toaster } from "react-hot-toast";
import ShowCategoryWise from "./ShowCategoryWise";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import {
  MdWork,
  MdAccessTime,
  MdCategory,
  MdBusinessCenter,
} from "react-icons/md";
import Modal from "./components/Modal";

const CurrentFreelancing = () => {
  // const navigate = useNavigate();
  const [cardOpen, setCardOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [jobs, setJobs] = useState([]);
  const cards = [
    { name: "Software Developer", rating: 5, Data: 1250 },
    { name: "UI/UX Designer", rating: 4.7, Data: 920 },
    { name: "Mobile App Developer", rating: 4.7, Data: 1920 },
    { name: "Data Scientist", rating: 4.7, Data: 920 },
    { name: "DevOps Engineer", rating: 4.7, Data: 920 },
    { name: "Cybersecurity Specialist", rating: 4.3, Data: 690 },
    { name: "Machine Learning Engineer", rating: 4.6, Data: 480 },
    { name: "Cloud Solutions Architect", rating: 4.8, Data: 700 },
    // { name: "Design", rating: 4.4, Data: 110 },
  ];
  const handleApplyClick = (jobId) => {
    setSelectedJobId(jobId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<span key={i}>&#9733;</span>);
      } else if (i === Math.ceil(rating)) {
        stars.push(<span key={i}>&#9734;</span>);
      } else {
        stars.push(<span key={i}>&#9734;</span>);
      }
    }
    return stars;
  };

  async function fetchData() {
    try {
      const response = await axios.get(
        `${BASE_URL}/getInHousePlacementByCategory`
      );

      if (response?.data?.InHousePlacements) {
        setJobs(response.data.InHousePlacements);
      } else {
        setJobs([]);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching InHousePlacement posts.");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Handle card click to navigate to the appropriate category
  const handleCardClick = (category) => {
    if (cardOpen) {
      // First close the currently open card
      setCardOpen(false);
      // After a short delay, open the new card
      setTimeout(() => {
        setSelectedCategory(category);
        setCardOpen(true);
      }, 300); // 300ms delay for smooth closing and opening
    } else {
      // If no card is open, simply open the selected card
      setSelectedCategory(category);
      setCardOpen(true);
    }
  };

  function handleClose() {
    setCardOpen(false);
  }

  return (
    <div>
      <Toaster />
      <div className="flex flex-col items-center w-full bg-gray-50 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">HM's Jobs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-7xl">
          {jobs?.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <MdWork className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
                    {job.position}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <MdAccessTime className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    {job.employment_type}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <MdCategory className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    {job.role_category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
                  {job.job_description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.key_skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-[#e2ffe2] text-gray-500 px-4 py-1 rounded-xl text-[12px] font-semibold "
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-start mt-4">
                  <button onClick={()=>handleApplyClick(job._id)} className="text-[#fff] py-1 px-4 rounded-lg bg-green-600 text-[14px] font-bold">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center px-[4vw] xsm:px-3 xsm:mt-4">
        <div className="flex justify-center">
          <p className="text-[40px] font-pop font-bold xsm:text-[1rem] xsm:text-center">
            Current Freelancing Opportunities
          </p>
        </div>
        <div className="flex mb-4 py-6 xsm:py-2 xsm:mb-1">
          <p className="text-2xl text-green-500 xsm:text-[15px] xsm:pt-2">
            Search By Category
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 pb-10 w-full">
          {cards?.map((card, index) => (
            <div
              key={index}
              className="bg-[#F2F7F1] p-6 rounded-md py-8 w-full cursor-pointer transform hover:scale-105 transition-transform duration-300  hover:bg-green-300 focus:bg-green-300"
              onClick={() => handleCardClick(card.name)}
            >
              <h3 className="text-2xl font-bold mb-2 xsm:text-lg ">
                {card.name}
              </h3>

              <div className="flex flex-row justify-between py-5 pt-6">
                <div className="flex items-center">
                  <span className="text-green-400 flex">
                    {renderStars(card.rating)}
                  </span>
                  <span className="ml-2 xsm:text-sm hover:text-white">
                    ({card.rating})
                  </span>
                </div>

                <div className="text-gray-500 text-center xsm:text-sm ">
                  <p>{4000 + card.Data} Skills</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && <Modal onClose={handleCloseModal} jobId={selectedJobId} />}
        {cardOpen && (
          <ShowCategoryWise
            category={selectedCategory}
            close={handleClose}
            open={cardOpen}
            
            
          />
        )}
      </div>
    </div>
  );
};

export default CurrentFreelancing;
