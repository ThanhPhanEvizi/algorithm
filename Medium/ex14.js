const arr = [10, 40, 20]

const newArr = [...arr].sort(function (a, b) {
    return a - b
});

for (let i = 0; i < newArr.length; i++) {
    index = arr.indexOf(newArr[i]);
    newArr[i] = index
}
console.log("Result: " + newArr)