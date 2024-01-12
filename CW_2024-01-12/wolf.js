// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

//P: The problem has 1 input which is an array which consist in 1 wolf and the rest are sheep, depending of where the wolf is positioned in the array the output will change

//R: it returns wither of 2 messages: "Oi! sheep number [n] You are about to be eaten by a wolf! if the wolf is in any position except for the last position. if the wolf is in the last position the message will be "Pls go away and stop eating my sheep"
//E: if the array is empty or only with one wolf?
//P: create a function with an array as an argument, go through the array and once the wolf is located return the message depending where it is. Other option is to evaluate the last position and if it isnt the wolf return the first message advising the sheep

function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf")
    return "Pls go away and stop eating my sheep";
  const wolfPosition = queue.indexOf("wolf");
  return `Oi! Sheep number ${
    queue.length - 1 - wolfPosition
  }! You are about to be eaten by a wolf!`;
}

console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ])
);

console.log(
  warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
);

console.log(warnTheSheep(["wolf"]));
