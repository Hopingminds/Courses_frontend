import { useEffect, useState } from 'react';
import { ReactComponent as Star } from '../../Assets/Icons/Star.svg'
import { ReactComponent as User } from '../../Assets/Icons/User.svg'
import { ReactComponent as Bar } from '../../Assets/Icons/bar-chart.svg'
import { ReactComponent as Clock } from '../../Assets/Icons/Clock.svg'
import { ReactComponent as Check } from '../../Assets/Icons/Check.svg'
import { ReactComponent as Cart } from '../../Assets/Icons/ShoppingCartSimple.svg'
import './Courses.css'
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { COURSESURL } from '../Confidential';
export default function Courses_Home(){
    const [BgColor, setBgColor] = useState('bg-[#EBEBFF]')
    const [content, setcontent] = useState('Full Stack Development')
    const [Courses, setCourses] = useState([])
    const color={
        "All Courses":'bg-[#FFF0F0]',
        "Full Stack Development":'bg-[#EBEBFF]',
        "AI & ML":'transition duration-5000 delay-5000 ease-in-out bg-[#FFF0F0]',
        "Data science":'bg-[#FFF0F0]',
        "Electric Vechicle Design":'bg-[#EBEBFF]',
        "Cyber Security":'bg-[#FFF0F0]',
        "Hydro Carbon":'bg-[#E1F7E3]',
        "Design":'bg-[#FFF0F0]',
        "Management":'bg-[#E1F7E3]'
    }

useEffect(() => {
async function Fetchdata(){
    let url=COURSESURL+'api/courses'
const data=await fetch(url)
const response=await data.json()
setCourses(response.courses)
console.log(response.courses);
  }
  Fetchdata()
}, [])

function Courses_Data(e){
// console.log(e.target.id);
let id=e.target.id;
// console.log(id);
setcontent(id)
setBgColor(color[id])

// Courses.filter((item)=>)

}
    return(<>
    <div className={`h-[85vh]  w-full px-10 pt-5 mt-10 font-outfit ${BgColor}`}>
        <div className="flex w-full space-x-5">
            {
                content=='All Courses'?<button onClick={Courses_Data} id='All Courses' className=" px-3 py-2  afterclick rounded-full ">All Courses</button>:<button onClick={Courses_Data} id='All Courses' className=" beforeclick">All Courses</button>


            }
            {
                content=='Full Stack Development'?<button onClick={Courses_Data} id='Full Stack Development' className=" px-3 py-2  afterclick rounded-full ">Full Stack Development</button>:<button onClick={Courses_Data} id='Full Stack Development' className=" beforeclick">Full Stack Development</button>


            }
            {
                content=='AI & ML'?<button onClick={Courses_Data} id='AI & ML' className=" px-3 py-2  afterclick rounded-full ">AI & ML</button>:<button onClick={Courses_Data} id='AI & ML' className=" beforeclick">AI & ML</button>


            }
            {
                content=='Data science'?<button onClick={Courses_Data} id='Data science' className=" px-3 py-2  afterclick rounded-full ">Data science</button>:<button onClick={Courses_Data} id='Data science' className=" beforeclick">Data science</button>


            }
            {
                content=='Electric Vechicle Design'?<button onClick={Courses_Data} id='Electric Vechicle Design' className=" px-3 py-2  afterclick rounded-full ">Electric Vechicle Design</button>:<button onClick={Courses_Data} id='Electric Vechicle Design' className=" beforeclick">Electric Vechicle Design</button>


            }
            {
                content=='Cyber Security'?<button onClick={Courses_Data} id='Cyber Security' className=" px-3 py-2  afterclick rounded-full ">Cyber Security</button>:<button onClick={Courses_Data} id='Cyber Security' className=" beforeclick">Cyber Security</button>


            }
            {
                content=='Hydro Carbon'?<button onClick={Courses_Data} id='Hydro Carbon' className=" px-3 py-2  afterclick rounded-full ">Hydro Carbon</button>:<button onClick={Courses_Data} id='Hydro Carbon' className=" beforeclick">Hydro Carbon</button>


            }
            {
                content=='Management'?<button onClick={Courses_Data} id='Management' className=" px-3 py-2  afterclick rounded-full ">Management</button>:<button onClick={Courses_Data} id='Management' className=" beforeclick">Management</button>


            }

        </div>
        <div className="text-4xl font-outfit font-semibold mt-3">{content}</div>
        <div className="text-[#333333] text-[20px] mt-1">Our training covers everything you need for a successful career, from basic job skills to advanced tech know-how.</div>
        <Splide
                    options={{
                        type: "loop",
                        perPage: 4,
                        pagination: true,
                        perMove: 1,
                        wheel: false,
                        arrows: true,
                        autoplay: true,
                        interval: 2000,
                        speed: 1000,
                        delay: 4,
                        pauseOnHover: true,
                        drag: true,

                    }} className="flex mt-10 justify-between">
                        
       
        {
            Courses.map((item,ind)=>{
                return(<>
                <SplideSlide key={ind}>                                                    
            <div className='relative h-[360px] w-[300px] shadow-lg bg-white front cursor-pointer'>
                <a href='/singlecourse' className="h-[360px] w-[300px] bg-white ">
                    <div className="h-[200px] w-full"><img className="h-full w-full" src={item.featured_image}/></div>
                    <div className="flex justify-between  mt-3">
                        <div className='text-xs bg-[#FFEEE8] px-2  text-[#993D20]'>{item.category}</div>
                        <div className='text-[#FF6636]'>₹{item.base_price}</div>
                    </div>
                    <div className=" mt-2">{item.title}</div>
                    <div className="flex  justify-between h-12 border-t-[1px] mt-2  items-center">
                        <div className="flex">
                            <Star/>
                            <span>5.0</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <User/>
                            <span>{parseFloat(item.enrollments/1000)}k</span>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Students</span>
                        </div>
                    </div>
                </a>
                <a href='/singlecourse'  className="h-[360px] w-[300px] bg-white absolute z-20 top-0 back ">
                    <div className='px-1  text-[#342F98] text-xs bg-[#EBEBFF] w-fit'>{item.category}</div>
                    <div className='text-[13px] pl-2 font-semibold font-mons mt-1'>{item.title}</div>
                    <div className='flex justify-between px-2 mt-2'>
                        <div className='flex  space-x-2 items-center'>
                            <img src={item.instructor.profile} className='h-[40px] w-[40px] rounded-full'/>
                            <div className='flex flex-col'>
                                <div className='text-[#8C94A3] text-sm'>Course by</div>
                                <div className='text-xs'>{item.instructor.firstName} {item.instructor.lastName}</div>
                            </div>
                        </div>
                        
                        <div className='flex items-center'>
                                <Star/>
                                <span className='text-sm'>{item.rating}</span>
                                <span className='text-sm text-[#6E7485]'>(30)</span>
                        </div>
                    </div>

                    <div className='flex items-center text-sm justify-between px-2 mt-2'>
                        <div className='flex space-x-1 items-center  '>
                            <User/>
                            <span>{parseFloat(item.enrollments/1000)}k</span>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Students</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <Bar/>
                            <span className='text-[#8C94A3] text-sm flex items-center'>{item.level}</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <Clock/>
                            <span className='text-[#8C94A3] text-sm flex items-center'>{item.duration}</span>
                        </div>
                    </div>
                    
                    <div className='text-sm mt-2 px-[4px]'>
                        <div className=' text-[16px] font-semibold'>What you will learn</div>
                        <div className='flex'>
                            <Check/>
                            <span className='text-[#6E7485]'>Learn to use Python professionally, learning Python 3!</span>
                        </div>
                        <div className='flex'>
                            <Check/>
                            <span className='text-[#6E7485]'>Learn to use Python professionally, learning Python 3!</span>
                        </div>
                        <div className='flex'>
                            <Check/>
                            <span className='text-[#6E7485]'>Learn to use Python professionally, learning Python 3!</span>
                        </div>
                    </div>

                <div className='flex justify-center mt-2'>
                        <button className='flex justify-center bg-[#1D2026] w-[95%] py-2 afterclick'>
                                <Cart/>
                                <span>Add To Cart</span>
                            </button>
                </div>
                </a>
            </div>
            </SplideSlide>
                </>)
            } )
        }
                  
            
           
           
    
        </Splide>
    </div>
    </>)
}