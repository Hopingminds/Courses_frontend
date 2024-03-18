import ReactPlayer from 'react-player'
import './hero.css'
import { ReactComponent as Cal } from '../../Assets/Icons/cal.svg'
import { ReactComponent as Email } from '../../Assets/Icons/email.svg'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Herosection() {

    const navigate = useNavigate()
    return (<>
        <div className="border bg-[#E2FFF1] h-[87.5vh] hero w-full flex font-pop justify-center items-center px-[3%] 2xl:h-[65vh]">
            <div className='w-[45%] space-y-6 2xl:space-y-10'>
                <div className='text-[3.5vw] font-bold leading-[4.5rem] 2xl:leading-[5.8rem]'>Passion and persistence will lead me to your dream job.</div>
                <div className='font-nu text-[20px]'>TOTC is an interesting platform that will teach you in more an interactive way</div>
                {/* <button className='px-6 py-3 text-white bg-[#1DBF73] rounded-full ' onClick={() => navigate('/register')}>Join for free</button> */}
            </div>
            <div className='w-[50%] flex justify-center items-center  relative text-[#545567]'>
                <div className='h-[90%] w-[90%] herobox'>
                    <ReactPlayer width='100%' height='100%' url='/home_video.mp4' playing={true} loop={true} controls={false} muted />
                    {/* <img  className='w-full h-full ' src='/tiger.webp' /> */}
                </div>
                <div className='flex absolute -top-8 left-10  bg-[#FFFFFFCC] backdrop:blur-[8px] py-2 px-4 space-x-3 items-center font-nu rounded-lg'>
                    <Cal />
                    <div className='flex flex-col '>
                        <div className='font-semibold text-[18px]'>250k</div>
                        <div>Students</div>
                    </div>
                </div>
                <div className='flex absolute top-[50%] left-0  h-auto bg-[#FFFFFFCC] backdrop:blur-[8px]  space-x-2 items-start font-nu py-2 px-3 rounded-lg'>
                    <img src='/dp.png' />
                    <div className='flex flex-col space-y-1'>
                        <div className='font-semibold text-[18px]'>User Experience Class</div>
                        <div className='mb-2'>Today at 12.00 PM</div>
                        <button className='bg-[#1DBF73] p-2 rounded-full text-white '>Join Now</button>
                    </div>
                </div>
                <div className='flex absolute bottom-9 right-2  bg-[#FFFFFFCC] backdrop:blur-[8px] p-2 space-x-2 items-center font-nu rounded-lg'>
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