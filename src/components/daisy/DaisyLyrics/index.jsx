import React, { useState, useEffect } from 'react';

export default function index(props) {
    const [lyrics, setLyrics] = useState([]);
    const [displayedLyrics, setDisplayedLyrics] = useState([]);

    const linesDurationSeconds = [4, 12, 20, 24, 28.5, 31.5];

    useEffect(() => {
        const getLyrics = async () => {
            const response = await fetch('http://localhost:3000/api/daisy', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await response.json();

            setLyrics(
                data.lyrics.map(item => (
                    <div key={item}>
                        <p>{item}</p>
                    </div>
                ))
            );
        };

        getLyrics();
    }, []);

    const addLyricsToDisplay = () => {
        if (!props.isPlaying) {
            return;
        }

        if(props.currentTime < linesDurationSeconds[0]) {
            setDisplayedLyrics([]);
        }

        for (let i = 0; i < linesDurationSeconds.length; i++) {
            if (props.currentTime >= linesDurationSeconds[i] && !displayedLyrics.includes(lyrics[i])) {
                let temp = [...displayedLyrics];
                temp.push(lyrics[i]);

                setDisplayedLyrics(temp);
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            addLyricsToDisplay();
        }, 100);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [props.isPlaying, props.currentTime]); // Add props to the dependency array

    return <div>{displayedLyrics}</div>;
}
