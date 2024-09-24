// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
//P: Is it always going to be a single digit number? is it 0 ever?
//R: Return the number in the string as an integer
//E: if we are given "5 years old" we should return 5
//if we are given "2 years old" we should return 2
//P:
//Make a function that takes a string in the form of "x years old" where x is an integer but it is inside a string, so it is a string
function girlAge(string) {
  return Number(string[0]);
}
//the return should be the number in the string as an integer
girlAge("7 years old");
console.log(girlAge("6 years old"), 6);
