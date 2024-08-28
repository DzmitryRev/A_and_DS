class TestLinkedList extends LinkedList {
    straightTraversal() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    reverseTraversal() {
        this.reverseTraversalCB(this.head, console.log);
    }
    reverseTraversalCB(node, cb) {
        if (node) {
            this.reverseTraversalCB(node.next, cb);
            cb(node.value);
        }
    }
}
