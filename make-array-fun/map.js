let names = [
    'Stack Learner',
    'Stack School',
    'Stack Consultancy',
    'Stack Solution',
    'Stack Tech',
]

// function reuse(arr, logic) {
//     for (let i = 0; i < arr.length; i++) {
//         logic(arr[i], i, arr);
//     }
// }

// // Extract length
// result1 = [];
// reuse(names, (value) => {
//     result1.push(value.length);
// })

// console.log(result1);

// // Uppercase array

// result2 = []

// reuse(names, (value) => {
//     result2.push(value.toUpperCase())
// })
// console.log(result2);

// // slice Array


// function sliced(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr);
//     }
// }

// const result3 = [];

// sliced(names, value => {
//     result3.push(value.substr(6))
// })
// console.log(result3);


// reuse and map

function reuseAndMap(arr, logic) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(logic(arr[i], i, arr));
    }
    return result;
}

const lengths = reuseAndMap(names, (value) => value.length);
const uppers = reuseAndMap(names, (value) => value.toUpperCase());
const sliced = reuseAndMap(names, (value) => value.substr(6));
// console.log(lengths, uppers, sliced);

// Using Map Funtion
const length1 = names.map((value) => value.length);
const upper1 = names.map((value) => value.toLocaleLowerCase());
const sliced1 = names.map((value) => value.slice(6, value.length));

// console.log(length1);
// console.log(upper1);
// console.log(sliced1);


const studentArray = [
    { id: 1, name: 'Hm Nayem', gpa: 3.99, email: 'nayem@gmail.com' },
    { id: 2, name: 'Shegufa Taraanjum', gpa: 3.87, email: 'shegufa@gmail.com' },
    { id: 3, name: 'Tamim', gpa: 3.8, email: 'tamim@gmail.com' },
    { id: 4, name: 'Asief Mahir', gpa: 2.99, email: 'mahir@gmail.com' },
    { id: 5, name: 'Abir Azim', gpa: 2.6, email: 'abirAzim@gmail.com' },
];


const mappedStudent = studentArray.map(value => {
    return {
        ...value,
        title: `Hello ${value.name} - Your result is published`,
        msg: `Hello ${value.name} your result is published and you have got CGPA ${value.gpa}. You have ${value.gpa >= 3 ? "passed" : "failed"}`
    }
})

console.log(mappedStudent)