import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CurrentFreelancing = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const cards = [
    { name: "Full Stack Development", rating: 5, Data: 1250 },
    { name: "Finance", rating: 4.7, Data: 920 },
    { name: "Management", rating: 4.3, Data: 690 },
    { name: "AI/ML", rating: 4.6, Data: 480 },
    { name: "Networking", rating: 4.8, Data: 700 },
    { name: "Data Science", rating: 4.4, Data: 110 },
  ];

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

  // Handle card click to navigate to the appropriate category
  const handleCardClick = (category) => {
    navigate(`/courses?category=${category}`);
  };

  return (
    <div className="flex flex-col justify-center px-[4vw] xsm:px-3">
      <div className="flex justify-center">
        <p className="text-[40px] font-pop font-bold xsm:text-[28px] xsm:text-center">
          Current Freelancing Opportunities
        </p>
      </div>
      <div className="flex mb-4 py-6">
        <p className="text-2xl text-green-500 xsm:text-lg xsm:pt-2">
          Search By Category
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 pb-10 w-full">
        {cards?.map((card, index) => (
          <div
            key={index}
            className="bg-[#F2F7F1] p-6 rounded-md py-8 w-full cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => handleCardClick(card.name)}
          >
            <h3 className="text-2xl font-bold mb-2 xsm:text-lg">{card.name}</h3>

            <div className="flex flex-row justify-between py-5 pt-6">
              <div className="flex items-center">
                <span className="text-green-400 flex">
                  {renderStars(card.rating)}
                </span>
                <span className="ml-2 xsm:text-sm">({card.rating})</span>
              </div>

              <div className="text-gray-500 text-center xsm:text-sm">
                <p>{4000 + card.Data} Skills</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentFreelancing;
