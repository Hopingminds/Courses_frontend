import React, { useState } from "react";
import "./Pageheader.css";
import TestimonialInner from "./testimonialInner.js";
const VideoTestimonial = ({ data }) => {
  const initialData = data?.map((val) => ({ ...val, isPlaying: false })) || [];
  const [newData, setNewData] = useState(initialData);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handlePlayPause = (index) => {
    setNewData((prevData) =>
      prevData.map((val, i) => ({
        ...val,
        isPlaying: i === index ? !val.isPlaying : false,
      }))
    );
  };

  const handleVideoPlay = (index) => {
    setNewData((prevData) =>
      prevData.map((val, i) => ({
        ...val,
        isPlaying: i === index ? true : false,
      }))
    );
  };

  const handleVideoPause = (index) => {
    setNewData((prevData) =>
      prevData.map((val, i) => ({
        ...val,
        isPlaying: i === index ? false : val.isPlaying,
      }))
    );
  };

  return (
    <div className="flex flex-col gap-10 xsm:gap-6">
      <div>
        <div className="flex items-center gap-4 xsm:gap-2">
          <div className="w-[70px] border-[0.6px] border-[#3C3C3C] xsm:w-[30px]" />
          <p className="text-[#3C3C3C] font-nu tracking-widest text-[14px] xsm:text-[10px]">
            TESTIMONIAL
          </p>
        </div>
        <div className="font-pop font-semibold text-[32px] text-[#3C3C3C] xsm:text-[14px]">
          What They Say?
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 xsm:grid-cols-2 xsm:gap-5 w-full h-full">
        {newData?.map((val, ind) => (
          <div key={ind} onContextMenu={handleContextMenu} className="relative">
            <TestimonialInner
              val={val}
              isPlaying={val.isPlaying}
              onPlayPause={() => handlePlayPause(ind)}
              onVideoPlay={() => handleVideoPlay(ind)}
              onVideoPause={() => handleVideoPause(ind)}
              // className="h-[400px] lg:h-[400px] xl:h-[400px] xsm:h-[300px] w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonial;
