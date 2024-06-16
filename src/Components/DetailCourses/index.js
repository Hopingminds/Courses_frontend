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
import { Link } from "react-router-dom";
import Curriculum from "../Curriculum/Curriculum";
import Instructor from "../Instructor/Instructor";
import Faqs from "../Faqs/Faqs";
import VideoTesttimonial from "./VideoTesttimonial";

export default function DetailCourses() {
  const param = useParams();
  const [Data, setData] = useState();
  let slug = param.slug;
  const [show, setshow] = useState(false);

  const [faqs, setFaqs] = useState([
    {
      question: "How does the Pay after Placement model work?",
      answer:
        "Participants undergo training without upfront payment, only paying fees upon securing a job through the program.",
      isOpen: false,
    },
    {
      question:
        "Is there a risk involved for participants in the Pay after Placement model?",
      answer:
      "Risk is low since payment depends on securing a job; usually, participants are not required to pay if they do not find employment",
      isOpen: false,
    },
    {
      question: "What are the advantages of the Pay after Placement model?",
      answer:
        "It lowers financial hurdles and aligns goals, ensuring providers are committed to the success of participants.",
      isOpen: false,
    },
    {
      question:
        "What happens if a participant secures a job but can't pay immediately?",
      answer:
        "Flexible payment options, such as installment plans, are often provided to accommodate financial situations.",
      isOpen: false,
    },
    {
      question: "How do program providers ensure quality job placements?",
      answer:
        "Providers establish employer partnerships and offer career support to ensure placements align with participants' goals.",
      isOpen: false,
    },
  ]);

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

  return (
    <div className="h-auto min-h-screen overflow-x-visible ">
      <div className="mb-5 xsm:mx-0 ">
        <div
          className="CCDetails-Header-main flex flex-col px-[8%] pt-24 w-full xsm:mb-[4.5rem]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(${Data?.featured_image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* <div className="CCDetails-Header-content-leftqw xsm:text-[10px]">
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
            </div> */}
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
          {/* </div> */}
          <h1 className="text-white text-4xl font-pop font-bold capitalize w-[60%]">
            The Ultimate Guide to the best Full Stack Development
          </h1>
          <Commoncard Data={Data} />
        </div>
        {/* <Main /> */}
      </div>
      {show ? (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
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

      <div className="flex justify-end px-[8%] py-6">
        <div className="w-[62%] flex flex-col gap-16">
          <div className="flex flex-col gap-6 capitalize">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027]">
              Skills You Will Learn
            </h1>
            <div className="flex flex-col gap-4 font-nu text-[#555555]">
              <p className="text-justify leading-7 tracking-wide">
                This masterclass is meticulously designed to bridge the gap
                between academic knowledge and industry demands in full-stack
                web and mobile development. Students will embark on a
                comprehensive journey through the realms of web development with
                React and Django, coupled with mobile app development for
                Android platforms. .......................
              </p>
              <ul className="list-inside leading-7 tracking-wide pl-2">
                <li>Understanding Front-end and Back-end</li>
                <li>Tools and Technologies in Full Stack Development</li>
                <li>Setting Up the Development Environment</li>
                <li>Installing Necessary Software and Tools</li>
                <li>Introduction to Version Control with Git and GitHub</li>
                <li>Basics of Command Line Interface</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027]">
              Curriculum
            </h1>
            <Curriculum />
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027]">
            Learning outcome
            </h1>
            <ul className="list-inside leading-7 tracking-wide pl-2 font-nu text-[#555555]">
                <li>Tools and Technologies in Full Stack Development</li>
                <li>Setting Up the Development Environment</li>
                <li>Installing Necessary Software and Tools</li>
                <li>Introduction to Version Control with Git and GitHub</li>
              </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027]">
            Average Packages
            </h1>
            <ul className="list-inside leading-7 tracking-wide pl-2 font-nu text-[#555555]">
                <li>Tools and Technologies in Full Stack Development</li>
                <li>Setting Up the Development Environment</li>
                <li>Installing Necessary Software and Tools</li>
                <li>Introduction to Version Control with Git and GitHub</li>
              </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027]">
            Instructor
            </h1>
            <Instructor />
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027]">
            Companies Worldwide
            </h1>
            <div className="flex justify-between w-full">
              <img src='/Icons/byju.svg' className="w-40" />
              <img src='/Icons/google.svg' className="w-40" />
              <img src='/Icons/instamojo.svg' className="w-40" />
              <img src='/Icons/dream11.svg' className="w-40" />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-pop font-semibold text-[32px] text-[#0F2027]">
            FAQs
            </h1>
            <div className=" w-[95%] bg-[#E2FFF1] rounded-md px-6 py-6 flex flex-col gap-6 font-nu">
            {faqs.map((item, index) => (
              <div key={index} className="faq1 w-full  bg-white rounded-md">
                <div className=" w-full ">
                  <div
                    onClick={() => ClickSection(index)}
                    className="drop-top  flex justify-between items-center w-full py-3 px-6 cursor-pointe xsm:py-3 cursor-pointer"
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
                        className={`arrow-icon xsm:h-3 xsm:w-3 md:h-4 md:w-4 transition-transform duration-300 ${
                          item.isOpen ? "rotate-up" : "rotate-down"
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
            <VideoTesttimonial/>
          </div>
        </div>
      </div>
    </div>
  );
}
