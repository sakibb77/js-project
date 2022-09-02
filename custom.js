"use strict";

// const { func } = require("prop-types");

// const fruits = ["Banana", "Orange", "Apple", "Mango" , "pineapple"];
// fruits.sort();

// let text = '<ul>';

// fruits.forEach(myFunction);

// text += '</ul>'

// function myFunction(x){
//     text += '<li>' + x + '</li>';

// }
// for(let index  = 1; index < fruits.length+1; index++){
//     let text = '<ul>';
//     myFunction()
//     text += '<ul>';
// }

// function myFunction(){
//    return text += '<li>' + x + '</li>';
// }

// document.getElementById('demo').innerHTML = text;

// const fruits = ["Banana", "Orange", "Apple", "Mango" , "pineapple"];

// let c = "Please";
// let str = "Please locate where 'locate' occurs!";
// let b = str.indexOf(c);
// let result = str.slice(b , (c.length))

// if('' === result){
//     console.log('you have entered a worng value')
// }

// // console.log(b)
// console.log(result)
// // console.log(c)

// ===================================================

// const latter =  Array.from("aeiouAEIOU");

// function countCharecter(sentence){
//     let count = 0;
//     let a,b;

//     const inputSentence = Array.from(sentence);
//     inputSentence.forEach(function(value){
//         if(latter.includes(value)){
//             count++;
//             console.log(value);

//         }
//     });

//     a = Array.from(sentence).length;
//     b = Array.from(sentence);
//     b = b.join()
//     // console.log(a - count)
// console.log(b);
//     return count;
// }

// console.log(countCharecter('What is Website'))

// =================================================

// const ages = [32, 33, 16, 40 , 45 , 17];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// console.log(result)

// function checkAge(age) {
//     return age > 18;
//   }

// console.log(checkAge(25));

// Array.prototype.sakib = function(){
//     for(let i = 0; i < this.length; i++){
//         this[i] = this[i].toUpperCase();
//     }
// }

// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.sakib();

// console.log(fruits)

// let getJson = JSON.parse('{"firstName":"John", "lastName":"Doe"}');

// console.log(getJson.firstName)

// setInterval(myTimer , 1000)

// function myTimer(){
//     const d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }

// let text = "Is this all there is?";

// let newText = text.split()

// console.log(newText.toString());

// let fruits = ["Banana", "Orange", "Apple", "Mango"];;

// function myFunction(a) {
//     let c = a[0];
//     for (let x of a) {
//        if(c !== x){
//            return false
//        }else if(c === x){
//            return true
//        }

//     }
// }

// function myFunction ( arr ) {
//     return arr.every((a , b) => (a === b))

// }

// function myFunction(a, b) {
//     a.forEach(function (Value, index) {
//         if (Value === b) {
//             a.splice(index, 1);
//         } else {
//             `sorry ${b} is no exist in this array`
//         }
//     })
//     return a !== [''] ? a : 'sakib';
// }

// console.log(myFunction([1, 2, 3, 2, 4], 3))

// const num = [-10, 22, 333, 42, -11, 5, 22, 41, 42]

// function myFunction(a , b){
//     let arrConcat = a.concat(b);
//     return arrConcat.filter(function(value, index, array){
//       return array.indexOf(value) === index;
//     }).sort(function(a , b){
//         return a-b;
//     });
// }
// console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))

// function myFunction(a ,b){
//     let total = 0;
//    const bigNumber = a.filter(function(value){
//         return value > b;
//     })
//     for(let x of bigNumber){
//         total += x;
//     }
//     return total
// }

// console.log(myFunction([78, 99, 100, 101, 401], 99))

// function myFunction(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     // console.log(right)
//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         console.log(sum)
//         if (sum === 0) {
//             return [arr[left] , arr[right]]
//         } else if (sum > 0) {
//             right--;
//         } else{
//             left++;
//         }

//         // console.log(sum)
//     }
// }

// const a =(myFunction([5, 10 ,-5, -3, -1, 0, 2, 3, 6, 8]));
// console.log(a);

