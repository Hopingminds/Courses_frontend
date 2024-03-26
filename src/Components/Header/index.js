import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Globalinfo } from "../../App";
import { ReactComponent as Account } from '../../Assets/Icons/account.svg'
import { ReactComponent as Cart } from '../../Assets/Icons/cart.svg'
import ScrollToTop from "../ScrollToTop";
import { func } from "prop-types";

export default function Navbar() {

    const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails } = useContext(Globalinfo)
    // console.log(userDetail)
    const location = useLocation();
    console.log(location);
    let navigate = useNavigate()
    function Top() {
        // const { pathname } = useLocation();

        // useEffect(() => {
        window.scrollTo(0, 0);
        navigate('/')
        // }, [pathname]);
        // navigate('/')
        return null;
    }
    function Pap() {
        let path = location.pathname
        if (path === '/') {
            navigate('#pap')
        }
        else {
            navigate('/pap')
        }
    }

    return (<>


        <div className="w-full flex justify-between px-[5%] h-20 items-center shadow-md font-pop fixed top-0 z-20 bg-white xsm:h-10">
            <Link to='/' className="">
                <img src="/logo.png" className="xsm:w-[40px] xsm:h-[18px]" />
            </Link>
            <div className="flex space-x-10 items-center">
                {userDetail?.role != 'subadmin' && <>
                    <Link to={'/'} className={` rounded-full hover:text-[#1DBF73]   ${location.pathname === '/' ? ' font-bold text-[#1DBF73]' : ''}`}>Home</Link>
                    <Link to={'/course'} className={` rounded-full hover:text-[#1DBF73]   ${location.pathname === '/course' ? ' font-bold text-[#1DBF73]' : ''}`}>Courses</Link>
                    <Link to={'/career'} className={` rounded-full hover:text-[#1DBF73]   ${location.pathname === '/career' ? ' font-bold text-[#1DBF73]' : ''}`}>Career</Link>
                    <a href={location.pathname == '/' ? '#pap' : '/pap'} className={` rounded-full hover:text-[#1DBF73]   ${location.pathname === '#pap' ? ' font-bold text-[#1DBF73]' : ''}`}>PAP</a>
                    {/* <Link>Search</Link> */}
                    {userDetail?._id && <Link to={'/learning'} className={` rounded-full hover:text-[#1DBF73]   ${location.pathname === '/learning' ? ' font-bold text-[#1DBF73]' : ''}`}>My Learning</Link>}
                    {userDetail?._id && <Link to={'/cart'} className={` rounded-full hover:text-[#1DBF73]   ${location.pathname === '/cart' ? ' font-bold text-[#1DBF73]' : ''}`}> <Cart className="hover:color-white" /> </Link>}
                </>}
                {userDetail?._id ? < Link to="/profile" className="pl-4" style={{ cursor: "pointer" }}>  <span>
                    <Account />


                </span> </Link> : <div className="flex space-x-5 pl-4">
                    <Link to={"/login"} className="bg-[#1DBF73] px-7 rounded-full text-white py-1">Log in</Link>
                    <Link to={"/register"} className="bg-black px-7 rounded-full text-white py-1">Sign Up</Link>
                </div>}
            </div>
        </div>
    </>)
}