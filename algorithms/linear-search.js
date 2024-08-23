let arr = [9, 1, 8, 2, 7, 3, 6, 4, 5];

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return null;
}

function linearSearch2(arr, value) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) result.push(i);
    }
    return result;
}
