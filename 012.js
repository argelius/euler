const divisors = require('./util').divisors;

let n = 0;

let largest = 0;

for (let i = 1; ; i++) {
  n += i;

  if (divisors(n).length > 500) {
    console.log(n);
    break;
  }
}
