const sum = require('./util').sum;

const digit_sum = (n) => sum([...n.toString()].map((n) => parseInt(n)));

let s = 1;

for (let i = 0; i < 20; i++) {
  s += digit_sum(s);

  console.log(s);
}
