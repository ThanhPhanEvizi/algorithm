const arr = [
    [0, 4],
    [5, 2],
]
const newArray = []
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    for (let j = 0; j < arr[i].length; j++) {
        newArray.push(arr[i][j])
    }
}
newArray.sort(function (a, b) {
    return a - b
})
let length = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = newArray[length]
        length++;
    }
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}