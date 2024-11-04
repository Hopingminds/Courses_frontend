import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HRNavbar = () => {

    function Top() {
        window.scrollTo(0, 0);
    }
    function handleLogout(){
        localStorage.removeItem('hrtoken')
        window.location.replace('/hire-from-us')
    }
    return (
        <div className='bg-[#0F2027] flex justify-between items-center px-[5%] h-20 xsm:min-w-[397px]'>
            <Link to="/" onClick={Top} className=" cursor-pointer">
                <img
                    src="/logo.png"
                    className="h-[50px] w-auto xsm:w-[70px] xsm:h-[30px] md:w-[70px] md:h-[30px]"
                    alt='logo'
                />
            </Link>
            <div className='flex items-center gap-12'>
                {/* <div>
                    <img src={Bell} alt="" />
                </div> */}
              <button
          onClick={handleLogout}
          className="bg-[#1DBF73] text-[22px] px-2 w-[150px] h-[45px] justify-center text-center rounded-full text-white py-1 xsm:text-[12px] xsm:px-2 xsm:w-[100px] xsm:h-[30px]"
        >
          Log out
        </button>
            </div>
        </div>
    )
}

export default HRNavbar