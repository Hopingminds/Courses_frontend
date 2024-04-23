import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { IoPlayCircle } from "react-icons/io5";
import { IoPauseCircle } from "react-icons/io5";
import {ReactComponent as Hm1} from '../../Assets/Icons/hm1.svg'
import {ReactComponent as Hm2} from '../../Assets/Icons/hm2.svg'
import {ReactComponent as Hm3} from '../../Assets/Icons/hm3.svg'
import {ReactComponent as Hm4} from '../../Assets/Icons/hm4.svg'
import {ReactComponent as Correct} from '../../Assets/Icons/correct.svg'
const WhyHM = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && playingIndex !== null) {
            setPlayingIndex(null); // Pause the video if section is not visible
          }
        });
      },
      {
        threshold: 0, // Triggers when the section is completely out of view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [playingIndex]);

  const handlePlay = (index) => {
    if (playingIndex !== null && playingIndex !== index) {
      setPlayingIndex(null);
    }
    setPlayingIndex(index);
  };

  return (
    <div className=" pb-[6%] pt-[2%] xsm:pt-8 md:pt-12">
      <div className="flex flex-col gap-3 xsm:gap-5" ref={sectionRef}>
        <div className="flex justify-center">
          <p className="text-[#1DBF73] text-[36px] font-pop font-semibold xsm:text-[24px] md:text-[30px]">
            Why Hoping Minds
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-[#696984] text-[20px] font-pop w-[70%] text-center leading-12 xsm:text-[12px] xsm:w-[95%] xsm:px-[5%] md:text-[12px]">
            Welcome to HopingMinds, your gateway to a brighter future. As an
            esteemed partner of the National Skill Development Corporation
            (NSDC), we stand at the forefront of transformative education,
            dedicated to nurturing the next generation of leaders and
            innovators.
          </p>
        </div>

        <div className="grid grid-cols-4 py-10 px-[5%] gap-x-6 md:py-6 xsm:grid-cols-2 xsm:gap-y-10 xsm:pt-6" >
            <div className="gap-y-3 flex flex-col shadow-xl  hover:bg-[#0B1519] hover:rounded-xl p-3 pb-5 whyhmbox hover:transition hover:duration-500">
            <Hm1 className="mx-auto h-14 w-14 md:h-10 md:w-10 xsm:h-10 xsm:w-10"/>
            <div className="text-center text-[#1DBF73] font-semibold text-2xl md:text-[16px] xsm:text-[14px] xsm:leading-tight">Immediate Joining</div>
            <div className="flex gap-x-2 ">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">Rapid Skill Acquisition.</div>
            </div>
            <div className="flex gap-x-2">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">Felxibility in Learning.</div>
            </div>
            <div className="flex gap-x-2">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">Networking Opportunities.</div>
            </div>
            <div className="flex gap-x-2">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">Enhanced career Opportunities.</div>
            </div>
            </div>
            <div className="gap-y-3 flex flex-col shadow-xl  hover:bg-[#0B1519] hover:rounded-xl p-3 pb-5 whyhmbox hover:transition hover:duration-500">
            <Hm2 className="mx-auto h-14 w-14 md:h-10 md:w-10 xsm:h-10 xsm:w-10"/>
            <div className="text-center text-[#1DBF73] font-semibold text-2xl md:text-[16px] xsm:text-[14px] xsm:leading-tight">No Offer Dropouts</div>
            <div className="flex gap-x-2 ">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">Access to Skilled Talent Pool.</div>
            </div>
            <div className="flex gap-x-2">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">Scalability in Hiring.</div>
            </div>
            <div className="flex gap-x-2">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">Enhanced Employer branding.</div>
            </div>
            <div className="flex gap-x-2">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">Data Driven Insights.</div>
            </div>
            </div>
            <div className="gap-y-3 flex flex-col shadow-xl  hover:bg-[#0B1519] hover:rounded-xl p-3 pb-5 whyhmbox hover:transition hover:duration-500">
            <Hm3 className="mx-auto h-14 w-14 md:h-10 md:w-10 xsm:h-10 xsm:w-10"/>
            <div className="text-center text-[#1DBF73] font-semibold text-2xl md:text-[16px] xsm:text-[14px] xsm:leading-tight">Hiring In 1 day</div>
            <div className="flex gap-x-2 ">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">Reduced Hiring Risks.</div>
            </div>
            <div className="flex gap-x-2">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">Ready to deploy from day One.</div>
            </div>
            <div className="flex gap-x-2">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">Customizable learning paths.</div>
            </div>
            <div className="flex gap-x-2">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">Integration with HR systems.</div>
            </div>
            </div>
            <div className="gap-y-3 flex flex-col shadow-xl  hover:bg-[#0B1519] hover:rounded-xl p-3 pb-5 whyhmbox hover:transition hover:duration-500">
            <Hm4 className="mx-auto h-14 w-14 md:h-10 md:w-10 xsm:h-10 xsm:w-10"/>
            <div className="text-center text-[#1DBF73] font-semibold text-2xl md:text-[16px] xsm:text-[14px] xsm:leading-tight">PAN India Availabilitiy</div>
            <div className="flex gap-x-2 ">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">We have pretrained developers.</div>
            </div>
            <div className="flex gap-x-2">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">We have pretrained developers.</div>
            </div>
            <div className="flex gap-x-2">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">We have pretrained developers.</div>
            </div>
            <div className="flex gap-x-2">
              <Correct className="h-5 w-5 md:h-4 md:w-4 xsm:h-3 xsm:w-3"/>
              <div className="hmboxline text-sm md:text-[12px] xsm:text-[10px] xsm:leading-tight">We have pretrained developers.</div>
            </div>
            </div>
        </div>
        {/* <div className="flex flex-row gap-20 justify-center xsm:gap-4 mt-8 xsm:mt-0 md:mt-4 md:gap-10 xsm:flex-col xsm:items-center">
          <div
            className="w-[500px] h-[350px] bg-black 2xl:w-[600px] 2xl:h-[400px] rounded-3xl overflow-hidden xsm:w-[80%] xsm:h-[70%] xsm:rounded-lg md:w-[35%] md:h-[35%] relative"
            onClick={() => handlePlay(0)}
          >
            <ReactPlayer
              className={"w-full h-full md:w-[35%] rounded-3xl aspect-auto"}
              url="/Corporate1.mp4"
              playing={playingIndex === 0}
              loop={true}
              controls={true}
              onPlay={() => handlePlay(0)}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload", // Disable download option
                  },
                },
              }}
            />
            {playingIndex !== 0 && (
              <span className=" p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9]">
                {true && (
                  <IoPlayCircle
                    size={window.innerWidth <= 480 ? 30 : 60}
                    onClick={() => handlePlay(0)}
                    style={{
                      cursor: "pointer",
                      color: "#1DBF73",

                      zIndex: "999999",
                    }}
                  />
                )}
              </span>
            )}
          </div>
          <div
            className="w-[500px] h-[350px] bg-black 2xl:w-[600px] 2xl:h-[400px] rounded-3xl overflow-hidden xsm:w-[80%] xsm:h-[70%] xsm:rounded-lg md:w-[35%] md:h-[35%] relative"
            onClick={() => handlePlay(1)}
          >
            <ReactPlayer
              className={"w-full h-full rounded-3xl md:w-[35%] aspect-auto"}
              url="/Corporate2.mp4"
              playing={playingIndex === 1}
              loop={true}
              controls={true}
              onPlay={() => handlePlay(1)}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload", // Disable download option
                  },
                },
              }}
            />
            {playingIndex !== 1 && (
              <span className=" p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9]">
                {true && (
                  <IoPlayCircle
                    size={window.innerWidth <= 480 ? 30 : 60}
                    onClick={() => handlePlay(1)}
                    style={{
                      cursor: "pointer",
                      color: "#1DBF73",

                      zIndex: "999999",
                    }}
                  />
                )}
              </span>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WhyHM;
