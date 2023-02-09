const arr = [1, 0, 3, 2]

function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp
}

const isSwapAdjacentAllowed = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - arr[i + 1])
    }

}

console.log("Result:", isSwapAdjacentAllowed(arr))