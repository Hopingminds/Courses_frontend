import { useState, useEffect, useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Mycourse from './Mycourse';
import './MLheader.css';
import Assignment from './Assignment';
import WishList from './WishList';
import Certificate from './Certificate';
import RecommendedCourses from '../RecommendedCourses/RecommendedCourses';
import MyStats from './MyStats';
import Close from "../../Assests/Images/close.png";
import Icon from "../../Assests/Images/complete-popup.png";
import Arrow from "../../Assests/Images/complete-arrow.png";

import './MLheader.css';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { AUTH_BASE_URL, BASE_URL } from '../../Api/api';
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
    const [search,setsearch]=useSearchParams()
    const [showpage, setshowpage] = useState('courses');
    const [purchasedCourses, setPurchasedCourses] = useState();
    const { userDetail, getUserDetails } = useContext(Globalinfo);
    const maxPopupDisplays = 2;
    // console.log(userDetail)

    // console.log(userDetail?.name?.split(" ")[0])
    const checkUserValidation = async () => {
        const isValidUser = await authenticateUser()
        console.log(isValidUser)
        if (isValidUser !== 200) {
            localStorage.removeItem('COURSES_USER_TOKEN');
            toast.error('You have been Logged Out')
            window.open(
                `${AUTH_BASE_URL}/logout`,
                "_self"
            );
        }
    }

    useLayoutEffect(() => {
        checkUserValidation()
    }, [])
    useEffect(() => {
     if(search.get('tab')){
        setshowpage(search.get('tab'))
     }
    }, [])
    

    const fetchUserData = async (email) => {
        setshow(true)
        try {
            const res = await axios.get(`${BASE_URL}/user/${email}`)
            console.log("All Courses purchased",res?.data?.userDetails?.purchased_courses)
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
        const popupCount = parseInt(localStorage.getItem('popupCount') || '0', 10);
        console.log('popupCount:', popupCount);

        if (popupCount < maxPopupDisplays) {
            setShowPopup(true);
            localStorage.setItem('popupCount', popupCount + 1);
            console.log('Popup displayed. New popupCount:', popupCount + 1);
        } else {
            console.log('Popup not displayed. Max count reached.');
            setShowPopup(false); 
        }
    }, []);
    // useEffect(() => {
    //     setShowPopup(true);
    // }, []);


    return (
        <div>
            <Toaster />

            {showPopup && (
                <div className="fixed inset-0 z-50 bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center">
                    <div className="fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white flex flex-col gap-6 py-[3%] px-[3%] drop-shadow-xl rounded-xl w-[40%] h-[60%] md:w-[50%] md:h-[45%] md:gap-4 xsm:gap-4 xsm:w-[70%] xsm:h-[30%]">
                        
                        <div className='flex justify-end'>
                            <button onClick={() => setShowPopup(false)}><img src={Close} className='w-7 h-7 md:w-5 md:h-5 xsm:w-3 xsm:h-3'/></button>
                        </div>
                        <div className='flex justify-center'>
                            <img src={Icon} className='w-14 h-14 md:w-10 md:h-10 xsm:w-6 xsm:h-6'/>
                        </div>
                        <div className='flex flex-col gap-2 text-center px-[5%] md:px-[3%] xsm:px-[3%]'>
                            <p className='font-pop font-semibold text-[32px] text-[##0A2540] md:text-[22px] xsm:text-[12px]'>Complete Your Profile!</p>
                            <p className='font-mons text-[14px] md:text-[12px] xsm:text-[8px]'>Fill out your details to unlock full access and personalized features. Let's get started!</p>
                        </div>
                        <Link to='/profile' className='flex flex-row justify-center'>
                            <button className='font-pop text-[15px] text-[#9099A1] rounded-l-3xl px-6 py-4 w-[50%] text-left border border-[#1DBF73] truncate md:text-[12px] md:py-3 md:px-5 xsm:py-2 xsm:px-4 xsm:text-[8px]'>Complete Your Profile</button>
                            <img src={Arrow} className='w-16 h-14 md:w-14 md:h-12 xsm:w-10 xsm:h-8'/>
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
            {showpage === 'courses' ? <Mycourse courses={purchasedCourses} /> : showpage === 'wishlist' ? <WishList /> : showpage === 'certificate' ? <Certificate courses={purchasedCourses} /> : showpage === 'stats' ? <MyStats courses={purchasedCourses} /> : showpage === 'assignments' ? <Assignment courses={purchasedCourses} /> : <JobOffering courses={purchasedCourses} />}
            <RecommendedCourses className={'bg-[#E2FFF1]'} />
        </div>
    );
}