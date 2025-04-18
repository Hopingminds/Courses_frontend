import { useState } from "react";
import Img1 from "../../Assets/Images/papheaderbg.png";

import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./pap.css";
import PAPBenefit from "./PAPBenefit";
import Img2 from "../../Assests/Images/pap1.png";
import Img3 from "../../Assests/Images/pap2.png";
import Img4 from "../../Assests/Images/pap3.png";

export default function Pap() {
  const [clicked, setclicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [num, setNum] = useState("");
  const [Activeid, setActiveid] = useState();
  let navigate = useNavigate();
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

  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    college: "",
    degree: "",
    branch: "",
    yearOfPassing: "",
    fieldOfStudy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  function handleForm() {
    navigate("/test");
  }

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

  const checkUserAuth = () => {
    if (localStorage.getItem("COURSES_USER_TOKEN")) {
      navigate("/enterance");

    } else {
      localStorage.setItem('history',"/enterance");
      navigate("/login-2");
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="relative h-[210px] flex flex-col justify-center xsm:h-[100px] md:h-[150px]">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50"
          style={{ backgroundImage: `url(${Img1})` }}
        ></div>
        <div className="relative z-10 font-pop font-semibold text-white text-[44px] pl-20 xsm:text-[18px] xsm:pl-4 md:text-[30px] md:pl-14">
          Pay After Placement
        </div>
      </div>

      {/* Main */}
      <div className=" my-6">
        <div className="px-[5%]">
          <p className="font-pop font-semibold text-[32px] sm:text-[22px] xsm:text-[12px] md:text-[26px]">
            From Learning To Earning{" "}
          </p>
        </div>
        {/* Agreement */}
        <div className="flex justify-between px-[5%] xsm:flex-col xsm:gap-4">
          <div className="w-[55%] mt-10 flex flex-col gap-4 xsm:mt-5 xsm:w-[90%] md:mt-8">
            <div>
              <p className="font-pop font-semibold text-[26px] text-[#2D3436] sm:text-[18px] xsm:text-[12px] md:text-[22px]">
                How This Works ?
              </p>
            </div>
            <div className="flex items-center gap-4 xsm:gap-2 xsm:items-start">
              <div className="w-[7%] xsm:w-[10%]">
                <img src="../Icons/handwithmoney.svg" className="w-full h-full" alt="icon" />
              </div>
              <div className="w-[90%]">
                <div>
                  <p className="font-nu font-semibold text-[22px] sm:text-[15px] xsm:text-[12px] md:text-[18px]">
                  Average CTC
                  </p>
                  <p className="font-nu font-medium text-[#3C3C3CE5] text-[16px] sm:text-[12px] xsm:text-[11px] md:text-[12px] md:leading-tight">
                    If your salary exceeds the CTC of ₹3,00,000/-, your monthly payments of PAP will start.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 xsm:gap-2 xsm:items-start">
              <div className="w-[7%] xsm:w-[10%]">
                <img src="../Icons/greencalender.svg" className="w-full h-full" alt="icon" />
              </div>
              <div className="w-[90%]">
                <div>
                  <p className="font-nu font-semibold  text-[22px] sm:text-[15px] xsm:text-[12px] md:text-[18px]">
                    1 Year Assurance
                  </p>
                  <p className="font-nu font-medium text-[#3C3C3CE5] text-[16px] sm:text-[12px] xsm:text-[11px] md:text-[12px] md:leading-tight">
                    If you don’t get a job offer within 1 year of the course, your security amount will be refunded and you pay nothing for your learning at Hoping Minds.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 xsm:gap-2 xsm:items-start">
              <div className="w-[7%] xsm:w-[10%]">
                <img src="../Icons/electricbolt.svg" className="w-full h-full" alt="icon" />
              </div>
              <div className="w-[90%]">
                <div>
                  <p className="font-nu font-semibold text-[22px] sm:text-[15px] xsm:text-[12px] md:text-[18px]">
                    Enforcement
                  </p>
                  <p className="font-nu font-medium text-[#3C3C3CE5] text-[16px] sm:text-[12px] xsm:text-[11px] md:text-[12px] md:leading-tight">
                  In the event you are not working or if your income drops below the CTC mentioned in the Pay After Placement Agreement in initial 6 months from your joining, we make sure to provide the another opportunity with same or above package within 3 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%] relative xsm:h-60 xsm:w-[100%] xsm:flex xsm:justify-center">
            <div className="absolute left-[37%] top-[5%] z-10 sm:right-[-10%] xsm:left-[45%] xsm:top-[0%] xl:left-[56%]">
              <img
                className="w-[310px] h-[180px] xsm:w-[250px] xsm:h-[120px] md:w-[210px] md:h-[120px] sm:w-[250px] sm:h-[120px]"
                src="../img/papagreeimg1.png" alt=""
              />
            </div>
            <div className="absolute top-[60%] z-10 md:top-[52%] sm:left-[-10%] sm:top-[52%] xsm:left-0 xsm:w-[55%] xsm:top-[55%]">
              <img
                className="w-[310px] h-[180px] sm:w-[180px] sm:h-[120px] xsm:w-[250px] xsm:h-[120px] md:w-[210px] md:h-[120px] "
                src={Img3} alt=""
              />
            </div>
            <div className="bg-[#E2FFF1] rounded-xl w-[70%] h-[80%] absolute left-[25%] top-[20%] sm:h-[40%] sm:left-[0%] sm:w-[90%] xsm:h-[70%] xsm:left-[15%] md:h-[60%] md:left-[20%]"></div>
          </div>
        </div>
        {/* course fee */}
        <div className=" px-[5%] flex mt-24 justify-between xsm:flex-col-reverse md:my-18 xsm:my-16 xsm:mt-12">
          <div className="w-[40%] relative mt-12 xsm:w-[100%] xsm:flex xsm:pl-7 xsm:mt-6 md:mt-8">
            <div className="bg-[#E2FFF1] rounded-xl w-[75%] h-full absolute top-[-12%] left-[10%] z-[-2] sm:top-[20%] sm:left-[-10%] xsm:left-[16%] xsm:top-[-10%] sm:w-[220px] sm:h-[180px]"></div>
            <div className="z-10 h-full sm:mt-10">
              <img className="w-[75%] h-full xsm:w-[260px] xsm:h-[180px] sm:w-[260px] sm:h-[180px]" alt="course fee" src={window.innerwidth > 480 ? Img2 : Img4} />
            </div>
          </div>
          <div className="w-[55%] flex flex-col gap-3 mt-4 xsm:gap-2 xsm:w-[90%] md:gap-4">
            <div>
              <p className="font-pop font-semibold text-[28px] text-[#2D3436] xsm:text-[12px] sm:text-[15px] xsm:font-bold md:text-[24px]">
                Course Fee
              </p>
            </div>
            <div className=" flex flex-col gap-6 xsm:gap-3 md:gap-4">
              <p className="font-nu text-[17px] xsm:text-[11px] md:text-[13px] sm:text-[12px]">
                These only take effect once you start earning above the PAP threshold amount for your course.
              </p>
              <div className="flex flex-col gap-6 ml-6 xsm:gap-2 xsm:ml-4 md:gap-2 ">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2 md:w-3 md:h-3"></div>
                  <p className="font-nu text-[17px] xsm:text-[11px] md:text-[13px] sm:text-[12px]">
                    Average CTC : We offer an average CTC of ₹5,00,000/- LPA.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2 md:w-3 md:h-3"></div>
                  <p className="font-nu text-[17px] xsm:text-[11px] md:text-[13px] sm:text-[12px]">
                    One Time Payment
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2 md:w-3 md:h-3"></div>
                  <p className="font-nu text-[17px] xsm:text-[11px] md:text-[13px] sm:text-[12px]">
                    Training Tenure : 3 Months
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  {/* <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2 md:w-3 md:h-3"></div> */}
                  <div className="font-nu text-[17px] xsm:text-[11px] md:text-[13px] flex sm:flex-col items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2 md:w-3 md:h-3"></div>
                      <p className="sm:text-[12px]">PAP Payable Amount : &nbsp;</p>
                    </div>
                    <div className="ml-5">
                      <p className="sm:text-[12px]">Upto 6 LPA INR 60,000/-</p>
                      <p className="sm:text-[12px]">Above 6 LPA INR 75,000/-</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="font-nu text-[17px] xsm:text-[11px] md:text-[13px] sm:text-[12px]">
              CTC (Cost to Company) is defined as the total gross income earned, including but not permitted, to variable pay, compensations and Employee Stock Ownership Plan (ESOP). Find out more in the FAQ section.
              </p>
            </div>
          </div>
        </div>
        {/* Dropout clauses */}
        {/* will be changed first */}
        {/* <div className="px-[5%] flex  justify-between my-36 xsm:my-10">
          <div className="w-[65%]  flex flex-col gap-6 xsm:gap-2">
            <div>
              <p className="font-pop font-semibold text-[24px] text-[#2D3436] xsm:text-[12px] xsm:font-bold">Dropout Clauses</p>
            </div>
            <div>
              <p className="font-nu text-[17px] xsm:text-[8px]">If you realise that Hoping Minds is not for you, you may withdraw from our courses at anytime. Here is how the fee works in case you drop-out</p>
            </div>
            <div className="flex flex-col gap-4 ml-6 xsm:gap-2">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2"></div>
                <p className="font-nu text-[17px] xsm:text-[11px]">Week 1-5 :  No Payment</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2"></div>
                <p className="font-nu text-[17px] xsm:text-[11px]">Week 6-20  :  50000</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2"></div>
                <p className="font-nu text-[17px] xsm:text-[11px]">Week 21 - 30/35  :  100% PAP Amount</p>
              </div>
            </div>
            <div>
              <p className="font-nu text-[17px] xsm:text-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </div>
          <div className="w-[30%] relative">
            <div className="absolute z-10 translate-x-32 xsm:translate-x-6">
              <img className="rounded-xl w-[85%] h-full" src="../img/papclausesimg1.png" alt="image" />
            </div>
            <div className="absolute top-[64%] z-10  translate-x-[-15%] xsm:translate-x-[-0%] xsm:top-[55%]">
              <img className="rounded-xl w-[85%] h-full z-10" src="../img/papclausesimg1.png" alt="image" />
            </div>
            <div className="bg-gradient-to-outside w-[70%] h-[70%] absolute top-[30%] left-[15%] opacity-55"></div>
          </div>
        </div> */}

        <PAPBenefit/>
        {/* Agreement */}
        <div className="px-[5%] my-12 relative ">
          <div className="bg-black rounded-xl px-24 py-14 text-white w-full flex flex-col items-center gap-6 xsm:gap-4 xsm:p-8 md:px-14 sm:px-10 md:py-8 md:gap-4">
            <div>
              <p className="font-pop font-semibold text-[34px] xsm:text-[12px] md:text-[26px] sm:text-[22px]">
                Pay After Placement(PAP) Agreement
              </p>
            </div>
            <div>
              <p className="font-nu text-[16px] leading-8 xsm:text-[11px] xsm:leading-normal xsm:tracking-wider md:leading-6 md:text-[14px] sm:text-justify ">
                PAP Agreement is a legal contract that makes education at Hoping
                Minds outcome-based. It is not an education loan, as you do not
                have to pay any interest & you do not require any collaterals.
                If you do not get placed within 1 year of course completion,
                your learning with Hoping Minds is completely free.
              </p>
            </div>
            <div className="flex gap-4 hover:gap-8">
             {window.innerWidth > 500 ? <button
                onClick={checkUserAuth}
                className="bg-white text-black hover:bg-[#1DBF73] hover:text-white hover:scale-125 font-pop font-medium text-[18px] px-8 py-2 rounded-full xsm:text-[12px] xsm:py-1 xl:py-3 xsm:px-4 md:text-[14px] sm:text-[14px]"
              >
                Start Test
              </button> : ''}
              <a
                href={"/PAP Candidate MOU.pdf"}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black hover:bg-[#1DBF73] hover:text-white hover:scale-125 font-pop font-medium text-[18px] px-8 py-2 rounded-full xsm:text-[12px] xsm:py-1 xl:py-3 xsm:px-4 md:text-[14px] sm:text-[14px]"
              >
                View Agreement
              </a>
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="px-[5%] my-12 flex flex-col items-center xsm:gap-2 xsm:my-14">
          <div>
            <p className=" font-pop font-semibold text-[26px] text-[#2D3436] xsm:text-[18px] md:text-[22px]">
              Frequently Asked Questions
            </p>
          </div>
          <div className=" w-full">
            {/* {faqs.map((item, index) => (
              <div key={index} className="faq1 w-full">
                <div className=" w-full">
                  <div
                    onClick={() => ClickSection(index)}
                    className="drop-top flex justify-between items-center w-full py-4 cursor-pointe xsm:py-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:w-2 xsm:h-2 md:h-3 md:w-3"></div>
                      <p className="xsm:text-[8px] md:text-[14px]">
                        {item.question}
                      </p>
                    </div>
                    <div>
                      <img
                        src="../Icons/papdropdown.svg"
                        alt=""
                        className={`arrow-icon xsm:h-3 xsm:w-3 md:h-4 md:w-4 ${item.isOpen ? "rotate-up" : "rotate-down"
                          }`}
                      />
                    </div>
                  </div>
                  {item.isOpen && (
                    <div className="px-6 py-4 xsm:px-4 xsm:py-3">
                      <p className="xsm:text-[8px] md:text-[14px]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
                <hr className="border-[1px]" />
              </div>
            ))} */}
            {faqs.map((item, index) => (
              <div key={index} className="faq1 w-full  bg-white rounded-md">
                <div className=" w-full ">
                  <div
                    onClick={() => ClickSection(index)}
                    className="drop-top  flex justify-between items-center w-full py-3 px-2 cursor-pointe cursor-pointer xsm:gap-2 xsm:px-4 xsm:py-2"
                  >
                    <div className="flex items-center gap-2 relative pl-5 before:content-['\2022'] before:absolute before:left-0 before:text-black">
                      <p className={`xsm:text-[12px] font-semibold md:text-[14px] ${item.isOpen && 'text-[#1DBF73]'}`}>
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
                      <p className="xsm:text-[11px] text-[#555555] font-nu md:text-[14px] xsm:px-5">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className=" w-full ">
          <div className="fixed top-[20%] left-[30%] z-[9999]">
            <div className=" bg-white rounded-lg flex flex-col gap-4 border pb-4">
              <div className="border-black border-b-2 px-4 py-1 flex justify-between">
                <p className="font-nu font-extrabold text-[#1DBF73] text-[22px]">
                  Pay After Placement Form
                </p>
                <button
                  className="text-[25px] text-[#707070]"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6 px-4 py-2">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col text-[15px]">
                    <label
                      htmlFor="name"
                      className="font-nu font-semibold text-[#707070]"
                    >
                      First Name
                    </label>
                    <input
                      className="bg-[#00000014] py-1 px-2 rounded-md shadow-md"
                      type="text"
                      name="fname"
                      value={formValues.fname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col text-[15px]">
                    <label
                      htmlFor="name"
                      className="font-nu font-semibold text-[#707070]"
                    >
                      Email
                    </label>
                    <input
                      className="bg-[#00000014] py-1 px-2 rounded-md shadow-md"
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col text-[15px]">
                    <label
                      htmlFor="name"
                      className="font-nu font-semibold text-[#707070]"
                    >
                      College/University
                    </label>
                    <input
                      className="bg-[#00000014] py-1 px-2 rounded-md shadow-md"
                      type="text"
                      name="college"
                      value={formValues.college}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col text-[15px]">
                    <label
                      htmlFor="name"
                      className="font-nu font-semibold text-[#707070]"
                    >
                      Branch
                    </label>
                    <input
                      className="bg-[#00000014] py-1 px-2 rounded-md shadow-md"
                      type="text"
                      name="branch"
                      value={formValues.branch}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col text-[15px]">
                    <label
                      htmlFor="name"
                      className="font-nu font-semibold text-[#707070]"
                    >
                      Year Of Passing{" "}
                    </label>
                    <input
                      className="bg-[#00000014] py-1 px-2 rounded-md shadow-md"
                      type="text"
                      name="yearOfPassing"
                      value={formValues.yearOfPassing}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col text-[15px]">
                    <label
                      htmlFor="name"
                      className="font-nu font-semibold text-[#707070]"
                    >
                      Last Name
                    </label>
                    <input
                      className="bg-[#00000014] py-1 px-2 rounded-md shadow-md"
                      type="text"
                      name="lname"
                      value={formValues.lname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col text-[15px]">
                    <label
                      htmlFor="name"
                      className="font-nu font-semibold text-[#707070]"
                    >
                      Contact Number
                    </label>
                    <div className="">
                      <PhoneInput
                        className="papphone"
                        defaultCountry="IN"
                        name="contact"
                        value={num}
                        onChange={setNum}
                      />
                    </div>
                    {/* <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" value={formValues.contact} onChange={handleChange}/> */}
                  </div>
                  <div className="flex flex-col text-[15px]">
                    <label
                      htmlFor="name"
                      className="font-nu font-semibold text-[#707070]"
                    >
                      Degree
                    </label>
                    <input
                      className="bg-[#00000014] py-1 px-2 rounded-md shadow-md"
                      type="text"
                      name="degree"
                      value={formValues.degree}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col text-[15px]">
                    <label
                      htmlFor="name"
                      className="font-nu font-semibold text-[#707070]"
                    >
                      Field Of Study
                    </label>
                    <input
                      className="bg-[#00000014] py-1 px-2 rounded-md shadow-md"
                      type="text"
                      name="fieldOfStudy"
                      value={formValues.fieldOfStudy}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleForm}
                  className="bg-[#1DBF73] text-white font-pop font-medium text-[18px] px-6 py-1 rounded-full xsm:text-[10px] xsm:py-1 xsm:px-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
