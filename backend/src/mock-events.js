import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const data = fs.readFileSync(path.join(__dirname, '../data.txt'), 'utf-8');
const lines = data.split('\n');
let previousLine = -1;

const mockEvents = (callback, seconds = 1) => {

  setInterval(() => {
    if (previousLine < lines.length) {
      const nextLine = lines[previousLine + 1];
      callback(nextLine)
      previousLine += 1;
    } else {
      previousLine = -1;
    }
  }, seconds * 1000);
}


export default mockEvents;
