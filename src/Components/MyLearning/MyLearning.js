import { useState, useEffect, useContext } from 'react';
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
import Spinner from '../Spinner';
import { useLayoutEffect } from 'react';
import { authenticateUser } from '../../helpers/helperapi'
import toast, { Toaster } from 'react-hot-toast';
import { Globalinfo } from '../../App';

export default function MyLearning() {
    const navigate = useNavigate()
    const [show, setshow] = useState(false)
    const [showpage, setshowpage] = useState('courses');
    const [purchasedCourses, setPurchasedCourses] = useState();
    const { userDetail, getUserDetails } = useContext(Globalinfo);

    console.log(userDetail.name.split(" ")[0])
    const checkUserValidation = async () => {
        const isValidUser = await authenticateUser()
        console.log(isValidUser)
        if (isValidUser !== 200) {
            localStorage.removeItem('COURSES_USER_TOKEN');
            navigate('/login')
            toast.error('You have been Logged Out')
        }
    }

    useLayoutEffect(() => {
        checkUserValidation()
    }, [])

    const fetchUserData = async (email) => {
        setshow(true)
        try {
            const res = await axios.get(`${BASE_URL}/user/${email}`)
            // console.log(res.data[0]?.purchased_courses)
            setPurchasedCourses(res?.data?.userDetails?.purchased_courses)
            setshow(false)

        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        let login = localStorage.getItem('COURSES_USER_TOKEN')
        // console.log(login)
        if (!login) {
            navigate('/login')
        }
        else {
            const token = localStorage.getItem('COURSES_USER_TOKEN');
            const decoded = jwtDecode(token);
            // console.log(decoded)
            fetchUserData(decoded?.email)
        }
    }, [])



    return (
        <div>
            <Toaster />
            <head>
                <title>
                    MyLearing | HopingMinds
                </title>
            </head>
            <div className='MLheader px-[5%] pt-14 flex flex-col space-y-8 xsm:pt-0 xsm:space-y-3 xsm:justify-end xsm:py-1'>
                <div>
                    <p className='font-pop text-white font-semibold text-[44px] xsm:text-[10px] capitalize'>{`${userDetail.name.split(" ")[0]}'s Learning`}</p>
                </div>
                <div className='flex space-x-14 xsm:space-x-4'>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px]' onClick={() => setshowpage('courses')} style={{ borderBottom: showpage === 'courses' ? "2px solid white" : "1px solid transparent" }}>My Courses</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px]' onClick={() => setshowpage('assignments')} style={{ borderBottom: showpage === 'assignments' ? "2px solid white" : "1px solid transparent" }}>Assignment</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px]' onClick={() => setshowpage('wishlist')} style={{ borderBottom: showpage === 'wishlist' ? "2px solid white" : "1px solid transparent" }}>Wishlist</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px]' onClick={() => setshowpage('certificate')} style={{ borderBottom: showpage === 'certificate' ? "2px solid white" : "1px solid transparent" }}>Certifications</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px]' onClick={() => setshowpage('stats')} style={{ borderBottom: showpage === 'stats' ? "2px solid white" : "1px solid transparent" }}>My Stats</button>
                </div>
            </div>
            {show ? <div className='w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80'>
                <Spinner className='' />

            </div> : ''}
            {showpage === 'courses' ? <Mycourse courses={purchasedCourses} /> : showpage === 'wishlist' ? <WishList /> : showpage === 'certificate' ? <Certificate courses={purchasedCourses} /> : showpage === 'stats' ? <MyStats courses={purchasedCourses} /> : <Assignment courses={purchasedCourses} />}
            <RecommendedCourses className={'bg-[#E2FFF1]'} />
        </div>
    );
}