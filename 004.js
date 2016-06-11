const isPalindrome = (n) => {
  const str = n.toString();

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str.charCodeAt(i) !== str.charCodeAt(str.length - i - 1)) {
      return false;
    }
  }

  return true;
}

let largest = 0;

for (let x = 100; x < 1000; x++) {
 for (let y = x; y < 1000; y++) {
   if (isPalindrome(x * y) && x * y > largest) {
     largest = x * y;
   }
 }
}

console.log(largest);
