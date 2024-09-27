// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

//P: argument is an array of integers that can be both positive or negative
//R: Return will be the maximum sum between contigious numbers, so if a sum of two numbers is negative it isn't taking into consideration for the total sum
//E: empty arrays return 0, only negative numbers returns 0
//P: create a function that will iterate through every item in the array addin it to the next item and checking if it adds to the total or not

function maxSequence(arr) {
  if (!arr) return 0;
  let totalSum = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] + arr[i + 1] > 0) {
      console.log(arr[i] + arr[i + 1]);
      totalSum += arr[i] + arr[i + 1];
      console.log("totalSUm", totalSum);
    }
  }
  return totalSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
