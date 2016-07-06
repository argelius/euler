const bigInteger = require('big-integer');

const N = bigInteger(2).pow(bigInteger(1000)).toString();

const sum = [...N]
  .map((n) => parseInt(n))
  .reduce((a, b) => a + b);

console.log(sum);
