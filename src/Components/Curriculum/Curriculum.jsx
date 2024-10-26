import React, { useEffect, useState } from "react";
import "./Curriculum.css";
import arrowIcon from "../../Assets/arrow.png";
import { BASE_URL } from "../../Api/api";
import { useParams, useLocation } from "react-router-dom";
import { RiVideoLine } from "react-icons/ri";
import { getVideoDuration } from "../../helpers/helper_function";

function Curriculum() {
  const [clicked, setClicked] = useState(false);
  const [Data, setData] = useState();
  const params = useParams();
  const location = useLocation();

  // Toggle display of curriculum sections
  function ClickSection(id) {
    const inner = document.getElementById(id);
    const arrow = document.getElementById(`arrow${id}`);
    if (!clicked) {
      setClicked(true);
      arrow.style.transform = "rotate(0deg)";
      inner.style.display = "none";
    } else {
      setClicked(false);
      arrow.style.transform = "rotate(180deg)";
      inner.style.display = "flex";
    }
  }

  useEffect(() => {
    async function FetchData() {
      try {
        // Determine endpoint based on internship flag
        let url = `${BASE_URL}/course/${params.slug}`;
        if (location.state?.isInternship) {
          url = `${BASE_URL}/getInternshipBySlug/${params.slug}`;
        }

        const response = await fetch(url);
        const result = await response.json();
        setData(result.course || result.internship); // Assign data based on response

      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    FetchData();

    // Fetch example video duration
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
        {/* Check if Data and Data.curriculum exist before mapping */}
        {Data?.curriculum?.length > 0 ? (
          Data.curriculum.map((val, ind) => (
            <div className="lesson-container" key={ind}>
              <div
                className="lesson-container-title xsm:p-[0px!important]"
                onClick={() => ClickSection(ind + 1)}
              >
                <div className="lesson-container-title-left">
                  <div className="icon-arrow">
                    <img src={arrowIcon} id={`arrow${ind + 1}`} alt="arrow icon" />
                  </div>
                  <p>{val.chapter_name}</p>
                </div>

                <div className="lesson-container-title-right">
                  <p>{val?.lessons?.length} lessons</p>
                  <p>45 Mins</p>
                </div>
              </div>

              <div className="lesson-container-contents hidden" id={ind + 1}>
                {val?.lessons?.map((chapter, index) => (
                  <div className="lesson-container-content" key={index}>
                    <div className="lesson-container-content-left">
                      <div className="icon-file">
                        <RiVideoLine />
                      </div>
                      <p className="font-nu text-[14px]">
                        {chapter?.lesson_name}
                      </p>
                    </div>
                    <div className="lesson-container-content-right">
                      <p>{chapter?.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No curriculum data available.</p>
        )}
      </div>
    </div>
  );
}

export default Curriculum;
