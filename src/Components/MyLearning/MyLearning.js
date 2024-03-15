import { useState } from 'react';
import Mycourse from './Mycourse';
import './MLheader.css';
import Assignment from './Assignment';
import WishList from './WishList';
import Certificate from './Certificate';
import RecommendedCourses from '../RecommendedCourses/RecommendedCourses';
import MyStats from './MyStats';

export default function MyLearning(){
    const [showpage, setshowpage] = useState('courses');

    return (
        <div>
            <div className='MLheader px-[5%] pt-14 flex flex-col space-y-8 '>
                <div>
                    <p className='font-pop text-white font-semibold text-[44px]'>My Learning</p>
                </div>
                <div className='flex space-x-14 '>
                    <button className='font-pop font-medium text-white text-[17px]' onClick={()=>setshowpage('courses')} style={{ borderBottom: showpage === 'courses' ? "2px solid white" : "1px solid transparent" }}>My Courses</button>
                    <button className='font-pop font-medium text-white text-[17px]' onClick={()=>setshowpage('assignments')} style={{ borderBottom: showpage === 'assignments' ? "2px solid white" : "1px solid transparent" }}>Assignment</button>
                    <button className='font-pop font-medium text-white text-[17px]' onClick={()=>setshowpage('wishlist')} style={{ borderBottom: showpage === 'wishlist' ? "2px solid white" : "1px solid transparent" }}>Wishlist</button>
                    <button className='font-pop font-medium text-white text-[17px]' onClick={()=>setshowpage('certificate')} style={{ borderBottom: showpage === 'certificate' ? "2px solid white" : "1px solid transparent" }}>Certifications</button>
                    <button className='font-pop font-medium text-white text-[17px]' onClick={()=>setshowpage('stats')} style={{ borderBottom: showpage === 'stats' ? "2px solid white" : "1px solid transparent" }}>My Stats</button>
                </div>
            </div>
            {showpage==='courses'?<Mycourse/>:showpage==='wishlist'?<WishList/>:showpage==='certificate'?<Certificate/>:showpage==='stats'?<MyStats/>:<Assignment/>}
            <RecommendedCourses/>
        </div>
    );
}