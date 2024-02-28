import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Arrow } from "../../Assets/Icons/arrow-back.svg";
import { ReactComponent as Eye } from "../../Assets/Icons/eye.svg";
import { ReactComponent as Eyeclosed } from "../../Assets/Icons/eyeclosed.svg";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleBack = () => {
      navigate("/forgot-password");
    };

    const resetPassword = () => {
        navigate("/login");
    }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-4 px-14 pb-28">
        <div>
          <Arrow onClick={handleBack} className="cursor-pointer" />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[600px] border border-[#EAEAEA] flex flex-col justify-center items-center rounded-2xl p-6 pb-14 gap-12">
            <div className="flex pl-1">
              <p className="text-[#000000] font-Outfit font-bold text-[32px]">Enter New Password</p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="flex flex-row border border-[#9D9D9D] rounded-md justify-between items-center pl-1 pr-4 w-[520px] h-[48px] ">
                <input
                  type={showPassword ? "text" : "password"}
                  id="OwnerPassword"
                  name="OwnerPassword"
                  placeholder="New Password*"
                  className="text-[#9D9D9D] text-[18px] p-2 w-[520px] font-Montserrat outline-none"
                />
                {showPassword ? (
                  <Eyeclosed onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <Eye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <div className="flex flex-row border border-[#9D9D9D] rounded-md justify-between items-center pl-1 pr-4 w-[520px] h-[48px] ">
                <input
                  type={showPassword ? "text" : "password"}
                  id="OwnerPassword"
                  name="OwnerPassword"
                  placeholder="Confirm Password*"
                  className="text-[#9D9D9D] text-[18px] p-2 w-[520px] font-Montserrat outline-none"
                />
                {showPassword ? (
                  <Eyeclosed onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <Eye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
            </div>
            <div>
              <button onClick={resetPassword} className="bg-[#1DBF73] w-[520px] h-[48px] rounded-full text-[#FFFFFF] font-Montserrat">
               Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword