var prime_factors = function(n) {
  var factors = [];
  var d = 2;

  while (n > 1) {
    while (n % d === 0) {
      factors.push(d);
      n = Math.floor(n / d);
    }

    d = d + 1;
  }

  return factors;
};

console.log(prime_factors(600851475143).slice(-1)[0]);
