const arr1 =[10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60];
const arr = [0, 1, 15, 25, 6, 7, 30, 40, 50]
let firstIndex = 0;
let lastIndex = 0;
let isSort =true;
let isFirstIndex = false;
let numberHook;
let firstValue = arr1[firstIndex]
// for(let i = 0; i < arr.length-1; i++){
//     if (isSort===false){
//         if(arr[i]>arr[lastIndex]){
//             lastIndex = i;
//         }
//     }
//     if(arr[i]<arr[i+1]){
//         if(isFirstIndex){
//             continue;
//         }   
//         else{
//            if(arr[firstIndex]<arr[i+1]){
//             isSort=true;
//             lastIndex=i+1;  
//            }     
//            else{
//             continue;
//            }
//         }
//     }else{
//         if(numberHook === undefined){
//             numberHook=arr[i+1];
//         }
//         if(numberHook < arr[firstIndex]){
//             numberHook= arr[firstIndex]
//         }
//         if(isFirstIndex===true){
//             lastIndex=i+1;
//             numberHook=arr[i+1];
//         }else{
//             for(let j=i;j>=0;j--){
//                 if(arr[i+1]>arr[j]){
//                     firstIndex=j+1;
//                     break;
//                 }
//             }
//             isFirstIndex=true;
//         }
//         isSort=false;
//     }
// }

for(let i=0; i<=arr1.length-1; i++){
    console.log("fristIndex:",firstIndex,':',i)
    if(arr1[i]<firstValue){
        firstIndex=i;
        firstValue=arr1[i]; 
        continue
    }
    if(arr1[i]<arr1[i+1]){
        continue;
    }
    for(let j=i;j>=0;j--){
        console.log("arr1:",arr1[j],':',arr1[i+1],':',arr1[firstIndex])
        if(arr1[j]>arr1[i+1]){
            firstIndex = j;
        }
    }

}

console.log("index:",firstIndex,':',lastIndex-1);
