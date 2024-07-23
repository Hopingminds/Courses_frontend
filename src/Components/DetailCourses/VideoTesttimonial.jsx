import React, { useState } from 'react';
import TestimonialInner from './testimonialInner';
import './Pageheader.css';

const VideoTestimonial = ({ data }) => {
  const initialData = data?.map((val) => ({ ...val, isPlaying: false })) || [];
  const [newData, setNewData] = useState(initialData);

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent default context menu behavior
  };

  const handlePlayPause = (index) => {
    setNewData((prevData) =>
      prevData.map((val, i) => ({
        ...val,
        isPlaying: i === index ? !val.isPlaying : false,
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
      <div className="grid grid-cols-3 gap-10 xsm:grid-cols-2 xsm:gap-2">
        {newData.map((val, ind) => (
          <div key={ind} onContextMenu={handleContextMenu}>
            <TestimonialInner
              val={val}
              isPlaying={val.isPlaying}
              onPlayPause={() => handlePlayPause(ind)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonial;
