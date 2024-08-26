let arr = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    } else {
        arr.push(100 - i);
    }
}

function bubbleSort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}

bubbleSort(arr);
