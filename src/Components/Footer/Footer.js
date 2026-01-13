import React from "react";
import Img1 from "../../Assests/Icons/footer1.svg";
import Icon1 from "../../Assests/Icons/insta.svg";
import Icon2 from "../../Assests/Icons/fb.svg";
import Icon3 from "../../Assests/Icons/lkd.svg";
import Icon4 from "../../Assests/Icons/yt.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  function Top() {
    window.scrollTo(0, 0);
  }
  // console.log(pathname)
  return (
    <>
      <style>
        {`
            @layer utilities {
                .bg-radial-gradient {
                  background-image: radial-gradient(circle, #0F2027 0%, #0B1418 100%, #203A43 100%);
                }
              }
            `}
      </style>
      <div className="flex flex-col gap-14  pt-10 pb-4 xsm:gap-8 bg-radial-gradient sm:gap-9 md:gap-10 md:pt-8 xsm:min-w-[320px]">
        <div className="flex  justify-between px-[5%] xsm:pl-[5%] xsm:flex xsm:flex-col xsm:gap-8">
          <div className="flex flex-col gap-5 w-[260px] xsm:gap-2 xsm:w-[90%] md:gap-6">
            <div onClick={() => navigate("/")}>
              <img
                src="/logo.png"
                className="w-auto h-[50px] xsm:w-[40%] xsm:h-[10%] sm:w-[45%] sm:h-[30px] md:w-[60%]  cursor-pointer"
                alt=""
              />
            </div>
            <p className="text-white text-[12px] font-pop text-balance w-[90%] xsm:w-[100%] xsm:text-[11px] sm:text-[10px] md:text-[12px] md:w-[90%] md:pl-2">
              HopingMinds offers holistic development programs designed to
              position students in high-growth roles through our network of over
              200+ corporate partners. Our tailored approach ensures you're not
              just prepared, but primed for success in your chosen field.
            </p>
          </div>
          <div className="flex justify-between w-[70%] xsm:grid xsm:grid-cols-2 xsm:gap-x-4 xsm:gap-y-8 xsm:w-[90%]">
            <div className="flex flex-col gap-8 xsm:gap-2 sm:gap-6">
              <p className="text-white text-[20px] font-pop font-semibold xsm:text-[12px] sm:text-[12px] md:text-[14px]">
                GET HELP
              </p>
              <div className="flex flex-col gap-3 xsm:gap-1 md:gap-2">
                {/* <Link className='text-white text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px]'>Contact Us</p> */}
                <Link
                  to="/privacy"
                  className={` text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px] ${
                    pathname == "/privacy" ? "text-[#1dbf73]" : "text-white"
                  }`}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className={`${
                    pathname == "/terms" ? "text-[#1dbf73]" : "text-white"
                  } text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px] `}
                >
                  Terms and Conditions
                </Link>
                {/* <Link
                  to="/pap"
                  className={`${
                    pathname == "/pap" ? "text-[#1dbf73]" : "text-white"
                  } text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]`}
                >
                  Pay After Placement
                </Link> */}
                {/* <Link to='/career' className='text-white text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]'>Career</Link> */}
                <Link
                  to="/about"
                  className={`${
                    pathname == "/about" ? "text-[#1dbf73]" : "text-white"
                  } text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]`}
                >
                  About
                </Link>
                {/* <Link to='/hire-from-us' className='text-white text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]'>Hire From Us</Link> */}
                <Link
                  to="/cv-builder"
                  className={`${
                    pathname == "/cv-builder" ? "text-[#1dbf73]" : "text-white"
                  } text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]`}
                >
                  CV Builder
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-8 xsm:gap-2 sm:gap-6">
              <p className="text-white text-[20px] font-pop font-semibold xsm:text-[12px] sm:text-[12px] md:text-[14px]">
                PROGRAMS
              </p>
              <div
                className="flex flex-col gap-3 xsm:gap-1 md:gap-2"
                onClick={Top}
              >
                <Link
                  to="/courses?category=App Development"
                  className={`${
                    window.location.href == "/courses?category=App Development"
                      ? "text-[#1dbf73]"
                      : "text-white"
                  } text-white text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]`}
                >
                  App Development
                </Link>
                <Link
                  to="/courses?category=Full Stack Development"
                  className={`${
                    window.location.href ==
                    "/courses?category=Full Stack Development"
                      ? "text-[#1dbf73]"
                      : "text-white"
                  } text-white text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]`}
                >
                  Full Stack Development
                </Link>
                <Link
                  to="/courses?category=Management"
                  className={`${
                    window.location.href == "/courses?category=Management"
                      ? "text-[#1dbf73]"
                      : "text-white"
                  } text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]`}
                >
                  Managements
                </Link>
                <Link
                  to="/courses?category=Finance"
                  className={`${
                    window.location.href == "/courses?category=Finance"
                      ? "text-[#1dbf73]"
                      : "text-white"
                  } text-white text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]`}
                >
                  Finance
                </Link>

                <Link
                  to="/courses?category=AI/ML"
                  className={`${
                    window.location.href == "/courses?category=AI/ML"
                      ? "text-[#1dbf73]"
                      : "text-white"
                  } text-white text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]`}
                >
                  AI/ML
                </Link>
                {/* <Link
                  to="/courses?category=Networking"
                  className={`${window.location.href=='/courses?category=Networking' ? 'text-[#1dbf73]' : 'text-white'} text-white text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]`}
                >
                  Networking
                </Link> */}
                <Link
                  to="/courses?category=Data Science"
                  className={`${
                    window.location.href == "/courses?category=Data Science"
                      ? "text-[#1dbf73]"
                      : "text-white"
                  } text-white text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]`}
                >
                  Data Science
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-8 xsm:gap-2 sm:gap-6">
              <p className="text-white text-[20px] font-pop font-semibold xsm:text-[12px] sm:text-[12px] md:text-[14px]">
                CONTACT US
              </p>
              <div className="flex flex-col gap-3 xsm:gap-1 md:gap-2">
                <div className=" text-white text-[16px]  font-pop flex flex-col xsm:flex-col  xsm:text-[11px] sm:text-[9px] md:text-[10px]">
                  {/* <Link
                    className="hover:text-[#1dbf73]"
                    to="callto:917657922600"
                  >
                    Tel: +91 76579 22600,
                  </Link> */}
                </div>
                <div className=" text-white text-[16px]  font-pop flex flex-col xsm:flex-col  xsm:text-[11px] sm:text-[9px] md:text-[10px]">
                  <Link className="hover:text-[#1dbf73]" to="callto:76960 01117">
                    Tel: +91 76960 01117
                  </Link>
                </div>
                <Link
                  to="mailto:support@hopingminds.com"
                  target="_blank"
                  className={`${
                    pathname == "/privacy" ? "text-[#1dbf73]" : "text-white"
                  } text-white text-[16px] hover:text-[#1dbf73] font-pop xsm:text-[11px] sm:text-[9px] md:text-[10px]`}
                >
                  Email: support@hopingminds.com
                </Link>
                <div className="flex flex-row gap-2 items-center">
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/hopingminds_?igsh=MWxvN2F5YmM0aW1lYQ=="
                  >
                    {" "}
                    <img
                      src={Icon1}
                      alt="no icon"
                      className="w-[36px] h-[36px] xsm:w-[18px] xsm:h-[18px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] bg-red-400 rounded-lg"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/share/Z3c1iwpnxsDk3YJH/?mibextid=qi2Omg"
                  >
                    {" "}
                    <img
                      src={Icon2}
                      alt="no icon"
                      className="w-[36px] h-[36px] xsm:w-[18px] xsm:h-[18px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] bg-blue-700 rounded-lg"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/company/hoping-minds/"
                  >
                    <img
                      src={Icon3}
                      alt="no icon"
                      className="w-[36px] h-[36px] xsm:w-[18px] xsm:h-[18px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] bg-blue-700 rounded-lg"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://youtube.com/@HopingMinds?si=t7nBGjhMukWF6aN9"
                  >
                    {" "}
                    <img
                      src={Icon4}
                      alt="no icon"
                      className="w-[36px] h-[36px] xsm:w-[18px] xsm:h-[18px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] bg-red-700 rounded-lg"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center xsm:gap-1">
          <img
            src={Img1}
            alt="no icon"
            className=" xsm:w-[18px] xsm:h-[18px] sm:w-[16px] sm:h-[16px] md:w-[16px] md:h-[16px]"
          />
          <p className="text-white text-[16px] hover:text-[#1dbf73] font-pop font-semibold xsm:text-[12px] sm:text-[11px] md:text-[12px]">
            KATINA SKILLS PRIVATE LIMITED 2025
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
