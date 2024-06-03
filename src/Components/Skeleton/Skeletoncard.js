import React from 'react'
import './skeleton.css'
const Skeleton = () => {
  return (
    <div
      className="flex flex-col bg-neutral-300 w-64 h-80  blink-2 rounded-xl p-4 gap-4 xsm:w-28 xsm:h-48"
    >
      <div className="bg-neutral-400/50 w-full h-32  blink-2 rounded-md"></div>
      <div className="flex flex-col gap-2">
        <div className="bg-neutral-400/50 w-full h-4 blink-2 rounded-md"></div>
        <div className="bg-neutral-400/50 w-4/5 h-4  blink-2 rounded-md"></div>
        <div className="bg-neutral-400/50 w-full h-4 blink-2 rounded-md"></div>
        <div className="bg-neutral-400/50 w-2/4 h-4  blink-2 rounded-md"></div>
      </div>
    </div>

  )
}

export default Skeleton