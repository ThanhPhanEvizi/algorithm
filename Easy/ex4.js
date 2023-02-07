function swap(arr, x, y)
{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp
}
const arr  = [ 10, 90, 49, 2, 1, 5, 23]
//Cach 1
// arr.sort(function(a, b) {
//     return b-a;
// });

// for(let i = 0; i < arr.length-1; i+=2){
//     swap(arr,i,i+1)
// }

// Cach 2

for(let i = 0; i < arr.length; i++){
    if(i>0 && arr[i]<arr[i-1] && arr[i]>arr[i+1])
    {
        swap(arr,i+1,i)
    }
    if(i===arr.length-1 &&arr[i]>arr[i-1] && arr[i-1]>arr[i-2]){
        swap(arr,i-1,i)
    }
}
console.log("array:",arr)


 
