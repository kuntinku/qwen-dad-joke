import { writeFileSync } from 'node:fs';

const JOKE = "What's a ghost's favorite laundry detergent? Tide.";

try {
  writeFileSync('/output/entry.txt', JOKE);
  console.log('Joke successfully written to /output/entry.txt');
} catch (error) {
  console.error('Error writing to file:', error);
  process.exit(1);
}
