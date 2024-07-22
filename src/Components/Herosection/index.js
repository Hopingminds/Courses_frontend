// import './hero.css'
// import { ReactComponent as Cal } from '../../Assets/Icons/cal.svg'
// import { ReactComponent as Email } from '../../Assets/Icons/email.svg'
// import { Navigate, useNavigate } from 'react-router-dom'
// export default function Herosection() {

//     const navigate = useNavigate()
//     return (<>

//         <div className="add_gradient h-[76vh]  w-100% flex font-pop justify-center items-center px-[3%] 2xl:h-[65vh] xsm:h-[26vh] text-white hero xsm:mb-0 md:h-[40vh] md:mb-12">
//             <div className='w-[40%] h-[70%] items-start 2xl:space-y-10'>
//                 {/* <div className='text-[3.2vw] font-semibold leading-[4.0rem] 2xl:leading-[5.5rem]'>Shape Your Tomorrow, Today with HopingMinds: Where Education Meets Aspiration</div> */}
//                 <div className='text-[40px] font-semibold leading-[3rem] 2xl:leading-[5.5rem] font-pop xsm:text-[15px] xsm:leading-5 md:text-[24px] md:leading-normal'>Master In-Demand Skills for Dream Placements
// High Impact Courses that Earn you College Credits</div>
//                 {/* <div className='font-nu text-[18px] mt-5 w-[83%] text-justify xsm:text-[6px] xsm:text-start'>"HopingMinds offers holistic development programs designed to position students in high-growth roles through our network of over 150 corporate partners. Our tailored approach ensures you're not just prepared, but primed for success in your chosen field."</div> */}
//                 {/* <div className='font-nu text-[18px] mt-5 w-[83%] text-justify xsm:text-[6px] xsm:text-start md:text-[12px]'>"HopingMinds offers holistic development programs designed to position students in high-growth roles through our network of over 150 corporate partners. Our tailored approach ensures you're not just prepared, but primed for success in your chosen field."</div> */}

//             </div>
//             <div className='w-[55%] flex justify-center items-center  relative text-[#545567] mb-5 pb-5 md:mb-0 md:pb-0 md:justify-end xsm:mb-0 xsm:pb-0'>
//                 <div className='h-[70%] w-[90%] md:w-['>

//                     <img src="https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/assets/1711955580289-homepage-small.gif " alt="" />
//                     {/* <img src="https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/1711950517336-homepage-small.gif " alt="" /> */}

//                 </div>

//             </div>
//         </div>

//     </>)

// }

// import './hero.css'
// import { ReactComponent as Cashback } from '../../Assets/Icons/Cashback.svg'
// import { ReactComponent as Ai} from '../../Assets/Icons/ai.svg'
// import { ReactComponent as Certificate } from '../../Assets/Icons/Certificate.svg'
// import { useEffect, useState } from 'react'

// export default function Herosection() {
// const [active, setactive] = useState(1)
// useEffect(() => {
//     setTimeout(() => {
//         if(active>=3){
//             setactive(1)
//         }
//         else{
//             setactive(active+1)
//         }
//     }, 2000);
// }, [active])

//     return (<>
//         <div className=" bg-gradient-to-r from-[#0F2027] to-[#203A43] h-[80vh] hero w-full flex font-pop justify-center items-center px-[3%] xsm:h-[40vh] md:h-[65vh]">
//             <div className='w-[45%] space-y-8'>
//                 <div className='text-[45px] font-semibold text-white leading-[60px] font-pop text-wrap text-5xl xsm:text-[20px] xsm:leading-[28px] md:text-[34px] md:leading-[50px]'>Master In-Demand Skills for Dream Placements</div>
//                 <div className='text-[28px] font-medium text-white leading-[40px] font-pop text-wrap xsm:text-[14px] xsm:leading-[18px] md:text-[18px] md:leading-[30px]'>High Impact Courses that Earn you College Credits</div>
//             </div>
//             <div className='w-[40%] h-[75%] flex justify-center items-center  relative text-[#545567] '>
//                 <div className='h-[80%] w-[100%] herobox bg-white  flex items-center xsm:h-[50%] md:h-[70%]'>
//                     {/* <ReactPlayer className='-translate-x-28' width='150%' height='100%'  url='/home_video.mp4'  playing={true}  loop={true} controls={false} /> */}
//                 <img  className=' h-full w-full'  src="/homegif.gif" alt="video" />

