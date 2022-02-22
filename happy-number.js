/*

202. Happy Number Easy
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

var isHappy = function (n) {
  const visited = new Set();
  while (n !== 1) {
    let curr = n;
    let sum = 0;
    while (curr !== 0) { // while we have not fully processed curr
      // const lastDigit = curr % 10; // mod always gives last digit
      sum += (curr % 10) * (curr % 10);
      curr /= 10; // this removes the digit we processed
    }
    if (visited.has(sum)) return false;
    visited.add(sum);
    n = sum;
  }
  return true;
};

var isHappy = function (n) {
  const visited = new Set();
  while (!visited.has(n)) {
    visited.add(n);
    n = sumOfSquares(n);
    if (n === 1) return true;
  }
  return false;
};

const sumOfSquares = (n) => {
  let sum = 0;
  while (n) {
    const lastDigit = n % 10;
    sum += (lastDigit * lastDigit);
    n /= 10;
  }
  return sum;
}

const n1 = 19;
console.log(func(n1));
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

const n1 = 2;
console.log(func(n1));
// Output: false