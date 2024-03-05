import { Link } from 'react-router-dom'
import './Home.css'
import Category from '../Category'
import Courses_Home from '../Courses_Home'
import Companies from '../companies/Company'
import CourseFeatures from '../CourseFeatures/CourseFeatures'
import Testimonials from '../Testimonials'
import Our_features from '../Our_features'
// import {Whatsapp  from '../../Assests/Icons/whatsapp.png'
// import {Youtube } from '../../Assests/Icons/youtube.png'
// import {Linkedin } from '../../Assests/Icons/linkedin.png'

export default function Home(){
    return(<>
    <div className='w-full bg-gradient-to-r from-[#FFF5BE] to-[#D0F7EA] '>
    <div className="h-[88vh] flex w-full px-[5%]  pt-10 wave justify-between items-center 2xl:h-[70vh]">
        <div className="w-[45%]  2xl:space-y-5 2xl:w-[50%]">
            <div className="text-6xl font-bold text-left font-outfit">Level Up Your Skills. Stand Out from the Crowd</div>
            <div className='font-mons font-semibold text-lg'>(learn anytime, earn academic credits anywhere)</div>
            <div className="flex text-[20px]  w-full pt-5">
                <div className="w-full font-mons text-[#4E5566]">Explore over 1000 courses across various technology domains to broaden your skills and uncover exciting opportunities</div>
            </div>
            <div className="flex font-mons h-12 w-[340px]  justify-between mt-5">
                <button className="bg-[#333333] w-40 rounded-full text-white font-semibold">Start Trial</button>
            </div>
            <div className="flex mt-3 justify-around 2xl:w-[50%]">
                <div className="w-28 font-mons">
                    <div className="text-[#1DBF73] font-bold text-[30px]">100+</div>
                    <div className='text-[#333333] font-bold'>Courses to learn</div>
                </div>
                <div className="w-28 font-mons">
                    <div className="text-[#333333] font-bold text-[30px]">150+</div>
                    <div className='text-[#333333] font-bold'>Companies to Land</div>
                </div>
                <div className="w-28 font-mons">
                    <div className="text-[#F0C932] font-bold text-[30px]">200+</div>
                    <div className='text-[#333333] font-bold'>Projects to build</div>
                </div>
            </div>
        </div>

        <div className='w-[40%] flex h-full  justify-center items-end'>
            <div className='h-full  '>
                <img className='h-full object-cover' src='/girl.png'/>
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
    <Our_features/>
    <Testimonials />
    </>)
}