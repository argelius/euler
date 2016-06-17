const range = require('./util').range;
const sum = require('./util').sum;

const ar = range(0, 101);

console.log(Math.pow(sum(ar), 2) - sum(ar.map((n) => n * n)));
