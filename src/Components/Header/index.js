import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globalinfo } from "../../App";
import { ReactComponent as Account } from '../../Assets/Icons/account.svg'
import { ReactComponent as Cart } from '../../Assets/Icons/cart.svg'

export default function Navbar() {

    const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails } = useContext(Globalinfo)
    console.log(userDetail)
    const location = useLocation();

    return (<>


        <div className="w-full flex justify-between px-[5%] h-20 items-center shadow-lg font-pop fixed top-0 z-20 bg-white">
            <Link to='/' className="">
                <img src="/logo.png" />
            </Link>
            <div className="flex space-x-10 items-center">
                <Link to={'/'} className={`hover:bg-[#1DBF73] rounded-full hover:text-white hover:py-1 hover:px-7 hover:duration-500  ${location.pathname === '/' ? 'underline font-bold text-[#1DBF73]' : ''}`}>Home</Link>
                <Link to={'/course'} className={`hover:bg-[#1DBF73] rounded-full hover:text-white hover:py-1 hover:px-7 hover:duration-500  ${location.pathname === '/course' ? 'underline font-bold text-[#1DBF73]' : ''}`}>Courses</Link>
                <a href={'#pap'} className={`hover:bg-[#1DBF73] rounded-full hover:text-white hover:py-1 hover:px-7 hover:duration-500  ${location.pathname === '#pap' ? 'underline font-bold text-[#1DBF73]' : ''}`}>PAP</a>
                {/* <Link>Search</Link> */}
                {userDetail?._id && <Link to={'/learning'} className={`hover:bg-[#1DBF73] rounded-full hover:text-white hover:py-1 hover:px-7 hover:duration-500  ${location.pathname === '/learning' ? 'underline font-bold text-[#1DBF73]' : ''}`}>My Learning</Link>}
                <Link to={'/cart'} className={`hover:bg-[#1DBF73] rounded-full hover:text-white hover:py-1 hover:px-7 hover:duration-500  ${location.pathname === '/cart' ? 'underline font-bold text-[#1DBF73]' : ''}`}> <Cart className="hover:color-white"/> </Link>
                {userDetail?._id ? < Link to="/profile" className="pl-4" style={{ cursor: "pointer" }}>  <span>
                    <Account />


                </span> </Link> : <div className="flex space-x-5 pl-4">
                    <Link to={"/login"} className="bg-[#1DBF73] px-7 rounded-full text-white py-1">Login</Link>
                    <Link to={"/register"} className="bg-black px-7 rounded-full text-white py-1">Sign Up</Link>
                </div>}
            </div>
        </div>
    </>)
}