import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Question(){
    const [Selected, setSelected] = useState()
    return(<>
    <div className="px-[6%] space-y-5 py-2">
    <div className=" flex justify-between items-center border p-3  rounded-lg">
        <Link to='/modules' className="flex items-center space-x-3">
          <FaArrowLeft />
          <p className="font-semibold">Go Back to Module 1</p>
        </Link>

        <div className="flex items-center space-x-3">
            <FaLessThan className="h-8 w-8 text-xs rounded-full bg-slate-300 p-2"/>
            <FaGreaterThan  className="h-8 w-8 text-xs rounded-full bg-slate-300 p-2"/>
        </div>
    </div>
    <div className="flex justify-between h-[77vh] ">
        <div className="w-[60%] rounded-xl border h-full shadow-xl">
            <div className="border-b-[2px] p-3 font-semibold">Introduction to Programming 1</div>
            <div className="p-3 text-lg text-gray-700">
                What is React JS?
            </div>
        </div>
        
        <div className="w-[35%] rounded-xl border h-full shadow-xl">
            <div className="border-b-[2px] p-3 font-semibold">Options</div>
            <div className="flex flex-col p-5 gap-y-5">
                <label onClick={()=>setSelected(0)} htmlFor="opt1" className={`${Selected==0?'border-[#1DBF73]':''} flex p-3 border rounded-lg space-x-2 cursor-pointer`}>
                    <input name="option" id="opt1" type="radio" className="accent-[#1DBF73]"/>
                    <p>A type of software</p>
                </label>
                <label onClick={()=>setSelected(1)} htmlFor="opt2" className={`${Selected==1?'border-[#1DBF73]':''} flex p-3 border rounded-lg space-x-2 cursor-pointer`}>
                    <input name="option" id="opt2" type="radio" className="accent-[#1DBF73]"/>
                    <p>A type of software</p>
                </label>
                <label onClick={()=>setSelected(2)} htmlFor="opt3" className={`${Selected==2?'border-[#1DBF73]':''} flex p-3 border rounded-lg space-x-2 cursor-pointer`}>
                    <input name="option" id="opt3" type="radio" className="accent-[#1DBF73]"/>
                    <p>A type of software</p>
                </label>
                <label onClick={()=>setSelected(3)} htmlFor="opt4" className={`${Selected==3?'border-[#1DBF73]':''} flex p-3 border rounded-lg space-x-2 cursor-pointer`}>
                    <input name="option" id="opt4" type="radio" className="accent-[#1DBF73]"/>
                    <p>A type of software</p>
                </label>

                <div className="flex justify-end">
                    <button className="py-2 px-4 rounded-xl bg-slate-300 cursor-not-allowed" disabled>Submit</button>
                </div>
            </div>
        </div>

    </div>
    </div>
    </>)
}