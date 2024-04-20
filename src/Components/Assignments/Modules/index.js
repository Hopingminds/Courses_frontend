import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { FaGreaterThan } from "react-icons/fa6";
import { PiWarningOctagonBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import './modules.css'
import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../../../Api/api";
import Spinner from "../../Spinner";
export default function Modules(){
    const modulesContainerRef = useRef(null);
    const [modulesdata, setmodulesdata] = useState([])
    const [show, setshow] = useState(false)
    const [Completed, setCompleted] = useState(false)
    const [index, setindex] = useState(1)
    useEffect(() => {
     async function Fetchdata(){
        try {
            let token=localStorage.getItem('COURSES_USER_TOKEN')
            setshow(true)
            let url=BASE_URL+'/getallmodules'
            const data = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const response=await data.json();
            console.log(response);
            setCompleted(response?.isTestCompleted)
            if(response.success){
                setshow(false)
            }
            // console.log(response);
            setmodulesdata(response?.data)
            // setshow(false)
        } catch (error) {
            console.log(error);
        }
        
     }
     Fetchdata()
    }, [])
    
    const handleStartButtonClick = () => {
        // Scroll the modules container to the top
        if (modulesContainerRef.current) {
            modulesContainerRef.current.scrollTop = 0;
            // modulesContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(<>
    <div className="w-full flex justify-between px-[5%] py-5">
        <div className="w-[35%] h-[85vh] bg-[#d8f7e8] p-[2%] space-y-2 rounded-xl ">
            <div className="text-3xl font-bold text-center">Pay After Placement</div>
            <div className="mt-2">Enroll in our courses without paying any fees upfront</div>
            
            <div className="flex flex-col gap-y-10 py-2">
            <div className="flex justify-between py-5">
                <div className="h-9 w-9 bg-black text-white flex justify-center items-center rounded-full">1</div>
                <div className="w-[85%] space-y-1 ">
                    <div className="font-semibold text-lg">Solve Assignments</div>
                    <div className="text-sm">You should complete assignments & score 550 to be eligible for the Coding Test</div>
                    <button className="w-[50%] p-2 bg-[#1DBF73] text-white rounded-lg" onClick={handleStartButtonClick}>Start</button>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="h-9 w-9 bg-black text-white flex justify-center items-center rounded-full">2</div>
                <div className="w-[85%]">
                    <div className="font-semibold text-lg">Coding Test</div>
                    <div className="text-sm">DEADLINE: 16TH APR, 11:59 PM</div>
                </div>
            </div>
            </div>
        </div>

        <div className="w-[62%] h-[85vh]  p-2 space-y-5 overflow-y-auto modules" ref={modulesContainerRef}>
            <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-gray-700">Modules</div>
                {Completed?<Link to='/result' className="bg-[#1DBF73] text-white p-2 rounded">View result</Link>:''}

            </div>
            <div className="flex flex-col space-y-5">
                <div className="w-full border bg-gray-200 p-5  rounded-xl space-y-3">
                    <div className="font-semibold">Assignments Score Tracker</div>
                    <div className="h-8 bg-white text-[#1DBF73] flex pl-5 items-center rounded-lg">
                    Your current score is 25
                    </div>
                    <div className="flex justify-between text-sm">
                        <div>You need to score 550 by solving assignments to be eligible for the coding test.</div>
                        <div>Max Score : 550</div>
                    </div>
                </div>
                {
                    modulesdata?.map((item,ind)=>{
                        return(<>
                         <Link to={`/questions?module_id=${item._id}&index=1`} className="w-full p-5 border  flex justify-between items-center rounded-xl">
                    <div className="space-y-1 w-full">
                        <div className="flex justify-between w-full">
                            <div className="font-[500]">Module {ind+1}</div>
                            {
                                item?.isModuleCompleted?<div className="flex items-center space-x-2">
                                <FaCheckCircle className="bg-[#1DBF73] rounded-full text-2xl text-white"/>
                                <p>Completed</p>
                                </div>:<div className="flex items-center space-x-2">
                            <PiWarningOctagonBold  className="bg-red-500 rounded-full text-2xl text-white"/>
                            <p>Incomplete</p>
                            </div>
                              }
                            
                        </div>
                        <div className="font-semibold text-xl">{item.module_name}</div>
                        <div className="flex  items-center  space-x-2">
                        <div style={{ width: "25px" }}>
                         <CircularProgressbar  value={item?.progress} maxValue={100} />
                        </div>
                            <div className="text-sm text-gray-500">Progress : {item?.progress}%</div>
                        </div>
                        <div className="text-gray-400">{item.module_description}</div>

                    </div>

                    <FaGreaterThan className="text-3xl text-gray-500 font-extralight"/>
                </Link>
                        </>)
                    })
                }
            </div>

            <div className="w-full border rounded-t-xl">
                <div className="p-5 bg-[#1DBF73] text-white rounded-t-xl">
                    <div className="text-xs">PAY AFTER PLACEMENT</div>
                    <div className="text-lg">Selection list : April Batch</div>
                    <div className="text-sm">Check out the list of Top performers</div>
                </div>

                <div className="w-[40%] flex flex-col justify-between p-5" >
                    <div className="flex justify-between w-[48%]">
                        <div>#</div>
                        <div>Student</div>
                    </div>

                    <div className="flex justify-between w-full my-2">
                        <div>1</div>
                        <div>Davinder(828*******95)</div>
                    </div>
                    <div className="flex justify-between w-full my-2">
                        <div>1</div>
                        <div>Davinder(828*******95)</div>
                    </div>
                    <div className="flex justify-between w-full my-2">
                        <div>1</div>
                        <div>Davinder(828*******95)</div>
                    </div>
                </div>
            </div>
        </div>
        {show ? (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
          <Spinner className="" />
        </div>
      ) : (
        ""
      )}
    </div>

    </>)
}