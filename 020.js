const bigInteger = require('big-integer');

let s = bigInteger(1);

for (let i = 1; i <= 100; i++) {
  s = s.multiply(i);
}

const sum =
  [...s.toString()]
  .map((n) => parseInt(n))
  .reduce((a, b) => a + b);

console.log(sum);
