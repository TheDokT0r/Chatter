import React from 'react';

export default function index() {
  const audioRef = React.useRef(null);

  const handlePlayButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePauseButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <audio ref={audioRef}>
        <source src="/api/playDaisy" type="audio/mpeg" />
      </audio>
      <button onClick={handlePlayButtonClick}>Play</button>
      <button onClick={handlePauseButtonClick}>Pause</button>
    </div>
  );
}
