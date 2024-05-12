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
    const [selectedValue, setSelectedValue] = useState("Freshers only");
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [slider, setSlider] = React.useState([0, 10]);

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSkillClick = (skill) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

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
                                    className="sr-only peer"
                                    type="radio"
                                    value="Freshers only"
                                    checked={selectedValue === 'Freshers only'}
                                    onChange={handleRadioChange}
                                />
                                <div className="w-3 h-3 bg-transparent border border-green-500 rounded-full peer-checked:bg-green-500 peer-checked:border-green-500"></div>
                                <p>Freshers Only</p>
                            </label>

                            <label className='flex items-center gap-2'>
                                <input
                                    className="sr-only peer"
                                    type="radio"
                                    value="Experienced only"
                                    checked={selectedValue === 'Experienced only'}
                                    onChange={handleRadioChange}
                                />
                                <div className="w-3 h-3 bg-transparent border border-green-500 rounded-full peer-checked:bg-green-500 peer-checked:border-green-500"></div>
                                <p>Experienced Only</p>
                            </label>

                            <label className='flex items-center gap-2'>
                                <input
                                    className="sr-only peer"
                                    type="radio"
                                    value="Any"
                                    checked={selectedValue === 'Any'}
                                    onChange={handleRadioChange}
                                />
                                <div className="w-3 h-3 bg-transparent border border-green-500 rounded-full peer-checked:bg-green-500 peer-checked:border-green-500"></div>
                                <p>Any</p>
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-wrap w-[45%] justify-end items-center font-pop gap-2'>
                        <div className='pr-4'>
                            <p className="font-pop font-semibold text-[20px] md:text-[20px] xsm:text-[14px] text-[#808080]">Skills:</p>
                        </div>
                        {['UI/UX', 'Frontend', 'Backend', 'React.js', 'Node.js'].map((skill) => (
                            <div
                                key={skill}
                                className={`bg-white border rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer ${
                                    selectedSkills.includes(skill) ? 'border-[#1DBF73] text-[#1DBF73] font-semibold' : 'border-[#808080]'
                                }`}
                                onClick={() => handleSkillClick(skill)}
                            >
                                <p className="text-[14px] leading-none">{skill}</p>
                                <img className={`transition-transform duration-300  ${selectedSkills.includes(skill) ?'rotate-45 redcross':'rotate-0'}`} src={Plus} alt="" />
                            </div>
                        ))}
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
                                <option value="" selected disabled hidden>Select Location</option>
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