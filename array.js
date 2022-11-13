const arr1 = [1, 2, 3];
const arr2 = [8, 9];

arr1[arr1.length] = 4;
// console.log(arr1)

arr1.push(5);
// arr2.push(...arr1);
// console.log(arr2)

// Array.prototype.push.apply(arr1, arr2);
// console.log(arr1)

// const arrP1 = [1, 2, 3, 4];
// const arrp2 = [5, 6, 7, 8];
// arrP1.unshift(10);


function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}

const result1 = sum(5);
// console.log(result1);

// let factorial = 1;
// for (let i = 5; i >= 1; i--) {
//     factorial = factorial * i;
// }
// console.log(factorial)

// function factoril

const numbers = [10, 20, 11, 21, 23];

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number)
// }

// let num = 0;
// for (const number of numbers) {
//     console.log(number);
// }


const products = [
    { id: 1, name: "walton-1 phone", price: 1000 },
    { id: 2, name: "walton-2", price: 2000 },
    { id: 3, name: "walton-3 phone", price: 3000 },
    { id: 4, name: "iPhone", price: 4000 },
    { id: 5, name: "walton-5", price: 5000 },
];

// for (const product of products) {
//     console.log(product);
// }


function matchProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product.name);
        }
    }
    return matched;
}

const givenProduct = matchProducts(products, "Phone");
console.log(givenProduct);