function fibonacci(length) {
    let arr = [0, 1, 1];
    for (let i = 3; i < length; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return length > 2 ? arr : arr.slice(0, length);
}
