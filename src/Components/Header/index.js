import { useContext } from "react";
import { Link } from "react-router-dom";
import { Globalinfo } from "../../App";
import { ReactComponent as Account } from '../../Assets/Icons/account.svg'

export default function Navbar() {

    const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails } = useContext(Globalinfo)
    console.log(userDetail)

    return (<>


        <div className="w-full flex justify-between px-[5%] h-20 items-center shadow-lg font-pop">
            <Link to='/' className="">
                <img src="/logo.png" />
            </Link>
            <div className="flex space-x-10 items-center">
                <Link to={'/'}>Home</Link>
                <Link to={'/course'}>Courses</Link>
                {/* <Link>Search</Link> */}
                <Link to={'/learning'}>My Learning</Link>
                <Link to={'/cart'}>Cart</Link>
                {userDetail?._id ? < Link to="/profile" style={{ cursor: "pointer" }}>  <span>
                    <Account />


                </span> </Link> : <div className="flex space-x-5">
                    <Link to={"/login"} className="bg-[#1DBF73] px-7 rounded-full text-white py-1">Login</Link>
                    <Link to={"/register"} className="bg-black px-7 rounded-full text-white py-1">Sign UP</Link>
                </div>}
            </div>
        </div>
    </>)
}