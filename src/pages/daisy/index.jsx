import React, { useState, useEffect } from 'react'
import PlayDaisy from '@/components/PlayDaisy';

export default function index() {
  const [lyrics, setLyrics] = useState([]);

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
      {lyrics}

      <PlayDaisy />
    </div>
  );
}
