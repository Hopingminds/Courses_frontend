import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { validateEmail } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { AUTH_BASE_URL, BASE_URL } from "../../Api/api";
import { Globalinfo } from "../../App";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { jwtDecode } from "jwt-decode";
import { ReactComponent as Google } from "../../Assests/Icons/google.svg";
import { ReactComponent as Linkedin } from "../../Assests/Icons/linkedin.svg";
import { useSearchParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  let token=localStorage.getItem('COURSES_USER_TOKEN')
  useEffect(() => {
    if(token){
      navigate('/')
    }
  }, [])
  

  const { userDetail, getUserDetails, GetCart, GetWishList } =
    useContext(Globalinfo);
  const [btnLoader, setBtnLoader] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const handleLogin = async () => {
    setBtnLoader(true);
    if (!validateEmail(user.email)) {
      toast.error("Enter valid Email Address");
      setBtnLoader(false);
      return;
    } else if (!user.password) {
      toast.error("Enter Your Password");
      setBtnLoader(false);
      return;
    } else {
      try {
        const res = await axios.post(`${BASE_URL}/login`, {
          email: user.email,
          password: user.password,
        });
        getUserDetails();
        toast.success("Login Successful");
        localStorage.setItem("COURSES_USER_TOKEN", res.data.token);
        if (res.status) {
          const decoded = jwtDecode(res?.data?.token);

          try {
            const res = await axios.get(`${BASE_URL}/user/${decoded.email}`);
            if (localStorage.getItem("history")) {
              let history = localStorage.getItem("history");
              localStorage.removeItem("history");
              navigate(history);
            } else if (localStorage.getItem("ADD_TO_CART_HISTORY")) {
              let history = localStorage.getItem("ADD_TO_CART_HISTORY");
              localStorage.removeItem("ADD_TO_CART_HISTORY");
              navigate(history);
            } else {
              if (res?.data?.userDetails?.purchased_courses.length > 0) {
                navigate("/learning");
              } else {
                navigate("/courses");
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        toast.error(error?.response?.data?.error);
      } finally {
        setBtnLoader(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "password") {
        handleLogin();
      } else {
        const inputs = document.getElementsByTagName("input");
        const index = Array.prototype.indexOf.call(inputs, e.target);
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    }
  };

  const handleGoogleLogin = () => {
    let current=localStorage.getItem('current')
    if(current){
        if(current=='/college-login' || current=='/college-dashboard'){
            window.open(`${AUTH_BASE_URL}/google?redirect=/}`, "_self");

        }
        else{
            window.open(`${AUTH_BASE_URL}/google?redirect=${current}`, "_self");

        }
      }
      else{
        window.open(`${AUTH_BASE_URL}/google?redirect=/courses`, "_self");
      } 
    // navigate(localStorage.getItem('current'))
  };

  const handleLinkedInLogin = () => {
    let current=localStorage.getItem('current')
    if(current){
        if(current=='/college-login' || current=='/college-dashboard'){
            window.open(`${AUTH_BASE_URL}/linkedin?redirect=/}`, "_self");

        }
        else{
            window.open(`${AUTH_BASE_URL}/linkedin?redirect=${current}`, "_self");

        }
      }
      else{
        window.open(`${AUTH_BASE_URL}/linkedin?redirect=/courses`, "_self");
      } 
  };

  return (
    <>
      <div className="flex  overflow-hidden pb-6">
        <div className="w-[50%] xl:h-[75vh] flex justify-center relative xsm:hidden">
          <img
            className="w-[60%] sm:w-[80%] object-cover absolute top-10"
            src="../login_bg.png"
            alt="Login Background"
          />
        </div>
        
        <div className="flex flex-col xl:my-[10rem] items-center  my-16 w-[45%] gap-4 xsm:w-full md:my-12 sm:my-5">
        <div><h2 className="text-[18px] font-pop  md:text-[16px] xsm:text-[16px] sm:text-[16px] pb-4 sm:pb-1 ">Welcome to Hoping Minds</h2></div>
          {/* <p className='font-pop text-[14px]'>Welcome to Hoping Minds</p> */}
          <div className="flex flex-col w-[65%] gap-4 xsm:w-[90%] sm:w-[100%] md:w-[100%] ">
            <div className="flex justify-between bg-[#e2fff1] rounded-full py-2 mx-16 sm:mx-8 xl:mx-auto xl:w-[55%]">
              <button className="bg-transparent cursor-pointer Loginactive sm:text-[12px]">
                Login
              </button>
              <button
                className="bg-transparent cursor-pointer Logininactive sm:text-[12px]"
                onClick={() => navigate("/register-user")}
              >
                Register
              </button>
            </div>
            <div className="flex flex-col xl:w-[70%] xl:mx-auto gap-4">
              <div>
                <p className="text-[14px] font-pop md:text-[12px] xsm:text-[12px] sm:text-[12px]">
                  Username/Email <span className="text-red-500">*</span>
                </p>
                <input
                  className="w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] md:py-[7px] text-[14px] md:text-[12px] xsm:text-[12px] font-pop font-light rounded-full xsm:py-[7px] outline-none sm:text-[12px] sm:py-[7px]"
                  type="text"
                  placeholder="Enter Your Username/Email"
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div style={{ position: "relative" }}>
                <p className="text-[14px] font-pop md:text-[12px] xsm:text-[12px] sm:text-[12px]">
                  Password <span className="text-red-500">*</span>
                </p>
                <input
                  className="w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] md:py-[7px] text-[14px] md:text-[12px] xsm:py-[7px] xsm:text-[12px] font-pop font-light rounded-full outline-none sm:text-[12px] sm:py-[7px] "
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  name="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  onKeyDown={handleKeyDown}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "15px",
                  }}
                >
                  {showPassword ? (
                    <IoEyeOutline
                      color="#1dbf73"
                      size={18}
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  ) : (
                    <IoEyeOffOutline
                      color="#1dbf73"
                      size={18}
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  )}
                </span>
              </div>
              <div className="flex justify-end">
                {/* <div className='flex items-center gap-1'>
                                    <input className='' type="checkbox" />
                                    <p className='text-[12px]'>Remember me</p>
                                </div> */}
                <Link to={"/forgot-password"}>
                  <h6 className="xsm:text-[12px] md:text-[12px] sm:text-[12px]">
                    Forgot password?
                  </h6>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-3">
              <div className="  ">
                <button
                  className="bg-[#1DBF73] py-2 px-7 rounded-full xsm:text-[12px] sm:text-[14px] sm:py-1 xsm:py-1 text-white font-nu font-bold md:py-1 md:text-[14px]"
                  onClick={handleLogin}
                >
                  {btnLoader ? "Loading..." : "Login"}
                </button>
              </div>
              <div className="flex items-center gap-1">
                <p className="font-pop text-[14px] md:text-[10px] xsm:text-[10px] sm:text-[10px]">
                  New here?
                </p>
                <Link to={"/register-user"}>
                  <h5 className="text-[#1dbf73] md:text-[12px] xsm:text-[12px] sm:text-[12px]">
                 Sign Up
                  </h5>
                </Link>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="flex gap-4 items-center">
                  <span onClick={handleGoogleLogin} className="cursor-pointer">
                    <Google className='sm:w-[20px] sm:h-[20px]'/>
                  </span>
                  <span
                    onClick={handleLinkedInLogin}
                    className="cursor-pointer"
                  >
                    <Linkedin className='sm:w-[25px] sm:h-[25px]'/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster    toastOptions={{
        duration: 500,
      }} position="top-center" />
    </>
  );
};

export default Login;
