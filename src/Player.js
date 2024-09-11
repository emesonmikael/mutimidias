import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const Player = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (src.endsWith('.m3u8') && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });

      return () => {
        hls.destroy();
      };
    } else {
      videoRef.current.src = src;
    }
  }, [src]);

  return (
    <div>
      <h2>Now Playing</h2>
      <video ref={videoRef} controls style={{ width: '100%' }} autoPlay />
    </div>
  );
};

export default Player;