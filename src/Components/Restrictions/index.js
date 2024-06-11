import React, { useEffect, useRef, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

const Restriction = () => {
  const [audio] = useState(new Audio('/danger.mp3'));
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [escapePressed, setEscapePressed] = useState(false);
  const [personCount, setPersonCount] = useState(0);
  const contentRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Don't change the tab";
        audio.play().catch(error => {
          console.error('Error playing audio:', error);
        });
        alert('You are not allowed to change the tab');
      } else {
        document.title = 'Online Test';
        audio.pause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [audio]);

  const enterFullScreen = () => {
    const content = contentRef.current;
    if (content.requestFullscreen) {
      content.requestFullscreen().then(() => setIsFullScreen(true)).catch(err => console.error(err));
    } else if (content.mozRequestFullScreen) { // Firefox
      content.mozRequestFullScreen().then(() => setIsFullScreen(true)).catch(err => console.error(err));
    } else if (content.webkitRequestFullscreen) { // Chrome, Safari and Opera
      content.webkitRequestFullscreen().then(() => setIsFullScreen(true)).catch(err => console.error(err));
    } else if (content.msRequestFullscreen) { // IE/Edge
      content.msRequestFullscreen().then(() => setIsFullScreen(true)).catch(err => console.error(err));
    }
  };

  const handleFullScreenChange = () => {
    const isFullScreenNow = !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
    setIsFullScreen(isFullScreenNow);

    if (!isFullScreenNow && escapePressed) {
      alert('You have pressed the Escape key to exit full screen mode.');
      setEscapePressed(false);
    }
  };

  const handleKeyDown = (event) => {
    enterFullScreen();
    if (event.key === 'Escape') {
      event.preventDefault();
      setEscapePressed(true);
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('msfullscreenchange', handleFullScreenChange);

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('msfullscreenchange', handleFullScreenChange);

      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [escapePressed]);

  useEffect(() => {
    const detectDevTools = () => {
      const devtools = /./;
      devtools.toString = function() {
        this.opened = true;
      };
      if (devtools.opened) {
        alert('Developer tools are open. Taking screenshots is not allowed.');
      }
    };

    window.addEventListener('devtoolschange', detectDevTools);
    return () => {
      window.removeEventListener('devtoolschange', detectDevTools);
    };
  }, []);

  useEffect(() => {
    const loadModelAndDetect = async () => {
      const model = await cocoSsd.load();
      setInterval(() => detectFrame(videoRef.current, model), 100);
    };

    const startCamera = () => {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        loadModelAndDetect();
      }).catch(err => console.error('Error accessing camera:', err));
    };

    const detectFrame = async (video, model) => {
      if (video.readyState === 4) {
        const predictions = await model.detect(video);
        drawBoundingBoxes(predictions);
        countPersons(predictions);
      }
    };

    const drawBoundingBoxes = (predictions) => {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      predictions.forEach(prediction => {
        if (prediction.class === 'person') {
          const [x, y, width, height] = prediction.bbox;
          ctx.strokeStyle = 'red';
          ctx.lineWidth = 2;
          ctx.strokeRect(x, y, width, height);
          ctx.fillStyle = 'red';
          ctx.fillText(
            `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
            x,
            y > 10 ? y - 5 : y + 10
          );
        }
      });
    };

    const countPersons = (predictions) => {
      const count = predictions.filter(prediction => prediction.class === 'person').length;
      setPersonCount(count);
    };

    startCamera();
  }, []);

  useEffect(() => {
    if (personCount > 1) {
      // alert(`${personCount} Person Detected in your camera frame`);
    }
  }, [personCount]);
 
  useEffect(() => {
    enterFullScreen();
  }, [window.location.pathname]);

  return (
    <div ref={contentRef} style={{ width: '100%', height: '100vh', backgroundColor: 'lightgray', textAlign: 'center' }}>
      <h1>Full Screen Mode</h1>
      {!isFullScreen && (
        <div>
          <p>You have exited full screen mode. Please click the button below to re-enter full screen mode.</p>
          <button onClick={enterFullScreen}>Enter Full Screen</button>
        </div>
      )}
      <div>
        <div className='relative'>
          <video ref={videoRef} width="640" height="480" style={{ display: 'block' }} />
          <canvas ref={canvasRef} width="640" height="480" className='absolute top-0' />
        </div>
        <div>Number of people detected: {personCount}</div>
      </div>
    </div>
  );
};

export default Restriction;
