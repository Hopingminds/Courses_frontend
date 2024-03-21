import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globalinfo } from "../../App";
import { ReactComponent as Account } from '../../Assets/Icons/account.svg'

export default function Navbar() {

    const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails } = useContext(Globalinfo)
    console.log(userDetail)
    const location = useLocation();

    return (<>


        <div className="w-full flex justify-between px-[5%] h-20 items-center shadow-lg font-pop fixed top-0 z-20 bg-white xsm:h-10">
            <Link to='/' className="">
                <img src="/logo.png" className="xsm:w-[40px] xsm:h-[18px]"/>
            </Link>
            <div className="flex space-x-10 items-center xsm:space-x-2">
                <Link to={'/'} className={`hover:bg-[#1DBF73] rounded-full hover:text-white hover:py-1 hover:px-7 hover:duration-500 xsm:text-[8px] xsm:hover:px-3 ${location.pathname === '/' ? 'underline font-bold text-[#1DBF73]' : ''}`}>Home</Link>
                <Link to={'/course'} className={`hover:bg-[#1DBF73] rounded-full hover:text-white hover:py-1 hover:px-7 hover:duration-500 xsm:text-[8px] xsm:hover:px-3 ${location.pathname === '/course' ? 'underline font-bold text-[#1DBF73]' : ''}`}>Courses</Link>
                {/* <Link>Search</Link> */}
                <Link to={'/learning'} className={`hover:bg-[#1DBF73] rounded-full hover:text-white hover:py-1 hover:px-7 hover:duration-500 xsm:text-[8px] xsm:hover:px-3 ${location.pathname === '/learning' ? 'underline font-bold text-[#1DBF73]' : ''}`}>My Learning</Link>
                <Link to={'/cart'} className={`hover:bg-[#1DBF73] rounded-full hover:text-white hover:py-1 hover:px-7 hover:duration-500 xsm:text-[8px] xsm:hover:px-3 ${location.pathname === '/cart' ? 'underline font-bold text-[#1DBF73]' : ''}`}>Cart</Link>
                {userDetail?._id ? < Link to="/profile" className="pl-4 xsm:pl-1" style={{ cursor: "pointer" }}>  <span>
                    <Account className="xsm:w-[20px] xsm:h-[20px]"/>

                </span> </Link> : <div className="flex space-x-5 pl-4 xsm:space-x-1 xsm:pl-1">
                    <Link to={"/login"} className="bg-[#1DBF73] px-7 rounded-full text-white py-1 xsm:text-[8px] xsm:px-3">Login</Link>
                    <Link to={"/register"} className="bg-black px-7 rounded-full text-white py-1 xsm:text-[8px] xsm:px-3">Sign UP</Link>
                </div>}
            </div>
        </div>
    </>)
}