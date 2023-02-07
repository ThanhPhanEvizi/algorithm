const arr =[5, 1, 4, 2, 8,3,15,12,11]

function swap(arr, x, y)
{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp
}

for (let i =1;i<arr.length;i++){
    let index_key = i;
    console.log("----------------")
    console.log("index_key:",index_key,', value:',arr[index_key])
    console.log("arr:",arr)
    for(j=i-1;j>=0;j--){
        if(arr[j]>arr[index_key]){
            swap(arr,index_key,j); 
            console.log("index ",index_key,'swap',j,'',arr)
            index_key=j
            
        }
    }
}

console.log("swapped:",arr)