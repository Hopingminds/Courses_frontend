import React, { useEffect, useState } from "react";
import "./Instructor.css";
import studentsIcon from "../../Assets/students.png";
import lessonsIcon from "../../Assets/lessons.png";
import Icon1 from "../../Assets/icon1.png";
import Icon2 from "../../Assets/icon2.png";
import Icon3 from "../../Assets/icon3.png";
import Icon4 from "../../Assets/icon4.png";
import Icon5 from "../../Assets/icon5.png";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Api/api";

function Instructor() {
  const iconPaths = [Icon1, Icon2, Icon3, Icon4, Icon5];
  const [Data, setData] = useState();
  const params = useParams();
  useEffect(() => {
    async function Fetchdata() {
      try {
        let url = BASE_URL + "/course/" + params.slug;
        const data = await fetch(url);
        const response = await data.json();
        // console.log(response);
        setData(response?.course);
      } catch (error) {
        console.log(error);
      }
      // console.log(response.course.curriculum);
      // setVideoUrl(response?.course?.curriculum[0]?.lessons[0]?.video);
    }
    Fetchdata();
  }, []);
  return (
    <div className="instructor  bg-[#FFFFFF] text-black sm:p-4 p-4" id="Instructor ">
      <div className="instructor-container">
        <div className="instructor-image">
          <img src={Data?.instructor?.profile} />
        </div>

        <div className="instructor-content space-y-2 xsm:space-y-0 md:space-y-1">
          <p className="font-mons font-semibold text-[22px] text-black xsm:text-[12px]">
            {Data?.instructor?.name}
          </p>
          {/* <p className='text-[14px]'>{Data?.instructor.about}</p> */}

          <div className="students text-black">
            <img alt="" src={studentsIcon} />
           
            <p>{Data?.instructor?.noOfStudents ? 4000+Data?.instructor?.noOfStudents:4000} Students</p>
          </div>

          {/* <div className="lessons text-black">
            <img alt="" src={lessonsIcon} />
            <p>20 Lessons</p>
          </div> */}
        </div>
      </div>

      <p className="text-[14px] text-black xsm:text-justify xsm:text-[12px]">{Data?.instructor?.bio}</p>
      <ul className="text-[14px] space-y-1 list-disc list-disc-custom font-mons mt-1">
       
        {Data?.instructor?.experience ? <li><strong>Experience </strong>{Data?.instructor?.experience} </li>:''}
        <li><strong>Extensive Expertise </strong>{Data?.instructor?.experties}</li>
        <li><strong>Prior Working Experience </strong>{Data?.instructor?.workExperience}</li>
        
      </ul>
      {/* <div className='links'>
        <p>Follow: </p>
        {iconPaths.map((icon, index) => (
            <img key={index} src={icon}/>
          ))}
      </div> */}
    </div>
  );
}

export default Instructor;
