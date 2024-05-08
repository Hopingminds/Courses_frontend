import React from 'react'
import Bell from '../../../Assets/Icons/hrbell.svg'
import Profile from '../../../Assets/Icons/hrprofile.svg'
import { Link } from 'react-router-dom'

const HRNavbar = () => {

    function Top() {
        window.scrollTo(0, 0);
    }
    return (
        <div className='bg-[#0F2027] flex justify-between items-center px-[5%] h-20'>
            <Link to="/" onClick={Top} className=" cursor-pointer">
                <img
                    src="/logo.png"
                    className="h-[50px] w-auto xsm:w-[50px] xsm:h-[25px] md:w-[70px] md:h-[30px]"
                />
            </Link>
            <div className='flex items-center gap-12'>
                <div>
                    <img src={Bell} alt="" />
                </div>
                <div>
                    <img src={Profile} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HRNavbar