// ---------------problem-1--------------

// var totalAmount = 1000;
// var orange = 400;
// var apple = 300;

// var orangeAndApplePrice = orange + apple;
// var vakiTaka = totalAmount - orangeAndApplePrice;

// console.log(vakiTaka); //ans: 300

// -----------problem-2---------------

// var math = 75.25;
// var bio = 65;
// var chem = 80;
// var phy = 35.45;
// var bangla = 99.50;

// var totalSub = 5;
// var totalMark = math + bio + chem + phy + bangla;
// var ghodShonkha = (totalMark / 5).toFixed(2);

// console.log(ghodShonkha) //ans: 71.04

// ---------problem-3----------------

// var stringOne = 'I am gong to';
// var stringTwo = 'an awesome webdeveloper';
// var stringOneAndstringTwo = stringOne + ' ' + stringTwo;

// console.log(stringOneAndstringTwo)


// -------------problem-4---------------

// var num1 = 119;
// var num2 = 5;

// var vaghSesh = 119 % 5;
// console.log(vaghSesh) // ans: 4


// -------------problem - 5------------

// var fruits = ['apple', 'banana', 'orange'];

// var index = fruits.indexOf('banana');
// console.log(index);
// fruits[1] = 'Mango';
// console.log(fruits);
// fruits.pop();
// fruits.push('watermelon')
// console.log(fruits)


// --------problem- 6----------

// var marks = 30;


// if (marks >= 80) {
//     console.log('A grade');
// }
// else if (marks >= 60 && marks <= 80) {
//     console.log('B gread');
// }
// else if (marks >= 50 && marks <= 60) {
//     console.log("C gread");
// }
// else if (marks >= 40 && marks <= 50) {
//     console.log("D grade");
// }
// else {
//     console.log("F grade");
// }


// -----Using function---------


// function myMarks(marks) {
//     if (marks >= 80) {
//         console.log('A grade');
//     }
//     else if (marks >= 60 && marks <= 80) {
//         console.log('B gread');
//     }
//     else if (marks >= 50 && marks <= 60) {
//         console.log("C gread");
//     }
//     else if (marks >= 40 && marks <= 50) {
//         console.log("D grade");
//     }
//     else {
//         console.log("F grade");
//     }
// }

// var tomsMarks = myMarks(66);
// var janeMarks = myMarks(40);

// ----------problem -7-------
// var threeNum = [13, 79, 45];
// console.log(Math.max(...threeNum))

// ----------problem - 8------------
// var num1 = 9;
// var num2 = 8;
// var num3 = 9;

// if (num1 == num2 || num2 == num3 || num1 == num3) {
//     console.log('This is somodi bahu tribuj')
// }

// ------------problem- 09-------------

// 1. Display "ajke amar mon valo nei" for 86 times.


// for (var i = 0; i < 39; i++) {
//     console.log('ajke amar mon valo nei');
// }

// ---------------Problem-10------------
// var num1 = 58;
// var num2 = 98;

// var between = num2 - num1;
// console.log(between);


// ---------------Problem-11------------

// let num = 456;
// for (var i = 412; i <= num; i += 2) {
//     console.log(i);
// }

// ---------------Problem-12------------

// let odd = 623;

// for (var i = 581; i <= odd; i += 2) {
//     console.log(i);
// }

// ---------------Problem-13------------

// var arr = [30, 32, 35, 40, 55, 86, 77, 70, 80];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === 86) {
//         break;
//     }
//     console.log(arr[i])
// }

// ------------problem-14-------------

// function make_avg(a, b, c) {
//     let d = (a + b + c) / 3;
//     return d;
// }

// let average = make_avg(10, 20, 22);
// console.log(average)

// ------------problem-15-------------


// function foo() {
//     console.log('foo')
//     bar()
// }
// function bar() {
//     console.log('bar')
// }


// foo();

// ------------problem-16-------------

// function odd_even(num) {
//     if (num % 2 === 0) {
//         console.log(num)
//         return true;
//     } else {
//         return false;
//     }
// }

// let result = odd_even(10);
// console.log(result)


// ------------problem-17-------------

// const signal = 'yellow';

// switch (signal) {
//     case "red":
//         console.log('this is danger');
//         break;
//     case "green":
//         console.log('this is safe you can cross the road');
//         break;
//     case "yellow":
//         console.log('you should stop');
//         break;
//     default:
//         console.log('run')
//         break;
// }

