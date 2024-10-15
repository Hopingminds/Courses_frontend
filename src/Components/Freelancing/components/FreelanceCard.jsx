import React from "react";

const FreelanceCard = ({ item }) => {
  function postingTime(date, lastDate) {
    const createdAt = new Date(date);
    const expiredAt = lastDate ? new Date(lastDate) : null; // Check if lastDate is provided

    if (expiredAt && !isNaN(expiredAt)) {
      // Ensure expiredAt is valid
      const expiringTime = expiredAt - createdAt;
      const diffDays = Math.round(expiringTime / (1000 * 60 * 60 * 24)); // Difference in days
      const weekDiff = Math.round(diffDays / 7); // Convert days to weeks
      return diffDays>7 ?   weekDiff + 1 : weekDiff;
    } else {
      // Get the current date (today)
      const today = new Date();

      // Calculate the difference in time (milliseconds)
      const diffTime = today - createdAt;

      // Convert to days
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
  }

  // console.log(postingTime("2024-10-09T12:39:33.123Z"));
  const handleView = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div key={item._id} className="p-4 rounded-xl shadow-lg w-full">
      <h3 className="text-2xl font-semibold py-2">{item.position}</h3>

      <p className="text-sm text-gray-500 font-semibold py-2">
        Hourly - Posted {postingTime(item.publishDate)} days ago
      </p>
      <p className="text-sm font-semibold py-2">
        {postingTime(item.publishDate, item.lastDate) - 1} -{" "}
        {postingTime(item.publishDate, item.lastDate)} week
      </p>
      <p className="text-sm font-semibold py-2">{item.job_description}</p>

      <div className="flex flex-wrap mt-2 py-2 gap-2">
        {/* background: #F2F7F2;
         */}
        {item.key_skills.map((tech, index) => (
          <span
            key={index}
            className="bg-[#e2ffe2]  text-gray-500 px-4 py-1 rounded-xl text-[12px] font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-row w-full justify-start gap-3 items-start mt-4">
        <button
          onClick={() => handleView(`https://www.google.com`)}
          className="text-[#fff] py-1 px-4 rounded-lg bg-green-600 text-[14px] font-bold"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default FreelanceCard;
