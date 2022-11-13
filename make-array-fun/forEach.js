let names = [
    "Stack learner",
    "Stack learner",
    "Stack learner",
    "Stack learner",
];

// for (let i = 0; i < names.length; i++) {
//     console.log(names);
// }



// for (let i = 0; i < names.length; i++) {
//     console.log(`${i + 1}: ${names[i]}`);
// }


// function reuse(arr, logic) {
//     for (let i = 0; i < arr.length; i++) {
//         logic(arr[i], i, arr)
//     }
// }

// function log(value, index) {
//     console.log(value + index)
// }

// function logic(v, i, a) {
//     console.log(v, i, a);
// }


// reuse([1, 2, 3], logic);
// reuse([1, 2], log)


function myForeach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}

const nums = [1, 2, 3, 4];
let sum = 0;


myForeach(nums, function (v) {
    sum += v;
});
console.log(sum)

// myForeach(names, (value, i) => {
//     console.log(`${i + 1}: ${value}`);
// })


names.forEach((value, index) => {
    console.log(`[Array] ${index + 1}: ${value}`);
})