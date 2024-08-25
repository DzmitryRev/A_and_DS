let arr = [];

for (let i = 0; i <= 100; i++) {
    arr.push(i);
}

function binarySearch(arr, value) {
    // 1. value = 59;
    // 1.2. value = 101;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        // 7.2. break;
        let pivot = left + Math.floor((right - left) / 2);
        // 1. 0 + (100 - 0 / 2) = 50;
        // 2. 51 + (100 - 51 / 2) = 51 + 24 = 75;
        // 3. 51 + (74 - 51 / 2) = 51 + 11 = 62;
        // 4. 51 + (62 - 51 / 2) = 51 + 5 = 57;
        // 5. 58 + (62 - 58 / 2) = 58 + 2 = 60;
        // 6. 58 + (60 - 58 / 2) = 58 + 1 = 59;
        // 1.2. 0 + (100 - 0 / 2) = 50;
        // 2.2. 51 + (100 - 51 / 2) = 75;
        // 3.2. 76 + (100 - 76 / 2) = 88;
        // 4.2. 89 + (100 - 89 / 2) = 94;
        // 5.2. 95 + (100 - 95 / 2) = 97;
        // 6.2. 98 + (100 - 98 / 2) = 99;
        // 7.2. 100 + (100 - 100 / 2) = 100;
        if (value === arr[pivot]) return pivot;
        // 1. false;
        // 2. false;
        // 3. false;
        // 4. false;
        // 5. false;
        // 6. true;
        // 1.2. false;
        // 2.2. false;
        // 3.2. false;
        // 4.2. false;
        // 5.2. false;
        // 6.2. false;
        // 7.2. false;
        if (value < arr[pivot]) {
            // 1. value < 50 ? ==> false;
            // 2. value < 75 ? ==> true;
            // 3. value < 62 ? ==> true;
            // 4. value < 57 ? ==> false;
            // 5. value < 60 ? ==> true;
            // 1.2. value < 50 ? ==> false;
            // 2.2. value < 75 ? ==> false;
            // 3.2. value < 88 ? ==> false;
            // 4.2. value < 94 ? ==> false;
            // 5.2. value < 97 ? ==> false;
            // 6.2. value < 99 ? ==> false;
            // 7.2. value < 100 ? ==> false;
            right = pivot - 1;
            // 2. right = 74;
            // 3. right = 62;
            // 5. right = 60;
        } else {
            // 1. true;
            // 4. true;
            // 1.2. true;
            // 2.2. true;
            // 3.2. true;
            // 4.2. true;
            // 5.2. true;
            // 6.2. true;
            // 7.2. true;
            left = pivot + 1;
            // 1. left = 51;
            // 4. left = 58;
            // 1.2. left = 51;
            // 2.2. left = 76;
            // 3.2. left = 89;
            // 4.2. left = 95;
            // 5.2. left = 98;
            // 6.2. left = 100;
            // 7.2. left = 101;
        }
    }
    return -1;
    // 7.2. return -1 (element not found);
}

for (let i = -40; i <= 140; i++) {
    let result = binarySearch(arr, i);
    console.log(result);
}
