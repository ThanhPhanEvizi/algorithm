const arr =[5, 1, 4, 2, 8,3,15,12,11]

function swap(arr, x, y)
{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp
}

let index_min;

for(let i = 0; i < arr.length-1; i++){
    index_min= i;
    for(let j =i;j<arr.length;j++){
        if(arr[j]<arr[index_min]){
            index_min= j;

        }
    }
    swap(arr,i,index_min)
    console.log("i:",i,'swap',index_min,':',arr)
}
