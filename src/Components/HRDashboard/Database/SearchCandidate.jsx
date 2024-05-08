import React, { useState } from 'react'
import Plus from '../../../Assets/Icons/hrplus.svg'
import './Database.css'
import { Slider } from '@mui/joy';
import Dropdown from '../../../Assets/Icons/hrfilterdropdown.svg';
import SearchCandidateList from './SearchCandidateList';

function valuetext(value) {
    return `${value}`;
}

const SearchCandidate = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [slider, setSlider] = React.useState([0, 10]);

    const handleChange = (event, newValue) => {
        setSlider(newValue);
    };
    
    return (
        <div className='bg-[#F4F4F4] px-[4%] py-[2%] text-[#808080]'>
            <div className='flex flex-col gap-4 px-[3%]'>
                <div className='flex justify-between'>
                    <div>
                        <div>
                            <p className="font-pop font-semibold text-[20px] md:text-[20px] xsm:text-[14px] text-[#808080]">Searching for</p>
                        </div>
                        <div className='text-[14px] font-light text-[#808080] flex gap-6'>
                            <label className='flex items-center gap-2'>
                                <input
                                type="radio"
                                value="option1"
                                checked={selectedValue === 'option1'}
                                onChange={handleRadioChange}
                                />
                                <p>Freshers only</p>
                            </label>

                            <label className='flex items-center gap-2'>
                                <input
                                type="radio"
                                value="option2"
                                checked={selectedValue === 'option2'}
                                onChange={handleRadioChange}
                                />
                                <p>Experienced only</p>
                            </label>

                            <label className='flex items-center gap-2'>
                                <input
                                type="radio"
                                value="option3"
                                checked={selectedValue === 'option3'}
                                onChange={handleRadioChange}
                                />
                                <p>Any</p>
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-wrap w-[40%] justify-end items-center font-pop gap-2'>
                        <div className='pr-4'>
                            <p className="font-pop font-semibold text-[20px] md:text-[20px] xsm:text-[14px] text-[#808080]">Skills:</p>
                        </div>
                        <div className='bg-white border border-[#808080] rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer'>
                            <p className='text-[14px] leading-none'>UI/UX</p>
                            <div>
                                <img src={Plus} alt="" />
                            </div>
                        </div>
                        <div className='bg-white border border-[#808080] rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer'>
                            <p className='text-[14px] leading-none'>Frontend</p>
                            <div>
                                <img src={Plus} alt="" />
                            </div>
                        </div>
                        <div className='bg-white border border-[#808080] rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer'>
                            <p className='text-[14px] leading-none'>Backend</p>
                            <div>
                                <img src={Plus} alt="" />
                            </div>
                        </div>
                        <div className='bg-white border border-[#808080] rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer'>
                            <p className='text-[14px] leading-none'>React</p>
                            <div>
                                <img src={Plus} alt="" />
                            </div>
                        </div>
                        <div className='bg-white border border-[#808080] rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer'>
                            <p className='text-[14px] leading-none'>More</p>
                            <div>
                                <img src={Plus} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[30%]'>
                        <div>
                            <p className="font-pop font-semibold text-[20px] md:text-[20px] xsm:text-[14px] text-[#808080]">Experience</p>
                        </div>
                        <div className='px-[2%] pr-[7%]'>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={slider}
                                max={10}
                                className="w-[full]"
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </div>
                        <div className='flex justify-between w-full'>
                            <p>0</p>
                            <p>10+</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center w-[35%]'>
                        <div>
                            <p className="font-pop font-semibold text-[20px] md:text-[20px] xsm:text-[14px] text-[#808080]">Location:</p>
                        </div>
                        <div className='LocationSelect w-full bg-white px-4 py-2 flex items-center justify-between border border-[#808080] rounded-xl'>
                            <select name="" id="" className='outline-none w-full'>
                                <option value="Delhi">Delhi</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Pune">Pune</option>
                                <option value="Noida">Noida</option>
                            </select>
                            <img src={Dropdown} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <SearchCandidateList/>
            </div>
        </div>
    )
}

export default SearchCandidate