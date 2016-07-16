const permutations = require('./util').permutations;

const p = permutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

p.sort();

console.log(p[999999].join(''));
