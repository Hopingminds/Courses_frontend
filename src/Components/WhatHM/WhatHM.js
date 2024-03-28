import React, { useState } from "react";
import ReactPlayer from "react-player";

const WhatHM = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  // Function to handle play event
  const handlePlay = (index) => {
    // If a different video is already playing, pause it
    if (playingIndex !== null && playingIndex !== index) {
      setPlayingIndex(null);
    }
    // Set the current video as playing
    setPlayingIndex(index);
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col gap-3 xsm:gap-5">
          <div className="flex justify-center">
            <p className="text-[#1DBF73] text-[42px] font-pop font-semibold xsm:text-[12px]">What is Hoping Minds?</p>
          </div>
          <div className="flex justify-center">
            <p className="text-[#696984] text-[20px] font-pop w-[70%] text-center leading-12 xsm:text-[7px] xsm:w-[95%] xsm:px-[5%] ">Welcome to HopingMinds, your gateway to a brighter future. As an esteemed partner of the National Skill Development Corporation (NSDC), we stand at the forefront of transformative education, dedicated to nurturing the next generation of leaders and innovators.</p>
          </div>
          <div className="flex flex-row gap-20 justify-center xsm:gap-4 mt-8 xsm:mt-2">
            <div
              className="w-[500px] h-[350px] 2xl:w-[600px] 2xl:h-[400px] rounded-3xl overflow-hidden xsm:w-[35%] xsm:h-[15vh] xsm:rounded-lg"
              onClick={() => handlePlay(0)}
            >
              <ReactPlayer
                className={'w-full h-full'}
                url='/Corporate1.mp4'
                playing={playingIndex === 0}
                loop={true}
                controls={true}
                onPlay={() => handlePlay(0)} // Added onPlay event
              />
            </div>
            <div
              className="w-[500px] h-[350px] 2xl:w-[600px] 2xl:h-[400px] rounded-3xl overflow-hidden xsm:w-[35%] xsm:h-[15vh] xsm:rounded-lg"
              onClick={() => handlePlay(1)}
            >
              <ReactPlayer
                className={'w-full h-full'}
                url='/Corporate2.mp4'
                playing={playingIndex === 1}
                loop={true}
                controls={true}
                onPlay={() => handlePlay(1)} // Added onPlay event
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default WhatHM;
