import { Link } from 'react-router-dom'
import './Home.css'
import Category from '../Category'
import Courses_Home from '../Courses_Home'
import Companies from '../companies/Company'
import CourseFeatures from '../CourseFeatures/CourseFeatures'
import Testimonials from '../Testimonials'
// import {Whatsapp  from '../../Assests/Icons/whatsapp.png'
// import {Youtube } from '../../Assests/Icons/youtube.png'
// import {Linkedin } from '../../Assests/Icons/linkedin.png'

export default function Home(){
    return(<>
    <div className='w-full bg-gradient-to-r from-[#FFF5BE] to-[#D0F7EA]'>
    <div className="h-[88vh] flex w-full px-10  pt-10 wave">
        <div className="w-[45%] h-full  ">
            <div className="text-6xl font-bold text-left font-outfit">Learn a New Skill Anytime , and Anywhere.</div>
            <div className="flex text-[20px]  w-full pt-5">
                <div className="w-full font-mons text-[#4E5566]"><span className="font-semibold">1000+</span> Courses covering all tech domains for you to learn and explore new oppurtunities. Learn from Industry Experts and land your Dream Job.</div>
            </div>
            <div className="flex font-mons h-12 w-[340px]  justify-between mt-5">
                <button className="bg-[#333333] w-40 rounded-full text-white font-semibold">Start Trial</button>
            </div>
            <div className="flex mt-3 justify-around">
                <div className="w-28 font-mons">
                    <div className="text-[#1DBF73] font-bold text-[30px]">1000+</div>
                    <div className='text-[#333333] font-bold'>Courses to choose from</div>
                </div>
                <div className="w-28 font-mons">
                    <div className="text-[#333333] font-bold text-[30px]">5000+</div>
                    <div className='text-[#333333] font-bold'>Courses to choose from</div>
                </div>
                <div className="w-28 font-mons">
                    <div className="text-[#F0C932] font-bold text-[30px]">200+</div>
                    <div className='text-[#333333] font-bold'>Courses to choose from</div>
                </div>
            </div>
        </div>

        <div className='w-[60%] flex h-full items-end'>
            <div >
                <img src='/girl.png'/>
            </div>
            {/* <div className='flex flex-col space-y-5'>
                <Link className='h-12 w-12'><img src='/whatsapp.png'/></Link>
                <Link className='h-12 w-12'><img src='/youtube.png'/></Link>
                <Link className='h-12 w-12'><img src='/fb.png'/></Link>
                <Link className='h-12 w-12'><img src='/insta.png'/></Link>
                <Link className='h-12 w-12'><img src='/linkedin.png'/></Link>
              
            </div> */}
        </div>
    </div>
    </div>
    <Category/>
    <Courses_Home/>
    <Companies/>
    <CourseFeatures/>
    <Testimonials />
    </>)
}