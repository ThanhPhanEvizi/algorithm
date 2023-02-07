const countingSort = (arr)=>{
    const max =Math.max(...arr)
    const arrayIndex = []
    let index = 0;
    for(let i=0;i<=max;i++){
        arrayIndex.push(0);
    }
    for(let i=0;i<=max;i++){
        for(let j=0;j<arr.length;j++){
            if(i===arr[j]){
                arrayIndex[i]++;
            }
        }
    }
    console.log("arrayIndex: ", arrayIndex)
    for(let i=0;i<=max;i++){
        for(let j=0;j<arrayIndex[i];j++){
            arr[index]=i;
            index++;
        }
    }
    return arr;
}

const arr = [2, 1, 1, 0, 2, 5, 4, 0, 2, 8, 7, 7, 9, 2, 0, 1, 9]
console.log("array:",countingSort(arr))

// [1, 3, 2, 8, 5, 1, 5, 1, 2, 7]
// k=8;
// 	[0,3,2,1,0,2,0,1,1]
// i=10=>0  0  0  0  0  0  0  0  0  0
// i=  9=>0  0  0  0  0  0  0  0  7  0
// i=  8=>0  0  0  2  0  0  0  0  7  0
// i=  7=>1  0  0  2  0  0  0  0  7  0
// i=  6=>1  0  0  2  0  0  5  0  7  0
// i=  5=>1  1  0  2  0  0  5  0  7  0
// i=  4=>1  1  0  2  0  0  5  5  7  0
// i=  3=>1  1  0  2  0  0  5  5  7  8
// i=  2=>1  1  0  2  2  0  5  5  7  8
// i=  1=>1  1  0  2  2  3  5  5  7  8
// i=  0=>1  1  1  2  2  3  5  5  7  8