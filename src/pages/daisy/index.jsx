import React, { useState, useEffect } from 'react'
import PlayDaisy from '@/components/daisy/PlayDaisy';
import DaisyLyrics from '@/components/daisy/DaisyLyrics';

export default function index() {
  const [lyrics, setLyrics] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const getLyrics = async () => {
      const response = await fetch('http://localhost:3000/api/daisy', {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      setLyrics(data.lyrics.map(
        item =>
          <div key={item}>
            <p>{item}</p>
          </div>
      ));
    };

    getLyrics();
  }, []);

  return (
    <div>
      <DaisyLyrics isPlaying={isPlaying} currentTime={currentTime}/>
      <PlayDaisy setCurrentTime={setCurrentTime} setIsPlaying={setIsPlaying}/>
    </div>
  );
}
