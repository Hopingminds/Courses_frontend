import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Globalinfo } from "../../App";
import { ReactComponent as Account } from "../../Assets/Icons/account.svg";
import { ReactComponent as Cart } from "../../Assets/Icons/cart.svg";
import { BASE_URL } from "../../Api/api";
import {jwtDecode} from "jwt-decode";
import { Menu, Close } from '@mui/icons-material';

export default function Navbar() {
  const [profile, setProfile] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    cartData,
    cartSize,
    GetCart,
    wishListData,
    GetWishList,
    userDetail,
    getUserDetails,
  } = useContext(Globalinfo);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  const scrollToPap = (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    const navbarHeight = 80; // Adjust this value to match the height of your navbar
    const papElement = document.getElementById("pap");
    if (papElement) {
      const targetOffset = papElement.offsetTop - navbarHeight;
      window.scrollTo({ top: targetOffset, behavior: "smooth" });
    } else {
      navigate("/pap");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("COURSES_USER_TOKEN");
        if (token) {
          const decodedToken = jwtDecode(token);
          const URL = `${BASE_URL}/user/${decodedToken.email}`;
          const response = await fetch(URL);
          const data = await response.json();
          setProfile(data?.profile);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchData();
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
        .hamburger-menu {
          display: none;
          flex-direction: column;
          align-items: center;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: #0F2027;
          z-index: 9999;
          padding: 10px 0;
        }

        .hamburger-menu a {
          padding: 10px 0;
          width: 100%;
          text-align: center;
          border-top: 1px solid #1DBF73;
        }

        .hamburger-icon {
          display: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .hamburger-icon {
            display: block;
          }

          .desktop-menu {
            display: none;
          }

          .hamburger-menu {
            display: flex;
          }
        }
        `}
      </style>
      <div className="w-full 2xl:w-[66%] flex justify-between px-[5%] h-20 items-center font-pop fixed top-0 z-[9999] bg-[#0F2027] xsm:h-12 sm:px-[3%] sm:h-12 xsm:px-[2%] text-white md:h-14">
        <Link to="/" onClick={scrollToTop} className="cursor-pointer">
          <img
            src="/logo.png"
            className="h-[50px] w-auto xsm:w-[50px] xsm:h-[25px] sm:w-[40px] sm:h-[27px] md:w-[70px] md:h-[30px]"
            alt="Logo"
          />
        </Link>
        <div className="flex space-x-10 items-center xsm:space-x-2 md:space-x-4 sm:space-x-3">
          <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <Close style={{ color: 'white', fontSize: '30px' }} /> : <Menu style={{ color: 'white', fontSize: '30px' }} />}
          </div>
          <div className={`hamburger-menu ${menuOpen ? "block" : "hidden"}`}>
            {userDetail?.role !== "subadmin" && (
              <>
                <NavLink to="/" label="Home" onClick={() => setMenuOpen(false)} />
                <NavLink to="/course" label="Courses" onClick={() => setMenuOpen(false)} />
                <NavLink to="/internship" label="Internship" onClick={() => setMenuOpen(false)} />
                <NavLink to="/hire-from-us" label="Hire From Us" onClick={() => setMenuOpen(false)} />
                <a
                  href={location.pathname === "/" ? "#" : "/pap"}
                  onClick={(event) => {
                    scrollToPap(event);
                    setMenuOpen(false);
                  }}
                  className={`rounded-full hover:text-[#1DBF73] xsm:text-[8px] sm:text-[10px] cursor-pointer md:text-[14px] font-pop ${
                    location.pathname === "#pap" ? "font-bold text-[#1DBF73]" : ""
                  }`}
                >
                  PAP
                </a>
                {userDetail?._id && (
                  <>
                    <NavLink to="/learning" label="My Learning" onClick={() => setMenuOpen(false)} />
                    <Link
                      to="/cart"
                      className={`rounded-full hover:text-[#1DBF73] relative ${
                        location.pathname === "/cart" ? "font-bold text-[#1DBF73]" : ""
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <Cart
                        style={{ color: "white" }}
                        className="text-white xsm:h-[15px] xsm:w-[15px] md:h-[20px] md:w-[20px]"
                      />
                      <div className="absolute -right-2 -top-3 bg-[#1DBF73] text-white rounded-full w-4 h-4 flex justify-center">
                        <p className="text-[12px] font-normal">{cartSize}</p>
                      </div>
                    </Link>
                  </>
                )}
              </>
            )}
            {userDetail?._id ? (
              <Link to="/profile" className="xsm:pl-2 md:pl-1" style={{ cursor: "pointer" }} onClick={() => setMenuOpen(false)}>
                <div className="custom-tooltip">
                  <span className="tooltiptext text-[14px] md:text-[12px] sm:text-[10px] xsm:text-[8px] bg-gradient-to-r from-[#0F2027] via-[#0B1418] to-[#203A43] italic">
                    Complete Your Profile
                  </span>
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
              </Link>
            ) : (
              <div className="flex flex-col items-center space-y-3">
                <Link
                  to="/login"
                  className="bg-[#1DBF73] px-7 rounded-full text-white py-1 sm:text-[10px] xsm:text-[8px] xsm:px-2 sm:px-3 font-pop md:text-[14px] md:px-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="bg-white px-7 rounded-full text-black py-1 sm:text-[10px] xsm:text-[8px] xsm:px-2 sm:px-3 font-pop md:text-[14px] md:px-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          <div className="desktop-menu flex space-x-10 items-center xsm:space-x-2 md:space-x-4 sm:space-x-3">
            {userDetail?.role !== "subadmin" && (
              <>
                <NavLink to="/" label="Home" />
                <NavLink to="/course" label="Courses" />
                <NavLink to="/internship" label="Internship" />
                <NavLink to="/hire-from-us" label="Hire From Us" />
                <a
                  href={location.pathname === "/" ? "#" : "/pap"}
                  onClick={scrollToPap}
                  className={`rounded-full hover:text-[#1DBF73] xsm:text-[8px] sm:text-[10px] cursor-pointer md:text-[14px] font-pop ${
                    location.pathname === "#pap" ? "font-bold text-[#1DBF73]" : ""
                  }`}
                >
                  PAP
                </a>
                {userDetail?._id && (
                  <>
                    <NavLink to="/learning" label="My Learning" />
                    <Link
                      to="/cart"
                      className={`rounded-full hover:text-[#1DBF73] relative ${
                        location.pathname === "/cart" ? "font-bold text-[#1DBF73]" : ""
                      }`}
                    >
                      <Cart
                        style={{ color: "white" }}
                        className="text-white xsm:h-[15px] xsm:w-[15px] md:h-[20px] md:w-[20px]"
                      />
                      <div className="absolute -right-2 -top-3 bg-[#1DBF73] text-white rounded-full w-4 h-4 flex justify-center">
                        <p className="text-[12px] font-normal">{cartSize}</p>
                      </div>
                    </Link>
                  </>
                )}
              </>
            )}
            {userDetail?._id ? (
              <Link to="/profile" className="xsm:pl-2 md:pl-1" style={{ cursor: "pointer" }}>
                <div className="custom-tooltip">
                  <span className="tooltiptext text-[14px] md:text-[12px] sm:text-[10px] xsm:text-[8px] bg-gradient-to-r from-[#0F2027] via-[#0B1418] to-[#203A43] italic">
                    Complete Your Profile
                  </span>
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
              </Link>
            ) : (
              <div className="flex space-x-5 pl-4 xsm:space-x-1 xsm:pl-1 sm:pl-0 sm:space-x-3">
                <Link
                  to="/login"
                  className="bg-[#1DBF73] px-7 rounded-full text-white py-1 sm:text-[10px] xsm:text-[8px] xsm:px-2 sm:px-3 font-pop md:text-[14px] md:px-4"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="bg-white px-7 rounded-full text-black py-1 sm:text-[10px] xsm:text-[8px] xsm:px-2 sm:px-3 font-pop md:text-[14px] md:px-4"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const NavLink = ({ to, label, onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    navigate(to);
  };

  return (
    <Link
      to={to}
      onClick={() => {
        handleNavClick();
        if (onClick) onClick();
      }}
      className={`rounded-full hover:text-[#1DBF73] xsm:text-[8px] sm:text-[10px] md:text-[14px] font-pop ${
        location.pathname === to ? "font-bold text-[#1DBF73]" : ""
      }`}
    >
      {label}
    </Link>
  );
};
