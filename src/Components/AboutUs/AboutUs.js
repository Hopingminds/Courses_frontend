import React from "react";
import Img1 from "../../Assests/Images/aboutus1.png";
import Img2 from "../../Assests/Images/aboutus2.png";
import Img3 from "../../Assests/Images/aboutus3.png";
import Arrow from "../../Assests/Icons/aboutarrow.svg";
import Num1 from "../../Assests/Icons/01.svg";
import Num2 from "../../Assests/Icons/o2.svg";
import Num3 from "../../Assests/Icons/03.svg";
import Num4 from "../../Assests/Icons/04.svg";
import Num5 from "../../Assests/Icons/05.svg";
import Num6 from "../../Assests/Icons/06.svg";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col gap-4 pl-24 pr-4 py-16">
        <p className="text-[#1DBF73] text-[64px] font-poppins font-semibold">
          About Us
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-6 w-[50%] pb-28 pt-6">
            <p className="text-[#141414] text-[48px] font-poppins font-semibold " style={{ fontweight: 500, lineHeight: '1' }}>
              {" "}
              <span className="text-[#1DBF73]"> Hoping Minds </span> providing
              the best opportunities to the students around the glob.
            </p>
            <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans leading-8 text-justify">
              Hoping Minds, is a E Learning platform involved in User Experience
              and User Interface Training and Consulting. It was started in 2023
              and passionate towards User Interface Design/ User Experience
              Design, Human Computer Interaction Design. Humanoid is gushing
              towards competence to acquire knowledge and have a wide
              understanding towards the sphere through the foremost courses in
              the area of UI/UX Design, by strengthening up your skills, for
              your golden future . Humanoid is gushing towards competence to
              acquire knowledge and have a wide understanding towards the sphere
              through the foremost courses in the area of UI/UX Design, by
              strengthening up your skills, for your golden future
            </p>
          </div>
          <div className="flex justify-center items-center w-[40%] relative">
            <div className="bg-[#E2FFF1] text-[#E2FFF1] rounded-xl w-[68%] h-[80%]">
              .
            </div>
            <img
              src={Img1}
              className="absolute top-3 right-20 rounded-xl object-contain w-[55%]"
            />
            <img
              src={Img2}
              className="absolute bottom-3 left-20 rounded-xl object-contain w-[55%]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-36 px-24 py-10">
        <div className="flex w-[35%]  justify-center items-center">
          <img src={Img3} className=" w-[88%] h-[60%] " />
        </div>
        <div className="flex flex-col gap-3 w-[45%] py-6 pb-36">
          <p className="text-[#22B286] text-[32px] font-poppins font-bold">
            Features
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-[#141414] text-[46px] font-poppins " style={{ fontweight: 500, lineHeight: '1.2' }}>
              We are always working to provide you best of the features in all
              aspects.
            </p>
            <div className="flex flex-col gap-4 text-[#1E1E1E] text-[20px] font-Nunito Sans ">
              <p>
                Hoping Minds the chief determination is to clear the minds of
                our students about their goals, while making them consistent in
                their ambitions and pushing them to be confident for their
                journey towards the course of time.
              </p>
              <p>
                You will find every little thing on the internet in just a click
                of hand, but here we admire that without knowledge and practice
                the internet may even also fail you in your life.
              </p>
            </div>
          </div>
          <button className="text-[#FFFFFF] text-[20px] font-Nunito Sans bg-[#1DBF73] rounded-full flex flex-row gap-2 items-center justify-center px-2 w-auto py-2 mt-4">
            Learn More{" "}
            <span>
              {" "}
              <img src={Arrow} />{" "}
            </span>{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-col justidfy-center items-center gap-6 py-16 pb-40">
        <p className="text-[#1DBF73] text-[32px] font-poppins font-semibold">Our Benefits</p>
        <p className="text-[#141414] text-[40px] font-poppins font-semibold w-[45%] flex text-center">By Joining Hoping Minds Platform, One Can Avail a Lot Of Benefits.</p>
        <p className="text-[#1E1E1E] text-[24px] font-Nunito Sans w-[38%] text-center">Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best.</p>
        <div className="grid grid-cols-3 gap-6 w-[80%] pt-6">
            <div className="flex flex-col gap-4 justify-between rounded-xl bg-[#E2FFF1] p-6">
                <img src={Num1} className="w-[15%]" />
                <p className="text-[#141414] text-[32px] font-poppins">Standardization</p>
                <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans text-justify leading-8">When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... <span className="text-[#1DBF73] cursor-pointer">Read More</span></p>
            </div>
            <div className="flex flex-col gap-4 justify-between rounded-xl border p-6">
                <img src={Num2} className="w-[15%]" />
                <p className="text-[#141414] text-[32px] font-poppins">Reduced Costs</p>
                <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans text-justify leading-8">With hoping minds, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ... <span className="text-[#1DBF73] cursor-pointer">Read More</span></p>
            </div>
            <div className="flex flex-col gap-4 justify-between rounded-xl bg-[#E2FFF1] p-6">
                <img src={Num3} className="w-[15%]" />
                <p className="text-[#141414] text-[32px] font-poppins">More Customization</p>
                <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans text-justify leading-8">Just like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different ... <span className="text-[#1DBF73] cursor-pointer">Read More</span></p>
            </div>
            <div className="flex flex-col gap-4 justify-between rounded-xl border p-6">
                <img src={Num4} className="w-[15%]" />
                <p className="text-[#141414] text-[32px] font-poppins">Affordable Pricing</p>
                <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans text-justify leading-8">With hoping minds, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ... <span className="text-[#1DBF73] cursor-pointer">Read More</span></p>
            </div>
            <div className="flex flex-col gap-4 justify-between rounded-xl bg-[#E2FFF1] p-6">
                <img src={Num5} className="w-[15%]" />
                <p className="text-[#141414] text-[32px] font-poppins">Learner Satisfaction</p>
                <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans text-justify leading-8">If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad ... <span className="text-[#1DBF73] cursor-pointer">Read More</span></p>
            </div>
            <div className="flex flex-col gap-4 justify-between rounded-xl border p-6">
                <img src={Num6} className="w-[15%]" />
                <p className="text-[#141414] text-[32px] font-poppins">Multimedia Materials</p>
                <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans text-justify leading-8">One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for ... <span className="text-[#1DBF73] cursor-pointer">Read More</span></p>
            </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
