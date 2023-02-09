//-----------------------------
const arrA = [14, 17, 19]
const arrB = [13, 10, 24]
const arrC = [25, 30, 8]
//-----------------------------
// const arrA = [15, 12, 18, 9]
// const arrB = [10, 17, 13, 8]
// const arrC = [4, 16, 11, 5]
//-----------------------------
// const arrA = [5, 2, 8]
// const arrB = [10, 7, 12]
// const arrC = [9, 14, 6]

// const smallestDifferenceTriplet = (arrA, arrB, arrC) => {
//     const newArr = [...arrA, ...arrB, ...arrC]
//     newArr.sort(function (a, b) {
//         return a - b
//     })
//     let min_value = newArr[2] - newArr[0];
//     let index_min = 0;
//     for (let i = 0; i < newArr.length - 2; i++) {
//         console.log("------:", newArr[i + 2] - newArr[i], ':', min_value)
//         if (newArr[i + 2] - newArr[i] < min_value) {
//             min_value = newArr[i + 2] - newArr[i]
//             index_min = i;
//         }

//     }
//     return newArr.slice(index_min, index_min + 3)

// }

const smallestDifferenceTriplet = (arrA, arrB, arrC) => {
    let i = 0;
    let j = 0;
    let k = 0;
    let min_value = Math.max(arrA[i], arrB[j], arrC[k]) - Math.min(arrA[i], arrB[j], arrC[k])
    let index_a = 0;
    let index_b = 0;
    let index_c = 0;
    for (let i = 0; i < arrA.length; i++) {
        j = 0;
        k = 0;
        console.log("-------------------:", index_a, ':', index_b, ':', index_c)
        while (j < arrA.length && k < arrA.length) {
            value = Math.max(arrA[i], arrB[j], arrC[k]) - Math.min(arrA[i], arrB[j], arrC[k])
            if (value <= min_value) {
                if (value === min_value) {
                    let total_value_min_index = arrA[index_a] + arrB[index_b] + arrC[index_c];
                    let total_new_value = arrA[i] + arrB[j] + arrC[j];
                    if (total_new_value < total_value_min_index) {
                        index_a = i;
                        index_b = j;
                        index_c = k;
                    }

                } else {
                    min_value = value;
                    index_a = i;
                    index_b = j;
                    index_c = k;
                    console.log("Swap:", min_value, ':', i, ':', j, ':', k)
                }

            }
            console.log("", i, ':', j, ':', k)
            if (j !== arrB.length - 1) {
                j++
            } else {
                k++;
                j = 0;
            }


        }
    }

    return [arrA[index_a], arrB[index_b], arrC[index_c]];

}

console.log("Result:", smallestDifferenceTriplet(arrA, arrB, arrC))