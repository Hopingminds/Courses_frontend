import React, { useEffect, useState } from 'react'
import "./Instructor.css"
import instructorImg from "../../Assets/instructor.png";
import studentsIcon from "../../Assets/students.png";
import lessonsIcon from "../../Assets/lessons.png";
import Icon1 from "../../Assets/icon1.png";
import Icon2 from "../../Assets/icon2.png";
import Icon3 from "../../Assets/icon3.png";
import Icon4 from "../../Assets/icon4.png";
import Icon5 from "../../Assets/icon5.png";
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../Api/api';


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
        setData(response.course);
      } catch (error) {
        console.log(error);
      }
      // console.log(response.course.curriculum);
      // setVideoUrl(response?.course?.curriculum[0]?.lessons[0]?.video);
    }
    Fetchdata();
  }, []);
  return (
    <div className='instructor  bg-[#E2FFF1]' id='Instructor'>

      <div className='instructor-container'>

        <div className='instructor-image'>
          <img src={instructorImg} />
        </div>

        <div className='instructor-content space-y-2'>

          <p className='font-mons font-semibold text-[22px]'>{Data?.instructor.firstName} {Data?.instructor.lastName}</p>
          {/* <p className='text-[14px]'>{Data?.instructor.about}</p> */}


          <div className='students'>
            <img src={studentsIcon} />
            <p>156 Students</p>
          </div>

          <div className='lessons'>
            <img src={lessonsIcon} />
            <p>20 Lessons</p>
          </div>
        </div>
      </div>

      <p className='text-[14px]'>{Data?.instructor.about}</p>
      <div className='links'>
        <p>Follow: </p>
        {iconPaths.map((icon, index) => (
            <img key={index} src={icon}/>
          ))}
      </div>
      
    </div>
  )
}

export default Instructor
