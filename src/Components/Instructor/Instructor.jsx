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


function Instructor() {

  const iconPaths = [Icon1, Icon2, Icon3, Icon4, Icon5];

  return (
    <div className='instructor  bg-[#E2FFF1]' id='Instructor'>

      <div className='instructor-container'>

        <div className='instructor-image'>
          <img src={instructorImg} />
        </div>

        <div className='instructor-content space-y-2'>

          <p className='font-mons font-semibold text-[22px]'>Anil Sharma</p>
          <p>Anil Sharma is experienced Web Developer He is one of the best educator who has helped multiples students to get placement in multiple companies.</p>

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

      <p className='text-[14px]'>Anil has further experience in many fields and he has working experience of 10+ year and himself worked on many professional projects .</p>

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
