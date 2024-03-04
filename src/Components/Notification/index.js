import { useState } from "react";
import { Link } from "react-router-dom";
import NotificationIns from "../NotificationIns/NotificationIns";
import NotificationStu from "../NotificationStu/NotificationStu";
export default function Notification(){
    const [showpage, setshowpage] = useState('instructor')
    return(<>
    <div className="min-h-screen">
        <div className="h-24 bg-black w-full flex items-center ">
            <div>
            <div className="flex w-60 text-white justify-between ml-4">
                <Link to='' className="h-8 w-8 bg-white rounded-full flex justify-center items-center"> <img src="../Icons/leftsidearrow.svg" alt="left-arrow"></img></Link>
                <div className="font-outfit text-3xl font-semibold">Notifications</div>
            </div>
            <div className='flex text-white font-outfit space-x-12 pl-24 mt-5'>
            <button className='pb-1' onClick={()=>setshowpage('instructor')} style={{ borderBottom: showpage === 'instructor' ? "2px solid white" : "1px solid transparent" }}>Instructor</button>
            <button onClick={()=>setshowpage('students')} style={{ borderBottom: showpage === 'students' ? "2px solid white" : "1px solid transparent" }} className='pb-1'>Student</button>
        </div>
        </div>

        </div>
        {showpage==='instructor'?<NotificationIns/>:<NotificationStu/>}

    </div>
    </>)
}