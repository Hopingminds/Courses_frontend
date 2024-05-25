import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BASE_URL } from "../../Api/api";

const FilterSubAdmin = ({ FetchData,Statehandle }) => {
  const [degree, setDegree] = useState("");
  const [stream, setStream] = useState("");
  const [profileCompleted, setProfileCompleted] = useState("");
  const [invitation, setInvitation] = useState("");

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "degree":
        setDegree(value);
        break;
      case "stream":
        setStream(value);
        break;
      case "status":
        setInvitation(value);
        break;
      case "profilestatus":
        setProfileCompleted(value);
        break;
      default:
        break;
    }
  };

  const ClickSection = (id) => {
    const inner = document.getElementById(id);
    const arrow = document.getElementById(`arrow${id}`);
    if (inner.style.display === "flex") {
      arrow.style.transform = "rotate(0deg)";
      inner.style.display = "none";
    } else {
      arrow.style.transform = "rotate(180deg)";
      inner.style.display = "flex";
    }
  };

  const FilterData = async () => {
    try {
      const queryParams = new URLSearchParams({
        profileComplete: profileCompleted,
        stream: stream,
        degree: degree,
        courseAccepted: invitation,
      });

      const response = await fetch(`${BASE_URL}/get-college-students?${queryParams.toString()}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      Statehandle(data?.data)
      
      // console.log(data);
      
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  useEffect(() => {
    FilterData();
  }, [degree, stream, profileCompleted, invitation]);

  const clearFilters = () => {
    setDegree("");
    setStream("");
    setProfileCompleted("");
    setInvitation("");

    FetchData(); 
  };

  return (
    <div className="bg-white flex flex-col gap-8 w-[20%] ml-5 py-3 sticky top-0 h-max">
      <div className="w-full flex justify-end">
        <button className="bg-[#1DBF73] text-white px-3 py-1 rounded " onClick={clearFilters}>Clear all</button>
      </div>
      <div>
        <div className="font-semibold text-xl flex justify-between items-center" onClick={() => ClickSection(1)}>
          <p>Degree</p>
          <MdOutlineKeyboardArrowDown id="arrow1" className="h-8 w-8" />
        </div>
        <div className="flex flex-col pl-5 gap-2 mt-2" id={1}>
          <div className="flex items-center gap-2">
            <input onChange={handleRadioChange} type="radio" name="degree" id="B.Tech" value="B.Tech" checked={degree === "B.Tech"} className="h-6 w-6 text-lg" />
            <label htmlFor="B.Tech">B.Tech</label>
          </div>
          <div className="flex items-center gap-2">
            <input onChange={handleRadioChange} type="radio" name="degree" id="M.Tech" value="M.Tech" checked={degree === "M.Tech"} className="h-6 w-6 text-lg" />
            <label htmlFor="M.Tech">M.Tech</label>
          </div>
          {/* Add more degree options as needed */}
        </div>
      </div>
      <div>
        <div className="font-semibold text-xl flex justify-between items-center" onClick={() => ClickSection(2)}>
          <p>Stream</p>
          <MdOutlineKeyboardArrowDown id="arrow2" className="h-8 w-8" />
        </div>
        <div className="flex flex-col pl-5 gap-2 mt-2" id={2}>
          <div className="flex items-center gap-2">
            <input onChange={handleRadioChange} type="radio" name="stream" id="ECE" value="ECE" checked={stream === "ECE"} className="h-6 w-6 text-lg" />
            <label htmlFor="ECE">ECE</label>
          </div>
          <div className="flex items-center gap-2">
            <input onChange={handleRadioChange} type="radio" name="stream" id="CSE" value="CSE" checked={stream === "CSE"} className="h-6 w-6 text-lg" />
            <label htmlFor="CSE">CSE</label>
          </div>
          {/* Add more stream options as needed */}
        </div>
      </div>
      <div>
        <div className="font-semibold text-xl flex justify-between items-center" onClick={() => ClickSection(3)}>
          <p>Invitation Status</p>
          <MdOutlineKeyboardArrowDown id="arrow3" className="h-8 w-8" />
        </div>
        <div className="flex flex-col pl-5 gap-3 mt-2" id={3}>
          <div className="flex items-center gap-2">
            <input onChange={handleRadioChange} type="radio" name="status" id="Accepted" value={true} checked={invitation === "true"} className="h-6 w-6 text-lg" />
            <label htmlFor="Accepted">Accepted</label>
          </div>
          <div className="flex items-center gap-2">
            <input onChange={handleRadioChange} type="radio" name="status" id="Pending" value={false} checked={invitation === "false"} className="h-6 w-6 text-lg" />
            <label htmlFor="Pending">Pending</label>
          </div>
        </div>
      </div>
      <div>
        <div className="font-semibold text-xl flex justify-between items-center" onClick={() => ClickSection(4)}>
          <p>Profile Status</p>
          <MdOutlineKeyboardArrowDown id="arrow4" className="h-8 w-8" />
        </div>
        <div className="flex flex-col pl-5 gap-3 mt-2" id={4}>
          <div className="flex items-center gap-2">
            <input onChange={handleRadioChange} type="radio" name="profilestatus" id="Complete" value={true} checked={profileCompleted === "true"} className="h-6 w-6 text-lg" />
            <label htmlFor="Complete">Complete</label>
          </div>
          <div className="flex items-center gap-2">
            <input onChange={handleRadioChange} type="radio" name="profilestatus" id="Incomplete" value={false} checked={profileCompleted === "false"} className="h-6 w-6 text-lg" />
            <label htmlFor="Incomplete">Incomplete</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSubAdmin;
