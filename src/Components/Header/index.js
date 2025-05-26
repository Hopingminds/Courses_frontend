import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger and close icons
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AUTH_BASE_URL, BASE_URL } from "../../Api/api";
import { Globalinfo } from "../../App";
import { ReactComponent as Account } from "../../Assets/Icons/account.svg";
import { ReactComponent as Cart } from "../../Assets/Icons/cart.svg";

export default function Navbar() {
  const [profile, setProfile] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close
  let token = localStorage.getItem("COURSES_USER_TOKEN");
  const { cartSize, userDetail } = useContext(Globalinfo);

  const location = useLocation();
  const navigate = useNavigate();

  function Top() {
    window.scrollTo(0, 0);
    navigate("/");
    return null;
  }

  function ScrollToPap(event) {
    event.preventDefault();
    const navbarHeight = 80;
    const papElement = document.getElementById("pap");
    if (papElement) {
      const targetOffset = papElement.offsetTop - navbarHeight;
      window.scrollTo({ top: targetOffset, behavior: "smooth" });
    } else {
      navigate("/pap");
    }
  }

  async function FetchData() {
    try {
      let token = localStorage.getItem("COURSES_USER_TOKEN");
      if (token) {
        let URL = BASE_URL + "/user/" + jwtDecode(token.email);
        const data = await fetch(URL);
        const response = await data.json();
        setProfile(response?.profile);
        console.log(response?.profile);
      }
    } catch (error) {
      console.error(error);
    }
  }
  let temp = true;
  useEffect(() => {
    if (temp) {
      temp = false;
      FetchData();
    }
  }, []);
  useEffect(() => {
    return setIsMenuOpen(false);
  }, [location.pathname]);
  const handleLogOut = async () => {
    localStorage.removeItem("COURSES_USER_TOKEN");
    const allCookies = Cookies.get();
    Object.keys(allCookies).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
    if ("caches" in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          caches.delete(cacheName);
        });
      });
    }
    window.open(`${AUTH_BASE_URL}/logout`, "_self");
  };

  return (
    <>
      <style>
        {`
        .custom-tooltip {
            position: relative;
            display: inline-block;
           
        }
        
        .custom-tooltip .tooltiptext {
            visibility: hidden;
            width: 160px;
            background-color: white;
            color: white;
            text-align: center;
            border-radius: 6px;
            padding: 5px 10px 10px 10px;
            position: absolute;
            z-index: 1;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            opacity: 1;
            transition: opacity 0.3s;
        }
        
        .custom-tooltip .tooltiptext::after {
            content: "";
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -10px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent black transparent;
        }
        
        .custom-tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }
        
        @media (max-width: 480px) {
          .navbar-menu {
            flex-direction: column;
            align-items: center;
           
            
          }
        }
           @media (min-width: 481px) and (max-width: 720px) {
          .custom-tooltip {
           
            position: absolute;
            bottom: 100%;
            left: 50%;
        
            
          }
        }
        `}
      </style>
      <div className="w-full 2xl:w-[66%] flex justify-between px-[5%] h-20 items-center  font-pop fixed top-0 z-[9999] bg-[#0F2027] xsm:h-12 sm:px-[3%] sm:h-12 xsm:px-[2%] text-white md:h-14">
        <Link to="/" onClick={Top} className=" cursor-pointer">
          <img
            src="/logo.png"
            className="h-[50px] w-auto xsm:w-auto xsm:h-[27px] sm:w-[50px] sm:h-[27px] md:w-[70px] md:h-[30px]"
            alt="Logo"
          />
        </Link>
        {window.innerWidth <= 480 ? (
          <>
            <div
              className="block md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="absolute top-2 right-[160px]" size={24} />
              ) : (
                <FiMenu className="" size={24} />
              )}
            </div>
            <div
              className={`navbar-menu absolute top-0 right-0 h-screen py-5 w-[150px] gap-6 bg-[#0F2027] ${
                isMenuOpen ? "flex" : "hidden"
              }  md:flex space-x-10 items-center xsm:space-x-2 md:space-x-4 sm:space-x-3`}
            >
              {userDetail?.role !== "subadmin" && (
                <>
                  <Link
                    to="/"
                    onClick={Top}
                    className={` rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] md:text-[14px] font-pop ${
                      location.pathname === "/"
                        ? " font-bold text-[#1DBF73]"
                        : ""
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/courses"
                    onClick={Top}
                    className={` rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] md:text-[14px] font-pop  ${
                      location.pathname === "/courses"
                        ? " font-bold text-[#1DBF73]"
                        : ""
                    }`}
                  >
                    Courses
                  </Link>
                  <Link
                    to={"/internshipprogram"}
                    onClick={Top}
                    className={` rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] md:text-[14px] font-pop  ${
                      location.pathname === "/internshipprogram"
                        ? " font-bold text-[#1DBF73]"
                        : ""
                    }`}
                  >
                    Internship
                  </Link>
                  {!token ? (
                    <Link
                      to="/hire-from-us"
                      onClick={Top}
                      className={` rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] md:text-[14px] font-pop ${
                        location.pathname === "/hire-from-us"
                          ? " font-bold text-[#1DBF73]"
                          : ""
                      }`}
                    >
                      Hire From Us
                    </Link>
                  ) : (
                    ""
                  )}
                  <a
                    href={location.pathname === "/" ? "#" : "/pap"}
                    onClick={ScrollToPap}
                    className={`rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] md:text-[14px] font-pop ${
                      location.pathname === "/pap"
                        ? "font-bold text-[#1DBF73]"
                        : ""
                    }`}
                  >
                    PAP
                  </a>
                  {userDetail?._id && (
                    <Link
                      to="/learning"
                      className={` rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] md:text-[14px] font-pop ${
                        location.pathname === "/learning"
                          ? " font-bold text-[#1DBF73]"
                          : ""
                      }`}
                    >
                      My Learning
                    </Link>
                  )}
                  {userDetail?._id && (
                    <Link
                      to="/cart"
                      className={` rounded-full hover:text-[#1DBF73] relative ${
                        location.pathname === "/cart"
                          ? " font-bold text-[#1DBF73]"
                          : ""
                      }`}
                    >
                      <Cart
                        style={{ color: "white" }}
                        className=" text-white xsm:h-[15px] xsm:w-[15px] sm:h-[28px] sm:w-[28px] md:h-[20px] md:w-[20px]"
                      />
                      <div className="absolute -right-2 -top-3 bg-[#1DBF73] text-white rounded-full w-4 h-4 flex justify-center">
                        <p className="text-[12px] font-normal">{cartSize}</p>
                      </div>
                    </Link>
                  )}
                </>
              )}
              {userDetail?._id ? (
                <div
                  className=" xsm:pl-2 md:pl-1"
                  style={{ cursor: "pointer" }}
                >
                  <span>
                    <div className="custom-tooltip">
                      <span className="tooltiptext flex flex-col gap-3 p-2 text-[14px] md:text-[12px] sm:text-[10px] xsm:text-[8px] bg-gradient-to-r from-[#0F2027] via-[#0B1418] to-[#203A43] ">
                        <p>{userDetail?.name?.split(" ")[0]}</p>
                        {userDetail?.isProfileComplete ? (
                          <Link
                            className="text-[#1DBF73] font-semibold"
                            to="/profile"
                          >
                            View Profile
                          </Link>
                        ) : (
                          <Link className="text-[#1DBF73] " to="/profile">
                            Profile
                          </Link>
                        )}
                        <button
                          onClick={handleLogOut}
                          className="text-[#FFFFFF]  text-[16px] font-nu bg-[#1DBF73] rounded-full px-3 py-1 xsm:text-[8px] xsm:px-2 md:text-[16px] md:px-2"
                        >
                          Log Out
                        </button>
                      </span>
                      {userDetail?.profile ? (
                        <img
                          src={userDetail?.profile}
                          className="h-9 w-9 rounded-full object-cover xsm:h-[25px] xsm:w-[25px] sm:h-[28px] sm:w-[28px] md:h-[30px] md:w-[30px]"
                          alt="Profile"
                        />
                      ) : (
                        <Account className="w-9 h-9 rounded-full xsm:h-[25px] xsm:w-[25px] sm:h-[28px] sm:w-[28px] md:h-[30px] md:w-[30px] z-20" />
                      )}
                    </div>
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-6 space-x-5 items-center xsm:space-x-1 xsm:pl-1 sm:pl-0 sm:space-x-3">
                  <Link
                    to="/login-2"
                    className={` rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] md:text-[14px] font-pop ${
                      location.pathname === "/learning"
                        ? " font-bold text-[#1DBF73]"
                        : ""
                    }`}
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register-user"
                    className={` rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] md:text-[14px] font-pop ${
                      location.pathname === "/learning"
                        ? " font-bold text-[#1DBF73]"
                        : ""
                    }`}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex  space-x-10 items-center xsm:space-x-2 md:space-x-4 sm:space-x-3">
            {userDetail?.role !== "subadmin" && (
              <>
                <Link
                  to={"/"}
                  onClick={Top}
                  className={` rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] md:text-[14px] font-pop ${
                    location.pathname === "/" ? " font-bold text-[#1DBF73]" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to={"/courses"}
                  onClick={Top}
                  className={` rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] md:text-[14px] font-pop  ${
                    location.pathname === "/courses"
                      ? " font-bold text-[#1DBF73]"
                      : ""
                  }`}
                >
                  Courses
                </Link>

                <Link
                  to={"/internshipprogram"}
                  onClick={Top}
                  className={` rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] md:text-[14px] font-pop  ${
                    location.pathname === "/internshipprogram"
                      ? " font-bold text-[#1DBF73]"
                      : ""
                  }`}
                >
                  Internship
                </Link>
                {!token ? (
                  <Link
                    to={"/hire-from-us"}
                    onClick={Top}
                    className={` rounded-full hover:text-[#1DBF73]  xsm:text-[8px] sm:text-[10px] md:text-[14px] font-pop ${
                      location.pathname === "/hire-from-us"
                        ? " font-bold text-[#1DBF73]"
                        : ""
                    }`}
                  >
                    Hire From Us
                  </Link>
                ) : (
                  ""
                )}
                {/* <a
                  href={location.pathname === "/" ? "#" : "/pap"}
                  onClick={ScrollToPap}
                  className={` rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] cursor-pointer md:text-[14px] font-pop ${
                    location.pathname === "/pap"
                      ? " font-bold text-[#1DBF73]"
                      : ""
                  }`}
                >
                  PAP
                </a> */}
                {/* <Link>Search</Link> */}
                {userDetail?._id && (
                  <Link
                    to={"/learning"}
                    className={` rounded-full hover:text-[#1DBF73] xsm:text-[12px] sm:text-[10px] md:text-[14px] font-pop ${
                      location.pathname === "/learning"
                        ? " font-bold text-[#1DBF73]"
                        : ""
                    }`}
                  >
                    My Learning
                  </Link>
                )}
                {userDetail?._id && (
                  <Link
                    to={"/cart"}
                    className={` rounded-full hover:text-[#1DBF73] relative ${
                      location.pathname === "/cart"
                        ? " font-bold text-[#1DBF73]"
                        : ""
                    }`}
                  >
                    {" "}
                    <Cart
                      style={{ color: "white" }}
                      className=" text-white xsm:h-[15px] xsm:w-[15px] md:h-[20px] md:w-[20px]"
                    />{" "}
                    <div className="absolute -right-2 -top-3 bg-[#1DBF73] text-white rounded-full w-4 h-4 flex justify-center">
                      <p className="text-[12px] font-normal">{cartSize}</p>
                    </div>
                  </Link>
                )}
              </>
            )}
            {userDetail?._id ? (
              <div
                className="xsm:pl-2 md:pl-1 lg:pl-4 xl:pl-6"
                style={{ cursor: "pointer" }}
              >
                <span>
                  <div className="custom-tooltip">
                    <span className="tooltiptext flex flex-col gap-3 p-2 text-[18px] md:text-[12px] sm:text-[10px] xsm:text-[8px] bg-gradient-to-r from-[#0F2027] via-[#0B1418] to-[#203A43] ">
                      <p className="pt-5">{userDetail?.name?.split(" ")[0]}</p>
                      {userDetail?.isProfileComplete ? (
                        <Link className="text-[#1DBF73]" to="/profile">
                          Profile
                        </Link>
                      ) : (
                        <Link to="/profile" className="text-[#1DBF73] text-sm">
                          Complete Your Profile
                        </Link>
                      )}
                      <button
                        onClick={handleLogOut}
                        className="text-[#FFFFFF] text-[16px] font-nu bg-[#1DBF73] rounded-full px-3 py-1 xsm:text-[8px] xsm:px-2 md:text-[16px] md:px-2 lg:text-[18px] lg:px-3 xl:text-[20px] xl:px-4"
                      >
                        Log Out
                      </button>
                    </span>
                    {userDetail?.profile ? (
                      <img
                        src={userDetail?.profile}
                        className="h-9 w-9 rounded-full object-cover xsm:h-[25px] xsm:w-[25px] md:h-[30px] md:w-[30px] lg:h-[35px] lg:w-[35px] xl:h-[40px] xl:w-[40px]"
                        alt="Profile"
                      />
                    ) : (
                      <Account className="w-9 h-9 rounded-full xsm:h-[25px] xsm:w-[25px] md:h-[30px] md:w-[30px] lg:h-[35px] lg:w-[35px] xl:h-[40px] xl:w-[40px]" />
                    )}
                  </div>
                </span>
              </div>
            ) : (
              <div className="flex space-x-5 pl-4 xsm:space-x-1 xsm:pl-1 sm:pl-0 sm:space-x-3">
                <Link
                  to={"/login-2"}
                  className="bg-[#1DBF73] text-center w-24 rounded-full text-white py-1 sm:text-[10px] xsm:text-[8px] xsm:px-2 sm:px-3 font-pop md:text-[14px] md:px-4"
                >
                  Log In
                </Link>
                <Link
                  to={"/register-user"}
                  className="bg-white w-24 text-center rounded-full text-black py-1 sm:text-[10px] xsm:text-[8px] xsm:px-2 sm:px-3 font-pop md:text-[14px] md:px-4"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
