import React, { useEffect, useState } from "react";
import "./Curriculum.css";
import arrowIcon from "../../Assets/arrow.png";
import folderIcon from "../../Assets/folder.png";
import { BASE_URL } from "../../Api/api";
import { useParams } from "react-router-dom";
import { RiVideoLine } from "react-icons/ri";
import { getVideoDuration } from "../../helpers/helper_function";

function Curriculum() {
  const [clicked, setclicked] = useState(false);
  const [Data, setData] = useState();
  const params = useParams();

  function ClickSection(id) {
    if (!clicked) {
      setclicked(true);
      let inner = document.getElementById(id);
      let arrow = document.getElementById(`arrow${id}`);
      // console.log(inner);
      // inner.style
      arrow.style.transform = "rotate(0deg)";
      // console.log(inner);
      inner.style.display = "none";
    } else {
      setclicked(false);
      let inner = document.getElementById(id);
      let arrow = document.getElementById(`arrow${id}`);
      // console.log(inner);
      // inner.style
      arrow.style.transform = "rotate(180deg)";
      inner.style.display = "flex";
    }
  }

  useEffect(() => {
    async function Fetchdata() {
      try {
        let url = BASE_URL + "/course/" + params.slug;
        const data = await fetch(url);
        const response = await data.json();
        // console.log(response);
        setData(response.course);
      } catch (error) {
        console.log(error);
      }
      // console.log(response.course.curriculum);
      // setVideoUrl(response?.course?.curriculum[0]?.lessons[0]?.video);
    }
    Fetchdata();

    getVideoDuration(
      "https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/assets/1711955663670-001.mp4"
    )
      .then((duration) => {
        console.log("Video duration:", duration);
      })
      .catch((error) => {
        console.error("Error fetching video duration:", error);
      });
  }, []);

  return (
    <div className="curriculum font-nu" id="curriculum">
      <p className="curriculum-content">
        Fast track your journey to become a skilled developer in just 6 months
        with our best Full Stack Developer Course.
      </p>

      <div className="curriculum-lessons">
        {/* lesson container - 1 */}
        {Data?.curriculum?.map((val, ind) => {
          return (
            <>
              <div className="lesson-container" key={ind}>
                <div
                  className="lesson-container-title"
                  onClick={() => ClickSection(ind + 1)}
                >
                  <div className="lesson-container-title-left">
                    <div className="icon-arrow">
                      <img src={arrowIcon} id={`arrow${ind + 1}`} />
                    </div>
                    <p>{val.chapter_name}</p>
                  </div>

                  <div className="lesson-container-title-right">
                    <p>{val?.lessons?.length} lessons</p>
                    <p>45 Mins</p>
                  </div>
                </div>

                <div className="lesson-container-contents hidden" id={ind + 1}>
                  {val?.lessons.map((chapter, index) => {
                    return (
                      <>
                        <div className="lesson-container-content">
                          <div className="lesson-container-content-left">
                            <div className="icon-file">
                              <RiVideoLine />
                            </div>
                            <p className="font-nu text-[14px]">
                              {chapter?.lesson_name}
                            </p>
                            <h5></h5>
                          </div>
                          <div className="lesson-container-content-right">
                            {/* <button>Preview</button> */}
                            <p>{chapter?.duration}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Curriculum;
