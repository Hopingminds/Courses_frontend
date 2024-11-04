import React from 'react'
import ArrowRight from '../../../../Assets/Icons/hrgreaterthan.svg'
import Profile from '../../../../Assets/Icons/hrviewprofile.svg'
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PieChart } from '@mui/x-charts';

const ViewProfile = ({onItemClick}) => {

    const data = [
        { id: 0, value: 10, },
        { id: 1, value: 15,  },
        { id: 2, value: 20,  },
      ];
    
    return (
        <div className='flex flex-col py-[3%]'>
            <div className="flex gap-3 font-pop font-semibold text-[#808080] px-[4%]">
            <button onClick={() => onItemClick('reports')}>Reports</button>
            <img className="w-2" src={ArrowRight} alt="" />
            <button onClick={() => onItemClick('results')}>Results</button>
            <img className="w-2" src={ArrowRight} alt="" />
            <button className="text-[#1DBF73]">View profile</button>
            </div>
            <div className='flex w-full px-[6%]  gap-14 pt-[3%]'>
                <div className='w-[50%] flex flex-col gap-14 h-max '>
                    <div className=' flex flex-col gap-2 items-center bg-white rounded-2xl px-8 py-6 font-int text-[#808080] shadow-lg'>
                        <div>
                            <img className='w-[105px]' src={Profile} alt="" />
                        </div>
                        <p className='font-semibold text-black text-[20px]'>Abhinav</p>
                        <p className='text-[15px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n</p>
                        <div className='flex flex-col w-full'>
                            <div className='flex justify-between w-full border-t-[2.4px] border-b-[2.4px] border-[#D9D9D9] py-2'>
                                <p className='font-medium text-[18px]'>PROFESSION</p>
                                <p className='font-medium text-[18px]'>UI DESIGNER</p>
                            </div>
                            <div className='flex justify-between w-full border-b-[2.4px] border-[#D9D9D9] py-2'>
                                <p className='font-medium text-[18px]'>EDUCATION</p>
                                <p className='font-medium text-[18px]'>HIGHER EDUCATION</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-6 font-int text-[15px] font-semibold text-[#808080] text-center px-8 py-16 bg-white rounded-2xl shadow-lg '>
                        <div className='flex flex-col items-center gap-6'>
                            <div className='w-[90%]'>
                                <CircularProgressbar
                                value={45}
                                text={`45%`}
                                styles={buildStyles({
                                    pathTransition: "stroke-dashoffset 1s ease 0s",
                                    pathColor: "#6665DD",
                                    trailColor: "#DCE2EE",
                                })}
                                />
                            </div>
                            <p>Aptitude round</p>
                        </div>
                        <div className='flex flex-col items-center gap-6'>
                            <div className='w-[90%]'>
                                <CircularProgressbar
                                value={65}
                                text={`65%`}
                                styles={buildStyles({
                                    pathTransition: "stroke-dashoffset 1s ease 0s",
                                    pathColor: "#FF715B",
                                    trailColor: "#DCE2EE",
                                })}
                                />
                            </div>
                            <p>Coding round</p>
                        </div>
                        <div className='flex flex-col items-center gap-6'>
                            <div className='w-[90%]'>
                                <CircularProgressbar
                                value={85}
                                text={`85%`}
                                styles={buildStyles({
                                    pathTransition: "stroke-dashoffset 1s ease 0s",
                                    pathColor: "#1DBF73",
                                    trailColor: "#DCE2EE",
                                })}
                                />
                            </div>
                            <p>Interview round</p>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex flex-col gap-14 h-max '>
                    <div className=' flex flex-col gap-10 bg-white rounded-2xl px-8 py-8 font-int font-semibold text-[#808080] shadow-lg h-max'>
                        <p className=' text-black text-[20px]'>Technical Round Statics</p>
                        <div className='flex flex-col gap-2'>
                            <div className='grid grid-cols-[30%,70%] items-center'>
                                <p className='text-[17px]'>HTML</p>
                                <div>
                                    <ProgressBar 
                                        completed={50}
                                        bgColor="#1DBF73"
                                        height="12px"
                                        isLabelVisible={false}
                                        labelColor="#e8090"
                                    />
                                </div>
                            </div>
                            <div className='grid grid-cols-[30%,70%] items-center'>
                                <p className='text-[17px]'>CSS</p>
                                <div>
                                    <ProgressBar 
                                        completed={60}
                                        bgColor="#1DBF73"
                                        height="12px"
                                        isLabelVisible={false}
                                        labelColor="#e8090"
                                    />
                                </div>
                            </div>
                            <div className='grid grid-cols-[30%,70%] items-center'>
                                <p className='text-[17px]'>React</p>
                                <div>
                                    <ProgressBar 
                                        completed={70}
                                        bgColor="#1DBF73"
                                        height="12px"
                                        isLabelVisible={false}
                                        labelColor="#e8090"
                                    />
                                </div>
                            </div>
                            <div className='grid grid-cols-[30%,70%] items-center'>
                                <p className='text-[17px]'>Javascript</p>
                                <div>
                                    <ProgressBar 
                                        completed={80}
                                        bgColor="#1DBF73"
                                        height="12px"
                                        isLabelVisible={false}
                                        labelColor="#e8090"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-10 bg-white rounded-2xl py-8 font-int font-semibold text-[#808080] shadow-lg h-max'>
                        <p className=' text-black text-[20px] px-8'>All Stats</p>
                        <div className='flex flex-col gap-8'>
                            <div className='font-int font-semibold'>
                                <PieChart
                                    colors={['#6665DD', '#29E7CD',  '#FF715B']}
                                    series={[
                                        {
                                            data,
                                            highlightScope: { faded: 'global', highlighted: 'item' },
                                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                            innerRadius: 40,
                                            cx: 200,
                                            
                                        },
                                    ]}
                                    height={200}
                                />
                            </div>
                            <div className='capitalize text-white grid grid-cols-3 gap-2 px-[15%] font-int text-center text-[11px]'>
                                <p className='bg-[#6665DD] py-1 rounded-md uppercase'>Aptitude</p>
                                <p className='bg-[#29E7CD] py-1 rounded-md uppercase'>coding</p>
                                <p className='bg-[#FF715B] py-1 rounded-md uppercase'>Interview</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewProfile