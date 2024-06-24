import "./Pageheader.css";
import Commoncard from "./Commoncard";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../Api/api";
import Spinner from "../Spinner";
import Curriculum from "../Curriculum/Curriculum";
import Instructor from "../Instructor/Instructor";
import VideoTesttimonial from "./VideoTesttimonial";
import { TiTick } from "react-icons/ti";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Included from "./included";
import { Globalinfo } from "../../App";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function DetailCourses() {
  const param = useParams();
  const navigate=useNavigate()
  const [Data, setData] = useState();
  let slug = param.slug;
  const { userDetail } = useContext(Globalinfo);
  const [show, setshow] = useState(false);
  const { setCartSize, cartSize,GetCart } = useContext(Globalinfo);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function Fetchdata() {
      try {
        setshow(true);
        let url = BASE_URL + "/course/" + slug;
        const data = await fetch(url);
        const response = await data.json();
        // console.log(response);
        setData(response?.course);
        setFaqs(response?.course?.faqs?.map((val)=>{return {question:val.question,answer:val.answer,isOpen:false}}))
        setshow(false);
      } catch (error) {
        console.log(error);
      }
      // console.log(response.course);
    }
    Fetchdata();
  }, []);

  function ClickSection(id) {
    const updatedFaqs = faqs.map((faq, index) => {
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
  if (Data) {
    userDetail?.purchased_courses?.forEach((val) => {
      purchasedCourses.push(val?.course?._id);
    });
  }

  async function Addtocart(courseid) {
    try {
      if (login) {
        let token = jwtDecode(login);
        let email = token.email;
        let quantity = 1;
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
          toast.success(response.msg);
          // setCartSize(cartSize + 1);
          GetCart()
        } else {
          toast.error(response.msg);
        }
      } else {
        localStorage.setItem('ADD_TO_CART_HISTORY', window.location.pathname);
        // console.log("add to cart withour log")
        navigate("/login");
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
          toast.success(response.msg);
        } else {
          toast.error(response.msg);
        }
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(Data?.companies)

  return (
    <div className="h-auto min-h-screen overflow-x-visible ">
      <div className="mb-5 xsm:mx-0 xsm:mb-2">
        <div
          className="CCDetails-Header-main flex flex-col px-[8%] pt-12 w-full xsm:pt-1"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(${Data?.bannerImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="CCDetails-Header-content-leftqw xsm:text-[10px]">
            <div className="CCDetails-Header-content-row1qw xsm:text-[10px] xsm:w-[80%]">
              <h2 className="font-pop  xsm:text-[10px] capitalize">{Data?.title}</h2>
              <p className="line-clamp-2	text-white">{Data?.overview }</p>
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
            <div className="flex gap-5 mt-5 xsm:mt-1 xsm:gap-3">
            {purchasedCourses.includes(Data?._id) ? (
             <></>
            ) : (
              <div
                    onClick={() => Addtowishlist(Data?._id)}
                    className="bg-[#1DBF73] cursor-pointer flex justify-center w-fit py-2 px-10 rounded-full text-white font-nu font-bold xsm:px-[5px] xsm:py-[2px] xsm:text-[7px] md:text-[14px] md:px-[8px] md:py-1 "
              >
                Add to Wishlist
              </div>
            )}
            {!purchasedCourses.includes(Data?._id) ? (
              <div className="space-x-4 w-fit flex items-center md:space-x-2 xsm:space-x-3 xsm:mr-1">

                <div
                  onClick={() => Addtocart(Data?._id)}
                    className="border cursor-pointer border-[#1DBF73] flex justify-center w-full py-2 px-10 rounded-full text-[#1DBF73] font-nu font-bold xsm:px-[5px] xsm:py-[2px] xsm:text-[7px] md:text-[14px] md:px-[8px] md:py-1 "
                >
                  Add to cart
                </div>
              </div>
            ) : (
              ""
              )}
            </div>
          </div>
         

        </div>
        {/* <Main /> */}
      </div>
      {show ? (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#eeeeee]  z-[999999769]">
          <Spinner className="" />
        </div>
      ) : (
        ""
      )}
      {/* <RecommendedCourses /> */}

      {/* <div className="px-[5%] py-20 flex flex-col gap-4 font-pop justify-center text-center items-center">
        <p className="text-[#333333] text-[50px] font-bold">
          Create your professional{" "}
          <span className="text-[#1DBF73]">Resume</span> with our designs
        </p>
        <p className="text-[#333333] text-[20px] font-medium">
          You can pick one of our handcrafted resume templates.You can start
          building your resume in less than 5 minutes, using predefined sections
          approved by recruiters worldwide. You can also customize it to your
          own needs and personality and hit 'Download'.
        </p>
        <Link to='/cv-builder' className="rounded-full bg-[#1DBF73] text-[20px] text-white font-semibold py-2 px-8">
          Create my Resume
        </Link>
      </div> */}
      {/* <div className="flex flex-col gap-14 py-16 px-[10%] bg-gradient-to-r from-[#0F2027] to-[#203A43]">
        <div className="flex gap-10 text-white font-pop font-semibold">
          <p className="text-[50px] w-[45%]">
            Make your career thrive with{" "}
            <span className="text-[#1DBF73]"> Hoping Minds !</span>
          </p>
          <div className="flex gap-10 justify-between text-center">
            <div className="flex flex-col justify-center items-center gap-2 px-4 py-6 bw-border rounded-xl text-[22px]">
              <div className="rounded-full bg-[#1DBF73] h-16 w-16 flex justify-center items-center">
                <img src="../Icons/hire-user.svg" className="w-10" />
              </div>
              <p>
                Lifetime Career <br /> Support
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 px-4 py-6 bw-border rounded-xl text-[22px]">
              <div className="rounded-full bg-[#1DBF73] h-16 w-16 flex justify-center items-center">
                <img src="../Icons/hire-user.svg" className="w-10" />
              </div>
              <p>
                Lifetime Career <br /> Support
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 px-4 py-6 bw-border rounded-xl text-[22px]">
              <div className="rounded-full bg-[#1DBF73] h-16 w-16 flex justify-center items-center">
                <img src="../Icons/hire-user.svg" className="w-10" />
              </div>
              <p>
                Lifetime Career <br /> Support
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="rounded-full bg-[#1DBF73] text-white text-[22px] font-bold border border-white py-1 px-4">
            Connect With Us
          </button>
        </div>
      </div> */}
      {/* <DCtestimonials /> */}

      <div className="flex justify-between px-[8%] py-6">
        <div className="w-[58%] flex flex-col gap-16 xsm:gap-10">
          <div className="flex flex-col gap-6 capitalize xsm:gap-4">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027] xsm:text-[14px]">
              Skills You Will Learn
            </h1>
            <div className="flex flex-col gap-4 font-nu text-[#555555]">

              <ul className="list-inside leading-7 tracking-wide pl-2 grid grid-cols-2 gap-4  p-5 shadow-[0_4px_11px_0px_rgb(0, 0, 0))] xsm:pl-0 xsm:gap-2 xsm:text-[10px] xsm:p-2 xsm:leading-none xsm:tracking-tighter" >
                {Data?.whatWillILearn.map((item, index) => (
                  <li key={index} className="flex gap-2 xsm:gap-1"> <img src="/Icons/shield.svg" className="h-[28px] w-auto xsm:h-[18px]" alt="" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-8 xsm:gap-4">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027]  xsm:text-[14px]">
              What's Included
            </h1>
            <Included curiculum={Data?.curriculum} title={Data?.title } />
          </div>
          <div className="flex flex-col gap-8 xsm:gap-2">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027] xsm:text-[14px]">
              Instructor
            </h1>
            <Instructor />
          </div>
          {/* <div className="flex flex-col gap-8">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027]">
              Curriculum
            </h1>
            <Curriculum />
          </div> */}
          {/* <div className="flex flex-col gap-6">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027]">
              Learning outcome
            </h1>
            <ul className="list-inside leading-7 tracking-wide pl-2 font-nu text-[#555555]">
              {Data?.learningOutcome?.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
              <li>Tools and Technologies in Full Stack Development</li>
                <li>Setting Up the Development Environment</li>
                <li>Installing Necessary Software and Tools</li>
                <li>Introduction to Version Control with Git and GitHub</li>
            </ul>
          </div> */}
          {/* <div className="flex flex-col gap-6">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027]">
              Average Packages
            </h1>
            <ul className="list-inside leading-7 tracking-wide pl-2 font-nu text-[#555555]">
              {Data?.companies?.map((company, key) => (
                <>
                  <li>{company.companyName}</li>
                  <li>{company.avgpkg.from} - {company.avgpkg.to}</li>
                </>
              ))}
              <li>Tools and Technologies in Full Stack Development</li>
                <li>Setting Up the Development Environment</li>
                <li>Installing Necessary Software and Tools</li>
                <li>Introduction to Version Control with Git and GitHub</li>
            </ul>
          </div> */}

          <div className="flex flex-col gap-8 justify-center items-center xsm:gap-4">
            <h1 className="w-full text-left font-pop font-semibold text-[32px] text-[#0F2027] xsm:text-[14px]">
              Companies Worldwide
            </h1>
            <div className="flex justify-between w-full">
              <img src='/Icons/byju.svg' className="w-36" alt="byju" />
              <img src='/Icons/google.svg' className="w-36" alt="google" />
              <img src='/Icons/instamojo.svg' className="w-36" alt="instamojo" />
              <img src='/Icons/dream11.svg' className="w-36" alt="dream11" />
            </div>
          </div> 
          <div className="flex flex-col gap-8 xsm:gap-4">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027] xsm:text-[14px]">
              FAQs
            </h1>
            <div className=" w-[95%] bg-[#E2FFF1] rounded-md px-6 py-6 flex flex-col gap-6 font-nu xsm:w-[100%] xsm:p-2 xsm:gap-3">
              {faqs.map((item, index) => (
                <div key={index} className="faq1 w-full  bg-white rounded-md">
                  <div className=" w-full ">
                    <div
                      onClick={() => ClickSection(index)}
                      className="drop-top  flex justify-between items-center w-full py-3 px-6 cursor-pointe cursor-pointer xsm:px-4 xsm:py-2"
                    >
                      <div className="flex items-center gap-2">
                        <p className={`xsm:text-[8px] font-semibold md:text-[14px] ${item.isOpen && 'text-[#1DBF73]'}`}>
                          {item.question}
                        </p>
                      </div>
                      <div>
                        <img
                          src="../Icons/faqarrow.svg"
                          alt=""
                          className={`arrow-icon xsm:h-3 xsm:w-3 md:h-4 md:w-4 transition-transform duration-300 ${item.isOpen ? "rotate-up" : "rotate-down"
                            }`}
                        />
                      </div>
                    </div>
                    {item.isOpen && (
                      <div className="px-6 py-4 xsm:px-4 xsm:py-3">
                        <p className="xsm:text-[8px] text-[#555555] md:text-[14px]">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <VideoTesttimonial data={Data?.testimonials} />
          </div>
        </div>
        <span className="w-[33%] h-fit  -translate-y-[20rem] xsm:-translate-y-[6rem]">
          <Commoncard Data={Data} />
          <div className="bg-[#E2FFF1] my-4 p-6 rounded-xl flex flex-col  xsm:mt-4 xsm:p-1 xsm:rounded-lg md:p-3 xsm:text-[10px]">
            <h2 className="text-2xl font-bold mb-4 xsm:text-[12px] xsm:leading-4">Average Packages</h2>
            <div className="flex flex-col gap-3">
            {
              Data?.companies?.map((val, ind) => {
                return (
                  <div>
                    <h3 className="font-semibold text-lg">{val?.companyName}</h3>
                    <p>Average Package {` ${val?.avgpkg?.from} LPA - ${val?.avgpkg?.to} LPA`}</p>
                  </div>
                )
              })
              }
            </div>
            </div>
          
          <div>
            <img src="/Icons/certificate_Course.svg" alt="" />
          </div>

        </span>

      </div>

    </div>
  );
}
