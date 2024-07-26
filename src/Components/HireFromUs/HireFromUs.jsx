import React, { useState } from "react";
import Resume2 from "./Resume2";
import Companies2 from "../Companies/Companies2";
import "./hirefromus.css";
import WhyHM from "./WhyHM";
import { ReactComponent as Ok } from "../../Assets/Icons/ok.svg";
import { ReactComponent as Wb } from "../../Assests/Icons/Whatsapp.svg";
import HireTestimonial from "./HireTestimonial";
import NewHireTestimonial from "./newhiretestimonials";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../../Api/api";
import HireTable from "./HireTable";
import Close from "../../Assests/Images/close.png";
import { validateEmail ,validateMobileNumber} from "../../helpers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Companies from "../Companies";

const HireFromUs = () => {
  const navigate = useNavigate();
  const [hiredata, sethiredata] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [warnings, setwarnings] = useState({
    name:false,
    company:false,
    phone:false,
    email:false
  })
  const [loginwarnings, setloginwarnings] = useState({
    name:false,
    password:false,
    email:false
  })
  const [showpopup, setshowpopup] = useState(false);
  const [hirelogindata, sethirelogindata] = useState({
    name: "",
    email: "",
    otp: "",
  });
  const [tab, settab] = useState(1);
  const [count, setcount] = useState(1);

  function handleHover() {
    // console.log("log");
    
      setshowpopup(true);
      // setcount(2)
  
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    sethiredata({
      ...hiredata,
      [name]: value,
    });
    setwarnings((prevWarnings) => ({
      ...prevWarnings,
      [name]: false
    }));
  };
  const handleloginChange = (e) => {
    const { name, value } = e.target;
    sethirelogindata({
      ...hirelogindata,
      [name]: value,
    });
    setloginwarnings((prevWarnings) => ({ 
      ...prevWarnings,
      [name]: false
    }));
  };
  function validateUserName(username) {
    // Regular expression to match only letters (both uppercase and lowercase)
    const regex = /^[A-Za-z]+$/;

    // Test the username against the regex
    if (regex.test(username)) {
        return true;
    } else {
        return false;
    }
}
  const handleLogin = async () => {
    if ( !validateUserName(hirelogindata.name) || !hirelogindata.name) {
      // toast.error("Enter valid Email Address");
      setloginwarnings((prevWarnings) => ({
        ...prevWarnings,
        ['name']: true
      }));
      // return;
    }
    else if (!validateEmail(hirelogindata.email)) {
      // toast.error("Enter valid Email Address");
      setloginwarnings((prevWarnings) => ({
        ...prevWarnings,
        ['email']: true
      }));
      // return;
    } else if (!hirelogindata.password) {
      setloginwarnings((prevWarnings) => ({
        ...prevWarnings,
        ['password']: true
      }));
    } else {
      try {
        const res = await axios.post(`${BASE_URL}/loginrecwithemail`, {
          email: hirelogindata.email,
          password: hirelogindata.password,
        });
        if (res?.data?.token) {
          localStorage.setItem("RECTR_TOKEN", res?.data?.token);
          navigate("/managejobs");
        }

        // localStorage.setItem("COURSES_USER_TOKEN", res.data.token);
      } catch (error) {
        toast.error(error?.response?.data?.error);
      }
    }
  };
  async function handleRegister() {
   if(!validateUserName(hiredata.name) || !hiredata.name){
    setwarnings((prevWarnings) => ({
      ...prevWarnings,
      ['name']: true
    }));
    } 
  else if(!validateUserName(hiredata.company) || !hiredata.company){
    
    setwarnings((prevWarnings) => ({
      ...prevWarnings,
      ['company']: true
    }));
    } 
   else if(!validateEmail(hiredata.email)){
    console.log(warnings);
    setwarnings((prevWarnings) => ({
      ...prevWarnings,
      ['email']: true
    }));
    } 
   else if(!validateMobileNumber(hiredata.phone)){
    setwarnings((prevWarnings) => ({
      ...prevWarnings,
      ['phone']: true
    }));
    } 
 
    else {
      try {
        let url = BASE_URL + "/addhirefromusform";
        const data = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hiredata),
        });
        const response = await data.json();
        if (response.success) {
          toast.success(response.message);
          handleHover()
          sethiredata({
              "name": "",
              "email": "",
              "phone": "",
              "degree": ""
          })
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  function handleClose() {
    setshowpopup(false);
    setcount(2);
  }

  return (
    <>
      <Toaster toastOptions={{
         duration: 500,
      }}  position="top-center" />
      {showpopup && count === 1 ? (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center"
        >
          <div className="fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white flex flex-col py-6 px-4 drop-shadow-xl rounded-xl w-[40%]  md:w-[50%]  md:gap-4 xsm:w-[60%] ">
            <div className="flex justify-end">
              <button onClick={handleClose}>
                <img
                  alt="hirecard"
                  src={Close}
                  className="w-8 h-8 md:w-6 md:h-6 xsm:w-4 xsm:h-4"
                />
              </button>
            </div>
            <div className="flex flex-col gap-2 text-center px-[8%]">
              {/* <p className='font-pop font-semibold text-[40px] text-[#1DBF73]'>Lorem, ipsum.</p> */}
              <p className="font-mons md:text-[14px] xsm:text-[10px]">
                We aim to complete the verification process within 48 to 72
                hours. Thank you for your understanding as we diligently review
                the necessary information to ensure all details are accurate and
                up-to-date, maintaining our high standards of accuracy.
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className=" px-[5%] pt-[4%]  bg-gradient-to-r from-[#0F2027] to-[#203A43] wavebg "
        style={{ width: "100%" }}
      >
        {/* Mainsection */}
        <div className=" flex justify-between pb-[18%] xsm:flex-col xsm:gap-6 xsm:pb-[72%] ">
          <div className="flex flex-col gap-16 w-[70%] md:gap-10 xsm:w-full xsm:gap-6 md:w-[65%]">
            <div>
              <p className="font-pop font-semibold text-[50px] text-white md:text-[32px] xsm:text-[24px]">
                Hire Tech Talent That Delivers{" "}
                <span className="text-[#1DBF73]">Quick.simple.</span>
              </p>
            </div>

            <div className="flex flex-col gap-y-7 md:gap-y-5 xsm:gap-y-3">
              <div className="flex items-center gap-x-4 xsm:gap-x-2">
                <Ok className="md:w-6 md:h-6 xsm:w-5 xsm:h-5" />
                <div className="text-[#FFFFFF] font-semibold text-lg md:text-[14px] xsm:text-[10px]">
                  Hire from our Pan-India Talent pool, across 100+ colleges
                </div>
              </div>
              <div className="flex items-center gap-x-4 xsm:gap-x-2">
                <Ok className="md:w-6 md:h-6 xsm:w-5 xsm:h-5" />
                <div className="text-[#FFFFFF] font-semibold text-lg md:text-[14px] xsm:text-[10px]">
                  Pre-Trained Developers available across 10 profiles
                </div>
              </div>
              <div className="flex items-center gap-x-4 xsm:gap-x-2">
                <Ok className="md:w-6 md:h-6 xsm:w-5 xsm:h-5" />
                <div className="text-[#FFFFFF] font-semibold text-lg md:text-[14px] xsm:text-[10px]">
                  Experience ranging from 0 to 3 years
                </div>
              </div>
              <div className="flex items-center gap-x-4 xsm:gap-x-2">
                <Ok className="md:w-6 md:h-6 xsm:w-5 xsm:h-5" />
                <div className="text-[#FFFFFF] font-semibold text-lg md:text-[14px] xsm:text-[10px]">
                  Available for Full-Time as well as for Internships
                </div>
              </div>
              <div className="flex items-center gap-x-4 xsm:gap-x-2">
                <Ok className="md:w-6 md:h-6 xsm:w-5 xsm:h-5" />
                <div className="text-[#FFFFFF] font-semibold text-lg md:text-[14px] xsm:text-[10px]">
                  Solve your long-term Entry-Level Tech recruitment needs
                </div>
              </div>
            </div>

            {/* set the color of the border in gradient */}

            {/* <div className="grid grid-cols-2 gap-16 text-white w-[90%] md:gap-6 xsm:w-full xsm:gap-2">
              <div className="bg-[#00000033] flex flex-col gap-6 rounded-xl pb-4 bw-border md:gap-4 xsm:gap-3">
                <div className="border-b-2 w-full flex justify-center items-center py-3 xsm:py-2">
                  <p className="font-pop font-semibold text-[20px] md:text-[14px] xsm:text-[9px]">
                    Roles You Can Hire From
                  </p>
                </div>

                <div className="flex flex-col gap-6 rounded-b-xl px-4 md:gap-3 md:px-2 xsm:gap-3">
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      1.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                      Full Stack Developer
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      2.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Backend Developer
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      3.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Frontend Developer
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      4.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Data Analyst
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      5.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Software Development Engineer In Test ( SDET)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#00000033] flex flex-col gap-6 rounded-xl pb-4 bw-border md:gap-4 xsm:gap-3">
                <div className="border-b-2 w-full flex justify-center items-center py-3 xsm:py-2">
                  <p className="font-pop font-semibold text-[20px] md:text-[14px] xsm:text-[9px]">
                  Our Offerings
                  </p>
                </div>

                <div className="flex flex-col gap-6 rounded-b-xl px-4 md:gap-3 md:px-2 xsm:gap-3">
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      1.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Immediate Joining
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      2.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Zero Offer Dropouts
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      3.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Complete Hiring In 1 day
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      4.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    PAN India Availabilitiy
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#1DBF73] rounded-lg text-white font-int font-semibold text-[20px] text-center px-3 py-1 md:text-[14px] md:px-2 xsm:text-[9px] xsm:px-2 xsm:rounded-md">
                      5.
                    </div>
                    <p className="text-[20px] font-semibold font-int md:text-[14px] xsm:text-[9px]">
                    Continuous hiring pipeline
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="w-[30%] self-end xsm:w-full ">
            <div className="bg-[#00000033] rounded-xl  text-white flex flex-col gap-6 bw-border md:gap-4 md:py-3 xsm:gap-4">
              <div className="flex w-full rounded-t-xl mt-2 space-x-1">
                <button
                  className={`w-[50%] ml-1 py-2  rounded-xl ${
                    tab === 2 ? "border-b-[4px]" : "border-b-[1px]"
                  } `}
                  onClick={() => settab(2)}
                >
                  Corporate Login
                </button>
                <button
                  className={`w-[50%] mr-1 py-2  rounded-xl ${
                    tab === 1 ? "border-b-[4px]" : "border-b-[1px]"
                  }`}
                  onClick={() => settab(1)}
                >
                  Corporate Register
                </button>
              </div>
              {/* <div className="flex justify-center text-center">
                <p className="font-pop font-semibold text-[20px] md:text-[14px] xsm:text-[16px]">Share Your Hiring Requirements</p>
              </div> */}
              {tab === 1 ? (
                <div
                  className="flex flex-col gap-2 px-6 
                h-[350px] xsm:h-[300px]"
                >
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[16px] font-medium md:text-[12px] xsm:text-[14px]"
                      htmlFor="name"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      className={`bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px] xsm:text-[14px] ${warnings.name ? 'border border-red-500' : ''}`}
                      onChange={handleChange}
                      value={hiredata.name}
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[16px] font-medium md:text-[12px] xsm:text-[14px]"
                      htmlFor="pass"
                    >
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="pass"
                      name="company"
                      onChange={handleChange}
                      value={hiredata.company}
                      className={`bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px] xsm:text-[14px] ${warnings.company ? 'border border-red-500' : ''}`}
                      type="text"
                      placeholder="Enter your Company"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[16px] font-medium md:text-[12px] xsm:text-[14px]"
                      htmlFor="study"
                    >
                      Work E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      onChange={handleChange}
                      value={hiredata.email}
                      name="email"
                      id="study"
                      className={`bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px] xsm:text-[14px] ${warnings.email ? 'border border-red-500' : ''}`}
                      type="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[16px] font-medium md:text-[12px] xsm:text-[14px]"
                      htmlFor="time"
                    >
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                      onChange={handleChange}
                      value={hiredata.phone}
                      id="time"
                      name="phone"
                      className={`bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px] xsm:text-[14px] ${warnings.phone ? 'border border-red-500' : ''}`}
                      type="number"
                      placeholder="Enter your Mobile number"
                      maxLength={10}
                    />  
                  </div>
                  <div className="px-6 mt-2">
                    <button
                      onClick={handleRegister}
                      className="bg-[#1DBF73] border-[1px] border-[#808080] rounded-md py-1 font-int font-medium w-full md:text-[14px] xsm:text-[14px]"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-y-5 px-6 h-[350px] xsm:h-[300px]">
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[16px] font-medium md:text-[12px] xsm:text-[14px]"
                      htmlFor="name"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      className={`bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px] xsm:text-[14px] ${loginwarnings.name ? 'border border-red-500' : ''}`}
                      onChange={handleloginChange}
                      value={hirelogindata.name}
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[16px] font-medium md:text-[12px] xsm:text-[14px]"
                      htmlFor="email"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      className={`bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px] xsm:text-[14px] ${loginwarnings.email ? 'border border-red-500' : ''}`}
                      onChange={handleloginChange}
                      value={hirelogindata.email}
                      type="text"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[16px] font-medium md:text-[12px] xsm:text-[14px]"
                      htmlFor="otp"
                    >
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="password"
                      name="password"
                      className={`bg-[#00000033] border-[1px] border-[#808080] rounded-md px-3 py-[6px] text-[#808080] text-[16px] md:text-[12px] xsm:text-[14px] ${loginwarnings.password ? 'border border-red-500' : ''}`}
                      onChange={handleloginChange}
                      value={hirelogindata.password}
                      type="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="px-6 mt-5">
                    <button
                      onClick={handleLogin}
                      className="bg-[#1DBF73] border-[1px] border-[#808080] rounded-md py-1 font-int font-medium w-full md:text-[14px] xsm:text-[14px]"
                    >
                      Login
                    </button>
                  </div>
                </div>
              )}

              <div className="flex justify-center px-6 mb-4">
                <Link
                  target="_blank"
                  to="https://wa.me/qr/S3LVDB3Y3SB3H1"
                  className="font-int font-medium text-[40px] md:text-[30px]"
                >
                  <Wb className="h-10 w-10 md:w-6 md:h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Companies2 />
      <Resume2 />
      <WhyHM />
      {/* <HireTable /> */}
      <div className="px-[5%] bg-gradient-to-l from-[#0F2027] via-[#0B1418] to-[#203A43]">
        <NewHireTestimonial />
      </div>
    </>
  );
};

export default HireFromUs;
