const sieve = require('./util').sieve;
const sum = require('./util').sum;

console.log(sum(sieve(2000000)));
