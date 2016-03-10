var a = 0;
var b = 1;

var sum = 0;

while (true) {
  var c = a + b;

  if (c % 2 === 0) {
    sum += c;
  }

  if (c > 4000000) {
    break;
  }

  a = b;
  b = c;
}

console.log(sum);
