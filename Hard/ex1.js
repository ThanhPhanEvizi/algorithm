const arr = [2, 7, 5, 3, 0, 8, 1]

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            count++;
        }
    }
    arr[i] = count;
}

console.log("arr:", arr)