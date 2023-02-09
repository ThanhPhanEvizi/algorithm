const arr = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200];
const k = 4;

const minimized = (arr, k) => {
    arr.sort(function (a, b) {
        return a - b
    })
    const newArr = arr.slice(0, k);
    const valueMin = newArr[k - 1] - newArr[0];
    return valueMin
}

console.log("Value:", minimized(arr, k));