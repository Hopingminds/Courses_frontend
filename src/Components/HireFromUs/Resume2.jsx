import React, {useState} from "react";
import "./hirefromus.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Resume2 = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);


  return (
    <>
    <style>
      {`
      /* Custom CSS */
      .img-item {
          transition: transform 0.3s ease;
      }
    
      
      `}
    </style>
    <div
      className="px-[5%] py-[15%] pb-[10%] bg-gradient-to-r from-[#0F2027] to-[#203A43] curvedbg w-full xsm:pt-[30%] xsm:pb-[12%]"
      style={{ width: "100%" }}
    >
      <div className="text-white font-pop font-semibold text-[40px] text-center relative md:text-[32px] xsm:text-[20px]">
        <p>
          <span className="text-[#1DBF73]">Roles</span> You Can Hire  From Us
        </p>
        <div className="absolute left-[25%] top-[85%] md:left-[25%] xsm:left-[1%]">
          <img
            className="w-[70%] md:w-[50%] xsm:w-[30%]"
            src="../Icons/yellowcurve.svg"
            alt=""
          />
          <img
            className="w-[70%] md:w-[50%] xsm:w-[30%] absolute top-[50%] rotate-[357deg]"
            src="../Icons/yellowcurve.svg"
            alt=""
          />
        </div>
        {/* <p>careers, fuelled by Hoping minds</p> */}
      </div>
      
      <div className="grid grid-cols-4 md:mt-8 mt-16 gap-8 xsm:grid-cols-2 xsm:mt-8">
        <div className="bw-border "  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
        <div className=" flex flex-col py-[15%]  relative">
           <div className="flex justify-around items-center">
           <img
                  src="/node.png"
                  className="md:w-8 md:h-8 xsm:w-6 xsm:h-6 img-item"
                  style={{
                    transform: isHovered ? 'scale(1.10)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
            <img src="/mongodb.png" className="md:w-8 md:h-8 xsm:w-6 xsm:h-6 img-item" style={{
                    transform: isHovered ? 'scale(1.10)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}/>
            <img src="/express.png" className="md:w-8 md:h-8 xsm:w-6 xsm:h-6 img-item" style={{
                    transform: isHovered ? 'scale(1.10)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}/>
           </div>
           <div className="text-[25px] text-[#FFFFFF] text-center mt-5 md:text-[16px] xsm:text-[12px]">Backend Developers</div>
            <div className="flex flex-col gap-y-4 text-[#FFFFFF] pl-[5%] mt-3 font-extralight md:text-[12px] md:gap-y-3 xsm:text-[8px] xsm:gap-y-2">
              <div>Mongo DB database</div>
              <div>Setting up Express JS setup</div>
              <div>Backend development in NodeJS</div>
              <div>Websockets communication</div>
            </div>
        </div>
        </div>
        <div className="bw-border " onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}>
        <div className=" flex flex-col py-[15%] ">
           <div className="flex justify-around items-center">
           <img src="/html.png" className="md:w-8 md:h-8 xsm:w-6 xsm:h-6  img-item"  style={{
                    transform: isHovered2 ? 'scale(1.25)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}/>
            <img src="/css.png" className="md:w-8 md:h-8 xsm:w-6 xsm:h-6  img-item"  style={{
                    transform: isHovered2 ? 'scale(1.25)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}/>
            <img src="/js.png" className="md:w-8 md:h-8 xsm:w-6 xsm:h-6  img-item"  style={{
                    transform: isHovered2 ? 'scale(1.25)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}/>
           </div>
           <div className="text-[25px] text-[#FFFFFF] text-center mt-5 md:text-[16px] xsm:text-[12px]">Frontend Developers</div>
            <div className="flex flex-col gap-y-4 text-[#FFFFFF] pl-[5%] mt-3 font-extralight md:text-[12px] md:gap-y-3 xsm:text-[8px] xsm:gap-y-2">
              <div>HTML and advanced CSS</div>
              <div>Javascript and ES6</div>
              <div>Redux in React and using Crud</div>
              <div>ReactJS and using Webpack</div>
            </div>
        </div>
        </div>
        <div className="bw-border " onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}>
        <div className=" flex flex-col py-[15%] ">
           <div className="flex justify-around items-center">
           <img src="/figma.png" className="md:w-8 md:h-8 xsm:w-6 xsm:h-6  img-item"  style={{
                    transform: isHovered3 ? 'scale(1.25)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}/>
            <img src="/xd.png" className="md:w-8 md:h-8 xsm:w-6 xsm:h-6  img-item"  style={{
                    transform: isHovered3 ? 'scale(1.25)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}/>
            <img src="/diamond.png" className="md:w-8 md:h-8 xsm:w-6 xsm:h-6  img-item"  style={{
                    transform: isHovered3 ? 'scale(1.25)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}/>
           </div>
           <div className="text-[25px] text-[#FFFFFF] text-center mt-5 md:text-[16px] md:px-4 xsm:text-[12px]">UI/UX Designer</div>
            <div className="flex flex-col gap-y-4 text-[#FFFFFF] pl-[5%] mt-3 font-extralight md:text-[12px] md:gap-y-3 xsm:text-[8px] xsm:gap-y-2">
              <div>Setting up Express JS set up</div>
              <div>2-3 mini projects in NodeJS</div>
              <div>Using MongoDB database</div>
              <div>WebAPIs and basics of AWS server</div>
            </div>
        </div>
        </div>
        <div className="bw-border " onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}>
        <div className=" flex flex-col py-[15%] ">
           <div className="flex justify-around items-center">
           <img src="/node.png" className="md:w-8 md:h-8 xsm:w-6 xsm:h-6  img-item"  style={{
                    transform: isHovered4 ? 'scale(1.25)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}/>
            <img src="/mongodb.png" className="md:w-8 md:h-8 xsm:w-6 xsm:h-6  img-item"  style={{
                    transform: isHovered4 ? 'scale(1.25)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}/>
            {/* <img src="/express.png"/> */}
            <img src="/react.png" className="md:w-8 md:h-8 xsm:w-6 xsm:h-6  img-item"  style={{
                    transform: isHovered4 ? 'scale(1.25)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}/>
           </div>
           <div className="text-[25px] text-[#FFFFFF] text-center mt-5 md:text-[16px] xsm:text-[12px]">FullStack Developers</div>
            <div className="flex flex-col gap-y-4 text-[#FFFFFF] pl-[5%] mt-3 font-extralight md:text-[12px] md:gap-y-3 xsm:text-[8px] xsm:gap-y-2">
              <div>Mongo DB database</div>
              <div>Setting up Express JS setup</div>
              <div>Backend development in NodeJS</div>
              <div>Frontend development in ReactJS</div>
            </div>
        </div>
        </div>
        
        {/* <Splide
          options={{
            type: "loop",
            perPage: window.innerWidth <= 480 ? 2 : (window.innerWidth >= 721 && window.innerWidth <= 1024) ? 3 : 3,
            pagination: false,
            perMove: 1,
            wheel: false,
            arrows: false,
            autoplay: true,
            interval: 2000,
            speed: 5000,
            delay: 0,
            pauseOnHover: false,
            drag: true,
            gap: "1rem",
          }}
        >
            <SplideSlide><div className="bg-[#E2FFF1] p-8 px-6 rounded-3xl flex flex-col gap-4 md:rounded-xl md:p-4 md:gap-2 xsm:p-2 xsm:rounded-xl xsm:gap-2 w-[90%] md:w-full xsm:w-full">
          <div className="flex justify-between">
            <div className="font-int w-[60%] flex flex-col justify-between">
              <p className="font-medium text-[18px] md:text-[14px] xsm:text-[10px]">
                Anchal
              </p>
              <p className="font-bold md:text-[12px] xsm:text-[8px]">
                Graphic Designer
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-0">
                  <img
                    className="w-5 md:w-3 xsm:w-2"
                    src="../Icons/Briefcase.svg"
                    alt=""
                  />
                  <p className="font-bold text-[14px] md:text-[10px] xsm:text-[8px]">
                    2-7 Yrs
                  </p>
                </div>
                <p className="font-medium text-[18px] md:text-[14px] xsm:text-[12px]">|</p>
                <div className="flex items-center gap-1 md:gap-0">
                  <img
                    className="w-5 md:w-3 xsm:w-2"
                    src="../Icons/location.svg"
                    alt=""
                  />
                  <p className="font-medium text-[14px] md:text-[10px] xsm:text-[8px]">
                    Chandigarh
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-24 md:w-16 xsm:w-10"
                src="../img/hireprofile.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex pr-6">
            <div className="w-[15%]">
              <img
                className="w-5 h-5 xsm:w-3 xsm:h-3"
                src="../Icons/fileempty.svg"
                alt=""
              />
            </div>
            <div>
              <p className="font-int font-medium text-justify text-[14px] md:text-[12px] xsm:text-[8px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inci....
              </p>
            </div>
          </div>
        
        </div></SplideSlide>
            <SplideSlide><div className="bg-[#E2FFF1] p-8 px-6 rounded-3xl flex flex-col gap-4 md:rounded-xl md:p-4 md:gap-2 xsm:p-2 xsm:rounded-xl xsm:gap-2 w-[90%] md:w-full xsm:w-full">
          <div className="flex justify-between">
            <div className="font-int w-[60%] flex flex-col justify-between">
              <p className="font-medium text-[18px] md:text-[14px] xsm:text-[10px]">
                Anchal
              </p>
              <p className="font-bold md:text-[12px] xsm:text-[8px]">
                Graphic Designer
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-0">
                  <img
                    className="w-5 md:w-3 xsm:w-2"
                    src="../Icons/Briefcase.svg"
                    alt=""
                  />
                  <p className="font-bold text-[14px] md:text-[10px] xsm:text-[8px]">
                    2-7 Yrs
                  </p>
                </div>
                <p className="font-medium text-[18px] md:text-[14px] xsm:text-[12px]">|</p>
                <div className="flex items-center gap-1 md:gap-0">
                  <img
                    className="w-5 md:w-3 xsm:w-2"
                    src="../Icons/location.svg"
                    alt=""
                  />
                  <p className="font-medium text-[14px] md:text-[10px] xsm:text-[8px]">
                    Chandigarh
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-24 md:w-16 xsm:w-10"
                src="../img/hireprofile.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex pr-6">
            <div className="w-[15%]">
              <img
                className="w-5 h-5 xsm:w-3 xsm:h-3"
                src="../Icons/fileempty.svg"
                alt=""
              />
            </div>
            <div>
              <p className="font-int font-medium text-justify text-[14px] md:text-[12px] xsm:text-[8px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inci....
              </p>
            </div>
          </div>
          
        </div></SplideSlide>
            <SplideSlide><div className="bg-[#E2FFF1] p-8 px-6 rounded-3xl flex flex-col gap-4 md:rounded-xl md:p-4 md:gap-2 xsm:p-2 xsm:rounded-xl  xsm:gap-2 w-[90%] md:w-full xsm:w-full">
          <div className="flex justify-between">
            <div className="font-int w-[60%] flex flex-col justify-between">
              <p className="font-medium text-[18px] md:text-[14px] xsm:text-[10px]">
                Anchal
              </p>
              <p className="font-bold md:text-[12px] xsm:text-[8px]">
                Graphic Designer
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-0">
                  <img
                    className="w-5 md:w-3 xsm:w-2"
                    src="../Icons/Briefcase.svg"
                    alt=""
                  />
                  <p className="font-bold text-[14px] md:text-[10px] xsm:text-[8px]">
                    2-7 Yrs
                  </p>
                </div>
                <p className="font-medium text-[18px] md:text-[14px] xsm:text-[12px]">|</p>
                <div className="flex items-center gap-1 md:gap-0">
                  <img
                    className="w-5 md:w-3 xsm:w-2"
                    src="../Icons/location.svg"
                    alt=""
                  />
                  <p className="font-medium text-[14px] md:text-[10px] xsm:text-[8px]">
                    Chandigarh
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-24 md:w-16 xsm:w-10"
                src="../img/hireprofile.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex pr-6">
            <div className="w-[15%]">
              <img
                className="w-5 h-5 xsm:w-3 xsm:h-3"
                src="../Icons/fileempty.svg"
                alt=""
              />
            </div>
            <div>
              <p className="font-int font-medium text-justify text-[14px] md:text-[12px] xsm:text-[8px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inci....
              </p>
            </div>
          </div>
         
        </div></SplideSlide>
        </Splide> */}

        
        
        
      </div>
    </div>
    </>
  );
};

export default Resume2;
