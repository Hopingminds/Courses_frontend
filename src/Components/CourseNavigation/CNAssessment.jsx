import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Api/api';
import { Link, useNavigate } from 'react-router-dom';

const CNAssessment = ({slug}) => {
    const [assessmentdata, setassessmentdata] = useState([]);
    // const [show, setshow] = useState(false);
    // const [Completed, setCompleted] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        async function Fetchdata() {
            try {
                let token = localStorage.getItem("COURSES_USER_TOKEN");
                // setshow(true);
                if(token){
                    let url = BASE_URL + "/courseassessments/"+slug;
                    const data = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    });
                    const response = await data.json();
                    setassessmentdata(response?.assessments);
                }
               
                // setshow(false)
            } catch (error) {
                console.log(error);
            }
        }
        Fetchdata();
    }, []);

    function Time(dateString) {
        const date = new Date(dateString);
    
        // Get local hours and minutes
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
    
        // Determine AM/PM
        const ampm = hours >= 12 ? 'PM' : 'AM';
    
        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // The hour '0' should be '12'
    
        // Format hours
        hours = String(hours).padStart(2, '0');
    
        // Format the date and time string
        const time = `${hours}:${minutes} ${ampm}`;
        return time;
    }
    
    function isDateBeforeNow(start,end) {
        const startdate = new Date(start);
        const enddate = new Date(end);
        const now = new Date();
        return startdate <= now && enddate>=now;
      }

    return (
        <div className="bg-[#FFFFFF] min-h-[425px] rounded-b-[20px] px-[30px] py-[24px]  flex flex-col gap-3 items-center ">
            <div className="grid grid-cols-[1fr,1fr,1fr,1fr] w-full bg-[#E2FFF1] py-4 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm md:text-[12px] sm:text-[12px] md:p-3">
                <p className="font-pop font-bold text-center grid">Topic</p>
                <p className="font-pop font-bold text-center">Due Date</p>
                <p className="font-pop font-bold text-center">Time</p>
                <p className="font-pop font-bold text-center">Action</p>
            </div>
            {assessmentdata?.length ? assessmentdata?.map((item, ind) => (
                <div key={ind} className="grid grid-cols-[1fr,1fr,1fr,1fr] w-full border border-[#E2FFF1] py-2 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm md:text-[12px] sm:text-[12px] md:p-3">
                    <p className="font-pop font-medium text-center grid">{item?.assessmentName}</p>
                    <p className="font-pop font-medium text-center">{item?.lastDate?.split("T")[0]}</p>
                    {/* <p className="font-pop font-medium text-center">{!item?.isTestCompleted?0:1}</p> */}
                    <p className="font-pop font-medium text-center">{Time(item?.lastDate)}</p>

                    {
                    item?.resultDetails?.isSubmitted ? (<p className="font-pop font-medium text-center text-[#1FC074]">Completed</p>)
                    : isDateBeforeNow(item?.startDate,item?.lastDate)
                        ?
                            (<Link to={`/assessmentinstruction?assessmentId=${item?._id}&pr=${item?.isProtected}1&t=${item?.timelimit}`} className="font-pop font-medium text-center">Start</Link>)
                        :
                            (<p className="font-pop font-medium text-center text-[#868585]">Expired</p>)
                    }
                    
                </div>
            )):
            
            <div className='font-bold text-2xl mt-5'>No assessment found</div>
            
        } 
        </div>
    )
}

export default CNAssessment