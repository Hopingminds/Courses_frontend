import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

const LiveVideoPlayer = ({ liveClassKey }) => {
    return (
        <ReactHlsPlayer
            // src={`https://stream.hopingminds.com/hls/${liveClassKey}.m3u8`}
            src={`https://live.hopingminds.com/stream_key.m3u8`}
            autoPlay={false}
            controls={true}
            className='rounded-xl'
            width="100%"
            height="100%"
            hlsConfig={{
                maxLoadingDelay: 4,
                minAutoBitrate: 0,
                lowLatencyMode: true,
            }}          
        />
    );
};

export default React.memo(LiveVideoPlayer);
