// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

//P: 1 integer (int) that represents the number which we will find the multiples, and 1 integer (limit) which will limit the numbers of multiples calculated

function findMultiples(int, limit) {
  let arr = [];
  for (let i = 1; int * i <= limit; i++) {
    arr.push(int * i);
  }
  return arr;
}

console.log([5, 10, 15, 20, 25], findMultiples(5, 25));