//                 </div>
//                 <div className={`${active==1?'scale-in-center':''} flex justify-between w-[16vw] h-[16vh] backdrop-blur-[2px] absolute -top-6 left-10 px-5 items-center  rounded-lg bgcurvehome xsm:space-x-0 xsm:w-[20vw] xsm:h-[7vh] xsm:top-4 xsm:left-6 md:h-[10vh]`}>
//                     <Certificate className='w-14 h-14 xsm:w-6 xsm:h-4 md:w-8 md:h-8'/>
//                     <div className='flex flex-col text-white w-[60%]'>
//                         <div className='xsm:text-[5px] w-full text-wrap text-[12px] pr-5 md:text-[8px]'>NSDC Partner with Course Certifications</div>
//                     </div>
//                 </div>
//                 <div className={`${active==2?'scale-in-center':''} flex justify-center absolute w-[12vw] h-[14vh] backdrop-blur-[2px]  top-[70%] -left-10 px-2  space-x-2 items-center bgcurvehome xsm:space-x-1 xsm:w-[22vw] xsm:h-[7vh] xsm:left-1 md:h-[8vh] md:top-[75%]`}>
//                     <Ai className='w-12 h-12 xsm:w-5 xsm:h-5 md:w-10 md:h-10'/>
//                     <div className='flex flex-col text-white  w-[60%] '>
//                         <div className='xsm:text-[5px] text-[14px] md:text-[8px]'>AI driven Learning Experience</div>
//                     </div>
//                 </div>

//                 <div className={` ${active==3?'scale-in-center':''} flex justify-center absolute bottom-10 -right-5 w-[15vw] h-[16vh] backdrop-blur-[2px] px-2 space-x-2 items-center   bgcurvehome xsm:px-0 xsm:pr-2 xsm:space-x-0 xsm:w-[20vw] xsm:h-[7vh] md:h-[10vh]`}>
//                     <div className='flex justify-center items-center h-11 w-11  rounded' >
//                         <Cashback className='w-16 h-14 xsm:w-6 xsm:h-4 md:w-8 md:h-6'/>
//                     </div>
//                     <div className='flex flex-col text-white  w-[60%] xsm:w-[70%]'>
//                         <div className='xsm:text-[5px] text-[14px] pr-2 md:text-[8px]'>Earn College Credits for Each Course</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>)
// }

