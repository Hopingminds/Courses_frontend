import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BASE_URL } from "../../Api/api";

const FilterSubAdmin = ({ FetchData, Statehandle,filtersData,setFiltersData,setshowspinner,showspinner }) => {
  const [degree, setDegree] = useState("");
  const [stream, setStream] = useState("");
  const [profileCompleted, setProfileCompleted] = useState("");
  const [invitation, setInvitation] = useState("");
  const [filteredStreams, setFilteredStreams] = useState([]);

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);

    switch (name) {
      case "degree":
        setStream("")
        setDegree((prev) => {
          const newDegree = prev === value ? "" : value;
          updateStreams(newDegree); // Update streams when degree changes
          return newDegree;
        });
        break;
      case "stream":
        setStream((prev) => (prev === value ? "" : value));
        break;
      case "status":
        setInvitation((prev) => (prev === value ? "" : value));
        break;
      case "profilestatus":
        setProfileCompleted((prev) => (prev === value ? "" : value));
        break;
      default:
        break;
    }
  };

  const updateStreams = (selectedDegree) => {
    // console.log(selectedDegree);
    
    if (selectedDegree) {
      const streams = filtersData?.streams?.filter(
        (stream) => stream.degree === selectedDegree
      );
      console.log(streams);

      setFilteredStreams(streams[0]?.name);
    } else {
      setFilteredStreams([]);
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
      setshowspinner(true)
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
      console.log("checking data is comming", data)
      Statehandle(data?.data);
      setshowspinner(false)
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  const clearFilters = () => {
    setDegree("");
    setStream("");
    setProfileCompleted("");
    setInvitation("");
    setFilteredStreams([]);
    FetchData();
  };



  useEffect(() => {
    FilterData();
  }, [degree, stream, profileCompleted, invitation]);

  return (
    
     
       <div className="bg-white flex flex-col gap-8 ml-5 py-3 sticky top-0 h-max">
         {filtersData?.degrees?.length>0 &&
        <>
      <div className="w-full flex justify-end">
        <button className="bg-[#1DBF73] text-white px-3 py-1 rounded" onClick={clearFilters}>
          Clear all
        </button>
      </div>
      <div>
        <div className="font-semibold text-xl flex justify-between items-center cursor-pointer" onClick={() => ClickSection(1)}>
          <p>Degree</p>
          <MdOutlineKeyboardArrowDown id="arrow1" className="h-8 w-8" />
        </div>
        <div className="flex flex-col pl-5 gap-2 mt-2" id={1}>
          {filtersData?.degrees?.map((deg) => (
            <div className="flex items-center gap-2 cursor-pointer" key={deg}>
              <input
                onChange={handleRadioChange}
                type="radio"
                name="degree"
                id={deg}
                value={deg}
                checked={degree === deg}
                className="h-6 w-6 text-lg"
              />
              <label className="cursor-pointer" htmlFor={deg}>{deg}</label>
            </div>
          ))}
        </div>
      </div>
     { degree&&<div>
        <div
          className="font-semibold text-xl flex justify-between items-center cursor-pointer"
          onClick={() => ClickSection(2)}
        >
          <p>Stream</p>
          <MdOutlineKeyboardArrowDown id="arrow2" className="h-8 w-8" />
        </div>
        <div className="flex flex-col pl-5 mt-2" id={2}>
          {filteredStreams?.map((streamObj) => (
            <div className="flex items-center gap-2 mb-2 cursor-pointer" key={streamObj}>
              <input
                onChange={handleRadioChange}
                type="radio"
                name="stream"
                id={streamObj}
                value={streamObj}
                checked={stream === streamObj}
                className="h-6 w-6 text-lg"
              />
              <label className="cursor-pointer" htmlFor={streamObj}>{streamObj}</label>
            </div>
          ))}
        </div>
      </div>}
      </>
      }
    </div>
  );
};

export default FilterSubAdmin;
