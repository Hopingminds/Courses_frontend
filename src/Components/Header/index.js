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
    // console.log(location);
    let navigate = useNavigate()

    function Top() {
        window.scrollTo(0, 0);
        navigate('/')
        return null;
    }

    function ScrollToPap(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        const navbarHeight = 80; // Adjust this value to match the height of your navbar
        const papElement = document.getElementById('pap');
        if (papElement) {
            const targetOffset = papElement.offsetTop - navbarHeight;
            window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        }
        else {
            navigate('/pap')
        }
    }
    function Top() {
        window.scrollTo(0, 0);
    }

    return (<>


        <div className="w-full flex justify-between px-[5%] h-20 items-center  font-pop fixed top-0 z-20 bg-[#0F2027] xsm:h-12 xsm:px-[2%] text-white">
            <Link to='/' onClick={Top} className=" cursor-pointer">
                <img src="/logo.png" className="h-[50px] w-auto xsm:w-[50px] xsm:h-[30px]" />
            </Link>
            <div className="flex space-x-10 items-center xsm:space-x-2">
                {userDetail?.role != 'subadmin' && <>
                    <Link to={'/'} onClick={Top} className={` rounded-full hover:text-[#1DBF73] xsm:text-[10px]  ${location.pathname === '/' ? ' font-bold text-[#1DBF73]' : ''}`}>Home</Link>
                    <Link to={'/course'} onClick={Top} className={` rounded-full hover:text-[#1DBF73] xsm:text-[10px]  ${location.pathname === '/course' ? ' font-bold text-[#1DBF73]' : ''}`}>Courses</Link>
                    <Link to={'/career'} onClick={Top} className={` rounded-full hover:text-[#1DBF73]  xsm:text-[10px] ${location.pathname === '/career' ? ' font-bold text-[#1DBF73]' : ''}`}>Career</Link>
                    <a href={location.pathname == '/' ? '#' : '/pap'} onClick={ScrollToPap} className={` rounded-full hover:text-[#1DBF73] xsm:text-[10px] cursor-pointer  ${location.pathname === '#pap' ? ' font-bold text-[#1DBF73]' : ''}`}>PAP</a>
                    {/* <Link>Search</Link> */}
                    {userDetail?._id && <Link to={'/learning'} className={` rounded-full hover:text-[#1DBF73] xsm:text-[10px]   ${location.pathname === '/learning' ? ' font-bold text-[#1DBF73]' : ''}`}>My Learning</Link>}
                    {userDetail?._id && <Link to={'/cart'} className={` rounded-full hover:text-[#1DBF73] xsm:text-[10px] ${location.pathname === '/cart' ? ' font-bold text-[#1DBF73]' : ''}`}> <Cart style={{ color: 'white' }} className=" text-white " /> </Link>}
                </>}
                {userDetail?._id ? < Link to="/profile" className="pl-4" style={{ cursor: "pointer" }}>  <span>
                    <Account />


                </span> </Link> : <div className="flex space-x-5 pl-4 xsm:space-x-1 xsm:pl-2">
                    <Link to={"/login"} className="bg-[#1DBF73] px-7 rounded-full text-white py-1 xsm:text-[10px] xsm:px-2 ">Log in</Link>
                    <Link to={"/register"} className="bg-white px-7 rounded-full text-black py-1 xsm:text-[10px] xsm:px-2 ">Sign Up</Link>
                </div>}
            </div>
        </div>
    </>)
}