// Using for loop

// let signal = ['yellow', 'red', 'green', 'blue'];

// for (let i = 0; i < signal.length; i++) {
//     if (signal[i] === 'yellow') {
//         console.log('You Should stop');
//     }
//     else if (signal[i] === 'red') {
//         console.log('you are danger')
//     }
//     else if (signal[i] === 'green') {
//         console.log('you can go');
//     }
//     else if (signal[i] === 'blue') {
//         console.log('run run');
//     }
//     else {
//         console.log('go to the hell')
//     }
// }

// ------------problem-17-------------

// let nums = [1, 2, 3, 4];
// let sum = 0
// for (let num of nums) {
//     sum += num;
// }

// let avarage = sum / nums.length;
// console.log(avarage);

// var numbers = [1, 2, 3, 4, 20, 50];

// function avg(numbers) {
//     let result = 0;
//     let avarage = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }
//     avarage = result / numbers.length;
//     return avarage;
// }

// let avarageNum = avg(numbers)
// console.log(avarageNum)

// ------------problem- 18-------------

// function inchToFeet(inches) {
//     const feet = inches / 12;
//     return feet;
// }

// const dadaInches = 140;
// const dadaFeet = inchToFeet(dadaInches);
// console.log(dadaFeet)

// ------------problem- 19-------------

// function milesToKilometre(miles) {
//     let kilo = miles * 1.60934;
//     return kilo;
// }

// let myKilo = 20;
// let kilometre = milesToKilometre(myKilo);
// console.log(kilometre)

// ------------problem- 20-------------

// function KgtoGram(kg) {
//     let gram = kg / 1000;
//     return gram;
// }

// let myGram = 5000;
// let mykg = KgtoGram(myGram)
// console.log(mykg);

// ------------problem- 21-------------

// function evenCheck(isEven) {
//     if (isEven % 2 === 0) {
//         console.log("This is even number");
//         return true;
//     } else {
//         console.log("this is odd number");
//         return false;
//     }
// }

// let myNumber = evenCheck(18);
// console.log(myNumber)

// ------------problem- 22-------------

// function isLeapYear(year) {
//     const remainder = year % 4;
//     if (remainder === 0) {
//         console.log('leapyear', year)
//         return true;
//     } else {
//         console.log('not leapyear', year)
//         return false;
//     }
// }

// isLeapYear(1961)


// ------------problem- 23-------------

// const array = [3, 4, 5, 7, 6, 9, 11, 12];

// function findOddSum(arr) {
//     let oddSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             oddSum += arr[i]
//         }
//     }
//     return oddSum;
// }

// let myOdd = findOddSum(array);
// console.log(myOdd);

// ------------problem- 24-------------

// function factorial(number) {
//     let result = 1;
//     for (let i = number; i >= 1; i--) {
//         result = result * i;
//     }
//     return result;
// }

// let myresult = factorial(9);
// console.log(myresult)

// ------------problem- 25-------------

// function factorial(number) {
//     let num = 1;
//     let result = 1;
//     while (num <= 7) {
//         result = result * num;
//         num++
//     }
//     return result;
// }

// let mynum = factorial(9)
// console.log(mynum)


// ------------problem- 27-------------

// function factorial(number) {
//     let i = number;
//     let result = 0;
//     while (i >= 1) {
//         result = result + i;
//         i--;
//     }
//     return result;
// }

// let mySum = factorial(8);
// console.log(mySum)


// ------------problem- 26-------------

// function getSecound(secound) {
//     let minute = secound / 60;
//     return minute;
// }

// function getHour(minute) {
//     let hour = minute / 60;
//     return hour;
// }
// let myMinute = getSecound(3600);
// let myHour = getHour(myMinute);
// console.log(myMinute, myHour)

// ------------problem- 27-------------

// let array = [2023, 2024, 2025, 2028, 2030];

// function isLeapYear(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 4 === 0) {
//             console.log("this is learyear", arr[i]);
//         } else if (arr[i] % 4 !== 0) {
//             console.log("this is not leap year", arr[i])
//         }
//     }
// }

// let leapyear = isLeapYear(array);


// ------------problem- 27-------------



// function convertCtoF(celsius) {
//     let fahrenheit = (celsius * 9 / 5) + 32;
//     return fahrenheit;
// }

