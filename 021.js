const divisors = require('./util').divisors;
const sum = require('./util').sum;

const d = (n) => sum(divisors(n)) - n;

const amicable = [];

for (let a = 2; a <= 10000; a++) {
  const b = d(a);

  if (d(b) === a && a !== b) {
    amicable.push(a);
  }
}

console.log(sum(amicable));
