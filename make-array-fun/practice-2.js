// const arr1 = [1, 2, 3];
// const arr2 = [6, 7];
// const arr3 = [9, 9, 9];
// arr1[arr1.length] = 4;
// arr1.push(5);
// // arr1.push(...arr2)
// Array.prototype.push.apply(arr1, arr2);
// arr1.unshift(1, 1, 1);
// // arr1.unshift(...arr3)
// Array.prototype.unshift.apply(arr1, arr3)
// // console.log(arr1);

// const arrS1 = [1, 2, 3, 5, 9];
// const arrS2 = [6, 7, 8]
// arrS1.splice(3, 0, 4);
// arrS1.splice(5, 0, ...arrS2)
// // console.log(arrS1)


// Array of Objects
// const students = [
//     { id: 1, name: 'Nayem' },
//     { id: 2, name: 'Shegufa' },
//     { id: 3, name: 'Shayaike' },
//     { id: 4, name: 'Setu' },
//     { id: 5, name: 'Mehedi' },
// ];

// const givenID = 3;
// const updatedName = "kamrul Hasan";

// for (let i = 0; i < students.length; i++) {
//     if (students[i].id === givenID) {
//         students[i].name = updatedName;
//         break;
//     }
// }

// console.log(students)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let deleted = 6;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === deleted) {
//         numbers.splice(i, 2);
//         break;
//     }
// }
// console.log(numbers);

// numbers = numbers.filter((item) => item !== deleted);
// console.log(numbers);

// delete numbers[1];

// console.log(numbers);


// let x = [1, 2, 3];
// let y = x;
// // x = [];
// x.length = 0;
// console.log(x, y);


// while (numbers.length) numbers.pop();
// console.log(numbers)



// const arra = [1, 2, 3];
// const arrb = [4, 5, 6];
// const arrc = arra.concat(arrb);
// const arrd = [...arra, ...arrb];
// const arre = [].concat(arra, arrb, 9, 9, 9);
// console.log(arre);


// const arr = [1, 2, 3, 4, 5];
// const cloned = arr.slice();
// console.log(arr === cloned)
// console.log(arr, cloned)

// function toArray() {
//     return Array.prototype.slice.call(arguments);
// }

// const argArray = toArray(1, 3, 45, "test");
// console.log(argArray);


