class Queue {
    constructor() {
        this.front = 0;
        this.rear = 0;
        this.queue = new Array(10);
    }

    enqueue(item) {
        if (this.rear === this.queue.length) {
            console.log("Queue is full");
            return false;
        }
        return this.queue[this.rear++] = item;
    }
    dequeue() {
        if (this.front === this.rear) {
            console.log("Queue is empty");
            return;
        }
        for (let i = this.front; i < this.rear - 1; i++) {
            this.queue[i] = this.queue[i + 1];
        }
        delete this.queue[--this.rear];
        return;
    }
    showQueue() {
        if (this.front === this.rear) {
            console.log("Queue is empty");
            return;
        }
        for (let i = this.front; i < this.rear; i++) {
            console.log(this.queue[i]);
        }
    }
    next() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        return this.queue[this.front];
    }
    isEmpty() {
        return this.front === this.rear;
    }
}


const queue = new Queue();
queue.enqueue("Task one");
queue.enqueue("Task two");
queue.enqueue("Task three");
queue.showQueue()
queue.enqueue();
queue.showQueue()
console.log(queue.next())
console.log(queue);
