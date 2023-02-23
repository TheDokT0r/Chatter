import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function PlayDaisy(props) {
  const audioRef = React.useRef(null);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      props.setCurrentTime(audioRef.current.currentTime);
    }, 100);
  }, [])

  const handlePlayButtonClick = () => {
    props.setIsPlaying(true);

    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePauseButtonClick = () => {
    props.setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = event.target.value;
    }
  };

  const handleTimeChange = (event) => {
    setCurrentTime(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = event.target.value;
    }
  };


  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }


  return (
    <div>
      <audio ref={audioRef} onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}>
        <source src="/api/playDaisy" type="audio/mpeg" />
      </audio>
      <div>
        <input
          type="range"
          min="0"
          max={audioRef.current && audioRef.current.duration ? audioRef.current.duration : 0}
          step="0.01"
          value={currentTime}
          onChange={handleTimeChange}
        />
        <label>{formatTime(currentTime)}/{audioRef.current && audioRef.current.duration ? formatTime(audioRef.current.duration) : '--:--'}</label>
        <button onClick={handlePlayButtonClick}>Play</button>
        <button onClick={handlePauseButtonClick}>Pause</button>
      </div>

      <div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>

      <Link href='/'>
        <button>Step back to reality</button>
      </Link>
    </div>
  );
}
