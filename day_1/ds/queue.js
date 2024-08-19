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
