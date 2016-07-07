const writtenNumber = require('written-number');

let sum = 0;

const countLetters = (s) => [...s]
  .filter(c => /^[a-z]$/i.test(c))
  .length;

for (let i = 1; i <= 1000; i++) {
  sum += countLetters(writtenNumber(i));
}

console.log(sum);
