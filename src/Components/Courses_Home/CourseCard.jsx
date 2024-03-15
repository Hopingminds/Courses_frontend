import React from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Clock } from '../../Assets/Icons/clock.svg'
import { ReactComponent as Design } from '../../Assets/Icons/design.svg'

const CourseCard = ({ title,price, duration, image, onClick, isSelected, category }) => {
  return (
    <Link style={{padding:'12px'}} to={`/`} className={`max-w-sm font-pop rounded-xl  coursecardhome m-4  bg-white  ${isSelected ? 'border-2 border-blue-500' : ''}`}>
      <img 
      style={{height:'10rem'}}
        className="w-full  rounded-lg"
        src={image}
        alt="Course"
      />
      <div className='flex justify-between items-center text-[#696984] mt-2'>
        <div className='flex space-x-2 items-center'>
          <Design/>
          <span className=''>Design</span>
        </div>
        <div className=' flex items-center space-x-2'>
          <Clock/>
          <p> {duration}</p>
        </div>
      </div>
      <div className="px-2 py-5 mt-2 space-y-2 ">
        <div style={{color:'#252641'}} className="font-bold text-lg mb-2 ">{title}</div>
        <div className='text-[#696984]'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</div>
       <div className='flex justify-between items-center'>
       <div className='flex items-center space-x-2'>
        <img src='/lina.png' className='h-14 w-14'/>
        <div className='font-semibold'>Lina</div>
        </div>
        <div style={{color:'#49BBBD'}} className='text-[20px] font-semibold'>₹250</div>
       </div>
      </div>
    </Link>
  );
};

export default CourseCard;
