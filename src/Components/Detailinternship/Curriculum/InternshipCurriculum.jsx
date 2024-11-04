import React, { useEffect, useState } from "react";
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

  const handleUnitClick = (unitId) => {
    setSelectedUnit((prevSelectedUnit) =>
      prevSelectedUnit === unitId ? null : unitId
    );
  };

  const handleChapterToggle = (unitId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [unitId]: !prev[unitId],
    }));
  };

  const handleProjectToggle = (unitId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [unitId]: !prev[unitId],
    }));
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `${BASE_URL}/getInternshipBySlug/${params.slug}`;
        const response = await fetch(url);
        const result = await response.json();
        setData(result.course || result.internship);

        // Set all chapters to be closed by default
        const initialChaptersState = {};
        result?.internship?.curriculum?.forEach((item) => {
          initialChaptersState[item?._id] = false;
        });
        setExpandedChapters(initialChaptersState);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();

    getVideoDuration(
      "https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/assets/1711955663670-001.mp4"
    )
      .then((duration) => {
        console.log("Video duration:", duration);
      })
      .catch((error) => {
        console.error("Error fetching video duration:", error);
      });
  }, [location.state, params?.slug]);

  return (
    <div className="curriculum font-nu" id="curriculum">
      <p className="text-lg font-semibold mb-4">
        Fast track your journey to become a skilled developer in just 6 months
        with our best Full Stack Developer Course.
      </p>

      <div className="curriculum-lessons space-y-4">
        {data?.curriculum?.length > 0 ? (
          data?.curriculum?.map((unit) => (
            <div className="lesson-container border-b" key={unit._id}>
              <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => handleUnitClick(unit._id)}
              >
                <div className="flex items-center">
                  <img
                    src={arrowIcon}
                    alt="arrow icon"
                    className={`transform transition-transform duration-300 ${
                      selectedUnit === unit._id ? "rotate-180" : "rotate-0"
                    } w-4 h-4 mr-2`}
                  />
                  <p className="text-lg font-semibold">{unit?.unitName}</p>
                </div>
              </div>

              {selectedUnit === unit._id && (
                <div className="space-y-4">
                  {/* Chapters Section */}
                  <div
                    className="flex justify-between items-center cursor-pointer py-2"
                    onClick={() => handleChapterToggle(unit._id)}
                  >
                    <div className="flex items-center ">
                      <img
                        src={arrowIcon}
                        alt="arrow icon"
                        className={`transform transition-transform duration-300 ${
                          expandedChapters[unit._id] ? "rotate-180" : "rotate-0"
                        } w-4 h-4 mr-2`}
                      />
                      <p className="font-semibold">Chapters</p>
                    </div>
                    <p>
                      {unit.chapters?.length}{" "}
                      {unit.chapters?.length === 1 ? "Chapter" : "Chapters"}
                    </p>
                  </div>
                  <hr />

                  {expandedChapters[unit._id] && (
                    <div className="ml-6 space-y-2 transition-all duration-300">
                      {unit?.chapters?.length > 0 ? (
                        unit?.chapters?.map((chapter, index) => {
                          // Calculate total duration in minutes for the chapter
                          const totalDuration = chapter?.lessons?.reduce(
                            (acc, lesson) => acc + (lesson.duration || 0),
                            0
                          );

                          // Convert total duration to hours and minutes
                          const hours = Math.floor(totalDuration / 60);
                          const minutes = totalDuration % 60;

                          return (
                            <div
                              key={index}
                              className="flex justify-between items-center p-2 rounded-lg bg-gray-100"
                            >
                              <div className="flex items-center">
                                <RiVideoLine className="text-xl mr-2" />
                                <p className="text-sm font-medium">
                                  {chapter?.chapter_name}
                                </p>
                              </div>
                              <p>
                                {hours > 0 ? `${hours}h ` : ""}
                                {minutes}m
                              </p>
                            </div>
                          );
                        })
                      ) : (
                        <p>No chapters available</p>
                      )}

                      {/* hr line at the end of expanded chapters */}
                      <hr />
                    </div>
                  )}

                  {/* Projects Section */}
                  <div
                    className="flex justify-between items-center cursor-pointer py-2"
                    onClick={() => handleProjectToggle(unit._id)}
                  >
                    <div className="flex items-center">
                      <img
                        src={arrowIcon}
                        alt="arrow icon"
                        className={`transform transition-transform duration-300 ${
                          expandedProjects[unit._id] ? "rotate-180" : "rotate-0"
                        } w-4 h-4 mr-2`}
                      />
                      <p className="font-semibold">Projects</p>
                    </div>
                    <p>
                      {unit.project?.length}{" "}
                      {unit.project?.length === 1 ? "Project" : "Projects"}
                    </p>
                  </div>

                  {expandedProjects[unit._id] && (
                    <div className="ml-6 space-y-2 transition-all duration-300">
                      {unit?.project?.length > 0 ? (
                        unit?.project?.map((project, index) => {
                          // Convert duration from minutes to days, hours, and minutes
                          const days = Math.floor(
                            project?.duration / (60 * 24)
                          );
                          const hours = Math.floor(
                            (project?.duration % (60 * 24)) / 60
                          );
                          const minutes = project?.duration % 60;

                          return (
                            <div
                              key={index}
                              className="flex justify-between items-center p-2 rounded-lg bg-gray-100"
                            >
                              <div className="flex items-center">
                                <RiVideoLine className="text-xl mr-2" />
                                <p className="text-sm font-medium">
                                  {project?.title}
                                </p>
                              </div>
                              <p>
                                {project?.duration
                                  ? `${days}d ${hours}h ${minutes}m`
                                  : "N/A"}
                              </p>
                            </div>
                          );
                        })
                      ) : (
                        <p>No projects available</p>
                      )}

                      {/* hr line at the end of expanded projects */}
                      <hr />
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