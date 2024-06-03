import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Api/api';
import { Link, useNavigate } from 'react-router-dom';

const CNAssessment = () => {
    const [assessmentdata, setassessmentdata] = useState([]);
    // const [show, setshow] = useState(false);
    // const [Completed, setCompleted] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        async function Fetchdata() {
            try {
                let token = localStorage.getItem("COURSES_USER_TOKEN");
                // setshow(true);
                let url = BASE_URL + "/getallmodules";
                const data = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                });
                const response = await data.json();
                // console.log(response);
                // setCompleted(response?.isTestCompleted);
                if (response.success) {
                // setshow(false);
                localStorage.setItem('history',window.location.pathname);
                }
                console.log(response?.data);
                console.log(response?.[0]?.module_name);
                setassessmentdata(response?.data);
                // setshow(false)
            } catch (error) {
                console.log(error);
            }
        }
        Fetchdata();
    }, []);

    return (
        <div className="bg-[#FFFFFF] min-h-[425px] rounded-b-[20px] px-[30px] py-[24px]  flex flex-col gap-3 items-center ">
            <div className="grid grid-cols-[1fr,1fr,1fr,1fr] w-full bg-[#E2FFF1] py-4 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm md:text-[12px] md:p-3">
                <p className="font-pop font-bold text-center grid">Topic</p>
                <p className="font-pop font-bold text-center">Due Date</p>
                <p className="font-pop font-bold text-center">Time</p>
                <p className="font-pop font-bold text-center">Action</p>
            </div>
            {assessmentdata?.map((item, ind) => (
                <div key={ind} className="grid grid-cols-[1fr,1fr,1fr,1fr] w-full border border-[#E2FFF1] py-2 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm md:text-[12px] md:p-3">
                    <p className="font-pop font-medium text-center grid">{item.module_name}</p>
                    <p className="font-pop font-medium text-center">12/6/23</p>
                    {/* <p className="font-pop font-medium text-center">{!item?.isTestCompleted?0:1}</p> */}
                    <p className="font-pop font-medium text-center">11:59 PM</p>
                    {!item?.isModuleCompleted
                        ?
                            (<Link to={`/questions?module_id=${item._id}&index=1`} className="font-pop font-medium text-center">Start</Link>)
                        :
                            (<p className="font-pop font-medium text-center text-[#1FC074]">Completed</p>)
                    }
                    
                </div>
            ))}
        </div>
    )
}

export default CNAssessment