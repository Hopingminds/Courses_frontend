import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../Assets/Icons/arrow-back.svg";
import { ReactComponent as Eye } from "../../Assets/Icons/eye.svg";
import { ReactComponent as Eyeclosed } from "../../Assets/Icons/eyeclosed.svg";
import { ReactComponent as Square } from "../../Assets/Icons/square.svg";
import { ReactComponent as SquareCheck } from "../../Assets/Icons/squarecheck.svg";


const Login = () => {

    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = () => {
      navigate("/");
    };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-4 px-14 pb-28">
        <div>
          <Arrow onClick={handleRegister} className="cursor-arrow" />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[630px] border border-[#EAEAEA] flex flex-col justify-center rounded-2xl p-6 pb-14 gap-6">
            <div className="flex pl-1">
              <p className="text-[#000000] font-Outfit font-bold text-[32px]">Login</p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="">
                <input
                  type="email"
                  id="OwnerEmail"
                  name="OwnerEmail"
                  placeholder="Username*"
                  className="border border-[#9D9D9D] text-[#9D9D9D] text-[18px] rounded-md p-2 pl-3 w-[570px] h-[48px] font-Montserrat"
                />
              </div>
              <div className="flex flex-row border border-[#9D9D9D] rounded-md justify-between items-center pl-1 pr-4 w-[570px] h-[48px] ">
                <input
                  type={showPassword ? "text" : "password"}
                  id="OwnerPassword"
                  name="OwnerPassword"
                  placeholder="Password*"
                  className="text-[#9D9D9D] text-[18px] p-2 w-[520px] font-Montserrat outline-none"
                />
                {showPassword ? <Eyeclosed onClick={() => setShowPassword(!showPassword)} /> : <Eye onClick={() => setShowPassword(!showPassword)} />}
              </div>
              <div className="flex flex-row w-[570px] items-center gap-1">
                <div className="cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>
                {rememberMe ? <SquareCheck /> : <Square />}
                </div>
                <p className="text-[#555555] text-[18px] font-Montserrat">Remember me</p>
              </div>
            </div>
            <div>
              <button 
              onClick={handleRegister}
              className="bg-[#1DBF73] w-[570px] h-[48px] rounded-full text-[#FFFFFF] font-Montserrat">
                Login
              </button>
            </div>
            <div>
                <Link to={"/forgot-password"} className="text-[#000000] text-[18px] font-Montserrat cursor-pointer">Forgot password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
