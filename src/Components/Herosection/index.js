import ReactPlayer from 'react-player'
import './hero.css'
import { ReactComponent as Cal } from '../../Assets/Icons/cal.svg'
import { ReactComponent as Email } from '../../Assets/Icons/email.svg'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Herosection() {

    const navigate = useNavigate()
    return (<>

        <div className="add_gradient h-[76vh]  w-100% flex font-pop justify-center items-center px-[3%] 2xl:h-[65vh] xsm:h-[70vh] text-white hero mb-20 xsm:mb-0 md:h-[60vh] md:mb-0">
            <div className='w-[40%] h-[70%] items-start 2xl:space-y-10'>
                {/* <div className='text-[3.2vw] font-semibold leading-[4.0rem] 2xl:leading-[5.5rem]'>Shape Your Tomorrow, Today with HopingMinds: Where Education Meets Aspiration</div> */}
                <div className='text-[40px] font-semibold leading-[3rem] 2xl:leading-[5.5rem] font-pop xsm:text-[15px] xsm:leading-5 md:text-[24px] md:leading-normal'>Master In-Demand Skills for Dream Placements
High Impact Courses that Earn you College Credits</div>
                {/* <div className='font-nu text-[18px] mt-5 w-[83%] text-justify xsm:text-[10px] xsm:text-start'>"HopingMinds offers holistic development programs designed to position students in high-growth roles through our network of over 150 corporate partners. Our tailored approach ensures you're not just prepared, but primed for success in your chosen field."</div> */}
                {/* <div className='font-nu text-[18px] mt-5 w-[83%] text-justify xsm:text-[10px] xsm:text-start md:text-[12px]'>"HopingMinds offers holistic development programs designed to position students in high-growth roles through our network of over 150 corporate partners. Our tailored approach ensures you're not just prepared, but primed for success in your chosen field."</div> */}

            </div>
            <div className='w-[55%] flex justify-center items-center  relative text-[#545567] mb-5 pb-5 md:mb-0 md:pb-0 md:justify-end'>
                <div className='h-[70%] w-[90%] md:w-['>

                    <img src="https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/assets/1711955580289-homepage-small.gif " alt="" />
                    {/* <img src="https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/1711950517336-homepage-small.gif " alt="" /> */}

                </div>

            </div>
        </div>


    </>)


}