import { useEffect, useState } from "react";
import "./hero.css";
import Circle from "../../Assests/Images/home-circle.png";
import Square from "../../Assests/Images/home-square.png";
import '@splidejs/react-splide/css';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import Img1 from "../../Assests/Images/stu1.jpg";
// import Img2 from "../../Assests/Images/stu2.jpg";
// import Img3 from "../../Assests/Images/stu3.jpg";
// import Img4 from "../../Assests/Images/stu4.jpg";
// import Img5 from "../../Assests/Images/stu5.jpg";
// import Img6 from "../../Assests/Images/stu6.jpg";
import { Link } from "react-router-dom";
export default function Herosection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let Img1='/instructors/1p.webp'
  let Img2='/instructors/2p.webp'
  let Img3='/instructors/3p.webp'
  let Img4='/instructors/4p.webp'
  let Img5='/instructors/5p.webp'
  let Img6='/instructors/6p.webp'
  let Img7='/instructors/7p.webp'
  let Img8='/instructors/8p.webp'
  let Img9='/instructors/9p.webp'
  let Img10='/instructors/10p.webp'
  let Img11='/instructors/11p.webp'
  let Img12='/instructors/12p.webp'
  let Img13='/instructors/13p.webp'
  let Img14='/instructors/14p.webp'
  let Img15='/instructors/15p.webp'
  let Img16='/instructors/16p.webp'
  let Img17='/instructors/17p.webp'
  let Img18='/instructors/18p.webp'
  const images1 = [Img1, Img2, Img3];
  const images2 = [Img4, Img5, Img6];
  const images3 = [Img7, Img8, Img9];
  const images4 = [Img10, Img11, Img12];
  const images5 = [Img13, Img14, Img15];
  const images6 = [Img16, Img17, Img18];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const staticText = "";
  const remainingText = ` Courses that Earn you College Credits`;
  const [displayText, setDisplayText] = useState(staticText);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [squarePosition, setSquarePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCirclePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newX = Math.random() * (window.innerWidth - 200);
      const newY = Math.random() * (window.innerHeight - 200);
      setSquarePosition({ x: newX, y: newY });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex < remainingText.length) {
      const interval = setInterval(() => {
        setDisplayText((prevText) => prevText + remainingText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText(staticText);
        setCurrentIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, remainingText.length, staticText]);

  return (
    <>
    <div className=" bg-gradient-to-l from-[#0F2027] via-[#0B1418] to-[#203A43] w-full flex flex-row justify-between font-pop items-center px-[5%] pt-[1%] pb-[4%] mb-[4%] md:pr-[3%] md:pb-[3%] xsm:pt-5 h-[37.2vw] xsm:h-[250px]">
      <div className="w-[60%] flex flex-col gap-10 xl:gap-12 xsm:gap-2 sm:gap-4 md:gap-8 lg:gap-10">
        <div className="text-[20px] leading-10  text-white font-pop text-wrap w-[90%] sm:text-[10px] sm:leading-5 xl:text-[26px] lg:text-[16px] lg:leading-7 md:text-[14px] md:leading-6 xsm:text-[10px] xsm:leading-4 xsm:text-balance">
          Unlock Opportunities with 200+ Leading Corporates, Master Skills
          with Industry Experts, and Stay up-skilled with our Annually
          Updated Curriculum; Experience Personalized Career Coaching and
          Exclusive Networking Events!
        </div>
        <div className="text-[20px] text-[#1DBF73] h-16 w-[75%] font-pop text-wrap sm:h-10 sm:text-[12px] xl:text-[24px] lg:text-[20px] md:text-[16px] md:h-12 xsm:text-[9px] xsm:h-8">
          <span className="text-white">High Impact</span>
          {displayText}
        </div>
        <div className="flex place-content-start">
          {localStorage.getItem("COURSES_USER_TOKEN") ? (
            ""
          ) : (
            <Link
              to="/login-2"
              className="text-white z-20 text-[16px] font-nu font-bold bg-[#1DBF73] rounded-full py-2 px-10 sm:px-6 sm:py-1 sm:text-[12px] xl:text-[20px] md:text-[14px] md:px-8 xsm:text-[9px] xsm:py-[0.2rem] xsm:px-4"
            >
              Join Now
            </Link>
          )}
        </div>
      </div>
      
      <div className="flex flex-col gap-6 h-max w-[40%] md:gap-2 xsm:gap-1">

      {/* <Splide
                    options={{
                      type: "loop",
                      perPage: 1,
                      pagination: false,
                      perMove: 1,
                      autoplay: true,
                      interval: 2000,
                      speed: 1000,
                      pauseOnHover: false,
                      arrows: false,
                    }} >
<SplideSlide> */}
        <div className="flex flex-row gap-2 justify-end">
          <div className="flex flex-col justify-end pb-6">
              <img
                alt=""
              src={Square}
              className="square w-12 h-12 animate-ping md:w-8 md:h-8 xsm:w-4 xsm:h-4"
              style={{
                position: "absolute",
                top: squarePosition.y,
                left: squarePosition.x,
              }}
            />
          </div>

          <div className="flex flex-row gap-8 lg:gap-5 md:gap-3 xsm:gap-2 sm:gap-3  ">
              <div className=" flex flex-col gap-5 items-end justify-between lg:gap-3 md:gap-2 sm:gap-2 xsm:gap-2 xsm:items-center">
              <div className="h-52 w-44 xsm:h-20 xsm:w-auto">
                  <img
                  alt=""
                  src={images6[currentImageIndex]}
                  className="h-full w-full"
                />
              </div>
                <div className="h-36 w-28 xsm:h-16 xsm:w-auto">
                  <img
                    alt=""
                  src={images2[currentImageIndex]}
                  className="f-full w-full"
                />
              </div>
            </div>
            <div className="h-full flex flex-col gap-1 items-end justify-between lg:gap-1 md:gap-2 sm:gap-2 xsm:gap-2 xsm:items-center">
                <div className="h-32 w-28 xsm:h-12 xsm:w-auto">
                <img alt=""
                  src={images3[currentImageIndex]}
                  className=" "
                />
              </div>
                <div className="xsm:h-20 xsm:w-auto">
                <img alt=""
                  src={images1[currentImageIndex]}
                  className="h-full w-full"
                />
              </div>
           
            </div>
            <div className="flex flex-col gap-5 items-end lg:gap-3 md:gap-2 sm:gap-2 xsm:gap-2 xsm:hidden ">
            <div className="  ">
                <img
                  src={images5[currentImageIndex]}
                  className=" "
                />
              </div>
              <div className="h-32 w-28">
                <img
                  src={images4[currentImageIndex]}
                  className=""
                />
              </div>
           
            </div>
            {/* <div className="flex flex-col gap-5 lg:gap-3 md:gap-2 sm:gap-2 xsm:gap-2 xsm:hidden">
              <div className=" rounded-t-[3.8rem] rounded-bl-[3.8rem] overflow-hidden scale-in-center sm:h-16 sm:w-16 lg:h-28 lg:w-28 md:h-20 md:w-20 md:rounded-t-[2.3rem] md:rounded-bl-[2.3rem] xsm:h-12 xsm:w-12 xsm:rounded-t-[1.3rem] xsm:rounded-bl-[1.3rem]">
                <img
                  src={images[(currentImageIndex + 2) % 6]}
                  className=" object-cover object-center md:h-20 md:w-20 xsm:h-12 xsm:w-12 lg:h-28 lg:w-28 sm:h-16 sm:w-16"
                />
              </div>
              <div className="rounded-[4rem] h-80 w-40 overflow-hidden scale-in-center sm:h-28 sm:w-16 lg:h-48 lg:w-28 md:h-40 md:w-20 md:rounded-[2.3rem] xsm:h-24 xsm:w-12 xsm:rounded-[1.3rem]">
                <img
                  src={images[(currentImageIndex + 3) % 6]}
                  className="h-80 w-40 object-cover object-center md:h-40 md:w-20 xsm:h-24 xsm:w-12 sm:h-28 sm:w-16 lg:h-48 lg:w-28"
                />
              </div>
            </div>
            <div className="flex flex-col-reverse gap-5 lg:gap-3 md:gap-2 sm:gap-2 xsm:gap-2">
              <div className=" rounded-t-[3.8rem] rounded-bl-[3.8rem] overflow-hidden scale-in-center sm:h-16 sm:w-16 lg:h-28 lg:w-28 md:h-20 md:w-20 md:rounded-t-[2.3rem] md:rounded-bl-[2.3rem] xsm:h-16 xsm:w-16 xsm:rounded-t-[1.3rem] xsm:rounded-bl-[1.3rem]">
                <img
                  src={images[(currentImageIndex + 4) % 6]}
                  className=" object-cover object-center md:h-20 md:w-20 xsm:h-16 xsm:w-16 lg:h-28 lg:w-28 sm:h-16 sm:w-16"
                />
              </div>
              <div className="rounded-[4rem] h-80 w-40 overflow-hidden scale-in-center sm:h-28 sm:w-16 lg:h-48 lg:w-28 md:h-40 md:w-20 md:rounded-[2.3rem] xsm:h-28 xsm:w-16 xsm:rounded-[1.3rem]">
                <img
                  src={images[(currentImageIndex + 5) % 6]}
                  className="h-80 w-40 object-cover object-center md:h-40 md:w-20 xsm:h-28 xsm:w-16 lg:h-48 lg:w-28 sm:h-28 sm:w-16"
                />
              </div>
            </div> */}
          </div>
        </div>
      
{/* </SplideSlide>
<SplideSlide>
<img className="h-full" src="/herosection/hr1.webp"/>
</SplideSlide>
<SplideSlide>
<img className="h-full" src="/herosection/hr2.webp"/>
</SplideSlide>
<SplideSlide>
<img className="h-full" src="/herosection/hr3.webp"/>
</SplideSlide>
<SplideSlide>
<img className="h-full" src="/herosection/hr4.webp"/>
</SplideSlide>
<SplideSlide>
<img className="h-full" src="/herosection/hr5.webp"/>
</SplideSlide>
<SplideSlide>
<img className="h-full" src="/herosection/hr6.webp"/>
</SplideSlide>
                    </Splide> */}

                    </div>
    </div> 
    </>
  );
}
