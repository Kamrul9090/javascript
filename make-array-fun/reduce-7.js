function myReduce(arr, cb, init) {
    let acc = init, start = 0;
    if (!init) {
        acc = arr[0];
        start = 1;
    }
    for (let i = start; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;
}

const array = [1, 2, 3, 4, 5];

const sum = myReduce(array, (acc, cur) => {
    return acc + cur;
}, 10);
console.log(sum)
