import React, { useState, useEffect } from "react";
import FreelanceCard from "./components/FreelanceCard";
import { BASE_URL } from "../../Api/api";

const ShowCategoryWise = ({ category, close, open }) => {
  const [loading, setloading] = useState(false);
  const [freelancingData, setfreelancingData] = useState([]);
  console.log(category);

  async function fetchAllFreelancing() {
    setloading(true);
    try {
      // Ensure category is defined or passed as a prop/argument
      const url = `${BASE_URL}/getFreelanceByCategory?role_category=${category}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("COURSES_USER_TOKEN")}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json(); // Convert response to JSON
      setfreelancingData(data.freelanceOpenings); // Log the JSON data
    } catch (error) {
      console.log("Error in fetching freelancing by category Data:", error);
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

  return (
    <div className="flex flex-col gap-1">
      {freelancingData.length > 0 && (
        <>
          <p className="text-[30px] text-gray-500 leading-tight ">
            The latest freelance work!
          </p>
          <h1 className="text-[50px] font-semibold ">{category}</h1>
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 lg:grid-cols-2 gap-8 w-full my-4 px-4">
            {freelancingData?.map((item) => (
              <FreelanceCard item={item} key={item._id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowCategoryWise;
