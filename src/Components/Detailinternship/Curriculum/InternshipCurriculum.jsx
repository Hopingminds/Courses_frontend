import React, { useEffect, useState } from "react";
import "./Curriculum.css";
import arrowIcon from "../../../Assets/arrow.png";
import { BASE_URL } from "../../../Api/api";
import { useParams, useLocation } from "react-router-dom";
import { RiVideoLine } from "react-icons/ri";
import { getVideoDuration } from "../../../helpers/helper_function";

function InternshipCurriculum() {
  const [data, setData] = useState(null);
  const params = useParams();
  const location = useLocation();
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [expandedChapters, setExpandedChapters] = useState({});
  const [expandedProjects, setExpandedProjects] = useState({});

  // Function to handle unit selection
  const handleUnitClick = (unitId) => {
    setSelectedUnit(unitId);
  };

  // Function to toggle chapter dropdown
  const handleChapterToggle = (unitId) => {
    console.log(expandedChapters[unitId]);

    setExpandedChapters((prev) => ({
      ...prev,
      [unitId]: !prev[unitId],
    }));
  };

  // Function to toggle project dropdown
  const handleProjectToggle = (unitId) => {
    console.log(unitId);

    setExpandedProjects((prev) => ({
      ...prev,
      [unitId]: !prev[unitId],
    }));
  };

  // Fetch data from the API
  useEffect(() => {
    async function fetchData() {
      try {
        let url = `${BASE_URL}/getInternshipBySlug/${params.slug}`;

        const response = await fetch(url);
        const result = await response.json();
        setData(result.course || result.internship);
        let tempdata = {};
        result?.internship?.curriculum?.map((item) => {
          tempdata[item?._id] = true;
        });
        console.log(tempdata);

        setExpandedChapters(tempdata);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();

    // Example of fetching video duration
    getVideoDuration(
      "https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/assets/1711955663670-001.mp4"
    )
      .then((duration) => {
        console.log("Video duration:", duration);
      })
      .catch((error) => {
        console.error("Error fetching video duration:", error);
      });
  }, [location.state, params.slug]);

  return (
    <div className="curriculum font-nu" id="curriculum">
      <p className="curriculum-content">
        Fast track your journey to become a skilled developer in just 6 months
        with our best Full Stack Developer Course.
      </p>

      <div className="curriculum-lessons">
        {data?.curriculum?.length > 0 ? (
          data.curriculum.map((unit) => (
            <div className="lesson-container" key={unit._id}>
              <div
                className="lesson-container-title"
                onClick={() => handleUnitClick(unit._id)}
              >
                <div className="lesson-container-title-left">
                  <div className="icon-arrow">
                    <img
                      src={arrowIcon}
                      id={`arrow${unit._id}`}
                      alt="arrow icon"
                      style={{
                        transform:
                          selectedUnit === unit._id
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <p>{unit.unitName}</p>
                </div>
              </div>

              {selectedUnit === unit._id && (
                <div className="lesson-container-dropdown">
                  {/* Chapters Section */}
                  <div
                    className="lesson-container-title"
                    onClick={() => handleChapterToggle(unit._id)}
                  >
                    <div className="lesson-container-title-left">
                      <div className="icon-arrow">
                        <img
                          src={arrowIcon}
                          alt="arrow icon"
                          style={{
                            transform: expandedChapters[unit._id]
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>
                      <p>Chapters</p>
                    </div>
                    <div className="lesson-container-title-right">
                      <p>{unit?.chapters?.length} chapters</p>
                    </div>
                  </div>
                  {/* <div>dfadsfdasf</div> */}
                  {/* Chapter Title and Dropdown Icon */}

                  {/* Displaying chapter content with transition */}

                  {expandedChapters[unit?._id] && (
                    <div className={`lesson-container-contents-list `}>
                      {unit?.chapters?.length > 0 ? (
                        unit?.chapters.map((chapter, index) => (
                          <div className="lesson-container-content" key={index}>
                            <div className="lesson-container-content-left">
                              <div className="icon-file">
                                <RiVideoLine />
                              </div>
                              <p className="font-nu text-[14px]">
                                {chapter?.chapter_name}
                              </p>
                            </div>
                            <div className="lesson-container-content-right">
                              <p>{chapter?.duration || "N/A"}</p>
                            </div>
                            <p className="chapter-details">
                              Chapter Details:{" "}
                              {chapter.details || "No details available"}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p>No chapters available</p>
                      )}
                    </div>
                  )}

                  {/* Projects Section */}
                  <div
                    className="lesson-container-title"
                    onClick={() => handleProjectToggle(unit._id)}
                  >
                    <div className="lesson-container-title-left">
                      <div className="icon-arrow">
                        <img
                          src={arrowIcon}
                          alt="arrow icon"
                          style={{
                            transform: expandedProjects[unit._id]
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>
                      <p>Projects</p>
                    </div>
                    <div className="lesson-container-title-right">
                      <p>{unit.project?.length} Projects</p>
                    </div>
                  </div>

                  {expandedProjects[unit?._id] && (
                    <div className={`lesson-container-contents-list `}>
                      {unit?.chapters?.length > 0 ? (
                        unit?.chapters.map((chapter, index) => (
                          <div className="lesson-container-content" key={index}>
                            <div className="lesson-container-content-left">
                              <div className="icon-file">
                                <RiVideoLine />
                              </div>
                              <p className="font-nu text-[14px]">
                                {chapter?.chapter_name}
                              </p>
                            </div>
                            <div className="lesson-container-content-right">
                              <p>{chapter?.duration || "N/A"}</p>
                            </div>
                            <p className="chapter-details">
                              Project Details:{" "}
                              {chapter.details || "No details available"}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p>No chapters available</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No curriculum data available.</p>
        )}
      </div>
    </div>
  );
}

export default InternshipCurriculum;
