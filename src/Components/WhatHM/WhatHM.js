import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

const WhatHM = () => {
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

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent default context menu behavior
  };

  return (
    <div className="py-12 xsm:py-0 md:py-4 lg:py-8 sm:py-2">
      <div className="flex flex-col gap-3" ref={sectionRef}>
       
        <div className="flex justify-center">
          <p className="text-[#696984] text-[20px] font-pop w-[70%] text-center leading-12 xl:text-[22px] lg:text-[16px] sm:text-[10px] xsm:text-[12px] xsm:w-[95%] xsm:px-[5%] md:text-[12px]">
            Welcome to HopingMinds, your gateway to a brighter future. As an
            esteemed partner of the <span className="font-semibold">National Skill Development Corporation
              (NSDC)</span>, we stand at the forefront of transformative education,
            dedicated to nurturing the next generation of leaders and
            innovators.
          </p>
        </div>
        <div className="flex flex-row gap-20 justify-around sm:mt-4 sm:gap-6 xsm:gap-4 mt-8 xsm:mt-2 md:mt-4 md:gap-10 lg:gap-14">
          <div
            className="w-[500px] h-[350px] 2xl:w-[600px] 2xl:h-[400px] rounded-3xl overflow-hidden sm:w-[30%] sm:h-[140px] xsm:h-[30vh] xsm:rounded-lg md:w-[30%] md:h-[180px] lg:w-[35%] lg:h-[280px] relative xsm:w-full"
            onClick={() => handlePlay(0)}
          >
            <ReactPlayer
              onContextMenu={handleContextMenu}
              className={"w-full h-full md:w-[30%] lg:w-[30%] lg:h-[200px] aspect-auto xsm:w-[80%] overflow-hidden"}
              url="/Corporate1.mp4"
              playing={playingIndex === 0}
              loop={true}
              controls={playingIndex === 0}
              light={"/thumbnail1.jpg"}

              onPlay={() => handlePlay(0)}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload", // Disable download option
                    playsInline: true // Play inline on iOS
                  }
                }
              }}
            />
           
          </div>
          <div
            className="w-[500px] h-[350px] 2xl:w-[600px] 2xl:h-[400px] rounded-3xl overflow-hidden sm:w-[30%] sm:h-[140px] xsm:w-[42%] xsm:h-[100px] xsm:rounded-lg md:w-[30%] md:h-[180px] lg:w-[35%] lg:h-[280px] relative xsm:hidden"
            onClick={() => handlePlay(1)}
          >
            <ReactPlayer
              onContextMenu={handleContextMenu}
              className={"w-full h-full rounded-3xl md:w-[30%] lg:w-[30%] lg:h-[200px] aspect-auto"}
              url="/Corporate2.mp4"
              playing={playingIndex === 1}
              loop={true}
              light={"/thumbnail2.jpg"}
              controls={playingIndex === 1}
              onPlay={() => handlePlay(1)}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload", // Disable download option
                    playsInline: true // Play inline on iOS
                  }
                }
              }}
            />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatHM;
