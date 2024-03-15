import { Link } from "react-router-dom";

export default function Navbar(){
    return(<>
    <div className="w-full flex justify-between px-[5%] h-20 items-center shadow-lg font-pop">
        <Link to='/' className="">
            <img src="/logo.png"/>
        </Link>
        <div className="flex space-x-10 items-center">
            <Link to='/'>Home</Link>
            <Link>Courses</Link>
            {/* <Link>Search</Link> */}
            <Link to='/learning'>My Learning</Link>
            <Link>Cart</Link>
            <div className="flex space-x-5">
            <Link className="bg-[#1DBF73] px-7 rounded-full text-white py-1">Login</Link>
            <Link  className="bg-black px-7 rounded-full text-white py-1">Sign UP</Link>
            </div>
        </div>
    </div>
    </>)
}