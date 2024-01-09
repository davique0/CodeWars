// Exclusive "or" (xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
//P: the input are 2 booleans values
//R: it should return true or false, true if exactly one value is tru
//E: is there anything else other than a boolean value
//P: Create a function with 2 parameters which are booleans
//evaluate if they are both the same which would return false
// if both are different and there are only 2 options we can assume one is true and one is false, so it returns true
function xor(a, b) {
  if (a === b) {
    return false;
  }
  return true;
}

console.log(xor(true, true));
console.log(xor(true, false));
console.log(xor(false, false));
console.log(xor(false, true));
