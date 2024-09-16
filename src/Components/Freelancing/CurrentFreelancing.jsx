import React from "react";

const CurrentFreelancing = () => {
  const cards = [
    { name: "Development & IT", rating: 1, students: 1250 },
    { name: "Graphic Design & Creative Stuff", rating: 4.7, students: 920 },
    { name: "Sales & Marketing", rating: 4.3, students: 690 },
    { name: "Admin & Customer Support", rating: 4.6, students: 480 },
    { name: "Finance & Accounting", rating: 4.8, students: 700 },
    { name: "Legal", rating: 4.4, students: 110 },
    { name: "Engineer & Architecture", rating: 4.5, students: 830 },
    { name: "Copy Writing & Translation", rating: 4.9, students: 1095 },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<span key={i}>&#9733;</span>); // Full Star
      } else if (i === Math.ceil(rating)) {
        stars.push(<span key={i}>&#9734;</span>); // Half Star
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Empty Star
      }
    }
    return stars;
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
      <div className="grid grid-cols-4 sm:grid-cols-2 xsm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 pb-10 w-full">
        {cards?.map((card, index) => (
          <div
            key={index}
            className="bg-[#F2F7F1] p-4 rounded-md py-6 w-full xsm:w-full xsm:py-4"
          >
            <h3 className="text-xl font-bold mb-2 xsm:text-lg">{card.name}</h3>

            <div className="flex flex-row  justify-between  py-5 pt-6">
              <div className="flex items-center">
                <span className="text-green-400 flex">
                  {renderStars(card.rating)}
                </span>
                <span className="ml-2 xsm:text-sm">({card.rating})</span>
              </div>

              <div className="text-gray-500 text-center xsm:text-sm">
                {card.students} Skills
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentFreelancing;
