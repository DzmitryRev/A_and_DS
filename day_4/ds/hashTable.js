import LinkedList from "../../day_2/ds/linked-list";

const HASH_TABLE_SIZE = 32;

class HashTable {
    constructor(size = HASH_TABLE_SIZE) {
        this.buckets = Array(size)
            .fill(null)
            .map(() => new LinkedList());
        this.keys = {};
    }

    // Хеш функция - принимает ключ - возвращает номер в массиве
    hash(key) {
        const hash = Array.from(key).reduce(
            (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
            0
        );
        return hash % this.buckets.length;
    }

    // Принимает ключ и значение
    // 1. Хеширует ключ;
    // 2. Сохраняет хешировнный ключ в объект keys (ключ : хешированный ключ)
    // 3. В buckets ищет linked list под ключом hashedKey, если не находит помещает в linked list значение, если находит - изменяет.
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
    // Принимает ключ
    // 1. В buckets ищет linked list под хешированным ключом;
    // 2. Ищет в данном linked list требуемое значение и взращает его, иначе undefined.
    get(key) {
        const bucketLinkedList = this.buckets[this.hash(key)];
        const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

        return node ? node.value.value : undefined;
    }
    // Принимает ключ
    // 1. Удаляет ключ из массива keys;
    // 2. В buckets ищет linked list под хешированным ключом;
    // 3. Ищет в данном linked list требуемое значение и удаляет его.
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
