// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

//P: THere would be 2 parameter, both numbers, the first number is the current position of the player, and the second is the number shown in the dice, player will move from current position the double of  what the dice shows, and return the new position
//R: The return is the new position of the player
//E: can the current position be negative? will it always be integers?
//P: Create a function with 2 arguments, take the first argument as the initial value and ad the second argument 2 times.

function gameMove(curr, dice) {
  return curr + 2 * dice;
}

console.log("12", gameMove(2, 5));
