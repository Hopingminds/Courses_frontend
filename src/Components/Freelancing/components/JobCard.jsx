import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ item }) => {
  const navigate = useNavigate();
  function postingTime(date, lastDate) {
    const createdAt = new Date(date);
    const expiredAt = lastDate ? new Date(lastDate) : null; // Check if lastDate is provided

    if (expiredAt && !isNaN(expiredAt)) {
      // Ensure expiredAt is valid
      const expiringTime = expiredAt - createdAt;
      const diffDays = Math.round(expiringTime / (1000 * 60 * 60 * 24)); // Difference in days
      const weekDiff = Math.round(diffDays / 7); // Convert days to weeks
      return diffDays > 7 ? weekDiff + 1 : weekDiff;
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

  const isPostExpired = (expirationDate) => {
    // Get today's date at midnight in the local timezone
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Parse the expiration date, which automatically handles timezone
    const expiration = new Date(expirationDate);
    expiration.setHours(0, 0, 0, 0);

    // Return true if the expiration date is before today
    return expiration < today;
  };

  function formatDate(dateString) {
    const dateObj = new Date(dateString);

    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[dateObj.getMonth()];

    let hours = dateObj.getHours();
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const time = `${hours}.${minutes}${ampm}`;

    return `${day} ${month} ${year} ${time}`;
  }

  const getTruncatedText = (text, limit) => {
    if (text.length <= limit) return text;

    // Find the next full stop, question mark, or exclamation point after the limit
    const truncatedText = text.slice(0, limit);
    const nextSentenceEnd = text.slice(limit).search(/[.!?]/);

    // If a sentence-ending punctuation mark is found, include it; otherwise, truncate at the nearest word
    if (nextSentenceEnd !== -1) {
      return text.slice(0, limit + nextSentenceEnd + 1);
    } else {
      // No sentence-ending punctuation found, so truncate at the last space within the limit
      const lastSpaceIndex = truncatedText.lastIndexOf(" ");
      return truncatedText.slice(0, lastSpaceIndex) + "...";
    }
  };

  return (
    <div
      key={item._id}
      className="p-4 rounded-xl shadow-lg w-full font-pop h-full flex flex-col justify-between border-2 border-gray-100"
    >
      <div className="flex-grow">
        <h3 className="text-2xl font-semibold py-2">{item.position}</h3>

        <p className="text-sm text-gray-500 font-semibold py-2">
          Hourly - Posted {postingTime(item.publishDate)} days ago
        </p>
        <p className="text-sm font-semibold py-2">
          Expired on{" "}
          <span className="font-normal">{formatDate(item.lastDate)}</span>
        </p>
        <p
          className="text-sm py-2 text-justify"
          dangerouslySetInnerHTML={{
            __html: getTruncatedText(item.job_description, 200),
          }}
        ></p>
      </div>
        <div className="flex flex-wrap py-2 gap-2">
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
      <div className="flex justify-start mt-2">
        <button
          onClick={() => navigate("/jobpreview?jobid=" + item?._id)}
          // onClick={()=>handleView(item.job_url)}
          className={`text-[#fff] py-1 px-4 rounded-lg ${
            isPostExpired(item?.lastDate) ? "bg-red-500" : "bg-green-600"
          }  text-[14px] font-bold`}
          disabled={isPostExpired(item?.lastDate)}
        >
          {isPostExpired(item?.lastDate) ? "Expired" : "Apply"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
