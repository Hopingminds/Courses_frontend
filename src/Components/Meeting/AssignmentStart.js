import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { RadioButton } from "react-radio-buttons";
import { Link } from "react-router-dom";
import Coursecontents from "./Coursecontents";

export default function AssignmentStart(){

    const [selectedValue, setSelectedValue] = useState("option1"); 
  
    const handleRadioChange = ( 
        value 
    ) => { 
        setSelectedValue(value); 
    }; 

    return (
        <div className="my-10 mx-[5%] flex justify-between">
            <div className=" w-[65%]">
            <div>
            <div className="bg-[#E2FFF1] rounded-2xl py-9 px-12 flex justify-between items-center">
                <div className="space-y-2">
                    <p className="font-pop font-semibold text-[22px] text-[#1DBF73]">Test Your Knowledge on Full Stack Development</p>
                </div>
                <div>
                    <CiSettings size={'30'} />
                </div>
            </div>
            <div className="py-6 px-12 border-b flex justify-between">
                <div className="space-y-4">
                    <p className="font-pop font-semibold">Time : 20 min </p>
                    <p className="font-pop font-semibold">Total Questions: 10</p>
                </div>
                <div className="space-y-4">
                    <p className="font-pop font-semibold">Your Attempt</p>
                    <p className="text-center">-</p>
                </div>
            </div>
            <div className="py-6 px-12">
                <div className="font-nu text-[14px] ">
                    <div className="flex space-x-2  justify-between"> 
                        <div className="flex space-x-2 w-[90%]">
                            <p>1.</p>
                            <p>What is the correct way in which we can start an ordered list that has the numeric value count of 5?</p>
                        </div>
                        <div><p className="font-pop font-semibold text-[14px]">1 Point</p></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4 w-[80%]"> 
                        <div className="space-x-2 flex items-center cursor-pointer" 
                            onClick={() => 
                                handleRadioChange( 
                                    "option1"
                                ) 
                            } 
                        > 
                            <input type="radio" id="option1" value="option1"
                                checked={ 
                                    selectedValue === 
                                    "option1"
                                }
                            /> 
                            <label htmlFor="option1">ReactJS</label> 
                        </div> 
                        <div className="space-x-2 flex items-center cursor-pointer" 
                            onClick={() => 
                                handleRadioChange( 
                                    "option2"
                                ) 
                            } 
                        > 
                            <input type="radio" id="option2" value="option2"
                                checked={ 
                                    selectedValue === 
                                    "option2"
                                }
                            /> 
                            <label htmlFor="option2">ReactJS</label> 
                        </div> 
                        <div className="space-x-2 flex items-center cursor-pointer" 
                            onClick={() => 
                                handleRadioChange( 
                                    "option3"
                                ) 
                            } 
                        > 
                            <input type="radio" id="option3" value="option3"
                                checked={ 
                                    selectedValue === 
                                    "option3"
                                }
                            /> 
                            <label htmlFor="option3">ReactJS</label> 
                        </div> 
                        <div className="space-x-2 flex items-center cursor-pointer" 
                            onClick={() => 
                                handleRadioChange( 
                                    "option4"
                                ) 
                            } 
                        > 
                            <input type="radio" id="option4" value="option4"
                                checked={ 
                                    selectedValue === 
                                    "option4"
                                }
                            /> 
                            <label htmlFor="option4">ReactJS</label> 
                        </div> 
                    </div> 
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <Link to={'/AssignmentMeet'} className="font-nu font-bold text-[14px] bg-[#1DBF73] rounded-full text-white py-2 px-4">Submit</Link>
            </div>
        </div>
            </div>
            <div className="w-[33%]">
                <Coursecontents/>
            </div>
        </div>
    );
}