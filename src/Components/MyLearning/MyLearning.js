import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Mycourse from './Mycourse';
import './MLheader.css';
import Assignment from './Assignment';
import WishList from './WishList';
import Certificate from './Certificate';
import RecommendedCourses from '../RecommendedCourses/RecommendedCourses';
import MyStats from './MyStats';
import Close from "../../Assests/Images/close.png";

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
import JobOffering from './jobOffering';

export default function MyLearning() {
    const navigate = useNavigate()
    const [show, setshow] = useState(false)
    const [showPopup, setShowPopup] = useState(true);
    const [showpage, setshowpage] = useState('courses');
    const [purchasedCourses, setPurchasedCourses] = useState();
    const { userDetail, getUserDetails } = useContext(Globalinfo);
    console.log(userDetail)

    // console.log(userDetail?.name?.split(" ")[0])
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

    useEffect(() => {
        setShowPopup(true);
    }, []);


    return (
        <div>
            <Toaster />

            {showPopup && (
                <div className="fixed inset-0 z-50 bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center">
                    <div className="fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white flex flex-col gap-6 py-[3%] px-[3%] drop-shadow-xl rounded-xl w-[40%] h-[50%] xsm:py-2 xsm:px-4 xsm:bottom-6 md:bottom-8 md:py-3 md:px-5">
                        <div className='flex justify-end'>
                            <button onClick={() => setShowPopup(false)}><img src={Close} /></button>
                        </div>
                        <div className='flex flex-col gap-2 text-center px-[6%]'>
                            <p className='font-pop font-semibold text-[40px] text-[#1DBF73]'>Complete Your Profile!</p>
                            <p className='font-mons '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incaliquip ex ea commodo consequat.</p>
                        </div>
                        <Link to='/profile' className='flex justify-center'>
                            <button className='font-pop font-semibold text-[16px] text-white bg-[#1DBF73] rounded-lg p-4'>Complete Now</button>
                        </Link>
                    </div>
                </div>
            )}


            <head>
                <title>
                    MyLearing | HopingMinds
                </title>
            </head>
            <div className='MLheader px-[5%] pt-14 flex flex-col space-y-8 xsm:pt-0 xsm:space-y-3 xsm:justify-end xsm:py-1 md:space-y-6 md:pt-12'>
                <div>
                    <p className='font-pop text-white font-semibold text-[44px] xsm:text-[10px] capitalize md:text-[34px]'>{`${userDetail?.name?.split(" ")[0]}'s Learning`}</p>
                </div>
                <div className='flex space-x-14 xsm:space-x-4 md:space-x-10'>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px] md:text-[14px]' onClick={() => setshowpage('courses')} style={{ borderBottom: showpage === 'courses' ? "2px solid white" : "1px solid transparent" }}>My Courses</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px] md:text-[14px]' onClick={() => setshowpage('assignments')} style={{ borderBottom: showpage === 'assignments' ? "2px solid white" : "1px solid transparent" }}>Assignment</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px] md:text-[14px]' onClick={() => setshowpage('wishlist')} style={{ borderBottom: showpage === 'wishlist' ? "2px solid white" : "1px solid transparent" }}>Wishlist</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px] md:text-[14px]' onClick={() => setshowpage('certificate')} style={{ borderBottom: showpage === 'certificate' ? "2px solid white" : "1px solid transparent" }}>Certifications</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px] md:text-[14px]' onClick={() => setshowpage('stats')} style={{ borderBottom: showpage === 'stats' ? "2px solid white" : "1px solid transparent" }}>My Stats</button>
                    <button className='font-pop font-medium text-white text-[17px] xsm:text-[6px] md:text-[14px]' onClick={() => setshowpage('job')} style={{ borderBottom: showpage === 'job' ? "2px solid white" : "1px solid transparent" }}>Job Offering</button>
                </div>
            </div>
            {show ? <div className='w-full h-screen fixed top-0 left-0 bg-[#b4cca1]'>
                <Spinner className='' />

            </div> : ''}
            {showpage === 'courses' ? <Mycourse courses={purchasedCourses} /> : showpage === 'wishlist' ? <WishList /> : showpage === 'certificate' ? <Certificate courses={purchasedCourses} /> : showpage === 'stats' ? <MyStats courses={purchasedCourses} /> : showpage === 'stats' ? <Assignment courses={purchasedCourses} /> : <JobOffering courses={purchasedCourses} />}
            <RecommendedCourses className={'bg-[#E2FFF1]'} />
        </div>
    );
}