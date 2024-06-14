import "./Pageheader.css";
import Commoncard from "./Commoncard";
import Main from "../Main/Main";
import RecommendedCourses from "../RecommendedCourses/RecommendedCourses";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { COURSESURL } from "../confidential";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";
import Spinner from "../Spinner";
import { TiTick } from "react-icons/ti";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import DCtestimonials from "./DCtestimonials";

export default function DetailCourses() {
  const param = useParams();
  const [Data, setData] = useState();
  let slug = param.slug;
  const [show, setshow] = useState(false);

  useEffect(() => {
    async function Fetchdata() {
      try {
        setshow(true);
        let url = BASE_URL + "/course/" + slug;
        const data = await fetch(url);
        const response = await data.json();
        console.log(response);
        setData(response?.course);
        setshow(false);
      } catch (error) {
        console.log(error);
      }
      // console.log(response.course);
    }
    Fetchdata();
  }, []);

  return (
    <div className="h-auto min-h-screen overflow-x-visible ">
      <div className=" px-[5%] mb-5 xsm:mx-0 ">
        <div
          className="CCDetails-Header-main flex justify-between px-[5%] w-full xsm:mb-[4.5rem]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(${Data?.featured_image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="CCDetails-Header-content-leftqw xsm:text-[10px]">
            <div className="CCDetails-Header-content-row1qw xsm:text-[10px]">
              <h2 className="font-pop  xsm:text-[10px]">{Data?.title}</h2>
            </div>
            <div className="text-white flex gap-2 items-center text-[14px] font-pop mt-4 xsm:text-[8px] xsm:mt-2">
              <p>4.7</p>
              <div className="flex gap-1 items-center text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p>Based on feedback received from 250+ learners</p>
            </div>
            <div className="text-white mt-4 font-pop text-[14px] grid grid-cols-2 gap-2 xsm:hidden">
              {Data?.whatWillILearn?.map((item, index) => (
                <div key={index} className="flex gap-1 items-center">
                  <TiTick className="w-5 h-5" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            {/* <div className='CCDetails-Header-content-row2 w-[90%] xsm:mt-1 '>
                            <div className='CCDetails-Header-content-row2-clock gap-1'>
                                <img src="../Icons/clockfilled.svg" className=' xsm:w-[6px] xsm:h-[6px] md:w-[10px] md:h-[10px]' alt="clock"></img>
                                <p className='font-nu text-white' > 2 Weeks</p>
                            </div>
                            <div className='CCDetails-Header-content-row2-hat gap-1'>
                                <img src="../Icons/hat.svg" className=' xsm:w-[8px] xsm:h-[8px] md:w-[10px] md:h-[10px]' alt="hat"></img>
                                <p className='font-nu'> 156 Students</p>
                            </div>
                            <div className='CCDetails-Header-content-row2-level gap-1'>
                                <img src="../Icons/barchartgreen.svg" className=' xsm:w-[8px] xsm:h-[8px] md:w-[10px] md:h-[10px]' alt="bar-chart"></img>
                                <p className='font-nu'> All levels</p>
                            </div>
                            <div className='CCDetails-Header-content-row2-files gap-1'>
                                <img src="../Icons/files.svg" className=' xsm:w-[8px] xsm:h-[8px] md:w-[10px] md:h-[10px]' alt="files"></img>
                                <p className='font-nu'> 20 Lessons</p>
                            </div>
                            <div className='CCDetails-Header-content-row2-faq gap-1'>
                                <img src="../Icons/faq.svg" className=' xsm:w-[8px] xsm:h-[8px] md:w-[10px] md:h-[10px]' alt="faq"></img>
                                <p className='font-nu'> 3 Quizzes</p>
                            </div>
                        </div> */}
          </div>
          <Commoncard Data={Data} />
        </div>
        <Main />
      </div>
      {show ? (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
          <Spinner className="" />
        </div>
      ) : (
        ""
      )}
      <RecommendedCourses />

      <div className="px-[5%] py-20 flex flex-col gap-4 font-pop justify-center text-center items-center">
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
        <button className="rounded-full bg-[#1DBF73] text-[20px] text-white font-semibold py-2 px-8">
          Create my Resume
        </button>
      </div>
      <div className="flex flex-col gap-14 py-16 px-[10%] bg-gradient-to-r from-[#0F2027] to-[#203A43]">
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
      </div>
      <DCtestimonials />
    </div>
  );
}
