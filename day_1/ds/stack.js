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

console.log(stack.isEmpty()); // true
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.isEmpty()); // false
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
