// destractureing

var kamrul = ['kamrul hasan', 21, 'programmer'];

// var name = kamrul[0];
// var age = kamrul[1];
// var profession = kamrul[2];
// console.log(name, age, profession)

// ES6----------

// const [name, age, profession] = kamrul;
// console.log(name, age, profession);

// var myName = {
//     name: 'kamrul',
//     age: 15,
//     profession: 'student',
// }

// console.log(myName.age);

// const { name, age, profession } = myName;
// console.log(name, age, profession)

// const { name: myname, age: myage, profession: myprofession } = myName;
// console.log(myname, myage)

// var comObj = {
//     anotherObj: {
//         anotherNewObj: {
//             title: 'javascript'
//         }
//     }
// };

// const { anotherObj: { anotherNewObj: { title: obj } } } = comObj;
// console.log(obj)
// const user = {
//     JhoneDoe: {
//         age: 32,
//         email: 'kamrul.9090@gmail.com',
//     }
// }

// const { JhoneDoe: { age: userAge, email: userEmain } } = user;
// console.log(userAge, userEmain);

// const [a, b, , , , c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c)

// const [a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr)
// console.log(a, b)

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var arr1 = Array.prototype.slice(arr);
// console.log(arr1)

// const person = {
//     name: "taylor",
//     sayHello: function () {
//         return `Hello my name is ${this.name}`;
//     }
// }

// let newName = person.sayHello();
// console.log(newName)

// var SpaceShuttle = function (targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }

// var zenus = new SpaceShuttle("jupiter")
// console.log(zenus.targetPlanet)

// class SpaceShuttle {
//     constructor(targetPlanet) {
//         this.targetPlanet = targetPlanet;
//     }
// }
// const zenus = new SpaceShuttle("jupiter");
// console.log(zenus.targetPlanet)

// function popShift(arr) {
//     let popped; // Change this line
//     let shifted; // Change this line
//     return [shifted, popped];
// }

// console.log(popShift(['challenge', 'is', 'not', 'complete']));

// let a = ['challenge', 'is', 'not', 'complete']

// console.log(a.shift())

// const arr = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];
// console.log(arr.slice(2, 4))

// function greaterThanTen(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 10) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(greaterThanTen([2, 12, 8, 80, 0, 1]))

// function filteredArray(arr, elem) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].indexOf(elem) == -1) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }


// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// function movie() {
//     return "Din-The day";
//     return "Poran";
//     return "Hawa";
// }
// console.log(movie());



