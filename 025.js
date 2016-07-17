const bigInteger = require('big-integer');

let a = bigInteger(1);
let b = bigInteger(1);

for (let i = 1; ; i++) {
  if (a.toString().length >= 1000) {
    console.log(i);
    break;
  }

  const tmp = b;

  b = a.add(b);
  a = tmp;
}
