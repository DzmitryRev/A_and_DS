// Search in sorted array

let array = [];

for (let i = 1; i <= 100; i++) {
    array.push(i);
}

console.log(array);

function jumpSearch(array, value) {
    let jumpSize = Math.floor(Math.sqrt(array.length));
    if (array[array.length - 1] < value || array[0] > value) return -1;
    let blockStart = 0;
    let blockEnd = jumpSize;
    while (array[blockEnd] <= value) {
        blockStart = blockEnd;
        blockEnd += jumpSize;
        if (blockStart > array.length) {
            return -1;
        }
    }

    for (let i = blockStart; i <= blockEnd; i++) {
        if (array[i] === value) return i;
    }
    return -1;
}
