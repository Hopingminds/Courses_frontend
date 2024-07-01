import Img1 from "../../Assests/Images/hero2.jpeg";
import Img2 from "../../Assests/Images/hero7.jpeg";
import Img3 from "../../Assests/Images/hero8.jpeg";
import Img4 from "../../Assests/Images/huzefa.jpeg";
import Img5 from "../../Assests/Images/saloni.png";
import Img6 from "../../Assests/Images/Lalit.png";
import Img7 from "../../Assests/Images/Anju.jpg";
import Img8 from "../../Assests/Images/mohd.jpg";
import Img9 from "../../Assests/Images/Abhishek.jpeg";
import Img10 from "../../Assests/Images/SoumenDas.jpg";
import Img11 from "../../Assests/Images/TunishaJain.png";
import Img12 from "../../Assests/Images/SomironMitra.png";
import Img13 from "../../Assests/Images/Atul Chhabra.jpg";
import Img14 from "../../Assests/Images/Prashant.jpg";
import Img15 from "../../Assests/Images/SoniaGarg.jpg";
import Img16 from "../../Assests/Images/TajwarKhan.jpg";
import Img17 from "../../Assests/Images/Manikant Kandukuri.jpg";
import Img18 from "../../Assests/Images/Nikita S Kotme.jpg";
import Img19 from "../../Assests/Images/KajalSingh.jpg";
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function Newinstructor() {
  return (
    <>
      <div className="font-pop px-[5%] py-10 pt-14 xsm:py-[5%] bg-[#111F25] mt-20 xsm:mt-12">
        <div className="text-[#fff] font-pop text-3xl font-semibold xsm:text-[14px] md:text-[20px]">
          Our Instructors
        </div>
        <div className=" py-10">
          <Splide
            options={{
              type: "loop",
              perPage:
                window.innerWidth <= 480
                  ? 2
                  : window.innerWidth >= 721 && window.innerWidth <= 1024
                  ? 3
                  : 4,
              pagination: false,
              perMove: 1,
              wheel: false,
              arrows: false,
              autoplay: true,
              interval: 3000,
              speed: 5000,
              drag: true,
              gap: "1rem",
            }}
          >
            <SplideSlide>
              <div className=" space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img src="/ins1.png" className="rounded-full" />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Akarshan Puri
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Data Scientist</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                Senior Manager@ Data Innovation ,Bill INC.,USA, Gold Medalist at BITS Pilani, Dubai, with 9+ years of experience in data science. 
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className=" space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img src="/ins2.jpg" className="rounded-full" />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Aditya Sen
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                  Associate Director – Cognisant UK, ex Infosys, ex Wipro
                  Experience – Clean Tech, Digital Transformation
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="  space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img src="/ins3.png" className="rounded-full" />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Mohit Banka
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                Worked with industry giants like Amazon and Microsoft. His experience includes Data visualization , with a focus on creating scalable solutions for tech giants.
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img src="/ins4.png" className="rounded-full" />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Hardik Mehta
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className= "text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                  Senior Manager Wipro Product Management
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className=" space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img src={Img2} className="rounded-full h-full w-full " />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Praachee Bhargava
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                A UGC-Net qualified academic with 15 years of teaching and 18 years in retail communications. 
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img3}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Sadashiv Pal
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                SEO Manager at Sogolytics with over 14 years of experience, increasing organic traffic by 30%. He specializes in keyword research.
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img4}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Huzefa Lohawala
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                Data scientist at PayPal and an alumnus of IIT (BHU), Varanasi. His expertise includes data analysis
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img5}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Saloni Chanauria
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                  Full Stack Developer & Trainer @ BigBoxx Academy | 7+years
                  Experience
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img1}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Tanwee Hargave
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                  Co-Founder and Research Lead | 8+years Experience
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img6}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Lalit Arora
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                  Professor at Entrepreneurship Development Institute of India
                  (EDII), |20+years Experiece
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img7}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Dr.Anju Mehta
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                  Instructor with 22+years Experience
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img8}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Mohd Asad Siddiqui
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                  Professor at GD Goenka University (Gurgaon) | 12+ years
                  Experience
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img9}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                  Abhishek Choudhary
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                Senior Manager@ Data Innovation ,Bill INC.,USA, Gold Medalist at BITS Pilani, Dubai, with 9+ years of experience in data science. 
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img10}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                Soumen Das
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                Currently holding the position of Senior Mobile App Developer at Roadzen, Mobile App Developer with more than a decade of experience in the field of mobile technology 
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img11}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                Tuhina Jain
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                Worked with leading technology firms such as Google and Blinkit. Her expertise lies in building AI solutions 
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img12}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                Somiron Mitra 
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                Over 17 years of experience in the fashion and e-commerce industry, currently managing operations at Myntra. His expertise includes strategic planning and operational efficiency.
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img13}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                Atul Chhabra 
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                Atul Chhabra brings over three decades of experience in the telecommunications and IT sectors. A former Director at Verizon 
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img14}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                Prashant
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                Google Certified Trainer with expertise in Analytics and Automation Trainings. Working as Data analyst in Infosys. Also holding a Microsoft Certified Educator designation.
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img15}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                Sonia Garg
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                Accomplished Assistant Professor at Thapar University, with more than eleven years of experience in academia and industry-related research. As an IIM Lucknow alumni
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img16}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                Tajwar Khan
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                An entrepreneur and Corporate Training Strategist, Security Researcher/Trainer, AWS/Azure Trainer, Certified Ethical Hacker (CEH)
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img17}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                Manikant Kandukuri
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                A Lead AI Engineer with a comprehensive background from BITS, this professional specializes in the forefront of Generative AI technologies.
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img18}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                Nikita S Kotme 
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                A Blockchain Consultant and Trainer with over six years of experience. She specializes in Blockchain Technology, Python programming, and Generative AI
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="space-y-2 flex flex-col justify-center text-center xsm:w-full xsm:space-y-0">
                <div className="h-[200px] w-[200px]  mx-auto xsm:w-16 xsm:h-16 md:w-28 md:h-28">
                  <img
                    src={Img19}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-center text-lg font-pop xsm:text-[12px] md:text-[14px] text-[#fff]">
                Kajal Singh
                </div>
                {/* <div className="font-semibold text-center text-[#fff] text-xl font-pop xsm:text-[12px] md:text-[14px] md:leading-tight">Full Stack Development</div> */}
                <div className="text-center font-nu text-[#fff] xsm:text-[11px] xsm:text-center xsm:w-[90%] md:text-[12px]">
                The Vice President at BlockVerse Academy, specializing in Blockchain, Data Science, Machine Learning, Cloud Computing, and Cyber Security.
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
}