// let myCelsius = convertCtoF(10);
// console.log(myCelsius)


// ------------problem- 28-------------

// function convertFtoC(fahrenheit) {
//     let celsius = (fahrenheit - 32) * 5 / 9;
//     return celsius;
// }

// let myFahrenheit = convertFtoC(50);
// console.log(myFahrenheit)

// ------------problem- 29-------------

// function simoleInterest(amount, fercentag, year) {
//     let interest = (amount * fercentag * year) / 100;
//     let total = amount + interest;
//     return total;
// }

// let myInterest = simoleInterest(1000, 5, 10)
// console.log(myInterest)

// ------------problem- 30-------------

// const principal = 2000;
// const time = 5;
// const rate = .08;
// const n = 12;

// function compoundInterest(p, t, r, n) {
//     const amount = p * (Math.pow((1 + (r / n)), (n * t)));
//     const interest = amount - p;
//     return interest;
// }

// console.log(compoundInterest(principal, time, rate, n))


// ------------problem- 31-------------
// function maxNumber(a, b, c) {
//     if (a > b && a > c) {
//         console.log("A is bigest number");
//     } else if (b > a && b > c) {
//         console.log("B is bigest number");
//     } else {
//         console.log("C is bigest number");
//     }
// }
// maxNumber(30, 80, 70)

// ------------problem- 32-------------

// let a = 10;
// let b = 20;
// let c = 3;
// let minNumber = Math.min(a, b, c);
// console.log(minNumber);

// ------------problem- 33-------------

//FIND A MAX NUMBER IN A ARRAY;

// function maxArray(numbers) {
//     let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         let index = i;
//         let element = numbers[index];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// const height = [120, 100, 250, 251, 144];
// const tallest = maxArray(height);
// console.log(tallest);


// ------------problem- 34------------

// function minArray(numbers) {
//     let minNumber = numbers[0]
//     for (let i = 0; i < numbers.length; i++) {
//         let index = i;
//         let element = numbers[index];
//         if (element < minNumber) {
//             minNumber = element;
//         }
//     }
//     return minNumber;
// }

// const lowest = [10, 50, 60, 2, 70, 1100, 5];
// const tallest = minArray(lowest);
// console.log(tallest);



// ------------problem- 35------------

// function reverseString(string) {
//     let newString = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         let index = i;
//         let element = string[i];
//         newString = newString + element;
//     }
//     return newString;
// }

// const str = "I am a good boy";
// const reversed = reverseString(str);
// console.log(reversed);

// ------------problem- 36------------

// function reverseWord(string) {
//     let words = string.split(' ');
//     let result = [];
//     for (let i = words.length - 1; i >= 0; i--) {
//         let element = words[i];
//         result.push(element);
//     }
//     const reverse = result.join(' ');
//     return reverse;
// }


// const str = "I am a good boy";
// const reversed = reverseWord(str);
// console.log(reversed);


// ------------problem- 37------------

// let names = ["abul", "babul", "kakul", "chabul", "abul", "dabul", "chabul", "kabul"];
// function biryaniList(names) {
//     let result = [];
//     for (let i = 0; i < names.length; i++) {
//         if (result.includes(names[i]) === false) {
//             result.push(names[i])
//         }
//     }
//     return result;
// }

// let array = biryaniList(names);
// console.log(array);

// ------------problem- 38------------

// for (let i = 0; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("foobar")
//     }
//     else if (i % 3 === 0) {
//         console.log("foo")
//     } else if (i % 5 === 0) {
//         console.log("bar")
//     }
// }

// ------------problem- 39------------


// function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairWood = chairQuantity * perChairWood;
//     const tableWood = tableQuantity * perTableWood;
//     const bedWood = perBedWood * bedQuantity;

//     const totalWood = chairWood + tableWood + bedWood;
//     return totalWood;
// }

// const totalWood = woodCalculator(1, 1, 1);
// console.log(totalWood)

// ------------problem- 40------------

// let phones = [
//     { name: "opp", camera: 5, storage: 20, price: 2000 },
//     { name: "opp", camera: 10, storage: 20, price: 5000 },
//     { name: "opp", camera: 40, storage: 20, price: 4000 },
//     { name: "opp", camera: 50, storage: 20, price: 1000 },
// ];


