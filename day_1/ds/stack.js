class Stack {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return !this.items.length;
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}

let stack = new Stack();
