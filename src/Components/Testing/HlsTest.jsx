import React from 'react'
import ReactHlsPlayer from 'react-hls-player';

const Hlstest = () => {
  return (
    <div>
        <ReactHlsPlayer
            src="https://stream.hopingminds.com/hls/hello.m3u8 "
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
        />
    </div>
  )
}

export default Hlstest