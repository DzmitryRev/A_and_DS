function hash(str) {
    let hash = 0;
    for (let charIndex = 0; charIndex < str.length; charIndex++) {
        hash += str.charCodeAt(charIndex) * 7 ** charIndex;
    }
    return hash;
}

let data = [];

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
    append(value) {
        let newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    deleteFirst(value) {
        if (!this.head) {
            return null;
        }
        let deletedNode = null;

        if (this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
            return deletedNode;
        }

        let currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                    if (this.tail.value === value) {
                        this.tail = currentNode;
                    }
                    return deletedNode;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        return deletedNode;
    }

    find(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
    toArray() {
        let array = [];
        let currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

function add(key, value) {
    let hashedKey = hash(key);
    let linkedList = data[hashedKey];
    if (!linkedList) {
        data[hashedKey] = new LinkedList();
        linkedList = data[hashedKey];
    }
    let node = linkedList.find(value);
    if (!node) {
        linkedList.append(value);
    }
}

function remove(key, value) {
    let hashedKey = hash(key);
    let linkedList = data[hashedKey];
    if (!linkedList) return;
    linkedList.deleteFirst(value);
}

function get(key, value) {
    let hashedKey = hash(key);
    let linkedList = data[hashedKey];
    if (!linkedList) return null;
    return linkedList.find(value);
}
