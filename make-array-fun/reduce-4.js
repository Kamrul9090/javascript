let nestedArray = [[1, 2], 3, [4, 5]];
const flatArray1 = nestedArray.flat();
// console.log(flatArray1)

const flatArray2 = nestedArray.reduce((acc, curr) => {
    return acc.concat(curr);
}, [])

console.log(flatArray2);