// let a = [5, 10 ,-5, -3, -1, 0, 2, 3, 6, 8];

// a.sort(function(a , b){
//     return b - a;
// })
// console.log(a)
// function myFunction(arr){

//     for(let i = 0; i < arr.length; i++){
//         for (let b = 1; b < arr.length; b++){
//             let sum = arr[i] + arr[b];
//             if(sum === 0){
//                 return [arr[i], arr[b]]
//             }
//             console.log([i],[b])
//         }
//     }
// }

// console.log(myFunction(a));

// let myfunction = (a = 0 , b = 0) => a + b;

// console.log(myfunction());

// let fruits = new Set(["Banana", "Orange", "Apple", "Mango"]);

// fruits.forEach(function(value){
//     console.log(value)
// })

// function myFunction(){
//     let count = 0;

//     return function(){
//         count ++;
//         // document.getElementById('demo').innerHTML = count;
//     }
// }

// const add = myFunction();

// console.log(add())

// document.getElementById('test').addEventListener('click' , add);

// const fruits = new Map();

// fruits.set('apple', 500);
// fruits.set('mango', 600);
// fruits.set('banana', 300);

// function totalValue(){
//     let name = '',valu = '';

//     return function(){
//         for(let x of fruits.keys()){
//             name += x + '\n';
//         }
//         for(let y of fruits.values()){
//             valu += y+ '\n';
//         }

//         console.log(name +'=' + valu)
//     }
// }

// const add = totalValue();

// add()

// console.log(fruits)

// function myMove(){
//     const elem = document.querySelector('#animate');
//     let pos = 0;

//     const interval = setInterval(frame , 5)

//     function frame(){
//         if(pos < 450){
//             pos++;
//             elem.style.top = pos + 'px'
//             elem.style.left = pos + 'px'
//         }else{
//             clearInterval(interval)
//         }
//     }
// }

// function change(a){

//    let b = document.getElementById(a).value;
//     b.value.toUpperCase();
// }

// change('name')

// function put(id){
//    id = document.getElementById('name');
//     change(id);
// }

// let num = 10.51

