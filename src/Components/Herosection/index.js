import ReactPlayer from 'react-player'
import './hero.css'
import { ReactComponent as Cal } from '../../Assets/Icons/cal.svg'
import { ReactComponent as Email } from '../../Assets/Icons/email.svg'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Herosection() {

    const navigate = useNavigate()
    return (<>
        <div className="border bg-[#E2FFF1] h-[87.5vh] hero w-full flex font-pop justify-center items-center px-[3%] 2xl:h-[65vh]">
            <div className='w-[45%] h-[65%] space-y-6 2xl:space-y-10'>
                <div className='text-[3.2vw] font-bold leading-[5.5rem] 2xl:leading-[5.8rem]'>Studying Online Is Now Much Easier</div>
                <div className='font-nu text-[24px] w-[65%] leading-[2.2rem]'>TOTC is an interesting platform that will teach you in more an interactive way</div>
                <div className='pt-6'><button className='px-8 py-4 h-[13%] text-white bg-[#1DBF73] rounded-full text-[20px]' onClick={() => navigate('/register')}>Join for free</button></div>
            </div>
            <div className='w-[50%] flex justify-center items-center  relative text-[#545567]'>
                <div className='h-[90%] w-[90%] herobox'>
                    <ReactPlayer width='100%' height='100%' url='/home_video.mp4' playing={true} loop={true} controls={false} />

                    {/* <img  className='w-full h-full ' src='/tiger.webp' /> */}
                </div>
                <div className='flex absolute -top-12 left-12 w-[29%] bg-[#FFFFFFCC] py-4 pl-5 gap-6 items-center font-nu rounded-xl' style={{ backdropFilter: 'blur(8px)' }}>
                    <Cal />
                    <div className='flex flex-col gap-1'>
                        <div className='font-semibold text-[18px]'>250k</div>
                        <div>Assisted Students</div>
                    </div>
                </div>
                <div className='flex absolute top-[40%] left-0 w-[35%] h-auto bg-[#FFFFFFCC] gap-4 items-start font-nu py-5 px-4 rounded-xl' style={{ backdropFilter: 'blur(8px)' }} >
                    <img src='/dp.png' />
                    <div className='flex flex-col gap-1'>
                        <div className='font-semibold text-[18px]'>User Experience Class</div>
                        <div className='mb-2'>Today at 12.00 PM</div>
                        <button className='bg-[#1DBF73] py-2 w-[70%] rounded-full text-white mt-2'>Join Now</button>
                    </div>
                </div>

                <div className='flex absolute bottom-14 right-10 bg-[#FFFFFFCC] p-6 py-5 gap-4 items-center font-nu rounded-xl' style={{ backdropFilter: 'blur(8px)' }}>
                    <div className='flex justify-center items-center h-11 w-11 bg-[#F88C3D] rounded' >
                        <Email />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='font-semibold text-[18px]'>Congratulations</div>
                        <div>Your admission completed</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}