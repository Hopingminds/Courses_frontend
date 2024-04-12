import ReactPlayer from 'react-player'
// import './hero.css'
// import { ReactComponent as Cal } from '../../Assets/Icons/cal.svg'
// import { ReactComponent as Email } from '../../Assets/Icons/email.svg'
// import { Navigate, useNavigate } from 'react-router-dom'
// export default function Herosection() {

//     const navigate = useNavigate()
//     return (<>

//         <div className="add_gradient h-[76vh]  w-100% flex font-pop justify-center items-center px-[3%] 2xl:h-[65vh] xsm:h-[26vh] text-white hero xsm:mb-0 md:h-[40vh] md:mb-12">
//             <div className='w-[40%] h-[70%] items-start 2xl:space-y-10'>
//                 {/* <div className='text-[3.2vw] font-semibold leading-[4.0rem] 2xl:leading-[5.5rem]'>Shape Your Tomorrow, Today with HopingMinds: Where Education Meets Aspiration</div> */}
//                 <div className='text-[40px] font-semibold leading-[3rem] 2xl:leading-[5.5rem] font-pop xsm:text-[15px] xsm:leading-5 md:text-[24px] md:leading-normal'>Master In-Demand Skills for Dream Placements
// High Impact Courses that Earn you College Credits</div>
//                 {/* <div className='font-nu text-[18px] mt-5 w-[83%] text-justify xsm:text-[10px] xsm:text-start'>"HopingMinds offers holistic development programs designed to position students in high-growth roles through our network of over 150 corporate partners. Our tailored approach ensures you're not just prepared, but primed for success in your chosen field."</div> */}
//                 {/* <div className='font-nu text-[18px] mt-5 w-[83%] text-justify xsm:text-[10px] xsm:text-start md:text-[12px]'>"HopingMinds offers holistic development programs designed to position students in high-growth roles through our network of over 150 corporate partners. Our tailored approach ensures you're not just prepared, but primed for success in your chosen field."</div> */}

//             </div>
//             <div className='w-[55%] flex justify-center items-center  relative text-[#545567] mb-5 pb-5 md:mb-0 md:pb-0 md:justify-end xsm:mb-0 xsm:pb-0'>
//                 <div className='h-[70%] w-[90%] md:w-['>

//                     <img src="https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/assets/1711955580289-homepage-small.gif " alt="" />
//                     {/* <img src="https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/1711950517336-homepage-small.gif " alt="" /> */}

//                 </div>

//             </div>
//         </div>


//     </>)


// }
import './hero.css'
import { ReactComponent as Cashback } from '../../Assets/Icons/Cashback.svg'
import { ReactComponent as Ai} from '../../Assets/Icons/ai.svg'
import { ReactComponent as Certificate } from '../../Assets/Icons/Certificate.svg'
import { useEffect, useState } from 'react'

export default function Herosection() {
const [active, setactive] = useState(1)
useEffect(() => {
    setTimeout(() => {
        if(active>=3){
            setactive(1)
        }
        else{
            setactive(active+1)
        }
    }, 2000);
}, [active])

    return (<>
        <div className=" bg-gradient-to-r from-[#0F2027] to-[#203A43] h-[87.5vh] hero w-full flex font-pop justify-center items-center px-[3%]">
            <div className='w-[45%] space-y-5'>
                <div className='text-[45px] font-semibold text-white leading-[60px] font-pop text-wrap'>Master In-Demand Skills for Dream Placements
    High Impact Courses that Earn you College Credits</div>
            </div>
            <div className='w-[40%] h-[75%] flex justify-center items-center  relative text-[#545567] '>
                <div className='h-[80%] w-[100%] herobox bg-white  flex items-center '>
                    {/* <ReactPlayer className='-translate-x-28' width='150%' height='100%'  url='/home_video.mp4'  playing={true}  loop={true} controls={false} /> */}
                <img  className=' h-full w-full'  src="/homegif.gif" alt="video" />

                </div>
                <div className={`${active==1?'scale-in-center':''} flex w-[15vw] h-[20vh] backdrop-blur-[2px] absolute -top-6 left-10  py-2 px-4 space-x-3 items-center  rounded-lg bgcurvehome`}>
                    <Certificate/>
                    <div className='flex flex-col text-white w-[60%] '>
                        <div>NSDC Partner with Course Certifications</div>
                    </div>
                </div>
                <div className={`${active==2?'scale-in-center':''} flex absolute w-[12vw] h-[15vh] backdrop-blur-[4px]  top-[60%] -left-10   space-x-2 items-center py-2 px-3 bgcurvehome`}>
                    <Ai/>
                    <div className='flex flex-col text-white '>
                        <div className=''>AI driven Learning Experience</div>
                    </div>
                </div>

                <div className={` ${active==3?'scale-in-center':''} flex absolute bottom-10 -right-5 w-[15vw] h-[20vh] backdrop-blur-[2px]    p-2 space-x-2 items-center   bgcurvehome`}>
                    <div className='flex justify-center items-center h-11 w-11  rounded' >
                        <Cashback/>
                    </div>
                    <div className='flex flex-col text-white '>
                        <div>Earn College Credits for Each Course</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}