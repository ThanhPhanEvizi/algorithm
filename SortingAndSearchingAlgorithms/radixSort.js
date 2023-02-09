const radixSort=(arr)=>{
    const numberMax = Math.max(...arr);
    const newArr =[]
        for(let i=0;i<=9;i++){
            newArr.push([]);
        }
    
    const lengthArr = arr.length
    
    let count=1;
    
    while((Math.floor(numberMax/count))){
        console.log("----------------------")
        console.log("Arr:",arr)
        while(arr.length>0){
            const value = (Math.floor(arr[0]/count)%10)
            newArr[value]=[...newArr[value],arr[0]]
            arr.shift();
        }
        for(let i=0; i<newArr.length;i++){
            console.log("i:",i,':',newArr[i])
        }
        for(let i=0; i<=9; i++){
            arr.push(...newArr[i])
            newArr[i]=[]
        }
        count*=10;
        console.log("New arr:",arr)
    }
    return arr;
}

let arr =[1556, 4, 3556, 593, 29, 86, 7]
const newArr = radixSort(arr)

console.log("Result:",newArr)