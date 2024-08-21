import LinkedList from "../../day_2/ds/linked-list";

const HASH_TABLE_SIZE = 32;

class HashTable {
    constructor(size = HASH_TABLE_SIZE) {
        this.buckets = Array(size)
            .fill(null)
            .map(() => new LinkedList());
        this.keys = {};
    }

    hash(key) {
        const hash = Array.from(key).reduce(
            (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
            0
        );
        return hash % this.buckets.length;
    }

    set(key, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });
        if (!node) {
            bucketLinkedList.append({ key, value });
        } else {
            node.value.value = value;
        }
    }
    get(key) {
        const bucketLinkedList = this.buckets[this.hash(key)];
        const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

        return node ? node.value.value : undefined;
    }
    delete(key) {
        const keyHash = this.hash(key);
        delete this.keys[key];
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

        if (node) {
            return bucketLinkedList.delete(node.value);
        }

        return null;
    }
}
