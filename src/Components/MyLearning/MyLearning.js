import { useState, useEffect } from 'react';
import Mycourse from './Mycourse';
import './MLheader.css';
import Assignment from './Assignment';
import WishList from './WishList';
import Certificate from './Certificate';
import RecommendedCourses from '../RecommendedCourses/RecommendedCourses';
import MyStats from './MyStats';

import './MLheader.css';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { BASE_URL } from '../../Api/api';

export default function MyLearning() {
    const navigate = useNavigate()
    const [showpage, setshowpage] = useState('courses');
    const [purchasedCourses, setPurchasedCourses] = useState();

    useEffect(() => {
        let login = localStorage.getItem('COURSES_USER_TOKEN')
        console.log(login)
        if (!login) {
            navigate('/login')
        }
        else {
            const token = localStorage.getItem('COURSES_USER_TOKEN');
            const decoded = jwtDecode(token);
            console.log(decoded)
            fetchUserData(decoded?.email)
        }
    }, [])

    const fetchUserData = async (email) => {
        // setshow(true)
        try {
            const res = await axios.get(`${BASE_URL}/user/${email}`)
            // console.log(res.data[0]?.purchased_courses)
            setPurchasedCourses(res?.data?.userDetails?.purchased_courses)
            console.log(res);
            // setshow(false)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <head>
                <title>
                    MyLearing | HopingMinds
                </title>
            </head>
            <div className='MLheader px-[5%] pt-14 flex flex-col space-y-8 xsm:pt-0 xsm:space-y-3 xsm:justify-end xsm:py-1'>
                <div>
                    <p className='font-pop text-white font-semibold text-[44px] xsm:text-[10px]'>My Learning</p>
                </div>
                <div className='flex space-x-14 xsm:space-x-4'>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px]' onClick={() => setshowpage('courses')} style={{ borderBottom: showpage === 'courses' ? "2px solid white" : "1px solid transparent" }}>My Courses</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px]' onClick={() => setshowpage('assignments')} style={{ borderBottom: showpage === 'assignments' ? "2px solid white" : "1px solid transparent" }}>Assignment</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px]' onClick={() => setshowpage('wishlist')} style={{ borderBottom: showpage === 'wishlist' ? "2px solid white" : "1px solid transparent" }}>Wishlist</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px]' onClick={() => setshowpage('certificate')} style={{ borderBottom: showpage === 'certificate' ? "2px solid white" : "1px solid transparent" }}>Certifications</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px]' onClick={() => setshowpage('stats')} style={{ borderBottom: showpage === 'stats' ? "2px solid white" : "1px solid transparent" }}>My Stats</button>
                </div>
            </div>
            {showpage === 'courses' ? <Mycourse courses={purchasedCourses} /> : showpage === 'wishlist' ? <WishList /> : showpage === 'certificate' ? <Certificate courses={purchasedCourses}/> : showpage === 'stats' ? <MyStats /> : <Assignment />}
            <RecommendedCourses />
        </div>
    );
}