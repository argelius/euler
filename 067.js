const fs = require('fs');

const PYRAMID = fs.readFileSync('./067.txt', 'utf8')
  .trim()
  .split('\n')
  .map((s) => s.split(' ').map(c => parseInt(c)));

const memo = {};

const solve = (x, y) => {
  const key = `${x},${y}`;

  if (typeof memo[key] !== 'undefined') {
    return memo[key];
  }

  if (y === PYRAMID.length - 1) {
    return PYRAMID[y][x];
  }
  else {
    return memo[key] = Math.max(
      PYRAMID[y][x] + solve(x, y + 1),
      PYRAMID[y][x] + solve(x + 1, y + 1)
    );
  }
};

console.log(solve(0, 0));
