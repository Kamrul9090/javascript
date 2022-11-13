// Practice-01

// setTimeout(() => {
//     console.log("this is set time out")
// }, 3500);

// Practice-02


// const userNumber = () => {
//     const number = prompt('please give a number')
//     const parse = JSON.parse(number)

//     const amount = parse + 200;
//     alert(`Amount ${amount}`);
// }


// Practice -03

const widowLoad = () => {
    const isTrue = confirm('do you wanna to see your location');
    if (!!isTrue) {
        console.log('http://127.0.0.1:5500/practice/index.html');
        return;
    }
    else {
        console.log(false);
        return;
    }
}


// Practice -04

// const setitem = (name) => {
//     localStorage.setItem('name', name);
// }
// setitem('rakib')
// const getitem = () => {

//     const name = localStorage.getItem('name')
//     console.log(name);
// }

// Practice -05

// let counting = 0;

// const increaseNum = () => {
//     document.getElementById('btn-plus').addEventListener('click', function () {
//         const para = document.getElementById('count');
//         counting++;
//         const value = para.innerText;
//         let number = parseInt(value);
//         para.innerText = counting;
//         localStorage.setItem('number', number);
//         return number;
//     })
// }


// increaseNum()


