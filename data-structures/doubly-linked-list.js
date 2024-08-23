class DoublyLinkedListNode {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(value) {
        let newNode = new DoublyLinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    remove(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        let currentNode = null;

        while (currentNode) {
            if (currentNode.value === value) {
                deletedNode = currentNode;
                if (deletedNode === this.head) {
                    this.head = deletedNode.next;
                    if (this.head) {
                        this.head.previous = null;
                    }
                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deletedNode === this.tail) {
                    this.tail = deletedNode.previous;
                    this.tail.next = null;
                } else {
                    const previousNode = deletedNode.previous;
                    const nextNode = deletedNode.next;

                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                }
            }

            currentNode = currentNode.next;
        }

        return deletedNode;
    }

    travers() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = this.head.next;
        }
    }
    reverseTraversal() {
        let currentNode = this.tail;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.prev;
        }
    }
}
