import { useState } from "react";
import Img1 from "../../Assets/Images/papheaderbg.png";
import styled from "styled-components";
import Test from "../Test/Test";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import './pap.css'

export default function Pap() {

  const [clicked, setclicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [num, setNum] = useState('')
  const [Activeid, setActiveid] = useState()
  let navigate = useNavigate();
  const [faqs, setFaqs] = useState([
    {
      question: "How does the Pay after Placement model work?",
      answer:
        "Participants undergo training without upfront payment, only paying fees upon securing a job through the program.",
      isOpen: false,
    },
    {
      question: "How does the Pay after Placement model work?",
      answer:
        "Participants undergo training without upfront payment, only paying fees upon securing a job through the program.",
      isOpen: false,
    },
    {
      question: "How does the Pay after Placement model work?",
      answer:
        "Participants undergo training without upfront payment, only paying fees upon securing a job through the program.",
      isOpen: false,
    },
    {
      question: "How does the Pay after Placement model work?",
      answer:
        "Participants undergo training without upfront payment, only paying fees upon securing a job through the program.",
      isOpen: false,
    },
    {
      question: "How does the Pay after Placement model work?",
      answer:
        "Participants undergo training without upfront payment, only paying fees upon securing a job through the program.",
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
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }
  function handleForm() {
    navigate('/test')
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
    if (localStorage.getItem('COURSES_USER_TOKEN')) {
      navigate('/test')
    }
    else {
      navigate('/login')
    }
  }

  return (
    <div >
      {/* Header */}
      <div
        className="h-[210px] flex flex-col justify-center xsm:h-[100px]"
        style={{
          backgroundImage: `url(${Img1})`,
          backgroundSize: 'cover'
        }}
      >
        <div className="font-pop font-semibold text-white text-[44px] pl-20 xsm:text-[20px] xsm:pl-4">Pay After Placement</div>
      </div>
      {/* Main */}
      <div className="px-[8%] my-6 xsm:px-[3%]">
        <div>
          <p className="font-pop font-semibold text-[32px] xsm:text-[14px]">From Learning To Earning </p>
        </div>
        {/* Agreement */}
        <div className="flex justify-between">
          <div className="w-[55%] mt-10 flex flex-col gap-4 xsm:mt-5">
            <div>
              <p className="font-pop font-semibold text-[26px] text-[#2D3436] xsm:text-[12px]">How This Works ?</p>
            </div>
            <div className="flex items-center gap-4 xsm:gap-2">
              <div className="w-[7%]">
                <img src="../Icons/handwithmoney.svg" />
              </div>
              <div className="w-[90%]">
                <div>
                  <p className="font-nu font-semibold text-[22px] xsm:text-[10px]">Minimum CTC</p>
                  <p className="font-nu font-medium text-[16px] xsm:text-[7px]">If your salary is above the CTC of ₹3,50,000/-, the PAP monthly payments come into effect.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 xsm:gap-2">
              <div className="w-[7%]">
                <img src="../Icons/greencalender.svg" />
              </div>
              <div className="w-[90%]">
                <div>
                  <p className="font-nu font-semibold text-[22px] xsm:text-[10px]">1 Year</p>
                  <p className="font-nu font-medium text-[16px] xsm:text-[7px]">If you don’t get a job offer within 1 year of the course, you pay nothing for your learning at  Hoping Minds.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 xsm:gap-2">
              <div className="w-[7%]">
                <img src="../Icons/electricbolt.svg" />
              </div>
              <div className="w-[90%]">
                <div>
                  <p className="font-nu font-semibold text-[22px] xsm:text-[10px]">Enforcement</p>
                  <p className="font-nu font-medium text-[16px] xsm:text-[7px]">In the event you are not working or if your income drops below the CTC mentioned in the Pay After Placement Agreement the monthly payments pause.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%] relative">
            <div className="absolute left-[37%] top-[8%] z-10 xsm:left-[14%] xsm:top-[15%]">
              <img className="w-[310px] h-[180px] xsm:w-[110px] xsm:h-[85px]" src="../img/papagreeimg1.png" />
            </div>
            <div className="absolute top-[60%] z-10">
              <img className="w-[310px] h-[180px] xsm:w-[110px] xsm:h-[85px]" src="../img/papagreeimg2.png" />
            </div>
            <div className="bg-[#E2FFF1] rounded-xl w-[70%] h-[80%] absolute left-[25%] top-[20%] xsm:h-[65%] xsm:left-[15%]"></div>
          </div>
        </div>
        {/* course fee */}
        <div className="flex my-24 justify-between xsm:my-10">
          <div className="w-[40%] relative mt-12 xsm:mt-4">
            <div className="bg-[#E2FFF1] rounded-xl w-[75%] h-full absolute top-[-12%] left-[10%] z-[-2]"></div>
            <div className="z-10 h-full">
              <img className="w-[75%] h-full" src="../img/papcoursefeeimg1.png" />
            </div>
          </div>
          <div className="w-[55%] flex flex-col gap-6 xsm:gap-2">
            <div>
              <p className="font-pop font-semibold text-[28px] text-[#2D3436] xsm:text-[10px] xsm:font-bold">Course Fee</p>
            </div>
            <div className=" flex flex-col gap-6 xsm:gap-3">
              <p className="font-nu text-[17px] xsm:text-[7px]">These only take effect once you start earning above the PAP threshold amount for your course.</p>
              <div className="flex flex-col gap-6 ml-6 xsm:gap-2 xsm:ml-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2"></div>
                  <p className="font-nu text-[17px] xsm:text-[7px]">Average CTC  :  &gt; 8Lpa</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2"></div>
                  <p className="font-nu text-[17px] xsm:text-[7px]">Monthly Payable   :  ₹ 2,500</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2"></div>
                  <p className="font-nu text-[17px] xsm:text-[7px]">Training Tenure   :  4 Months</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2"></div>
                  <p className="font-nu text-[17px] xsm:text-[7px]">Total Payable Fee   :  ₹ 1,50,000</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-nu text-[17px] xsm:text-[7px]">CTC (Cost to Company) is defined as the total gross income earned, including but not permitted, to variable pay, compensations and Employee Stock Ownership Plan (ESOP). Find out more in the FAQ section.</p>
            </div>
          </div>
        </div>
        {/* Dropout clauses */}
        <div className="flex  justify-between my-36 xsm:my-10">
          <div className="w-[65%]  flex flex-col gap-6 xsm:gap-2">
            <div>
              <p className="font-pop font-semibold text-[24px] text-[#2D3436] xsm:text-[10px] xsm:font-bold">Dropout Clauses</p>
            </div>
            <div>
              <p className="font-nu text-[17px] xsm:text-[8px]">If you realise that Hoping Minds is not for you, you may withdraw from our courses at anytime. Here is how the fee works in case you drop-out</p>
            </div>
            <div className="flex flex-col gap-4 ml-6 xsm:gap-2">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2"></div>
                <p className="font-nu text-[17px] xsm:text-[7px]">Week 1-5 :  No Payment</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2"></div>
                <p className="font-nu text-[17px] xsm:text-[7px]">Week 6-20  :  50000</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#1DBF73] xsm:h-2 xsm:w-2"></div>
                <p className="font-nu text-[17px] xsm:text-[7px]">Week 21 - 30/35  :  100% PAP Amount</p>
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
            <div className="bg-gradient-to-outside w-[70%] h-[70%] absolute top-[30%] left-[18%] opacity-55"></div>
          </div>
        </div>
        {/* Agreement */}
        <div className="my-12 relative xsm:my-8">
          <div className="bg-black rounded-xl px-24 py-14 text-white w-full flex flex-col items-center gap-6 xsm:gap-4 xsm:px-8 xsm:py-3">
            <div>
              <p className="font-pop font-semibold text-[34px] xsm:text-[10px]">Pay After Placement(PAP) Agreement</p>
            </div>
            <div>
              <p className="font-nu text-[16px] leading-8 xsm:text-[7px] xsm:leading-normal xsm:tracking-wider">PAP Agreement is a legal contract that makes education at Hoping Minds outcome-based. It is not an education loan, as you do not have to pay any interest & you do not require any collaterals. If you do not get placed within 1 year of course completion, your learning with Hoping Minds is completely free.</p>
            </div>
            <div className="">
              <button onClick={checkUserAuth} className="bg-white text-black font-pop font-medium text-[18px] px-6 py-2 rounded-full xsm:text-[10px] xsm:py-1 xsm:px-4">Explore Now</button>

            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="my-12 flex flex-col items-center xsm:gap-2 xsm:my-8">
          <div>
            <p className="font-pop font-semibold text-[26px] text-[#2D3436] xsm:text-[12px]">Frequently Asked Questions</p>
          </div>
          <div className=" w-full">
            {faqs.map((item, index) => (
              <div key={index} className="faq1 w-full">
                <div className=" w-full">
                  <div
                    onClick={() => ClickSection(index)}
                    className="drop-top flex justify-between items-center w-full py-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#1DBF73]"></div>
                      <p>{item.question}</p>
                    </div>
                    <div>
                      <img
                        src="../Icons/papdropdown.svg"
                        alt=""
                        className={`arrow-icon ${
                          item.isOpen ? "rotate-up" : "rotate-down"
                        }`}
                      />
                    </div>
                  </div>
                  {item.isOpen && (
                    <div className="px-6 py-4">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
                <hr className="border-[1px]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className=" w-full ">
          <div className="fixed top-[20%] left-[30%] z-[9999]">
            <div className=' bg-white rounded-lg flex flex-col gap-4 border pb-4'>
              <div className='border-black border-b-2 px-4 py-1 flex justify-between'>
                <p className='font-nu font-extrabold text-[#1DBF73] text-[22px]'>Pay After Placement Form</p>
                <button className="text-[25px] text-[#707070]" onClick={closeModal}>
                  &times;
                </button>
              </div>
              <div className='grid grid-cols-2 gap-6 px-4 py-2'>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>First Name</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" name="fname" value={formValues.fname} onChange={handleChange} />
                  </div>
                  <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Email</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="email" name="email" value={formValues.email} onChange={handleChange} />
                  </div>
                  <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>College/University</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" name="college" value={formValues.college} onChange={handleChange} />
                  </div>
                  <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Branch</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" name="branch" value={formValues.branch} onChange={handleChange} />
                  </div>
                  <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Year Of Passing </label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" name="yearOfPassing" value={formValues.yearOfPassing} onChange={handleChange} />
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Last Name</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" name="lname" value={formValues.lname} onChange={handleChange} />
                  </div>
                  <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Contact Number</label>
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
                  <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Degree</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" name="degree" value={formValues.degree} onChange={handleChange} />
                  </div>
                  <div className='flex flex-col text-[15px]'>
                    <label htmlFor="name" className='font-nu font-semibold text-[#707070]'>Field Of Study</label>
                    <input className='bg-[#00000014] py-1 px-2 rounded-md shadow-md' type="text" name="fieldOfStudy" value={formValues.fieldOfStudy} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <button onClick={handleForm} className="bg-[#1DBF73] text-white font-pop font-medium text-[18px] px-6 py-1 rounded-full xsm:text-[10px] xsm:py-1 xsm:px-4">Submit</button>
              </div>
            </div>
          </div>
        </div>

      )}
    </div>
  );
};
