import { open } from 'node:fs/promises';

export default function handler(req, res) {
    const lines = getLyrics();

    res.setHeader('Content-Type', 'text/plain');

    res.end(JSON.stringify({ lyrics: lines }));
}


function getLyrics() {
    const lyrics = [
        "Daisy, Daisy, give me your answer do",
        "I'm half crazy all for the love of you",
        "It won't be a stylish marriage",
        "I can't afford a carriage",
        "But you'll look sweet upon the seat",
        "Of a bicycle built for two"
    ];

    return lyrics;
}