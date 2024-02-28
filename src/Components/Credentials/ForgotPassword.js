import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Arrow } from "../../Assets/Icons/arrow-back.svg";
import { ReactComponent as Eye } from "../../Assets/Icons/eye.svg";
import { ReactComponent as Eyeclosed } from "../../Assets/Icons/eyeclosed.svg";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/login");
  };

  const confirmOtp = () => {
    navigate("/reset-password");
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-4 px-14 pb-28">
        <div>
          <Arrow onClick={handleRegister} className="cursor-pointer" />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[481px] border border-[#EAEAEA] flex flex-col justify-center items-center rounded-2xl p-6 pb-14 gap-8">
            <div className="flex pl-1 pb-4">
              <p className="text-[#000000] font-Outfit font-bold text-[32px]">
                Forget Password
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row border border-[#9D9D9D] rounded-md justify-between items-center pl-1 pr-4 w-[274px] h-[48px] ">
                <input
                  type="email"
                  id="OwnerEmail"
                  name="OwnerEmail"
                  placeholder="Email or Mobile Number*"
                  className="text-[#9D9D9D] text-[18px] p-2 w-[520px] font-Montserrat outline-none"
                />
              </div>
              <button className="text-[#FFFFFF] text-[18px] font-Montserrat bg-[#1DBF73] rounded-full w-[128px]">Send OTP</button>
            </div>
            <div>
              <p className="text-[#323030] text-[18px] font-Outfit">
                OTP sent to your mobile number +91048*****12{" "}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row border border-[#9D9D9D] rounded-md justify-between items-center pl-1 pr-4 w-[274px] h-[48px] ">
                <input
                  type="email"
                  id="OwnerEmail"
                  name="OwnerEmail"
                  placeholder="OTP*"
                  className="text-[#9D9D9D] text-[18px] p-2 w-[520px] font-Montserrat outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
              <button onClick={confirmOtp} className="text-[#FFFFFF] text-[18px] font-Montserrat bg-[#1DBF73] rounded-full w-[128px] h-[48px]">Confirm OTP</button>
              <p className="flex justify-end text-[#908C8C] text-[14px] font-Outfit">Resend?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
