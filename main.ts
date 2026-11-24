import { writeFileSync } from 'node:fs';

const JOKE = "I tried to build a clock out of aged cheese, but it turned out to be too brie-f.";

try {
  writeFileSync('/output/entry.txt', JOKE);
  console.log('Joke successfully written to /output/entry.txt');
} catch (error) {
  console.error('Error writing to file:', error);
  process.exit(1);
}
