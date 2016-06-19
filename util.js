const range = (a, b, step = 1) => {
  if (a > b) {
    throw new Error('Start value must be smaller than end.');
  }

  const rv = [];

  for (let i = a; i < b; i += step) {
    rv.push(i);
  }

  return rv;
};

const sum = (a) => a.reduce((a, b) => a + b);

const prod = (a) => a.reduce((a, b) => a * b);

const sieve = (n) => {
  const nums = range(0, n);

  for (let i = 2; i * i < n; i++) {
    for (let j = 2 * i; j < nums.length; j += i) {
      nums[j] = -1;
    }
  }

  return nums.filter(n => n > 1);
};

const divisors = (n) => {
  let rv = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      rv.push(i);

      if (i !== n / i) {
        rv.push(n / i);
      }
    }
  }

  return rv;
};


module.exports = {range, sum, prod, sieve, divisors};