// function cheapestCamera(phones) {
//     let cheapest = phones[0];
//     for (let i = 0; i < phones.length; i++) {
//         if (phones[i].camera > cheapest.camera) {
//             cheapest = phones[i];
//         }
//     }
//     return cheapest;
// }

// const myCamera = cheapestCamera(phones);
// console.log(myCamera)


// ------------problem- 41 ------------

// let phones = [
//     { name: "opp", camera: 5, storage: 20, price: 2000 },
//     { name: "opp", camera: 10, storage: 20, price: 5000 },
//     { name: "opp", camera: 40, storage: 20, price: 4000 },
//     { name: "opp", camera: 50, storage: 20, price: 1000 },
// ];



// function totalCost(products) {
//     let sum = 0;
//     for (let i = 0; i < products.length; i++) {
//         const product = products[i];
//         sum = sum + product.price;
//     }
//     return sum;
// }

// const expene = totalCost(phones);
// console.log(expene);

// ------------problem- 42 ------------

// function ticketPrice(ticketQuantity) {
//     const first100Price = 100;
//     const secound100Price = 90;
//     const restTicketPrice = 70;

//     if (ticketQuantity <= 100) {
//         const first100Rate = ticketQuantity * first100Price;
//         return first100Rate;
//     }
//     else if (ticketQuantity <= 200) {
//         const first100Rate = 100 * first100Price;
//         const secoundTicketQuantity = ticketQuantity - 100;
//         const restTicketRate = secoundTicketQuantity * secound100Price;
//         const totalPrice = first100Rate + restTicketRate;
//         return totalPrice;
//     }
//     else {
//         const first100Rate = 100 * first100Price;
//         const secound100Rate = 100 * secound100Price;
//         const restTicketQuantity = ticketQuantity - 200;
//         const restTicketRate = restTicketQuantity * restTicketPrice;
//         const totaPrice = first100Rate + secound100Rate + restTicketRate;
//         return totaPrice;
//     }
// }

// const price = ticketPrice(210);
// console.log(price);

// ------------problem- 43 ------------

// function myNumber(num1, num2) {
//     if (typeof num1 !== "number" || typeof num2 !== "number") {
//         return "please enter a number";
//     }
//     return num1 + num2;
// }

// const result = myNumber(10, 20);
// console.log(result)


// ------------problem- 44 ------------

/*--------Feet to Inche-----------*/

// function feetToInch(feets) {
//     const inche = 12 * feets;
//     return inche;
// }

// const Myfeets = feetToInch(12);
// console.log(Myfeets);

// ------------problem- 45 ------------

/*--------Centimetar to Meter-----------*/

// function centimeterToMeter(centimetar) {

//     const meter = centimetar / 100;
//     return meter;
// }

// const givenCentimeter = centimeterToMeter(300);
// console.log(givenCentimeter);

// ------------problem- 46 ------------

/*-----------Paper count------------*/

// function paperRequirements(book1, book2, book3) {
//     const book1Paper = 100;
//     const book2Paper = 200;
//     const book3Paper = 300;

//     const fristBook = book1Paper * book1;
//     const secoundBook = book2Paper * book2;
//     const thirdBook = book3Paper * book3;

//     const totalBookPaper = fristBook + secoundBook + thirdBook;
//     return totalBookPaper;
// }

// const booksPaper = paperRequirements(1, 2, 3);
// console.log(booksPaper);

// ------------problem- 47 ------------

/*----------long name--------------*/

// function bestFriend(array) {
//     let longestName = array[0];
//     for (let i = 0; i < array.length; i++) {
//         let element = array[i];
//         if (element.length > longestName.length) {
//             longestName = element;

//         }
//     }
//     return longestName;
// }

// friends = ["Rakib", "Emon", "Riaz", "Arman", "Mahmudul Hasan", "Noyon"];
// const LongName = bestFriend(friends);
// console.log(LongName);


// ------------problem- 48 ------------

/*----------Only positive number--------------*/

// function onlyPositive(num) {
//     const positiveArray = [];
//     for (let i = 0; i < num.length; i++) {
//         let element = num[i];
//         if (element < 0) {
//             break;
//         }
//         else {
//             positiveArray.push(element);
//         }
//     }
//     return positiveArray;
// }

// const numbers = [1, 20, 39, 2, 3, -5, 10, 30, 40];
// const givenNumber = onlyPositive(numbers);
// console.log(givenNumber);



// ------------problem- 49 ------------

