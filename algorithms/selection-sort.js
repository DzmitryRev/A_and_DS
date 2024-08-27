let arr = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    } else {
        arr.push(100 - i);
    }
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

selectionSort(arr);
