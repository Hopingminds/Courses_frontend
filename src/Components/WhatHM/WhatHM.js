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

  return (
    <div className="">
      <div className="flex flex-col gap-3 xsm:gap-5" ref={sectionRef}>
        <div className="flex justify-center">
          <p className="text-[#1DBF73] text-[42px] font-pop font-semibold xsm:text-[12px] md:text-[30px]">
            What is Hoping Minds?
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-[#696984] text-[20px] font-pop w-[70%] text-center leading-12 xsm:text-[7px] xsm:w-[95%] xsm:px-[5%] md:text-[12px]">
            Welcome to HopingMinds, your gateway to a brighter future. As an
            esteemed partner of the National Skill Development Corporation
            (NSDC), we stand at the forefront of transformative education,
            dedicated to nurturing the next generation of leaders and
            innovators.
          </p>
        </div>
        <div className="flex flex-row gap-20 justify-center xsm:gap-4 mt-8 xsm:mt-2 md:mt-4 md:gap-10">
          <div
            className="w-[500px] h-[350px] bg-black 2xl:w-[600px] 2xl:h-[400px] rounded-3xl overflow-hidden xsm:w-[35%] xsm:h-[15vh] xsm:rounded-lg md:w-[35%] md:h-[35%]"
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
            />
          </div>
          <div
            className="w-[500px] h-[350px] bg-black 2xl:w-[600px] 2xl:h-[400px] rounded-3xl overflow-hidden xsm:w-[35%] xsm:h-[15vh] xsm:rounded-lg md:w-[35%] md:h-[35%]"
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatHM;
