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
//==================================code===============================================

// function myFunction(a, b) {
//     return Boolean(a[b]);
// }

// let result = myFunction({ x: 'a', b: 'b', z: undefined }, 'z');

// console.log(result)

//==================================### 2===============================================
// Write a function that takes an array of strings as argument
// Return the longest string
//===================================code==============================================
// function myFunction(a) {
//     firstChild = a[0];
//     a.reduce((first, second) => {
//         return first
//     })
// }

// let result = myFunction(['help', 'me']);

// console.log(result)

// =================================### 3=========================================

// . There are two gymnastics teams, Dolphins and Koalas. They compete against eachother 3 times. The winner with the highest average score wins a trophy!

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
// ============================code=======================================

// const dolphinsfirstTest = 96 + 108 + 89;
// const dolphinsSecondTest = 97 + 112 + 101;
// const dolphinsThirdTest = 97 + 112 + 101;

// const KoalasfirstTest = 88 + 91 + 110;
// const KoalasSecondTest = 109 + 95 + 123;
// const KoalasThirdTest = 109 + 95 + 106;

// const dolphinsScore =
//   (dolphinsfirstTest + dolphinsSecondTest + dolphinsThirdTest) / 3;
// const KoalasScore = (KoalasfirstTest + KoalasSecondTest + KoalasThirdTest) / 3;
// const minScore = 100;

// if (dolphinsScore > KoalasScore && dolphinsScore >= minScore) {
//   console.log("Dolphins are wins");
// } else if (dolphinsScore < KoalasScore && KoalasScore >= minScore) {
//   console.log("Koalas are wins");
// } else if (dolphinsScore === KoalasScore && KoalasScore >= minScore) {
//   console.log("match drow");
// } else {
//   console.log("no one won");
// }

// console.log(dolphinsScore, KoalasScore);

// ======================================### 4==============================================

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// =====================================code===============================================

// function addUp(num){
//   let result = 0;
//   for(let i = 1; i <= num; i++){
//     result += i;
//   }
//   return result;
// }

// console.log(addUp(4))
// ---------------------------------alternative---------------------------------------------
// return (num * (num + 1))/2;

// ====================================### 5=======================================================
// Create a function which returns the number of true values there are in an array.

//                              -----example-----
//:countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// ========================================code===================================================

// function countTrue(arr) {
//   let countTrue = 0;
//   arr.forEach((element) => {
//     element ? countTrue++ : 0;
//   });
//   return countTrue;
// }

// console.log(countTrue([true, false, false, true, false]));

// ---------------------------------alternative---------------------------------------------

// let countTrue = (arr) => arr.filter(Boolean).length;

// console.log(countTrue([true, false, false, true, false]));

// ====================================### 6=======================================================

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// //                              -----example-----
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true

// // ======================================code=====================================================
// function lessThanOrEqualToZero(num) {
//   return num <= 0;
// }

// console.log(lessThanOrEqualToZero(5));

// ====================================### 6=======================================================

// Write a function that converts hours into seconds.

//                            -----example-----
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400
// // ======================================code=====================================================

// function howManySeconds(hours) {
//   return hours * 60 * 60;
// }
// console.log(howManySeconds(2));
//---------------------------

// ====================================### 7=======================================================
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
//                            -----example-----
// myFunction({z:'a',y:'b',x:'c',w:'d'})
// Expected
// {a:'z',b:'y',c:'x',d:'w'}
// ======================================code=====================================================

// function myFunction(obj) {
//   let nObj = {};
//   for ([value, key] of Object.entries(obj)) {
//     nObj[key] = value;
//   }
//   return nObj;
// }
// console.dir(myFunction({ z: "a", y: "b", x: "c", w: "d" }));
// ---------------------------------alternative---------------------------------------------
// console.dir(myFunction({ z: "a", y: "b", x: "c", w: "d" }));

// function myFunction(obj) {
//   return Object.entries(obj).reduce((acc, [key, val]) => {
//     return { ...acc, [val]: key };
//   }, {});
// }

// ===============================================================================
//                 star pattern
// ===============================================================================

// function starPattern() {
//   let n = 5;
//   let string = "";
//   // External loop
//   for (let i = 1; i <= n; i++) {
//     // printing spaces
//     for (let j = 1; j <= n - i; j++) {
//       string += " ";
//     }
//     // printing star
//     for (let k = 0; k < 2 * i - 1; k++) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   for (let i = 1; i <= n - 1; i++) {
//     for (j = 0; j < i; j++) {
//       string += " ";
//     }
//     for (k = (n - i) * 2 - 1; k > 0; k--) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   return string;
// }
// console.log(starPattern());

// ==============================================

// function starPattern() {
//   let n = 5;
//   let string = "";
//   // External loop
//   for (let i = 1; i <= n; i++) {
//     for (let j = n; j >= i; j--) {
//       string += " ";
//     }
//     for (let k = 0; k < i; k++) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   for (let i = 1; i <= n - 1; i++) {
//     for (let j = 0; j <= i; j++) {
//       string += " ";
//     }
//     for (let k = n - 1; k >= i; k--) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   return string;
// }
// console.log(starPattern());

// ==================================================

function starPattern() {
  let n = 10;
  let string = "";
  // External loop
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      string += "0";
    }
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        string += "*";
      } else {
        if (j === 0 || j === n - 1) {
          // string += "*";
        } else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  return string;
}
console.log(starPattern());
