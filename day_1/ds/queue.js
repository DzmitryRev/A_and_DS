class Queue {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return !this.items.length;
    }
    push(item) {
        this.items.push(item);
    }
    shift() {
        return this.items.shift();
    }
}

let queue = new Queue();
console.log(queue.isEmpty()); // true
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.isEmpty()); // false
console.log(queue.shift()); // 1
console.log(queue.shift()); // 2
console.log(queue.shift()); // 3
