const arrA = [1, 2, 2, 1]
const arrB = [3, 3, 3, 4]

arrA.sort(function (a, b) {
    return a - b
})
arrB.sort(function (a, b) {
    return b - a
})

console.log("arrA:", arrA);
console.log("arrB:", arrB);
for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] + arrB[i] < k) {
        return false
    }
}

return true;