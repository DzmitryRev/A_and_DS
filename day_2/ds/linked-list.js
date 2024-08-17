// class LinkedListNode<T> {
//     value: T;
//     next: LinkedListNode<T> | null;
//     constructor(value: T, next: LinkedListNode<T> | null) {
//         this.value = value;
//         this.next = next;
//     }
// }

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    shift() {
        if (!this.head) {
            return null;
        }
        const deletedHead = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }
    unshift(value) {
        let newNode = new LinkedListNode(value, this.head);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.head = newNode;
        return this;
    }
    push(value) {
        let newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    pop() {
        if (!this.tail) {
            return null;
        }
        let deletedTail = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deletedTail;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return deletedTail;
    }
    deleteMany(value) {
        if (!this.head) {
            return null;
        }
        let deletedNode = null;
        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }
        let currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        if (this.tail && this.tail.value === value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }
    findFirst(value) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (this.head) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
    toArray() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}
