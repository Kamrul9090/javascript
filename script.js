// const user = {
//     name: 'jhon',
//     age: '30'
// };

// const { name, age } = user;


// let array = [2, 10, 23, 32];
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(Array.isArray(array));
// console.log(array.concat(array2));
// console.log(array.includes(10));
// console.log(array2.slice(2, 6))
// console.log(array2.splice(2, 5, 1, 1, 1, 1, 1, 1, 1, 1))
// console.log(array2)


// let duck = {
//     name: "Aflac",
//     numLegs: 2,
//     sayName: function () {
//         return "the name of this duck is " + duck.name + "."
//     },
// }

// console.log(duck.sayName());

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function () {
//         return "This dog has " + dog.numLegs + " legs."
//     }
// };

// console.log(dog.sayLegs());

// const isNum = num => {
//     if (typeof num === 'number') {
//         console.log('this is a number');
//     }
//     else {
//         return 'not a number'
//     }
// }

// const number = isNum(.342)
// console.log(number)


// let storeFalsyValue = true;

// if (!storeFalsyValue) {
//     console.log('Nothing to show!');
// } else {
//     console.log("You are amazing!");
// }


// const arrowFunction = (num1, num2, str) => {
//     if (str === 'add') {
//         const add = num1 + num2;
//         return add;
//     }
//     else if (str === 'subtract') {
//         return num1 - num2;
//     }
//     else if (str === 'multiply') {
//         return num1 * num2;
//     }
//     else if (str === 'divide') {
//         return num1 / num2;
//     }
//     else if (str === 'modulus') {
//         return num1 % num2;
//     }
//     else {
//         return 'Invalid oprration';
//     }
// }


// const oprration = arrowFunction(10, 20, 'asdsdf');
// console.log(oprration);

const numbers = [100, 30, 20];

// const [x, y] = [100, 30];
const [x, y, z] = numbers;
// console.log(x, y, z);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

const [i, j] = boxify(100, 111);
// console.log(i, j);



// const [movie1, movie2] = students.movies

// console.log(movie1, movie2);

const { name, age } = { name: 'abu', age: 10 };
// const {name, age} = {name: 'abu', age: 11};
// console.log(name, age);

const employer = {
    name: 'habu',
    skills: ['html', 'js', 'react'],
    machine: 'mac',
    specification: {
        height: 40,
        weight: 20,
        watch: {
            color: 'red',
            price: 400,
            brand: 'garmin'
        }
    }
}


const { skills, specification } = employer;
const { watch } = employer.specification;

// console.log(skills, watch)


const classes = {
    name: 'babu',
    age: 11,
    movies: ['king khan', 'dhakar mastan']
}

// console.log(Object.keys(classes));
// console.log(Object.values(classes));

let person = null;
console.log(person ? person : "person is null");
