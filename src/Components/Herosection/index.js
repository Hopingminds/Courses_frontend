import ReactPlayer from 'react-player'
import './hero.css'
import { ReactComponent as Cal } from '../../Assets/Icons/cal.svg'
import { ReactComponent as Email } from '../../Assets/Icons/email.svg'
export default function Herosection(){
    return(<>
    <div className="border bg-[#E2FFF1] h-[87.5vh] hero w-full flex font-pop justify-center items-center px-[3%]">
        <div className='w-[45%] space-y-5'>
            <div className='text-5xl font-bold'>Studying Online is now much easier</div>
            <div className='font-nu text-[20px]'>TOTC is an interesting platform that will teach you in more an interactive way</div>
            <button className='px-6 py-3 text-white bg-[#1DBF73] rounded-full '>Join for free</button>
        </div>
        <div className='w-[50%] flex justify-center items-center  relative text-[#545567]'>
            <div className='h-[90%] w-[90%] herobox'>
            <ReactPlayer width='100%' height='100%' url='/home_video.mp4' playing={true} loop={true} controls={false}/>

            {/* <img  className='w-full h-full ' src='/tiger.webp' /> */}
            </div>
            <div className='flex absolute -top-8 left-10  bg-white py-2 px-4 space-x-3 items-center font-nu rounded-lg'>
                <Cal/>
                <div className='flex flex-col '>
                    <div  className='font-semibold text-[18px]'>250k</div>
                    <div>Students</div>
                </div>
            </div>
            <div className='flex absolute top-[50%] left-0  h-auto bg-white  space-x-2 items-start font-nu py-2 px-3 rounded-lg'>
            <img src='/dp.png'/>
                <div className='flex flex-col space-y-1'>
                    <div  className='font-semibold text-[18px]'>User Experience Class</div>
                    <div className='mb-2'>Today at 12.00 PM</div>
                    <button className='bg-[#1DBF73] p-2 rounded-full text-white '>Join Now</button>
                </div>
            </div>

            <div className='flex absolute bottom-10 right-3  bg-white p-2 space-x-2 items-center font-nu rounded-lg'>
                <div className='flex justify-center items-center h-11 w-11 bg-[#F88C3D] rounded' >
                <Email/>
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