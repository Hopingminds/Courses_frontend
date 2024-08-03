import React from 'react'
import ReactHlsPlayer from 'react-hls-player';

const LiveStream = () => {
    return (
        <div className='mx-auto w-full'>
            <ReactHlsPlayer
                src="https://stream.hopingminds.com/hls/hello.m3u8 "
                autoPlay={true}
                controls={true}
                width="100%"
                height="auto"
            />
        </div>
    )
}

export default LiveStream