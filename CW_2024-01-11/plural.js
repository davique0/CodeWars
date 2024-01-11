// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.
//P: 1 parameter, number
//R: Return true if it is not 1, false if it is
//E: are the number integers? is there ever a 0? are decimal included?
//P: create a function that evaluates (n) as a umber and checks if it is one or not

function plural(n) {
  return n === 1;
}
