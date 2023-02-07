const arr =[5, 1, 4, 2, 8]

function swap(arr, x, y)
{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp
}

for(let i = 0; i < arr.length-1; i++){
    for(let j = 0; j < arr.length-i-1; j++){
        if(arr[j]>arr[j+1]){
            swap(arr,j,j+1)
        }
    }
}

console.log("arr:",arr)