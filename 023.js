const divisors = require('./util').divisors;
const sum = require('./util').sum;

const abundant = [];

for (let i = 1; i < 28124; i++) {
  const s = sum(divisors(i)) - i;

  if (s > i) {
    abundant.push(i);
  }
}

const s = new Set();

for (let i = 0; i < abundant.length; i++) {
  for (let j = i; j < abundant.length; j++) {
    s.add(abundant[i] + abundant[j]);
  }
}

const a = Array.from(s).filter(n => n <= 28123);
a.sort((a, b) => a - b);

const b = [];
for (let i = 1; i <= 28123; i++) {
  if (a.indexOf(i) < 0) {
    b.push(i);
  }
}

console.log(sum(b));
