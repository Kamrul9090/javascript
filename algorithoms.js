// ------------problem- 01-------------



// function convertCtoF(celsius) {
//     let fahrenheit = (celsius * 9 / 5) + 32;
//     return fahrenheit;
// }

// let myCelsius = convertCtoF(10);
// console.log(myCelsius)


// ------------problem- 02-------------

// function convertFtoC(fahrenheit) {
//     let celsius = (fahrenheit - 32) * 5 / 9;
//     return celsius;
// }

// let myFahrenheit = convertFtoC(50);
// console.log(myFahrenheit)

// ------------problem- 03-------------

// function reverseString(str) {
//     let result = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }

//------------- Using while loop

// function reverseString(str) {
//     let result = "";
//     let i = str.length - 1;
//     while (i >= 0) {
//         result += str[i];
//         i--;
//     }
//     return result;
// }

// let myStr = reverseString("hello");
// console.log(myStr)

// ------------problem- 04-------------

// function factorialize(num) {
//     let factorial = 1;
//     for (let i = 1; i <= num; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// let myFactorial = factorialize(5);
// console.log(myFactorial)

// ------------problem- 05-------------

// function factorialize(num) {
//     let factorial = 1;
//     for (let i = num; i >= 1; i--) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// let myFactorial = factorialize(5);
// console.log(myFactorial)

// ------------problem- 06-------------

// function factorialize(num) {
//     let factorial = 1;
//     let i = num;
//     while (i >= 1) {
//         factorial *= i;
//         i--;
//     }
//     return factorial;
// }


// let myFactorial = factorialize(5);
// console.log(myFactorial)

// ------------problem- 07-------------

// function largestOfFour(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let maxNumber = Math.max(...arr[i]);
//         result.push(maxNumber);
//     }
//     return result;
// }

// let myNum = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// console.log(myNum);

// ------------problem- 07-------------

// function confirmEnding(str, target) {
//     if (str.substr(-target.length) === target) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(confirmEnding("Open sesame", "same"));
// console.log(confirmEnding("Bastian", "n"));



// ------------problem- 08-------------

// function findLongestWordLength(str) {
//     let words = str.split(' ');
//     let longestWord = words[0];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord.length;
// }

// let longarray = findLongestWordLength("The quick brown fox jumped over the lazy dog");
// console.log(longarray);

// ------------problem- 09-------------


// function lowestString(string) {
//     words = string.split(" ");
//     smallWord = words[0];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length < smallWord.length) {
//             smallWord = words[i];
//         }
//     }
//     return smallWord.length;
// }

// let givenString = lowestString("The quick brown fox jumped over the lazy dog");
// console.log(givenString);

// ------------problem- 10-------------

// function repeatStringNumTimes(str, num) {
//     let string = "";
//     while (num > 0) {
//         string += str;
//         num--;
//     }
//     return string;
// }

// console.log(repeatStringNumTimes("abc", 3));

// ------------problem- 11-------------
/*--------------
Trancate a string
----------------
*/
// function truncateString(str, num) {
//     if (str.length > num) {
//         return str.slice(0, num).concat("...");
//     }
//     else if (str.length === num) {
//         return str;
//     }
//     else if (str.length < num) {
//         return str;
//     }
// }

// const mystr = truncateString("A-tisket a-tasket A green and yellow basket", 8);
// console.log(mystr);


// ------------problem- 12-------------
/*--------------
Find element
----------------
*/

// function findElement(arr, func) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         num = arr[i];
//         if (func(num)) {
//             return num;
//         }
//     }
//     return undefined;
// }

// let myfunction = findElement([1, 5, 3], num => num % 2 === 0);
// console.log(myfunction);


// ------------problem- 13-------------

/*--------------
Boo who
----------------
*/

// function booWho(bool) {
//     if (typeof bool === 'boolean') {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(booWho([1, 2, 3]));



// ------------problem- 14-------------

/*--------------
Title Case a Sentence
----------------
*/

// function titleCase(str) {
//   let words = str.split(" ");
//   let newString = [];
//   for (let i = 0; i < words.length; i++) {
//     let element = words[i];
//     let sliceLetter = element.charAt(0);
//     let uppercase = sliceLetter.toUpperCase();
//     const lowercase = element.substring(1).toLowerCase();
//     newString.push(uppercase + lowercase);
//   }
//   return newString.join(" ");
// }

// console.log(titleCase("sHoRt AnD sToUt"));


// ------------problem- 15-------------

/*--------------
Mutations
----------------
*/

// function mutation(arr) {
//   let test = arr[1].toLowerCase();
//   let target = arr[0].toLowerCase();
//   for (let i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;
//   }
//   return true;
// }

// console.log(mutation(["hello", "hey"]));


// ------------problem- 15-------------

/*--------------
Chunky Monkey
----------------
*/

// function chunkArrayInGroups(arr, size) {
//   let newArr = [];
//   while (arr.length > 0) {
//     newArr.push(arr.splice(0, size));
//   }
//   return newArr;
// }
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));


// ------------problem- 16-------------

/*--------------
Slice and Splice
----------------
*/

// function frankenSplice(arr1, arr2, n) {
//   let localArray = arr2.slice();
//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i]);
//     n++;
//   }
//   return localArray;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// ------------problem- 17-------------

/*--------------
Falsy Bouncer
----------------
*/

// function bouncer(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       newArray.push(arr[i])
//     }
//   }
//   return newArray;
// }

// console.log(bouncer([7, "ate", "", false, 9]));


// ------------problem- 18-------------

/*--------------
Falsy Bouncer
----------------
*/

// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) {
//       return i;
//     }
//   }
//   return arr.length;
// }

// console.log(getIndexToIns([40, 60], 50));

// ------------problem- 19-------------

// function sumAll(arr) {
//     let sum = 0;
//     for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumAll([1, 4]));

// ------------problem- 20-------------


// function sumAll(arr) {
//     let max = Math.max(arr[0], arr[1]);
//     let min = Math.min(arr[0], arr[1]);

//     let sumBetween = 0;
//     for (let i = min; i <= max; i++) {
//         sumBetween += i;
//     }
//     return sumBetween;
// }

// console.log(sumAll([1, 4]));

// ------------problem- 21-------------

// const sumAll = arr => {
//     const startNum = arr[0];
//     const endNum = arr[1];
//     const numCount = Math.abs(startNum - endNum) + 1;
//     console.log(numCount)
//     const sum = ((startNum + endNum) * numCount / 2);
//     return sum;
// }

// console.log(sumAll([1, 4]));

// ------------problem-22-------------


// function diffArray(arr1, arr2) {
//     const newArr = [];
//     function onlyInFirst(first, secound) {
//         for (let i = 0; i < first.length; i++) {
//             if (secound.indexOf(first[i]) === -1) {
//                 newArr.push(first[i]);
//             }
//         }
//     }

//     onlyInFirst(arr1, arr2);
//     onlyInFirst(arr2, arr1);

//     return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))


// ------------problem-23-------------

function diffArray(arr1, arr2) {
    const newArr = [];
    return arr1.concat(arr2).filter(item => !arr1.includes(item));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
