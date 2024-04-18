import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './modules.css'
import { useRef, useState } from "react";
export default function Modules(){
    const modulesContainerRef = useRef(null);

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
          
            <div className="text-xl font-semibold text-gray-700">Modules</div>
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
                
                <Link to='/questions' className="w-full p-5 border  flex justify-between items-center rounded-xl">
                    <div className="space-y-1 ">
                        <div className="font-[500]">Module 1</div>
                        <div className="font-semibold text-xl">Intro + Print statements</div>
                        <div className="flex  items-center  space-x-2">
                        <div style={{ width: "25px" }}>
                         <CircularProgressbar  value={20} maxValue={100} />
                        </div>
                            <div className="text-sm text-gray-500">ASSIGNMENTS SCORE : 25/50</div>
                        </div>
                        <div className="text-gray-400">You need to score 550 by solving assignments to be eligible for the coding test.</div>

                    </div>

                    <FaGreaterThan className="text-3xl text-gray-500 font-extralight"/>
                </Link>
                <Link to='/questions' className="w-full p-5 border  flex justify-between items-center rounded-xl">
                    <div className="space-y-1 ">
                        <div className="font-[500]">Module 1</div>
                        <div className="font-semibold text-xl">Intro + Print statements</div>
                        <div className="flex  items-center  space-x-2">
                        <div style={{ width: "25px" }}>
                         <CircularProgressbar  value={20} maxValue={100} />
                        </div>
                            <div className="text-sm text-gray-500">ASSIGNMENTS SCORE : 25/50</div>
                        </div>
                        <div className="text-gray-400">You need to score 550 by solving assignments to be eligible for the coding test.</div>

                    </div>

                    <FaGreaterThan className="text-3xl text-gray-500 font-extralight"/>
                </Link>
                <Link to='/questions' className="w-full p-5 border  flex justify-between items-center rounded-xl">
                    <div className="space-y-1 ">
                        <div className="font-[500]">Module 1</div>
                        <div className="font-semibold text-xl">Intro + Print statements</div>
                        <div className="flex  items-center  space-x-2">
                        <div style={{ width: "25px" }}>
                         <CircularProgressbar  value={20} maxValue={100} />
                        </div>
                            <div className="text-sm text-gray-500">ASSIGNMENTS SCORE : 25/50</div>
                        </div>
                        <div className="text-gray-400">You need to score 550 by solving assignments to be eligible for the coding test.</div>

                    </div>

                    <FaGreaterThan className="text-3xl text-gray-500 font-extralight"/>
                </Link>



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
    </div>

    </>)
}