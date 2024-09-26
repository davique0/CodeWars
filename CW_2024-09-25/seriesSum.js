// Task
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

//P: n is an integer that determines how my series would be added
//R: it will return the sum of all fractions in the series
//E: Would the number be negative?
//P: Create a function with a natural number as an parameter, this number (n) will determined how many of the series should be added to return the summ of all series

// function seriesSum(n) {
//   if (n === 0) return 0;
//   let total = 1;

//   for (let i = 0; i < n - 1; i++) {
//     total = total + 1 / (4 + 3 * i);
//   }

//   return Number(total.toFixed(2));
// }

function seriesSum(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += 1 / (1 + i * 3);
  }
  return total.toFixed(2);
}

console.log(seriesSum(2));
console.log(seriesSum(3));
