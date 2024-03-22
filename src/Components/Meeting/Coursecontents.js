import { useState } from 'react';
import { ReactComponent as Down } from '../../Assets/Icons/Down.svg'
import { IoBookOutline } from "react-icons/io5";

export default function Coursecontents({ data }) {
    console.log(data);

    const [clicked, setclicked] = useState(false);

    function ClickSection(id) {
        if (!clicked) {
            setclicked(true);
            let inner = document.getElementById(id);
            // console.log(inner);
            inner.style.display = 'none';
        }
        else {
            setclicked(false)
            let inner = document.getElementById(id);

            // console.log(inner);
            inner.style.display = 'flex';
        }
    }

    return (
        <div className="bg-[#E2FFF1] rounded-2xl">
            <div className="px-5 py-8">
                <div className="space-y-2">
                    <div>
                        <p className="font-pop font-semibold text-[21px] text-[#1DBF73]">Course Contents</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-pop text-[12px] text-[#1DBF73]">2/5 COMPLETED</p>
                        <img className="w-[19px] h-[19px]" src="../Icons/Calender.svg" />
                    </div>
                    <div>
                        {/* progressbar */}
                        <hr />
                    </div>
                </div>
                {data?.map((val, ind) => {
                    return (
                        <>
                            <div className='mt-3 py-2 border border-[#1DBF73] px-4 bg-white rounded-xl cursor-pointer'>
                                <div className=''>
                                    <div>
                                        <div className='' onClick={() => ClickSection(ind + 1)} >
                                            <div className='flex justify-between '>
                                                <p className='font-pop font-medium text-[12px] text-[#1DBF73]'>{val?.chapter_name}</p>
                                                <Down />
                                            </div>
                                            <div className='flex justify-between'>
                                                <div className='flex items-center ml-2 space-x-1'>
                                                    {/* <img className='text-[#252641CC]' src="../Icons/Clock.svg" /> */}
                                                    <p className='text-[#252641CC] text-[11px] font-pop font-medium'></p>
                                                </div>
                                                <div className='flex items-center space-x-1'>
                                                    <IoBookOutline className='text-[#252641CC]' />
                                                    <p className='text-[#252641CC] text-[11px] font-pop font-medium'>{val?.lessons?.length} Lessons</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id={ind + 1} className='pt-2'>
                                            <div className='w-full'>
                                                {val?.lessons?.map((chapter, index) => {
                                                    return (
                                                        <div className='flex justify-between border-t py-2 w-full'>
                                                            <p className='font-pop font-bold text-[11px]'>{index + 1}. {chapter?.lesson_name}</p>
                                                            <p className='font-pop font-bold text-[11px]'>{chapter?.duration}</p>
                                                        </div>
                                                    )

                                                })}

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>
                    )
                })}


            </div>
        </div>
    );
}