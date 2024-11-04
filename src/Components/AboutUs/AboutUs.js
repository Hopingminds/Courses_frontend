import React from "react";
import Img1 from "../../Assests/Images/aboutus1.png";
import Img2 from "../../Assests/Images/aboutus2.png";
import Img3 from "../../Assests/Images/aboutus3.png";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col gap-4 px-[5%] py-16 xsm:py-10">
        <p className="text-[#1DBF73] text-[64px] font-pop font-semibold xsm:text-[18px] xsm:text-center">
          About Us
        </p>
        <div className="flex flex-row justify-between xsm:flex-col">
          <div className="flex flex-col gap-6 w-[50%] pb-28 pt-6 xsm:pt-0 xsm:w-full xsm:pb-8 xsm:gap-4">
            <p className="text-[#141414] text-[48px] font-pop font-semibold leading-[50px] xsm:text-[12px] xsm:leading-normal xsm:text-center">
              {" "}
              <span className="text-[#1DBF73] "> Hoping Minds </span> providing
              the best opportunities to the students around the globe.
            </p>
            <p className="text-[#1E1E1E] text-[20px]  leading-[24px] text-justify xsm:text-[11px] font-nu xsm:leading-4">
              HopingMinds is working to transform India’s educational system
              into an outcome-oriented system by helping students identify,
              train for and get placed in growing career paths. We run
              industry-oriented, holistic development programs based on real
              time industry requirements of our partner firms to maximise
              placement outcomes and enable our students to build aspirational
              careers. We have successfully run 30+ training programs PAN India
              covering over 10,000 students and are backed by established
              investors from India, UK and USA. HopingMinds has been established
              by driven young entrepreneurs with prestigious IIT and IIM
              backgrounds along with combined sectoral experience of 30 years in
              the counselling, training, and placement ecosystem.
            </p>
          </div>

          <div className="flex justify-center items-center relative lg:w-[28%] xl:w-[40%] lg:right-[4rem] xsm:h-64 xsm:py-8">
            <div className="bg-[#E2FFF1] text-[#E2FFF1] rounded-xl w-[68%] lg:h-[20%] h-[80%] lg:w-[68%] xl:w-[68%]"></div>
            <img
              alt=""
              src={Img1}
              className="absolute top-3 lg:top-[37.5%] right-[1rem] rounded-xl object-contain w-[55%] lg:w-[55%] xl:w-[55%] xsm:top-0"
            />
            <img
              alt=""
              src={Img2}
              className="absolute bottom-3 lg:bottom-[37.5%] left-[1rem] rounded-xl object-contain w-[55%] lg:w-[55%] xl:w-[55%] xsm:bottom-0"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-36 px-[5%] py-10 xsm:gap-0 xsm:py-2 xsm:flex-col-reverse">
        <div className="flex w-[35%] justify-center items-center relative xsm:h-56 xsm:w-[100%] xsm:mt-6">
          <div className="w-[90%] h-full bg-[#E2FFF1] rounded-lg xsm:w-[70%]"></div>
          <img src={Img3} alt="" className="absolute top-12 w-[80%] xsm:w-[60%] xsm:top-6" />
        </div>
        <div className="flex flex-col gap-3 w-[45%] py-6 xsm:w-[100%] xsm:pb-0 xsm:mx-auto">
          <p className="text-[#22B286] text-[32px] font-pop font-bold xsm:text-center xsm:text-[18px]">
            Features
          </p>
          <div className="flex flex-col gap-5">
            <p className="text-[#141414] text-[48px] leading-[54px] font-pop xsm:text-[12px] xsm:leading-normal xsm:text-center font-semibold">
              We are always working to provide you best of the features in all
              aspects.
            </p>
            <div className="text-[#1E1E1E] text-[20px] flex flex-col gap-4 leading-[24px] text-justify xsm:text-[11px] font-nu xsm:leading-4">
              <p>
                HopingMinds is an NSDC and Swayam Plus accredited partner with
                course certification and monitoring done on the Skill India
                Portal. We have been awarded by the Dynamic World Education
                Community and are an active participant in Kaushal Melas across
                India.
              </p>
              <p className="m-0 p-0 leading-tight">
                We have the capability to run specialised programs based on
                opportunities such as our recent program for Oil & Gas field
                engineers in Jorhat, Assam; Electrical vehicles Design & Repair
                for JBM; ongoing program for Electric Vehicle Systems, Design
                and SMR with Okaya; AI programs with NetSmartz, ITBD, TCS,
                Chandigarh Group of Colleges, Chitkara University, PTU, HPTU and
                many more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 px-[5%] py-20 pb-40 xsm:pb-10 xsm:gap-4">
        <p className="text-[#1DBF73] text-[32px] font-pop font-semibold xsm:text-center xsm:text-[18px]">
          Our Benefits
        </p>
        <p className="text-[#141414] text-[48px] font-pop font-semibold w-[80%] flex text-center xsm:text-[12px] xsm:w-full lg:w-full xsm:leading-normal xsm:text-center ">
          By Joining Hoping Minds Platform, One Can Avail a Lot Of Benefits.
        </p>
        <p className="text-[#1E1E1E] text-[20px]  leading-[24px] text-justify xsm:text-[11px] font-nu xsm:leading-4">
          HopingMinds’ learning experience has been developed in consultation
          with learners to build a highly engaging & gamified program whilst
          allowing for flexibility by leveraging a load of digital initiatives.
          We have our own Learning Management System, mobile application,
          testing solution and interview platform to ensure quality delivery and
          assessments. The firm believes in smaller batches to ensure individual
          attention to all learners, thus prioritizing quality of development
          over quantity of students. Exposure to industry experts is another
          critical component of our learning experience to ensure high
          motivation, real time insights, industry exposure & enable students to
          apply concepts effectively
        </p>
        <p className="text-[#1E1E1E] text-[20px]  leading-[24px] text-justify xsm:text-[11px] font-nu xsm:leading-4">
          We have 200+ industry partners across India and abroad that we work
          closely with for placements. Our dedicated placement coordinators work
          day in and day out to identify requirements from these partners and
          also help tailor our programs on an agile basis to meet them.
        </p>
        {/* <div className="grid grid-cols-3 gap-6 w-[80%] pt-6 xsm:flex xsm:flex-col xsm:w-full xsm:px-4">
          <div className="flex flex-col gap-4 justify-between rounded-xl bg-[#E2FFF1] p-6 xsm:w-full">
            <img src={Num1} alt="" className="w-[15%]" />
            <p className="text-[#141414] text-[32px] font-poppins xsm:text-[26px]">Standardization</p>
            <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans text-justify leading-8 xsm:text-[16px] font-pop">When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... <span className="text-[#1DBF73] cursor-pointer">Read More</span></p>
          </div>
          <div className="flex flex-col gap-4 justify-between rounded-xl border p-6">
            <img src={Num2} alt="" className="w-[15%]" />
            <p className="text-[#141414] text-[32px] font-poppins xsm:text-[26px]">Reduced Costs</p>
            <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans text-justify leading-8 xsm:text-[16px] font-pop">With hoping minds, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ... <span className="text-[#1DBF73] cursor-pointer">Read More</span></p>
          </div>
          <div className="flex flex-col gap-4 justify-between rounded-xl bg-[#E2FFF1] p-6">
            <img src={Num3} alt="" className="w-[15%]" />
            <p className="text-[#141414] text-[32px] font-poppins xsm:text-[26px]">More Customization</p>
            <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans text-justify leading-8 xsm:text-[16px] font-pop">Just like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different ... <span className="text-[#1DBF73] cursor-pointer">Read More</span></p>
          </div>
          <div className="flex flex-col gap-4 justify-between rounded-xl border p-6">
            <img src={Num4} alt="" className="w-[15%]" />
            <p className="text-[#141414] text-[32px] font-poppins xsm:text-[26px]">Affordable Pricing</p>
            <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans text-justify leading-8 xsm:text-[16px] font-pop">With hoping minds, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ... <span className="text-[#1DBF73] cursor-pointer">Read More</span></p>
          </div>
          <div className="flex flex-col gap-4 justify-between rounded-xl bg-[#E2FFF1] p-6">
            <img src={Num5} alt="" className="w-[15%]" />
            <p className="text-[#141414] text-[32px] font-poppins xsm:text-[26px]">Learner Satisfaction</p>
            <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans text-justify leading-8 xsm:text-[16px] font-pop">If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad ... <span className="text-[#1DBF73] cursor-pointer">Read More</span></p>
          </div>
          <div className="flex flex-col gap-4 justify-between rounded-xl border p-6">
            <img src={Num6} alt="" className="w-[15%]" />
            <p className="text-[#141414] text-[32px] font-poppins xsm:text-[26px]">Multimedia Materials</p>
            <p className="text-[#1E1E1E] text-[20px] font-Nunito Sans text-justify leading-8 xsm:text-[16px] font-pop">One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for ... <span className="text-[#1DBF73] cursor-pointer">Read More</span></p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AboutUs;
