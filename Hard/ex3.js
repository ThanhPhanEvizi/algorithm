const arr = [10, 100, 105, 98, 99, 101, 19]

arr.sort(function (a, b) {
    return a - b
})

console.log("arr:", arr)

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
        count++;
    }
}

console.log("count:", count)