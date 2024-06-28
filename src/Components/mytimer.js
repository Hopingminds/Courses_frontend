import React from 'react';
import TimerMachine from 'react-timer-machine';
const MyTimer = () => {
  
    
  return (
    <TimerMachine
    timeStart={0}
    timeEnd={10000}
    countdown={true}
    interval={1000}
    formatTimer={(time, ms) => `${Math.floor(time / 1000)} seconds`}
  />
  );
}

export default MyTimer;
