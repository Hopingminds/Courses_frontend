import ReactPlayer from 'react-player'
import './hero.css'
import { ReactComponent as Cal } from '../../Assets/Icons/cal.svg'
import { ReactComponent as Email } from '../../Assets/Icons/email.svg'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Herosection() {

    const navigate = useNavigate()
    return (<>
        <div className=" bg-[#E2FFF1] h-[87.5vh] hero w-full flex font-pop justify-center items-center px-[3%] 2xl:h-[65vh] xsm:h-[70vh]">
            <div className='w-[45%] h-[70%] items-start 2xl:space-y-10'>
                {/* <div className='text-[3.2vw] font-semibold leading-[4.0rem] 2xl:leading-[5.5rem]'>Shape Your Tomorrow, Today with HopingMinds: Where Education Meets Aspiration</div> */}
                <div className='text-[3.2vw] font-semibold leading-[4.0rem] 2xl:leading-[5.5rem] font-pop xsm:text-[15px] xsm:leading-5'>Empower Your Future With Hoping Minds!</div>
                <div className='font-nu text-[18px] mt-5 w-[83%] text-justify xsm:text-[10px] xsm:text-start'>"HopingMinds offers holistic development programs designed to position students in high-growth roles through our network of over 150 corporate partners. Our tailored approach ensures you're not just prepared, but primed for success in your chosen field."</div>
                {/* <button className='px-6 py-3 text-white bg-[#1DBF73] rounded-full ' onClick={() => navigate('/register')}>Join for free</button> */}
            </div>
            <div className='w-[50%] flex justify-center items-center  relative text-[#545567]'>
                <div className='h-[90%] w-[90%] herobox'>
                    <ReactPlayer width='100%' height='100%' url='/home_video.mp4' playing={true} loop={true} controls={false} muted />
                    {/* <img  className='w-full h-full ' src='/tiger.webp' /> */}
                </div>
                <div className='flex absolute -top-8 left-10  bg-[#FFFFFFCC] backdrop:blur-[8px] py-2 px-4 space-x-3 items-center font-nu rounded-lg '>
                    <Cal />
                    <div className='flex flex-col '>
                        <div className='font-semibold text-[18px]'>250k</div>
                        <div>Students</div>
                    </div>
                </div>
                <div className='flex absolute top-[50%] left-0  h-auto bg-[#FFFFFFCC] backdrop:blur-[8px]  space-x-2 items-start font-nu py-2 px-3 rounded-lg '>
                    <img src='/dp.png' />
                    <div className='flex flex-col space-y-1'>
                        <div className='font-semibold text-[18px]'>User Experience Class</div>
                        <div className='mb-2'>Today at 12.00 PM</div>
                        <button className='bg-[#1DBF73] p-2 rounded-full text-white '>Join Now</button>
                    </div>
                </div>
                <div className='flex absolute bottom-9 right-2  bg-[#FFFFFFCC] backdrop:blur-[8px] p-2 space-x-2 items-center font-nu rounded-lg '>
                    <div className='flex justify-center items-center h-11 w-11 bg-[#F88C3D] rounded' >
                        <Email />
                    </div>
                    <div className='flex flex-col '>
                        <div className='font-semibold text-[18px]'>Congratulations</div>
                        <div>Your admission completed</div>
                    </div>
                </div>
            </div>
        </div>
    </>)


}