// console.log(Math.floor(num))

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     fullname: function(){
//        return this.firstName + " " + this.lastName
//     }
//   };

// console.log(person.fullname())

// const person = {
//   fullName: function (a, b) {
//     return this.firstName + " " + this.lastName + ' ' + a + ' ' + b;
//   }
// }

// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe"
// }

// // This will return "Mary Doe":
// console.log(person.fullName.apply(person1, ['one', 'two']));

// class Student {
//   constructor(fname, lname , school) {
//     this.fname = fname;
//     this.lname = lname;
//     this.school = school;
//   }
// }

// function createObject(){
//   let fname = document.querySelector('#fname');
//   let lname = document.querySelector('#lname');
//   let school = document.querySelector('#school');
//   let p = document.querySelector('#demo');
//   if(fname.value.length != '' && lname.value.length != '' && school.value.length != ''){
//     let studentDetails = new Student(fname , lname , school)
//     p.innerHTML = "full name = " + studentDetails.fname.value + ' ' + studentDetails.lname.value + '<br>' + 'school = ' + studentDetails.school.value;
//   }else{
//     fname.style.borderColor = 'red'
//   }

// }

// console.dir(Student)

// let paymentStatus = false;
// let marks = 70;

// function enroll(callback) {
//   console.log('Course enrollment is in progress');

//   setTimeout(function () {
//     if (paymentStatus) {
//       callback()
//     } else {
//       console.log('payment failed');
//     }
//   }, 2000)
// }

// function progress(callback) {
//   console.log('course on progress');

//   setTimeout(function () {
//     if (marks >= 70) {
//       callback()
//     } else {
//       console.log('you could not get enough marks to get the certificate')
//     }
//   }, 3000)
// }

// function getCertificate() {
//   console.log("preparing you certificate")

//   setTimeout(function () {
//     console.log("congratultion you got the certificate")
//   }, 4000)
// }

// enroll(function(){
//   progress(getCertificate)
// })

// let paymentStatus = true;
// let marks = 60;

// function enroll() {
//   console.log('Course enrollment is in progress');

//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (paymentStatus) {
//         resolve()
//       } else {
//         reject('payment failed');
//       }
//     }, 2000)
//   })

//   return promise;
// }

// function progress() {
//   console.log('course on progress');

//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (marks >= 70) {
//         resolve()
//       } else {
//         reject('you could not get enough marks to get the certificate')
//       }
//     }, 3000)
//   })
//   return promise
// }

// function getCertificate() {
//   console.log("preparing you certificate")

//   let promise = new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log("congratultion you got the certificate")
//     }, 4000)
//   })
//   return promise;
// }

// // enroll()
// //   .then(progress)
// //   .then(getCertificate)
// //   .catch(function (err) {
// //     console.log(err)
// //   })

// async function course(){
//   await enroll();
//   await progress();
//   await getCertificate();
//   console.log(reject())
// }

// course()

// const buttonElem = document.querySelectorAll("wrapper input");
// const inputElem = document.querySelectorAll('#wrapper button');

// buttonElem.addEventListener('click', () => {
//   const oldText = inputElem.value;
//     return inputElem.value = oldText === "ON" ? "OFF" : "ON";
// });

// console.log(buttonElem)
// console.log(inputElem)

// function getCookie(name , value , exdays){
//     const d = new Date();
//     d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//     let expires = "expires=" + d.toUTCString();

//     document.cookie = name + "=" + value + ";" + expires  + ";path=/";

// }

// function setCookie(name){
//     console.log(document.cookie)
// }

// function myFunction(a) {

//   // let b = a.toString();
//   // let c = b.split(',')
//   let b = a.toString().split('')
//   return b.map(value => +value)

// }
// console.log(myFunction(193278));

// const carentDate = new Date();
// const targetDate = new Date();
// targetDate.setDate(targetDate.getDate()) ;
// console.log(targetDate)

// let dd = targetDate.getDate() ;
// let mm = targetDate.getMonth() + 1;
// let yyyy = targetDate.getFullYear();

// console.log((dd + 1 ) - dd ,(mm + 1) - mm ,(yyyy ) - yyyy)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let b = fruits.slice(2)
// console.log(b)

// window.onload = () => {
//     storeStudent();
// };

// class Student {
//     constructor(fname, lname, age) {
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//     }

//     fullname(){
//        return this.fname + ' ' + this.lname;
//     }
// }

// let arr = [];
// let student1 = new Student('sakib' , 'biswas' , 22);
// arr.push(student1)
// console.log(arr)

// function storeStudent() {
//     let allStudent;
//     let fname = document.getElementById('fname');
//     let lname = document.getElementById('lname');
//     let age = document.getElementById('age');
//     let btn = document.getElementById('btn');
//     let arrLen;
//     btn.addEventListener("click", function () {
//         let std = new Student(fname.value , lname.value, age.value);
//         allStudent.push(std);
//         fname.value = null;
//         lname.value = null;
//         age.value = null;
//         return allStudent;
//     })

// }

// storeStudent()
// console.log(storeStudent())
// console.log(storeStudent());

// const file = document.getElementById('file');
// const output = document.getElementById('output');

// file.addEventListener('change' , function(){
//     let a = URL.createObjectURL(this.files[0])
// output.src = a;
// // output.src = `blob:null/7faa0c31-d97e-4362-b160-ac86ffce74f8`;
// console.log(a)
// console.log(this.files[0])
// let fileSize = Math.floor(this.files[0].size / 1024);
// console.log(fileSize)

// })

// function sortTable() {
//     var table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementById("myTable");
//     switching = true;
//     /*Make a loop that will continue until
//     no switching has been done:*/
//     while (switching) {
//       //start by saying: no switching is done:
//       switching = false;
//       rows = table.rows;
//       console.log(table)
//       /*Loop through all table rows (except the
//       first, which contains table headers):*/
//       for (i = 1; i < (rows.length - 1); i++) {
//         //start by saying there should be no switching:
//         shouldSwitch = false;
//         /*Get the two elements you want to compare,
//         one from current row and one from the next:*/
//         x = rows[i].getElementsByTagName("TD")[0];
//         y = rows[i + 1].getElementsByTagName("TD")[0];
//         //check if the two rows should switch place:
//         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//           //if so, mark as a switch and break the loop:
//           shouldSwitch = true;
//           break;
//         }
//       }
//       if (shouldSwitch) {
//         /*If a switch has been marked, make the switch
//         and mark that a switch has been done:*/
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//       }
//     }
//   }

//   const table = document.getElementById('myTable');

//   let rows = table.rows;
//   console.log(rows[1]);
//   console.log(rows[1].parentNode);
//   console.log(rows[1].parentNode.insertBefore(rows[1], rows[1]));

// window.onload = () => {
//     dataEntry();
// };

// let dataEntry = () => {
//     let api = fetch('https://reqres.in/api/products');
//     const tbody = document.getElementById('tbody');

//     api.then((list) => {
//         return list.json();
//     }).then((list) => {
//         let alldata = list.data;
//         tbody.innerHTML = `${alldata.map((data) => {
//             return `
//             <tr>
//                 <td>${data.id}</td>
//                 <td>${data.name}</td>
//                 <td>${data.color}</td>
//                 <td>${data.year}</td>
//             </tr>`
//         }).join('')}`
//     })

// }

// id: name.id,
//     name : name.name,
//         year : name.year,
//             color : name.color,

// function chengeTr(){
//     const tbody = document.getElementById('tbody');
//     const tr = tbody.rows;

//     const arr = [];
//     for(let i = 0; i < tr.length ; i++){
//         let a = tbody.rows[i].cells
//         arr.push(a[1].innerHTML)
//         // tbody.insertBefore(tr[i + 1] , tr[i])

//     }

//     let abc = arr.reduce(function(a , b){
//        return a + b
//     })

//     console.log(abc)
//     console.log(arr)
//     console.log(arr[1].length)
//     // console.log(arr.sort())

// }

// function myFunction(arr){

// }

// console.log(myFunction([ 1, 2 , 4, 5, 6 ,7 ]))

// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {

//         // Generate random number
//         var j = Math.floor(Math.random() * (i));

//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//         console.log(j)
//     }

//     return array;
//  }

//  function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//   }

//   let arr = [ 1, 2 , 4, 5, 6 ,7 ]
// shuffle(arr)

// console.log(arr)

// console.log(Math.random())

// let a = Math.floor(Math.random() * 255);
// console.log(a)

// let arr = ['sakib', 'bakibilla', 'masud', 'azizul', 22]
// console.log(arr)

// let newArr = [name , ...arr];

// newArr.push('rohim')

// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     // var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     console.log(hours)
//     // hours = hours ? hours : 12; // the hour '0' should be '12'
//     // // minutes = minutes < 10 ? '0'+ minutes : minutes;
//     // console.log(minutes)
//     // var strTime = hours + ':' + minutes + ' ' + ampm;
//     // return strTime;
//   }

//   console.log(formatAMPM(new Date));

// function clock(){
//     let date = new Date;
//     let pass = document.getElementById("password");
//     let submit = document.getElementById("submit");
//     let hour = date.getHours();
//     let minutes = date.getMinutes()
//     let ampm = hour >= 12 ? 'PM' : 'AM';
//     hour = hour % 12;
//     let datePass = hour+ '' + minutes + ampm
//     console.log(datePass)

//     submit.addEventListener('click' , () => {
//         if(pass.value == datePass){
//             document.write('login successfull')
//         }else{
//             document.write('worng password')
//         }
//     })

// }

// setInterval(clock , 1000*60)
// clock();

// class Chair {
//     constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable){
//         //Defaults which can be changed by the subclass class.
//         this.color = color;
//         this.seatHeight = seatHeight;
//         this.recliningAngle = recliningAngle;
//         this.backSupport = true;
//         this.headSupport = false;
//         this.padding = "3 inch";
//         this.armRests = true;
//         this.seatSize = "16 inch";
//         this.isHeightAdjustable = false;
//         this.isMovable = false;
//         this.type = "Chair";
//     }

//     adjustableHeight() {};
//     adjustAngle(){};
//     moveChair(){};
// }

// const newChair = new Chair();
// newChair.color = 'red'

// console.log(newChair)

// function bestFriens(arr) {
//     let max = arr[0].length;
//     let result = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         let maxi = arr[i].length;
//         if (maxi > max) {
//             result = arr[i];
//             result
//         }
//     }
//     return result
// }

// bestFriens(['sakib', 'bakibilla', 'rajesh'])

// function sum(arr) {
//     let result = arr[0];
//     document.getElementById('test').innerHTML = arr.reduce(myFunction);

//     function myFunction(a, b) {
//         if (a > b) {
//             result = a;
//         }
//     }
//     return result;
// }
// sum([2, 5, 6, 9, 7, 3, ])
// =========================================================
//               binary search
// =========================================================
// function binarySearch(arr, num) {
//   let min = 0;
//   let max = arr.length - 1;
//   while (min <= max) {
//     let midIndex = Math.floor((min + max) / 2);
//     if (arr[midIndex] < num) {
//       min = midIndex + 1;
//     } else if (arr[midIndex] > num) {
//       max = midIndex - 1;
//     } else {
//       return midIndex;
//     }
//   }
//   return -1;
// }

// const result = binarySearch(
//   [-5, -4, 2, 5, 8, 6, 23, 45, 55, 65, 77, 78, 85, 89, 90, 99],
//   77
// );

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

// =============================================================
// =============================================================

// function checkAge() {
//   const nowYear = 2022;
//   const birthYearNitu = nowYear - 1997;
//   const birthYearRitu = nowYear - 1995;
//   if (birthYearNitu > birthYearRitu) {
//     console.log("nitu are older older");
//   } else {
//     console.log("ritu are older older");
//   }
// }
// checkAge();

// const sum = (arr) => {
//   let i = 0;
//   let result = 0;
//   while (i < arr.length) {
//     result += arr[i];
//     i++;
//   }
//   return result;
// };

// const arr = sum([11, 27, 31, 45, 52, 61, 77, 84]);
// console.log(arr);

// const tumpaArray = [
//   "Tumpa",
//   "Rahman",
//   2022 - 1996,
//   "programmer",
//   ["Sumaiya", "Nimmi", "Riyad"],
//   true,
// ];

// for (let i = tumpaArray.length - 1; i >= 0; i--) {
//   console.log(tumpaArray[i]);
// }

// const descrip = `Tumpa is ${tumpaArray[2]}, and she is a ${tumpaArray[3]}.
// She has ${tumpaArray[4].length} friends, and Nimmi is her
// ${tumpaArray[2] ? "best friend" : "friend"}.`;

// console.log(descrip);

// const years = [1991, 1994, 1995, 1996, 1998];
// const evenNumbers = [];
// for (let i = 0; i < years.length; i++) {
//   if (years[i] % 2 === 0) {
//     evenNumbers.push(years[i]);
//   } else {
//     continue;
//   }
// }

// console.log(evenNumbers);

// const student = {
//   fullName: "sakib biswas",
//   birthYear: 2000,
//   ageCalculate: function () {
//     return 2022 - this.birthYear;
//   },
// };

// console.log(student.ageCalculate());

// const arr1 = [23, 24, 32, 28, 26, 36, 21, 25];
// const arr2 = [88, 86, 96, 75];

// for (let i = 0; i < arr1.length; i++) {
//   arr2.unshift(arr1[i]);
// }

// console.log(arr2);

// const isLeapYear = (year) => {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(year + " is a leap year");
//   } else {
//     console.log(year + " is not a leap year");
//   }
// };

// isLeapYear(2000);

// function getOdd() {
//   let min = 20;
//   let max = 30;
//   let result = 0;
//   let oddArr = [];
//   for (let i = min; i <= max; i++) {
//     if (i % 2 !== 0) {
//       // let carryFn = () => (result += i);
//       // carryFn();
//       oddArr.push(i);
//     }
//   }
//   const carrryFn = function (oddArr) {
//     return function (a) {
//       return function (b) {
//         return function (c) {
//           return function (d) {
//             return function (e) {
//               return a + b + c + d + e;
//             };
//           };
//         };
//       };
//     };
//   };
//   return carrryFn(oddArr)(oddArr[0])(oddArr[1])(oddArr[2])(oddArr[3])(
//     oddArr[4]
//   );
// }

// console.log(getOdd());
// getOdd();

// function logCutter(woodCutter) {
//   return woodCutter * 4;
// }

// function furnitureMaker(wood) {
//   const woodPices = logCutter(wood);
//   return woodPices / 2;
// }

// console.log(furnitureMaker(4));

// function oddChecker() {
//   const oddArray = [];
//   for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//       oddArray.push(i);
//     }
//   }
//   return oddArray;
// }

// console.log(oddChecker());

// function createArray(){

// }

// let arrOfOne = Array.from(Array(1000000).keys());
// function sumOfArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// let firstD = Date.now();
// // console.log(arrOfOne);
// console.log(sumOfArray(arrOfOne));
// let lastD = Date.now();
// console.log(lastD - firstD / 1000);
// function arrSort(sortArray) {
//   return sortArray.sort((a, b) => a - b);
// }
// function binarySearch(arr, number) {
//   let sortedArray = arrSort(arr);
//   let min = 0;
//   let max = sortedArray.length - 1;
//   console.log(sortedArray);

//   while (min < max) {
//     let mid = Math.floor((min + max) / 2);
//     if (number > sortedArray[mid]) {
//       min = mid + 1;
//     } else if (number < sortedArray[mid]) {
//       max = mid - 1;
//     } else {
//       return mid;
//     }
//   }
// }

// console.log(binarySearch([5, 4, 8, 2, 1, -6, 9, 8, 7, 3, -5, 9, 56, 25], 5));

// function same(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     let currentIndex = arr2.indexOf(arr1[i] ** 2);
//     if (currentIndex == -1) {
//       return false;
//     }
//     arr2.splice(currentIndex, 1);
//   }
//   return true;
// }

// console.log(same([2, 4, 6], [16, 4, 36]));

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   let sequenceCounter1 = {};
//   let sequenceCounter2 = {};

//   for (let val of arr1) {
//     sequenceCounter1[val] = sequenceCounter1[val] + 1 || 1;
//   }
//   for (let val of arr2) {
//     sequenceCounter2[val] = sequenceCounter2[val] + 1 || 1;
//   }
//   for (let key in sequenceCounter1) {
//     if (!(key ** 2) in sequenceCounter2) {
//       return false;
//     }
//     if (sequenceCounter1[key ** 2] !== sequenceCounter1[key]) {
//       return false;
//     }
//     return true;
//   }
// }

// console.log(same([2, 4, 6, 2], [16, 4, 36, 4]));

// function longestNumber(arr) {
//   // for (let i = 0; i < arr.length; i++) {

//   // }
//   let result = 0;
//   // arr.forEach(function (a) {
//   //   if (a > result) {
//   //     result = a;
//   //   }
//   // });
//   arr.forEach((a) => (a > result ? (result = a) : 0));
//   return result;
// }

// console.log(longestNumber([45, 15, 8, 56, 12, 85, 54]));

function longestStringFind(arr) {
  let result = 0;
  arr.forEach(function (a) {
    if (result <= a.length) {
      result = arr.indexOf(a);
    }
  });
  return arr[result];
}

console.log(
  longestStringFind(["a", "sakib", "bakibilla", "afdgsdfgd", "sfggggggg"])
);
