import { useState } from 'react'
import { ReactComponent as Arrow } from '../../Assets/Icons/arrow.svg'
import Mycourses from './my_courses'
import WishlistContent from './wishlistContent'

export default function My_learning(){
    const [showpage, setshowpage] = useState('courses')
    // const Borders={
    //     "courses":
    // }
    return(<>
    <div className="h-44 bg-black w-full pl-2 pt-2">
        <Arrow/>
        <div className='text-6xl text-white font-outfit pl-20 font-semibold'>My Learning</div>
        <div className='flex text-white font-outfit space-x-12 pl-24 mt-5'>
            <button className='pb-1' onClick={()=>setshowpage('courses')} style={{ borderBottom: showpage === 'courses' ? "2px solid white" : "1px solid transparent" }}>My Courses</button>
            <button className='pb-1'>Assignments</button>
            <button className='pb-1'>Archived</button>
            <button className='pb-1' style={{ borderBottom: showpage === 'wishlist' ? "2px solid white" : "1px solid transparent" }}  onClick={()=>setshowpage('wishlist')}>Wishlist</button>
        </div>
    </div>
    {showpage==='courses'?<Mycourses/>:showpage==='wishlist'?<WishlistContent/>:''}
    </>)
}