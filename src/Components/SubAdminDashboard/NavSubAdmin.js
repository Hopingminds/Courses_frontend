import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Globalinfo } from "../../App";

const NavSubAdmin = () => {
  const {adminlogin,Getadmindetails} = useContext(Globalinfo)
  let navigate=useNavigate()
function handleLogout(){
  localStorage.removeItem('token')
  Getadmindetails()
    navigate('/college-login')
  }
  useEffect(() => {
    Getadmindetails()
  }, [])
  
  return (
    <div className="flex flex-row justify-between px-[3%] py-[1%] bg-[#0F2027]">
      <Link to='/'><img src="/logo.png" className="h-[50px] w-auto xsm:w-[40px] xsm:h-[15px]" /></Link>
      <div className="flex flex-row gap-5">
        {
          adminlogin?<button
          onClick={handleLogout}
          className="bg-[#1DBF73] text-[22px] px-2 w-[150px] h-[45px] justify-center text-center rounded-full text-white py-1 xsm:text-[8px] xsm:px-3"
        >
          Log out
        </button>:<Link
          to={"/college-login"}
          className="bg-[#1DBF73] text-[22px] px-2 w-[150px] h-[45px] justify-center text-center rounded-full text-white py-1 xsm:text-[8px] xsm:px-3"
        >
          Login
        </Link>
        }
        
        {/* <Link
          to={"/subadmin-login"}
          className="bg-black text-[22px] px-2 w-[150px] h-[45px] justify-center text-center rounded-full text-white py-1 xsm:text-[8px] xsm:px-3"
        >
          Sign Up
        </Link> */}
      </div>
    </div>
  );
};

export default NavSubAdmin;
