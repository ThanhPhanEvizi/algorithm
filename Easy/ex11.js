const arr = [54, 724523015759812365462, 870112101220845, 8723]

const transArrNumberToArrString = () => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toString()
    }
    return arr;
}

function comp(left, right) {
    if (left.length == right.length)
        return left < right;
    else
        return left.length - right.length;
}

const newArr = transArrNumberToArrString(arr);
newArr.sort(comp);
console.log("newArr:", newArr);