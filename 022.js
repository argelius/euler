const fs = require('fs');

const names = fs.readFileSync('022.txt', 'utf8')
  .replace(/"/g, '')
  .split(',')
  .map((n) => n.trim());

names.sort();

const nameSum = (name) => {
  return [...name]
    .map((c) => c.charCodeAt(0) - 64)
    .reduce((a, b) => a + b);
};

const score = names
  .map((name, i) => {
    return (i + 1) * nameSum(name);
  })
  .reduce((a, b) => a + b);

console.log(score);
