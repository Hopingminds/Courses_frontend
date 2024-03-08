import React from 'react'
import "./Instructor.css"
import instructorImg from "../../Assets/instructor.png";
import studentsIcon from "../../Assets/students.png";
import lessonsIcon from "../../Assets/lessons.png";
import Icon1 from "../../Assets/icon1.png";
import Icon2 from "../../Assets/icon2.png";
import Icon3 from "../../Assets/icon3.png";
import Icon4 from "../../Assets/icon4.png";
import Icon5 from "../../Assets/icon5.png";


function Instructor(props) {

  const iconPaths = [Icon1, Icon2, Icon3, Icon4, Icon5];
let {data}=props
// console.log(data);
  return (
    <div className='instructor' id='Instructor'>

      <div className='instructor-container'>

        <div className='instructor-image'>
          <img src={data?.instructor?.profile} />
        </div>

        <div className='instructor-content'>

          <p>{data?.instructor?.firstName} {data?.instructor?.lastName}</p>
          {/* <p>{data?.instructor?.about}</p> */}

          <div className='students'>
            <img src={studentsIcon} />
            <p>{data?.enrollments/1000}k Students</p>
          </div>

          <div className='lessons'>
            <img src={lessonsIcon} />
            <p>{data?.total_lessons} Lessons</p>
          </div>
        </div>
      </div>

      <p className='font-mons'>{data?.instructor?.about}</p>

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
