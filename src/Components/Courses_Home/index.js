import { useState } from 'react';
import { ReactComponent as Star } from '../../Assets/Icons/Star.svg'
import { ReactComponent as User } from '../../Assets/Icons/User.svg'
import { ReactComponent as Bar } from '../../Assets/Icons/bar-chart.svg'
import { ReactComponent as Clock } from '../../Assets/Icons/Clock.svg'
import { ReactComponent as Check } from '../../Assets/Icons/Check.svg'
import { ReactComponent as Cart } from '../../Assets/Icons/ShoppingCartSimple.svg'
import './Courses.css'
import { Link } from 'react-router-dom';

export default function Courses_Home(){
    const [BgColor, setBgColor] = useState('bg-[#EBEBFF]')
    const [content, setcontent] = useState('Full Stack Development')
    const color={
        "Full Stack Development":'bg-[#EBEBFF]',
        "AI & ML":'transition duration-5000 delay-5000 ease-in-out bg-[#FFF0F0]',
        "Data science":'bg-[#FFF0F0]',
        "Electric Vechicle Design":'bg-[#EBEBFF]',
        "Cyber Security":'bg-[#FFF0F0]',
        "Hydro Carbon":'bg-[#E1F7E3]',
        "Design":'bg-[#FFF0F0]'
    }
function Courses_Data(e){
// console.log(e.target.id);
let id=e.target.id;
console.log(id);
setcontent(id)
setBgColor(color[id])

}
    return(<>
    <div className={`h-[85vh]  w-full px-10 pt-5 mt-10 font-outfit ${BgColor}`}>
        <div className="flex w-full space-x-7">
            <button className="bg-[#1FC074] px-3 py-1 text-white rounded-full ">All Courses</button>
            <button id='Full Stack Development' onClick={Courses_Data}>Full Stack Development</button>
            <button id='AI & ML' onClick={Courses_Data}>AI & ML</button>
            <button id='Data science' onClick={Courses_Data}>Data science</button>
            <button id='Electric Vechicle Design' onClick={Courses_Data}>Electric Vechicle Design</button>
            <button id='Cyber Security' onClick={Courses_Data}>Cyber Security</button>
            <button id='Hydro Carbon' onClick={Courses_Data}>Hydro Carbon</button>
            {/* <button id='Design' onClick={Courses_Data}>Design</button> */}
        </div>
        <div className="text-4xl font-outfit font-semibold mt-3">{content}</div>
        <div className="text-[#333333] text-[20px] mt-1">From critical workplace skills to technical topics, our catalog supports well-rounded professional development.</div>
        <div className="flex mt-10 justify-between">
            <div className='relative h-[360px] w-[300px] shadow-lg bg-white front cursor-pointer'>
                <a href='/singlecourse' className="h-[360px] w-[300px] bg-white ">
                    <div className="h-[200px] w-full"><img className="h-full w-full" src="/girl2.png"/></div>
                    <div className="flex justify-between px-3 mt-3">
                        <div className='text-xs bg-[#FFEEE8] px-2 py-1 text-[#993D20]'>Design</div>
                        <div className='text-[#FF6636]'>₹54</div>
                    </div>
                    <div className="px-3 mt-2">The Python Mega Course: Build 10 Real World Applications</div>
                    <div className="flex px-3 justify-between h-12 border-t-[1px] mt-2  items-center">
                        <div className="flex">
                            <Star/>
                            <span>5.0</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <User/>
                            <span>2.7K</span>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Students</span>
                        </div>
                    </div>
                </a>
                <a href='/singlecourse'  className="h-[360px] w-[300px] bg-white absolute z-20 top-0 back ">
                    <div className='px-1 py-1 text-[#342F98] text-xs bg-[#EBEBFF] w-fit'>DEVELOPMENTS</div>
                    <div className='text-[13px] pl-2 font-semibold font-mons mt-1'>2021 Complete Python Bootcamp From 0 Hero in Python</div>
                    <div className='flex justify-between px-2 mt-2'>
                        <div className='flex  space-x-2 items-center'>
                            <img src='/featuresImage2.png' className='h-[40px] w-[40px] rounded-full'/>
                            <div className='flex flex-col'>
                                <div className='text-[#8C94A3] text-sm'>Course by</div>
                                <div className='text-xs'>Kevin Gilbert</div>
                            </div>
                        </div>
                        
                        <div className='flex items-center'>
                                <Star/>
                                <span className='text-sm'>5.0</span>
                                <span className='text-sm text-[#6E7485]'>(30)</span>
                        </div>
                    </div>

                    <div className='flex items-center text-sm justify-between px-2 mt-2'>
                        <div className='flex space-x-1 items-center  '>
                            <User/>
                            <span>2.7K</span>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Students</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <Bar/>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Beginner</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <Clock/>
                            <span className='text-[#8C94A3] text-sm flex items-center'>6 hour</span>
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
                        <button className='flex justify-center bg-[#1D2026] w-[95%] py-2 text-white'>
                                <Cart/>
                                <span>Add To Cart</span>
                            </button>
                </div>
                </a>
            </div>
            <div className='relative h-[360px] w-[300px] shadow-lg bg-white front cursor-pointer'>
                <a href='/singlecourse' className="h-[360px] w-[300px] bg-white ">
                    <div className="h-[200px] w-full"><img className="h-full w-full" src="/girl2.png"/></div>
                    <div className="flex justify-between px-3 mt-3">
                        <div className='text-xs bg-[#FFEEE8] px-2 py-1 text-[#993D20]'>Design</div>
                        <div className='text-[#FF6636]'>₹54</div>
                    </div>
                    <div className="px-3 mt-2">The Python Mega Course: Build 10 Real World Applications</div>
                    <div className="flex px-3 justify-between h-12 border-t-[1px] mt-2  items-center">
                        <div className="flex">
                            <Star/>
                            <span>5.0</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <User/>
                            <span>2.7K</span>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Students</span>
                        </div>
                    </div>
                </a>
                <a href='/singlecourse'  className="h-[360px] w-[300px] bg-white absolute z-20 top-0 back ">
                    <div className='px-1 py-1 text-[#342F98] text-xs bg-[#EBEBFF] w-fit'>DEVELOPMENTS</div>
                    <div className='text-[13px] pl-2 font-semibold font-mons mt-1'>2021 Complete Python Bootcamp From 0 Hero in Python</div>
                    <div className='flex justify-between px-2 mt-2'>
                        <div className='flex  space-x-2 items-center'>
                            <img src='/featuresImage2.png' className='h-[40px] w-[40px] rounded-full'/>
                            <div className='flex flex-col'>
                                <div className='text-[#8C94A3] text-sm'>Course by</div>
                                <div className='text-xs'>Kevin Gilbert</div>
                            </div>
                        </div>
                        
                        <div className='flex items-center'>
                                <Star/>
                                <span className='text-sm'>5.0</span>
                                <span className='text-sm text-[#6E7485]'>(30)</span>
                        </div>
                    </div>

                    <div className='flex items-center text-sm justify-between px-2 mt-2'>
                        <div className='flex space-x-1 items-center  '>
                            <User/>
                            <span>2.7K</span>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Students</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <Bar/>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Beginner</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <Clock/>
                            <span className='text-[#8C94A3] text-sm flex items-center'>6 hour</span>
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
                        <button className='flex justify-center bg-[#1D2026] w-[95%] py-2 text-white'>
                                <Cart/>
                                <span>Add To Cart</span>
                            </button>
                </div>
                </a>
            </div>
            <div className='relative h-[360px] w-[300px] shadow-lg bg-white front cursor-pointer'>
                <a href='/singlecourse' className="h-[360px] w-[300px] bg-white ">
                    <div className="h-[200px] w-full"><img className="h-full w-full" src="/girl2.png"/></div>
                    <div className="flex justify-between px-3 mt-3">
                        <div className='text-xs bg-[#FFEEE8] px-2 py-1 text-[#993D20]'>Design</div>
                        <div className='text-[#FF6636]'>₹54</div>
                    </div>
                    <div className="px-3 mt-2">The Python Mega Course: Build 10 Real World Applications</div>
                    <div className="flex px-3 justify-between h-12 border-t-[1px] mt-2  items-center">
                        <div className="flex">
                            <Star/>
                            <span>5.0</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <User/>
                            <span>2.7K</span>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Students</span>
                        </div>
                    </div>
                </a>
                <a href='/singlecourse'  className="h-[360px] w-[300px] bg-white absolute z-20 top-0 back ">
                    <div className='px-1 py-1 text-[#342F98] text-xs bg-[#EBEBFF] w-fit'>DEVELOPMENTS</div>
                    <div className='text-[13px] pl-2 font-semibold font-mons mt-1'>2021 Complete Python Bootcamp From 0 Hero in Python</div>
                    <div className='flex justify-between px-2 mt-2'>
                        <div className='flex  space-x-2 items-center'>
                            <img src='/featuresImage2.png' className='h-[40px] w-[40px] rounded-full'/>
                            <div className='flex flex-col'>
                                <div className='text-[#8C94A3] text-sm'>Course by</div>
                                <div className='text-xs'>Kevin Gilbert</div>
                            </div>
                        </div>
                        
                        <div className='flex items-center'>
                                <Star/>
                                <span className='text-sm'>5.0</span>
                                <span className='text-sm text-[#6E7485]'>(30)</span>
                        </div>
                    </div>

                    <div className='flex items-center text-sm justify-between px-2 mt-2'>
                        <div className='flex space-x-1 items-center  '>
                            <User/>
                            <span>2.7K</span>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Students</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <Bar/>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Beginner</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <Clock/>
                            <span className='text-[#8C94A3] text-sm flex items-center'>6 hour</span>
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
                        <button className='flex justify-center bg-[#1D2026] w-[95%] py-2 text-white'>
                                <Cart/>
                                <span>Add To Cart</span>
                            </button>
                </div>
                </a>
            </div>
            <div className='relative h-[360px] w-[300px] shadow-lg bg-white front cursor-pointer'>
                <a href='/singlecourse' className="h-[360px] w-[300px] bg-white ">
                    <div className="h-[200px] w-full"><img className="h-full w-full" src="/girl2.png"/></div>
                    <div className="flex justify-between px-3 mt-3">
                        <div className='text-xs bg-[#FFEEE8] px-2 py-1 text-[#993D20]'>Design</div>
                        <div className='text-[#FF6636]'>₹54</div>
                    </div>
                    <div className="px-3 mt-2">The Python Mega Course: Build 10 Real World Applications</div>
                    <div className="flex px-3 justify-between h-12 border-t-[1px] mt-2  items-center">
                        <div className="flex">
                            <Star/>
                            <span>5.0</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <User/>
                            <span>2.7K</span>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Students</span>
                        </div>
                    </div>
                </a>
                <a href='/singlecourse'  className="h-[360px] w-[300px] bg-white absolute z-20 top-0 back ">
                    <div className='px-1 py-1 text-[#342F98] text-xs bg-[#EBEBFF] w-fit'>DEVELOPMENTS</div>
                    <div className='text-[13px] pl-2 font-semibold font-mons mt-1'>2021 Complete Python Bootcamp From 0 Hero in Python</div>
                    <div className='flex justify-between px-2 mt-2'>
                        <div className='flex  space-x-2 items-center'>
                            <img src='/featuresImage2.png' className='h-[40px] w-[40px] rounded-full'/>
                            <div className='flex flex-col'>
                                <div className='text-[#8C94A3] text-sm'>Course by</div>
                                <div className='text-xs'>Kevin Gilbert</div>
                            </div>
                        </div>
                        
                        <div className='flex items-center'>
                                <Star/>
                                <span className='text-sm'>5.0</span>
                                <span className='text-sm text-[#6E7485]'>(30)</span>
                        </div>
                    </div>

                    <div className='flex items-center text-sm justify-between px-2 mt-2'>
                        <div className='flex space-x-1 items-center  '>
                            <User/>
                            <span>2.7K</span>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Students</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <Bar/>
                            <span className='text-[#8C94A3] text-sm flex items-center'>Beginner</span>
                        </div>
                        <div className='flex space-x-1 items-center  '>
                            <Clock/>
                            <span className='text-[#8C94A3] text-sm flex items-center'>6 hour</span>
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
                        <button className='flex justify-center bg-[#1D2026] w-[95%] py-2 text-white'>
                                <Cart/>
                                <span>Add To Cart</span>
                            </button>
                </div>
                </a>
            </div>
           
        </div>
    </div>
    </>)
}