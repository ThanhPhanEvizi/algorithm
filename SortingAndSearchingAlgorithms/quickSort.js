const arr =[5, 1, 4, 2, 8, 3, 15, 12, 11]

const quickSort = (arr)=>{
    const newArr =[]
    console.log("-----------Array in progress:",arr)
    if(arr.length===1){
        return [arr[0]]
    }
    if(arr.length===0){
        return []
    }
    let right=[]
    let left=[]
    const pivot = arr[arr.length-1]
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]>=pivot){
            right.push(arr[i])
            continue
        }
        left.push(arr[i])
    }
    const right_a=[pivot,...right]
    console.log("left:",left)
    console.log("right:",right_a);
    newArr.push(...quickSort(left))
    newArr.push(...quickSort(right_a))
    return newArr;
}
const newArr =quickSort(arr)
console.log("mer:",newArr)




