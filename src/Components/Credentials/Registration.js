import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Arrow } from "../../Assets/Icons/arrow-back.svg";
import { ReactComponent as Eye } from "../../Assets/Icons/eye.svg";
import { ReactComponent as Eyeclosed } from "../../Assets/Icons/eyeclosed.svg";

// confirm
// clg name, stream year of passing

const Registration = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState()
const [username, setusername] = useState()
const [password, setpassword] = useState()
const [clg, setclg] = useState()
const [stream, setstream] = useState()
const [passingyear, setpassingyear] = useState()

  const handleRegister = () => {
    navigate("/otp");
  };

  const arrowBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-4 px-14 pb-28">
        <div>
          <Arrow onClick={arrowBack} className="cursor-pointer" />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[630px] border border-[#EAEAEA] flex flex-col justify-center rounded-2xl p-6 pb-14 gap-8">
            <div className="flex pl-1">
              <p className="text-[#000000] font-Outfit text-[32px] font-bold">
                Register
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="">
                <input
                value={email}
                  type="email"
                  id="OwnerEmail"
                  name="OwnerEmail"
                  placeholder="Email or Mobile Number*"
                  className="border border-[#9D9D9D] text-[#9D9D9D] text-[18px] rounded-md p-2 pl-3 w-[570px] h-[48px] font-Montserrat"
                />
              </div>
              <div className="">
                
                <input
                value={username}
                  type="text"
                  id="OwnerEmail"
                  name="OwnerEmail"
                  placeholder="usernamename*"
                  className="border border-[#9D9D9D] text-[#9D9D9D] text-[18px] rounded-md p-2 pl-3 w-[570px] h-[48px] font-Montserrat"
                />
              </div>
              <div className="flex flex-row border border-[#9D9D9D] rounded-md justify-between items-center pl-1 pr-4 w-[570px] h-[48px] ">
                <input
                value={password}
                  type={showPassword ? "text" : "password"}
                  id="OwnerPassword"
                  name="OwnerPassword"
                  placeholder="Password*"
                  className="text-[#9D9D9D] text-[18px] p-2 w-[520px] font-Montserrat outline-none"
                />
                {showPassword ? (
                  <Eyeclosed onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <Eye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <div className="">
                <input
                value
                  type="email"
                  id="OwnerEmail"
                  name="OwnerEmail"
                  placeholder="College name*"
                  className="border border-[#9D9D9D] text-[#9D9D9D] text-[18px] rounded-md p-2 pl-3 w-[570px] h-[48px] font-Montserrat"
                />
              </div>
              <div className="flex flex-row w-[570px] justify-between">
                <div className="">
                  <input
                    type="email"
                    id="OwnerEmail"
                    name="OwnerEmail"
                    placeholder="Stream*"
                    className="border border-[#9D9D9D] text-[#9D9D9D] text-[18px] rounded-md p-2 pl-3 w-[250px] h-[48px] font-Montserrat"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    id="OwnerEmail"
                    name="OwnerEmail"
                    placeholder="Year of passing*"
                    className="border border-[#9D9D9D] text-[#9D9D9D] text-[18px] rounded-md p-2 pl-3 w-[250px] h-[48px] font-Montserrat"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleRegister}
                className="bg-[#1DBF73] w-[570px] h-[48px] rounded-full text-[#FFFFFF] font-Montserrat"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
