import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import React, { useState, useEffect } from 'react';

export default function MyStats(){

    const [maxValues, setMaxValues] = useState({
        first: 0,
        second: 0,
        third: 0,
      }); //setting the maximum value for the progressbar by default to 0

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMaxValues({ first: 53, second: 70, third: 90 })
          }, 1500)
      
          return () => {
            clearTimeout(timeout)
          } // Cleanup function to clear timeout on unmount or state change
    }, []);


    return (
        <div className="px-[8%] mt-20 mb-24">
            <div className='flex justify-between '>
                <div className='w-[43%]'>
                    <p className="font-nu font-semibold text-[20px] text-[#243465]">TOTAL COURSES</p>
                    <div className="">
                        <div className="flex justify-evenly py-6">
                            <div className="w-[17%] font-nu font-semibold   ">
                            <AnimatedProgressProvider
                                  valueStart={0}
                                  valueEnd={maxValues.first}
                                  duration={1.4}
                                  easingFunction={easeQuadInOut}
                                >
                                  {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                      <CircularProgressbar
                                        value={maxValues.first}
                                        text={`${maxValues.first}%`}
                                        styles={buildStyles({ 
                                            pathTransition: "stroke-dashoffset 1s ease 0s",
                                            pathColor: '#04BFDA',
                                            trailColor: '#E9EBF3',
                                         })}
                                      />
                                    );
                                  }}
                                </AnimatedProgressProvider>
                            </div>
                            <div className="flex items-center justify-between w-[60%]">
                                <div>
                                    <p className="font-nu font-semibold text-[#243465] text-[22px]">UI & UX</p>
                                    <p className="font-nu text-[#848A9C] text-[18px]">Nabung jang imah dekah </p>
                                </div>
                                <div>
                                    <img className="w-[16px] h-[16px]" src="../Icons/MSarrow.svg" alt="arrow"/>
                                </div>
                            </div>
                        </div>
                        <hr className="border-dashed"/>
                        <div className="flex justify-evenly py-6">
                            <div className="w-[17%] font-nu font-semibold   ">
                            <AnimatedProgressProvider
                                  valueStart={0}
                                  valueEnd={maxValues.second}
                                  duration={1.4}
                                  easingFunction={easeQuadInOut}
                                >
                                  {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                      <CircularProgressbar
                                        value={maxValues.second}
                                        text={`${maxValues.second}%`}
                                        styles={buildStyles({ 
                                            pathTransition: "stroke-dashoffset 1s ease 0s",
                                            pathColor: '#FFA84A',
                                            trailColor: '#E9EBF3',
                                         })}
                                      />
                                    );
                                  }}
                                </AnimatedProgressProvider>
                            </div>
                            <div className="flex items-center justify-between w-[60%]">
                                <div>
                                    <p className="font-nu font-semibold text-[#243465] text-[22px]">UI & UX</p>
                                    <p className="font-nu text-[#848A9C] text-[18px]">Nabung jang imah dekah </p>
                                </div>
                                <div>
                                    <img className="w-[16px] h-[16px]" src="../Icons/MSarrow.svg" alt="arrow"/>
                                </div>
                            </div>
                        </div>
                        <hr className="border-dashed"/>
                        <div className="flex justify-evenly py-6">
                            <div className="w-[17%] font-nu font-semibold   ">
                            <AnimatedProgressProvider
                                  valueStart={0}
                                  valueEnd={maxValues.third}
                                  duration={1.4}
                                  easingFunction={easeQuadInOut}
                                >
                                  {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                      <CircularProgressbar
                                        value={maxValues.third}
                                        text={`${maxValues.third}%`}
                                        styles={buildStyles({ 
                                            pathTransition: "stroke-dashoffset 1s ease 0s",
                                            pathColor: '#FB67CA',
                                            trailColor: '#E9EBF3',
                                         })}
                                      />
                                    );
                                  }}
                                </AnimatedProgressProvider>
                            </div>
                            <div className="flex items-center justify-between w-[60%]">
                                <div>
                                    <p className="font-nu font-semibold text-[#243465] text-[22px]">UI & UX</p>
                                    <p className="font-nu text-[#848A9C] text-[18px]">Nabung jang imah dekah </p>
                                </div>
                                <div>
                                    <img className="w-[16px] h-[16px]" src="../Icons/MSarrow.svg" alt="arrow"/>
                                </div>
                            </div>
                        </div>
                        <hr className="border-dashed"/>
                        <button className="bg-[#F2F6F8] w-full py-4 font-nu font-semibold text-[23px] mt-12 text-[#243465] rounded-lg">Show More</button>
                    </div>
                </div>
                <div className='w-[45%]'>
                    <p className='font-nu font-semibold text-[20px] text-[#243465]'>Your Spending</p>
                    <div style={{ width: "100%", height:"350px" }} className=' flex items-center justify-center mt-12'>
                        {/* progressbar */}
                        <AnimatedProgressProvider
                          valueStart={0}
                          valueEnd={maxValues.first}
                          duration={1.4}
                          easingFunction={easeQuadInOut}
                        >
                          {value => {
                            const roundedValue = Math.round(value);
                            return (
                              <CircularProgressbarWithChildren
                                value={maxValues.first}
                                strokeWidth={3}
                                styles={buildStyles({
                                  pathColor: "#FB67CA",
                                  trailColor: "#E9EBF3",
                                  pathTransition: "stroke-dashoffset 1s ease 0s"
                                })}
                              >
                                {/*
                                  Width here needs to be (100 - 2 * strokeWidth)% 
                                  in order to fit exactly inside the outer progressbar.
                                */}
                                <div style={{ width: "85%" }}>
                                  <AnimatedProgressProvider
                                    valueStart={0}
                                    valueEnd={maxValues.second}
                                    duration={1.4}
                                    easingFunction={easeQuadInOut}
                                  >
                                    {value => {
                                      const roundedValue = Math.round(value);
                                      return (
                                        <CircularProgressbarWithChildren
                                        value={maxValues.second}
                                        strokeWidth={4}
                                        styles={buildStyles({
                                          pathColor: "#FFA84A",
                                          trailColor: "#E9EBF3",
                                          pathTransition: "stroke-dashoffset 1s ease 0s"
                                        })}
                                        >
                                          {/*
                                            Width here needs to be (100 - 2 * strokeWidth)% 
                                            in order to fit exactly inside the outer progressbar.
                                          */}
                                          <div style={{ width: "80%" }}>
                                          <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={maxValues.third}
                                            duration={1.4}
                                            easingFunction={easeQuadInOut}
                                          >
                                            {value => {
                                              const roundedValue = Math.round(value);
                                              return (
                                                <CircularProgressbarWithChildren
                                                value={maxValues.third}
                                                strokeWidth={5}
                                                styles={buildStyles({
                                                  pathColor: "#04BFDA",
                                                  trailColor: "#E9EBF3",
                                                  pathTransition: "stroke-dashoffset 1s ease 0s"
                                                })}
                                                >
                                                </CircularProgressbarWithChildren>
                                              );
                                            }}
                                          </AnimatedProgressProvider>
                                          </div>
                                        </CircularProgressbarWithChildren>
                                      );
                                    }}
                                  </AnimatedProgressProvider>
                                </div>
                              </CircularProgressbarWithChildren>
                            );
                          }}
                        </AnimatedProgressProvider>
                    </div>
                    <div className='flex space-x-10 mt-12'>
                        <div className='flex flex-col items-center'>
                            <div className='flex space-x-2 items-center'>
                                <img className='w-[15px] h-[15px]' src='../Icons/MSbluecircle.svg'/>
                                <p className='font-Inter font-semibold text-[#7A7A7A] text-[18px]'>Completed</p>
                            </div>
                            <p className='font-nu font-semibold text-[20px]'>90%</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex space-x-2 items-center'>
                                <img className='w-[15px] h-[15px]' src='../Icons/MSorangecircle.svg'/>
                                <p className='font-Inter font-semibold text-[#7A7A7A] text-[18px]'>Assignment</p>
                            </div>
                            <p className='font-nu font-semibold text-[20px]'>90%</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex space-x-2 items-center'>
                                <img className='w-[15px] h-[15px]' src='../Icons/MSpinkcircle.svg'/>
                                <p className='font-Inter font-semibold text-[#7A7A7A] text-[18px]'>Progress</p>
                            </div>
                            <p className='font-nu font-semibold text-[20px]'>90%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}