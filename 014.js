const collatz_length = function(n) {
  let rv = 0;

  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    }
    else {
      n = 3 * n + 1;
    }

    rv++;
  }

  return rv;
};

let longest = 0;
let answer = 0;

for (let i = 1; i < 1000000; i++) {
  if (collatz_length(i) > longest) {
    longest = collatz_length(i);
    answer = i;
  }
}
console.log(answer);
