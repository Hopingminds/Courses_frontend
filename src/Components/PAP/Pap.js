import React, { useState } from "react";
import Img1 from "../../Assets/Images/papheaderbg.png";
import styled from "styled-components";
import Test from "../Test/Test";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./pap.css";

export default function Pap() {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const [num, setNum] = useState("");
  let navigate = useNavigate();

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
    <div>
      {/* Header */}
      <div
        className="h-[210px] flex flex-col justify-center xsm:h-[100px]"
        style={{
          backgroundImage: `url(${Img1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="font-pop font-semibold text-white text-[44px] pl-20 xsm:text-[20px] xsm:pl-4">
          Pay After Placement
        </div>
      </div>
      {/* Main */}
      <div className="px-[8%] my-6 xsm:px-[3%]">
        {/* FAQ */}
        <div className="my-12 flex flex-col items-center xsm:gap-2 xsm:my-8">
          <div>
            <p className="font-pop font-semibold text-[26px] text-[#2D3436] xsm:text-[12px]">
              Frequently Asked Questions
            </p>
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
            <div className="bg-white rounded-lg flex flex-col gap-4 border pb-4">
              <div className="border-black border-b-2 px-4 py-1 flex justify-between">
                <p className="font-nu font-extrabold text-[#1DBF73] text-[22px]">
                  Pay After Placement Form
                </p>
                <button className="text-[25px] text-[#707070]" onClick={() => setIsModalOpen(false)}>
                  &times;
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6 px-4 py-2">
                {/* Form inputs */}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#1DBF73] text-white font-pop font-medium text-[18px] px-6 py-1 rounded-full"
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
