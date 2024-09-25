// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.
//P: only parameter is a number
//R: It shoudl return the sum of the number digits
//E: Are the numbers integer? are they > 0,
//P: create a function that will enter a number and separate every digit in this number and sum every digit and retunr the result
//example: 123 ---> 6, 96--->15

function sumDigits(num) {
  let total = Math.abs(num)
    .toString()
    .split("")
    .reduce((a, c) => a + +c, 0);
  return total;
}

console.log(sumDigits(125));
console.log(sumDigits(3698));
console.log(sumDigits(-32));
