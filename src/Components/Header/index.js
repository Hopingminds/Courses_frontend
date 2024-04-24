import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Globalinfo } from "../../App";
import { ReactComponent as Account } from "../../Assets/Icons/account.svg";
import { ReactComponent as Cart } from "../../Assets/Icons/cart.svg";

import ScrollToTop from "../ScrollToTop";
import { func } from "prop-types";
import { Tooltip } from "@mui/material";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  const [profile, setprofile] = useState("");
  const {
    cartData,
    GetCart,
    wishListData,
    GetWishList,
    userDetail,
    getUserDetails,
  } = useContext(Globalinfo);
  // console.log(userDetail)
  const location = useLocation();
  // console.log(location);
  let navigate = useNavigate();

  function Top() {
    window.scrollTo(0, 0);
    navigate("/");
    return null;
  }

  function ScrollToPap(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    const navbarHeight = 80; // Adjust this value to match the height of your navbar
    const papElement = document.getElementById("pap");
    if (papElement) {
      const targetOffset = papElement.offsetTop - navbarHeight;
      window.scrollTo({ top: targetOffset, behavior: "smooth" });
    } else {
      navigate("/pap");
    }
  }
  function Top() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    async function Fetchdata() {
      try {
        let token = localStorage.getItem("COURSES_USER_TOKEN");
        if (token) {
          let URL = BASE_URL + "/user/" + jwtDecode(token.email);

          const data = await fetch(URL);
          const response = await data.json();
          setprofile(response?.profile);
          console.log(response?.profile);
        }
      } catch (error) {}
    }
    Fetchdata();
  }, []);

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
            width: 120px;
            background-color: black;
            color: white;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;
            position: absolute;
            z-index: 1;
            top: 130%;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .custom-tooltip .tooltiptext::after {
            content: "";
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent black transparent;
        }
        
        .custom-tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }        
        
        `}
      </style>
      <div className="w-full flex justify-between px-[5%] h-20 items-center  font-pop fixed top-0 z-[9999] bg-[#0F2027] xsm:h-12 xsm:px-[2%] text-white md:h-14 2xl:w-[66%]">
        <Link to="/" onClick={Top} className=" cursor-pointer">
          <img
            src="/logo.png"
            className="h-[50px] w-auto xsm:w-[50px] xsm:h-[25px] md:w-[70px] md:h-[30px]"
          />
        </Link>
        <div className="flex space-x-10 items-center xsm:space-x-2 md:space-x-4">
          {userDetail?.role != "subadmin" && (
            <>
              <Link
                to={"/"}
                onClick={Top}
                className={` rounded-full hover:text-[#1DBF73] xsm:text-[8px] md:text-[14px] font-pop ${
                  location.pathname === "/" ? " font-bold text-[#1DBF73]" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to={"/course"}
                onClick={Top}
                className={` rounded-full hover:text-[#1DBF73] xsm:text-[8px] md:text-[14px] font-pop  ${
                  location.pathname === "/course"
                    ? " font-bold text-[#1DBF73]"
                    : ""
                }`}
              >
                Courses
              </Link>
              <Link
                to={"/hire-from-us"}
                onClick={Top}
                className={` rounded-full hover:text-[#1DBF73]  xsm:text-[8px] md:text-[14px] font-pop ${
                  location.pathname === "/hire-from-us"
                    ? " font-bold text-[#1DBF73]"
                    : ""
                }`}
              >
                Hire From Us
              </Link>
              {/* <Link to={'/ai'} onClick={Top} className={` rounded-full hover:text-[#1DBF73]  xsm:text-[8px] md:text-[14px] font-pop ${location.pathname === '/career' ? ' font-bold text-[#1DBF73]' : ''}`}>Ai Minds</Link> */}
              {/* <Link to={'/hire-from-us'} onClick={Top} className={` rounded-full hover:text-[#1DBF73]  xsm:text-[8px] md:text-[14px] font-pop ${location.pathname === '/career' ? ' font-bold text-[#1DBF73]' : ''}`}>Hire From Us</Link> */}
              <a
                href={location.pathname == "/" ? "#" : "/pap"}
                onClick={ScrollToPap}
                className={` rounded-full hover:text-[#1DBF73] xsm:text-[8px] cursor-pointer md:text-[14px] font-pop ${
                  location.pathname === "#pap"
                    ? " font-bold text-[#1DBF73]"
                    : ""
                }`}
              >
                PAP
              </a>
              {/* <Link>Search</Link> */}
              {userDetail?._id && (
                <Link
                  to={"/learning"}
                  className={` rounded-full hover:text-[#1DBF73] xsm:text-[8px] md:text-[14px] font-pop ${
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
                  className={` rounded-full hover:text-[#1DBF73] ${
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
                </Link>
              )}
            </>
          )}
          {userDetail?._id ? (
            <Link
              to="/profile"
              className=" xsm:pl-2 md:pl-1"
              style={{ cursor: "pointer" }}
            >
              {" "}
              <span>
                <div className="custom-tooltip">
                  <span className="tooltiptext text-[14px] md:text-[12px] xsm:text-[8px] bg-gradient-to-r from-[#0F2027] via-[#0B1418] to-[#203A43] italic">
                    Complete Your Profile
                  </span>
                  {/* <div className="h-8 w-8 rounded-full border"><img src={profile} className="h-full w-full" /></div> */}
                  {/* <Account className="xsm:h-[25px] xsm:w-[25px] md:h-[30px] md:w-[30px] z-20" /> */}
                  {userDetail?.profile ? (
                    <img
                      src={userDetail?.profile}
                      className="h-9 w-9 rounded-full object-cover xsm:h-[25px] xsm:w-[25px] md:h-[30px] md:w-[30px]"
                      alt="Profile"
                    />
                  ) : (
                    <Account className="w-9 h-9 rounded-full xsm:h-[25px] xsm:w-[25px] md:h-[30px] md:w-[30px] z-20" />
                  )}
                </div>
              </span>{" "}
            </Link>
          ) : (
            <div className="flex space-x-5 pl-4 xsm:space-x-1 xsm:pl-1">
              <Link
                to={"/login"}
                className="bg-[#1DBF73] px-7 rounded-full text-white py-1 xsm:text-[8px] xsm:px-2 font-pop md:text-[14px] md:px-4"
              >
                Log in
              </Link>
              <Link
                to={"/register"}
                className="bg-white px-7 rounded-full text-black py-1 xsm:text-[8px] xsm:px-2 font-pop md:text-[14px] md:px-4"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
