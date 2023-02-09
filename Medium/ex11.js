const arrA = [2, 1, 3]
const arrB = [7, 8, 9]
k = 10;
const isSumOfEveryGreaterOrEqualToK = (arrA, arrB, k) => {
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
}

console.log(isSumOfEveryGreaterOrEqualToK(arrA, arrB, k))