const arr = [1, 2, 3, 4, 5];

function sumFunc(acc, curr) {
    return acc + curr;
}

// const sum = arr.reduce(sumFunc);
// console.log(sum)

const avg = arr.reduce((acc, cur, index, arr) => {

    acc += cur;
    if (index === arr.length - 1) {
        return acc / arr.length;
    }
    return acc;
})
// console.log(avg)

const num = [1, 2, 3, 4, 5];

function sumFunc(a, b, c, d) {
    console.log(a, b, c, d)
    return a + b;
}

const func = num.reduce(sumFunc, 10);
console.log(func)