import "./Pageheader.css";
import Commoncard from "./Commoncard";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../Api/api";
import Spinner from "../Spinner";
import Instructor from "../Instructor/Instructor";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Included from "./included";
import { Globalinfo } from "../../App";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PackageCarousel from "./packageCarousel";
import DetailCompany from "../Companies/Detailcompanies";
import axios from "axios";
import HireTestimonial from "./HireTestimonial";

export default function DetailCourses() {
  const param = useParams();
  const navigate = useNavigate();
  const [Data, setData] = useState();
  let slug = param.slug;
  const { userDetail } = useContext(Globalinfo);
  const [show, setshow] = useState(false);
  const {  GetCart } = useContext(Globalinfo);
  const [faqs, setFaqs] = useState([]);
  const [alreadyInCart, setAlreadyInCart] = useState(false);
  const [alreadyInWishlist, setalreadyInWishlist] = useState(false)
 
  useEffect(() => {
    async function Fetchdata() {
      try {
        setshow(true);
        let url = BASE_URL + "/course/" + slug;
        const data = await fetch(url);
        const response = await data.json();
        // console.log(response);
        setData(response?.course);
        CheckCourseInCart(response?.course?._id)
        CheckCourseInWishlist(response?.course?._id)
        setFaqs(
          response?.course?.faqs?.map((val) => {
            return {
              question: val.question,
              answer: val.answer,
              isOpen: false,
            };
          })
        );
        setshow(false);
      } catch (error) {
        console.log(error);
      }
      // console.log(response.course);
    }
    Fetchdata();
  }, []);

  function ClickSection(id) {
    const updatedFaqs = faqs?.map((faq, index) => {
      if (index === id) {
        return { ...faq, isOpen: !faq.isOpen };
      } else {
        return { ...faq, isOpen: false };
      }
    });
    setFaqs(updatedFaqs);
  }
  let login = localStorage.getItem("COURSES_USER_TOKEN");

  let purchasedCourses = [];
  let batchids="";
  if (Data) {
    userDetail?.purchased_courses?.forEach((val) => {
      purchasedCourses.push(val?.course?._id);
      if(val?.course?.slug==slug){
        batchids=val?.BatchId;
      }
    });
  }

  async function Addtocart(courseid) {
    try {
      if (login) {
        let token = jwtDecode(login);
        let email = token.email;
        let quantity = 1;
        setshow(true)
        let url = BASE_URL + "/addtocart";
        let data = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, courseid, quantity }),
        });
        let response = await data.json();
        // console.log(response);
        if (response.success) {
          // toast.success(response.msg);
          // setCartSize(cartSize + 1);
          setshow(false)
          GetCart();
          CheckCourseInCart(courseid)
        } else {
          // toast.error(response.msg);getcart?email
        }
      } else {
        localStorage.setItem("ADD_TO_CART_HISTORY", window.location.pathname);
        // console.log("add to cart withour log")
        navigate("/login-2");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function Addtowishlist(courseid) {
    try {
      if (login) {
        let token = jwtDecode(login);
        let email = token.email;
        let url = BASE_URL + "/addtowishlist";
        setshow(true)
        let data = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, courseid }),
        });
        let response = await data.json();
        // console.log(response);
        if (response.success) {
          // toast.success(response.msg);
          CheckCourseInWishlist(courseid)
          setshow(false)
        } else {
          toast.error(response.msg);
        }
      } else {
        navigate("/login-2");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function CheckCourseInCart(courseid){
    try {
      if (login) {
        const token = localStorage.getItem("COURSES_USER_TOKEN");
        const response = await axios.get(`${BASE_URL}/iscourseincart/${courseid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
                
        if (response?.data?.success) {
          setAlreadyInCart(true);
        } else {
          setAlreadyInCart(false);
        }
      } else {
        // Handle case when user is not logged in
        // console.log("User is not logged in.");
        setAlreadyInCart(false); // Assuming you want to reset state if not logged in
      }
    } catch (error) {
      setAlreadyInCart(false);
      console.log(error);
    }
  }
  async function CheckCourseInWishlist(courseid){
    try {
      if (login) {
        const token = localStorage.getItem("COURSES_USER_TOKEN");
        const response = await axios.get(`${BASE_URL}/iscourseinwishlist/${courseid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        
        if (response?.data?.success) {
          setalreadyInWishlist(true);
        } else {
          setalreadyInWishlist(false);
        }
      } else {
        // Handle case when user is not logged in
        // console.log("User is not logged in.");
        setalreadyInWishlist(false); // Assuming you want to reset state if not logged in
      }
    } catch (error) {
      setalreadyInWishlist(false);
      console.log(error);
    }
  }

  return (
    <div className="h-auto min-h-screen overflow-x-visible ">
      <Toaster
        toastOptions={{
          duration: 500,
        }}
        position="top-center"
      />
      <div className="mb-5 xsm:mx-0 xsm:mb-2">
        <div
          className="CCDetails-Header-main flex flex-col pl-[10vw]  w-full xsm:pt-1 xsm:h-[60vh] object-right"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(${Data?.bannerImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="CCDetails-Header-content-leftqw  xsm:text-[10px] pb-2">
            <div className="CCDetails-Header-content-row1qw xsm:text-[10px] xsm:w-[80%]">
              <h2 className="font-pop text-[36px] text-white xsm:text-[20px] capitalize xsm:line-clamp-2">
                {Data?.title?.length > 60
                  ? Data?.title?.slice(0, 90)
                  : Data?.title}
              </h2>
              <p className="line-clamp-2 font-normal	text-white xsm:line-clamp-3">
                {Data?.overview}
              </p>
            </div>
            <div className="text-white flex gap-2 items-center text-[14px] font-pop mt-4 xsm:text-[8px] xsm:mt-1">
              <p>4.7</p>
              <div className="flex gap-1 items-center text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              {/* <p>(260+)</p> */}
            </div>
            <div className="flex gap-5 mt-5 xsm:mt-1 xsm:gap-3 xsm:hidden">
              {purchasedCourses?.includes(Data?._id) ? (
                <></>
              ) : alreadyInWishlist ? (
                <Link
                  to="/learning?tab=wishlist"
                  className="bg-[#1DBF73] cursor-pointer flex justify-center w-fit py-2 px-10 rounded-full text-white font-nu font-bold xsm:px-[8px] xsm:py-[6px] xsm:text-[12px] md:text-[14px] md:px-[8px] md:py-1 "
                >
                  Go to Wishlist
                </Link>
              ) : (
                <div
                  onClick={() => Addtowishlist(Data?._id)}
                  className="bg-[#1DBF73] cursor-pointer flex justify-center w-fit py-2 px-10 rounded-full text-white font-nu font-bold xsm:px-[8px] xsm:py-[6px] xsm:text-[12px] md:text-[14px] md:px-[8px] md:py-1 "
                >
                  Add to Wishlist
                </div>
              )}
              {!purchasedCourses?.includes(Data?._id) ? (
                <div className="space-x-4 w-fit flex items-center md:space-x-2 xsm:space-x-3 xsm:mr-1">
                  {alreadyInCart ? (
                    <div
                      onClick={() => navigate("/cart")}
                      className="border cursor-pointer border-[#1DBF73] flex justify-center w-full py-2 px-10 rounded-full text-[#1DBF73] font-nu font-bold xsm:px-[8px] xsm:py-[6px] xsm:text-[12px] md:text-[14px] md:px-[8px] md:py-1 "
                    >
                      Go to Cart
                    </div>
                  ) : (
                    <div
                      onClick={() => Addtocart(Data?._id)}
                      className="border cursor-pointer border-[#1DBF73] flex justify-center w-full py-2 px-10 rounded-full text-[#1DBF73] font-nu font-bold xsm:px-[8px] xsm:py-[6px] xsm:text-[12px] md:text-[14px] md:px-[8px] md:py-1 "
                    >
                      Add to cart
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {show ? (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#eeeeee]  z-[999999769]">
          <Spinner className="" />
        </div>
      ) : (
        ""
      )}

      <div className="flex justify-between px-[8%] py-6 xsm:flex-col-reverse">
        <div className="w-[58%] flex flex-col gap-16 xsm:gap-10 xsm:w-[100%]">
          {/* <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mx-auto mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Course Duration
            </h2>
            <div className="flex justify-between items-center text-gray-700">
              <div className="flex flex-col items-start">
                <span className="text-sm text-gray-500">Start Date</span>
                <span className="text-lg font-medium text-green-600">
                  {Data?.courseStartDate
                    ? new Date(Data?.courseStartDate).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )
                    : "N/A"}
                </span>
              </div>
              <div className="h-10 border-l-2 border-dashed border-gray-300 mx-4"></div>
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-500">End Date</span>
                <span className="text-lg font-medium text-red-600">
                  31 Dec 2025
                </span>
              </div>
            </div>
          </div> */}
          {Data?.whatWillILearn?.length > 0 ? (
            <div
              className="flex flex-col p-[1rem_2rem] gap-4 capitalize xsm:gap-4 shadow-[0px_4px_11px_0px_#0000001C]
"
            >
              <h1 className="font-pop font-semibold text-[19px] text-[#0F2027] xsm:text-[18px]">
                Skills You Will Learn
              </h1>
              <div className="flex flex-col gap-4 font-nu text-[#555555]">
                <ul className="list-inside leading-7 tracking-wide pl-2 grid grid-cols-2 gap-4  p-5 shadow-[0_4px_11px_0px_rgb(0, 0, 0))] xsm:pl-0  xsm:leading-none xsm:grid-cols-1 xsm:gap-[10px]">
                  {Data?.whatWillILearn?.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-2 xsm:gap-1 xsm:text-[12px] xsm:leading-[18px]"
                    >
                      {" "}
                      <img
                        src="/Icons/shield.svg"
                        className="h-[22px] w-auto xsm:h-[18px]"
                        alt=""
                      />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}

          {Data?.curriculum?.length > 0 && (
            <div className="flex flex-col gap-8 xsm:gap-4">
              <h1 className="font-pop font-semibold text-[32px] text-[#0F2027]  xsm:text-[18px]">
                What's Included
              </h1>
              <Included curiculum={Data?.curriculum} title={Data?.title} />
            </div>
          )}
          <div className="flex flex-col gap-8 xsm:gap-2">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027] xsm:text-[18px]">
              Instructor
            </h1>
            <Instructor />
          </div>

          <div className="flex flex-col gap-8 justify-center items-center xsm:gap-4">
            <h1 className="w-full text-left font-pop font-semibold text-[32px] text-[#0F2027] xsm:text-[18px]">
              Companies Worldwide
            </h1>
            <DetailCompany />
          </div>

          {Data?.companies?.length > 0 && (
            <PackageCarousel data={Data?.companies} />
          )}
          {faqs?.length > 0 && (
            <div className="flex flex-col gap-8 xsm:gap-4">
              <h1 className="font-pop font-semibold text-[32px] text-[#0F2027] xsm:text-[18px]">
                FAQs
              </h1>
              <div className=" w-[95%]  rounded-md px-0  flex flex-col gap-6 font-nu xsm:w-[100%] xsm:p-2 xsm:gap-3">
                {faqs?.map((item, index) => (
                  <div key={index} className="faq1 w-full  bg-white rounded-md">
                    <div className=" w-full ">
                      <div
                        onClick={() => ClickSection(index)}
                        className="drop-top  flex justify-between items-center w-full py-3 px-2 cursor-pointe cursor-pointer xsm:px-4 xsm:py-2 xsm:gap-4"
                      >
                        <div className="flex items-center gap-2 relative pl-5 before:content-['\2022'] before:absolute before:left-0 before:text-black">
                          <p
                            className={`xsm:text-[13px] font-semibold md:text-[14px] ${
                              item?.isOpen && "text-[#1DBF73]"
                            }`}
                          >
                            {item?.question}
                          </p>
                        </div>
                        <div>
                          <img
                            src="../Icons/faqarrow.svg"
                            alt=""
                            className={`arrow-icon xsm:h-3 xsm:w-3 md:h-4 md:w-4 transition-transform duration-300 ${
                              item.isOpen ? "rotate-up" : "rotate-down"
                            }`}
                          />
                        </div>
                      </div>
                      {item?.isOpen && (
                        <div className="px-6 py-4 xsm:px-4 xsm:py-3">
                          <p className="xsm:text-[12px] text-[#555555] md:text-[14px]">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* {Data?.testimonials?.length > 0 && (
            <div className="flex flex-col gap-8">
              <VideoTesttimonial data={Data?.testimonials} />
            </div>
          )} */}
        </div>
        <span className="w-[33%] h-[1000px] -translate-y-[20rem] xsm:-translate-y-[13rem] xsm:w-[100%] xsm:h-fit xsm:mb-[-10rem] ">
          <Commoncard
            Data={Data}
            alreadyInCart={alreadyInCart}
            CheckCourseInCart={CheckCourseInCart}
            batchids={batchids}
          />
          <div className=" flex flex-col gap-[2rem]">
            <div className="xsm:hidden">
              <img src="/cert1.jpg" alt="" />
            </div>
            <div className="p-[15px] border border-black rounded-[16px] flex flex-col gap-4 items-center xsm:hidden">
              <h3 className="text-black text-[1.3rem] text-center font-semibold">
                Create your professional{" "}
                <span className="text-[#1DBF73]">Resume</span> with our designs
              </h3>
              <Link
                to="/cv-builder"
                className="bg-[#1DBF73] button-resume rounded-lg px-3 py-1 text-white font-semibold"
              >
                Create Your Resume
              </Link>
              <img src="/detailcertificate.png" alt="" />
            </div>
          </div>
        </span>
      </div>
      <div className="bg-[#1D343D] w-full h-full">
        <HireTestimonial />
      </div>
    </div>
  );
}
