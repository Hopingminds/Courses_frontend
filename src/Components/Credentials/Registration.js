import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from 'react-hot-toast'
import { COURSESURL } from "../Confidential";
import { ReactComponent as Arrow } from "../../Assets/Icons/arrow-back.svg";
import { ReactComponent as Eye } from "../../Assets/Icons/eye.svg";
import { ReactComponent as Eyeclosed } from "../../Assets/Icons/eyeclosed.svg";

// confirm
// clg name, stream year of passing

const Registration = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);

  const [user, setuser] = useState({
    username: "",
    college: "",
    stream: "",
    email: "",
    yearofpass: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    console.log(user)
    if (!user.username || !user.password || !user.email || !user.college || !user.stream || !user.yearofpass) {
      toast.error("Enter Valid Credentials");
      return;
    }
    setBtnLoader(true);
    try {
      const res = await axios.post(`${COURSESURL}api/register`, {
        username: user.username,
        password: user.password,
        email: user.email,
        college: user.college,
        stream: user.stream,
        yearofpass: user.yearofpass

      })

      console.log(res);

      toast.success("Register Successfull")

      // getUserDetails()
      // localStorage.setItem('COURSES_USER_TOKEN', res.data.token)
      navigate('/')


    } catch (error) {
      console.log(error);
      toast.error("Some Error Occured while Login")
    } finally {
      setBtnLoader(false)
    }

  };

  const arrowBack = () => {
    navigate("/");
  };

  return (
    <>
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
                    type="email"
                    id="OwnerEmail"
                    name="OwnerEmail"
                    onChange={handleChange}
                    placeholder="Email or Mobile Number*"
                    className="border border-[#9D9D9D] text-[#9D9D9D] text-[18px] rounded-md p-2 pl-3 w-[570px] h-[48px] font-Montserrat"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    id="OwnerEmail"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    type="text"
                    id="college"
                    name="college"
                    onChange={handleChange}
                    value={user.college}
                    placeholder="College name*"
                    className="border border-[#9D9D9D] text-[#9D9D9D] text-[18px] rounded-md p-2 pl-3 w-[570px] h-[48px] font-Montserrat"
                  />
                </div>
                <div className="flex flex-row w-[570px] justify-between">
                  <div className="">
                    <input
                      type="email"
                      id="stream"
                      name="stream"
                      value={user.stream}
                      onChange={handleChange}
                      placeholder="Stream*"
                      className="border border-[#9D9D9D] text-[#9D9D9D] text-[18px] rounded-md p-2 pl-3 w-[250px] h-[48px] font-Montserrat"
                    />
                  </div>
                  <div className="">
                    <input
                      type="email"
                      id="yearofpass"
                      name="yearofpass"
                      value={user.yearofpass}
                      onChange={handleChange}
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
                  {btnLoader ? "Loading..." : "Register"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Registration;
