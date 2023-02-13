const fs = require('fs');

const file = fs.readFileSync('file.txt', 'utf8');
const userInput = 'RA';

let regex = new RegExp(`^.*\\b${userInput}\\w*\\b.*$`);
let match = file.match(regex);

if (match) {
  let word = match[0].split(' ').find(word => word.startsWith(userInput));
  console.log(word);
} else {
  console.log('No match found');
}
