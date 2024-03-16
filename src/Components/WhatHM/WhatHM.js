import React from "react";

const WhatHM = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center">
            <p className="text-[#1DBF73] text-[44px] font-poppins font-semibold">What is Hoping Minds</p>
          </div>
          <div className="flex justify-center">
            <p className="text-[#696984] text-[24px] font-poppins w-[70%] leading-10 text-center leading-12">Welcome to HopingMinds, your gateway to a brighter future. As an esteemed partner of the National Skill Development Corporation (NSDC), we stand at the forefront of transformative education, dedicated to nurturing the next generation of leaders and innovators.</p>
          </div>
          <div className="flex flex-row gap-20 justify-center">
            <div className="w-[500px] h-[350px] 2xl:w-[600px] 2xl:h-[400px] rounded-3xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Z4pCqK-V_Wo?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-[500px] h-[350px] 2xl:w-[600px] 2xl:h-[400px] rounded-3xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/c-I5S_zTwAc?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatHM;
