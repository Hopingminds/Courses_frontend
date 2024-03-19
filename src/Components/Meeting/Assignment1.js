import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Assignment1(){
    return (
        <div>
            <div className="bg-[#E2FFF1] rounded-2xl py-6 px-12 flex justify-between items-center">
                <div className="space-y-2">
                    <p className="font-pop font-semibold text-[22px] text-[#1DBF73]">UX/UI Design </p>
                    <div className="flex space-x-4">
                        <p className="font-pop text-[#1DBF73] text-[14px]">9 Lesson</p>
                        <p className="font-pop text-[#1DBF73] text-[14px]">6h 30min</p>
                    </div>
                </div>
                <div>
                    <CiSettings size={'30'} />
                </div>
            </div>
            <div className="py-6 px-12 border-b space-y-8">
                <p className="font-pop font-medium text-[17px]">Test Your Knowledge on Full Stack Development</p>
                <div className="flex justify-between">
                    <Link to={'/AssignmentStart'} className="font-nu font-bold text-[14px] bg-[#1DBF73] rounded-full text-white py-2 px-4">Start Assignment</Link>
                    <button className="font-nu font-bold text-[14px] bg-[#1DBF73] rounded-full text-white py-2 px-4">Review Assignment</button>
                </div>
            </div>
            <div className="flex justify-between py-6 px-12">
                <div>
                    <p className="font-nu font-bold">Receive grade</p>
                    <p>50% or Higher  </p>
                </div>
                <div>
                    <p className="font-nu font-bold">Your grade</p>
                    <p className="text-center">-</p>
                </div>
            </div>
        </div>
    );
}