// function sum(i) {
//     if (i == 1) {
//         return 1;
//     }
//     return i + sum(i - 1);
// }

// 5 + (5 - 1);
// 5 + 4 + (3);
// 5 + 4 + 3 + (2);
// 5 + 4 + 3 + 2 + (1);
// 5 + 4 + 3 + 2 + 1;

// let result = sum(5);
// console.log(result);

// ------------problem- 50 ------------

// function factorial(i) {
//     if (i == 1) {
//         return 1;
//     }
//     return i * factorial(i - 1);
// }

// 5 * (5 - 1);
// 5 * 4 * 3
// 5 * 4 * 3 * 2
// 5 * 4 * 3 * 1


// const result2 = factorial(5);
// console.log(result2);


// ------------problem- 50 ------------

// const products = [
//     { id: 0, name: "iphone 5", price: 1000 },
//     { id: 1, name: "iphone 6", price: 1000 },
//     { id: 2, name: "iPhone 7", price: 1000 },
//     { id: 3, name: "iphone 8", price: 1000 },
//     { id: 4, name: "walton 12", price: 1000 },
//     { id: 5, name: "walton 13", price: 1000 },
// ];

// function matchProducts(products, search) {
//     const matched = [];
//     for (const product of products) {
//         if (product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
//             matched.push(product.name);
//         }
//     }
//     return matched;
// }


// const myObject = matchProducts(products, "Phone");
// // console.log(myObject);

// ------------problem- 51 ------------

// function compare(a, b) {
//     if (a == b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const result = compare(15, "15");
// console.log(result);

// ------------problem- 52 ------------

// function compare(a, b) {
//     if (a.toString() === b) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const result = compare(25, 25);
// console.log(result);


// ------------problem- 53 ------------

// const multiply = (a, b, c) => a * b * c;

// console.log(multiply(2, 2, 2))

// ------------problem- 54 ------------

// const line1 = 'I am Web developer.';
// const line2 = 'I love to ocde.';
// const line3 = 'I love to eat biryani.';

// console.log(`${line1} ${line2} ${line3}`);

// ------------problem- 55 ------------


// const getSum = (a, b = 10) => a + b;

// console.log(getSum(10))

// const friends = ['Emon', 'Rakib', 'Riaz', 'Hasan', 'Arman hossain'];
// const evenLength = [];

// const even = (array) => {

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element.length % 2 === 0) {
//             evenLength.push(element);
//         }
//     }
//     return evenLength;
// }

// console.log(even(friends))

// ------------problem- 56 ------------

// const numbers = [1, 2, 3, 4, 6];
// const squareNumber = (array) => {
//     let sumOfArray = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const square = Math.pow(element, 2);

//         sumOfArray = sumOfArray + square;
//     }
//     return sumOfArray;
// }

// console.log(squareNumber(numbers))

// ------------problem- 57 ------------


// const arra1 = [1, 2, 3, 4];
// const arra2 = [5, 6, 7, 8];

// const maxNumber = (array1, array2) => {
//     const newArray = [...array1, ...array2];
//     const maxNum = Math.max(...newArray);
//     return maxNum;
// }
// console.log(maxNumber(arra1, arra2));

// ------------problem- 58 ------------

// const numbers = [1, 3, 5, 7, 9];

// const array = numbers.map(n => n + 1);
// console.log(array);

//Using for loop

// let newNum = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     newNum.push(element + 1);
// }
// console.log(newNum)

// ------------problem- 59 ------------

// const nums = [33, 50, 79, 90, 101, 30];
// const array = nums.filter(n => n % 10 === 0);
// console.log(array)

// ------------problem- 60 ------------

// const nums = [33, 50, 79, 90, 101, 30];

// const array = nums.find(x => x % 10 === 0);
// console.log(array)

// ------------problem- 61 ------------

// const array = [1, 9, 17, 22];

// const num = array.reduce((x, y) => x + y);

// console.log(num);

// ------------problem- 62 ------------

// const people = [
//     { name: "Meena", age: 20 },
//     { name: "Rina", age: 15 },
//     { name: "Suchorita", age: 22 },
// ];


// let sumAge = 0;
// for (let i = 0; i < people.length; i++) {
//     sumAge = sumAge + people[i].age;
//     console.log(sumAge)
// }


// const obj = people.reduce((x, y) => {
//     return x + y.age;

// }, 0)
// console.log(obj)




