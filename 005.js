const range = require('./util').range;

const gcd = (a, b) => !b ? a : gcd(b, a % b);
const lcm = (a, b) => (a * b) / gcd(a, b);

console.log(range(2, 21).reduce(lcm));
