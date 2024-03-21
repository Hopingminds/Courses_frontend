import React from "react";
import { Link } from "react-router-dom";

const NavSubAdmin = () => {
  return (
    <div className="flex flex-row justify-between px-[3%] py-[1%]">
      <img src="/logo.png" className="xsm:w-[40px] xsm:h-[15px]" />
      <div className="flex flex-row gap-5">
        <Link
          to={"/subadmin-login"}
          className="bg-[#1DBF73] text-[22px] px-2 w-[150px] h-[45px] justify-center text-center rounded-full text-white py-1 xsm:text-[8px] xsm:px-3"
        >
          Login
        </Link>
        <Link
          to={"/subadmin-login"}
          className="bg-black text-[22px] px-2 w-[150px] h-[45px] justify-center text-center rounded-full text-white py-1 xsm:text-[8px] xsm:px-3"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavSubAdmin;
