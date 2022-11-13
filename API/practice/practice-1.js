
// Practice -01 

const student = {
    class: {
        name: 'Kamrul Hasan',
        Role: 10,
        section: 'b',
    },
    subject: ['bangla', 'English', 'Math', 'chemestry'],

    exam: function () {
        return `${this.class.name} You are passed in ${this.subject[1]} exam`
    },
    isJinius: false,
    goodInEnglish: true,
}

// console.log(student.goodInEnglish)


// Practice -02

const thirdElement = `Name: ${student.class.name} Roll: ${student.class.Role} you are failed in ${student.subject[2]}`;
// console.log(thirdElement)

// Practice -03

const number = () => {
    return 89;
}
// console.log(number());

const number2 = (num) => {
    return num / 17;
}

// console.log(number2(34))

const number3 = (a, b) => {
    const first = a + 7;
    const secound = b + 5;
    const third = first + secound;
    if (third % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const result = number3(7, 5);
// console.log(result);


// Practice -04

const arr = array => {
    let num = 0;
    return array.reduce((acc, curr) => {
        num = acc += curr;
        return num;
    }, 0)
}



// const result2 = [1, 2, 3, 4, 5].reduce((a, b) => a += b, 0);
const result3 = arr([1, 2, 3, 4, 5]);
// console.log(Math.pow(result3, 2));

// Practice -05

const arr2 = [7, 14, 21, 28, 35];

const result4 = arr2.map(v => v / 7);
// console.log(result4);

