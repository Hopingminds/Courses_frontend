import React,{useState} from "react";

const FreelanceCard = ({ item }) => {
  // const [jobUrl, setjobUrl] = useState(null)
  function postingTime(date, lastDate) {
    const createdAt = new Date(date);
    const expiredAt = lastDate ? new Date(lastDate) : null;
  
    if (expiredAt && !isNaN(expiredAt)) {
      const expiringTime = expiredAt - createdAt;
      const diffDays = Math.round(expiringTime / (1000 * 60 * 60 * 24));
      
      // Calculate the week difference safely
      const weekDiff = Math.floor(diffDays / 7); 
      
      // Ensure that you return 0 or positive values
      return diffDays > 7 ? weekDiff : 0;
    } else {
      const today = new Date();
      const diffTime = today - createdAt;
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  
      // Ensure positive days are returned, or 0 if negative
      return diffDays >= 0 ? diffDays : 0;
    }
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

  // console.log(postingTime("2024-10-09T12:39:33.123Z"));
  const handleView = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  

  return (
<div key={item._id} className="p-4 rounded-xl shadow-lg w-full font-pop h-full flex flex-col justify-between border-2 border-gray-100">
      <div className="flex-grow">
        <h3 className="text-2xl font-semibold py-2">{item.position}</h3>
        <p className="text-sm text-gray-500 font-semibold py-2">
          Hourly - Posted {postingTime(item.publishDate) ? `${postingTime(item.publishDate)} days ago` : "today"}
        </p>
        <p className="text-sm font-semibold py-2">
          {postingTime(item.publishDate, item.lastDate)} - {postingTime(item.publishDate, item.lastDate) + 1} week
        </p>
        <p className="text-sm py-2 text-justify">{getTruncatedText(item.job_description, 200)}</p>
      </div>
        <div className="flex flex-wrap py-2 gap-2">
          {item.key_skills.map((tech, index) => (
            <span
              key={index}
              className="bg-[#e2ffe2] text-gray-500 px-4 py-1 rounded-xl text-[12px] font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

      <div className="flex justify-start mt-2">
        <button
          onClick={() => handleView(item.job_url)}
          className="text-[#fff] py-1 px-4 rounded-lg bg-green-600 text-[14px] font-bold"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FreelanceCard;