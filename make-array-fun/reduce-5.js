const arr = [1, 2, 3, 4, 5, 6];

const map = arr.map(x => [x * 2]).flat();
// console.log(map)

const flatMap = arr.flatMap(x => x * 2);
// console.log(flatMap)

const flatMap1 = arr.flatMap((x) => ["index " + x, x * 2]);

// console.log(flatMap1)

const reduceFlatMap = arr.reduce((acc, cur) => {
    return acc.concat(cur * 2);
}, [])
// console.log(reduceFlatMap)


const reduceFlatMap1 = arr.reduce((acc, cur) => {
    return acc.concat(["index " + cur, cur * 2]);
}, [])
// console.log(reduceFlatMap1)