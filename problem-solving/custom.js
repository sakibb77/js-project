// function publicBusFare(public) {
//     let bus;
//     let microBus;
//     let extraPublic = public / 50;

//     if ((public % 50) == 0 && (public % 11) == 0) {
//         bus = public / 50;
//     }

//     return extraPublic;
// }

// let result = publicBusFare(63)

// console.log(result);

//==============================### 1===================================================
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise
//=================================================================================

// function myFunction(a, b) {
//     return Boolean(a[b]);
// }

// let result = myFunction({ x: 'a', b: 'b', z: undefined }, 'z');

// console.log(result)

//==================================### 2===============================================
// Write a function that takes an array of strings as argument
// Return the longest string
//=================================================================================
// function myFunction(a) {
//     firstChild = a[0];
//     a.reduce((first, second) => {
//         return first
//     })
// }

// let result = myFunction(['help', 'me']);

// console.log(result)

// ==========================================================================

// 06. There are two gymnastics teams, Dolphins and Koalas. They compete against eachother 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// a) Calculate the average score for each team, using the test data below
// b) Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// c. Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks
// d. Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data 3: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// ===================================================================

const dolphinsfirstTest = 96 + 108 + 89;
const dolphinsSecondTest = 97 + 112 + 101;
const dolphinsThirdTest = 97 + 112 + 101;

const KoalasfirstTest = 88 + 91 + 110;
const KoalasSecondTest = 109 + 95 + 123;
const KoalasThirdTest = 109 + 95 + 106;

const dolphinsScore =
  (dolphinsfirstTest + dolphinsSecondTest + dolphinsThirdTest) / 3;
const KoalasScore = (KoalasfirstTest + KoalasSecondTest + KoalasThirdTest) / 3;
const minScore = 100;

if (dolphinsScore > KoalasScore && dolphinsScore >= minScore) {
  console.log("Dolphins are wins");
} else if (dolphinsScore < KoalasScore && KoalasScore >= minScore) {
  console.log("Koalas are wins");
} else if (dolphinsScore === KoalasScore && KoalasScore >= minScore) {
  console.log("match drow");
} else {
  console.log("no one won");
}

console.log(dolphinsScore, KoalasScore);
