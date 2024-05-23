import React, { useState } from 'react'
import ProfileImg from '../../../Assets/Images/profile-user.png'
import Message from '../../../Assets/Icons/tpmessage.svg'
import Number from '../../../Assets/Icons/tpnumber.svg'
import Bag from '../../../Assets/Icons/tpbag.svg'
import Location from '../../../Assets/Icons/tplocation.svg'
import File from '../../../Assets/Icons/tpfile.svg'
import Key from '../../../Assets/Icons/tpkey.svg'
import OpenEye from '../../../Assets/Icons/tpopeneye.svg'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const UserProfile = () => {
    const [showPassword,setShowPassword] = useState(false);
    return (
        <div className='font-int px-10 pr-72 py-10 flex flex-col gap-4'>
            <div className='text-[#384D6C] py-2 px-2 border-b w-max border-[#D0D0D0]'>
                <p className='font-semibold text-[18px]'>User Profile</p>
            </div>
            <div className='flex justify-between items-center mt-6'>
                <div className='flex gap-4 items-center'>
                    <div className='bg-white shadow-lg rounded-full w-[80px] h-[80px] flex justify-center items-center'>
                        <div className='w-[72px] h-[72px] rounded-full'>
                            <img src={ProfileImg} alt="" />
                        </div>
                    </div>
                    <div className='text-[#384D6C] font-mons'>
                        <p className='text-[16px] font-bold'>Alaa Mohamed</p>
                        <p className='text-[16px]'>Product Design</p>
                        <p className='text-[13px] text-[#6B7280]'>Eastern European Time (EET), Cairo UTC +3</p>
                    </div>
                </div>
                <div className='text-white text-[11px] flex gap-10'>
                    <button className=' bg-black rounded-md w-[150px] py-3 font-bold'>
                        Upload New Photo 
                    </button>
                    <button className=' border border-[#6D6D6D] text-[#384D6C] rounded-md w-[150px] py-3 font-bold'>
                        Delete
                    </button>
                </div>
            </div>
            <hr className='border-[#D0D0D0] mt-3'/>
            <div className=' flex flex-col gap-4 mt-2'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="First Name" className='text-[13px] text-[#384D6C] font-bold'>First Name</label>
                        <input type="text" name="First Name" id="First Name" placeholder='eg. Alaa' className='border border-[#D1D5DB] px-4 py-2 text-[14px] placeholder:italic placeholder:font-light rounded-md outline-none'/>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="Last Name" className='text-[13px] text-[#384D6C] font-bold'>Last Name</label>
                        <input type="text" name="Last Name" id="Last Name" placeholder='eg. Mohamed' className='border border-[#D1D5DB] px-4 py-2 text-[14px] placeholder:italic placeholder:font-light rounded-md outline-none' />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="Profession" className='text-[13px] text-[#384D6C] font-bold'>Profession</label>
                    <input type="text" name="Profession" id="Profession" placeholder='eg. Software Developer' className='border border-[#D1D5DB] px-4 py-2 text-[14px] placeholder:italic placeholder:font-light rounded-md outline-none' />
                </div>
            </div>
            <hr className='border-[#D0D0D0] mt-3'/>
            <div className=' flex flex-col gap-4 mt-2'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="Email Address" className='text-[13px] text-[#384D6C] font-bold'>Email Address</label>
                        <div className='border border-[#D1D5DB] px-4 py-2 text-[14px] rounded-md flex gap-3 items-center'>
                            <img className='w-4 h-4' src={Message} alt="" />
                            <input type="email" name="Email Address" id="Email Address"  className='outline-none w-full' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="Phone Number" className='text-[13px] text-[#384D6C] font-bold'>Phone Number</label>
                        <div className='border border-[#D1D5DB] px-4 py-2 text-[14px] rounded-md flex gap-3 items-center'>
                            <img className='w-4 h-4' src={Number} alt="" />
                            <input type="number" name="Phone Number" id="Phone Number"  className='outline-none w-full' />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-[#D0D0D0] mt-3'/>
            <div className=' flex flex-col gap-4 mt-2'>
                <div className='flex flex-col gap-3 font-bold'>
                    <label htmlFor="Experience" className='text-[13px] text-[#384D6C] '>Experience</label>
                    <div className='text-[14px] rounded-md flex gap-3 items-center font-mons text-[#384D6C]'>
                        <div className='flex justify-center items-center p-2 bg-[#D0D0D0] rounded-full'>
                            <img className='w-4 h-4' src={Bag} alt="" />
                        </div>
                        <p className='text-[16px]'>4+ Years</p>
                    </div>
                </div>
            </div>
            <hr className='border-[#D0D0D0] mt-3'/>
            <div className=' flex flex-col gap-4 mt-2'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="Location" className='text-[13px] text-[#384D6C] font-bold'>Location</label>
                    <div className='border border-[#D1D5DB] px-4 py-2 text-[14px] rounded-md flex gap-3 items-center'>
                        <img className='w-4 h-4' src={Location} alt="" />
                        <input type="text" name="Location" id="Location"  className='outline-none w-full' />
                    </div>
                </div>
            </div>
            <div className=' flex flex-col gap-4 mt-2'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="About Yourself" className='text-[13px] text-[#384D6C] font-bold'>About Yourself</label>
                    <div className='border border-[#D1D5DB] px-4 py-2 text-[14px] rounded-md flex gap-3 items-start'>
                        <img className='w-4 h-4' src={File} alt="" />
                        <textarea  name="About Yourself" id="About Yourself"  className='outline-none w-full' />
                    </div>
                </div>
            </div>
            <div className=' flex flex-col gap-4 mt-2'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="Location" className='text-[13px] text-[#384D6C] font-bold'>Location</label>
                    <div className='border border-[#D1D5DB] px-4 py-2 text-[14px] rounded-md flex gap-3 items-center'>
                        <img className='w-4 h-4' src={Key} alt="" />
                        <input type={`${showPassword?"password":"text"}`} name="Location" id="Location"  className='outline-none w-full' />
                        {showPassword ? <FaRegEyeSlash onClick={() => setShowPassword(false)} className='w-4 h-4 text-[#D0D0D0] cursor-pointer' /> :  <FaRegEye onClick={() => setShowPassword(true)} className='w-4 h-4 text-[#D0D0D0] cursor-pointer'/>}
                    </div>
                </div>
            </div>
            <div className='text-white text-[11px] mt-14 flex gap-10 justify-center'>
                <button className=' bg-black rounded-md w-[150px] py-3 font-bold'>
                    Save Changes 
                </button>
            </div>
        </div>
    )
}

export default UserProfile