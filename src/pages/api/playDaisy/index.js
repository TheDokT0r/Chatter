import { join } from 'path';
import { createReadStream } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req, res) {
  console.log('Getting music file...');

  const filePath = join(process.cwd(), 'public', 'audio', 'daisy.mp3');
  const stream = createReadStream(filePath);
  res.setHeader('Content-Type', 'audio/mpeg');
  stream.pipe(res);
}
