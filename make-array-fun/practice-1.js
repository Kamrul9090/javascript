// const arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[100] = 30;
// console.log(arr.length, ":", arr);


// const names = [
//     "kamrul",
//     "hasan",
//     "rakib",
//     "babu"
// ]
// names[names.length] = "emon";
// console.log(names);
// console.log(names.length);

// Constructor pattern

// const a1 = new Array();
// const a2 = new Array(5);

// console.log(a2, a2.length);

// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const times = (a, b) => a * b;
// const div = (a, b) => a / b;
// const mod = (a, b) => a % b;

// const funcs = [sum, sub, times, div, mod];
// const a = 10,
//     b = 20;

// for (let i = 0; i < funcs.length; i++) {
//     const result = funcs[i](a, b);
//     console.lo
//         (`${funcs[i].name} Result = ${result}`);
// }


// const pointTable = [
//     [0, 0],
//     [3, 5],
//     [5, 7],
//     [10, 23],
// ];

// for (let i = 0; i < pointTable.length; i++) {
//     console.log(`Point ${i} - x= ${pointTable[i][0]} and y=${pointTable[i][1]}`);
// }

// const numbers = [
//     [1, 2, 3],
//     [2, 5, 4],
//     [3, 4, 5],
//     [8, 3, 6],
// ]

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers[i].length; j++) {
//         console.log(`Points [${i}, ${j}] = ${numbers[i][j]}`);
//     }
// }

// const matrixA = [
//     [1, 3],
//     [1, 0],
//     [1, 2],
// ];
// const matrixB = [
//     [0, 0],
//     [7, 5],
//     [2, 1],
// ];

// function matrixSum(matrixA, matrixB) {
//     let result = [];
//     for (let i = 0; i < matrixA.length; i++) {
//         let row = [];
//         for (let j = 0; j < matrixA[i].length; j++) {
//             row.push(matrixA[i][j] + matrixB[i][j])
//         }
//         result.push(row);
//     }
//     return result;
// }


// const matrixC = matrixSum(matrixA, matrixB);
// console.log(matrixC);


// const arr = [1, 2, 3, 4, 5, 6, 7];

// const m = arr[3];
// const n = arr[4];
// const x = 1, y = 0;

// console.log(m, n, arr[x], arr[y], arr[x + y + 1])

// const arr = [1, 2, 3, 4, 5, 6, 7, 32, 30];
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// console.log(largest)



// const arr = [1, 7, 3, 5, 12, 10];

// let largestNum = arr[0];
// let secoundLargestNum = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largestNum) {
//         secoundLargestNum = largestNum;
//         console.log(secoundLargestNum);
//         largestNum = arr[i]
//         console.log(largestNum)
//     }
//     else if (arr[i] !== largestNum && arr[i] > secoundLargestNum) {
//         secoundLargestNum = arr[i];
//     }
// };

// console.log("Largest Number in the array is " + largestNum);
// console.log("Second Largest Number in the array is " + secoundLargestNum);



// const arr2 = new Array(10);
// arr2.fill(0, 0, 6);
// console.log(arr2)

// const response = new Array(9);
// response.fill(false);
// for (let i = 0; i < response.length; i++) {
//     const rand = Math.floor(Math.random() * 10 + 1);
//     response[i] = rand > 5 ? 'X' : 'O';
// }
// console.log(response);

// let names = ["kamrul", "hasan", "babu", "Rakib"];

// function update(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = `${i + 1}. ${arr[i]}`;
//     }
//     return arr;
// }

// let myNames = update(names)
// update(names);
// console.log(names);
// console.log(myNames);
// console.log(myNames === names);