import React, { useEffect, useRef } from 'react';
import { CiPause1 } from 'react-icons/ci';
import ReactPlayer from 'react-player';
import './Pageheader.css';

const TestimonialInner = ({ val, isPlaying, onPlayPause }) => {
  const playerRef = useRef(null);

  // Sync the isPlaying state with the ReactPlayer
  useEffect(() => {
    const player = playerRef.current?.getInternalPlayer();
    if (player) {
      if (isPlaying) {
        player.play();
      } else {
        player.pause();
      }
    }
  }, [isPlaying]);

  // Handle native play and pause events from ReactPlayer
  const handlePlay = () => {
    if (!isPlaying) {
      onPlayPause(); // Update parent state to reflect that the video is playing
    }
  };

  const handlePause = () => {
    if (isPlaying) {
      onPlayPause(); // Update parent state to reflect that the video is paused
    }
  };

  return (
    <div className="w-full object-cover xl:h-[450px] md:h-[260px] md:w-[150px] lg:h-[310px] border rounded-xl overflow-hidden flex flex-col justify-end xsm:h-[180px]">
      <div className="vt-card relative">
        <ReactPlayer
          ref={playerRef}
          height="100%"
          width="100%"
          className="react-player"
          url={val?.reviewVideo}
          playing={isPlaying}
          loop={true}
          controls={true}
          onPlay={handlePlay} // Sync play event with the state
          onPause={handlePause} // Sync pause event with the state
          onError={(e) => console.error('ReactPlayer Error:', e)}
        />
      </div>
      <div className="flex justify-between items-center bg-[#000000BF] backdrop-blur-sm font-nu px-4 py-2 xsm:px-2">
        <div className="flex flex-col">
          <p className="text-white xsm:text-[12px]">{val?.userName}</p>
        </div>
        {isPlaying ? (
          <CiPause1
            color="grey"
            className="w-[40px] h-[40px] xsm:w-[20px] xsm:h-[20px]"
            onClick={onPlayPause}
          />
        ) : (
          <img
            className="w-[40px] h-[40px] xsm:w-[20px] xsm:h-[20px]"
            src="../Icons/playicon.svg"
            alt="Play Icon"
            onClick={onPlayPause}
          />
        )}
      </div>
    </div>
  );
};

export default TestimonialInner;
