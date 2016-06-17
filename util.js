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

module.exports = {range, sum, prod, sieve};
