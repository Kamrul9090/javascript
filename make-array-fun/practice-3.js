// Stack Implimentation
const MAX_SIZE = 10;

class Stack {
    constructor() {
        this.top = -1;
        this.list = new Array(MAX_SIZE);
    }

    push(item) {
        if (this.top >= MAX_SIZE - 1) {
            console.log("Stack Overflow");
            return false;
        }
        this.list[++this.top] = item;
        return true;
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
            return false;
        } else {
            let item = this.list[this.top];
            delete this.list[this.top];
            this.top--;
            return item;
        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
            return false;
        } else {
            return this.list[this.top];
        }
    }

    isEmpty() {
        return this.top < 0;
    }
}


const stack = new Stack();
const text = "HELLO";

for (let i = 0; i < text.length; i++) {
    stack.push(text.charAt(i));
}

let reverseStr = '';

while (!stack.isEmpty()) {
    reverseStr += stack.pop();
}
// console.log(reverseStr)


const text1 = "HELLO";
const jsStack = [];

for (let i = 0; i < text1.length; i++) {
    jsStack.push(text1.charAt(i));
}

let result1 = '';
while (jsStack.length) result1 += jsStack.pop();

// console.log(result1);   

