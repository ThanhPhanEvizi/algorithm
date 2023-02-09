const findMissingElement = (arr, min, max) => {
    let i = 0;
    let j = arr.length - 1;
    index_min = -1;
    index_max = -1;
    const newArr = []
    if (!arr.length) {
        for (let i = min + 1; i < max; i++) {
            newArr.push(i)
        }
        return newArr
    }
    arr.sort(function (a, b) {
        return a - b;
    });
    while (true) {
        if (arr[i] >= min && index_min === -1) {
            index_min = i
        } else {
            i++;
        }
        if (arr[j] <= max && index_max === -1) {
            index_max = j;
        } else {
            j--;
        }
        if (i === arr.length || j === 0) {
            break;
        }
    }
    if (index_min === index_max) {
        for (let i = min + 1; i < max; i++) {
            if (arr[index_max] != i) {
                newArr.push(i);
            }
        }
        return newArr
    }

    if (index_min === -1 || index_max === -1) {
        for (let i = min + 1; i < max; i++) {
            newArr.push(i)
        }
        return newArr
    }
    let value = min + 1;
    for (let i = index_min; i < index_max; i++) {
        while (true) {
            if (arr[i + 1] - value >= 1) {
                if (value !== arr[i]) {
                    newArr.push(value);
                }
                value++;
            } else {
                break;
            }
        }
    }
    const arrLength = newArr.length - 1
    for (let i = newArr[arrLength] + 2; i < max; i++) { //newArr[arrLength] is value current and newArr[arrLength+1] is value of array
        newArr.push(i)
    }
    return newArr
}

// const arr = [1, 14, 11, 51, 15]
// const min =50
// const max = 55
// const arr = [1, 14, 16, 19, 21, 24, 28, 34]
// const min =17
// const max = 30

// const arr =[40,12,52,11]
// // const arr = []
// const min = 30;
// const max= 50;
//--------------------------
// const arr = [40,55,60,70]
// const min =30
// const max = 80
//--------------------------
// const arr = [30,55,60,80]
// const min =30
// const max = 80
//--------------------------
// const arr = []
// const min =30
// const max = 80
//--------------------------
const arr = [1, 4, 8, 3]
const min = 10
const max = 20

console.log("Find Missing Element of range ", min, 'to', max, 'in:', arr)
console.log(findMissingElement(arr, min, max))