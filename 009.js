const N = 1000;

for (let a = 1; a < N - 1; a++) {
  for (let b = a; b < N - a; b++) {
    const c = N - a - b;

    if (a * a + b * b === c * c) {
      console.log(a * b *c);
      break;
    }

  }
}
