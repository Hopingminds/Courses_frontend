import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Arrow } from "../../Assets/Icons/arrow-back.svg";
import { ReactComponent as Eye } from "../../Assets/Icons/eye.svg";
import { ReactComponent as Eyeclosed } from "../../Assets/Icons/eyeclosed.svg";

const Otp = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = () => {
      navigate("/login");
    };

    const arrowBack = () => {
        navigate("/registration");
    };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-4 px-14 pb-28">
        <div>
          <Arrow onClick={arrowBack} className="cursor-pointer" />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[630px] border border-[#EAEAEA] flex flex-col justify-center items-center rounded-2xl p-6 pb-14 gap-4">
            <div className="flex pl-1">
              <p className="text-[#000000] font-Outfit font-bold text-[32px]">Enter OTP</p>
            </div>
            <div>
                <p className="text-[#323030] text-[18px] font-Outfit">OTP sent to your mobile number +91048*****12 </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="flex flex-row border border-[#9D9D9D] rounded-md justify-between items-center pl-1 pr-4 w-[570px] h-[48px] ">
                <input
                  type={showPassword ? "text" : "password"}
                  id="OwnerPassword"
                  name="OwnerPassword"
                  placeholder="OTP*"
                  className="text-[#9D9D9D] text-[18px] p-2 w-[520px] font-Montserrat outline-none"
                />
                {showPassword ? (
                  <Eyeclosed onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <Eye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <div className="flex justify-end w-[570px] gap-1">
                <p className="flex items-end text-[#908C8C] text-[14px] font-Outfit cursor-pointer">Resend?</p>
              </div>
            </div>
            <div>
              <button onClick={handleRegister} className="bg-[#1DBF73] w-[570px] h-[48px] rounded-full text-[#FFFFFF] font-Montserrat">
              Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Otp