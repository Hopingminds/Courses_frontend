import React from 'react'
import { FcBriefcase } from "react-icons/fc";
import { GiWallet } from "react-icons/gi";
import { FaBriefcase, FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const JobPreview = () => {
  return (
    <div className='bg-[#f7f7f7] px-[12%] py-[3%]'>
        <div className='bg-white border font-pop rounded-2xl'>
            {/* Heading */}
            <div className='px-8 py-4 border-b  flex flex-col gap-1'>
                <div className='flex flex-col'>
                    <p className='font-semibold text-[25px]'>Full Stack Developer</p>
                    <p className='font-nu text-[14px]'>Hoping Minds</p>
                </div>
                <div className='flex justify-between mt-4 mb-2'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-3'>
                            <FaBriefcase  fontSize={'1.3rem'} className='text-gray-500' />
                            <p className='font-nu text-[12px]'> 20 - 30 years</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <GiWallet  fontSize={'1.3rem'}  className='text-gray-500'/>
                            <p className='font-nu text-[12px]'>₹ 5 lacs - 7 lacs PA</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaMapLocationDot fontSize={'1.3rem'}  className='text-gray-500'/>
                            <p className='font-nu text-[12px]'>Chandigarh, Delhi / NCR</p>
                        </div>
                    </div>
                    <div className='flex items-end'>
                        <button className='font-medium text-[20px] bg-green-400 text-white px-6 py-1 rounded-full'>Apply Now</button>
                    </div>
                </div>
                <hr />
                <div className='flex justify-end gap-4 py-1'>
                    <p className='font-nu text-[14px]'>Posted: <span className='font-semibold'>20 Mar</span></p>
                    <p className='font-nu text-[14px]'>Openings: <span className='font-semibold'>1</span> </p>
                </div>
            </div>
            {/* Job Information */}
            <div className='px-8 py-4 flex flex-col gap-4'>
                {/* Job description */}
                <div>
                    <p className='font-semibold'>Job Description</p>
                    <div className='font-nu text-[14px]'>Job description</div>
                </div>
                {/* Job Details */}
                <div className='grid grid-cols-2 gap-1 gap-x-10 font-nu text-[14px]'>
                    <div className='grid grid-cols-[1fr,2fr]'>
                        <p className='font-medium'>Role</p>
                        <p>Leadership Recruiter</p>
                    </div>
                    <div className='grid grid-cols-[1fr,2fr]'>
                        <p className='font-medium'>Work mode </p>
                        <p>In Office</p>
                    </div>
                    <div className='grid grid-cols-[1fr,2fr]'>
                        <p className='font-medium'>Industry Type</p>
                        <p> IT Services & Consulting</p>
                    </div>
                    <div className='grid grid-cols-[1fr,2fr]'>
                        <p className='font-medium'>Department</p>
                        <p> Human Resources</p>
                    </div>
                    <div className='grid grid-cols-[1fr,2fr]'>
                        <p className='font-medium'>Employment Type</p>
                        <p>Full Time, Permanent</p>
                    </div>
                    <div className='grid grid-cols-[1fr,2fr]'>
                        <p className='font-medium'>Role Category</p>
                        <p> Recruitment & Talent Acquisition</p>
                    </div>
                    <div className='grid grid-cols-[1fr,2fr]'>
                        <p className='font-medium'>Education</p>
                        <p>Postgraduate</p>
                    </div>
                </div>
                {/* Key Skills */}
                <div className='flex flex-col gap-1 font-nu text-[14px]'>
                    <p className='font-medium'>Key Skills</p>
                    <div className='flex flex-wrap gap-2'>
                        <p className='px-3 border w-max rounded-full'>Java</p>
                    </div>
                </div>
            </div>
        </div>
        {/* About Company */}
        <div className='bg-white border mt-10 rounded-2xl px-8 py-4'>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold'>About Company</p>
                <p className='font-nu text-[14px]'>HopingMinds is an EdTech venture transforming Indias educational system into an outcome-oriented system by helping students identify, train for and get placed in growing career paths.We run placement-focused, holistic development programs based on real time industry requirements of our partner firms to maximise placement outcomes and enable our students to build aspirational careers. We have successfully run 25+ training programs PAN India covering over 1,100 students in a year and are backed by established investors from India, UK and USA.HopingMinds has been established by driven young entrepreneurs with prestigious IIT and IIM backgrounds along with combined sectoral experience of 30 years’ in the counselling, training, and placement ecosystem, where they have trained and placed 10,000+ students.</p>
            </div>
            <div className='flex flex-col gap-1 mt-6 font-nu'>
                <p className='font-semibold'>Company Info</p>
                <div className='flex text-[14px]'>
                    <p className='font-medium text-gray-500 w-[120px]'>Website</p>
                    <Link to={'/'} className='text-blue-400'>https://hopingminds.in/</Link>
                </div> 
                <div className='flex text-[14px]'>
                    <p className='font-medium text-gray-500 w-[120px]'>Address:</p>
                    <Link to={'https://www.google.com/maps/place/HopingMinds/@30.699267,76.6869601,614m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390fefb3a5eb21e7:0x89798321433f1815!8m2!3d30.6992625!4d76.6915735!16s%2Fg%2F11sqclnklx?entry=ttu'} className='text-blue-400'>E-299, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160055</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobPreview