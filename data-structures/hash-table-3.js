const HASH_TABLE_SIZE = 1000;
function hash(str) {
    let hash = 0;
    for (let charIndex = 0; charIndex < str.length; charIndex++) {
        hash = (hash * 31 + str.charCodeAt(charIndex)) % HASH_TABLE_SIZE;
    }
    return hash;
}

const hashTable = new Array(HASH_TABLE_SIZE).fill(null);

function add(key, value) {
    let index = hash(key);
    let originalIndex = index;
    let i = 1;
    while (hashTable[index] !== null && hashTable[index].key !== key) {
        index = (originalIndex + i) % HASH_TABLE_SIZE;
        i++;
    }
    hashTable[index] = { key, value };
}

function get(key) {
    let index = hash(key);
    let originalIndex = index;
    let i = 1;
    while (hashTable[index] !== null) {
        if (hashTable[index].key === key) {
            return hashTable[index].value;
        }
        index = (originalIndex + i) % HASH_TABLE_SIZE;
        i++;
    }
    return null;
}
