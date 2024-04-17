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
//                 {/* <div className='font-nu text-[18px] mt-5 w-[83%] text-justify xsm:text-[6px] xsm:text-start'>"HopingMinds offers holistic development programs designed to position students in high-growth roles through our network of over 150 corporate partners. Our tailored approach ensures you're not just prepared, but primed for success in your chosen field."</div> */}
//                 {/* <div className='font-nu text-[18px] mt-5 w-[83%] text-justify xsm:text-[6px] xsm:text-start md:text-[12px]'>"HopingMinds offers holistic development programs designed to position students in high-growth roles through our network of over 150 corporate partners. Our tailored approach ensures you're not just prepared, but primed for success in your chosen field."</div> */}

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
        <div className=" bg-gradient-to-r from-[#0F2027] to-[#203A43] h-[80vh] hero w-full flex font-pop justify-center items-center px-[3%] xsm:h-[50vh]">
            <div className='w-[45%] space-y-8'>
                <div className='text-[45px] font-semibold text-white leading-[60px] font-pop text-wrap xsm:text-[20px] xsm:leading-[28px]'>Master In-Demand Skills for Dream Placements</div>
                <div className='text-[28px] font-medium text-white leading-[40px] font-pop text-wrap xsm:text-[14px] xsm:leading-[18px]'>High Impact Courses that Earn you College Credits</div>
            </div>
            <div className='w-[40%] h-[75%] flex justify-center items-center  relative text-[#545567] '>
                <div className='h-[80%] w-[100%] herobox bg-white  flex items-center xsm:h-[50%]'>
                    {/* <ReactPlayer className='-translate-x-28' width='150%' height='100%'  url='/home_video.mp4'  playing={true}  loop={true} controls={false} /> */}
                <img  className=' h-full w-full'  src="/homegif.gif" alt="video" />

                </div>
                <div className={`${active==1?'scale-in-center':''} flex justify-center w-[15vw] h-[16vh] backdrop-blur-[2px] absolute -top-6 left-10 px-2 space-x-2 items-center  rounded-lg bgcurvehome xsm:space-x-0 xsm:w-[20vw] xsm:h-[7vh] xsm:top-4 xsm:left-6`}>
                    <Certificate className='w-16 h-14 xsm:w-6 xsm:h-4'/>
                    <div className='flex flex-col text-white w-[60%] '>
                        <div className='xsm:text-[5px]'>NSDC Partner with Course Certifications</div>
                    </div>
                </div>
                <div className={`${active==2?'scale-in-center':''} flex justify-center absolute w-[12vw] h-[14vh] backdrop-blur-[2px]  top-[70%] -left-10 px-2  space-x-2 items-center bgcurvehome xsm:space-x-1 xsm:w-[22vw] xsm:h-[7vh] xsm:-left-1`}>
                    <Ai className='w-12 h-12 xsm:w-5 xsm:h-5'/>
                    <div className='flex flex-col text-white  w-[60%] '>
                        <div className='xsm:text-[5px]'>AI driven Learning Experience</div>
                    </div>
                </div>

                <div className={` ${active==3?'scale-in-center':''} flex justify-center absolute bottom-10 -right-5 w-[15vw] h-[16vh] backdrop-blur-[2px] px-2 space-x-2 items-center   bgcurvehome xsm:px-0 xsm:pr-2 xsm:space-x-0 xsm:w-[20vw] xsm:h-[7vh]`}>
                    <div className='flex justify-center items-center h-11 w-11  rounded' >
                        <Cashback className='w-16 h-14 xsm:w-6 xsm:h-4'/>
                    </div>
                    <div className='flex flex-col text-white  w-[60%] xsm:w-[70%]'>
                        <div className='xsm:text-[5px]'>Earn College Credits for Each Course</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}