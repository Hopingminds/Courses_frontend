import { useEffect, useState } from 'react';
import './MLheader.css';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { BASE_URL } from '../../Api/api';

export default function Header() {
    const navigate = useNavigate()
    const [purchasedCourses, setPurchasedCourses] = useState();
    const [showpage, setshowpage] = useState('courses');




    return (
        <div className='MLheader px-[5%] pt-[4%] flex flex-col space-y-8 '>
            <div>
                <p className='font-pop text-white font-semibold text-[44px]'>My Learning</p>
            </div>
            <div className='flex space-x-14 '>
                <button className='font-pop font-medium text-white text-[17px]' onClick={() => setshowpage('courses')} style={{ borderBottom: showpage === 'courses' ? "2px solid white" : "1px solid transparent" }}>My Courses</button>
                <button className='font-pop font-medium text-white text-[17px]' onClick={() => setshowpage('assignments')} style={{ borderBottom: showpage === 'assignments' ? "2px solid white" : "1px solid transparent" }}>Assignment</button>
                <button className='font-pop font-medium text-white text-[17px]' onClick={() => setshowpage('wishlist')} style={{ borderBottom: showpage === 'wishlist' ? "2px solid white" : "1px solid transparent" }}>Wishlist</button>
                <button className='font-pop font-medium text-white text-[17px]' onClick={() => setshowpage('certificate')} style={{ borderBottom: showpage === 'certificate' ? "2px solid white" : "1px solid transparent" }}>Certifications</button>
            </div>
        </div>
    );
}